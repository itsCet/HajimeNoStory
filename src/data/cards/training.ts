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
  {
    id: 'card-train-shadow-miroir',
    type: 'training',
    title: 'Face au miroir',
    narrativeText:
      "Quinze minutes de shadow devant le grand miroir du fond. Aucun adversaire, aucun sac : juste toi, ton reflet, et tous les défauts que tu préférerais ne pas voir aussi nettement.",
    requirement: { maxRankOrder: 3, weight: 2 },
    approaches: [
      {
        id: 'approach-miroir-technique',
        label: 'Corriger chaque défaut que tu repères',
        statTested: 'technique',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "À force de tout corriger en même temps, ton geste se désarticule complètement.", reward: { coolness: -4 } },
          failure: { text: "Tu repères les défauts sans réussir à les corriger.", reward: { fatigue: 3 } },
          success: { text: "Voir tes erreurs en direct accélère tout. Le geste s'affine séance après séance.", reward: { stats: { technique: 2 } } },
          criticalSuccess: { text: "Le miroir devient ton meilleur entraîneur. {{mentor}} n'a presque plus rien à reprendre.", reward: { stats: { technique: 3 }, reputationInternal: 2 } },
        },
      },
      {
        id: 'approach-miroir-fluidite',
        label: 'Chercher la fluidité plutôt que la correction',
        statTested: 'vitesse',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Tu vas trop vite pour rien construire. Quinze minutes de gesticulation.", reward: { fatigue: 5 } },
          failure: { text: "Le mouvement reste haché.", reward: { fatigue: 3 } },
          success: { text: "Les enchaînements commencent à s'enchaîner vraiment, sans temps mort entre eux.", reward: { stats: { vitesse: 2 } } },
          criticalSuccess: { text: "Ton shadow devient si fluide que d'autres s'arrêtent pour regarder.", reward: { stats: { vitesse: 3 }, reputationInternal: 2 } },
        },
      },
    ],
  },
  {
    id: 'card-train-gainage',
    type: 'training',
    title: 'Le ballon lesté',
    narrativeText:
      "Allongé sur le dos, un ballon lesté lâché sur l'abdomen à intervalles irréguliers. L'exercice est simple à décrire et beaucoup moins agréable à vivre.",
    requirement: { maxRankOrder: 3, weight: 2 },
    approaches: [
      {
        id: 'approach-gainage-encaisser',
        label: 'Encaisser sans jamais contracter en retard',
        statTested: 'endurance',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Tu contractes systématiquement trop tard. La séance se termine plié en deux.", reward: { health: -5, fatigue: 6 } },
          failure: { text: "Tu encaisses, plus par volonté que par technique.", reward: { fatigue: 5 } },
          success: { text: "Ton abdomen apprend à se verrouiller à la milliseconde près.", reward: { stats: { endurance: 2 }, health: 2 } },
          criticalSuccess: { text: "{{mentor}} augmente la charge deux fois de suite sans jamais te faire flancher.", reward: { stats: { endurance: 3 }, health: 4 } },
        },
      },
      {
        id: 'approach-gainage-anticiper',
        label: 'Anticiper le moment exact de l\'impact',
        statTested: 'reflexes',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Tu anticipes tout, et donc rien. Chaque impact arrive au pire moment.", reward: { health: -5, fatigue: 5 } },
          failure: { text: "Tu lis l'impact une fois sur deux.", reward: { fatigue: 4 } },
          success: { text: "Tu finis par lire le geste avant même que le ballon ne parte.", reward: { stats: { reflexes: 2 } } },
          criticalSuccess: { text: "Tu anticipes chaque impact sans exception, y compris ceux que {{mentor}} essaie de camoufler.", reward: { stats: { reflexes: 3 }, health: 2 } },
        },
      },
    ],
  },
  {
    id: 'card-train-course-matinale',
    type: 'training',
    title: 'Six heures du matin',
    narrativeText:
      "La ville dort encore. Dix kilomètres avant que la journée ne commence vraiment, dans un froid qui rend les premières foulées particulièrement désagréables.",
    requirement: { maxRankOrder: 4, weight: 2 },
    approaches: [
      {
        id: 'approach-course-distance',
        label: 'Allonger la distance, régulièrement',
        statTested: 'endurance',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Tu forces sur un tendon déjà sensible. La semaine suivante sera compliquée.", reward: { health: -6, fatigue: 8 } },
          failure: { text: "Tu boucles la distance sans progression notable.", reward: { fatigue: 5 } },
          success: { text: "Le fond s'installe. Les derniers rounds seront moins difficiles grâce à ces matins-là.", reward: { stats: { endurance: 2 } } },
          criticalSuccess: { text: "Ton fond devient un vrai atout. Tu termines les séances plus frais que ceux qui les commencent.", reward: { stats: { endurance: 3 }, health: 3 } },
        },
      },
      {
        id: 'approach-course-fractionne',
        label: 'Travailler en fractionné plutôt qu\'en distance',
        statTested: 'vitesse',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Les accélérations à froid te coûtent un claquage léger.", reward: { health: -6, fatigue: 7 } },
          failure: { text: "Les fractions manquent d'intensité pour vraiment payer.", reward: { fatigue: 5 } },
          success: { text: "Tes changements de rythme deviennent nettement plus explosifs.", reward: { stats: { vitesse: 2 } } },
          criticalSuccess: { text: "Tu développes une capacité à relancer qui fera la différence dans les rounds serrés.", reward: { stats: { vitesse: 3 }, careerPoints: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-train-mitaines',
    type: 'training',
    title: 'Les mitaines de {{mentor}}',
    narrativeText:
      "{{mentor}} enfile les mitaines et se place en face de toi. Il ne dit rien : il annonce les combinaisons uniquement par la position de ses mains, et corrige d'un simple mouvement du poignet.",
    requirement: { maxRankOrder: 4, weight: 2 },
    approaches: [
      {
        id: 'approach-mitaines-precision',
        label: 'Viser le centre exact de chaque mitaine',
        statTested: 'technique',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tu touches à côté une fois sur deux. {{mentor}} arrête la séance en avance.", reward: { coolness: -5 } },
          failure: { text: "Les coups portent, sans grande précision.", reward: { fatigue: 4 } },
          success: { text: "Chaque coup claque au centre. Ce bruit-là, {{mentor}} le cherchait depuis des semaines.", reward: { stats: { technique: 2 }, reputationInternal: 2 } },
          criticalSuccess: { text: "La séance devient un enchaînement continu et net. {{mentor}} hoche la tête sans rien dire — c'est rare.", reward: { stats: { technique: 3 }, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
        },
      },
      {
        id: 'approach-mitaines-lecture',
        label: 'Lire ses annonces avant qu\'il ne les termine',
        statTested: 'reflexes',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tu pars sur de mauvaises lectures et t'emmêles complètement.", reward: { coolness: -5 } },
          failure: { text: "Tu suis, avec un temps de retard constant.", reward: { fatigue: 4 } },
          success: { text: "Tu commences à répondre avant que la mitaine ne soit en place. Le rythme s'accélère.", reward: { stats: { reflexes: 2 } } },
          criticalSuccess: { text: "Vous finissez par ne plus avoir besoin d'annonces du tout. La séance devient presque une conversation.", reward: { stats: { reflexes: 3 }, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
        },
      },
    ],
  },
  {
    id: 'card-train-ralenti',
    type: 'training',
    title: 'Au ralenti, encore plus lentement',
    narrativeText:
      "« Trop vite. » {{mentor}} te fait recommencer l'enchaînement à un quart de la vitesse normale. Puis encore plus lentement. À cette allure, chaque défaut devient impossible à cacher.",
    requirement: { minRankOrder: 1, maxRankOrder: 4, weight: 2 },
    approaches: [
      {
        id: 'approach-ralenti-patience',
        label: 'Accepter la lenteur et décomposer entièrement',
        statTested: 'mental',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "L'exercice t'exaspère et tu accélères sans t'en rendre compte. Rien n'est acquis.", reward: { coolness: -5 } },
          failure: { text: "Tu tiens le rythme lent sans en tirer grand-chose.", reward: { fatigue: 3 } },
          success: { text: "Au ralenti, tu comprends enfin pourquoi ce geste ne fonctionnait pas.", reward: { stats: { technique: 2 } } },
          criticalSuccess: { text: "Ce que tu corriges à cette vitesse-là restera acquis pour toujours. {{mentor}} le sait, c'est pour ça qu'il insiste.", reward: { stats: { technique: 3 }, careerPoints: 4 } },
        },
      },
      {
        id: 'approach-ralenti-ressenti',
        label: 'Te concentrer sur ce que le corps ressent',
        statTested: 'endurance',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Maintenir ces positions aussi longtemps épuise des muscles que tu ne sollicitais jamais.", reward: { fatigue: 8 } },
          failure: { text: "Tu ressens surtout la difficulté de l'exercice.", reward: { fatigue: 5 } },
          success: { text: "Tu identifies exactement quels muscles travaillent et lesquels te trahissent.", reward: { stats: { endurance: 2 } } },
          criticalSuccess: { text: "Cette conscience corporelle nouvelle change ta façon de bouger sur le ring entier.", reward: { stats: { endurance: 3 }, health: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-train-balle-reflexe',
    type: 'training',
    title: 'La balle qui revient toujours',
    narrativeText:
      "Une petite balle tendue entre le sol et le plafond par deux élastiques. Elle revient plus vite que tu ne frappes, et pardonne encore moins les erreurs de timing que n'importe quel adversaire.",
    requirement: { minRankOrder: 1, maxRankOrder: 4, weight: 2 },
    approaches: [
      {
        id: 'approach-balle-rythme',
        label: 'Trouver le rythme et ne plus le lâcher',
        statTested: 'reflexes',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "La balle te revient en pleine figure trois fois de suite. La salle ne se retient pas de rire.", reward: { coolness: -5, health: -3 } },
          failure: { text: "Tu touches une fois sur trois. Le rythme t'échappe.", reward: { fatigue: 4 } },
          success: { text: "Tu tiens la cadence sans faute pendant des minutes entières.", reward: { stats: { reflexes: 2 } } },
          criticalSuccess: { text: "Tes réflexes atteignent un niveau que {{mentor}} n'attendait pas avant des mois.", reward: { stats: { reflexes: 3 }, reputationInternal: 2 } },
        },
      },
      {
        id: 'approach-balle-esquive',
        label: 'Travailler l\'esquive plutôt que la frappe',
        statTested: 'vitesse',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Tu esquives dans le mauvais sens systématiquement. Le nez s'en souvient.", reward: { health: -4, coolness: -4 } },
          failure: { text: "Tu évites l'essentiel, sans grande fluidité.", reward: { fatigue: 4 } },
          success: { text: "Ta tête bouge en permanence, sans effort conscient. Un réflexe s'installe.", reward: { stats: { vitesse: 2 } } },
          criticalSuccess: { text: "Tu esquives à quelques centimètres à chaque retour. Ce réflexe-là te sauvera plus d'une fois.", reward: { stats: { vitesse: 3 }, health: 2 } },
        },
      },
    ],
  },
  {
    id: 'card-train-respiration',
    type: 'training',
    title: 'Souffler au bon moment',
    narrativeText:
      "{{mentor}} pose une main sur ton ventre pendant que tu frappes. « Tu retiens ton souffle à chaque coup. C'est pour ça que tu es cuit au troisième round. »",
    requirement: { maxRankOrder: 4, weight: 2 },
    approaches: [
      {
        id: 'approach-respiration-technique',
        label: 'Synchroniser chaque expiration avec chaque coup',
        statTested: 'technique',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "À force de penser à respirer, tu ne frappes plus correctement du tout.", reward: { coolness: -4 } },
          failure: { text: "La synchronisation vient par intermittence.", reward: { fatigue: 4 } },
          success: { text: "Le souffle accompagne le geste au lieu de le freiner. Tout devient moins coûteux.", reward: { stats: { technique: 2 }, health: 2 } },
          criticalSuccess: { text: "Tu enchaînes désormais sans jamais t'asphyxier. C'est comme si tu avais gagné un round d'autonomie.", reward: { stats: { technique: 3 }, health: 4 } },
        },
      },
      {
        id: 'approach-respiration-calme',
        label: 'Apprendre à récupérer entre les séries',
        statTested: 'mental',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Tu n'arrives pas à faire redescendre le rythme cardiaque. Les séries suivantes en pâtissent.", reward: { fatigue: 8 } },
          failure: { text: "La récupération reste laborieuse.", reward: { fatigue: 5 } },
          success: { text: "Tu apprends à descendre en pression en quelques secondes. Une minute de repos devient beaucoup plus utile.", reward: { stats: { mental: 2 }, health: 2 } },
          criticalSuccess: { text: "Ta capacité de récupération entre les rounds devient un avantage tactique à part entière.", reward: { stats: { mental: 3 }, health: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-train-souplesse',
    type: 'training',
    title: 'Ce qui ne plie pas casse',
    narrativeText:
      "Une longue séance au sol, sans gants, sans sac. {{mentor}} soutient que la moitié des blessures de sa carrière venait de là — de tout ce qu'il n'a jamais pris le temps d'assouplir.",
    requirement: { maxRankOrder: 4, weight: 2 },
    approaches: [
      {
        id: 'approach-souplesse-rigueur',
        label: 'Suivre le protocole avec rigueur',
        statTested: 'mental',
        difficulty: 32,
        outcomes: {
          criticalFailure: { text: "Tu forces sur un étirement et tires un muscle. Exactement ce qu'il fallait éviter.", reward: { health: -6 } },
          failure: { text: "La séance passe, ennuyeuse et sans effet visible.", reward: {} },
          success: { text: "L'amplitude gagne quelques degrés partout. Le corps encaisse mieux, tout simplement.", reward: { health: 5, stats: { endurance: 1 } } },
          criticalSuccess: { text: "Ta mobilité s'améliore au point de changer ton jeu de jambes. Le bénéfice dépasse largement la prévention.", reward: { health: 8, stats: { endurance: 2 } } },
        },
      },
      {
        id: 'approach-souplesse-mobilite',
        label: 'Chercher l\'amplitude utile sur le ring',
        statTested: 'vitesse',
        difficulty: 32,
        outcomes: {
          criticalFailure: { text: "Tu cherches des amplitudes qui n'ont aucun intérêt en combat, et te blesses pour rien.", reward: { health: -5 } },
          failure: { text: "Quelques progrès, sans transfert évident sur le ring.", reward: {} },
          success: { text: "Tes esquives gagnent en amplitude sans perdre en équilibre.", reward: { stats: { vitesse: 2 }, health: 3 } },
          criticalSuccess: { text: "Tu passes sous des coups que tu n'aurais jamais pu éviter avant. Le gain est immédiatement visible.", reward: { stats: { vitesse: 3 }, health: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-train-mille-fois',
    type: 'training',
    title: 'Mille fois le même geste',
    narrativeText:
      "Un seul mouvement. Pas d'enchaînement, pas de variante. {{mentor}} compte à voix haute et ne s'arrêtera pas avant d'avoir atteint le nombre qu'il a en tête, sans jamais l'avoir annoncé.",
    requirement: { maxRankOrder: 3, weight: 2 },
    approaches: [
      {
        id: 'approach-mille-perseverance',
        label: 'Répéter sans jamais relâcher la qualité',
        statTested: 'endurance',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "La qualité s'effondre bien avant la fin. {{mentor}} arrête et te renvoie au vestiaire.", reward: { fatigue: 10, coolness: -5 } },
          failure: { text: "Tu tiens jusqu'au bout, avec un geste de plus en plus approximatif.", reward: { fatigue: 7 } },
          success: { text: "Le dernier geste ressemble exactement au premier. C'était tout l'objectif.", reward: { stats: { endurance: 2, technique: 1 } } },
          criticalSuccess: { text: "Le geste devient un réflexe pur, indépendant de la fatigue. Il sortira tout seul, un jour, au bon moment.", reward: { stats: { endurance: 3 }, careerPoints: 5 } },
        },
      },
      {
        id: 'approach-mille-concentration',
        label: 'Rester présent à chaque répétition',
        statTested: 'mental',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "L'esprit décroche complètement. Tu ne sais même plus combien tu en as fait.", reward: { coolness: -5, fatigue: 6 } },
          failure: { text: "L'attention va et vient. La séance sert surtout à passer le temps.", reward: { fatigue: 5 } },
          success: { text: "Rester présent mille fois d'affilée est un exercice mental autant que physique. Tu y arrives.", reward: { stats: { mental: 2 } } },
          criticalSuccess: { text: "Tu atteins un état de concentration que peu de boxeurs connaissent. La répétition devient presque méditative.", reward: { stats: { mental: 3 }, coolness: 4 } },
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
  {
    id: 'card-train-altitude',
    type: 'training',
    title: 'Trois semaines en altitude',
    narrativeText:
      "Un camp isolé en montagne, à deux mille mètres. L'air y est plus pauvre, chaque séance y coûte plus cher, et le corps met une semaine entière à comprendre ce qu'on lui demande.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    approaches: [
      {
        id: 'approach-altitude-volume',
        label: 'Maintenir le volume habituel malgré l\'altitude',
        statTested: 'endurance',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Tu ne t'acclimates jamais. Trois semaines perdues et un retour en pire état qu'au départ.", reward: { fatigue: 14, health: -8 } },
          failure: { text: "L'acclimatation prend tout le camp. Les bénéfices restent théoriques.", reward: { fatigue: 10 } },
          success: { text: "Le retour au niveau de la mer est spectaculaire : tu as l'impression de respirer double.", reward: { stats: { endurance: 4 }, health: 3 } },
          criticalSuccess: { text: "Ton système cardio se transforme littéralement. Les derniers rounds ne te font plus peur du tout.", reward: { stats: { endurance: 5 }, health: 6, careerPoints: 5 } },
        },
      },
      {
        id: 'approach-altitude-progressif',
        label: 'Y aller progressivement, en écoutant le corps',
        statTested: 'strategie',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Tu es tellement prudent que le camp n'apporte strictement rien.", reward: { fatigue: 6 } },
          failure: { text: "La progression est trop lente pour produire un vrai effet.", reward: { fatigue: 6 } },
          success: { text: "Le dosage est juste : tu tires le bénéfice de l'altitude sans jamais te griller.", reward: { stats: { endurance: 3, strategie: 1 }, health: 4 } },
          criticalSuccess: { text: "Tu construis un protocole d'altitude que {{mentor}} réutilisera avec ses autres boxeurs.", reward: { stats: { endurance: 4, strategie: 2 }, health: 6, reputationInternal: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-train-sparring-relais',
    type: 'training',
    title: 'Trois partenaires, aucun repos',
    narrativeText:
      "Trois sparring-partners frais qui se relaient toutes les deux rounds. Toi, tu ne sors pas du ring. L'exercice ne simule aucune situation réelle — il simule seulement l'épuisement le plus total.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    approaches: [
      {
        id: 'approach-relais-tenir',
        label: 'Tenir les neuf rounds coûte que coûte',
        statTested: 'endurance',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Tu craques au sixième round. {{mentor}} arrête tout, sans commentaire.", reward: { fatigue: 14, health: -8, coolness: -5 } },
          failure: { text: "Tu termines, vidé, en encaissant beaucoup plus que tu ne rends sur la fin.", reward: { fatigue: 11, health: -5 } },
          success: { text: "Tu tiens les neuf rounds sans jamais reculer. Peu de boxeurs de ton niveau y arrivent.", reward: { stats: { endurance: 3 }, reputationInternal: 4 } },
          criticalSuccess: { text: "Ce sont les trois partenaires qui finissent épuisés, pas toi. La salle entière s'est arrêtée pour regarder.", reward: { stats: { endurance: 4 }, reputationInternal: 8, coolness: 5 } },
        },
      },
      {
        id: 'approach-relais-economiser',
        label: 'Gérer ton effort et économiser sur les phases neutres',
        statTested: 'strategie',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Ton économie tourne à la passivité. {{mentor}} te reproche de fuir l'exercice.", reward: { coolness: -6, fatigue: 8 } },
          failure: { text: "Tu gères mal les phases et finis aussi épuisé qu'en forçant.", reward: { fatigue: 10 } },
          success: { text: "Tu apprends à voler des secondes de récupération en plein round. Une compétence rare.", reward: { stats: { strategie: 3 }, health: 3 } },
          criticalSuccess: { text: "Ta gestion de l'effort devient chirurgicale. Tu finis le neuvième round plus frais que le troisième.", reward: { stats: { strategie: 4 }, health: 5, careerPoints: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-train-musculation-ciblee',
    type: 'training',
    title: 'De la force, pas du volume',
    narrativeText:
      "Un préparateur physique refond entièrement ton travail de force. Rien de spectaculaire à l'œil : l'objectif est de gagner en puissance sans prendre un gramme qui compliquerait la pesée.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    approaches: [
      {
        id: 'approach-muscu-explosivite',
        label: 'Tout miser sur l\'explosivité',
        statTested: 'puissance',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Tu charges trop lourd trop vite. Une douleur d'épaule s'installe pour des semaines.", reward: { health: -9, fatigue: 8 } },
          failure: { text: "Les charges montent sans que ça se traduise sur le ring.", reward: { fatigue: 6 } },
          success: { text: "Tes coups gagnent en sécheresse sans que ta vitesse en pâtisse.", reward: { stats: { puissance: 3 } } },
          criticalSuccess: { text: "Le gain de puissance est immédiatement visible au sparring. Tes partenaires le remarquent avant toi.", reward: { stats: { puissance: 4 }, reputationInternal: 3 } },
        },
      },
      {
        id: 'approach-muscu-chaine',
        label: 'Travailler la chaîne complète, des appuis au poing',
        statTested: 'technique',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Le travail global disperse tes efforts sans rien améliorer nulle part.", reward: { fatigue: 7 } },
          failure: { text: "Quelques progrès diffus, difficiles à mesurer.", reward: { fatigue: 5 } },
          success: { text: "La force part enfin du sol et remonte entièrement jusqu'au poing. Tout le geste y gagne.", reward: { stats: { technique: 2, puissance: 2 } } },
          criticalSuccess: { text: "Ton transfert de force devient un modèle. Le préparateur te filme pour ses autres athlètes.", reward: { stats: { technique: 3, puissance: 3 }, reputationInternal: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-train-angles-sortie',
    type: 'training',
    title: 'Ne jamais rester en face',
    narrativeText:
      "{{mentor}} trace des lignes au sol autour de toi. La règle est simple : après chaque échange, tu dois avoir changé d'angle. Rester dans l'axe, même une seconde, annule tout le travail.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    approaches: [
      {
        id: 'approach-angles-jambes',
        label: 'Travailler la sortie par le jeu de jambes',
        statTested: 'vitesse',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Tu croises les appuis en sortant et te retrouves systématiquement déséquilibré.", reward: { fatigue: 8, coolness: -4 } },
          failure: { text: "Les sorties existent, mais toujours avec un temps de retard.", reward: { fatigue: 6 } },
          success: { text: "Tu n'es plus jamais là où l'adversaire termine son coup. Ça change tout défensivement.", reward: { stats: { vitesse: 3 } } },
          criticalSuccess: { text: "Tes sorties d'angle deviennent invisibles. Les sparring-partners frappent dans le vide en permanence.", reward: { stats: { vitesse: 4 }, health: 3 } },
        },
      },
      {
        id: 'approach-angles-lecture',
        label: 'Anticiper l\'angle avant même l\'échange',
        statTested: 'strategie',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Tu anticipes les mauvais angles et te places systématiquement là où il ne faut pas.", reward: { coolness: -5, fatigue: 6 } },
          failure: { text: "Tu lis correctement une fois sur deux.", reward: { fatigue: 5 } },
          success: { text: "Tu choisis ton angle avant même que l'échange ne commence. C'est de la boxe d'avance.", reward: { stats: { strategie: 3 } } },
          criticalSuccess: { text: "Tu diriges les déplacements adverses sans qu'ils s'en aperçoivent. Un niveau de contrôle rare.", reward: { stats: { strategie: 4 }, careerPoints: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-train-prive-vue',
    type: 'training',
    title: 'Les yeux bandés',
    narrativeText:
      "{{mentor}} te bande les yeux et te place face à un partenaire qui frappe au corps, sans force mais sans prévenir. « Tu regardes trop. Apprends à sentir. »",
    requirement: { minRankOrder: 5, maxRankOrder: 8, weight: 2 },
    approaches: [
      {
        id: 'approach-aveugle-contact',
        label: 'Te fier au contact des gants et des appuis',
        statTested: 'reflexes',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Sans la vue, tu es complètement perdu. L'exercice tourne à l'humiliation.", reward: { coolness: -7, health: -5 } },
          failure: { text: "Tu réagis au hasard plus qu'au ressenti.", reward: { fatigue: 6 } },
          success: { text: "Tu commences à lire les intentions par le contact seul. Une dimension entière s'ouvre.", reward: { stats: { reflexes: 3 } } },
          criticalSuccess: { text: "Tu bloques presque tout, les yeux bandés. Le corps-à-corps ne sera plus jamais un problème.", reward: { stats: { reflexes: 4 }, careerPoints: 5 } },
        },
      },
      {
        id: 'approach-aveugle-calme',
        label: 'Rester calme dans le noir plutôt que réagir',
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "La panique monte dès les premières secondes. Tu arraches le bandeau avant la fin.", reward: { coolness: -8 } },
          failure: { text: "Tu tiens l'exercice en serrant les dents, sans rien en tirer.", reward: { fatigue: 6 } },
          success: { text: "Le noir cesse d'être angoissant. Ce calme-là se transfère directement au ring.", reward: { stats: { mental: 3 }, coolness: 4 } },
          criticalSuccess: { text: "Tu atteins un calme total dans une situation conçue pour affoler. Plus rien ne te surprendra vraiment.", reward: { stats: { mental: 4 }, coolness: 7 } },
        },
      },
    ],
  },
  {
    id: 'card-train-recuperation-active',
    type: 'training',
    title: 'La séance qui n\'en est pas une',
    narrativeText:
      "Pas de gants aujourd'hui. Bassin, massage, mobilité douce, et un kinésithérapeute qui passe une heure à te dire tout ce qui, dans ton corps, commence à tirer au mauvais endroit.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    approaches: [
      {
        id: 'approach-recup-serieux',
        label: 'Prendre la récupération aussi au sérieux que l\'entraînement',
        statTested: 'strategie',
        difficulty: 46,
        outcomes: {
          criticalFailure: { text: "Tu t'ennuies et écourtes la séance. Les tensions restent exactement où elles étaient.", reward: { health: -4 } },
          failure: { text: "La séance passe. Le corps va un peu mieux, sans plus.", reward: { health: 2 } },
          success: { text: "Le corps repart nettement plus propre. Ces séances-là prolongent les carrières.", reward: { health: 8, fatigue: -8 } },
          criticalSuccess: { text: "Tu ressors comme neuf. Le kiné note que peu de boxeurs prennent ça aussi au sérieux — et ça se voit.", reward: { health: 12, fatigue: -12, stats: { strategie: 2 } } },
        },
      },
      {
        id: 'approach-recup-ecoute',
        label: 'Écouter précisément ce que le corps signale',
        statTested: 'mental',
        difficulty: 46,
        outcomes: {
          criticalFailure: { text: "Tu t'inquiètes de chaque signal. La séance te laisse plus anxieux que reposé.", reward: { coolness: -6 } },
          failure: { text: "Tu retiens quelques points, sans en faire grand-chose.", reward: { health: 2 } },
          success: { text: "Tu identifies deux problèmes avant qu'ils ne deviennent des blessures. C'est énorme.", reward: { health: 7, stats: { mental: 2 } } },
          criticalSuccess: { text: "Tu développes une lecture de ton propre corps si fine que tu anticipes désormais les blessures avant elles.", reward: { health: 11, stats: { mental: 3 }, careerPoints: 4 } },
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
  {
    id: 'card-train-reapprendre-jab',
    type: 'training',
    title: 'Réapprendre à faire un jab',
    narrativeText:
      "Après des centaines de combats, ton jab a dérivé sans que personne ne le remarque : l'épaule monte un peu moins, le retour est un peu plus lent. Tout reprendre depuis le début, à ce stade, demande une certaine humilité.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-reapprendre-humilite',
        label: 'Tout reprendre depuis les bases, sans ego',
        statTested: 'technique',
        difficulty: 58,
        outcomes: {
          criticalFailure: { text: "Défaire un automatisme de quinze ans casse plus qu'il ne répare. Ton jab ne ressemble plus à rien.", reward: { coolness: -8, fatigue: 7 } },
          failure: { text: "L'ancien geste revient dès que tu ne réfléchis plus.", reward: { fatigue: 6 } },
          success: { text: "Le jab retrouve sa forme d'origine, avec vingt ans d'expérience en plus derrière.", reward: { stats: { technique: 3 }, careerPoints: 5 } },
          criticalSuccess: { text: "Ton jab redevient l'arme qu'il était à tes débuts, mais placée par quelqu'un qui sait exactement quand l'utiliser.", reward: { stats: { technique: 4 }, careerPoints: 9, reputationInternal: 4 } },
        },
      },
      {
        id: 'approach-reapprendre-adapter',
        label: 'Adapter le geste à ton corps d\'aujourd\'hui',
        statTested: 'strategie',
        difficulty: 58,
        outcomes: {
          criticalFailure: { text: "Les adaptations s'empilent sans cohérence. Le geste devient bâtard.", reward: { coolness: -7 } },
          failure: { text: "Quelques ajustements mineurs, sans effet net.", reward: { fatigue: 5 } },
          success: { text: "Plutôt que restaurer l'ancien geste, tu en construis un nouveau, taillé pour le corps que tu as maintenant.", reward: { stats: { strategie: 3 }, health: 3 } },
          criticalSuccess: { text: "Le geste adapté est plus efficace que l'original ne l'a jamais été. L'expérience finit toujours par payer.", reward: { stats: { strategie: 4 }, health: 5, careerPoints: 7 } },
        },
      },
    ],
  },
  {
    id: 'card-train-composer-sequelles',
    type: 'training',
    title: 'Composer avec ce qui reste',
    narrativeText:
      "L'épaule droite ne monte plus aussi haut depuis deux ans. Le genou gauche se rappelle à toi les jours humides. La séance du jour ne cherche pas à réparer tout ça — seulement à construire autour.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-sequelles-contourner',
        label: 'Bâtir un style qui contourne les points faibles',
        statTested: 'strategie',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "En protégeant tout, tu ne peux plus rien faire. Le style devient timide et prévisible.", reward: { coolness: -7, fatigue: 6 } },
          failure: { text: "Les adaptations restent superficielles.", reward: { fatigue: 5 } },
          success: { text: "Tu construis un jeu qui ne dépend plus des zones abîmées. Personne ne verra la différence.", reward: { stats: { strategie: 3 }, health: 4 } },
          criticalSuccess: { text: "Ton nouveau style masque si bien tes limites que les adversaires cherchent des failles qui n'existent plus.", reward: { stats: { strategie: 4 }, health: 7, careerPoints: 6 } },
        },
      },
      {
        id: 'approach-sequelles-renforcer',
        label: 'Renforcer méthodiquement les zones fragiles',
        statTested: 'endurance',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Le renforcement réveille exactement ce que tu essayais d'apaiser.", reward: { health: -10, fatigue: 9 } },
          failure: { text: "Le travail est long et les résultats invisibles pour l'instant.", reward: { fatigue: 7 } },
          success: { text: "Les zones fragiles tiennent à nouveau. Ce n'est pas comme avant, mais c'est solide.", reward: { stats: { endurance: 3 }, health: 6 } },
          criticalSuccess: { text: "Le corps répond bien mieux qu'espéré. Le kiné parle de plusieurs années gagnées.", reward: { stats: { endurance: 4 }, health: 10, careerPoints: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-train-sparring-categorie-superieure',
    type: 'training',
    title: 'Un partenaire trop lourd',
    narrativeText:
      "Le sparring du jour pèse dix kilos de plus que toi et boxe deux catégories au-dessus. Il ne frappe pas fort volontairement — il n'en a pas besoin. Chaque contact rappelle l'écart.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-lourd-technique',
        label: 'Compenser entièrement par le placement',
        statTested: 'technique',
        difficulty: 60,
        outcomes: {
          criticalFailure: { text: "Le gabarit fait toute la différence. La séance s'arrête tôt, pour ta sécurité.", reward: { health: -12, coolness: -6 } },
          failure: { text: "Tu tiens la distance sans jamais peser dans l'échange.", reward: { fatigue: 9, health: -5 } },
          success: { text: "Tu neutralises l'écart de poids par le pur placement. Redoutablement instructif.", reward: { stats: { technique: 3 }, reputationInternal: 4 } },
          criticalSuccess: { text: "Tu domines techniquement quelqu'un de bien plus lourd. Ce genre de séance vaut dix combats.", reward: { stats: { technique: 4 }, reputationInternal: 8, careerPoints: 6 } },
        },
      },
      {
        id: 'approach-lourd-encaisser',
        label: 'En profiter pour tester ce que tu encaisses',
        statTested: 'endurance',
        difficulty: 60,
        outcomes: {
          criticalFailure: { text: "Tu encaisses beaucoup trop pour un simple sparring. {{mentor}} est furieux.", reward: { health: -15, fatigue: 10 } },
          failure: { text: "Tu encaisses, sans en tirer d'enseignement clair.", reward: { health: -7, fatigue: 8 } },
          success: { text: "Tu sais désormais exactement ce que ton corps peut absorber. Une information précieuse.", reward: { stats: { endurance: 3 }, coolness: 4 } },
          criticalSuccess: { text: "Tu encaisses sans broncher ce que personne de ta catégorie ne devrait pouvoir encaisser.", reward: { stats: { endurance: 4 }, coolness: 8, reputationInternal: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-train-boxe-economique',
    type: 'training',
    title: 'Faire moins, mais mieux',
    narrativeText:
      "Le nouveau credo de tes séances : supprimer tout geste inutile. Pas un pas de trop, pas un coup qui ne serve à rien. À ton âge, chaque calorie dépensée pour rien est une calorie qui manquera au douzième round.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-economique-selection',
        label: 'Ne plus lancer que les coups qui comptent',
        statTested: 'strategie',
        difficulty: 57,
        outcomes: {
          criticalFailure: { text: "À force de sélectionner, tu ne lances plus rien. Les juges appellent ça de l'inactivité.", reward: { coolness: -7 } },
          failure: { text: "Tu réduis le volume sans gagner en efficacité.", reward: { fatigue: 5 } },
          success: { text: "Moitié moins de coups, deux fois plus de dégâts. La boxe devient une affaire de sélection.", reward: { stats: { strategie: 3 }, health: 3 } },
          criticalSuccess: { text: "Chaque coup que tu lances désormais a une raison d'être. C'est de la boxe d'une intelligence rare.", reward: { stats: { strategie: 4 }, health: 5, careerPoints: 7 } },
        },
      },
      {
        id: 'approach-economique-deplacement',
        label: 'Supprimer chaque déplacement superflu',
        statTested: 'reflexes',
        difficulty: 57,
        outcomes: {
          criticalFailure: { text: "Tu bouges si peu que tu deviens une cible fixe. Mauvaise idée.", reward: { health: -9, coolness: -5 } },
          failure: { text: "Tes déplacements se réduisent, sans gain net.", reward: { fatigue: 5 } },
          success: { text: "Tu ne bouges plus que de quelques centimètres, exactement quand il le faut. Redoutable.", reward: { stats: { reflexes: 3 }, health: 3 } },
          criticalSuccess: { text: "Tes esquives minimales frustrent tout le monde au sparring. Tu sembles à peine bouger et rien ne te touche.", reward: { stats: { reflexes: 4 }, health: 6, coolness: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-train-isolement-total',
    type: 'training',
    title: 'Six semaines sans personne',
    narrativeText:
      "Un camp fermé, sans téléphone, sans visites, sans rien d'autre que l'entraînement et le sommeil. {{mentor}} propose ça pour la prochaine grande échéance. C'est efficace, et c'est très long.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-isolement-total',
        label: 'Accepter la coupure complète',
        statTested: 'mental',
        difficulty: 58,
        outcomes: {
          criticalFailure: { text: "L'isolement te ronge. Tu sors du camp affûté physiquement et cassé mentalement.", reward: { coolness: -12, loyalty: -4 } },
          failure: { text: "Les semaines sont longues. Le bénéfice ne compense pas vraiment le coût.", reward: { fatigue: 8, coolness: -4 } },
          success: { text: "Six semaines sans distraction produisent une concentration que rien d'autre ne permet.", reward: { stats: { mental: 3 }, careerPoints: 7 } },
          criticalSuccess: { text: "Tu ressors du camp dans un état de préparation totale, physique et mentale. {{mentor}} n'a jamais vu ça.", reward: { stats: { mental: 4 }, careerPoints: 12, coolness: 6 } },
        },
      },
      {
        id: 'approach-isolement-amenage',
        label: 'Garder un lien avec les tiens malgré le camp',
        statTested: 'strategie',
        difficulty: 58,
        outcomes: {
          criticalFailure: { text: "Le compromis ne satisfait personne : ni la concentration, ni les proches.", reward: { coolness: -8, loyalty: -3 } },
          failure: { text: "Le camp se déroule normalement, sans intensité particulière.", reward: { fatigue: 6 } },
          success: { text: "Tu trouves le dosage : concentré sans être coupé du monde. Le meilleur des deux.", reward: { stats: { mental: 2 }, loyalty: 4, careerPoints: 6 } },
          criticalSuccess: { text: "Le camp est aussi productif qu'un isolement total, sans en payer le prix humain. Un vrai savoir-faire.", reward: { stats: { mental: 3, strategie: 2 }, loyalty: 7, careerPoints: 10 } },
        },
      },
    ],
  },
  {
    id: 'card-train-arme-secrete',
    type: 'training',
    title: 'Quelque chose que personne n\'attend',
    narrativeText:
      "{{mentor}} veut construire un coup entièrement nouveau, gardé secret jusqu'au bon moment. Ça prendra des mois, ça ne servira peut-être qu'une seule fois, et cette fois-là décidera peut-être d'un championnat.",
    requirement: { minRankOrder: 9, weight: 2 },
    approaches: [
      {
        id: 'approach-secrete-puissance',
        label: 'Construire une arme faite pour finir un combat',
        statTested: 'puissance',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "Le geste ne fonctionne jamais correctement. Des mois de travail pour rien.", reward: { fatigue: 10, coolness: -7 } },
          failure: { text: "Le coup existe, sans être assez fiable pour compter dessus.", reward: { fatigue: 8 } },
          success: { text: "L'arme est prête, et personne au monde ne sait qu'elle existe.", reward: { stats: { puissance: 3 }, careerPoints: 8 } },
          criticalSuccess: { text: "Le coup est dévastateur et totalement indétectable à la préparation. Il changera un combat, tôt ou tard.", reward: { stats: { puissance: 4 }, careerPoints: 13, coolness: 6 } },
        },
      },
      {
        id: 'approach-secrete-tromperie',
        label: 'Construire une arme faite pour tromper',
        statTested: 'technique',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "La feinte est trop lisible. Testée au sparring, elle ne trompe personne.", reward: { fatigue: 9, coolness: -7 } },
          failure: { text: "L'illusion fonctionne une fois sur trois. Insuffisant pour un championnat.", reward: { fatigue: 8 } },
          success: { text: "La tromperie est parfaitement construite : l'adversaire verra exactement ce que tu veux qu'il voie.", reward: { stats: { technique: 3 }, careerPoints: 8 } },
          criticalSuccess: { text: "Même {{mentor}}, qui l'a conçue avec toi, se fait prendre au sparring. C'est dire.", reward: { stats: { technique: 4 }, careerPoints: 13, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
        },
      },
    ],
  },
]

export const TRAINING_CARDS: TrainingCard[] = [...EARLY_TRAINING, ...MID_TRAINING, ...LATE_TRAINING]
