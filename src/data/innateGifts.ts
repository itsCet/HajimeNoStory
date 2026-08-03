import type { InnateGift } from '../engine/types'

// Tiré au hasard à la création, gratuit — apparaît en badge distinct sur la fiche.
export const INNATE_GIFTS: InnateGift[] = [
  {
    id: 'gift-reflexes-genie',
    name: 'Réflexes de génie',
    emoji: '⚡',
    description: "Ton corps réagit avant que ta tête ait fini de comprendre ce qui arrive.",
    statBoosts: ['reflexes', 'vitesse'],
    boostAmount: 3,
  },
  {
    id: 'gift-machoire-fer',
    name: 'Mâchoire de fer',
    emoji: '🗿',
    description: "Certains encaissent un coup. Toi, tu encaisses le combat entier.",
    statBoosts: ['endurance', 'puissance'],
    boostAmount: 3,
  },
  {
    id: 'gift-sens-ko',
    name: 'Sens du KO',
    emoji: '🎯',
    description: "Tu sens, avant tout le monde, la fraction de seconde où un adversaire vacille.",
    statBoosts: ['puissance', 'technique'],
    boostAmount: 3,
  },
  {
    id: 'gift-travailleur-acharne',
    name: 'Travailleur acharné',
    emoji: '🔥',
    description: "Là où d'autres s'arrêtent épuisés, tu n'as jamais vraiment su reconnaître cette limite-là.",
    statBoosts: ['endurance', 'strategie'],
    boostAmount: 3,
  },
  {
    id: 'gift-charisme-meneur',
    name: 'Charisme de meneur',
    emoji: '🌟',
    description: "Une salle entière se met à croire en toi avant même que tu aies gagné quoi que ce soit.",
    statBoosts: ['mental', 'vitesse'],
    boostAmount: 3,
  },
  {
    id: 'gift-sang-froid-naturel',
    name: 'Sang-froid naturel',
    emoji: '🧊',
    description: "Le chaos d'un combat ne t'a jamais vraiment fait perdre le fil.",
    statBoosts: ['mental', 'reflexes'],
    boostAmount: 3,
  },
]

export const INNATE_GIFT_MAP: Record<string, InnateGift> = INNATE_GIFTS.reduce(
  (acc, g) => ({ ...acc, [g.id]: g }),
  {} as Record<string, InnateGift>,
)
