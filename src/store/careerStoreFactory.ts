import { create } from 'zustand'
import type { CharacterState, GameCard, StatKey, CareerEndingType, TacticalApproachId } from '../engine/types'
import type { RollTier } from '../engine/rng'
import { loadCharacter, saveCharacter, clearCharacter } from '../engine/saveEngine'
import {
  createCharacter,
  createRandomDestinyCharacter,
  type CreationChoices,
} from '../engine/characterFactory'
import {
  pickNextCard,
  resolveChoice,
  resolveFightRound,
  concludeFight,
  resolveDormantPotentialDoor,
  resolveTechniqueDiscovery,
  markCardSeen,
  advanceAfterCard,
  getPendingStyleDiscovery,
  type ResolutionResult,
  type RoundResult,
} from '../engine/cardEngine'
import { CARD_MAP } from '../data/cards'
import { tickCooldowns } from '../engine/techniqueEngine'
import {
  checkPointProgression,
  checkStoryGateProgression,
  checkTitleDefenseProgression,
} from '../engine/progressionEngine'
import { evaluateTrophies } from '../engine/trophyEngine'
import { canRetireVoluntarily, shouldForceEndOfCareer, buildHistoryEntry } from '../engine/careerEndEngine'
import { finalizeYear, startNewYear, type YearSummary } from '../engine/yearEngine'
import { useMetaStore } from './metaStore'

export type GamePhase =
  | 'no-character'
  | 'card'
  | 'resolution'
  | 'technique-discovery'
  | 'year-summary'
  | 'point-allocation'
  | 'game-over'

export interface FightRoundState {
  roundIndex: number
  momentum: number
}

export interface CareerStoreState {
  character: CharacterState | null
  phase: GamePhase
  currentCard: GameCard | null
  lastResolution: ResolutionResult | null
  pendingDiscoveryTechniqueId: string | null
  yearSummary: YearSummary | null
  endingType: CareerEndingType | null
  fightRound: FightRoundState | null
  lastRoundResult: RoundResult | null

  resumeIfAny: () => void
  startCareer: (choices: CreationChoices | 'random') => void
  chooseCardOption: (optionId: string) => void
  chooseTacticalApproach: (approachId: TacticalApproachId, techniqueId?: string, useDormant?: boolean) => void
  acknowledgeRoundResult: () => void
  chooseDormantDoor: (doorId: 'force' | 'negotiate' | 'decline') => void
  chooseTechniqueDiscovery: (choice: 'witness' | 'secret') => void
  acknowledgeResolution: () => void
  confirmYearSummary: () => void
  allocatePoints: (allocation: Partial<Record<StatKey, number>>) => void
  retireNow: () => void
  abandonCareer: () => void
}

interface NextStep {
  phase: GamePhase
  currentCard: GameCard | null
  pendingDiscoveryTechniqueId: string | null
  yearSummary: YearSummary | null
}

function computeNextStep(character: CharacterState): NextStep {
  // La santé à 0 est traitée en amont par endIfDead() : si on arrive ici avec 0,
  // c'est un état incohérent, mais on ne renvoie surtout pas 'game-over' sans
  // endingType — l'écran de fin ne s'afficherait pas et la partie serait bloquée.
  const discoveryId = getPendingStyleDiscovery(character)
  if (discoveryId) {
    character.pendingCardId = null
    return { phase: 'technique-discovery', currentCard: null, pendingDiscoveryTechniqueId: discoveryId, yearSummary: null }
  }

  if (character.eventsRemainingThisYear <= 0) {
    character.pendingCardId = null
    const summary = finalizeYear(character)
    return { phase: 'year-summary', currentCard: null, pendingDiscoveryTechniqueId: null, yearSummary: summary }
  }

  const card = pickNextCard(character)
  if (!card) {
    character.pendingCardId = null
    const summary = finalizeYear(character)
    return { phase: 'year-summary', currentCard: null, pendingDiscoveryTechniqueId: null, yearSummary: summary }
  }
  markCardSeen(character, card)
  character.pendingCardId = card.id
  return { phase: 'card', currentCard: card, pendingDiscoveryTechniqueId: null, yearSummary: null }
}

