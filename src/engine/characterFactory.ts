import type {
  CharacterState,
  Gender,
  StatKey,
  FightingStyle,
} from './types'
import { Rng, createSeed } from './rng'
import { CLUB_MAP, CLUBS } from '../data/clubs'
import { LINEAGE_MAP, LINEAGES } from '../data/lineages'
import { FAMILY_BACKGROUND_MAP, FAMILY_BACKGROUNDS } from '../data/familyBackgrounds'
import { FIGHTING_STYLES, FIGHTING_STYLE_MAP } from '../data/fightingStyles'
import { DISCIPLINE_MAP, DISCIPLINES } from '../data/disciplines'
import { INNATE_GIFTS } from '../data/innateGifts'
import { FIRST_NAMES_M, FIRST_NAMES_F, LAST_NAMES } from '../data/firstNames'
import { DORMANT_POTENTIAL } from '../data/dormantPotential'
import { STAT_KEYS } from '../data/stats'
import { SHOP_PERK_MAP } from '../data/shopPerks'

const BASE_STAT_VALUE = 25
const STARTING_EVENTS_PER_YEAR = 5
const STARTING_AGE = 16

export interface CreationChoices {
  gender: Gender
  name?: string
  clubId: string
  lineageId: string
  familyBackgroundId?: string
  styleId: string
  disciplineId: string
}

export interface EquippedPerksInput {
  perkIds: string[]
  statChoices: Partial<Record<string, StatKey>>
}

export function generateRandomName(rng: Rng, gender: Gender): string {
  const pool = gender === 'm' ? FIRST_NAMES_M : FIRST_NAMES_F
  const first = rng.pick(pool)
  const last = rng.pick(LAST_NAMES)
  return `${first} ${last}`
}

export function rollFightingStyle(rng: Rng): FightingStyle {
  return rng.pick(FIGHTING_STYLES)
}

function emptyStats(): Record<StatKey, number> {
  return STAT_KEYS.reduce((acc, k) => ({ ...acc, [k]: BASE_STAT_VALUE }), {} as Record<StatKey, number>)
}

function clampStats(stats: Record<StatKey, number>): Record<StatKey, number> {
  const out = { ...stats }
  for (const k of STAT_KEYS) out[k] = Math.max(5, Math.min(100, Math.round(out[k])))
  return out
}

function applyModifiers(stats: Record<StatKey, number>, mods?: Partial<Record<StatKey, number>>) {
  if (!mods) return
  for (const [k, v] of Object.entries(mods)) {
    stats[k as StatKey] += v ?? 0
  }
}

function applyEquippedPerks(stats: Record<StatKey, number>, disciplineBoostedStat: StatKey, equipped: EquippedPerksInput) {
  let reputationInternal = 0
  let reputationExternal = 0
  let coolness = 0
  let loyalty = 0

  for (const perkId of equipped.perkIds) {
    const perk = SHOP_PERK_MAP[perkId]
    if (!perk) continue

    applyModifiers(stats, perk.effect.stats)
    reputationInternal += perk.effect.reputationInternal ?? 0
    reputationExternal += perk.effect.reputationExternal ?? 0
    coolness += perk.effect.coolness ?? 0
    loyalty += perk.effect.loyalty ?? 0

    if (perk.id === 'perk-stat-discipline') {
      stats[disciplineBoostedStat] += perk.statChoiceAmount ?? 6
    }
    if (perk.id === 'perk-stat-libre' && perk.statChoice) {
      const chosen = equipped.statChoices[perk.id]
      if (chosen) stats[chosen] += perk.statChoiceAmount ?? 6
    }
  }

  return { reputationInternal, reputationExternal, coolness, loyalty }
}

function buildEntourage(rng: Rng, isAutodidact: boolean, mentorNameFromLineage: string, playerGender: Gender) {
  const mentorName = isAutodidact
    ? generateRandomName(rng, rng.chance(0.5) ? 'm' : 'f')
    : mentorNameFromLineage
  const rivalGender: Gender = rng.chance(0.5) ? 'm' : 'f'
  let rivalName = generateRandomName(rng, rivalGender)
  // évite (rarement) un homonyme complet avec le joueur
  if (rivalName === mentorName) rivalName = generateRandomName(rng, playerGender)

  return [
    { npcName: mentorName, role: 'Mentor', standing: 'amical' as const },
    { npcName: rivalName, role: 'Rival', standing: 'neutre' as const },
  ]
}

