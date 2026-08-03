import type { RankDef } from '../engine/types'

// L'échelle complète de la carrière, du tout premier entraînement à la légende.
// Les paliers narratifs (mustWinCardId) sont verrouillés par une trame ; les paliers
// intermédiaires (minCareerPoints) s'obtiennent par l'accumulation de combats et de progrès.
export const RANKS: RankDef[] = [
  {
    id: 'rank-amateur-novice',
    order: 0,
    label: 'Amateur novice',
    shortLabel: 'Novice',
    badgeLetter: 'D',
    badgeColor: '#9ca3af',
    requirement: {},
  },
  {
    id: 'rank-amateur-confirme',
    order: 1,
    label: 'Amateur confirmé',
    shortLabel: 'Amateur',
    badgeLetter: 'D',
    badgeColor: '#78909c',
    requirement: { minCareerPoints: 8 },
  },
  {
    id: 'rank-aspirant-pro',
    order: 2,
    label: 'Aspirant pro',
    shortLabel: 'Aspirant',
    badgeLetter: 'D+',
    badgeColor: '#64748b',
    requirement: { mustWinCardId: 'card-amateur-trial-final' },
  },
  {
    id: 'rank-pro-c',
    order: 3,
    label: 'Professionnel — Classe C',
    shortLabel: 'Pro C',
    badgeLetter: 'C',
    badgeColor: '#3a7bd5',
    requirement: { minCareerPoints: 18 },
  },
  {
    id: 'rank-pro-b',
    order: 4,
    label: 'Professionnel — Classe B',
    shortLabel: 'Pro B',
    badgeLetter: 'C+',
    badgeColor: '#2f6fb0',
    requirement: { minCareerPoints: 33 },
  },
  {
    id: 'rank-pro-a',
    order: 5,
    label: 'Professionnel — Classe A',
    shortLabel: 'Pro A',
    badgeLetter: 'B',
    badgeColor: '#a35bc9',
    requirement: { minCareerPoints: 50 },
  },
  {
    id: 'rank-classe-nationale',
    order: 6,
    label: 'Classé national',
    shortLabel: 'Classé',
    badgeLetter: 'B+',
    badgeColor: '#8e44ad',
    requirement: { minCareerPoints: 73 },
  },
  {
    id: 'rank-champion-japon',
    order: 7,
    label: 'Champion du Japon',
    shortLabel: 'Champ. Japon',
    badgeLetter: 'A',
    badgeColor: '#e87a00',
    requirement: { mustWinCardId: 'card-titre-national-final' },
  },
  {
    id: 'rank-champion-opbf',
    order: 8,
    label: 'Champion OPBF',
    shortLabel: 'Champ. OPBF',
    badgeLetter: 'A+',
    badgeColor: '#d2691e',
    requirement: { mustWinCardId: 'card-rivalite-opbf-final' },
  },
  {
    id: 'rank-eliminatoire-mondial',
    order: 9,
    label: 'Éliminatoire mondial',
    shortLabel: 'Éliminatoire',
    badgeLetter: 'S-',
    badgeColor: '#d92418',
    requirement: { minCareerPoints: 105 },
  },
  {
    id: 'rank-challenger-mondial',
    order: 10,
    label: 'Challenger mondial',
    shortLabel: 'Challenger',
    badgeLetter: 'S-',
    badgeColor: '#b31912',
    requirement: { mustWinCardId: 'card-eliminatoire-mondial-final' },
  },
  {
    id: 'rank-champion-monde',
    order: 11,
    label: 'Champion du monde',
    shortLabel: 'Champ. Monde',
    badgeLetter: 'S',
    badgeColor: '#f13a2a',
    requirement: { mustWinCardId: 'card-titre-mondial-final' },
  },
  {
    id: 'rank-legende',
    order: 12,
    label: 'Légende du ring',
    shortLabel: 'Légende',
    badgeLetter: 'S+',
    badgeColor: '#f5c518',
    requirement: { minTitleDefenses: 3 },
  },
]

export const RANK_MAP: Record<string, RankDef> = RANKS.reduce(
  (acc, r) => ({ ...acc, [r.id]: r }),
  {} as Record<string, RankDef>,
)

export const RANKS_BY_ORDER = [...RANKS].sort((a, b) => a.order - b.order)

export function getNextRank(currentRankId: string): RankDef | null {
  const current = RANK_MAP[currentRankId]
  if (!current) return null
  return RANKS_BY_ORDER.find((r) => r.order === current.order + 1) ?? null
}
