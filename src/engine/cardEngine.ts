import type {
  CharacterState,
  GameCard,
  CardRequirement,
  RollOutcomeSet,
  FightCard,
  StatKey,
  TacticalApproachId,
} from './types'
import { Rng } from './rng'
import { rollAgainstStat, type RollTier } from './rng'
import { RANK_MAP } from '../data/ranks'
import { CARD_MAP, POOL_CARDS, ARC_MAP } from '../data/cards'
import { ARC_TRIGGERS } from '../data/cards/arcTriggers'
import { TECHNIQUE_MAP } from '../data/techniques'
import { STYLE_TECHNIQUES } from '../data/techniques/styleTechniques'
import { FIGHTING_STYLE_MAP } from '../data/fightingStyles'
import { LINEAGE_MAP } from '../data/lineages'
import { applyReward, type RewardChip } from './statEngine'
import { unlockTechnique, engageTechnique, isTechniqueReady, isTechniqueUnlocked } from './techniqueEngine'
import { DORMANT_POTENTIAL } from '../data/dormantPotential'
import { TACTICAL_APPROACHES, matchupModifier } from '../data/tacticalApproaches'
import { ROUND_COMMENTARY } from '../data/roundCommentary'

// Nombre de dernières cartes de pioche à exclure d'un nouveau tirage (voir pickNextCard).
const RECENT_CARDS_WINDOW = 5

export function renderText(character: CharacterState, text: string): string {
  const rival = character.entourage.find((m) => m.role === 'Rival')?.npcName ?? 'ton rival'
  const mentor = character.entourage.find((m) => m.role === 'Mentor')?.npcName ?? 'ton mentor'
  return text
    .replaceAll('{{rival}}', rival)
    .replaceAll('{{mentor}}', mentor)
    .replaceAll('{{name}}', character.name)
}

function cardMeetsRequirement(character: CharacterState, card: GameCard, req: CardRequirement): boolean {
  const order = RANK_MAP[character.rankId]?.order ?? 0
  if (req.minRankOrder !== undefined && order < req.minRankOrder) return false
  if (req.maxRankOrder !== undefined && order > req.maxRankOrder) return false
  if (req.requiredLineageId && character.lineageId !== req.requiredLineageId) return false
  if (req.requiredStyleId && character.styleId !== req.requiredStyleId) return false
  if (req.requiredFlags && !req.requiredFlags.every((f) => character.flags.includes(f))) return false
  if (req.excludedFlags && req.excludedFlags.some((f) => character.flags.includes(f))) return false
  if (req.onceOnly && character.flags.includes(`seen:${card.id}`)) return false
  return true
}

function styleTechniqueDiscovery(character: CharacterState): string | null {
  if (!character.flags.includes('flag-turned-pro')) return null
  const style = FIGHTING_STYLE_MAP[character.styleId]
  if (!style) return null
  const basicId = style.basicTechniqueId
  if (isTechniqueUnlocked(character, basicId)) return null
  if (character.flags.includes(`discovered:${basicId}`)) return null
  return basicId
}

function dormantPotentialNextCardId(character: CharacterState): string | null {
  const dp = character.dormantPotential
  if (!dp.eligible || dp.path !== null) return null
  if (!dp.revealed) {
    if (dp.eventsSinceStart < DORMANT_POTENTIAL.triggerEventCount) return null
    return DORMANT_POTENTIAL.revealCardId
  }
  return DORMANT_POTENTIAL.choiceCardId
}

function pendingLineageExclusiveCardId(character: CharacterState): string | null {
  const lineage = LINEAGE_MAP[character.lineageId]
  if (!lineage || lineage.isAutodidact || !lineage.exclusiveCardId) return null
  if (!character.flags.includes('flag-turned-pro')) return null
  if (character.flags.includes(`seen:${lineage.exclusiveCardId}`)) return null
  return lineage.exclusiveCardId
}

function pendingArcCardId(character: CharacterState): string | null {
  if (!character.currentArc) return null
  const arc = ARC_MAP[character.currentArc.arcId]
  if (!arc) return null
  return arc.cardSequenceIds[character.currentArc.stepIndex] ?? null
}

function checkArcAutoTriggers(character: CharacterState): string | null {
  // Pas de garde "déjà complétée" ici : les conditions sont basées sur le rang, qui
  // n'avance que si la trame a été remportée — un échec permet donc naturellement de retenter.
  for (const trigger of ARC_TRIGGERS) {
    if (trigger.condition(character)) return trigger.arcId
  }
  return null
}

