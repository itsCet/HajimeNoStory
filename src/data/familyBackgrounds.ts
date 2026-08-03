import type { FamilyBackground } from '../engine/types'

// N'apparaît que si le joueur a choisi la lignée "Autodidacte".
export const FAMILY_BACKGROUNDS: FamilyBackground[] = [
  {
    id: 'fam-peche',
    name: 'Famille de pêcheurs',
    tagline: "Tu t'es fait les bras sur les casiers avant de te les faire sur un sac de frappe.",
    startingStatModifiers: { endurance: 2 },
  },
  {
    id: 'fam-orphelin',
    name: 'Orphelin de quartier',
    tagline: "Tu as grandi en te fiant à ton propre jugement, faute d'avoir eu le choix.",
    startingStatModifiers: { mental: 2 },
  },
  {
    id: 'fam-commerce',
    name: 'Famille de commerçants',
    tagline: "Tu sais depuis toujours qu'un bon prix, ça se négocie sans jamais hausser le ton.",
    startingStatModifiers: { strategie: 2 },
  },
  {
    id: 'fam-boxeur-disparu',
    name: "Fils ou fille d'un boxeur disparu",
    tagline: "Un nom que personne ne prononce à la maison, et des gants qui traînaient pourtant dans un placard.",
    startingStatModifiers: { technique: 2 },
  },
  {
    id: 'fam-artisans',
    name: 'Lignée d\'artisans du gant',
    tagline: "Tu as grandi au milieu du cuir et du fil à coudre, à écouter parler de poings sans jamais en donner.",
    startingStatModifiers: { puissance: 2 },
  },
  {
    id: 'fam-immigre',
    name: "Immigré d'un autre quartier",
    tagline: "Arriver quelque part où personne ne t'attend t'apprend vite à te faire ta place.",
    startingStatModifiers: { reflexes: 2 },
  },
  {
    id: 'fam-instructeurs',
    name: "Famille d'entraîneurs",
    tagline: "Tu as grandi au bord des rings sans jamais y monter — jusqu'au jour où plus personne n'a pu t'en empêcher.",
    startingStatModifiers: { vitesse: 2 },
  },
]

export const FAMILY_BACKGROUND_MAP: Record<string, FamilyBackground> = FAMILY_BACKGROUNDS.reduce(
  (acc, f) => ({ ...acc, [f.id]: f }),
  {} as Record<string, FamilyBackground>,
)
