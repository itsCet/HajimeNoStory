import type { CareerArc, GameCard } from '../../engine/types'
import { LIFE_MOMENT_CARDS } from './lifeMoments'
import { TRAINING_CARDS } from './training'
import { FIGHT_CARDS } from './fights'
import { LINEAGE_EXCLUSIVE_CARDS } from './lineageExclusive'
import { STYLE_TRIAL_CARDS } from './styleTrials'
import { FAUVE_REVEAL_CARD, FAUVE_CHOICE_CARD } from './dormantPotentialCards'
import { AMATEUR_TRIAL_ARC, AMATEUR_TRIAL_CARDS } from './arcs/amateurTrial'
import { TITRE_NATIONAL_ARC, TITRE_NATIONAL_CARDS, TITRE_NATIONAL_FIGHT_CARDS } from './arcs/titreNational'
import { RIVALITE_OPBF_ARC, RIVALITE_OPBF_LIFE_CARDS, RIVALITE_OPBF_FIGHT_CARDS } from './arcs/rivaliteOpbf'
import { DEFI_CARITATIF_ARC, DEFI_CARITATIF_INTRO, DEFI_CARITATIF_CARDS } from './arcs/defiCaritatif'
import { ELIMINATOIRE_MONDIAL_ARC, ELIMINATOIRE_MONDIAL_LIFE_CARDS, ELIMINATOIRE_MONDIAL_FIGHT_CARDS } from './arcs/eliminatoireMondial'
import { TITRE_MONDIAL_ARC, TITRE_MONDIAL_LIFE_CARDS, TITRE_MONDIAL_FIGHT_CARDS } from './arcs/titreMondial'
import { TITLE_DEFENSE_CARDS } from './titleDefenses'

export { LIFE_MOMENT_CARDS, TRAINING_CARDS, FIGHT_CARDS, LINEAGE_EXCLUSIVE_CARDS, STYLE_TRIAL_CARDS }

/** Cartes accessibles par pioche aléatoire pondérée (jamais les cartes de trame/spéciales). */
export const POOL_CARDS: GameCard[] = [
  ...LIFE_MOMENT_CARDS,
  ...TRAINING_CARDS,
  ...FIGHT_CARDS,
  ...STYLE_TRIAL_CARDS,
  ...TITLE_DEFENSE_CARDS,
  DEFI_CARITATIF_INTRO,
]

/** Toutes les trames de carrière connues. */
export const ARCS: CareerArc[] = [
  AMATEUR_TRIAL_ARC,
  TITRE_NATIONAL_ARC,
  RIVALITE_OPBF_ARC,
  DEFI_CARITATIF_ARC,
  ELIMINATOIRE_MONDIAL_ARC,
  TITRE_MONDIAL_ARC,
]

const ARC_ONLY_CARDS: GameCard[] = [
  ...AMATEUR_TRIAL_CARDS,
  ...TITRE_NATIONAL_CARDS,
  ...TITRE_NATIONAL_FIGHT_CARDS,
  ...RIVALITE_OPBF_LIFE_CARDS,
  ...RIVALITE_OPBF_FIGHT_CARDS,
  ...DEFI_CARITATIF_CARDS,
  ...ELIMINATOIRE_MONDIAL_LIFE_CARDS,
  ...ELIMINATOIRE_MONDIAL_FIGHT_CARDS,
  ...TITRE_MONDIAL_LIFE_CARDS,
  ...TITRE_MONDIAL_FIGHT_CARDS,
]

const SPECIAL_CARDS: GameCard[] = [FAUVE_REVEAL_CARD, FAUVE_CHOICE_CARD]

/** Table de résolution id → carte, pour toutes les cartes du jeu (pool + spéciales + trames). */
export const CARD_MAP: Record<string, GameCard> = [
  ...POOL_CARDS,
  ...LINEAGE_EXCLUSIVE_CARDS,
  ...ARC_ONLY_CARDS,
  ...SPECIAL_CARDS,
].reduce((acc, c) => ({ ...acc, [c.id]: c }), {} as Record<string, GameCard>)

export const ARC_MAP: Record<string, CareerArc> = ARCS.reduce(
  (acc, a) => ({ ...acc, [a.id]: a }),
  {} as Record<string, CareerArc>,
)
