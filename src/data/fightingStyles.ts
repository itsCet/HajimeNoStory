import type { FightingStyle } from '../engine/types'

// Révélé aléatoirement à la création ("test de style").
export const FIGHTING_STYLES: FightingStyle[] = [
  {
    id: 'style-puncher',
    name: 'Puncher',
    description:
      "Chaque échange est une occasion d'en finir d'un seul coup. Ce style ne cherche pas la distance, il cherche l'impact.",
    statBoost: 'puissance',
    statPenalty: 'reflexes',
    basicTechniqueId: 'tech-style-puncher-basic',
    advancedTechniqueId: 'tech-style-puncher-advanced',
  },
  {
    id: 'style-boxeur-puncher',
    name: 'Boxeur-Puncher',
    description:
      "Un style hybride, capable de boxer à distance comme de conclure au corps-à-corps — au prix d'une gestion d'effort permanente.",
    statBoost: 'technique',
    statPenalty: 'endurance',
    basicTechniqueId: 'tech-style-boxeur-puncher-basic',
    advancedTechniqueId: 'tech-style-boxeur-puncher-advanced',
  },
  {
    id: 'style-out-boxer',
    name: 'Out-boxer',
    description:
      "La distance est une arme à part entière : toucher sans se faire toucher, et ne jamais rester là où l'adversaire l'attend.",
    statBoost: 'vitesse',
    statPenalty: 'puissance',
    basicTechniqueId: 'tech-style-out-boxer-basic',
    advancedTechniqueId: 'tech-style-out-boxer-advanced',
  },
  {
    id: 'style-presseur',
    name: 'Presseur',
    description:
      "Avancer, toujours. Réduire l'espace jusqu'à ce qu'il n'en reste plus, et faire de chaque round un round d'usure.",
    statBoost: 'endurance',
    statPenalty: 'strategie',
    basicTechniqueId: 'tech-style-presseur-basic',
    advancedTechniqueId: 'tech-style-presseur-advanced',
  },
  {
    id: 'style-contreur',
    name: 'Contreur',
    description:
      "Ne jamais initier. Lire l'ouverture que l'adversaire laisse malgré lui, et la lui faire payer une fraction de seconde plus tard.",
    statBoost: 'reflexes',
    statPenalty: 'mental',
    basicTechniqueId: 'tech-style-contreur-basic',
    advancedTechniqueId: 'tech-style-contreur-advanced',
  },
]

export const FIGHTING_STYLE_MAP: Record<string, FightingStyle> = FIGHTING_STYLES.reduce(
  (acc, s) => ({ ...acc, [s.id]: s }),
  {} as Record<string, FightingStyle>,
)
