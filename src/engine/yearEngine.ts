import type { CharacterState } from './types'
import { RANK_MAP } from '../data/ranks'

export interface YearSummary {
  rankLabel: string
  trainings: number
  lifeMoments: number
  fights: number
  successes: number
  failures: number
  pointsEarned: number
  totalCareerPoints: number
  yearIndex: number
  age: number
}

export function isYearOver(character: CharacterState): boolean {
  return character.eventsRemainingThisYear <= 0
}

export function buildYearSummary(character: CharacterState): YearSummary {
  const rank = RANK_MAP[character.rankId]
  return {
    rankLabel: rank?.label ?? character.rankId,
    trainings: character.yearStats.trainings,
    lifeMoments: character.yearStats.lifeMoments,
    fights: character.yearStats.fights,
    successes: character.yearStats.successes,
    failures: character.yearStats.failures,
    pointsEarned: character.yearStats.pointsEarned,
    totalCareerPoints: character.careerPoints,
    yearIndex: character.yearIndex,
    age: character.age,
  }
}

export function computeYearPointsToAllocate(character: CharacterState): number {
  // Coefficients doublés par rapport à un rythme à 10 évènements/an, pour que la
  // croissance de stats par ANNÉE reste comparable malgré deux fois moins de tirages.
  const { successes, failures } = character.yearStats
  return Math.max(4, 5 + successes * 4 - failures)
}

/** À appeler une fois l'année écoulée : construit le bilan et crédite les points à répartir. */
export function finalizeYear(character: CharacterState): YearSummary {
  const summary = buildYearSummary(character)
  character.pendingPointsToAllocate += computeYearPointsToAllocate(character)
  return summary
}

/**
 * Récupération entre deux saisons. Sans elle, la santé ne fait que descendre :
 * les cartes offrent trois fois plus de pertes que de gains, et chaque round de
 * combat coûte des points. Une intersaison de repos rend la carrière longue
 * jouable, sans annuler l'usure — la récupération diminue avec l'âge.
 */
export function computeYearlyHealthRecovery(character: CharacterState): number {
  if (character.age < 25) return 22
  if (character.age < 30) return 18
  if (character.age < 35) return 13
  return 8
}

export function startNewYear(character: CharacterState) {
  character.yearIndex += 1
  character.age += 1
  character.fatigue = 0
  character.health = Math.min(100, character.health + computeYearlyHealthRecovery(character))
  character.eventsRemainingThisYear = character.eventsPerYear
  character.yearStats = { trainings: 0, lifeMoments: 0, fights: 0, successes: 0, failures: 0, pointsEarned: 0 }
}
