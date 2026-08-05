// ── Types partagés (moteur + contenu) ─────────────────────────────────────

export type StatKey =
  | 'puissance'
  | 'vitesse'
  | 'technique'
  | 'endurance'
  | 'reflexes'
  | 'mental'
  | 'strategie'

export interface StatDef {
  key: StatKey
  label: string
  emoji: string
  color: string
  description: string
}

// ── Création de personnage ────────────────────────────────────────────────

export interface Club {
  id: string
  name: string
  city: string
  tagline: string
  description: string
  availableLineageIds: string[]
  rareEventWeightModifiers?: Partial<Record<string, number>>
  startingStatModifiers?: Partial<Record<StatKey, number>>
}

export interface Lineage {
  id: string
  name: string
  mentorName: string
  isAutodidact: boolean
  tagline: string
  description: string
  startingStatModifiers: Partial<Record<StatKey, number>>
  exclusiveCardId: string | null
  secretTechniqueId: string | null
}

export interface FamilyBackground {
  id: string
  name: string
  tagline: string
  startingStatModifiers: Partial<Record<StatKey, number>>
}

export interface FightingStyle {
  id: string
  name: string
  description: string
  statBoost: StatKey
  statPenalty: StatKey
  basicTechniqueId: string
  advancedTechniqueId: string
}

export interface Discipline {
  id: string
  name: string
  description: string
  boostedStat: StatKey
  boostAmount: number
}

export interface InnateGift {
  id: string
  name: string
  emoji: string
  description: string
  statBoosts: [StatKey, StatKey]
  boostAmount: number
}

// ── Récompenses ────────────────────────────────────────────────────────────

export interface Reward {
  stats?: Partial<Record<StatKey, number>>
  health?: number
  fatigue?: number
  coolness?: number
  reputationInternal?: number
  reputationExternal?: number
  loyalty?: number
  careerPoints?: number
  unlockTrophyIds?: string[]
  unlockTechniqueIds?: string[]
  entourageDelta?: Array<{ role: string; delta: number }>
  setFlags?: string[]
  startArcId?: string
  titleDefenseWin?: boolean
}

// ── Rangs / progression ────────────────────────────────────────────────────

export interface RankRequirement {
  minCareerPoints?: number
  mustWinCardId?: string
  minTitleDefenses?: number
}

export interface RankDef {
  id: string
  order: number
  label: string
  shortLabel: string
  badgeLetter: string
  badgeColor: string
  requirement: RankRequirement
}

// ── Techniques ──────────────────────────────────────────────────────────

export type TechniqueSource = 'style-basic' | 'style-advanced' | 'lineage-secret' | 'generic'

export interface TechniqueUnlockCondition {
  type: 'auto-after-debut' | 'trial-success' | 'lineage-card' | 'card-reward'
  cardId?: string
}

export interface TechniquePublicAttemptVariant {
  witnessLabel: string
  secretLabel: string
  witnessGainText: string
  secretGainText: string
  witnessRewards: Reward
  secretRewards: Reward
}

export interface Technique {
  id: string
  name: string
  emoji: string
  source: TechniqueSource
  relatedGestureStat: StatKey
  description: string
  rollBonus: number
  cooldownCards: number
  unlock: TechniqueUnlockCondition
  successSceneText: string
  failureSceneText: string
  publicAttemptVariant?: TechniquePublicAttemptVariant
  trophyId: string
}

// ── Cartes ─────────────────────────────────────────────────────────────

export type CardType =
  | 'life-moment'
  | 'training'
  | 'fight'
  | 'lineage-exclusive'
  | 'dormant-potential'

export interface CardRequirement {
  minRankOrder?: number
  maxRankOrder?: number
  requiredLineageId?: string
  requiredStyleId?: string
  requiredFlags?: string[]
  excludedFlags?: string[]
  onceOnly?: boolean
  weight?: number
}

export interface RollOutcome {
  text: string
  reward: Reward
}

export interface RollOutcomeSet {
  criticalFailure: RollOutcome
  failure: RollOutcome
  success: RollOutcome
  criticalSuccess: RollOutcome
}

export interface CardChoice {
  id: string
  label: string
  statTested: StatKey
  difficulty: number
  outcomes: RollOutcomeSet
}

interface BaseCard {
  id: string
  type: CardType
  title: string
  narrativeText: string
  requirement: CardRequirement
  setFlagsOnShow?: string[]
}

export interface LifeMomentCard extends BaseCard {
  type: 'life-moment'
  choices: CardChoice[]
}

export interface TrainingCard extends BaseCard {
  type: 'training'
  approaches: CardChoice[]
}

// ── Combat round par round ─────────────────────────────────────────────

export type TacticalApproachId = 'agresser' | 'temporiser' | 'contre-attaquer'
export type OpponentAggression = 'aggressive' | 'balanced' | 'defensive'

export interface TacticalApproachDef {
  id: TacticalApproachId
  label: string
  emoji: string
  description: string
  statTested: StatKey
  fatigueCost: number
}

