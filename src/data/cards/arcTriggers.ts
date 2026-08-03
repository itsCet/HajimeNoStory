import type { CharacterState } from '../../engine/types'

export interface ArcTrigger {
  arcId: string
  condition: (character: CharacterState) => boolean
}

// Trames obligatoires : démarrent automatiquement dès que la condition est remplie
// (vérifié à chaque sélection de carte, dans l'ordre ci-dessous). La trame secondaire
// optionnelle (arc-defi-caritatif) n'est PAS ici : elle démarre via un choix de carte.
export const ARC_TRIGGERS: ArcTrigger[] = [
  {
    arcId: 'arc-amateur-trial',
    condition: (c) => c.rankId === 'rank-amateur-confirme',
  },
  {
    arcId: 'arc-titre-national',
    condition: (c) => c.rankId === 'rank-classe-nationale',
  },
  {
    arcId: 'arc-rivalite-opbf',
    condition: (c) => c.rankId === 'rank-champion-japon',
  },
  {
    arcId: 'arc-eliminatoire-mondial',
    condition: (c) => c.rankId === 'rank-champion-opbf' && c.flags.includes('flag-side-quest-resolved'),
  },
  {
    arcId: 'arc-titre-mondial',
    condition: (c) => c.rankId === 'rank-challenger-mondial',
  },
]
