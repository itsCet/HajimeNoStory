import type { CareerArc, LifeMomentCard } from '../../../engine/types'

// Trame obligatoire : le passage du statut amateur à la licence professionnelle.
// Démarre automatiquement à l'entrée dans le rang "Amateur confirmé".
export const AMATEUR_TRIAL_ARC: CareerArc = {
  id: 'arc-amateur-trial',
  name: "L'examen professionnel",
  description: "Le parcours qui sépare un amateur prometteur d'un boxeur sous licence.",
  cardSequenceIds: ['card-amateur-trial-intro', 'card-amateur-trial-technique', 'card-amateur-trial-final'],
}

export const AMATEUR_TRIAL_CARDS: LifeMomentCard[] = [
  {
    id: 'card-amateur-trial-intro',
    type: 'life-moment',
    title: "L'inscription à l'examen",
    narrativeText:
      "Le formulaire est posé sur la table de la salle, presque anodin. Une fois signé, il n'y a plus de retour à l'amateurisme confortable — seulement des jurys, des dates, et un corps qu'il va falloir amener au bon niveau à temps.",
    requirement: {},
    choices: [
      {
        id: 'choice-serenite',
        label: 'Aborder ça avec calme',
        statTested: 'mental',
        difficulty: 45,
        outcomes: {
          criticalFailure: {
            text: "La pression monte plus vite que prévu. Tu passes la nuit précédant l'inscription à retourner le formulaire dans tous les sens.",
            reward: { coolness: -8, fatigue: 5 },
          },
          failure: {
            text: "Tu signes, mais un doute reste accroché quelque part derrière le sternum.",
            reward: { coolness: -2 },
          },
          success: {
            text: "Tu signes d'une main sûre. Ce n'est qu'un papier — le vrai travail commence maintenant.",
            reward: { coolness: 4, careerPoints: 3 },
          },
          criticalSuccess: {
            text: "Tu signes sans une hésitation, et cette assurance-là ne passe pas inaperçue dans la salle.",
            reward: { coolness: 8, reputationInternal: 5, careerPoints: 4 },
          },
        },
      },
      {
        id: 'choice-preparation',
        label: 'Tout planifier à l\'avance',
        statTested: 'strategie',
        difficulty: 45,
        outcomes: {
          criticalFailure: {
            text: "Le planning que tu as bâti s'effondre au premier imprévu. Tu improvises, mal à l'aise.",
            reward: { fatigue: 6 },
          },
          failure: {
            text: "Ton planning est correct, sans plus — il faudra t'adapter en cours de route.",
            reward: {},
          },
          success: {
            text: "Tu as anticipé chaque étape de l'examen. Rien ne devrait te prendre totalement au dépourvu.",
            reward: { stats: { strategie: 2 }, careerPoints: 3 },
          },
          criticalSuccess: {
            text: "Ton plan est si précis que ton entraîneur lui-même te demande une copie.",
            reward: { stats: { strategie: 3 }, reputationInternal: 4, careerPoints: 4 },
          },
        },
      },
    ],
  },
  {
    id: 'card-amateur-trial-technique',
    type: 'life-moment',
    title: "L'épreuve technique",
    narrativeText:
      "Un jury de trois anciens boxeurs, assis sur des chaises pliantes, note chaque déplacement, chaque garde, chaque enchaînement que tu répètes depuis des mois. Ce n'est plus un entraînement — c'est une évaluation.",
    requirement: { requiredFlags: ['seen:card-amateur-trial-intro'] },
    choices: [
      {
        id: 'choice-propre',
        label: 'Miser sur la propreté du geste',
        statTested: 'technique',
        difficulty: 48,
        outcomes: {
          criticalFailure: {
            text: "Un enchaînement se casse en plein milieu. Un des juges griffonne quelque chose que tu préfères ne pas imaginer.",
            reward: { coolness: -6 },
          },
          failure: {
            text: "Les gestes sont là, mais un peu raides — la nervosité se voit.",
            reward: {},
          },
          success: {
            text: "Chaque enchaînement sort net. Les juges hochent la tête, l'air satisfait.",
            reward: { stats: { technique: 2 }, careerPoints: 4 },
          },
          criticalSuccess: {
            text: "Ta démonstration est si propre qu'un des juges demande à qui tu dois cette formation.",
            reward: { stats: { technique: 3 }, reputationInternal: 5, careerPoints: 5 },
          },
        },
      },
      {
        id: 'choice-endurance',
        label: "Tenir la cadence jusqu'au bout",
        statTested: 'endurance',
        difficulty: 48,
        outcomes: {
          criticalFailure: {
            text: "Tu craques avant la fin de l'épreuve, les jambes en coton.",
            reward: { fatigue: 10, health: -3 },
          },
          failure: {
            text: "Tu termines, mais visiblement à bout de souffle plus tôt que tu ne l'aurais voulu.",
            reward: { fatigue: 6 },
          },
          success: {
            text: "Tu tiens la cadence imposée du début à la fin, sans jamais ralentir.",
            reward: { stats: { endurance: 2 }, careerPoints: 4 },
          },
          criticalSuccess: {
            text: "Tu termines l'épreuve plus frais que certains concurrents ne l'ont commencée.",
            reward: { stats: { endurance: 3 }, reputationInternal: 5, careerPoints: 5 },
          },
        },
      },
    ],
  },
  {
    id: 'card-amateur-trial-final',
    type: 'life-moment',
    title: 'Le sparring final',
    narrativeText:
      "Dernière étape : trois rounds face à un vétéran engagé pour l'occasion, dont le seul travail est de vérifier si tu tiens vraiment debout quand ça compte. {{mentor}} regarde depuis le bord du ring, silencieux.",
    requirement: { requiredFlags: ['seen:card-amateur-trial-technique'] },
    choices: [
      {
        id: 'choice-imposer',
        label: "Imposer ton rythme dès le premier round",
        statTested: 'puissance',
        difficulty: 50,
        outcomes: {
          criticalFailure: {
            text: "Tu pousses trop fort, trop vite. Le vétéran encaisse et te renvoie une leçon d'expérience.",
            reward: { coolness: -10, fatigue: 8 },
          },
          failure: {
            text: "Le rythme que tu imposes retombe au second round. Les juges restent partagés.",
            reward: { fatigue: 5 },
          },
          success: {
            text: "Tu prends le contrôle de l'échange, et le vétéran lui-même le reconnaît d'un signe de tête en fin de round.",
            reward: {
              careerPoints: 12,
              reputationInternal: 8,
              setFlags: ['flag-turned-pro'],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Le vétéran recule, surpris. {{mentor}} ne dit rien, mais pour la première fois, tu le vois sourire vraiment.",
            reward: {
              careerPoints: 16,
              reputationInternal: 12,
              reputationExternal: 4,
              setFlags: ['flag-turned-pro'],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
        },
      },
      {
        id: 'choice-lire',
        label: "Rester patient et lire l'adversaire",
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: {
            text: "Ta patience se transforme en hésitation. Le vétéran en profite sans le moindre remords.",
            reward: { coolness: -10, fatigue: 8 },
          },
          failure: {
            text: "Tu restes prudent, peut-être trop — le combat se termine sans que tu aies vraiment existé dedans.",
            reward: { fatigue: 5 },
          },
          success: {
            text: "Tu attends ton moment, et il finit par arriver. Le dernier round penche clairement de ton côté.",
            reward: {
              careerPoints: 12,
              reputationInternal: 8,
              setFlags: ['flag-turned-pro'],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Tu lis chaque intention avant qu'elle ne devienne un geste. Même le vétéran, en sortant du ring, te tend la main un peu plus longtemps que nécessaire.",
            reward: {
              careerPoints: 16,
              reputationInternal: 12,
              reputationExternal: 4,
              setFlags: ['flag-turned-pro'],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
        },
      },
    ],
  },
]
