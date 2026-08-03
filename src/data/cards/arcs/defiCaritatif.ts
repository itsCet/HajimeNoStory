import type { CareerArc, LifeMomentCard } from '../../../engine/types'

// Trame secondaire optionnelle : ne démarre PAS automatiquement — le joueur choisit
// de s'engager (ou non) via card-defi-caritatif-intro, dans la fenêtre Champion OPBF.
export const DEFI_CARITATIF_ARC: CareerArc = {
  id: 'arc-defi-caritatif',
  name: 'Le défi caritatif',
  description: "Une collecte de fonds pour sauver le club d'origine, menacé de fermeture faute de moyens.",
  cardSequenceIds: ['card-defi-caritatif-collecte', 'card-defi-caritatif-final'],
  optional: true,
  trophyId: 'mark-sauveur-salle',
}

export const DEFI_CARITATIF_INTRO: LifeMomentCard = {
  id: 'card-defi-caritatif-intro',
  type: 'life-moment',
  title: 'Une salle en sursis',
  narrativeText:
    "Une lettre discrète circule dans le vestiaire : sans un apport financier rapide, la salle où tout a commencé pour toi devra fermer ses portes d'ici la fin de l'année. Quelqu'un a suggéré d'organiser un gala caritatif — avec toi en tête d'affiche.",
  requirement: { minRankOrder: 8, onceOnly: true, weight: 2 },
  choices: [
    {
      id: 'choice-accepter-defi',
      label: "T'investir dans le gala caritatif",
      statTested: 'mental',
      difficulty: 40,
      outcomes: {
        criticalFailure: {
          text: "Tu acceptes sans vraiment mesurer l'ampleur de l'engagement que ça représente en plus du reste.",
          reward: { fatigue: 5, startArcId: 'arc-defi-caritatif' },
        },
        failure: {
          text: "Tu acceptes, un peu hésitant sur ce que ça va demander.",
          reward: { startArcId: 'arc-defi-caritatif' },
        },
        success: {
          text: "Tu acceptes sans hésiter. Cette salle t'a tout donné — c'est à ton tour, maintenant.",
          reward: { loyalty: 5, startArcId: 'arc-defi-caritatif' },
        },
        criticalSuccess: {
          text: "Tu acceptes et proposes même d'impliquer d'autres boxeurs du circuit. L'idée prend une ampleur inattendue.",
          reward: { loyalty: 8, reputationInternal: 5, startArcId: 'arc-defi-caritatif' },
        },
      },
    },
    {
      id: 'choice-decliner-defi',
      label: 'Décliner et rester concentré sur le titre',
      statTested: 'strategie',
      difficulty: 40,
      outcomes: {
        criticalFailure: {
          text: "Le refus passe mal dans le vestiaire. On te le fait sentir plus d'une fois dans les semaines qui suivent.",
          reward: { reputationInternal: -5, setFlags: ['flag-side-quest-resolved'] },
        },
        failure: {
          text: "Tu déclines sobrement, sans grande explication.",
          reward: { setFlags: ['flag-side-quest-resolved'] },
        },
        success: {
          text: "Tu expliques calmement tes priorités du moment. La salle comprendra, ou trouvera une autre solution.",
          reward: { setFlags: ['flag-side-quest-resolved'] },
        },
        criticalSuccess: {
          text: "Tu déclines le gala mais proposes un soutien financier discret et personnel à la place. Personne n'en parlera jamais publiquement.",
          reward: { loyalty: 4, setFlags: ['flag-side-quest-resolved'] },
        },
      },
    },
  ],
}

export const DEFI_CARITATIF_CARDS: LifeMomentCard[] = [
  {
    id: 'card-defi-caritatif-collecte',
    type: 'life-moment',
    title: 'Organiser la collecte',
    narrativeText:
      "Entre deux séances d'entraînement, il faut démarcher des sponsors, remplir une salle, convaincre d'autres boxeurs de participer. Ce n'est pas ton métier, mais tu t'y colles quand même.",
    requirement: {},
    choices: [
      {
        id: 'choice-reseau',
        label: 'Mobiliser ton réseau',
        statTested: 'mental',
        difficulty: 45,
        outcomes: {
          criticalFailure: { text: "Les refus s'enchaînent, et le découragement s'installe.", reward: { coolness: -5 } },
          failure: { text: "Quelques promesses vagues, rien de très concret encore.", reward: {} },
          success: { text: "Les engagements commencent à s'accumuler sérieusement.", reward: { reputationInternal: 4, careerPoints: 3 } },
          criticalSuccess: { text: "Ta simple présence suffit à convaincre des sponsors hésitants depuis des mois.", reward: { reputationInternal: 7, reputationExternal: 4, careerPoints: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-defi-caritatif-final',
    type: 'life-moment',
    title: 'La soirée du gala',
    narrativeText:
      "La salle est comble, bien au-delà de ce que quiconque avait osé espérer. Une exhibition légère t'oppose à un autre professionnel du circuit, pour le plaisir du public venu soutenir la cause.",
    requirement: {},
    choices: [
      {
        id: 'choice-spectacle-gala',
        label: 'Offrir un vrai spectacle au public',
        statTested: 'mental',
        difficulty: 45,
        outcomes: {
          criticalFailure: {
            text: "La soirée reste correcte, sans plus, mais l'objectif financier est atteint malgré tout grâce à l'affluence.",
            reward: { setFlags: ['flag-side-quest-resolved'] },
          },
          failure: {
            text: "La soirée se déroule sans accroc. La collecte atteint tout juste ce qu'il fallait.",
            reward: { setFlags: ['flag-side-quest-resolved'] },
          },
          success: {
            text: "La salle est électrique du début à la fin. La collecte dépasse largement l'objectif fixé — la salle est sauvée.",
            reward: {
              reputationInternal: 8,
              reputationExternal: 6,
              loyalty: 6,
              setFlags: ['flag-side-quest-resolved'],
              unlockTrophyIds: ['mark-sauveur-salle'],
            },
          },
          criticalSuccess: {
            text: "La soirée devient un évènement dont tout le quartier parlera encore des années plus tard. La salle n'a jamais été aussi solide financièrement.",
            reward: {
              reputationInternal: 12,
              reputationExternal: 10,
              loyalty: 10,
              setFlags: ['flag-side-quest-resolved'],
              unlockTrophyIds: ['mark-sauveur-salle'],
            },
          },
        },
      },
    ],
  },
]