export function startArc(character: CharacterState, arcId: string) {
  const arc = ARC_MAP[arcId]
  if (!arc) return
  character.currentArc = { arcId, stepIndex: 0 }
  if (!character.flags.includes(`arc-started:${arcId}`)) character.flags.push(`arc-started:${arcId}`)
}

function completeArc(character: CharacterState) {
  if (!character.currentArc) return
  const { arcId } = character.currentArc
  if (!character.flags.includes(`arc-completed:${arcId}`)) character.flags.push(`arc-completed:${arcId}`)
  character.currentArc = null
}

/** Choisit la prochaine carte à présenter au joueur. Peut renvoyer null en fin d'année. */
export function pickNextCard(character: CharacterState): GameCard | null {
  if (character.eventsRemainingThisYear <= 0) return null

  const pendingArc = pendingArcCardId(character)
  if (pendingArc) return CARD_MAP[pendingArc] ?? null

  const dormantCardId = dormantPotentialNextCardId(character)
  if (dormantCardId) return CARD_MAP[dormantCardId] ?? null

  const lineageCardId = pendingLineageExclusiveCardId(character)
  if (lineageCardId) return CARD_MAP[lineageCardId] ?? null

  const autoArcId = checkArcAutoTriggers(character)
  if (autoArcId) {
    startArc(character, autoArcId)
    const firstCardId = pendingArcCardId(character)
    if (firstCardId) return CARD_MAP[firstCardId] ?? null
  }

  const eligible = POOL_CARDS.filter((c) => cardMeetsRequirement(character, c, c.requirement))
  if (eligible.length === 0) return null

  // Exclut les cartes vues très récemment pour éviter l'impression de répétition,
  // sauf si le pool éligible est trop réduit pour se le permettre (paliers de fin
  // de carrière notamment) — dans ce cas on retombe sur le pool complet.
  const notRecent = eligible.filter((c) => !character.recentCardIds.includes(c.id))
  const pool = notRecent.length > 0 ? notRecent : eligible

  const rng = new Rng(character.seed)
  const picked = rng.weightedPick(pool, (c) => c.requirement.weight ?? 1)
  character.seed = rng.getState()

  character.recentCardIds.push(picked.id)
  if (character.recentCardIds.length > RECENT_CARDS_WINDOW) character.recentCardIds.shift()

  return picked
}

export interface ResolutionResult {
  tier: RollTier
  text: string
  chips: RewardChip[]
  newlyUnlockedTrophyIds: string[]
  newlyUnlockedTechniqueIds: string[]
  techniqueUsedId?: string
  techniqueSceneText?: string
}

export function finalizeResolution(
  character: CharacterState,
  outcomes: RollOutcomeSet,
  tier: RollTier,
  techniqueId?: string,
): ResolutionResult {
  const outcome = outcomes[
    tier === 'critical-failure'
      ? 'criticalFailure'
      : tier === 'critical-success'
        ? 'criticalSuccess'
        : tier
  ]

  const chips = applyReward(character, outcome.reward)
  const newlyUnlockedTechniqueIds = outcome.reward.unlockTechniqueIds ?? []
  if (tier === 'success' || tier === 'critical-success') character.yearStats.successes += 1
  else character.yearStats.failures += 1

  if (outcome.reward.startArcId) startArc(character, outcome.reward.startArcId)

  let techniqueSceneText: string | undefined
  if (techniqueId) {
    const technique = TECHNIQUE_MAP[techniqueId]
    engageTechnique(character, techniqueId)
    const success = tier === 'success' || tier === 'critical-success'
    techniqueSceneText = success ? technique.successSceneText : technique.failureSceneText
    const usedFlag = `used-success:${technique.id}`
    if (success && !character.flags.includes(usedFlag)) {
      // trophée technique débloqué à la première utilisation réussie
      character.flags.push(usedFlag)
    }
  }

  return {
    tier,
    text: renderText(character, outcome.text),
    chips,
    newlyUnlockedTrophyIds: outcome.reward.unlockTrophyIds ?? [],
    newlyUnlockedTechniqueIds,
    techniqueUsedId: techniqueId,
    techniqueSceneText,
  }
}

export function resolveChoice(character: CharacterState, statTested: StatKey, difficulty: number, outcomes: RollOutcomeSet): ResolutionResult {
  const rng = new Rng(character.seed)
  const { tier } = rollAgainstStat(rng, character.stats[statTested], difficulty)
  character.seed = rng.getState()
  return finalizeResolution(character, outcomes, tier)
}

// ── Combat round par round ─────────────────────────────────────────────

const MOMENTUM_DELTA: Record<RollTier, number> = {
  'critical-failure': -2,
  failure: -1,
  success: 1,
  'critical-success': 2,
}

