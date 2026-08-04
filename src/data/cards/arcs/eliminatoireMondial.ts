import type { CareerArc, LifeMomentCard, FightCard } from '../../../engine/types'
import { GESTURE_TECHNIQUES } from '../gestureTechniques'

// Trame obligatoire : l'éliminatoire mondial, dernière étape avant une tentative de
// titre. Démarre une fois Champion OPBF et la trame secondaire résolue (acceptée ou déclinée).
export const ELIMINATOIRE_MONDIAL_ARC: CareerArc = {
  id: 'arc-eliminatoire-mondial',
  name: "L'éliminatoire mondial",
  description: 'Un combat qualificatif face à un top 5 mondial, pour gagner le droit de défier le champion.',
  cardSequenceIds: ['card-eliminatoire-annonce', 'card-eliminatoire-mondial-final'],
}

const ANNONCE: LifeMomentCard = {
  id: 'card-eliminatoire-annonce',
  type: 'life-moment',
  title: 'Un classement mondial',
  narrativeText:
    "L'organisme mondial publie son nouveau classement — ton nom y figure, pour la première fois. Une seule victoire de plus, contre l'actuel numéro 3, et c'est la porte du titre qui s'entrouvre.",
  requirement: {},
  choices: [
    {
      id: 'choice-pression',
      label: 'Gérer la pression de cette annonce',
      statTested: 'mental',
      difficulty: 60,
      outcomes: {
        criticalFailure: { text: "Le poids de l'enjeu s'installe plus fort que tu ne l'aurais voulu.", reward: { coolness: -8 } },
        failure: { text: "Tu prends la nouvelle avec un mélange d'excitation et de nervosité.", reward: {} },
        success: { text: "Tu accueilles la nouvelle avec une clarté qui te surprend toi-même.", reward: { coolness: 5, careerPoints: 6 } },
        criticalSuccess: { text: "Rien de tout ça ne semble peser sur toi. C'est juste la suite logique de tout ce travail.", reward: { coolness: 8, careerPoints: 9 } },
      },
    },
    {
      id: 'choice-etudier-numero-3',
      label: 'Te plonger immédiatement dans ses combats',
      statTested: 'strategie',
      difficulty: 60,
      outcomes: {
        criticalFailure: { text: "Tu accumules les vidéos sans qu'aucun plan cohérent n'en ressorte.", reward: { coolness: -8 } },
        failure: { text: "Quelques pistes générales, sans grande précision encore.", reward: {} },
        success: { text: "Un premier plan de combat se dessine déjà, avant même le début du vrai camp d'entraînement.", reward: { stats: { strategie: 2 }, careerPoints: 6 } },
        criticalSuccess: { text: "Tu identifies une faiblesse nette dans son style, que personne ne semble avoir exploitée avant toi.", reward: { stats: { strategie: 3 }, careerPoints: 9 } },
      },
    },
  ],
}

const FINAL: FightCard = {
  id: 'card-eliminatoire-mondial-final',
  type: 'fight',
  title: "Éliminatoire mondial",
  narrativeText:
    "Le numéro 3 mondial n'a rien à perdre et tout à prouver. Ce combat n'offre aucune place à l'approximation — le vainqueur affrontera le champion du monde, le perdant devra tout recommencer.",
  opponentName: 'Le numéro 3 mondial',
  opponentTagline: "Rien à perdre, tout à prouver.",
  requirement: {},
  arcId: 'arc-eliminatoire-mondial',
  isArcFinale: true,
  gestures: [
    {
      id: 'g-elim-puissance',
      label: "Chercher à conclure avant la limite",
      statTested: 'puissance',
      difficulty: 68,
      eligibleTechniqueIds: GESTURE_TECHNIQUES.puissance,
      outcomes: {
        criticalFailure: { text: "Il retourne ton agressivité contre toi avec une précision redoutable.", reward: { health: -14, coolness: -8 } },
        failure: { text: "Le combat reste indécis, chacun cherchant l'ouverture décisive.", reward: { fatigue: 10 } },
        success: {
          text: "Le combat penche clairement de ton côté. Le titre mondial n'a jamais été aussi proche.",
          reward: { careerPoints: 26, reputationExternal: 16, reputationInternal: 10 },
        },
        criticalSuccess: {
          text: "Une victoire sans appel. Le monde entier de la boxe commence, cette nuit-là, à prononcer ton nom différemment.",
          reward: { careerPoints: 34, reputationExternal: 22, reputationInternal: 14 },
        },
      },
    },
    {
      id: 'g-elim-strategie',
      label: 'Imposer un plan de combat rigoureux',
      statTested: 'strategie',
      difficulty: 68,
      eligibleTechniqueIds: GESTURE_TECHNIQUES.strategie,
      outcomes: {
        criticalFailure: { text: "Il sort complètement de ce que tu avais préparé, et le plan s'effondre.", reward: { coolness: -8, fatigue: 10 } },
        failure: { text: "Le plan tient à peu près, sans dominer réellement l'échange.", reward: { fatigue: 10 } },
        success: {
          text: "Le plan fonctionne round après round. La logique du combat t'appartient entièrement.",
          reward: { careerPoints: 26, reputationExternal: 16, reputationInternal: 10 },
        },
        criticalSuccess: {
          text: "Il n'a jamais existé de réponse à ce plan-là. Une démonstration presque totale, du début à la fin.",
          reward: { careerPoints: 34, reputationExternal: 22, reputationInternal: 14 },
        },
      },
    },
  ],
  rankUpOnWin: 'rank-challenger-mondial',
}

export const ELIMINATOIRE_MONDIAL_LIFE_CARDS: LifeMomentCard[] = [ANNONCE]
export const ELIMINATOIRE_MONDIAL_FIGHT_CARDS: FightCard[] = [FINAL]
