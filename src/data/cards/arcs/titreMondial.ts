import type { CareerArc, LifeMomentCard, FightCard } from '../../../engine/types'
import { GESTURE_TECHNIQUES } from '../gestureTechniques'

// Trame obligatoire : la tentative de titre mondial face au champion en titre.
// Démarre à l'entrée dans le rang "Challenger mondial". Un échec ne ferme rien :
// le rang ne progresse pas, la condition de déclenchement reste vraie, et la trame
// se rejoue depuis le début — la revanche s'écrit d'elle-même.
export const TITRE_MONDIAL_ARC: CareerArc = {
  id: 'arc-titre-mondial',
  name: 'Le titre mondial',
  description: 'La tentative de titre mondial face au champion en titre, Ramon Vasquez.',
  cardSequenceIds: ['card-titre-mondial-annonce', 'card-titre-mondial-final'],
  trophyId: 'trophy-rank-champion-monde',
}

const ANNONCE: LifeMomentCard = {
  id: 'card-titre-mondial-annonce',
  type: 'life-moment',
  title: "Ramon Vasquez",
  narrativeText:
    "« El Huracán. » Champion du monde depuis six ans, vainqueur de chacune de ses quatorze défenses de titre, la plupart avant la limite. Le contrat vient d'être signé. C'est lui, maintenant, ou ça ne sera peut-être jamais.",
  requirement: {},
  choices: [
    {
      id: 'choice-vasquez-mental',
      label: "Te préparer mentalement à l'ampleur de l'évènement",
      statTested: 'mental',
      difficulty: 62,
      outcomes: {
        criticalFailure: { text: "Le nom seul, répété par tous les médias, commence à peser lourdement sur tes épaules.", reward: { coolness: -10 } },
        failure: { text: "Tu abordes la nouvelle avec un mélange de fébrilité et de détermination.", reward: {} },
        success: { text: "Tu poses les choses avec clarté : un champion, un défi, un plan. Rien de plus, rien de moins.", reward: { coolness: 6, careerPoints: 6 } },
        criticalSuccess: { text: "L'ampleur de l'évènement, loin de te peser, semble au contraire te porter. Tu n'as jamais été aussi centré.", reward: { coolness: 10, careerPoints: 9 } },
      },
    },
    {
      id: 'choice-vasquez-etude',
      label: 'Étudier ses quatorze défenses une à une',
      statTested: 'strategie',
      difficulty: 62,
      outcomes: {
        criticalFailure: { text: "Six ans de combats, c'est trop à digérer d'un coup. Tu ressors de l'étude plus confus qu'éclairé.", reward: { coolness: -10 } },
        failure: { text: "Des habitudes se dessinent vaguement, sans grande certitude.", reward: {} },
        success: { text: "Un schéma clair ressort de ses dernières défenses — une prudence excessive dès qu'il est touché fort.", reward: { stats: { strategie: 2 }, careerPoints: 6 } },
        criticalSuccess: { text: "Tu identifies une faille qu'aucun de ses quatorze adversaires précédents n'a su exploiter.", reward: { stats: { strategie: 3 }, careerPoints: 9 } },
      },
    },
  ],
}

const FINAL: FightCard = {
  id: 'card-titre-mondial-final',
  type: 'fight',
  title: 'Championnat du monde',
  narrativeText:
    "L'arène est comble, les caméras du monde entier braquées sur le ring. Ramon Vasquez t'attend, la ceinture qu'il n'a jamais perdue posée sur son épaule. Quatorze défenses. Ce soir, tu comptes bien que ce chiffre s'arrête là.",
  opponentName: 'Ramon Vasquez',
  opponentTagline: '« El Huracán » — champion du monde invaincu depuis six ans.',
  requirement: {},
  arcId: 'arc-titre-mondial',
  isArcFinale: true,
  gestures: [
    {
      id: 'g-vasquez-sang-froid',
      label: 'Garder ton sang-froid coûte que coûte',
      statTested: 'mental',
      difficulty: 72,
      eligibleTechniqueIds: GESTURE_TECHNIQUES.mental,
      outcomes: {
        criticalFailure: {
          text: "L'ampleur du moment finit par te submerger. Vasquez, expérimenté, ne laisse passer aucune de tes hésitations.",
          reward: { health: -16, coolness: -10, setFlags: ['flag-lost-first-world-title'] },
        },
        failure: {
          text: "Tu tiens debout, mais Vasquez impose son rythme sur l'essentiel du combat. La décision, aux points, lui revient.",
          reward: { fatigue: 12, reputationExternal: 8, setFlags: ['flag-lost-first-world-title'] },
        },
        success: {
          text: "Tu restes d'un calme absolu quand tout, autour de toi, s'emballe. Vasquez, pour la première fois en six ans, perd sa ceinture.",
          reward: {
            careerPoints: 40,
            reputationExternal: 25,
            reputationInternal: 18,
            setFlags: ['flag-world-title-comeback-won'],
          },
        },
        criticalSuccess: {
          text: "Ta clarté d'esprit, cette nuit-là, restera dans les mémoires aussi longtemps que le combat lui-même. El Huracán s'incline, et le monde change de champion.",
          reward: {
            careerPoints: 50,
            reputationExternal: 32,
            reputationInternal: 22,
            setFlags: ['flag-world-title-comeback-won'],
          },
        },
      },
    },
    {
      id: 'g-vasquez-strategie',
      label: 'Exécuter le plan préparé au millimètre',
      statTested: 'strategie',
      difficulty: 72,
      eligibleTechniqueIds: GESTURE_TECHNIQUES.strategie,
      outcomes: {
        criticalFailure: {
          text: "Vasquez brise ton plan dès les premiers échanges. Tu passes le reste du combat à courir après le rythme.",
          reward: { health: -16, coolness: -10, setFlags: ['flag-lost-first-world-title'] },
        },
        failure: {
          text: "Le plan tient un temps, puis s'effrite face à l'expérience de six années de défenses réussies.",
          reward: { fatigue: 12, reputationExternal: 8, setFlags: ['flag-lost-first-world-title'] },
        },
        success: {
          text: "Chaque étape du plan s'exécute exactement comme prévu. Vasquez, pour la première fois en six ans, perd sa ceinture.",
          reward: {
            careerPoints: 40,
            reputationExternal: 25,
            reputationInternal: 18,
            setFlags: ['flag-world-title-comeback-won'],
          },
        },
        criticalSuccess: {
          text: "Une exécution parfaite, de la première à la dernière seconde. El Huracán s'incline, et le monde change de champion.",
          reward: {
            careerPoints: 50,
            reputationExternal: 32,
            reputationInternal: 22,
            setFlags: ['flag-world-title-comeback-won'],
          },
        },
      },
    },
  ],
  rankUpOnWin: 'rank-champion-monde',
}

export const TITRE_MONDIAL_LIFE_CARDS: LifeMomentCard[] = [ANNONCE]
export const TITRE_MONDIAL_FIGHT_CARDS: FightCard[] = [FINAL]
