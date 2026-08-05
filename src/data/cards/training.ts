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
      {
        id: 'approach-jab-placement',
        label: 'Travailler le placement plutôt que la vitesse pure',
        statTested: 'technique',
        difficulty: 40,
        outcomes: {
          criticalFailure: { text: "Le poing arrive systématiquement décentré, loin de la cible.", reward: { coolness: -3 } },
          failure: { text: "Le placement reste correct, sans plus.", reward: {} },
          success: {
            text: "Le poing trouve la même cible exacte à chaque répétition — la vitesse suit naturellement la précision.",
            reward: { stats: { technique: 2 }, unlockTechniqueIds: ['tech-generic-jab-eclair'], setFlags: ['discovered:tech-generic-jab-eclair'] },
          },
          criticalSuccess: {
            text: "Le geste devient si propre qu'il semble ralenti, alors qu'il part plus vite que jamais.",
            reward: { stats: { technique: 3 }, unlockTechniqueIds: ['tech-generic-jab-eclair'], setFlags: ['discovered:tech-generic-jab-eclair'], reputationInternal: 2 },
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
      {
        id: 'approach-garde-mentale',
        label: 'Tenir mentalement plutôt que par la seule force des bras',
        statTested: 'mental',
        difficulty: 42,
        outcomes: {
          criticalFailure: { text: "L'attention décroche à mi-exercice, et la garde s'ouvre sans même que tu le sentes venir.", reward: { coolness: -4 } },
          failure: { text: "La concentration tient, mais s'effrite sur la durée.", reward: { fatigue: 4 } },
          success: {
            text: "Tu gardes l'esprit fixé sur la garde plutôt que sur la fatigue des bras — elle ne s'ouvre jamais.",
            reward: { stats: { mental: 2 }, unlockTechniqueIds: ['tech-generic-garde-fer'], setFlags: ['discovered:tech-generic-garde-fer'] },
          },
          criticalSuccess: {
            text: "Rien ne semble pouvoir entamer ta concentration. La garde tient comme si elle ne coûtait plus rien.",
            reward: { stats: { mental: 3 }, unlockTechniqueIds: ['tech-generic-garde-fer'], setFlags: ['discovered:tech-generic-garde-fer'], reputationInternal: 2 },
          },
        },
      },
    ],
  },
  {
    id: 'card-train-corde-a-sauter',
    type: 'training',
    title: 'La corde, encore et toujours',
    narrativeText:
      "Un exercice aussi vieux que la boxe elle-même : la corde à sauter, séance après séance. Simple en apparence, redoutable pour qui cherche vraiment à progresser dessus.",
    requirement: { maxRankOrder: 3, weight: 2 },
    approaches: [
      {
        id: 'approach-corde-vitesse',
        label: 'Accélérer le rythme au maximum',
        statTested: 'vitesse',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Le pied se prend dans la corde à répétition — frustrant, mais sans gravité.", reward: { fatigue: 5 } },
          failure: { text: "Le rythme reste correct, sans réel progrès.", reward: { fatigue: 3 } },
          success: { text: "Tes appuis gagnent nettement en vivacité, séance après séance.", reward: { stats: { vitesse: 2 } } },
          criticalSuccess: { text: "Le rythme devient presque hypnotique. {{mentor}} n'a jamais vu quelqu'un tenir une telle cadence aussi tôt.", reward: { stats: { vitesse: 3 }, reputationInternal: 2 } },
        },
      },
      {
        id: 'approach-corde-endurance',
        label: 'Tenir le plus longtemps possible, sans t\'arrêter',
        statTested: 'endurance',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Les jambes lâchent bien avant la fin de la séance prévue.", reward: { fatigue: 6 } },
          failure: { text: "Tu tiens, tant bien que mal, sans grand progrès.", reward: { fatigue: 4 } },
          success: { text: "Ton souffle tient nettement plus longtemps qu'à tes débuts.", reward: { stats: { endurance: 2 } } },
          criticalSuccess: { text: "Tu enchaînes largement au-delà de ce que {{mentor}} avait prévu, sans jamais ralentir.", reward: { stats: { endurance: 3 }, reputationInternal: 2 } },
        },
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────
// MILIEU DE CARRIÈRE (paliers 4-8 : pro classe B → Champion OPBF)
// ─────────────────────────────────────────────────────────────────────────
const MID_TRAINING: TrainingCard[] = [
  {
    id: 'card-training-esquive-laterale',
    type: 'training',
    title: 'Le pivot qui sauve',
    narrativeText:
      "Un partenaire enchaîne les directs à vitesse réelle. La seule consigne : ne jamais bloquer, seulement dévier le buste au bon moment.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, excludedFlags: ['discovered:tech-generic-esquive-laterale'], weight: 2 },
    approaches: [
      {
        id: 'approach-pivot',
        label: 'Travailler le pivot du buste',
        statTested: 'reflexes',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Le timing est constamment en retard d'une fraction de seconde.", reward: { health: -3 } },
          failure: { text: "Le pivot fonctionne parfois, pas assez souvent.", reward: { fatigue: 5 } },
          success: {
            text: "Le geste devient fluide, presque automatique — le poing passe systématiquement à côté.",
            reward: { stats: { reflexes: 2 }, unlockTechniqueIds: ['tech-generic-esquive-laterale'], setFlags: ['discovered:tech-generic-esquive-laterale'] },
          },
          criticalSuccess: {
            text: "Ton partenaire finit la séance frustré de n'avoir jamais réussi à te toucher une seule fois.",
            reward: { stats: { reflexes: 3 }, unlockTechniqueIds: ['tech-generic-esquive-laterale'], setFlags: ['discovered:tech-generic-esquive-laterale'], reputationInternal: 2 },
          },
        },
      },
      {
        id: 'approach-pivot-vitesse',
        label: 'Miser sur la vitesse pure du déplacement',
        statTested: 'vitesse',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Tu bouges trop tôt, avant même que le coup ne parte vraiment.", reward: { health: -3 } },
          failure: { text: "Le déplacement arrive, mais pas toujours à temps.", reward: { fatigue: 5 } },
          success: {
            text: "Tu es déjà ailleurs quand le poing arrive à destination.",
            reward: { stats: { vitesse: 2 }, unlockTechniqueIds: ['tech-generic-esquive-laterale'], setFlags: ['discovered:tech-generic-esquive-laterale'] },
          },
          criticalSuccess: {
            text: "Ton partenaire abandonne, incapable de suivre un rythme pareil.",
            reward: { stats: { vitesse: 3 }, unlockTechniqueIds: ['tech-generic-esquive-laterale'], setFlags: ['discovered:tech-generic-esquive-laterale'], reputationInternal: 2 },
          },
        },
      },
    ],
  },
  {
    id: 'card-training-relance',
    type: 'training',
    title: 'Répondre au coup encaissé',
    narrativeText:
      "L'exercice est brutal dans sa simplicité : encaisser un coup léger, puis répliquer immédiatement, sans laisser passer le moindre instant d'hésitation.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, excludedFlags: ['discovered:tech-generic-relance'], weight: 2 },
    approaches: [
      {
        id: 'approach-relance',
        label: 'Répliquer sans réfléchir',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Chaque coup encaissé te fige un instant de trop.", reward: { coolness: -5 } },
          failure: { text: "La relance arrive, mais toujours un peu tard.", reward: { fatigue: 5 } },
          success: {
            text: "Le coup encaissé ne t'arrête plus une seconde. La réplique part presque avant que la douleur n'arrive.",
            reward: { stats: { mental: 2 }, unlockTechniqueIds: ['tech-generic-relance'], setFlags: ['discovered:tech-generic-relance'] },
          },
          criticalSuccess: {
            text: "Ton partenaire hésite maintenant avant de frapper, sachant ce qui revient systématiquement derrière.",
            reward: { stats: { mental: 3 }, unlockTechniqueIds: ['tech-generic-relance'], setFlags: ['discovered:tech-generic-relance'], reputationInternal: 2 },
          },
        },
      },
      {
        id: 'approach-relance-reflexe',
        label: 'Faire confiance au réflexe plutôt qu\'à la volonté',
        statTested: 'reflexes',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Le corps se fige au lieu de répondre, encore et encore.", reward: { coolness: -5 } },
          failure: { text: "Le réflexe existe, mais reste inconstant.", reward: { fatigue: 5 } },
          success: {
            text: "La réplique part toute seule, sans passer par la moindre décision consciente.",
            reward: { stats: { reflexes: 2 }, unlockTechniqueIds: ['tech-generic-relance'], setFlags: ['discovered:tech-generic-relance'] },
          },
          criticalSuccess: {
            text: "Le geste est devenu si automatique qu'il te surprend toi-même à chaque fois.",
            reward: { stats: { reflexes: 3 }, unlockTechniqueIds: ['tech-generic-relance'], setFlags: ['discovered:tech-generic-relance'], reputationInternal: 2 },
          },
        },
      },
    ],
  },
  {
    id: 'card-training-feinte-double',
    type: 'training',
    title: 'Deux mensonges, un vrai coup',
    narrativeText:
      "{{mentor}} t'apprend à construire une double feinte — deux gestes trompeurs avant le geste qui compte vraiment.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, excludedFlags: ['discovered:tech-generic-feinte-double'], weight: 2 },
    approaches: [
      {
        id: 'approach-feinte',
        label: 'Enchaîner les deux feintes avant le vrai coup',
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Les feintes sont trop lisibles, ton partenaire ne mord jamais.", reward: { coolness: -4 } },
          failure: { text: "Une des deux feintes fonctionne, pas les deux.", reward: { fatigue: 5 } },
          success: {
            text: "La séquence complète fonctionne : les deux feintes trompent, et le vrai coup passe.",
            reward: { stats: { strategie: 2 }, unlockTechniqueIds: ['tech-generic-feinte-double'], setFlags: ['discovered:tech-generic-feinte-double'] },
          },
          criticalSuccess: {
            text: "La séquence devient si naturelle que même {{mentor}} met un instant à comprendre ce qui vient de se passer.",
            reward: { stats: { strategie: 3 }, unlockTechniqueIds: ['tech-generic-feinte-double'], setFlags: ['discovered:tech-generic-feinte-double'], reputationInternal: 2 },
          },
        },
      },
      {
        id: 'approach-feinte-technique',
        label: 'Peaufiner la propreté du geste plutôt que la ruse',
        statTested: 'technique',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Le geste part imprécis, et la feinte se voit à des kilomètres.", reward: { coolness: -4 } },
          failure: { text: "Le geste reste un peu brut, pas encore assez propre pour tromper qui que ce soit.", reward: { fatigue: 5 } },
          success: {
            text: "La propreté du geste rend chaque feinte crédible, sans avoir besoin d'en faire trop.",
            reward: { stats: { technique: 2 }, unlockTechniqueIds: ['tech-generic-feinte-double'], setFlags: ['discovered:tech-generic-feinte-double'] },
          },
          criticalSuccess: {
            text: "Chaque geste est si net que ton partenaire ne sait plus du tout lequel croire.",
            reward: { stats: { technique: 3 }, unlockTechniqueIds: ['tech-generic-feinte-double'], setFlags: ['discovered:tech-generic-feinte-double'], reputationInternal: 2 },
          },
        },
      },
    ],
  },
  {
    id: 'card-train-cardio-intensif',
    type: 'training',
    title: "Cardio à la limite",
    narrativeText:
      "Une séance de fractionné pensée pour repousser le seuil au-delà duquel le corps commence habituellement à lâcher.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    approaches: [
      {
        id: 'approach-fractionne',
        label: 'Pousser chaque intervalle au maximum',
        statTested: 'endurance',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Le corps cède avant la fin de la séance.", reward: { fatigue: 14, health: -4 } },
          failure: { text: "Tu termines, épuisé, sans grand gain net.", reward: { fatigue: 10 } },
          success: { text: "Le seuil recule nettement. Tu tiens plus longtemps qu'avant, sans y penser.", reward: { stats: { endurance: 3 } } },
          criticalSuccess: { text: "Le préparateur physique note un temps qu'il n'a vu chez personne d'autre dans la salle cette année.", reward: { stats: { endurance: 4 }, reputationInternal: 3 } },
        },
      },
      {
        id: 'approach-fractionne-mental',
        label: "Tenir par la tête plutôt que forcer sur le corps",
        statTested: 'mental',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "L'esprit lâche avant le corps, et tu abandonnes la séance en avance.", reward: { coolness: -5 } },
          failure: { text: "Tu tiens tant bien que mal, l'esprit ailleurs.", reward: { fatigue: 8 } },
          success: { text: "Tu déplaces ton attention loin de la douleur, et le seuil recule sans y penser.", reward: { stats: { mental: 3 } } },
          criticalSuccess: { text: "Ta capacité à dissocier l'effort de l'inconfort impressionne le préparateur physique.", reward: { stats: { mental: 4 }, reputationInternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-train-strategie-adversaire',
    type: 'training',
    title: "Étude vidéo poussée",
    narrativeText:
      "Des heures de montage vidéo, ralenti après ralenti, pour décortiquer les habitudes du prochain adversaire au niveau du détail.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    approaches: [
      {
        id: 'approach-video',
        label: 'Décortiquer chaque habitude adverse',
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Tu te perds dans les détails sans en tirer une vraie conclusion utile.", reward: { fatigue: 4 } },
          failure: { text: "Quelques pistes générales, sans grande précision.", reward: {} },
          success: { text: "Un plan de combat clair se dessine, basé sur des habitudes bien réelles.", reward: { stats: { strategie: 3 } } },
          criticalSuccess: { text: "Tu repères une habitude si spécifique que le plan de combat en devient presque une évidence.", reward: { stats: { strategie: 4 }, careerPoints: 3 } },
        },
      },
      {
        id: 'approach-video-mental',
        label: "Se projeter dans le combat plutôt qu'analyser froidement",
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Les scénarios imaginés tournent tous à l'angoisse plutôt qu'à la préparation.", reward: { coolness: -5 } },
          failure: { text: "La projection reste vague, difficile à ancrer.", reward: {} },
          success: { text: "Tu te projettes clairement dans le combat, calme, prêt pour ce qui vient.", reward: { stats: { mental: 3 } } },
          criticalSuccess: { text: "Ta préparation mentale est si complète que le combat, une fois là, aura un air de déjà-vu.", reward: { stats: { mental: 4 }, careerPoints: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-train-sparring-elite',
    type: 'training',
    title: 'Sparring de haut niveau',
    narrativeText:
      "{{mentor}} a fait venir un partenaire de sparring d'un tout autre calibre, habitué aux salles nationales — l'occasion de tester, en conditions réelles, tout ce que tu penses avoir progressé.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    approaches: [
      {
        id: 'approach-sparring-technique',
        label: 'Chercher à égaler sa précision plutôt que sa puissance',
        statTested: 'technique',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "L'écart de niveau se fait sentir immédiatement, et la séance tourne à sens unique.", reward: { fatigue: 8 } },
          failure: { text: "Tu tiens l'échange, sans jamais vraiment rivaliser.", reward: { fatigue: 5 } },
          success: { text: "Tu tiens tête à un niveau bien supérieur au tien — un vrai signe de progression.", reward: { stats: { technique: 3 }, reputationInternal: 2 } },
          criticalSuccess: { text: "Le partenaire de sparring, visiblement surpris, complimente {{mentor}} sur ce qu'il a construit avec toi.", reward: { stats: { technique: 4 }, reputationInternal: 4 } },
        },
      },
      {
        id: 'approach-sparring-reflexes',
        label: 'Miser sur tes réflexes pour éviter l\'échange direct',
        statTested: 'reflexes',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Ses coups arrivent plus vite que tu ne les anticipes, séance après séance.", reward: { fatigue: 8 } },
          failure: { text: "Tu esquives par intermittence, sans grand contrôle.", reward: { fatigue: 5 } },
          success: { text: "Tes réflexes tiennent la comparaison avec un niveau bien supérieur au tien.", reward: { stats: { reflexes: 3 }, reputationInternal: 2 } },
          criticalSuccess: { text: "Tu esquives presque tout ce soir-là. {{mentor}} note, satisfait, un vrai palier franchi.", reward: { stats: { reflexes: 4 }, reputationInternal: 4 } },
        },
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────
// FIN DE CARRIÈRE (paliers 9-11 : éliminatoire mondial → champion du monde)
// ─────────────────────────────────────────────────────────────────────────
const LATE_TRAINING: TrainingCard[] = [
  {
    id: 'card-training-radar-combat',
    type: 'training',
    title: "Des années condensées en un instinct",
    narrativeText:
      "{{mentor}} ne te montre plus grand-chose de nouveau, à ce stade. Il se contente de te regarder combattre, et de pointer, après coup, ce que tu as anticipé sans même t'en rendre compte.",
    requirement: { minRankOrder: 9, maxRankOrder: 11, excludedFlags: ['discovered:tech-generic-radar-combat'], weight: 2 },
    approaches: [
      {
        id: 'approach-radar',
        label: 'Laisser parler des années de combats',
        statTested: 'strategie',
        difficulty: 66,
        outcomes: {
          criticalFailure: { text: "Aujourd'hui, rien ne vient. L'instinct reste silencieux.", reward: { coolness: -4 } },
          failure: { text: "Quelques éclairs de lucidité, sans grande constance.", reward: {} },
          success: {
            text: "Tu sens l'enchaînement adverse venir deux coups à l'avance, sans effort conscient.",
            reward: { stats: { strategie: 3 }, unlockTechniqueIds: ['tech-generic-radar-combat'], setFlags: ['discovered:tech-generic-radar-combat'] },
          },
          criticalSuccess: {
            text: "{{mentor}} pose enfin les mots dessus : « Voilà. Ça, ça ne s'enseigne pas. Ça se gagne. »",
            reward: { stats: { strategie: 4 }, unlockTechniqueIds: ['tech-generic-radar-combat'], setFlags: ['discovered:tech-generic-radar-combat'], reputationInternal: 3 },
          },
        },
      },
      {
        id: 'approach-radar-reflexe',
        label: "Laisser le corps réagir avant la tête",
        statTested: 'reflexes',
        difficulty: 66,
        outcomes: {
          criticalFailure: { text: "Rien ne vient. Le corps reste aussi lent qu'un débutant, aujourd'hui.", reward: { coolness: -4 } },
          failure: { text: "Quelques réactions justes, sans grande constance.", reward: {} },
          success: {
            text: "Le corps répond avant que l'enchaînement adverse ne soit terminé, sans réflexion consciente.",
            reward: { stats: { reflexes: 3 }, unlockTechniqueIds: ['tech-generic-radar-combat'], setFlags: ['discovered:tech-generic-radar-combat'] },
          },
          criticalSuccess: {
            text: "{{mentor}} n'a plus rien à ajouter — le corps a fini par apprendre ce que les mots ne pouvaient plus enseigner.",
            reward: { stats: { reflexes: 4 }, unlockTechniqueIds: ['tech-generic-radar-combat'], setFlags: ['discovered:tech-generic-radar-combat'], reputationInternal: 3 },
          },
        },
      },
    ],
  },
  {
    id: 'card-training-transmission',
    type: 'training',
    title: 'Former sans se former',
    narrativeText:
      "{{mentor}} te confie, de plus en plus souvent, un œil sur les débutants de la salle pendant les séances. Corriger un geste chez quelqu'un d'autre demande une clarté différente de celle qu'exige ton propre entraînement.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-transmission-pedagogie',
        label: 'Décomposer patiemment chaque geste pour eux',
        statTested: 'technique',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Tes explications les embrouillent plus qu'elles ne les aident.", reward: { fatigue: 5 } },
          failure: { text: "Le message passe à moitié, sans grande clarté.", reward: {} },
          success: { text: "Expliquer à voix haute ce que tu fais depuis des années t'en révèle, à toi aussi, de nouveaux détails.", reward: { stats: { technique: 2 }, reputationInternal: 3 } },
          criticalSuccess: { text: "Un débutant reproduit soudain, presque parfaitement, un geste que tu croyais impossible à transmettre en une séance. La fierté est partagée.", reward: { stats: { technique: 3 }, reputationInternal: 6, loyalty: 2 } },
        },
      },
      {
        id: 'approach-transmission-exemple',
        label: "Leur montrer, encore et encore, par l'exemple",
        statTested: 'endurance',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Répéter le geste autant de fois t'épuise plus que prévu.", reward: { fatigue: 10 } },
          failure: { text: "Les répétitions passent, sans effet particulier sur eux ni sur toi.", reward: { fatigue: 6 } },
          success: { text: "À force de répétitions, ton propre geste gagne encore en régularité — un effet secondaire inattendu.", reward: { stats: { endurance: 2 }, reputationInternal: 3 } },
          criticalSuccess: { text: "Ta rigueur devient contagieuse. Toute la salle semble s'entraîner un cran plus sérieusement, toi y compris.", reward: { stats: { endurance: 3 }, reputationInternal: 6, loyalty: 2 } },
        },
      },
    ],
  },
  {
    id: 'card-training-signature',
    type: 'training',
    title: 'Le geste qui devient une signature',
    narrativeText:
      "Après tant de combats, un enchaînement revient plus souvent que les autres dans ton style — quelque chose d'unique à toi, que {{mentor}} propose de raffiner jusqu'à ce qu'il devienne réellement redoutable.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-signature-puissance',
        label: 'Y ajouter encore plus de poids',
        statTested: 'puissance',
        difficulty: 58,
        outcomes: {
          criticalFailure: { text: "Le geste, trop chargé, perd toute la fluidité qui le rendait dangereux.", reward: { fatigue: 8 } },
          failure: { text: "Le geste reste efficace, sans réel progrès notable.", reward: { fatigue: 5 } },
          success: { text: "Le geste gagne en impact sans rien perdre de sa vitesse d'exécution.", reward: { stats: { puissance: 3 } } },
          criticalSuccess: { text: "Ce geste devient, ce jour-là, véritablement le tien — personne d'autre ne le porte avec cette intensité.", reward: { stats: { puissance: 4 }, reputationExternal: 3 } },
        },
      },
      {
        id: 'approach-signature-vitesse',
        label: "Le rendre encore plus difficile à anticiper",
        statTested: 'vitesse',
        difficulty: 58,
        outcomes: {
          criticalFailure: { text: "En cherchant plus de vitesse, le geste perd toute sa précision.", reward: { fatigue: 8 } },
          failure: { text: "Le geste reste efficace, sans réel progrès notable.", reward: { fatigue: 5 } },
          success: { text: "Le geste devient plus vif, plus difficile à lire dès sa préparation.", reward: { stats: { vitesse: 3 } } },
          criticalSuccess: { text: "Le geste devient si rapide qu'il semble surprendre même ceux qui savent qu'il arrive. Une vraie signature.", reward: { stats: { vitesse: 4 }, reputationExternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-training-corps-elite',
    type: 'training',
    title: "Entretenir la machine",
    narrativeText:
      "Un préparateur physique spécialisé, habitué aux champions en fin de carrière, propose un protocole entièrement repensé — moins de volume, beaucoup plus de précision dans chaque séance.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-elite-recuperation',
        label: 'Adopter le protocole de récupération avancée',
        statTested: 'endurance',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Le nouveau protocole perturbe tes repères, et tu t'en trouves plus fatigué que d'habitude.", reward: { fatigue: 8 } },
          failure: { text: "L'adaptation prend du temps, sans bénéfice immédiat.", reward: { fatigue: 4 } },
          success: { text: "Ton corps récupère nettement mieux d'un combat à l'autre. Un vrai gain, à ce stade de carrière.", reward: { health: 5, stats: { endurance: 2 } } },
          criticalSuccess: { text: "Le préparateur physique n'a jamais vu un corps de cet âge répondre aussi bien. Tu te sens, littéralement, rajeuni.", reward: { health: 9, stats: { endurance: 3 }, reputationInternal: 3 } },
        },
      },
      {
        id: 'approach-elite-mental',
        label: "Miser sur la préparation mentale plutôt que physique",
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Le protocole mental, mal suivi, te laisse plus tendu qu'apaisé.", reward: { coolness: -5 } },
          failure: { text: "L'effet reste discret, difficile à mesurer.", reward: {} },
          success: { text: "Tu abordes chaque séance avec une clarté d'esprit renouvelée, presque neuve.", reward: { coolness: 4, stats: { mental: 2 } } },
          criticalSuccess: { text: "Le protocole change littéralement ton rapport à l'entraînement. Plus jamais une séance ne te pèsera de la même façon.", reward: { coolness: 7, stats: { mental: 3 }, reputationInternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-train-contre-jeune-garde',
    type: 'training',
    title: 'Le sparring qui te garde honnête',
    narrativeText:
      "{{mentor}} invite, une fois par mois désormais, un espoir de la salle à venir te donner la réplique — assez jeune pour n'avoir aucun respect particulier pour ta réputation, ce qui, justement, en fait tout l'intérêt.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-jeune-garde-puissance',
        label: 'Répondre à sa fougue par ton expérience',
        statTested: 'puissance',
        difficulty: 58,
        outcomes: {
          criticalFailure: { text: "Sa fraîcheur physique te pousse à forcer plus que de raison, pour un résultat décevant.", reward: { fatigue: 9 } },
          failure: { text: "L'échange reste équilibré, sans grand enseignement.", reward: { fatigue: 6 } },
          success: { text: "Tu canalises sa fougue sans jamais paraître dépassé — un rappel utile de ce que tu sais encore faire.", reward: { stats: { puissance: 2 }, reputationInternal: 2 } },
          criticalSuccess: { text: "Le jeune espoir repart visiblement marqué par la séance. {{mentor}} sourit, satisfait de son idée.", reward: { stats: { puissance: 3 }, reputationInternal: 4 } },
        },
      },
      {
        id: 'approach-jeune-garde-strategie',
        label: 'En profiter pour tester de nouveaux ajustements',
        statTested: 'strategie',
        difficulty: 58,
        outcomes: {
          criticalFailure: { text: "Les ajustements testés se révèlent, face à sa vitesse brute, complètement inadaptés.", reward: { fatigue: 7 } },
          failure: { text: "Les essais restent peu concluants.", reward: { fatigue: 5 } },
          success: { text: "Ce laboratoire improvisé te permet d'affiner un détail utile pour la suite.", reward: { stats: { strategie: 2 } } },
          criticalSuccess: { text: "L'ajustement testé ce jour-là deviendra, tu le sens déjà, une vraie arme pour tes prochains combats.", reward: { stats: { strategie: 3 }, careerPoints: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-train-rituel-avant-titre',
    type: 'training',
    title: "Le rituel d'avant-titre",
    narrativeText:
      "Au fil des défenses, une routine précise s'est installée avant chaque combat de championnat — un enchaînement de gestes que tu répètes presque religieusement, jusqu'à ce que {{mentor}} propose d'y toucher.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-rituel-garder',
        label: 'Garder le rituel intact, il a fait ses preuves',
        statTested: 'mental',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Le rituel, cette fois, semble sonner creux — un signe que rien n'est jamais acquis.", reward: { coolness: -5 } },
          failure: { text: "Le rituel se déroule sans grand effet particulier.", reward: {} },
          success: { text: "Le rituel te met, comme toujours, dans les meilleures dispositions possibles.", reward: { coolness: 4, stats: { mental: 2 } } },
          criticalSuccess: { text: "Ce rituel, affiné au fil des années, est devenu une vraie arme mentale — {{mentor}} le sait aussi bien que toi.", reward: { coolness: 7, stats: { mental: 3 }, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
        },
      },
      {
        id: 'approach-rituel-renouveler',
        label: 'Accepter de le renouveler, quitte à sortir de ta zone de confort',
        statTested: 'reflexes',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Le changement de repères te déstabilise plus que prévu, juste avant l'échéance.", reward: { coolness: -6 } },
          failure: { text: "Le nouveau rituel reste, pour l'instant, moins naturel que l'ancien.", reward: { fatigue: 4 } },
          success: { text: "Le nouveau rituel t'apporte une fraîcheur inattendue, loin de l'automatisme installé.", reward: { stats: { reflexes: 2 }, coolness: 3 } },
          criticalSuccess: { text: "Ce renouveau, risqué sur le papier, se révèle être exactement ce qu'il te fallait à ce stade de carrière.", reward: { stats: { reflexes: 3 }, coolness: 5, reputationInternal: 3 } },
        },
      },
    ],
  },
]

export const TRAINING_CARDS: TrainingCard[] = [...EARLY_TRAINING, ...MID_TRAINING, ...LATE_TRAINING]
