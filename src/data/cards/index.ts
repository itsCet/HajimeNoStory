import type { CareerArc, GameCard } from '../../engine/types'
import { LIFE_MOMENT_CARDS } from './lifeMoments'
import { TRAINING_CARDS } from './training'
import { FIGHT_CARDS } from './fights'
import { LINEAGE_EXCLUSIVE_CARDS } from './lineageExclusive'
import { AMATEUR_TRIAL_ARC, AMATEUR_TRIAL_CARDS } from './arcs/amateurTrial'

export { LIFE_MOMENT_CARDS, TRAINING_CARDS, FIGHT_CARDS, LINEAGE_EXCLUSIVE_CARDS }

/** Cartes accessibles par pioche aléatoire pondérée (jamais les cartes de trame/spéciales). */
export const POOL_CARDS: GameCard[] = [...LIFE_MOMENT_CARDS, ...TRAINING_CARDS, ...FIGHT_CARDS]

/** Toutes les trames de carrière connues. */
export const ARCS: CareerArc[] = [AMATEUR_TRIAL_ARC]

const ARC_ONLY_CARDS: GameCard[] = [...AMATEUR_TRIAL_CARDS]

/** Table de résolution id → carte, pour toutes les cartes du jeu (pool + spéciales + trames). */
export const CARD_MAP: Record<string, GameCard> = [
  ...POOL_CARDS,
  ...LINEAGE_EXCLUSIVE_CARDS,
  ...ARC_ONLY_CARDS,
].reduce((acc, c) => ({ ...acc, [c.id]: c }), {} as Record<string, GameCard>)

export const ARC_MAP: Record<string, CareerArc> = ARCS.reduce(
  (acc, a) => ({ ...acc, [a.id]: a }),
  {} as Record<string, CareerArc>,
)
