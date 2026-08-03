import type { StatDef, StatKey } from '../engine/types'

export const STATS: StatDef[] = [
  {
    key: 'puissance',
    label: 'Puissance',
    emoji: '💥',
    color: '#d92418',
    description: "La force brute qui part dans chaque coup.",
  },
  {
    key: 'vitesse',
    label: 'Vitesse',
    emoji: '⚡',
    color: '#e87a00',
    description: "La rapidité d'exécution, sur les pieds comme sur les poings.",
  },
  {
    key: 'technique',
    label: 'Technique',
    emoji: '🥊',
    color: '#b31912',
    description: "La propreté du geste, la précision du placement.",
  },
  {
    key: 'endurance',
    label: 'Endurance',
    emoji: '🫀',
    color: '#3fae5b',
    description: "La capacité à tenir la distance et encaisser sans rompre.",
  },
  {
    key: 'reflexes',
    label: 'Réflexes',
    emoji: '👁️',
    color: '#a35bc9',
    description: "La vitesse de réaction face à ce qu'on ne voit pas venir.",
  },
  {
    key: 'mental',
    label: 'Mental',
    emoji: '🧠',
    color: '#3a7bd5',
    description: "La solidité intérieure quand tout bascule dans un combat.",
  },
  {
    key: 'strategie',
    label: 'Stratégie',
    emoji: '♟️',
    color: '#8a1611',
    description: "La lecture du combat, l'art de préparer un adversaire à l'avance.",
  },
]

export const STAT_MAP: Record<StatKey, StatDef> = STATS.reduce(
  (acc, s) => ({ ...acc, [s.key]: s }),
  {} as Record<StatKey, StatDef>,
)

export const STAT_KEYS: StatKey[] = STATS.map((s) => s.key)