function baseCharacterFields() {
  return {
    rankId: 'rank-amateur-novice',
    careerPoints: 0,
    titleDefenses: 0,
    age: STARTING_AGE,
    yearIndex: 1,
    eventsRemainingThisYear: STARTING_EVENTS_PER_YEAR,
    eventsPerYear: STARTING_EVENTS_PER_YEAR,
    health: 100,
    fatigue: 0,
    flags: [] as string[],
    totalEventsSeen: 0,
    recentCardIds: [] as string[],
    unlockedTechniqueIds: [] as string[],
    techniqueCooldowns: {} as Record<string, number>,
    fightWinStreak: 0,
    fightFlawlessStreak: 0,
    pendingCardId: null,
    pendingTechniqueDiscoveryId: null,
    currentArc: null,
    yearStats: { trainings: 0, lifeMoments: 0, fights: 0, successes: 0, failures: 0, pointsEarned: 0 },
    pendingPointsToAllocate: 0,
    isRetired: false,
    endingType: null,
  }
}

export function createCharacter(choices: CreationChoices, equipped: EquippedPerksInput): CharacterState {
  const seed = createSeed()
  const rng = new Rng(seed)

  const club = CLUB_MAP[choices.clubId]
  const lineage = LINEAGE_MAP[choices.lineageId]
  const familyBg = choices.familyBackgroundId ? FAMILY_BACKGROUND_MAP[choices.familyBackgroundId] : undefined
  const style = FIGHTING_STYLE_MAP[choices.styleId]
  const discipline = DISCIPLINE_MAP[choices.disciplineId]
  const innateGift = rng.pick(INNATE_GIFTS)

  let stats = emptyStats()
  applyModifiers(stats, club.startingStatModifiers)
  applyModifiers(stats, lineage.startingStatModifiers)
  if (lineage.isAutodidact && familyBg) applyModifiers(stats, familyBg.startingStatModifiers)
  stats[style.statBoost] += 4
  stats[style.statPenalty] -= 2
  stats[discipline.boostedStat] += discipline.boostAmount
  for (const s of innateGift.statBoosts) stats[s] += innateGift.boostAmount

  const perkBonuses = applyEquippedPerks(stats, discipline.boostedStat, equipped)
  stats = clampStats(stats)

  const gender = choices.gender
  const name = choices.name?.trim() || generateRandomName(rng, gender)
  const entourage = buildEntourage(rng, lineage.isAutodidact, lineage.mentorName, gender)

  const dormantEligible = rng.chance(DORMANT_POTENTIAL.chanceAtCreation)

  const character: CharacterState = {
    ...baseCharacterFields(),
    id: `char-${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
    name,
    gender,
    clubId: club.id,
    lineageId: lineage.id,
    familyBackgroundId: familyBg?.id,
    styleId: style.id,
    disciplineId: discipline.id,
    innateGiftId: innateGift.id,
    stats,
    entourage,
    coolness: 50 + perkBonuses.coolness,
    reputationInternal: 10 + perkBonuses.reputationInternal,
    reputationExternal: 5 + perkBonuses.reputationExternal,
    loyalty: 20 + perkBonuses.loyalty,
    dormantPotential: {
      eligible: dormantEligible,
      eventsSinceStart: 0,
      revealed: false,
      path: null,
      mode: null,
    },
    seed: rng.getState(),
  }

  return character
}

export function createRandomDestinyCharacter(equipped: EquippedPerksInput): CharacterState {
  const seed = createSeed()
  const rng = new Rng(seed)

  const gender: Gender = rng.chance(0.5) ? 'm' : 'f'
  const club = rng.pick(CLUBS)
  const lineage = LINEAGE_MAP[rng.pick(club.availableLineageIds)]
  const familyBackgroundId = lineage.isAutodidact ? rng.pick(FAMILY_BACKGROUNDS).id : undefined
  const style = rollFightingStyle(rng)
  const discipline = rng.pick(DISCIPLINES)

  return createCharacter(
    {
      gender,
      clubId: club.id,
      lineageId: lineage.id,
      familyBackgroundId,
      styleId: style.id,
      disciplineId: discipline.id,
    },
    equipped,
  )
}
