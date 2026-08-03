import type { Lineage } from '../engine/types'

export const LINEAGES: Lineage[] = [
  {
    id: 'lin-kurogane',
    name: 'Lignée Kurogane',
    mentorName: 'Jin Kurogane',
    isAutodidact: false,
    tagline: "On ne discute pas avec le sac de sable. On le fait plier.",
    description:
      "Une école du corps forgé au marteau : ici, la puissance se construit à coups de répétitions, jamais offerte.",
    startingStatModifiers: { puissance: 3, mental: -1 },
    exclusiveCardId: 'card-lineage-kurogane',
    secretTechniqueId: 'tech-lineage-kurogane',
  },
  {
    id: 'lin-fujimori',
    name: 'Lignée Fujimori',
    mentorName: 'Sae Fujimori',
    isAutodidact: false,
    tagline: "Un coup sale ne compte pas. Un coup juste, toujours.",
    description:
      "L'école de la précision chirurgicale, où chaque geste est décomposé jusqu'à l'os avant d'être autorisé sur un ring.",
    startingStatModifiers: { technique: 3, puissance: -1 },
    exclusiveCardId: 'card-lineage-fujimori',
    secretTechniqueId: 'tech-lineage-fujimori',
  },
  {
    id: 'lin-otsuka',
    name: 'Lignée Otsuka',
    mentorName: 'Ryo Otsuka',
    isAutodidact: false,
    tagline: "L'adversaire se lit avant de se frappe.",
    description:
      "Une école qui passe autant de temps devant des carnets de notes que devant un ring, à décortiquer l'adversaire d'avant.",
    startingStatModifiers: { mental: 3, vitesse: -1 },
    exclusiveCardId: 'card-lineage-otsuka',
    secretTechniqueId: 'tech-lineage-otsuka',
  },
  {
    id: 'lin-shirasagi',
    name: 'Lignée Shirasagi',
    mentorName: 'Ren Shirasagi',
    isAutodidact: false,
    tagline: "Le héron ne se bat pas contre le vent. Il s'en sert.",
    description:
      "L'école de la légèreté : jeu de jambes obsessionnel, poids du corps qui ne se pose jamais longtemps au même endroit.",
    startingStatModifiers: { vitesse: 3, endurance: -1 },
    exclusiveCardId: 'card-lineage-shirasagi',
    secretTechniqueId: 'tech-lineage-shirasagi',
  },
  {
    id: 'lin-domon',
    name: 'Lignée Domon',
    mentorName: 'Kenji Domon',
    isAutodidact: false,
    tagline: "Tomber n'est rien. C'est le temps qu'on met à se relever qui compte.",
    description:
      "Une école bâtie sur l'encaissement : on y apprend à tenir debout bien après le moment où il serait raisonnable de plier.",
    startingStatModifiers: { endurance: 3, technique: -1 },
    exclusiveCardId: 'card-lineage-domon',
    secretTechniqueId: 'tech-lineage-domon',
  },
  {
    id: 'lin-akatsu',
    name: 'Lignée Akatsu',
    mentorName: 'Ichiro Akatsu',
    isAutodidact: false,
    tagline: "La rue n'a jamais eu de règlement. Le ring en a un. Utilise l'écart.",
    description:
      "Une école née loin des fédérations, faite d'instinct et de sparring rugueux plutôt que de théorie.",
    startingStatModifiers: { reflexes: 3, mental: -1 },
    exclusiveCardId: 'card-lineage-akatsu',
    secretTechniqueId: 'tech-lineage-akatsu',
  },
  {
    id: 'lin-himura',
    name: 'Lignée Himura',
    mentorName: 'Kaoru Himura',
    isAutodidact: false,
    tagline: "Celui qui attaque en premier montre déjà tout ce qu'il sait faire.",
    description:
      "L'art de la patience active : ne jamais initier, toujours répondre, et transformer chaque erreur adverse en ouverture.",
    startingStatModifiers: { reflexes: 3, puissance: -1 },
    exclusiveCardId: 'card-lineage-himura',
    secretTechniqueId: 'tech-lineage-himura',
  },
  {
    id: 'lin-nishikido',
    name: 'Lignée Nishikido',
    mentorName: 'Gen Nishikido',
    isAutodidact: false,
    tagline: "Un combat se gagne au moins deux fois : sur le papier, puis sur le ring.",
    description:
      "Une école qui traite la boxe comme un jeu d'échecs à mains nues, où le plan compte autant que le poing.",
    startingStatModifiers: { strategie: 3, endurance: -1 },
    exclusiveCardId: 'card-lineage-nishikido',
    secretTechniqueId: 'tech-lineage-nishikido',
  },
  {
    id: 'lin-tsukimori',
    name: 'Lignée Tsukimori',
    mentorName: 'Aya Tsukimori',
    isAutodidact: false,
    tagline: "Une salle vide n'a jamais fait gagner personne. Fais-la vibrer.",
    description:
      "Une école qui cultive le sens du spectacle autant que le coup de poing — la salle doit se souvenir de toi.",
    startingStatModifiers: { mental: 3, strategie: -1 },
    exclusiveCardId: 'card-lineage-tsukimori',
    secretTechniqueId: 'tech-lineage-tsukimori',
  },
  {
    id: 'lin-autodidacte',
    name: 'Autodidacte',
    mentorName: '',
    isAutodidact: true,
    tagline: "Personne ne t'a rien donné. Alors personne ne pourra dire que tu ne l'as pas mérité.",
    description:
      "Pas d'école, pas de nom à porter en entrant sur un ring — seulement ce que tu as construit toi-même, carnet après carnet, bleu après bleu.",
    startingStatModifiers: {},
    exclusiveCardId: null,
    secretTechniqueId: null,
  },
]

export const LINEAGE_MAP: Record<string, Lineage> = LINEAGES.reduce(
  (acc, l) => ({ ...acc, [l.id]: l }),
  {} as Record<string, Lineage>,
)
