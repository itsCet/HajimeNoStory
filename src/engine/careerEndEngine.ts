import type { CharacterState, CareerEndingType, CareerHistoryEntry } from './types'
import { RANK_MAP } from '../data/ranks'
import { CAREER_ENDINGS } from '../data/careerEndings'

const RETIREMENT_ELIGIBLE_ORDER = RANK_MAP['rank-pro-c'].order
const AGE_LIMIT = 40

export function canRetireVoluntarily(character: CharacterState): boolean {
  return (RANK_MAP[character.rankId]?.order ?? 0) >= RETIREMENT_ELIGIBLE_ORDER
}

export function shouldForceEndOfCareer(character: CharacterState): CareerEndingType | null {
  if (character.health <= 0) return 'tragic'
  if (character.age >= AGE_LIMIT) return 'glory'
  return null
}

export function willAgeOutNextYear(character: CharacterState): boolean {
  return character.age + 1 >= AGE_LIMIT
}

export function computeCareerScore(character: CharacterState, trophiesUnlockedThisRun: number): number {
  const rankOrder = RANK_MAP[character.rankId]?.order ?? 0
  return rankOrder * 40 + character.titleDefenses * 25 + trophiesUnlockedThisRun * 5 + Math.floor(character.careerPoints / 5)
}

export function computeCurrencyEarned(score: number, endingType: CareerEndingType): number {
  let currency = Math.round(score * 0.6)
  if (endingType === 'retirement') currency = Math.round(currency * 1.2)
  if (endingType === 'tragic') currency = Math.round(currency * 0.8)
  return Math.max(20, currency)
}

export function getEndingText(endingType: CareerEndingType) {
  return CAREER_ENDINGS.find((e) => e.type === endingType) ?? CAREER_ENDINGS[0]
}

export function buildHistoryEntry(
  character: CharacterState,
  endingType: CareerEndingType,
  trophiesUnlockedThisRun: number,
): CareerHistoryEntry {
  const score = computeCareerScore(character, trophiesUnlockedThisRun)
  const ending = getEndingText(endingType)
  return {
    id: `history-${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
    characterName: character.name,
    clubId: character.clubId,
    lineageId: character.lineageId,
    styleId: character.styleId,
    finalRankId: character.rankId,
    endingType,
    endingText: ending.text,
    score,
    currencyEarned: computeCurrencyEarned(score, endingType),
    yearsPlayed: character.yearIndex,
    dateFinished: new Date().toISOString(),
  }
}
