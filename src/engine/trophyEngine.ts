import type { CharacterState } from './types'
import { RANK_MAP } from '../data/ranks'
import { TECHNIQUE_MAP } from '../data/techniques'

const RANK_TROPHY_THRESHOLDS: Record<string, string> = {
  'trophy-rank-aspirant-pro': 'rank-aspirant-pro',
  'trophy-rank-classe-nationale': 'rank-classe-nationale',
  'trophy-rank-champion-japon': 'rank-champion-japon',
  'trophy-rank-champion-opbf': 'rank-champion-opbf',
  'trophy-rank-champion-monde': 'rank-champion-monde',
  'trophy-rank-legende': 'rank-legende',
}

function currentOrder(character: CharacterState): number {
  return RANK_MAP[character.rankId]?.order ?? 0
}

function checkRankTrophies(character: CharacterState): string[] {
  const order = currentOrder(character)
  const out: string[] = []
  for (const [trophyId, rankId] of Object.entries(RANK_TROPHY_THRESHOLDS)) {
    if (order >= RANK_MAP[rankId].order) out.push(trophyId)
  }
  return out
}

function checkTechniqueTrophies(character: CharacterState): string[] {
  const out: string[] = []
  for (const flag of character.flags) {
    if (!flag.startsWith('used-success:')) continue
    const techId = flag.slice('used-success:'.length)
    const tech = TECHNIQUE_MAP[techId]
    if (tech) out.push(tech.trophyId)
  }
  return out
}

function checkTitleTrophies(character: CharacterState): string[] {
  const out: string[] = []
  if (character.titleDefenses >= 5) out.push('trophy-title-supreme')
  if (character.isRetired && character.endingType === 'retirement' && currentOrder(character) >= RANK_MAP['rank-champion-monde'].order) {
    out.push('trophy-title-legende-retiree')
  }
  if (character.isRetired && character.endingType === 'tragic') out.push('trophy-title-figure-dechue')
  if (character.reputationExternal >= 90) out.push('trophy-title-menace-ultime')
  if (character.fightFlawlessStreak >= 5) out.push('trophy-title-fantome-du-ring')
  if (character.yearIndex >= 12) out.push('trophy-title-veteran')
  if (character.flags.includes('flag-world-title-comeback-won')) out.push('trophy-title-coeur-de-champion')
  if (character.flags.includes('flag-lost-first-world-title') && currentOrder(character) >= RANK_MAP['rank-champion-opbf'].order) {
    out.push('trophy-title-roi-sans-couronne')
  }
  return out
}

function checkMarkTrophies(character: CharacterState): string[] {
  const out: string[] = []
  if (character.fightWinStreak >= 10) out.push('mark-invaincu')
  if (character.flags.includes('flag-near-death') && character.fightWinStreak >= 1) {
    out.push('mark-resurrection')
  }
  return out
}

/** Évalue l'ensemble des trophées "dérivés de l'état" (hors trophées accordés directement par une carte). */
export function evaluateTrophies(character: CharacterState, alreadyUnlocked: Set<string>): string[] {
  const candidates = [
    ...checkRankTrophies(character),
    ...checkTechniqueTrophies(character),
    ...checkTitleTrophies(character),
    ...checkMarkTrophies(character),
  ]
  const fresh = candidates.filter((id) => !alreadyUnlocked.has(id))
  return [...new Set(fresh)]
}
