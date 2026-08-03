import type { ShopPerk } from '../engine/types'

// Achetés avec les Éclats gagnés en terminant une carrière. Permanents une fois débloqués,
// mais seuls 2 avantages équipés à la fois sont actifs — à partir de la PROCHAINE carrière.
export const SHOP_PERKS: ShopPerk[] = [
  {
    id: 'perk-reputation-depart',
    name: 'Réputation qui te précède',
    description: "Un bruit de couloir favorable circule déjà avant ton premier combat pro.",
    cost: 80,
    effect: { reputationExternal: 10, reputationInternal: 5 },
  },
  {
    id: 'perk-sang-froid-depart',
    name: 'Calme forgé plus tôt',
    description: "Tu abordes ta carrière avec une avance de sang-froid que d'autres mettent des années à trouver.",
    cost: 120,
    effect: { coolness: 15 },
  },
  {
    id: 'perk-stat-discipline',
    name: 'Fondations solides',
    description: "La statistique de ta discipline de prédilection démarre plus haute qu'à l'ordinaire.",
    cost: 160,
    effect: {},
  },
  {
    id: 'perk-stat-libre',
    name: 'Talent affûté',
    description: "Choisis, à l'équipement, la statistique qui démarrera avec un bonus.",
    cost: 200,
    effect: {},
    statChoice: true,
    statChoiceAmount: 6,
  },
  {
    id: 'perk-loyaute-reputation',
    name: 'Racines profondes',
    description: "Ton entourage te fait confiance depuis plus longtemps qu'il n'y paraît.",
    cost: 260,
    effect: { loyalty: 10, reputationInternal: 10 },
  },
]

export const SHOP_PERK_MAP: Record<string, ShopPerk> = SHOP_PERKS.reduce(
  (acc, p) => ({ ...acc, [p.id]: p }),
  {} as Record<string, ShopPerk>,
)
