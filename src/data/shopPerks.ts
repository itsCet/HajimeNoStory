import type { ShopPerk } from '../engine/types'

// Achetés avec les Éclats gagnés en terminant une carrière. Permanents une fois débloqués,
// mais seuls 2 avantages équipés à la fois sont actifs — à partir de la PROCHAINE carrière.
const PERK_DEFINITIONS: ShopPerk[] = [
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
  {
    id: 'perk-heritage',
    name: 'Un petit héritage',
    description: "De quoi ne pas commencer complètement à zéro : ta carrière démarre avec un peu d'avance.",
    cost: 60,
    effect: {},
    extras: { careerPoints: 12 },
  },
  {
    id: 'perk-salle-equipee',
    name: 'Salle bien équipée',
    description: "Du vrai matériel dès le premier jour, là où d'autres s'entraînent sur un sac rapiécé.",
    cost: 100,
    effect: { stats: { endurance: 3, technique: 3 } },
  },
  {
    id: 'perk-mains-solides',
    name: 'Mains solides',
    description: "Des poignets et des phalanges qui encaissent l'impact sans broncher, dès le départ.",
    cost: 140,
    effect: { stats: { puissance: 5 } },
  },
  {
    id: 'perk-oeil-vif',
    name: 'Œil vif',
    description: "Tu vois les choses venir un peu plus tôt que les autres, et tu réagis un peu plus vite.",
    cost: 180,
    effect: { stats: { reflexes: 4, vitesse: 4 } },
  },
  {
    id: 'perk-bagage-technique',
    name: 'Bagage technique',
    description: "Tu montes sur le ring en connaissant déjà le Jab Éclair et la Garde de Fer.",
    cost: 220,
    effect: {},
    extras: { startingTechniqueIds: ['tech-generic-jab-eclair', 'tech-generic-garde-fer'] },
  },
  {
    id: 'perk-tete-froide',
    name: 'Tête froide',
    description: "Rien ne t'a jamais vraiment fait paniquer, et ça se voit dès tes premiers combats.",
    cost: 280,
    effect: { coolness: 20, stats: { mental: 5 } },
  },
  {
    id: 'perk-annee-pleine',
    name: 'Année pleine',
    description: "Un évènement de plus chaque année : plus de combats, plus d'entraînements, plus de vie.",
    cost: 340,
    effect: {},
    extras: { bonusEventsPerYear: 1 },
  },
  {
    id: 'perk-sang-de-fauve',
    name: 'Sang de fauve',
    description: "Quelque chose dort en toi bien plus souvent qu'à l'ordinaire. Reste à savoir si tu sauras le tenir.",
    cost: 400,
    effect: {},
    extras: { dormantChanceBonus: 0.5 },
  },
  {
    id: 'perk-depart-lance',
    name: 'Départ lancé',
    description: "Un parcours amateur déjà remarqué : les premiers paliers défilent nettement plus vite.",
    cost: 460,
    effect: {},
    extras: { careerPoints: 35 },
  },
  {
    id: 'perk-prodige',
    name: 'Prodige',
    description: "Rien d'exceptionnel nulle part, et pourtant meilleur que tout le monde partout.",
    cost: 600,
    effect: {
      stats: { puissance: 4, vitesse: 4, technique: 4, endurance: 4, reflexes: 4, mental: 4, strategie: 4 },
    },
  },
]

// Présentés du moins cher au plus cher : la boutique se lit comme une progression.
export const SHOP_PERKS: ShopPerk[] = [...PERK_DEFINITIONS].sort((a, b) => a.cost - b.cost)

export const SHOP_PERK_MAP: Record<string, ShopPerk> = SHOP_PERKS.reduce(
  (acc, p) => ({ ...acc, [p.id]: p }),
  {} as Record<string, ShopPerk>,
)
