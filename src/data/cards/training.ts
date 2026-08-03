import type { TrainingCard } from '../../engine/types'

// ─────────────────────────────────────────────────────────────────────────
// DÉBUT DE CARRIÈRE (paliers 0-3 : amateur novice → pro classe C)
// ─────────────────────────────────────────────────────────────────────────
const EARLY_TRAINING: TrainingCard[] = [
  {
    id: 'card-train-premiers-pas',
    type: 'training',
    title: 'Premiers pas sur le tapis',
    narrativeText:
      "L'entraîneur te regarde enchaîner tes premiers mouvements avec l'œil de quelqu'un qui en a vu défiler des centaines. « Montre-moi ce que tu as retenu. »",
    requirement: { maxRankOrder: 0, weight: 3 },
    approaches: [
      {
        id: 'approach-technique',
        label: 'Se concentrer sur la propreté du geste',
        statTested: 'technique',
        difficulty: 32,
        outcomes: {
          criticalFailure: { text: "Tes appuis se mélangent complètement, et tu perds l'équilibre en pleine démonstration.", reward: { coolness: -4 } },
          failure: { text: "Le geste reste maladroit, encore loin de l'automatisme.", reward: {} },
          success: { text: "Le geste commence à ressembler à quelque chose de propre.", reward: { stats: { technique: 3 } } },
          criticalSuccess: { text: "L'entraîneur hausse un sourcil — il ne s'attendait pas à une telle propreté dès le premier jour.", reward: { stats: { technique: 4 }, reputationInternal: 3 } },
        },
      },
      {
        id: 'approach-endurance',
        label: 'Tenir le rythme sans faiblir',
        statTested: 'endurance',
        difficulty: 32,
        outcomes: {
          criticalFailure: { text: "Tu t'essouffles bien avant la fin de la série, les jambes flageolantes.", reward: { fatigue: 8 } },
          failure: { text: "Tu tiens, difficilement, jusqu'au bout.", reward: { fatigue: 5 } },
          success: { text: "Tu maintiens le rythme sans faiblir jusqu'à la fin.", reward: { stats: { endurance: 3 } } },
          criticalSuccess: { text: "Tu termines la série presque frais, ce qui ne passe pas inaperçu.", reward: { stats: { endurance: 4 }, reputationInternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-train-sac-lourd',
    type: 'training',
    title: 'Le sac lourd',
    narrativeText:
      "Le sac de frappe se balance encore de la séance précédente. À toi de lui donner une raison de trembler à nouveau.",
    requirement: { maxRankOrder: 3, weight: 2 },
    approaches: [
      {
        id: 'approach-puissance',
        label: 'Frapper fort, sans retenue',
        statTested: 'puissance',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Un coup mal engagé te fait tordre le poignet. Rien de grave, mais ça pique.", reward: { health: -3 } },
          failure: { text: "Les coups partent sans grande conviction aujourd'hui.", reward: {} },
          success: { text: "Chaque impact fait sonner la chaîne du sac.", reward: { stats: { puissance: 3 } } },
          criticalSuccess: { text: "Le sac se balance si fort qu'un autre boxeur s'écarte prudemment.", reward: { stats: { puissance: 4 }, reputationInternal: 2 } },
        },
      },
      {
        id: 'approach-technique-sac',
        label: 'Travailler le placement plutôt que la force',
        statTested: 'technique',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tu perds le fil de l'enchaînement à mi-série.", reward: {} },
          failure: { text: "Le placement reste approximatif.", reward: {} },
          success: { text: "Chaque coup trouve sa place exacte, sans gaspillage d'énergie.", reward: { stats: { technique: 3 } } },
          criticalSuccess: { text: "L'enchaînement devient si fluide qu'il ne ressemble déjà plus à de l'entraînement.", reward: { stats: { technique: 4 }, reputationInternal: 2 } },
        },
      },
    ],
  },
  {
    id: 'card-train-jambes',
    type: 'training',
    title: 'Corde et lignes au sol',
    narrativeText:
      "Des lignes de craie zigzaguent sur le tapis. La consigne est simple : ne jamais poser un pied en dehors, même quand le rythme s'accélère.",
    requirement: { maxRankOrder: 3, weight: 2 },
    approaches: [
      {
        id: 'approach-vitesse',
        label: 'Pousser la vitesse au maximum',
        statTested: 'vitesse',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tu sors complètement du tracé et trébuches devant toute la salle.", reward: { coolness: -4 } },
          failure: { text: "Tu suis le tracé, mais bien en dessous du rythme visé.", reward: {} },
          success: { text: "Tes pieds suivent le tracé à un rythme soutenu.", reward: { stats: { vitesse: 3 } } },
          criticalSuccess: { text: "Tu termines la série à une vitesse qui fait se retourner deux boxeurs plus expérimentés.", reward: { stats: { vitesse: 4 }, reputationInternal: 2 } },
        },
      },
      {
        id: 'approach-endurance-jambes',
        label: 'Répéter jusqu\'à l\'épuisement complet',
        statTested: 'endurance',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tes jambes cèdent d'un coup, et tu t'assois plus vite que tu ne l'aurais voulu.", reward: { fatigue: 10 } },
          failure: { text: "Tu termines la série vidé, mais tu la termines.", reward: { fatigue: 7 } },
          success: { text: "Tu enchaînes les répétitions sans jamais vraiment ralentir.", reward: { stats: { endurance: 3 } } },
          criticalSuccess: { text: "Ta résistance surprend même l'entraîneur, qui rallonge la série sans prévenir.", reward: { stats: { endurance: 4 } } },
        },
      },
    ],
  },
  {
    id: 'card-train-sparring-basique',
    type: 'training',
    title: 'Premier sparring encadré',
    narrativeText:
      "Casque et protège-dents ajustés, tu montes sur le tapis face à un partenaire plus expérimenté, sous l'œil attentif de l'entraîneur qui arbitre chaque échange.",
    requirement: { requiredFlags: ['flag-turned-pro'], maxRankOrder: 4, weight: 2 },
    approaches: [
      {
        id: 'approach-technique-spar',
        label: 'Rester sur les fondamentaux',
        statTested: 'technique',
        difficulty: 42,
        outcomes: {
          criticalFailure: { text: "Ton partenaire perce ta garde presque à chaque échange. La leçon est un peu humiliante.", reward: { coolness: -5 } },
          failure: { text: "Tu tiens l'échange sans vraiment y briller.", reward: { fatigue: 4 } },
          success: { text: "Tes fondamentaux tiennent bon face à l'expérience de ton partenaire.", reward: { stats: { technique: 2 } } },
          criticalSuccess: { text: "Tu surprends ton partenaire à deux reprises. Il retire son casque, impressionné malgré lui.", reward: { stats: { technique: 3 }, reputationInternal: 3 } },
        },
      },
      {
        id: 'approach-reflexes-spar',
        label: 'Se concentrer sur la défense',
        statTested: 'reflexes',
        difficulty: 42,
        outcomes: {
          criticalFailure: { text: "Tu encaisses plus que tu n'esquives, ce round-là.", reward: { health: -4 } },
          failure: { text: "Tu esquives par intermittence, sans grande constance.", reward: { fatigue: 4 } },
          success: { text: "Tu limites nettement les coups reçus, en restant concentré sur les appuis.", reward: { stats: { reflexes: 2 } } },
          criticalSuccess: { text: "Ton partenaire finit la séance frustré de ne t'avoir presque jamais touché.", reward: { stats: { reflexes: 3 }, reputationInternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-train-mental-avant-combat',
    type: 'training',
    title: 'Préparation mentale',
    narrativeText:
      "Assis dans un coin tranquille de la salle, tu tentes de calmer le tumulte qui précède toujours les premiers vrais combats.",
    requirement: { maxRankOrder: 4, weight: 2 },
    approaches: [
      {
        id: 'approach-respiration',
        label: 'Travailler la respiration',
        statTested: 'mental',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tu n'arrives pas à te canaliser, et l'agitation reste entière.", reward: { coolness: -5 } },
          failure: { text: "Le calme reste partiel, fragile.", reward: {} },
          success: { text: "Ta respiration se stabilise, et une clarté bienvenue s'installe.", reward: { stats: { mental: 3 } } },
          criticalSuccess: { text: "Tu atteins un calme si net que tu le retrouveras encore longtemps après, sur le ring.", reward: { stats: { mental: 4 }, coolness: 3 } },
        },
      },
      {
        id: 'approach-visualisation',
        label: 'Visualiser le combat à venir',
        statTested: 'strategie',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Les scénarios que tu imagines tournent tous mal, et t'angoissent plus qu'ils ne t'aident.", reward: { coolness: -5 } },
          failure: { text: "La visualisation reste vague, difficile à ancrer.", reward: {} },
          success: { text: "Tu te projettes clairement dans plusieurs scénarios de combat.", reward: { stats: { strategie: 3 } } },
          criticalSuccess: { text: "Ta préparation est si détaillée qu'elle ressemble presque à un plan de bataille complet.", reward: { stats: { strategie: 4 }, coolness: 2 } },
        },
      },
    ],
  },
  {
    id: 'card-train-recuperation',
    type: 'training',
    title: 'Gérer la fatigue accumulée',
    narrativeText:
      "Les séances s'enchaînent depuis des semaines, et ton corps commence sérieusement à le faire savoir.",
    requirement: { maxRankOrder: 4, weight: 2 },
    approaches: [
      {
        id: 'approach-repos-actif',
        label: 'Repos actif et étirements',
        statTested: 'endurance',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Un étirement mal exécuté tire un muscle plus qu'il ne le détend.", reward: { health: -3 } },
          failure: { text: "La récupération reste limitée.", reward: { fatigue: -3 } },
          success: { text: "Le corps répond bien à la récupération active.", reward: { fatigue: -10, stats: { endurance: 1 } } },
          criticalSuccess: { text: "Tu te sens presque neuf le lendemain, prêt à repartir de plus belle.", reward: { fatigue: -15, health: 3 } },
        },
      },
      {
        id: 'approach-mental-repos',
        label: 'Prendre du recul mentalement',
        statTested: 'mental',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Le recul se transforme en rumination, et la fatigue mentale s'ajoute à la physique.", reward: { coolness: -4 } },
          failure: { text: "La pause aide un peu, sans grand effet.", reward: { fatigue: -3 } },
          success: { text: "Prendre de la distance permet à l'esprit, et un peu au corps, de vraiment souffler.", reward: { fatigue: -8, coolness: 3 } },
          criticalSuccess: { text: "Tu reviens avec une clarté et une énergie qui surprennent tout le monde à la salle.", reward: { fatigue: -12, coolness: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-training-jab-eclair',
    type: 'training',
    title: 'Le jab qui claque',
    narrativeText:
      "L'entraîneur t'installe face à la mitaine, un seul objectif en tête : un jab si rapide qu'il revienne avant que la main adverse ait pu réagir.",
    requirement: { maxRankOrder: 2, excludedFlags: ['discovered:tech-generic-jab-eclair'], weight: 2 },
    approaches: [
      {
        id: 'approach-jab',
        label: 'Répéter le jab en rafale',
        statTested: 'vitesse',
        difficulty: 40,
        outcomes: {
          criticalFailure: { text: "Le geste part de travers à chaque tentative. L'entraîneur secoue la tête.", reward: { coolness: -3 } },
          failure: { text: "Le jab reste correct, sans plus.", reward: {} },
          success: {
            text: "Le geste devient un réflexe : rapide, précis, presque invisible.",
            reward: { stats: { vitesse: 2 }, unlockTechniqueIds: ['tech-generic-jab-eclair'], setFlags: ['discovered:tech-generic-jab-eclair'] },
          },
          criticalSuccess: {
            text: "L'entraîneur n'a même pas le temps de voir le geste partir. « Voilà. C'est exactement ça. »",
            reward: { stats: { vitesse: 3 }, unlockTechniqueIds: ['tech-generic-jab-eclair'], setFlags: ['discovered:tech-generic-jab-eclair'], reputationInternal: 2 },
          },
        },
      },
    ],
  },
  {
    id: 'card-training-garde-fer',
    type: 'training',
    title: 'La garde qui ne cède pas',
    narrativeText:
      "Un partenaire enchaîne les frappes légères pendant que tu travailles une seule chose : ne jamais laisser ta garde s'ouvrir, quoi qu'il arrive.",
    requirement: { minRankOrder: 1, maxRankOrder: 4, excludedFlags: ['discovered:tech-generic-garde-fer'], weight: 2 },
    approaches: [
      {
        id: 'approach-garde',
        label: 'Resserrer la garde au maximum',
        statTested: 'endurance',
        difficulty: 42,
        outcomes: {
          criticalFailure: { text: "Tes bras fatiguent plus vite que prévu, et la garde finit par s'écrouler.", reward: { fatigue: 8 } },
          failure: { text: "La garde tient, mais avec quelques ouvertures.", reward: { fatigue: 5 } },
          success: {
            text: "La garde reste fermée du début à la fin de l'exercice, sans une seule faille visible.",
            reward: { stats: { endurance: 2 }, unlockTechniqueIds: ['tech-generic-garde-fer'], setFlags: ['discovered:tech-generic-garde-fer'] },
          },
          criticalSuccess: {
            text: "Ton partenaire finit par abandonner, incapable de trouver la moindre ouverture.",
            reward: { stats: { endurance: 3 }, unlockTechniqueIds: ['tech-generic-garde-fer'], setFlags: ['discovered:tech-generic-garde-fer'], reputationInternal: 2 },
          },
        },
      },
    ],
  },
]

export const TRAINING_CARDS: TrainingCard[] = [...EARLY_TRAINING]
