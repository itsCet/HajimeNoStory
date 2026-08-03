import type { Discipline } from '../engine/types'

export const DISCIPLINES: Discipline[] = [
  {
    id: 'disc-sac',
    name: 'Travail au sac',
    description: "Des heures à faire trembler le cuir, pour que chaque coup finisse par porter tout ton poids.",
    boostedStat: 'puissance',
    boostAmount: 4,
  },
  {
    id: 'disc-sparring',
    name: 'Sparring technique',
    description: "Face à un partenaire, à vitesse réduite, jusqu'à ce que le bon geste devienne un réflexe.",
    boostedStat: 'technique',
    boostAmount: 4,
  },
  {
    id: 'disc-jambes',
    name: 'Jeu de jambes',
    description: "Des lignes à la craie sur le sol, une corde à sauter usée jusqu'à la corde — littéralement.",
    boostedStat: 'vitesse',
    boostAmount: 4,
  },
  {
    id: 'disc-cardio',
    name: 'Renforcement physique',
    description: "Course, gainage, corde à sauter interminable : le socle silencieux de tout le reste.",
    boostedStat: 'endurance',
    boostAmount: 4,
  },
  {
    id: 'disc-esquive',
    name: 'Esquive et défense',
    description: "Apprendre à lire un poing qui part pour ne jamais avoir à l'encaisser.",
    boostedStat: 'reflexes',
    boostAmount: 4,
  },
  {
    id: 'disc-mental',
    name: 'Préparation mentale',
    description: "Respiration, visualisation, gestion de la peur — le combat qui se joue avant le combat.",
    boostedStat: 'mental',
    boostAmount: 4,
  },
  {
    id: 'disc-tactique',
    name: 'Étude tactique',
    description: "Carnets, vidéos, habitudes d'adversaires décortiquées jusqu'au moindre détail.",
    boostedStat: 'strategie',
    boostAmount: 4,
  },
]

export const DISCIPLINE_MAP: Record<string, Discipline> = DISCIPLINES.reduce(
  (acc, d) => ({ ...acc, [d.id]: d }),
  {} as Record<string, Discipline>,
)
