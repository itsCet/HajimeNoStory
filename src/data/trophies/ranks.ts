import type { Trophy } from '../../engine/types'

export const RANK_TROPHIES: Trophy[] = [
  {
    id: 'trophy-rank-aspirant-pro',
    category: 'rank',
    name: 'Licence en poche',
    emoji: '📜',
    description: "Tu as passé l'examen professionnel et laissé l'amateurisme derrière toi.",
    unlockCondition: "Atteindre le rang Aspirant pro.",
  },
  {
    id: 'trophy-rank-classe-nationale',
    category: 'rank',
    name: 'Un nom dans le classement',
    emoji: '📊',
    description: "Ton nom apparaît désormais dans le classement national.",
    unlockCondition: "Atteindre le rang Classé national.",
  },
  {
    id: 'trophy-rank-champion-japon',
    category: 'rank',
    name: 'Champion du Japon',
    emoji: '🇯🇵',
    description: "Le sommet national t'appartient.",
    unlockCondition: "Devenir Champion du Japon.",
  },
  {
    id: 'trophy-rank-champion-opbf',
    category: 'rank',
    name: 'Couronne du Pacifique',
    emoji: '🌏',
    description: "Ta réputation dépasse maintenant les frontières du pays.",
    unlockCondition: "Devenir Champion OPBF.",
  },
  {
    id: 'trophy-rank-champion-monde',
    category: 'rank',
    name: 'Champion du monde',
    emoji: '🌐',
    description: "Il n'y a plus de sommet au-dessus de celui-ci.",
    unlockCondition: "Devenir Champion du monde.",
  },
  {
    id: 'trophy-rank-legende',
    category: 'rank',
    name: 'Légende du ring',
    emoji: '👑',
    description: "Trois défenses de titre plus tard, ton nom ne s'efface plus.",
    unlockCondition: "Atteindre le rang Légende du ring (3 défenses de titre mondial réussies).",
  },
]