function processResolution(character: CharacterState, card: GameCard, result: ResolutionResult, tier: RollTier | null) {
  advanceAfterCard(character, card)
  checkPointProgression(character)
  if (tier) checkStoryGateProgression(character, card.id, tier)
  checkTitleDefenseProgression(character)

  const metaStore = useMetaStore.getState()
  const derivedTrophies = evaluateTrophies(character, new Set(metaStore.unlockedTrophyIds))
  metaStore.unlockTrophies([...result.newlyUnlockedTrophyIds, ...derivedTrophies])
}

export function createCareerStore(isDestiny: boolean) {
  // React.StrictMode invoke deux fois les effets au montage en développement ;
  // resumeIfAny() a des effets de bord réels (elle peut clore l'année et sauver),
  // donc on ne la laisse s'exécuter qu'une fois par instance de store.
  let hasResumed = false

  function endCareer(character: CharacterState, endingType: CareerEndingType, set: (partial: Partial<CareerStoreState>) => void) {
    character.isRetired = true
    character.endingType = endingType
    const metaStore = useMetaStore.getState()
    const entry = buildHistoryEntry(character, endingType, metaStore.unlockedTrophyIds.length)
    metaStore.addHistoryEntry(entry)
    metaStore.addCurrency(entry.currencyEarned)
    clearCharacter(isDestiny)
    set({
      character: { ...character },
      phase: 'game-over',
      endingType,
      currentCard: null,
      yearSummary: null,
      lastResolution: null,
      pendingDiscoveryTechniqueId: null,
      fightRound: null,
      lastRoundResult: null,
    })
  }

  /**
   * Clôt la carrière si le boxeur ne tient plus debout. Renvoie true si c'est le
   * cas, auquel cas l'appelant ne doit plus rien faire : la partie est terminée.
   */
  function endIfDead(character: CharacterState, set: (partial: Partial<CareerStoreState>) => void): boolean {
    if (character.health > 0) return false
    endCareer(character, 'tragic', set)
    return true
  }

  return create<CareerStoreState>((set, get) => ({
    character: null,
    phase: 'no-character',
    currentCard: null,
    lastResolution: null,
    pendingDiscoveryTechniqueId: null,
    yearSummary: null,
    endingType: null,
    fightRound: null,
    lastRoundResult: null,

    resumeIfAny: () => {
      if (hasResumed) return
      hasResumed = true
      const character = loadCharacter(isDestiny)
      if (!character || character.isRetired) {
        set({ character: null, phase: 'no-character' })
        return
      }
      // Une sauvegarde d'avant le correctif peut contenir une santé à 0 : on la
      // clôt proprement au lieu de rouvrir un écran bloqué.
      if (endIfDead(character, set)) return
      if (character.pendingCardId && CARD_MAP[character.pendingCardId]) {
        set({ character, phase: 'card', currentCard: CARD_MAP[character.pendingCardId], fightRound: null, lastRoundResult: null })
        return
      }
      const next = computeNextStep(character)
      saveCharacter(character, isDestiny)
      set({ character, fightRound: null, lastRoundResult: null, ...next })
    },

    startCareer: (choices) => {
      const meta = useMetaStore.getState()
      const equipped = { perkIds: meta.equippedPerkIds, statChoices: meta.equippedPerkStatChoices }
      const character =
        choices === 'random' ? createRandomDestinyCharacter(equipped) : createCharacter(choices, equipped)
      const next = computeNextStep(character)
      saveCharacter(character, isDestiny)
      set({ character, endingType: null, lastResolution: null, fightRound: null, lastRoundResult: null, ...next })
    },

    chooseCardOption: (optionId) => {
      const { character, currentCard } = get()
      if (!character || !currentCard) return
      let choices
      if (currentCard.type === 'life-moment' || currentCard.type === 'lineage-exclusive') choices = currentCard.choices
      else if (currentCard.type === 'training') choices = currentCard.approaches
      else return
      const choice = choices.find((c) => c.id === optionId)
      if (!choice) return
      tickCooldowns(character)
      const result = resolveChoice(character, choice.statTested, choice.difficulty, choice.outcomes)
      processResolution(character, currentCard, result, result.tier)
      saveCharacter(character, isDestiny)
      set({ character: { ...character }, lastResolution: result, phase: 'resolution' })
    },

    chooseTacticalApproach: (approachId, techniqueId, useDormant) => {
      const { character, currentCard, fightRound } = get()
      if (!character || !currentCard || currentCard.type !== 'fight') return
      const round = fightRound ?? { roundIndex: 0, momentum: 0 }
      const wasUnleashed = useDormant && character.dormantPotential.mode === 'unleashed'
      const defensesBefore = character.titleDefenses

      tickCooldowns(character)
      const result = resolveFightRound(character, currentCard, approachId, round.momentum, round.roundIndex, techniqueId, useDormant)

      if (result.fightOver && result.outcomeKey) {
        const finalResult = concludeFight(character, currentCard, result.outcomeKey)
        processResolution(character, currentCard, finalResult, finalResult.tier)
        if (wasUnleashed && character.titleDefenses > defensesBefore) {
          useMetaStore.getState().unlockTrophies(['mark-sacrifice'])
        }
        saveCharacter(character, isDestiny)
        set({
          character: { ...character },
          lastResolution: finalResult,
          phase: 'resolution',
          fightRound: null,
          lastRoundResult: null,
        })
        return
      }

      saveCharacter(character, isDestiny)
      set({
        character: { ...character },
        fightRound: { roundIndex: round.roundIndex + 1, momentum: result.momentum },
        lastRoundResult: result,
      })
    },

    acknowledgeRoundResult: () => {
      set({ lastRoundResult: null })
    },

    chooseDormantDoor: (doorId) => {
      const { character, currentCard } = get()
      if (!character || !currentCard || currentCard.type !== 'dormant-potential') return
      tickCooldowns(character)
      const { chips, tier } = resolveDormantPotentialDoor(character, doorId)
      processResolution(character, currentCard, { tier: tier ?? 'success', text: '', chips, newlyUnlockedTrophyIds: [], newlyUnlockedTechniqueIds: [] }, tier)
      const doorText = currentCard.doors.find((d) => d.id === doorId)?.resultText ?? ''
      saveCharacter(character, isDestiny)
      set({
        character: { ...character },
        lastResolution: { tier: tier ?? 'success', text: doorText, chips, newlyUnlockedTrophyIds: [], newlyUnlockedTechniqueIds: [] },
        phase: 'resolution',
      })
    },

    chooseTechniqueDiscovery: (choice) => {
      const { character, pendingDiscoveryTechniqueId } = get()
      if (!character || !pendingDiscoveryTechniqueId) return
      const { chips, text } = resolveTechniqueDiscovery(character, pendingDiscoveryTechniqueId, choice)
      saveCharacter(character, isDestiny)
      set({
        character: { ...character },
        lastResolution: { tier: 'success', text, chips, newlyUnlockedTrophyIds: [], newlyUnlockedTechniqueIds: [pendingDiscoveryTechniqueId] },
        phase: 'resolution',
        pendingDiscoveryTechniqueId: null,
      })
    },

    acknowledgeResolution: () => {
      const { character } = get()
      if (!character) return
      // Le joueur vient de lire le résultat qui l'a mis à terre : la carrière
      // s'arrête ici, sur l'écran de fin tragique.
      if (endIfDead(character, set)) return
      const next = computeNextStep(character)
      saveCharacter(character, isDestiny)
      set({ lastResolution: null, ...next })
    },

    confirmYearSummary: () => {
      const { character } = get()
      if (!character) return
      const forced = shouldForceEndOfCareer(character)
      if (forced) {
        endCareer(character, forced, set)
        return
      }
      set({ phase: 'point-allocation', yearSummary: null })
    },

    allocatePoints: (allocation) => {
      const { character } = get()
      if (!character) return
      const total = Object.values(allocation).reduce((a: number, b) => a + (b ?? 0), 0)
      if (total <= 0 || total > character.pendingPointsToAllocate) return
      for (const [key, val] of Object.entries(allocation)) {
        if (!val) continue
        character.stats[key as StatKey] = Math.min(100, character.stats[key as StatKey] + val)
      }
      character.pendingPointsToAllocate -= total
      startNewYear(character)
      if (endIfDead(character, set)) return
      const next = computeNextStep(character)
      saveCharacter(character, isDestiny)
      set({ character: { ...character }, ...next })
    },

    retireNow: () => {
      const { character } = get()
      if (!character || !canRetireVoluntarily(character)) return
      endCareer(character, 'retirement', set)
    },

    abandonCareer: () => {
      clearCharacter(isDestiny)
      set({
        character: null,
        phase: 'no-character',
        currentCard: null,
        lastResolution: null,
        yearSummary: null,
        pendingDiscoveryTechniqueId: null,
        endingType: null,
        fightRound: null,
        lastRoundResult: null,
      })
    },
  }))
}