const ROUND_HEALTH_COST: Record<RollTier, number> = {
  'critical-failure': -8,
  failure: -3,
  success: -1,
  'critical-success': 0,
}

export type FightOutcomeKey = 'koLoss' | 'pointsLoss' | 'pointsWin' | 'koWin'

const OUTCOME_KEY_TO_TIER: Record<FightOutcomeKey, RollTier> = {
  koLoss: 'critical-failure',
  pointsLoss: 'failure',
  pointsWin: 'success',
  koWin: 'critical-success',
}

export interface RoundResult {
  tier: RollTier
  momentum: number
  momentumDelta: number
  chips: RewardChip[]
  text: string
  techniqueSceneText?: string
  fightOver: boolean
  outcomeKey?: FightOutcomeKey
}

/** Résout UN round de combat : approche tactique + technique/Fauve optionnels. */
export function resolveFightRound(
  character: CharacterState,
  card: FightCard,
  approachId: TacticalApproachId,
  currentMomentum: number,
  roundIndex: number,
  techniqueId?: string,
  useDormant?: boolean,
): RoundResult {
  const approach = TACTICAL_APPROACHES[approachId]
  const effectiveDifficulty = card.baseDifficulty + matchupModifier(card.opponentAggression, approachId)

  let bonus = techniqueId ? TECHNIQUE_MAP[techniqueId]?.rollBonus ?? 0 : 0
  let dormantHealthCost = 0
  if (useDormant && character.dormantPotential.mode) {
    bonus +=
      character.dormantPotential.mode === 'mastered'
        ? DORMANT_POTENTIAL.masteredEffect.rollBonus
        : DORMANT_POTENTIAL.unleashedEffect.rollBonus
    if (character.dormantPotential.mode === 'unleashed') {
      dormantHealthCost = DORMANT_POTENTIAL.unleashedEffect.healthCostPerUse
    }
  }

  const rng = new Rng(character.seed)
  const { tier } = rollAgainstStat(rng, character.stats[approach.statTested], effectiveDifficulty, bonus)
  character.seed = rng.getState()

  const chips: RewardChip[] = []

  const fatigueCost = approach.fatigueCost + (tier === 'failure' || tier === 'critical-failure' ? 2 : 0)
  character.fatigue = Math.min(100, character.fatigue + fatigueCost)
  chips.push({ label: 'Fatigue', emoji: '🥱', value: -fatigueCost, positive: false })

  const healthDelta = ROUND_HEALTH_COST[tier]
  if (healthDelta !== 0) {
    character.health = Math.max(0, character.health + healthDelta)
    chips.push({ label: 'Santé', emoji: '❤️', value: healthDelta, positive: healthDelta > 0 })
  }

  if (dormantHealthCost > 0) {
    character.health = Math.max(0, character.health - dormantHealthCost)
    chips.push({ label: `${DORMANT_POTENTIAL.name} (déchaîné)`, emoji: '🐆', value: -dormantHealthCost, positive: false })
  }

  let techniqueSceneText: string | undefined
  if (techniqueId) {
    const technique = TECHNIQUE_MAP[techniqueId]
    engageTechnique(character, techniqueId)
    const success = tier === 'success' || tier === 'critical-success'
    techniqueSceneText = success ? technique.successSceneText : technique.failureSceneText
    const usedFlag = `used-success:${technique.id}`
    if (success && !character.flags.includes(usedFlag)) character.flags.push(usedFlag)
  }

  const momentumDelta = MOMENTUM_DELTA[tier]
  const momentum = currentMomentum + momentumDelta
  const roundsExhausted = roundIndex + 1 >= card.totalRounds
  const koHit = Math.abs(momentum) >= card.koThreshold
  const healthOut = character.health <= 0

  let fightOver = false
  let outcomeKey: FightOutcomeKey | undefined
  if (healthOut) {
    fightOver = true
    outcomeKey = 'koLoss'
  } else if (koHit) {
    fightOver = true
    outcomeKey = momentum > 0 ? 'koWin' : 'koLoss'
  } else if (roundsExhausted) {
    fightOver = true
    outcomeKey = momentum > 0 ? 'pointsWin' : 'pointsLoss'
  }

  const commentaryPool = ROUND_COMMENTARY[approachId][tier]
  const commentaryRng = new Rng(character.seed)
  const commentary = commentaryRng.pick(commentaryPool)
  character.seed = commentaryRng.getState()

  return {
    tier,
    momentum,
    momentumDelta,
    chips,
    text: renderText(character, commentary),
    techniqueSceneText,
    fightOver,
    outcomeKey,
  }
}

