import type { DormantPotentialDef } from '../engine/types'

// Le potentiel caché : tiré au hasard à la création (35% des boxeurs), il ne se
// révèle qu'après un certain nombre d'évènements vécus. Le nom ci-dessous est
// celui utilisé partout dans le jeu — bouton d'activation, scènes, journal.
export const DORMANT_POTENTIAL: DormantPotentialDef = {
  id: 'dormant-le-fauve',
  name: 'Le Fauve',
  triggerEventCount: 28,
  revealCardId: 'card-fauve-reveal',
  choiceCardId: 'card-fauve-choice',
  masteredEffect: {
    statBonus: { puissance: 4, reflexes: 4 },
    rollBonus: 25,
  },
  unleashedEffect: {
    rollBonus: 25,
    healthCostPerUse: 8,
  },
  chanceAtCreation: 0.35,
}
