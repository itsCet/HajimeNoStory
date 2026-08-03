import type { Trophy } from '../../engine/types'
import { RANK_TROPHIES } from './ranks'
import { TITLE_TROPHIES } from './titles'
import { TECHNIQUE_TROPHIES } from './techniques'
import { MARK_TROPHIES } from './marks'

export { RANK_TROPHIES, TITLE_TROPHIES, TECHNIQUE_TROPHIES, MARK_TROPHIES }

export const ALL_TROPHIES: Trophy[] = [
  ...RANK_TROPHIES,
  ...TITLE_TROPHIES,
  ...TECHNIQUE_TROPHIES,
  ...MARK_TROPHIES,
]

export const TROPHY_MAP: Record<string, Trophy> = ALL_TROPHIES.reduce(
  (acc, t) => ({ ...acc, [t.id]: t }),
  {} as Record<string, Trophy>,
)

export const TROPHY_COUNT_BY_CATEGORY = {
  rank: RANK_TROPHIES.length,
  title: TITLE_TROPHIES.length,
  technique: TECHNIQUE_TROPHIES.length,
  mark: MARK_TROPHIES.length,
}
