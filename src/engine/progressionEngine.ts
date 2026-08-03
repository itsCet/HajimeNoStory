import type { CharacterState } from './types'
import type { RollTier } from './rng'
import { RANK_MAP, getNextRank } from '../data/ranks'

/** Fait progresser le rang tant que le palier suivant est un palier "de points" déjà atteint. */
export function checkPointProgression(character: CharacterState): string[] {
  const newlyReached: string[] = []
  let next = getNextRank(character.rankId)
  while (
    next &&
    next.requirement.minCareerPoints !== undefined &&
    character.careerPoints >= next.requirement.minCareerPoints
  ) {
    character.rankId = next.id
    newlyReached.push(next.id)
    next = getNextRank(character.rankId)
  }
  return newlyReached
}

/** Saut direct de rang déclenché par une carte de trame (victoire d'un combat de titre, etc.). */
export function forceAdvanceRank(character: CharacterState, rankId: string): string[] {
  const target = RANK_MAP[rankId]
  const current = RANK_MAP[character.rankId]
  if (!target || !current || target.order <= current.order) return []
  character.rankId = rankId
  const cascaded = checkPointProgression(character)
  return [rankId, ...cascaded]
}

/** À appeler après chaque défense de titre remportée. */
export function checkTitleDefenseProgression(character: CharacterState): string[] {
  const next = getNextRank(character.rankId)
  if (
    next &&
    next.requirement.minTitleDefenses !== undefined &&
    character.titleDefenses >= next.requirement.minTitleDefenses
  ) {
    character.rankId = next.id
    return [next.id]
  }
  return []
}

/** Vérifie si la carte que le joueur vient de réussir est le verrou narratif du rang suivant. */
export function checkStoryGateProgression(character: CharacterState, cardId: string, tier: RollTier): string[] {
  if (tier !== 'success' && tier !== 'critical-success') return []
  const next = getNextRank(character.rankId)
  if (next && next.requirement.mustWinCardId === cardId) {
    return forceAdvanceRank(character, next.id)
  }
  return []
}

export function getCurrentRank(character: CharacterState) {
  return RANK_MAP[character.rankId]
}
