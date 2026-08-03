import type { Technique } from '../../engine/types'
import { STYLE_TECHNIQUES } from './styleTechniques'
import { LINEAGE_TECHNIQUES } from './lineageTechniques'
import { GENERIC_TECHNIQUES } from './genericTechniques'

export { STYLE_TECHNIQUES, LINEAGE_TECHNIQUES, GENERIC_TECHNIQUES }

export const ALL_TECHNIQUES: Technique[] = [
  ...STYLE_TECHNIQUES,
  ...LINEAGE_TECHNIQUES,
  ...GENERIC_TECHNIQUES,
]

export const TECHNIQUE_MAP: Record<string, Technique> = ALL_TECHNIQUES.reduce(
  (acc, t) => ({ ...acc, [t.id]: t }),
  {} as Record<string, Technique>,
)