/** Applique la résolution finale d'un combat (KO ou décision aux points). */
export function concludeFight(character: CharacterState, card: FightCard, outcomeKey: FightOutcomeKey): ResolutionResult {
  const tier = OUTCOME_KEY_TO_TIER[outcomeKey]
  if (tier === 'success' || tier === 'critical-success') character.fightWinStreak += 1
  else character.fightWinStreak = 0
  if (tier === 'critical-success') character.fightFlawlessStreak += 1
  else character.fightFlawlessStreak = 0
  return finalizeResolution(character, card.outcomes, tier)
}

export function resolveDormantPotentialDoor(character: CharacterState, doorId: 'force' | 'negotiate' | 'decline') {
  const dp = character.dormantPotential
  if (doorId === 'decline') {
    dp.path = 'declined'
    dp.mode = null
    const chips = applyReward(character, { coolness: -15 })
    return { chips, mode: null as 'mastered' | 'unleashed' | null, tier: null as RollTier | null }
  }
  dp.path = doorId === 'force' ? 'forced' : 'negotiated'
  const rng = new Rng(character.seed)
  const statUsed = doorId === 'force' ? character.stats.puissance : character.stats.mental
  const { tier } = rollAgainstStat(rng, statUsed, 55)
  character.seed = rng.getState()
  const mastered = tier === 'success' || tier === 'critical-success'
  dp.mode = mastered ? 'mastered' : 'unleashed'
  const chips = mastered ? applyReward(character, { stats: DORMANT_POTENTIAL.masteredEffect.statBonus }) : []
  return { chips, mode: dp.mode, tier }
}

export function resolveTechniqueDiscovery(character: CharacterState, techniqueId: string, choice: 'witness' | 'secret') {
  const technique = TECHNIQUE_MAP[techniqueId]
  const variant = technique?.publicAttemptVariant
  const reward = variant ? (choice === 'witness' ? variant.witnessRewards : variant.secretRewards) : {}
  const chips = applyReward(character, reward)
  markTechniqueDiscovered(character, techniqueId, true)
  return { chips, text: variant ? (choice === 'witness' ? variant.witnessGainText : variant.secretGainText) : '' }
}

export function markCardSeen(character: CharacterState, card: GameCard) {
  if (card.setFlagsOnShow) {
    for (const f of card.setFlagsOnShow) {
      if (!character.flags.includes(f)) character.flags.push(f)
    }
  }
  const seenFlag = `seen:${card.id}`
  if (!character.flags.includes(seenFlag)) character.flags.push(seenFlag)
}

const DORMANT_SPECIAL_CARD_IDS = new Set([DORMANT_POTENTIAL.revealCardId, DORMANT_POTENTIAL.choiceCardId])

export function advanceAfterCard(character: CharacterState, card: GameCard) {
  const isDormantSpecialCard = DORMANT_SPECIAL_CARD_IDS.has(card.id)

  character.totalEventsSeen += 1
  // Les deux cartes du Fauve (révélation + choix) ne consomment pas d'évènement de
  // l'année : sinon, tomber sur la révélation en tout dernier évènement décale le
  // choix des 3 portes à l'année suivante, ce qui donne l'impression d'un blocage.
  if (!isDormantSpecialCard) {
    character.eventsRemainingThisYear = Math.max(0, character.eventsRemainingThisYear - 1)
  }
  if (!character.dormantPotential.revealed) character.dormantPotential.eventsSinceStart += 1
  if (card.id === DORMANT_POTENTIAL.revealCardId) character.dormantPotential.revealed = true

  if (character.currentArc) {
    const arc = ARC_MAP[character.currentArc.arcId]
    if (arc) {
      const nextStep = character.currentArc.stepIndex + 1
      if (nextStep >= arc.cardSequenceIds.length) {
        completeArc(character)
      } else {
        character.currentArc.stepIndex = nextStep
      }
    }
  }

  if (!isDormantSpecialCard) {
    if (card.type === 'life-moment') character.yearStats.lifeMoments += 1
    if (card.type === 'training') character.yearStats.trainings += 1
    if (card.type === 'fight') character.yearStats.fights += 1
  }
}

export function markTechniqueDiscovered(character: CharacterState, techniqueId: string, unlock: boolean) {
  character.flags.push(`discovered:${techniqueId}`)
  if (unlock) unlockTechnique(character, techniqueId)
}

export function getPendingStyleDiscovery(character: CharacterState): string | null {
  return styleTechniqueDiscovery(character)
}

export { STYLE_TECHNIQUES }
export function techniqueIsReady(character: CharacterState, techniqueId: string) {
  return isTechniqueReady(character, techniqueId)
}
