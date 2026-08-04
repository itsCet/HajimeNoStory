import type { CareerArc, LifeMomentCard, FightCard } from '../../../engine/types'

// Trame obligatoire : l'ouverture à la scène continentale et la rivalité avec le
// prétendant numéro 1 de l'OPBF. Démarre à l'entrée dans le rang "Champion du Japon".
export const RIVALITE_OPBF_ARC: CareerArc = {
  id: 'arc-rivalite-opbf',
  name: 'La rivalité du Pacifique',
  description: "L'ouverture à la scène continentale et le duel avec le prétendant numéro 1 de l'OPBF.",
  cardSequenceIds: [
    'card-rivalite-opbf-intro',
    'card-rivalite-opbf-revers',
    'card-rivalite-opbf-prep',
    'card-rivalite-opbf-final',
  ],
  trophyId: 'trophy-rank-champion-opbf',
}

const INTRO: LifeMomentCard = {
  id: 'card-rivalite-opbf-intro',
  type: 'life-moment',
  title: "Un nom venu d'ailleurs",
  narrativeText:
    "La fédération continentale t'a repéré. On te parle déjà de Wirawan Nurdin — surnommé « Vent de Fer » — le prétendant numéro 1 de l'OPBF, invaincu en dix-huit combats, réputé pour une puissance de frappe hors norme.",
  requirement: {},
  choices: [
    {
      id: 'choice-accueillir',
      label: "Accueillir le défi avec calme",
      statTested: 'mental',
      difficulty: 55,
      outcomes: {
        criticalFailure: {
          text: "Le surnom seul suffit à te travailler l'esprit plus que tu ne voudrais l'admettre.",
          reward: { coolness: -6 },
        },
        failure: { text: "Tu affiches un calme un peu forcé.", reward: {} },
        success: {
          text: "Un nouveau nom, un nouveau défi — rien de plus. Tu l'intègres sans qu'il pèse plus que nécessaire.",
          reward: { coolness: 4, careerPoints: 4 },
        },
        criticalSuccess: {
          text: "Le surnom te fait presque sourire. Vent de Fer ou pas, ce ne sera jamais qu'un adversaire de plus à étudier.",
          reward: { coolness: 7, careerPoints: 6 },
        },
      },
    },
    {
      id: 'choice-etudier-nurdin',
      label: 'Rassembler tout ce qui existe sur ses combats',
      statTested: 'strategie',
      difficulty: 55,
      outcomes: {
        criticalFailure: {
          text: "Les images disponibles sont rares et contradictoires. Tu ressors plus confus qu'informé.",
          reward: { coolness: -6 },
        },
        failure: { text: "Tu glanes quelques images, sans grand schéma clair.", reward: {} },
        success: {
          text: "Tu rassembles assez d'images pour cerner ses habitudes de garde, malgré la rareté du matériel.",
          reward: { stats: { strategie: 2 }, careerPoints: 4 },
        },
        criticalSuccess: {
          text: "Un vieux combat amateur, presque oublié, révèle une faiblesse que personne d'autre n'a remarquée.",
          reward: { stats: { strategie: 3 }, careerPoints: 6 },
        },
      },
    },
  ],
}

const REVERS: FightCard = {
  id: 'card-rivalite-opbf-revers',
  type: 'fight',
  title: 'Gala international',
  narrativeText:
    "Un gala organisé conjointement par les deux fédérations vous met face à face pour la première fois, dans un format d'exhibition à trois rounds. Rien d'officiel n'est en jeu — sinon la première vraie impression que vous laisserez l'un sur l'autre.",
  opponentName: 'Wirawan Nurdin',
  opponentTagline: '« Vent de Fer » — invaincu en dix-huit combats.',
  opponentAggression: 'aggressive',
  totalRounds: 3,
  koThreshold: 5,
  baseDifficulty: 58,
  requirement: {},
  arcId: 'arc-rivalite-opbf',
  outcomes: {
    criticalFailure: {
      text: "Sa puissance dépasse tout ce que tu avais imaginé. Un coup au corps te coupe le souffle net.",
      reward: { health: -8, coolness: -6 },
    },
    failure: { text: "Tu encaisses plus que tu n'aurais voulu, mais tu tiens debout.", reward: { fatigue: 6 } },
    success: {
      text: "Tu prends la mesure de sa puissance sans jamais te laisser vraiment toucher. Un début de respect mutuel s'installe.",
      reward: { careerPoints: 6, reputationExternal: 5 },
    },
    criticalSuccess: {
      text: "Tu le touches deux fois sans qu'il ne te touche une seule. Nurdin recule, visiblement surpris par ce qu'il vient de découvrir.",
      reward: { careerPoints: 9, reputationExternal: 8 },
    },
  },
}

