import type { Club } from '../engine/types'

export const CLUBS: Club[] = [
  {
    id: 'club-kanro',
    name: 'Club Kanro',
    city: 'Kanro-cho, quartier du port',
    tagline: "Ici, on sent le sel et la sueur avant même d'entrer.",
    description:
      "Une salle nichée entre deux entrepôts, fréquentée par des dockers et des enfants de dockers. On y respecte d'abord ceux qui reviennent, jour après jour, sans jamais se plaindre.",
    availableLineageIds: ['lin-kurogane', 'lin-domon', 'lin-akatsu', 'lin-autodidacte'],
    startingStatModifiers: { endurance: 1 },
  },
  {
    id: 'club-vasseur',
    name: 'Gymnase Vasseur',
    city: 'Centre-ville',
    tagline: "Le tapis y est propre. La pression, beaucoup moins.",
    description:
      "Un gymnase moderne aux miroirs immaculés, sponsorisé, avec des attentes de résultats qui ne pardonnent pas longtemps la médiocrité.",
    availableLineageIds: ['lin-fujimori', 'lin-nishikido', 'lin-tsukimori', 'lin-autodidacte'],
    startingStatModifiers: { technique: 1 },
  },
  {
    id: 'club-etoile-nord',
    name: "Club de l'Étoile du Nord",
    city: 'Hautes terres du nord',
    tagline: "L'hiver n'attend personne. L'entraîneur non plus.",
    description:
      "Une salle austère où le chauffage est un luxe et la discipline une religion. Ceux qui en sortent ont une réputation qui les précède.",
    availableLineageIds: ['lin-domon', 'lin-himura', 'lin-otsuka', 'lin-autodidacte'],
    startingStatModifiers: { mental: 1 },
  },
  {
    id: 'club-phare',
    name: 'Salle du Phare',
    city: 'Ville côtière',
    tagline: "Trois générations de boxeurs sont passées par cette porte fatiguée.",
    description:
      "Une institution locale tenue par la même famille depuis des décennies, où la tradition compte autant que le talent brut.",
    availableLineageIds: ['lin-shirasagi', 'lin-himura', 'lin-fujimori', 'lin-autodidacte'],
    startingStatModifiers: { vitesse: 1 },
  },
  {
    id: 'club-renard-acier',
    name: "Le Renard d'Acier",
    city: 'Zone industrielle',
    tagline: "Pas de miroirs, pas de musique. Juste le bruit des gants.",
    description:
      "Une salle underground sans prétention, fréquentée par ceux qui n'ont pas eu d'autre choix que d'apprendre vite et sans filet.",
    availableLineageIds: ['lin-akatsu', 'lin-kurogane', 'lin-tsukimori', 'lin-autodidacte'],
    startingStatModifiers: { reflexes: 1 },
  },
  {
    id: 'club-terrain-vague',
    name: 'Fédération Terrain Vague',
    city: 'Périphérie',
    tagline: "Un ring monté à la main, dans un hangar qui n'était pas prévu pour ça.",
    description:
      "Une salle improvisée, tenue à bout de bras par des bénévoles, où l'esprit de famille recomposée compense le manque de moyens.",
    availableLineageIds: ['lin-otsuka', 'lin-nishikido', 'lin-shirasagi', 'lin-autodidacte'],
    startingStatModifiers: { strategie: 1 },
  },
]

export const CLUB_MAP: Record<string, Club> = CLUBS.reduce(
  (acc, c) => ({ ...acc, [c.id]: c }),
  {} as Record<string, Club>,
)
