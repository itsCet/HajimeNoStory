import type { CareerArc, LifeMomentCard, FightCard } from '../../../engine/types'

// Trame obligatoire : le défi du champion du Japon en titre. Démarre automatiquement
// à l'entrée dans le rang "Classé national".
export const TITRE_NATIONAL_ARC: CareerArc = {
  id: 'arc-titre-national',
  name: 'Le titre national',
  description: 'Le défi du champion du Japon en titre, la première vraie consécration.',
  cardSequenceIds: ['card-titre-national-annonce', 'card-titre-national-prep', 'card-titre-national-final'],
  trophyId: 'trophy-rank-champion-japon',
}

const ANNONCE: LifeMomentCard = {
  id: 'card-titre-national-annonce',
  type: 'life-moment',
  title: 'Une lettre de la fédération',
  narrativeText:
    "L'enveloppe porte le tampon officiel de la fédération. À l'intérieur, une date, un lieu, et un nom : Kazuma Oda, champion du Japon en titre depuis trois ans, invaincu dans cette catégorie. C'est lui, ou personne.",
  requirement: {},
  choices: [
    {
      id: 'choice-etude',
      label: "Étudier tous ses combats disponibles",
      statTested: 'strategie',
      difficulty: 55,
      outcomes: {
        criticalFailure: {
          text: "Les vidéos s'accumulent sans qu'aucun schéma clair n'en ressorte. Tu perds plus de temps que tu n'en gagnes.",
          reward: { coolness: -5 },
        },
        failure: { text: "Tu repères quelques habitudes, sans grande certitude.", reward: {} },
        success: {
          text: "Un schéma se dessine clairement dans ses combats les plus récents — une ouverture qui revient trop souvent pour être un hasard.",
          reward: { stats: { strategie: 2 }, careerPoints: 5 },
        },
        criticalSuccess: {
          text: "Tu identifies une faille qu'Oda lui-même ignore probablement encore. Ton plan de combat s'écrit presque tout seul.",
          reward: { stats: { strategie: 3 }, careerPoints: 8 },
        },
      },
    },
    {
      id: 'choice-annonce-calme',
      label: "Encaisser la nouvelle sans t'y précipiter",
      statTested: 'mental',
      difficulty: 55,
      outcomes: {
        criticalFailure: {
          text: "Le nom d'Oda, une fois lu, ne quitte plus ta tête — mal, et bien avant l'heure.",
          reward: { coolness: -5 },
        },
        failure: { text: "Tu ranges la lettre, encore un peu secoué par la nouvelle.", reward: {} },
        success: {
          text: "Tu laisses l'information s'installer calmement. Un adversaire de plus, pas un mur infranchissable.",
          reward: { coolness: 4, careerPoints: 5 },
        },
        criticalSuccess: {
          text: "Tu ranges la lettre avec une clarté totale. Trois ans d'invincibilité ne sont, pour toi, qu'un chiffre parmi d'autres.",
          reward: { coolness: 7, careerPoints: 8 },
        },
      },
    },
  ],
}

const PREP: LifeMomentCard = {
  id: 'card-titre-national-prep',
  type: 'life-moment',
  title: 'Le dernier camp d\'entraînement',
  narrativeText:
    "Six semaines avant le combat, {{mentor}} resserre chaque détail de ta préparation. Il n'y a plus de place pour l'approximation.",
  requirement: {},
  choices: [
    {
      id: 'choice-intensite',
      label: "Pousser l'intensité au maximum",
      statTested: 'endurance',
      difficulty: 55,
      outcomes: {
        criticalFailure: {
          text: "Le corps encaisse mal ce rythme. Tu arrives au camp final plus fatigué que prévu.",
          reward: { fatigue: 15, health: -5 },
        },
        failure: { text: "Le camp se déroule sans éclat particulier.", reward: { fatigue: 8 } },
        success: {
          text: "Chaque séance te rapproche un peu plus de la version de toi-même dont tu vas avoir besoin.",
          reward: { stats: { endurance: 2 }, careerPoints: 5 },
        },
        criticalSuccess: {
          text: "Tu termines le camp dans la meilleure forme de ta carrière. {{mentor}} ne cache pas sa satisfaction.",
          reward: { stats: { endurance: 3 }, careerPoints: 8, entourageDelta: [{ role: 'Mentor', delta: 1 }] },
        },
      },
    },
    {
      id: 'choice-mental-prep',
      label: 'Travailler avant tout le mental',
      statTested: 'mental',
      difficulty: 55,
      outcomes: {
        criticalFailure: {
          text: "Plus tu y penses, plus le doute s'installe. Le camp se termine sur une note fragile.",
          reward: { coolness: -8 },
        },
        failure: { text: "Le travail mental reste superficiel.", reward: {} },
        success: {
          text: "Tu abordes l'échéance avec une clarté que tu ne te connaissais pas encore.",
          reward: { coolness: 5, careerPoints: 5 },
        },
        criticalSuccess: {
          text: "Rien, pas même le nom d'Oda, ne semble plus pouvoir te déstabiliser désormais.",
          reward: { coolness: 8, careerPoints: 8 },
        },
      },
    },
  ],
}

const FINAL: FightCard = {
  id: 'card-titre-national-final',
  type: 'fight',
  title: 'Champion du Japon',
  narrativeText:
    "La salle est pleine à craquer. Kazuma Oda t'attend au centre du ring, la ceinture déjà autour de la taille — pour quelques rounds encore, du moins. Trois ans d'invincibilité commencent à peser sur ses épaules, et tu comptes bien lui faire sentir.",
  opponentName: 'Kazuma Oda',
  opponentTagline: 'Champion du Japon en titre depuis trois ans.',
  opponentAggression: 'balanced',
  totalRounds: 5,
  koThreshold: 5,
  baseDifficulty: 62,
  requirement: {},
  arcId: 'arc-titre-national',
  isArcFinale: true,
  outcomes: {
    criticalFailure: {
      text: "Oda encaisse et te punit immédiatement de t'être autant exposé.",
      reward: { health: -10, coolness: -6 },
    },
    failure: { text: "Le coup touche sans vraiment l'ébranler. L'expérience d'Oda fait la différence.", reward: { fatigue: 8 } },
    success: {
      text: "Le coup fait vaciller Oda pour la première fois du combat. La salle retient son souffle.",
      reward: { careerPoints: 20, reputationExternal: 10, reputationInternal: 8, unlockTrophyIds: ['mark-combat-legendaire'] },
    },
    criticalSuccess: {
      text: "Oda touche le tapis. Il se relève, mais quelque chose dans son regard a changé — il sait, maintenant, que ce soir sera différent.",
      reward: { careerPoints: 28, reputationExternal: 15, reputationInternal: 12 },
    },
  },
  rankUpOnWin: 'rank-champion-japon',
}

export const TITRE_NATIONAL_CARDS: LifeMomentCard[] = [ANNONCE, PREP]
export const TITRE_NATIONAL_FIGHT_CARDS: FightCard[] = [FINAL]