export interface FightCard extends BaseCard {
  type: 'fight'
  opponentName: string
  opponentTagline: string
  /** Détermine quelle approche tactique est favorisée/pénalisée contre cet adversaire. */
  opponentAggression: OpponentAggression
  /** Nombre de rounds avant décision aux points si aucun KO n'a tranché avant. */
  totalRounds: number
  /** Écart de momentum absolu qui déclenche un arrêt anticipé (KO). */
  koThreshold: number
  /** Difficulté de base appliquée à chaque round, modulée par l'approche et l'adversaire. */
  baseDifficulty: number
  arcId?: string
  arcStep?: number
  isArcFinale?: boolean
  rankUpOnWin?: string
  /**
   * Résolution finale, une fois le combat terminé (KO ou rounds épuisés) :
   * criticalFailure = stoppé (KO subi) · failure = perdu aux points ·
   * success = gagné aux points · criticalSuccess = KO infligé / victoire dominante.
   */
  outcomes: RollOutcomeSet
}

export interface LineageExclusiveCard extends BaseCard {
  type: 'lineage-exclusive'
  lineageId: string
  choices: CardChoice[]
  leadsToTechniqueId: string
}

export interface DormantPotentialCard extends BaseCard {
  type: 'dormant-potential'
  doors: {
    id: 'force' | 'negotiate' | 'decline'
    label: string
    resultText: string
    reward: Reward
  }[]
}

export type GameCard =
  | LifeMomentCard
  | TrainingCard
  | FightCard
  | LineageExclusiveCard
  | DormantPotentialCard

export interface CareerArc {
  id: string
  name: string
  description: string
  cardSequenceIds: string[]
  optional?: boolean
  trophyId?: string
}

// ── Instinct de prédateur ──────────────────────────────────────────────

export interface DormantPotentialDef {
  id: string
  name: string
  triggerEventCount: number
  revealCardId: string
  choiceCardId: string
  masteredEffect: { statBonus: Partial<Record<StatKey, number>>; rollBonus: number }
  unleashedEffect: { rollBonus: number; healthCostPerUse: number }
  chanceAtCreation: number
}

// ── Trophées ────────────────────────────────────────────────────────────

export type TrophyCategory = 'rank' | 'title' | 'technique' | 'mark'

export interface Trophy {
  id: string
  category: TrophyCategory
  name: string
  emoji: string
  description: string
  unlockCondition: string
}

// ── Boutique / historique / patch notes ────────────────────────────────

export interface ShopPerk {
  id: string
  name: string
  description: string
  cost: number
  effect: Reward
  /** Si vrai, le joueur choisit la statistique concernée au moment d'équiper l'avantage. */
  statChoice?: boolean
  statChoiceAmount?: number
}

export type CareerEndingType = 'retirement' | 'glory' | 'tragic'

export interface CareerEndingDef {
  id: string
  type: CareerEndingType
  title: string
  text: string
}

export interface CareerHistoryEntry {
  id: string
  characterName: string
  clubId: string
  lineageId: string
  styleId: string
  finalRankId: string
  endingType: CareerEndingType
  endingText: string
  score: number
  currencyEarned: number
  yearsPlayed: number
  dateFinished: string
}

export interface PatchNote {
  version: string
  date: string
  title: string
  sections: { emoji: string; heading: string; body: string }[]
}

// ── Prénoms ────────────────────────────────────────────────────────────

export type Gender = 'm' | 'f'

// ── État de personnage (sauvegarde) ─────────────────────────────────────

export type EntourageStanding = 'hostile' | 'froid' | 'neutre' | 'amical' | 'loyal'

export interface EntourageMember {
  npcName: string
  role: string
  standing: EntourageStanding
}

export interface DormantPotentialState {
  eligible: boolean
  eventsSinceStart: number
  revealed: boolean
  path: 'forced' | 'negotiated' | 'declined' | null
  mode: 'mastered' | 'unleashed' | null
}

export interface YearStats {
  trainings: number
  lifeMoments: number
  fights: number
  successes: number
  failures: number
  pointsEarned: number
}

export interface CharacterState {
  id: string
  name: string
  gender: Gender
  clubId: string
  lineageId: string
  familyBackgroundId?: string
  styleId: string
  disciplineId: string
  innateGiftId: string

  rankId: string
  careerPoints: number
  titleDefenses: number
  age: number
  yearIndex: number
  eventsRemainingThisYear: number
  eventsPerYear: number

  stats: Record<StatKey, number>
  health: number
  fatigue: number
  coolness: number
  reputationInternal: number
  reputationExternal: number
  loyalty: number

  entourage: EntourageMember[]
  flags: string[]
  totalEventsSeen: number
  // Historique court des dernières cartes de pioche (pool) présentées, pour éviter
  // qu'une même carte revienne trop vite quand le pool éligible est réduit.
  recentCardIds: string[]

  unlockedTechniqueIds: string[]
  techniqueCooldowns: Record<string, number>
  fightWinStreak: number
  fightFlawlessStreak: number

  dormantPotential: DormantPotentialState

  pendingCardId: string | null
  pendingTechniqueDiscoveryId: string | null
  currentArc: { arcId: string; stepIndex: number } | null

  yearStats: YearStats
  pendingPointsToAllocate: number

  isRetired: boolean
  endingType: CareerEndingType | null

  seed: number
}

export interface SaveData {
  version: number
  character: CharacterState | null
}

export interface MetaSettings {
  theme: 'light' | 'dark'
}

export interface MetaState {
  version: number
  currency: number
  unlockedPerkIds: string[]
  equippedPerkIds: string[]
  equippedPerkStatChoices: Partial<Record<string, StatKey>>
  unlockedTrophyIds: string[]
  history: CareerHistoryEntry[]
  settings: MetaSettings
}
