import type { LifeMomentCard } from '../../engine/types'

// ─────────────────────────────────────────────────────────────────────────
// DÉBUT DE CARRIÈRE (paliers 0-3 : amateur novice → pro classe C)
// ─────────────────────────────────────────────────────────────────────────
const EARLY_LIFE_MOMENTS: LifeMomentCard[] = [
  {
    id: 'card-life-premier-jour',
    type: 'life-moment',
    title: 'Le premier jour',
    narrativeText:
      "L'odeur de cuir et de sueur te prend à la gorge avant même que tu aies posé un pied sur le tapis. Une dizaine de regards se tournent vers toi, le temps d'un instant, avant de retourner à leurs sacs de frappe.",
    requirement: { maxRankOrder: 0, onceOnly: true, weight: 3 },
    choices: [
      {
        id: 'choice-avancer',
        label: "Avancer sans te faire remarquer",
        statTested: 'mental',
        difficulty: 35,
        outcomes: {
          criticalFailure: {
            text: "Tu trébuches sur un sac posé au sol. Quelques rires discrets fusent au fond de la salle.",
            reward: { coolness: -5 },
          },
          failure: {
            text: "Tu traverses la salle raide comme un piquet, sans savoir où regarder.",
            reward: {},
          },
          success: {
            text: "Tu trouves ta place sans attirer l'attention, et commences à observer avant d'imiter.",
            reward: { coolness: 3 },
          },
          criticalSuccess: {
            text: "Tu t'installes avec un naturel qui surprend jusqu'à l'entraîneur, déjà en train de t'observer du coin de l'œil.",
            reward: { coolness: 6, reputationInternal: 3 },
          },
        },
      },
      {
        id: 'choice-questions',
        label: 'Poser des questions à qui veut répondre',
        statTested: 'strategie',
        difficulty: 35,
        outcomes: {
          criticalFailure: {
            text: "Tu interromps un vétéran en pleine série. Il ne le prend pas bien.",
            reward: { reputationInternal: -3 },
          },
          failure: {
            text: "Personne n'a vraiment le temps de te répondre entre deux rounds.",
            reward: {},
          },
          success: {
            text: "Un boxeur plus âgé prend deux minutes pour t'expliquer les bases du fonctionnement de la salle.",
            reward: { stats: { strategie: 2 } },
          },
          criticalSuccess: {
            text: "Ta curiosité amuse plutôt qu'elle n'agace. Quelqu'un te propose déjà de t'entraîner avec lui la semaine suivante.",
            reward: { stats: { strategie: 2 }, reputationInternal: 3 },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-mentor-conseil',
    type: 'life-moment',
    title: 'Un conseil qui compte',
    narrativeText:
      "{{mentor}} t'observe travailler depuis un moment avant de s'approcher. « Tu veux vraiment que je te dise ce qui cloche, ou juste que je te regarde encore un peu ? »",
    requirement: { maxRankOrder: 2, weight: 2 },
    choices: [
      {
        id: 'choice-ecouter',
        label: 'Demander la critique complète',
        statTested: 'mental',
        difficulty: 40,
        outcomes: {
          criticalFailure: {
            text: "La liste est plus longue que tu ne l'espérais, et elle te reste en travers de la gorge le reste de la journée.",
            reward: { coolness: -6 },
          },
          failure: {
            text: "Tu encaisses les remarques sans grande conviction.",
            reward: {},
          },
          success: {
            text: "Tu prends chaque remarque comme un outil plutôt qu'une attaque. {{mentor}} apprécie visiblement l'attitude.",
            reward: { stats: { mental: 2 }, entourageDelta: [{ role: 'Mentor', delta: 1 }] },
          },
          criticalSuccess: {
            text: "Tu poses même des questions en retour. {{mentor}} prolonge la conversation bien au-delà de ce qui était prévu.",
            reward: { stats: { mental: 3 }, entourageDelta: [{ role: 'Mentor', delta: 1 }], reputationInternal: 3 },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-defi-rival',
    type: 'life-moment',
    title: 'Un défi informel',
    narrativeText:
      "{{rival}} t'attend près du ring, gants déjà enfilés. « Trois minutes, juste toi et moi. Histoire de voir où on en est vraiment. »",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-accepter',
        label: 'Accepter le défi',
        statTested: 'technique',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "{{rival}} prend clairement le dessus, et ne se prive pas de te le faire remarquer.",
            reward: { coolness: -6, entourageDelta: [{ role: 'Rival', delta: -1 }] },
          },
          failure: {
            text: "L'échange reste équilibré, sans vainqueur net.",
            reward: { fatigue: 4 },
          },
          success: {
            text: "Tu prends légèrement le dessus. {{rival}} retire son protège-dents, un sourire compétitif aux lèvres.",
            reward: { stats: { technique: 2 }, entourageDelta: [{ role: 'Rival', delta: 1 }] },
          },
          criticalSuccess: {
            text: "Tu domines clairement l'échange. {{rival}} hoche la tête, presque à contrecœur : « D'accord. Bien joué. »",
            reward: { stats: { technique: 3 }, reputationInternal: 4, entourageDelta: [{ role: 'Rival', delta: 1 }] },
          },
        },
      },
      {
        id: 'choice-decliner',
        label: 'Décliner, pas aujourd\'hui',
        statTested: 'strategie',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "{{rival}} interprète ton refus comme de la peur, et le fait savoir autour de vous.",
            reward: { reputationInternal: -3, entourageDelta: [{ role: 'Rival', delta: -1 }] },
          },
          failure: {
            text: "Le refus passe mal, sans plus de conséquence.",
            reward: {},
          },
          success: {
            text: "Tu expliques calmement pourquoi ce n'est pas le bon moment. {{rival}} respecte la décision.",
            reward: { stats: { strategie: 1 }, coolness: 3 },
          },
          criticalSuccess: {
            text: "Ta réponse posée impressionne plus que n'importe quel round n'aurait pu le faire.",
            reward: { stats: { strategie: 2 }, coolness: 5, entourageDelta: [{ role: 'Rival', delta: 1 }] },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-argent-equipement',
    type: 'life-moment',
    title: "L'équipement qui manque",
    narrativeText:
      "Tes gants commencent à se fendre sur les jointures, et le budget de la maison ne laisse pas beaucoup de marge pour une paire neuve ce mois-ci.",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-debrouille',
        label: 'Te débrouiller autrement',
        statTested: 'strategie',
        difficulty: 40,
        outcomes: {
          criticalFailure: {
            text: "Le rafistolage improvisé lâche en plein entraînement, et tu te retrouves à mains presque nues sur le sac.",
            reward: { health: -3 },
          },
          failure: {
            text: "Tu tiens tant bien que mal avec ce que tu as.",
            reward: {},
          },
          success: {
            text: "Tu trouves une solution ingénieuse pour prolonger la vie des gants de quelques semaines de plus.",
            reward: { stats: { strategie: 2 } },
          },
          criticalSuccess: {
            text: "Ta solution est si maligne qu'un autre boxeur de la salle te la demande pour lui-même.",
            reward: { stats: { strategie: 2 }, reputationInternal: 3 },
          },
        },
      },
      {
        id: 'choice-encaisser',
        label: 'Serrer les dents et continuer',
        statTested: 'endurance',
        difficulty: 40,
        outcomes: {
          criticalFailure: {
            text: "Une jointure s'ouvre pour de bon. Il va falloir arrêter le sac un moment.",
            reward: { health: -6 },
          },
          failure: {
            text: "Tu continues, un peu plus prudent qu'avant sur chaque frappe.",
            reward: {},
          },
          success: {
            text: "Tu t'adaptes, et l'inconfort finit presque par disparaître de ton attention.",
            reward: { stats: { endurance: 2 } },
          },
          criticalSuccess: {
            text: "Tu transformes la contrainte en entraînement supplémentaire de résistance mentale.",
            reward: { stats: { endurance: 2 }, coolness: 3 },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-doute',
    type: 'life-moment',
    title: 'Le doute, la veille',
    narrativeText:
      "La veille de ton premier vrai combat amateur, une pensée s'installe et refuse de partir : et si tu n'étais tout simplement pas fait pour ça ?",
    requirement: { maxRankOrder: 2, weight: 2 },
    choices: [
      {
        id: 'choice-affronter',
        label: 'Affronter le doute de face',
        statTested: 'mental',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "La nuit est presque blanche. Tu arrives le lendemain vidé avant même d'avoir commencé.",
            reward: { fatigue: 8, coolness: -6 },
          },
          failure: {
            text: "Le doute reste là, tapi, sans vraiment gâcher ta nuit.",
            reward: {},
          },
          success: {
            text: "Tu retournes la question dans tous les sens jusqu'à ce qu'elle perde de sa force. Tu dors, finalement.",
            reward: { coolness: 4 },
          },
          criticalSuccess: {
            text: "Tu transformes le doute en carburant. Tu te lèves le lendemain avec une clarté que tu ne t'attendais pas à ressentir.",
            reward: { coolness: 7, stats: { mental: 2 } },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-soutien-famille',
    type: 'life-moment',
    title: 'Autour de la table',
    narrativeText:
      "Le dîner s'éternise, et quelqu'un finit par poser la question que tout le monde évitait : « Tu comptes vraiment continuer ce truc de boxe ? »",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-convaincre',
        label: 'Expliquer pourquoi ça compte',
        statTested: 'mental',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "La conversation tourne mal, et le repas se termine dans un silence pesant.",
            reward: { coolness: -6 },
          },
          failure: {
            text: "Tu expliques comme tu peux, sans vraiment convaincre personne.",
            reward: {},
          },
          success: {
            text: "Tes mots trouvent leur chemin. Ce n'est pas de l'enthousiasme, mais c'est un début d'acceptation.",
            reward: { coolness: 3, loyalty: 4 },
          },
          criticalSuccess: {
            text: "Ta sincérité change quelque chose dans la pièce. Pour la première fois, on te demande comment se passe l'entraînement — vraiment.",
            reward: { coolness: 5, loyalty: 7 },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-blessure-legere',
    type: 'life-moment',
    title: 'Une gêne qui persiste',
    narrativeText:
      "Ton poignet tire un peu depuis quelques jours. Rien de grave en apparence, mais chaque impact sur le sac le rappelle à ton attention.",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-repos',
        label: 'Lever le pied quelques jours',
        statTested: 'strategie',
        difficulty: 38,
        outcomes: {
          criticalFailure: {
            text: "Tu rates une occasion importante en t'arrêtant, et quelqu'un d'autre prend ta place ce jour-là.",
            reward: { reputationInternal: -3 },
          },
          failure: {
            text: "La pause t'ennuie plus qu'elle ne t'aide vraiment.",
            reward: {},
          },
          success: {
            text: "Le repos porte ses fruits. Le poignet est comme neuf quand tu reprends.",
            reward: { health: 4 },
          },
          criticalSuccess: {
            text: "Tu profites de la pause pour travailler ta préparation mentale — et reviens plus solide qu'avant.",
            reward: { health: 5, stats: { mental: 2 } },
          },
        },
      },
      {
        id: 'choice-pousser',
        label: 'Continuer malgré la gêne',
        statTested: 'endurance',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "Le poignet lâche pour de bon en plein exercice. Il va falloir arrêter bien plus longtemps que prévu.",
            reward: { health: -10 },
          },
          failure: {
            text: "Tu continues, la gêne en fond sonore permanent.",
            reward: { health: -3 },
          },
          success: {
            text: "La gêne finit par s'estomper d'elle-même, sans jamais vraiment t'arrêter.",
            reward: { stats: { endurance: 1 } },
          },
          criticalSuccess: {
            text: "Tu apprends à travailler autour de la douleur sans jamais compromettre ta technique.",
            reward: { stats: { endurance: 2 }, health: -2 },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-media-locale',
    type: 'life-moment',
    title: 'Un entrefilet dans le journal local',
    narrativeText:
      "Un journaliste local, venu couvrir une réunion amateur, mentionne ton nom dans son article — deux lignes, à peine, mais c'est la première fois que ça arrive.",
    requirement: { minRankOrder: 1, maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-humble',
        label: 'Rester concentré, ne pas s\'enflammer',
        statTested: 'mental',
        difficulty: 40,
        outcomes: {
          criticalFailure: {
            text: "Deux lignes de journal te tournent étrangement la tête pendant toute une semaine d'entraînement.",
            reward: { coolness: -5 },
          },
          failure: {
            text: "Tu affiches une indifférence un peu forcée.",
            reward: {},
          },
          success: {
            text: "Tu prends la mention pour ce qu'elle est — un détail — et retournes au travail sans t'y attarder.",
            reward: { coolness: 3, reputationExternal: 2 },
          },
          criticalSuccess: {
            text: "Ton calme face à cette petite reconnaissance impressionne autant que n'importe quelle victoire.",
            reward: { coolness: 5, reputationExternal: 4 },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-sacrifice-temps',
    type: 'life-moment',
    title: 'Ce qu\'il faut laisser de côté',
    narrativeText:
      "Des amis t'invitent à une soirée le même week-end qu'une séance d'entraînement intensif que tu ne peux pas rater.",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-priorite',
        label: "Choisir l'entraînement",
        statTested: 'mental',
        difficulty: 40,
        outcomes: {
          criticalFailure: {
            text: "Le choix te pèse plus que prévu, et l'entraînement en pâtit, l'esprit ailleurs.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "Tu t'entraînes, mais avec un pincement de regret en fond.",
            reward: { fatigue: 3 },
          },
          success: {
            text: "Tu assumes ton choix sans arrière-pensée, et la séance en profite pleinement.",
            reward: { stats: { endurance: 2 } },
          },
          criticalSuccess: {
            text: "Ta détermination impressionne la salle entière ce jour-là.",
            reward: { stats: { endurance: 2 }, reputationInternal: 3 },
          },
        },
      },
      {
        id: 'choice-equilibre',
        label: 'Trouver un compromis',
        statTested: 'strategie',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "Tu rates les deux à moitié — la soirée écourtée, l'entraînement du lendemain raté par fatigue.",
            reward: { fatigue: 6 },
          },
          failure: {
            text: "Le compromis fonctionne à peu près, sans grande satisfaction d'un côté comme de l'autre.",
            reward: {},
          },
          success: {
            text: "Tu passes un peu de temps aux deux, et repars le lendemain reposé et content d'avoir vu du monde.",
            reward: { loyalty: 3, coolness: 2 },
          },
          criticalSuccess: {
            text: "L'équilibre trouvé te fait le plus grand bien, sur le ring comme en dehors.",
            reward: { loyalty: 5, coolness: 4 },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-nuit-avant-pro',
    type: 'life-moment',
    title: 'La nuit avant le premier combat pro',
    narrativeText:
      "Demain, pour la première fois, un chèque suivra le combat. Ce détail change quelque chose, même si tu n'arrives pas à dire exactement quoi.",
    requirement: { requiredFlags: ['flag-turned-pro'], maxRankOrder: 4, onceOnly: true, weight: 3 },
    choices: [
      {
        id: 'choice-visualiser',
        label: 'Visualiser chaque round à l\'avance',
        statTested: 'strategie',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "Tu imagines surtout tout ce qui pourrait mal tourner, et t'endors tard, l'esprit encombré.",
            reward: { coolness: -6, fatigue: 4 },
          },
          failure: {
            text: "La visualisation reste vague, sans grand effet.",
            reward: {},
          },
          success: {
            text: "Tu te projettes calmement dans chaque scénario possible. Le sommeil vient plus facilement que prévu.",
            reward: { coolness: 4, stats: { strategie: 1 } },
          },
          criticalSuccess: {
            text: "Ta préparation mentale est si complète que le combat, le lendemain, aura presque un air de déjà-vu.",
            reward: { coolness: 6, stats: { strategie: 2 } },
          },
        },
      },
    ],
  },
]

export const LIFE_MOMENT_CARDS: LifeMomentCard[] = [...EARLY_LIFE_MOMENTS]