const PREP: LifeMomentCard = {
  id: 'card-rivalite-opbf-prep',
  type: 'life-moment',
  title: 'Préparer la revanche',
  narrativeText:
    "Le vrai combat, celui qui comptera pour le titre, est fixé. Après le gala, tu sais exactement ce qui t'attend — et exactement ce qu'il va falloir travailler pour y répondre.",
  requirement: {},
  choices: [
    {
      id: 'choice-encaissement',
      label: "Travailler l'encaissement",
      statTested: 'endurance',
      difficulty: 58,
      outcomes: {
        criticalFailure: { text: "Le corps proteste plus que prévu. Tu ralentis la dernière semaine de camp.", reward: { fatigue: 12, health: -4 } },
        failure: { text: "Le travail avance, sans éclat particulier.", reward: { fatigue: 6 } },
        success: { text: "Ta capacité à encaisser progresse nettement. Le prochain coup de Nurdin comptera moins.", reward: { stats: { endurance: 3 }, careerPoints: 6 } },
        criticalSuccess: { text: "Tu te sens capable d'encaisser n'importe quoi désormais. Le sparring-partner engagé pour l'occasion en sort épuisé, pas toi.", reward: { stats: { endurance: 4 }, careerPoints: 9 } },
      },
    },
    {
      id: 'choice-vitesse-prep',
      label: 'Miser sur la vitesse pour ne jamais être là où il frappe',
      statTested: 'vitesse',
      difficulty: 58,
      outcomes: {
        criticalFailure: { text: "Tu forces le rythme et te blesses légèrement à la cheville.", reward: { health: -5, fatigue: 8 } },
        failure: { text: "La vitesse progresse peu.", reward: { fatigue: 6 } },
        success: { text: "Tes déplacements gagnent nettement en vivacité.", reward: { stats: { vitesse: 3 }, careerPoints: 6 } },
        criticalSuccess: { text: "Tu te sens plus léger que jamais sur tes appuis. Exactement ce qu'il faut face à un puncher pareil.", reward: { stats: { vitesse: 4 }, careerPoints: 9 } },
      },
    },
  ],
}

const FINAL: FightCard = {
  id: 'card-rivalite-opbf-final',
  type: 'fight',
  title: 'Champion OPBF',
  narrativeText:
    "Le stade continental est comble. Wirawan Nurdin ne sourit pas cette fois — le gala est loin derrière vous deux. Ce combat-ci compte pour de vrai, et vous le savez tous les deux.",
  opponentName: 'Wirawan Nurdin',
  opponentTagline: '« Vent de Fer » — prétendant numéro 1 de l\'OPBF.',
  opponentAggression: 'aggressive',
  totalRounds: 5,
  koThreshold: 5,
  baseDifficulty: 66,
  requirement: {},
  arcId: 'arc-rivalite-opbf',
  isArcFinale: true,
  outcomes: {
    criticalFailure: {
      text: "Sa puissance a toujours une longueur d'avance sur ta résistance. Le combat bascule nettement en sa faveur.",
      reward: { health: -14, coolness: -8 },
    },
    failure: { text: "Tu tiens, difficilement, mais le combat reste équilibré au mieux.", reward: { fatigue: 10 } },
    success: {
      text: "Tu absorbes ce qu'il a de plus fort à offrir, et tu es toujours là pour répondre. Nurdin commence, pour la première fois, à douter.",
      reward: { careerPoints: 24, reputationExternal: 14, reputationInternal: 10 },
    },
    criticalSuccess: {
      text: "Le round bascule complètement. Nurdin, qui n'avait jamais eu à se battre pour de bon, découvre ce soir-là ce que ça signifie vraiment.",
      reward: { careerPoints: 32, reputationExternal: 20, reputationInternal: 14 },
    },
  },
  rankUpOnWin: 'rank-champion-opbf',
}

export const RIVALITE_OPBF_LIFE_CARDS: LifeMomentCard[] = [INTRO, PREP]
export const RIVALITE_OPBF_FIGHT_CARDS: FightCard[] = [REVERS, FINAL]
