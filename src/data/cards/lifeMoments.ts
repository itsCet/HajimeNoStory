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
      {
        id: 'choice-esquiver',
        label: 'Couper court, une autre fois peut-être',
        statTested: 'strategie',
        difficulty: 40,
        outcomes: {
          criticalFailure: {
            text: "{{mentor}} referme la discussion d'un air déçu — le moment ne se représentera pas de sitôt.",
            reward: { entourageDelta: [{ role: 'Mentor', delta: -1 }] },
          },
          failure: {
            text: "{{mentor}} hausse les épaules et retourne à ses affaires, sans insister.",
            reward: {},
          },
          success: {
            text: "Tu expliques calmement que tu préfères y aller à ton rythme. {{mentor}} respecte la demande.",
            reward: { stats: { strategie: 2 }, coolness: 3 },
          },
          criticalSuccess: {
            text: "Ta franchise surprend {{mentor}}, qui promet de revenir avec la critique au moment que tu choisiras.",
            reward: { stats: { strategie: 3 }, coolness: 4, entourageDelta: [{ role: 'Mentor', delta: 1 }] },
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
      {
        id: 'choice-distraire',
        label: "Te changer les idées plutôt que d'y penser",
        statTested: 'strategie',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "La distraction ne prend jamais vraiment. Le doute revient, plus fort, juste avant de t'endormir.",
            reward: { fatigue: 6, coolness: -6 },
          },
          failure: {
            text: "Ça t'occupe l'esprit un moment, sans vraiment chasser le doute.",
            reward: {},
          },
          success: {
            text: "Tu détournes ton attention assez longtemps pour que le sommeil prenne le dessus sans forcer.",
            reward: { coolness: 4 },
          },
          criticalSuccess: {
            text: "Tu t'endors sans même t'en rendre compte, l'esprit ailleurs — la meilleure préparation possible, finalement.",
            reward: { coolness: 6, fatigue: -4 },
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
      {
        id: 'choice-rassurer-actes',
        label: 'Répondre par les actes plutôt que les mots',
        statTested: 'strategie',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "Le silence que tu opposes est pris pour de l'indifférence, et ça envenime la soirée.",
            reward: { coolness: -6 },
          },
          failure: {
            text: "Tu changes de sujet, et le malaise reste entier sous la surface.",
            reward: {},
          },
          success: {
            text: "Tu proposes calmement de montrer plutôt que d'expliquer — venir voir un entraînement, par exemple. L'idée passe mieux que prévu.",
            reward: { coolness: 3, loyalty: 4 },
          },
          criticalSuccess: {
            text: "L'idée fait mouche : la moitié de la table promet de venir te voir sur le ring, un jour prochain.",
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
      {
        id: 'choice-partager-article',
        label: "Partager l'article autour de toi",
        statTested: 'strategie',
        difficulty: 40,
        outcomes: {
          criticalFailure: {
            text: "Le partage tombe à plat, et te donne un air un peu prétentieux aux yeux de certains.",
            reward: { reputationInternal: -3 },
          },
          failure: {
            text: "Quelques réactions polies, sans grand écho.",
            reward: {},
          },
          success: {
            text: "L'article circule un peu, et ton nom commence discrètement à se faire une place dans le quartier.",
            reward: { reputationExternal: 3, reputationInternal: 2 },
          },
          criticalSuccess: {
            text: "L'article fait le tour de la salle et au-delà. Pour deux lignes, l'effet est disproportionné.",
            reward: { reputationExternal: 5, reputationInternal: 4 },
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
      {
        id: 'choice-deconnecter',
        label: "Ne pas y penser, et dormir tout court",
        statTested: 'mental',
        difficulty: 42,
        outcomes: {
          criticalFailure: {
            text: "Tu essaies de ne pas y penser, ce qui, bien sûr, ne fait qu'y penser davantage. Nuit blanche.",
            reward: { coolness: -6, fatigue: 4 },
          },
          failure: {
            text: "Tu t'endors tard, l'esprit encore un peu agité.",
            reward: {},
          },
          success: {
            text: "Tu coupes simplement le fil des pensées, sans chercher à tout anticiper. Le sommeil vient sans forcer.",
            reward: { coolness: 4, stats: { mental: 1 } },
          },
          criticalSuccess: {
            text: "Tu dors comme n'importe quelle autre nuit — la meilleure préparation qui soit, sans même y penser.",
            reward: { coolness: 6, stats: { mental: 2 } },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-ami-abandon',
    type: 'life-moment',
    title: 'Celui qui arrête',
    narrativeText:
      "Un partenaire d'entraînement, celui avec qui tu as fait tes tout premiers rounds, annonce qu'il arrête la boxe. Rien de dramatique dans sa voix — juste une décision, prise calmement, qui te laisse un peu déstabilisé.",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-soutenir-depart',
        label: 'Le soutenir sincèrement dans ce choix',
        statTested: 'mental',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tes mots sonnent creux, et il le sent.", reward: { coolness: -3 } },
          failure: { text: "Le moment reste un peu gênant pour vous deux.", reward: {} },
          success: { text: "Tu trouves les mots justes. Il repart léger, et toi aussi.", reward: { loyalty: 3, coolness: 2 } },
          criticalSuccess: { text: "Cette conversation-là restera, pour lui comme pour toi, un souvenir sincère de cette salle.", reward: { loyalty: 5, coolness: 3 } },
        },
      },
      {
        id: 'choice-questionner-propre-motivation',
        label: 'Te demander, un instant, ce qui vous différencie vraiment',
        statTested: 'strategie',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Le doute s'installe plus fort que prévu, sans réponse claire.", reward: { coolness: -4 } },
          failure: { text: "La question reste sans réponse nette, pour l'instant.", reward: {} },
          success: { text: "Tu identifies clairement ce qui te pousse encore, toi, à continuer. Ça clarifie tout.", reward: { stats: { strategie: 2 }, careerPoints: 4 } },
          criticalSuccess: { text: "Cette clarté nouvelle sur tes propres raisons te donne une motivation presque neuve.", reward: { stats: { strategie: 3 }, careerPoints: 7 } },
        },
      },
    ],
  },
  {
    id: 'card-life-premier-cachet',
    type: 'life-moment',
    title: 'Une première offre',
    narrativeText:
      "Un petit commerce du quartier propose de sponsoriser ton prochain combat amateur — un logo sur le short, quelques billets en échange. Modeste, mais c'est la première fois qu'on te propose quoi que ce soit.",
    requirement: { minRankOrder: 1, maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-accepter-modeste',
        label: 'Accepter, même si c\'est modeste',
        statTested: 'strategie',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "L'accord, mal négocié, te coûte plus de temps qu'il ne rapporte.", reward: { fatigue: 4 } },
          failure: { text: "L'arrangement reste sans grande conséquence.", reward: {} },
          success: { text: "Le petit sponsor est ravi, et le bouche-à-oreille commence, modestement, à jouer pour toi.", reward: { careerPoints: 4, reputationExternal: 2 } },
          criticalSuccess: { text: "Le commerçant, enthousiaste, parle de toi à tout le quartier. Une petite graine, plantée au bon moment.", reward: { careerPoints: 7, reputationExternal: 4 } },
        },
      },
      {
        id: 'choice-refuser-attendre',
        label: 'Refuser poliment, en visant plus grand plus tard',
        statTested: 'mental',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Le refus, mal formulé, vexe inutilement un commerçant bien intentionné.", reward: { reputationExternal: -2 } },
          failure: { text: "Le refus passe sans conséquence particulière.", reward: {} },
          success: { text: "Tu restes libre de tout engagement, sans regret particulier.", reward: { coolness: 3 } },
          criticalSuccess: { text: "Ta patience, à ce stade précoce, dénote une maturité que peu remarquent encore — sauf {{mentor}}.", reward: { coolness: 5, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
        },
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────
// MILIEU DE CARRIÈRE (paliers 4-8 : pro classe B → Champion OPBF)
// ─────────────────────────────────────────────────────────────────────────
const MID_LIFE_MOMENTS: LifeMomentCard[] = [
  {
    id: 'card-life-premiere-defaite-pro',
    type: 'life-moment',
    title: 'La première vraie défaite',
    narrativeText:
      "Le décompte de dix secondes résonne encore dans ta tête bien après être rentré au vestiaire. Ce n'est pas la douleur qui reste — c'est le silence, après.",
    requirement: { minRankOrder: 3, maxRankOrder: 6, onceOnly: true, weight: 2 },
    choices: [
      {
        id: 'choice-analyser-defaite',
        label: "Décortiquer froidement ce qui a manqué",
        statTested: 'strategie',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Tu tournes en rond sans jamais vraiment identifier ce qui a cloché.", reward: { coolness: -6 } },
          failure: { text: "Quelques pistes, sans certitude.", reward: {} },
          success: { text: "Tu identifies précisément ce qui t'a manqué ce soir-là. Une défaite qui devient, déjà, un outil.", reward: { stats: { strategie: 2 }, careerPoints: 3 } },
          criticalSuccess: { text: "L'analyse est si lucide que {{mentor}} te demande de la reformuler pour les plus jeunes de la salle.", reward: { stats: { strategie: 3 }, reputationInternal: 4, careerPoints: 4 } },
        },
      },
      {
        id: 'choice-encaisser-mentalement',
        label: "Simplement encaisser, sans trop réfléchir",
        statTested: 'mental',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Le doute s'installe plus profondément que tu ne l'aurais cru possible.", reward: { coolness: -8 } },
          failure: { text: "Tu encaisses tant bien que mal.", reward: { coolness: -2 } },
          success: { text: "Tu laisses la déception passer sans qu'elle ne s'incruste. Demain, il faudra de toute façon continuer.", reward: { coolness: 3 } },
          criticalSuccess: { text: "Tu ressors de cette défaite étrangement plus solide qu'avant, comme si elle avait confirmé que tu pouvais encaisser n'importe quoi.", reward: { coolness: 6, stats: { mental: 2 } } },
        },
      },
    ],
  },
  {
    id: 'card-life-argent-qui-rentre',
    type: 'life-moment',
    title: "Le premier vrai chèque",
    narrativeText:
      "La bourse de ton dernier combat dépasse largement tout ce que tu as pu gagner jusque-là. Pour la première fois, une vraie question se pose : qu'en faire ?",
    requirement: { minRankOrder: 4, maxRankOrder: 7, weight: 2 },
    choices: [
      {
        id: 'choice-investir',
        label: 'Investir dans ta préparation',
        statTested: 'strategie',
        difficulty: 45,
        outcomes: {
          criticalFailure: { text: "Le matériel acheté à la hâte se révèle être un mauvais choix.", reward: {} },
          failure: { text: "L'investissement reste correct, sans grand effet immédiat.", reward: {} },
          success: { text: "Un meilleur équipement, un suivi médical plus sérieux — l'investissement se voit vite.", reward: { stats: { endurance: 1 }, health: 3 } },
          criticalSuccess: { text: "Tu mets en place un vrai suivi professionnel. Ton corps t'en remerciera pendant des années.", reward: { stats: { endurance: 2 }, health: 5 } },
        },
      },
      {
        id: 'choice-famille-argent',
        label: 'Aider ta famille en priorité',
        statTested: 'mental',
        difficulty: 45,
        outcomes: {
          criticalFailure: { text: "Le geste, bien qu'apprécié, crée une tension inattendue sur la manière dont l'argent devrait être utilisé.", reward: { loyalty: -2 } },
          failure: { text: "Le geste passe sans grand commentaire.", reward: {} },
          success: { text: "Le soulagement dans les yeux de tes proches vaut largement plus que n'importe quel équipement.", reward: { loyalty: 6, coolness: 3 } },
          criticalSuccess: { text: "Ce geste change durablement la façon dont ta famille perçoit ce que tu fais sur ce ring.", reward: { loyalty: 10, coolness: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-media-attention',
    type: 'life-moment',
    title: 'Un micro tendu trop vite',
    narrativeText:
      "Un journaliste sportif national te coince à la sortie du vestiaire, caméra déjà allumée. Ce que tu vas dire dans les dix prochaines secondes sera cité toute la semaine.",
    requirement: { minRankOrder: 5, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-sobre',
        label: 'Rester sobre et factuel',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Une phrase mal formulée part de travers et sera découpée hors contexte toute la semaine.", reward: { reputationExternal: -4 } },
          failure: { text: "L'interview reste plate, sans grand écho.", reward: {} },
          success: { text: "Tu réponds avec calme et justesse. Le journaliste, presque déçu de ne rien avoir à sensationnaliser, hoche la tête.", reward: { reputationExternal: 4 } },
          criticalSuccess: { text: "Ta réponse, mesurée et forte à la fois, tourne en boucle toute la semaine — pour les bonnes raisons.", reward: { reputationExternal: 8, coolness: 2 } },
        },
      },
      {
        id: 'choice-charisme-media',
        label: 'Jouer le jeu du spectacle',
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "La punchline tombe complètement à plat, gênante plus qu'autre chose.", reward: { reputationExternal: -4 } },
          failure: { text: "La punchline fait sourire poliment, sans plus.", reward: {} },
          success: { text: "Ta punchline fait mouche. Les extraits circulent toute la journée.", reward: { reputationExternal: 5 } },
          criticalSuccess: { text: "Ta phrase devient virale en quelques heures. Ton nom dépasse largement le cercle habituel de la boxe.", reward: { reputationExternal: 9 } },
        },
      },
    ],
  },
  {
    id: 'card-life-rival-progresse',
    type: 'life-moment',
    title: 'Le miroir du rival',
    narrativeText:
      "{{rival}} vient d'enchaîner une nouvelle victoire remarquée. Vos chemins, partis du même endroit, ne cessent de se recroiser — chacun mesurant sa propre progression à celle de l'autre.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-feliciter',
        label: 'Le féliciter sincèrement',
        statTested: 'mental',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Le compliment sonne faux, et {{rival}} le sent immédiatement.", reward: { entourageDelta: [{ role: 'Rival', delta: -1 }] } },
          failure: { text: "Le message reste poli, sans grande chaleur.", reward: {} },
          success: { text: "{{rival}} apprécie visiblement le geste. La rivalité reste entière, mais le respect grandit avec elle.", reward: { entourageDelta: [{ role: 'Rival', delta: 1 }], coolness: 3 } },
          criticalSuccess: { text: "Un vrai moment de reconnaissance mutuelle s'installe entre vous, rare entre deux concurrents directs.", reward: { entourageDelta: [{ role: 'Rival', delta: 1 }], coolness: 5, loyalty: 3 } },
        },
      },
      {
        id: 'choice-comparer',
        label: "Transformer ça en motivation pure",
        statTested: 'strategie',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "La comparaison tourne à l'obsession malsaine, plus toxique qu'utile.", reward: { coolness: -6 } },
          failure: { text: "La motivation reste diffuse.", reward: {} },
          success: { text: "Sa progression devient un vrai repère pour calibrer la tienne.", reward: { stats: { strategie: 2 } } },
          criticalSuccess: { text: "Tu transformes cette rivalité en carburant pur. Ton prochain camp d'entraînement s'en ressent immédiatement.", reward: { stats: { strategie: 3 }, careerPoints: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-blessure-chronique',
    type: 'life-moment',
    title: 'Une douleur qui revient',
    narrativeText:
      "La même douleur à l'épaule revient combat après combat maintenant. Le médecin de la fédération commence à froncer les sourcils à chaque contrôle.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-traiter-serieusement',
        label: 'Suivre un vrai protocole de soin',
        statTested: 'strategie',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Le protocole s'avère plus contraignant que prévu, et te coûte un temps d'entraînement précieux.", reward: { fatigue: 6 } },
          failure: { text: "Le suivi aide un peu, sans grand miracle.", reward: { health: 2 } },
          success: { text: "La douleur régresse nettement grâce à un vrai encadrement médical.", reward: { health: 6 } },
          criticalSuccess: { text: "Le protocole fonctionne au-delà de tes espérances. L'épaule n'a jamais été aussi solide.", reward: { health: 10, stats: { endurance: 1 } } },
        },
      },
      {
        id: 'choice-ignorer-douleur',
        label: 'Serrer les dents et continuer comme avant',
        statTested: 'mental',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "La douleur finit par s'aggraver sérieusement, forçant un vrai temps d'arrêt.", reward: { health: -12 } },
          failure: { text: "Tu tiens, mais la gêne reste constante.", reward: { health: -4 } },
          success: { text: "Tu apprends à composer avec, sans jamais que ça affecte vraiment ta performance.", reward: { stats: { mental: 1 } } },
          criticalSuccess: { text: "Ta capacité à ignorer la douleur devient presque légendaire dans le vestiaire.", reward: { stats: { mental: 2 }, reputationInternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-tentation-abandon',
    type: 'life-moment',
    title: "L'envie de tout arrêter",
    narrativeText:
      "Un matin, en te levant pour l'entraînement, une pensée s'impose avec une clarté inhabituelle : et si tu arrêtais tout, là, maintenant ?",
    requirement: { minRankOrder: 4, maxRankOrder: 7, weight: 1 },
    choices: [
      {
        id: 'choice-persister',
        label: 'Aller quand même à la salle',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Tu y vas le corps présent, l'esprit ailleurs. La séance ne sert à rien.", reward: { coolness: -6 } },
          failure: { text: "Tu t'y traînes, sans grande conviction.", reward: {} },
          success: { text: "Le simple fait d'y retourner suffit à faire refluer le doute. Ce n'était qu'un mauvais matin.", reward: { coolness: 5 } },
          criticalSuccess: { text: "Cette séance devient, avec le recul, un des tournants silencieux de ta carrière — le jour où tu as failli arrêter, et où tu ne l'as pas fait.", reward: { coolness: 8, stats: { mental: 2 } } },
        },
      },
      {
        id: 'choice-pause-honnete',
        label: "T'accorder une vraie journée de pause, sans culpabiliser",
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "La pause tourne à la rumination. Tu passes la journée à te sentir coupable plutôt que reposé.", reward: { coolness: -6 } },
          failure: { text: "La journée passe, sans vraiment répondre à la question.", reward: {} },
          success: { text: "Tu t'accordes la pause sans arrière-pensée, et reviens le lendemain avec l'envie intacte.", reward: { coolness: 5, fatigue: -6 } },
          criticalSuccess: { text: "Cette pause assumée t'apprend à distinguer l'épuisement passager du vrai doute — une leçon qui te servira toute la carrière.", reward: { coolness: 8, stats: { strategie: 2 }, fatigue: -8 } },
        },
      },
    ],
  },
  {
    id: 'card-life-acte-heroique',
    type: 'life-moment',
    title: "Un cri, dans la rue",
    narrativeText:
      "En rentrant de la salle, tu tombes sur une agression en pleine rue — deux hommes s'en prennent à un passant sans que personne n'ose intervenir. Personne, sauf peut-être toi.",
    requirement: { minRankOrder: 3, maxRankOrder: 8, onceOnly: true, weight: 1 },
    choices: [
      {
        id: 'choice-intervenir',
        label: 'Intervenir directement',
        statTested: 'puissance',
        difficulty: 50,
        outcomes: {
          criticalFailure: {
            text: "Tu interviens, mais le nombre joue contre toi. Tu t'en sors marqué, et le passant s'enfuit pendant la confusion.",
            reward: { health: -10 },
          },
          failure: {
            text: "Ton intervention suffit à faire fuir les agresseurs, mais tu encaisses quelques coups au passage.",
            reward: { health: -5, reputationExternal: 2 },
          },
          success: {
            text: "Les agresseurs, pris de court, prennent la fuite sans demander leur reste. Le passant, tremblant, ne trouve pas vraiment les mots pour te remercier.",
            reward: { reputationExternal: 6, loyalty: 4, unlockTrophyIds: ['mark-statut-heroique'] },
          },
          criticalSuccess: {
            text: "Tu neutralises la situation avec un calme qui surprend jusqu'à toi-même. L'histoire circule dans le quartier dès le lendemain.",
            reward: { reputationExternal: 10, reputationInternal: 5, loyalty: 6, unlockTrophyIds: ['mark-statut-heroique'] },
          },
        },
      },
      {
        id: 'choice-appeler-aide',
        label: "Alerter les secours plutôt que t'exposer",
        statTested: 'strategie',
        difficulty: 46,
        outcomes: {
          criticalFailure: { text: "Le temps que les secours arrivent, la situation a déjà mal tourné.", reward: { coolness: -6 } },
          failure: { text: "Les secours arrivent, un peu tard, mais arrivent.", reward: {} },
          success: {
            text: "Ton sang-froid permet une intervention rapide et efficace, sans que tu aies eu à te mettre en danger inutilement.",
            reward: { coolness: 4, reputationExternal: 3, unlockTrophyIds: ['mark-statut-heroique'] },
          },
          criticalSuccess: {
            text: "Ta gestion de la situation, calme et précise du début à la fin, impressionne jusqu'aux secours eux-mêmes.",
            reward: { coolness: 6, reputationExternal: 6, unlockTrophyIds: ['mark-statut-heroique'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-life-fierte-familiale',
    type: 'life-moment',
    title: 'Un regard différent, à table',
    narrativeText:
      "Pour la première fois, c'est ta famille qui amène le sujet de la boxe sur la table — sans réticence, presque avec fierté.",
    requirement: { minRankOrder: 5, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-partager',
        label: "Partager vraiment ce que ça représente",
        statTested: 'mental',
        difficulty: 46,
        outcomes: {
          criticalFailure: { text: "Les mots ne sortent pas comme prévu, et le moment retombe maladroitement.", reward: {} },
          failure: { text: "Tu restes en surface, par pudeur.", reward: {} },
          success: { text: "Le moment est simple, sincère, et reste gravé longtemps après.", reward: { loyalty: 6, coolness: 3 } },
          criticalSuccess: { text: "Ce dîner devient un souvenir que toute la famille racontera encore des années plus tard.", reward: { loyalty: 10, coolness: 5 } },
        },
      },
      {
        id: 'choice-inviter',
        label: "Les inviter à venir voir un entraînement",
        statTested: 'strategie',
        difficulty: 46,
        outcomes: {
          criticalFailure: { text: "L'organisation tombe à l'eau au dernier moment, et personne ne vient finalement.", reward: {} },
          failure: { text: "L'invitation reste vague, sans suite concrète.", reward: {} },
          success: { text: "Tu organises la visite sans encombre. Les voir dans les gradins de la salle change quelque chose.", reward: { loyalty: 6, coolness: 3 } },
          criticalSuccess: { text: "Toute la famille se déplace, et repart visiblement fière de ce qu'elle a vu.", reward: { loyalty: 10, coolness: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-sponsor',
    type: 'life-moment',
    title: 'Une offre avec des conditions',
    narrativeText:
      "Une marque d'équipement sportif propose un contrat de sponsoring conséquent — à condition d'adapter ton image, tes déclarations publiques, et une partie de ton emploi du temps à leurs exigences.",
    requirement: { minRankOrder: 5, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-accepter-sponsor',
        label: 'Accepter le contrat',
        statTested: 'strategie',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Les contraintes du contrat pèsent bien plus lourd que prévu sur ton temps d'entraînement.", reward: { fatigue: 8 } },
          failure: { text: "Le contrat apporte un revenu correct, sans grand bouleversement.", reward: { reputationExternal: 2 } },
          success: { text: "Le contrat t'apporte une vraie stabilité financière sans trop empiéter sur l'essentiel.", reward: { reputationExternal: 5 } },
          criticalSuccess: { text: "Le partenariat dépasse largement les attentes des deux côtés. Ton visage commence à être reconnu bien au-delà des salles de boxe.", reward: { reputationExternal: 9 } },
        },
      },
      {
        id: 'choice-refuser-sponsor',
        label: 'Refuser pour garder le contrôle',
        statTested: 'mental',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Le refus se répand dans le milieu comme un signe de mauvaise volonté commerciale.", reward: { reputationExternal: -3 } },
          failure: { text: "Le refus passe sans grande conséquence.", reward: {} },
          success: { text: "Tu gardes une liberté totale sur ton image et ton emploi du temps. Certains respectent le choix.", reward: { coolness: 4 } },
          criticalSuccess: { text: "Ton indépendance affichée te vaut un respect inattendu, y compris de la part de sponsors potentiels futurs.", reward: { coolness: 6, reputationInternal: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-life-negociation-contrat',
    type: 'life-moment',
    title: 'La ligne en bas du contrat',
    narrativeText:
      "Ton promoteur pose un nouveau contrat sur la table — de meilleures bourses, mais aussi une clause d'exclusivité pour deux ans que {{mentor}} te conseille de lire deux fois avant de signer quoi que ce soit.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-negocier-dur',
        label: 'Négocier ferme, quitte à faire traîner',
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Le promoteur se braque, et l'offre initiale disparaît purement et simplement.", reward: { reputationExternal: -4 } },
          failure: { text: "La négociation traîne sans grande avancée.", reward: { fatigue: 4 } },
          success: { text: "Tu obtiens des termes nettement meilleurs que l'offre de départ.", reward: { careerPoints: 6, reputationInternal: 3 } },
          criticalSuccess: { text: "Le promoteur, presque admiratif de ton aplomb, cède sur presque tous les points. {{mentor}} n'aurait pas fait mieux.", reward: { careerPoints: 10, reputationInternal: 5, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
        },
      },
      {
        id: 'choice-faire-confiance-mentor',
        label: 'Laisser {{mentor}} superviser toute la négociation',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Tu t'en désintéresses trop, et des détails t'échappent que tu regretteras plus tard.", reward: { coolness: -4 } },
          failure: { text: "L'accord se signe sans éclat particulier.", reward: {} },
          success: { text: "{{mentor}} négocie avec une expérience que tu n'as pas encore. Le contrat est solide.", reward: { careerPoints: 5, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
          criticalSuccess: { text: "{{mentor}} arrache des conditions que tu n'aurais jamais imaginé demander toi-même. Sa confiance en toi transparaît dans chaque clause.", reward: { careerPoints: 8, loyalty: 3, entourageDelta: [{ role: 'Mentor', delta: 2 }] } },
        },
      },
    ],
  },
  {
    id: 'card-life-double-vie',
    type: 'life-moment',
    title: 'Deux vies à la fois',
    narrativeText:
      "Entre les séances, les combats qui s'enchaînent et tout ce qui, en dehors de la salle, continue de réclamer ton attention, les journées commencent sérieusement à manquer d'heures.",
    requirement: { minRankOrder: 4, maxRankOrder: 7, weight: 2 },
    choices: [
      {
        id: 'choice-tout-sacrifier',
        label: 'Tout réorganiser autour de la boxe',
        statTested: 'endurance',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Le rythme imposé finit par te briser, physiquement et moralement.", reward: { fatigue: 12, health: -5 } },
          failure: { text: "Tu tiens, essoufflé, sans grande marge.", reward: { fatigue: 8 } },
          success: { text: "Tu trouves un rythme intense mais tenable. Tout, pour l'instant, converge vers un seul objectif.", reward: { stats: { endurance: 2 }, careerPoints: 5 } },
          criticalSuccess: { text: "Cette discipline totale, rare à ce stade, impressionne jusqu'à {{mentor}}.", reward: { stats: { endurance: 3 }, careerPoints: 8, reputationInternal: 3 } },
        },
      },
      {
        id: 'choice-equilibre',
        label: 'Chercher un vrai équilibre plutôt que tout sacrifier',
        statTested: 'mental',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "L'équilibre recherché échappe complètement, et les deux côtés en pâtissent.", reward: { fatigue: 8, coolness: -4 } },
          failure: { text: "L'équilibre reste précaire, jour après jour.", reward: { fatigue: 5 } },
          success: { text: "Tu trouves un rythme plus soutenable qui préserve l'essentiel des deux côtés de ta vie.", reward: { coolness: 4, stats: { mental: 2 } } },
          criticalSuccess: { text: "Cet équilibre trouvé devient une vraie force — tu abordes chaque séance plus serein que jamais.", reward: { coolness: 7, stats: { mental: 3 }, loyalty: 2 } },
        },
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────
// FIN DE CARRIÈRE (paliers 9-13 : éliminatoire mondial → légende)
// ─────────────────────────────────────────────────────────────────────────
const LATE_LIFE_MOMENTS: LifeMomentCard[] = [
  {
    id: 'card-life-corps-qui-parle',
    type: 'life-moment',
    title: 'Ce que le corps commence à dire',
    narrativeText:
      "Les courbatures du lendemain durent un jour de plus qu'avant. Rien de grave, rien d'alarmant — juste un murmure, régulier désormais, que ton corps n'émettait pas il y a quelques années.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-adapter-entrainement',
        label: "Adapter ta préparation plutôt que la nier",
        statTested: 'strategie',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Les ajustements tâtonnés perturbent plus qu'ils n'aident ta préparation.", reward: { fatigue: 8 } },
          failure: { text: "Les ajustements restent superficiels.", reward: {} },
          success: { text: "Tu ajustes intelligemment ta charge d'entraînement. Le corps répond mieux qu'attendu.", reward: { health: 4, stats: { strategie: 1 } } },
          criticalSuccess: { text: "Cette nouvelle approche, plus fine, plus à l'écoute, prolonge sans doute ta carrière de plusieurs années.", reward: { health: 7, stats: { strategie: 2 } } },
        },
      },
      {
        id: 'choice-ignorer-corps',
        label: "Continuer exactement comme avant",
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Le corps finit par se rappeler à toi plus durement que prévu.", reward: { health: -10 } },
          failure: { text: "Tu tiens, pour l'instant.", reward: { fatigue: 6 } },
          success: { text: "Ta détermination suffit, pour cette fois, à faire taire le murmure.", reward: { coolness: 3 } },
          criticalSuccess: { text: "Ta volonté semble, pour l'instant du moins, plus forte que le temps qui passe.", reward: { coolness: 5, stats: { mental: 1 } } },
        },
      },
    ],
  },
  {
    id: 'card-life-question-heritage',
    type: 'life-moment',
    title: "Ce que tu laisseras derrière",
    narrativeText:
      "Un jeune boxeur de la salle, à peine plus âgé que tu ne l'étais à tes débuts, te demande un conseil avant son premier combat amateur. La question, anodine, en soulève une autre, plus large : qu'est-ce que tu es en train de transmettre, exactement ?",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-transmettre',
        label: 'Prendre vraiment le temps de lui répondre',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Les mots sortent maladroitement, plus embarrassants qu'utiles.", reward: {} },
          failure: { text: "Le conseil reste générique.", reward: {} },
          success: { text: "Tu lui offres exactement ce dont il avait besoin d'entendre. Il repart différent.", reward: { reputationInternal: 5, loyalty: 3 } },
          criticalSuccess: { text: "Ce moment simple deviendra, tu le sens, un souvenir fondateur pour ce jeune boxeur — comme d'autres l'ont été pour toi.", reward: { reputationInternal: 8, loyalty: 5 } },
        },
      },
      {
        id: 'choice-renvoyer-mentor',
        label: "L'envoyer vers ton propre mentor plutôt que répondre toi-même",
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Le jeune boxeur se sent un peu rejeté par ce renvoi, et n'ose plus revenir te voir.", reward: { reputationInternal: -3 } },
          failure: { text: "Le conseil de te tourner vers {{mentor}} tombe un peu à plat.", reward: {} },
          success: { text: "Tu reconnais que certaines réponses valent mieux venant de {{mentor}}. Le jeune boxeur apprécie l'honnêteté.", reward: { reputationInternal: 5, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
          criticalSuccess: { text: "Tu organises même la rencontre toi-même. {{mentor}} salue ton geste, et le jeune boxeur n'oubliera ni l'un ni l'autre.", reward: { reputationInternal: 8, entourageDelta: [{ role: 'Mentor', delta: 1 }], loyalty: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-poids-ceinture',
    type: 'life-moment',
    title: 'Le poids de la ceinture',
    narrativeText:
      "Chaque victoire, désormais, est jugée à l'aune de la précédente. Un round un peu terne, et les commentateurs parlent déjà de déclin. La pression ne vient plus d'un adversaire — elle vient de partout à la fois.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-ignorer-critiques',
        label: 'Rester concentré sur ta propre trajectoire',
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Les critiques finissent par s'infiltrer plus profondément que tu ne l'aurais voulu.", reward: { coolness: -6 } },
          failure: { text: "Tu tiens, mais le bruit ambiant continue de te distraire un peu.", reward: {} },
          success: { text: "Tu laisses le bruit extérieur glisser, concentré sur ce que toi seul sais avoir accompli.", reward: { coolness: 5, stats: { mental: 2 } } },
          criticalSuccess: { text: "Plus rien de ce qui se dit à l'extérieur ne semble pouvoir t'atteindre. Une sérénité que peu de champions atteignent.", reward: { coolness: 8, stats: { mental: 3 }, reputationInternal: 4 } },
        },
      },
      {
        id: 'choice-repondre-publiquement',
        label: 'Répondre publiquement, sur ton propre terrain',
        statTested: 'strategie',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "La réponse tombe mal et alimente encore plus la controverse.", reward: { reputationExternal: -4 } },
          failure: { text: "La sortie médiatique passe presque inaperçue.", reward: {} },
          success: { text: "Tu recadres le débat avec des mots choisis, sans jamais paraître sur la défensive.", reward: { reputationExternal: 5, careerPoints: 4 } },
          criticalSuccess: { text: "Ta réponse devient elle-même citée pendant des semaines. Le récit t'appartient de nouveau.", reward: { reputationExternal: 8, careerPoints: 6, reputationInternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-successeur-impatient',
    type: 'life-moment',
    title: 'Le successeur impatient',
    narrativeText:
      "Un jeune boxeur monté en flèche multiplie les déclarations : ton règne touche à sa fin, et il sera celui qui l'aura constaté le premier. Aucun combat n'est encore signé — pour l'instant, tout se joue dans les micros.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-snober',
        label: 'Le snober complètement, laisser le ring parler plus tard',
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Ton silence est interprété comme un aveu de faiblesse par la presse.", reward: { reputationExternal: -4 } },
          failure: { text: "Le silence passe, sans plus.", reward: {} },
          success: { text: "Ton indifférence tranquille en dit plus long que n'importe quelle réponse.", reward: { coolness: 5, reputationInternal: 4 } },
          criticalSuccess: { text: "Ton calme absolu déstabilise visiblement le jeune prétendant, qui finit par en faire trop dans les médias.", reward: { coolness: 8, reputationInternal: 6 } },
        },
      },
      {
        id: 'choice-rencontre-privee',
        label: 'Le croiser en salle, sans un mot, juste pour qu\'il comprenne',
        statTested: 'puissance',
        difficulty: 57,
        outcomes: {
          criticalFailure: { text: "La démonstration se retourne contre toi — le sparring tourne mal et alimente encore les rumeurs.", reward: { health: -6, coolness: -4 } },
          failure: { text: "L'échange reste correct, sans message clair transmis.", reward: { fatigue: 5 } },
          success: { text: "Quelques échanges suffisent. Le jeune prétendant repart nettement plus silencieux qu'il n'est arrivé.", reward: { careerPoints: 5, reputationInternal: 5 } },
          criticalSuccess: { text: "La salle entière retient son souffle en te regardant faire. Le message, cette fois, est on ne peut plus clair.", reward: { careerPoints: 8, reputationInternal: 8, reputationExternal: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-life-dette-ancienne',
    type: 'life-moment',
    title: 'Une vieille dette',
    narrativeText:
      "{{rival}} refait surface, des années après vos derniers échanges — reconverti, plus posé qu'avant, cherchant visiblement à solder quelque chose qui n'a jamais vraiment été dit entre vous.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-renouer',
        label: 'Renouer sincèrement le contact',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "La conversation ravive plus de vieilles blessures qu'elle n'en referme.", reward: { coolness: -5 } },
          failure: { text: "L'échange reste poli, sans grande sincérité de part et d'autre.", reward: {} },
          success: { text: "Vous trouvez, enfin, les mots qui manquaient depuis toutes ces années.", reward: { loyalty: 4, entourageDelta: [{ role: 'Rival', delta: 2 }] } },
          criticalSuccess: { text: "Ce que vous étiez l'un pour l'autre prend, ce jour-là, un tout autre sens — plus proche du respect que de la rivalité.", reward: { loyalty: 6, entourageDelta: [{ role: 'Rival', delta: 3 }], reputationInternal: 4 } },
        },
      },
      {
        id: 'choice-distance-pro',
        label: 'Garder tes distances, cordial mais réservé',
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "La froideur affichée blesse plus que prévu, et se sait dans le milieu.", reward: { reputationInternal: -4 } },
          failure: { text: "L'échange reste bref, sans conséquence particulière.", reward: {} },
          success: { text: "Tu restes courtois sans t'ouvrir davantage. La rencontre se termine proprement.", reward: { coolness: 4 } },
          criticalSuccess: { text: "Ta retenue, mesurée, force presque le respect de {{rival}} — qui repart sans rancune visible.", reward: { coolness: 6, reputationInternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-fortune-nouvelle',
    type: 'life-moment',
    title: "Ce que l'argent a changé",
    narrativeText:
      "Les bourses des combats de championnat ont changé quelque chose dans ton quotidien — et dans le regard des gens autour de toi. Des propositions d'investissement affluent, certaines sérieuses, d'autres beaucoup moins.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-investir-serieux',
        label: 'Prendre le temps d\'évaluer sérieusement chaque proposition',
        statTested: 'strategie',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "L'analyse traîne en longueur et une opportunité sérieuse t'échappe.", reward: { fatigue: 4 } },
          failure: { text: "Rien de concret n'en ressort pour l'instant.", reward: {} },
          success: { text: "Un placement solide se dessine, géré avec la même rigueur que ta préparation physique.", reward: { careerPoints: 4, stats: { strategie: 2 } } },
          criticalSuccess: { text: "L'investissement dépasse largement les attentes — de quoi assurer ton avenir bien au-delà du ring.", reward: { careerPoints: 7, stats: { strategie: 3 }, reputationExternal: 3 } },
        },
      },
      {
        id: 'choice-profiter',
        label: 'Profiter, pour une fois, sans trop réfléchir',
        statTested: 'mental',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "L'excès pèse plus lourd que prévu sur ta discipline des semaines suivantes.", reward: { fatigue: 10, health: -4 } },
          failure: { text: "Le relâchement reste sans grande conséquence.", reward: { fatigue: 4 } },
          success: { text: "Tu t'accordes un vrai moment de répit, sans culpabilité — et il te fait du bien.", reward: { coolness: 5, loyalty: 2 } },
          criticalSuccess: { text: "Ce moment partagé avec tes proches restera, longtemps après, l'un de tes meilleurs souvenirs hors du ring.", reward: { coolness: 8, loyalty: 4, reputationInternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-record-en-vue',
    type: 'life-moment',
    title: 'Un chiffre qui se rapproche',
    narrativeText:
      "Un journaliste sportif calcule, dans un article partagé plus que les autres, qu'il ne te manque plus que quelques victoires pour approcher un record de la catégorie que l'on croyait intouchable.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-viser-record',
        label: 'Te fixer ouvertement cet objectif',
        statTested: 'mental',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Le chiffre devient une obsession qui pèse plus qu'il ne motive.", reward: { coolness: -6 } },
          failure: { text: "L'objectif reste flou, ni vraiment assumé ni écarté.", reward: {} },
          success: { text: "Tu transformes ce chiffre en moteur clair, sans qu'il ne devienne une pression étouffante.", reward: { stats: { mental: 2 }, careerPoints: 5 } },
          criticalSuccess: { text: "Cet objectif affiché publiquement galvanise toute ta salle autour de toi.", reward: { stats: { mental: 3 }, careerPoints: 8, reputationInternal: 4 } },
        },
      },
      {
        id: 'choice-relativiser-record',
        label: 'Refuser d\'y penser, un combat à la fois',
        statTested: 'strategie',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Ton indifférence affichée agace une partie des observateurs qui y voient un désintérêt.", reward: { reputationExternal: -3 } },
          failure: { text: "Le sujet retombe sans grande conséquence.", reward: {} },
          success: { text: "Ta capacité à ignorer les chiffres et rester concentré sur l'essentiel force le respect.", reward: { coolness: 4, reputationInternal: 3 } },
          criticalSuccess: { text: "Cette sérénité affichée face à l'Histoire qui s'écrit devient, elle-même, un sujet d'admiration.", reward: { coolness: 7, reputationInternal: 6 } },
        },
      },
    ],
  },
  {
    id: 'card-life-famille-eloignee',
    type: 'life-moment',
    title: 'Ceux qui attendent à la maison',
    narrativeText:
      "Un appel manqué, puis un second. Les camps d'entraînement à répétition et les déplacements pour les défenses de titre ont, sans que tu ne le décides vraiment, éloigné une partie de ceux qui comptent le plus.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-faire-le-trajet',
        label: 'Faire le trajet, quel qu\'en soit le coût sur ta préparation',
        statTested: 'endurance',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Le voyage, épuisant, entame sérieusement ta préparation pour rien.", reward: { fatigue: 12, health: -4 } },
          failure: { text: "Le trajet te coûte plus d'énergie qu'il n'apporte de réconfort.", reward: { fatigue: 8 } },
          success: { text: "Le temps passé ensemble, même bref, répare quelque chose d'important.", reward: { loyalty: 4, coolness: 3 } },
          criticalSuccess: { text: "Ce geste, malgré le calendrier chargé, marque durablement ceux qui l'ont reçu.", reward: { loyalty: 7, coolness: 5, reputationInternal: 3 } },
        },
      },
      {
        id: 'choice-appel-honnete',
        label: 'Prendre le temps d\'un vrai appel, honnête sur tes limites',
        statTested: 'mental',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "L'honnêteté, mal reçue sur le moment, crée plus de distance encore.", reward: { coolness: -5 } },
          failure: { text: "L'appel reste correct, sans vraiment combler le manque.", reward: {} },
          success: { text: "Ta sincérité sur les sacrifices que tout ça demande est, finalement, bien reçue.", reward: { loyalty: 3, coolness: 3 } },
          criticalSuccess: { text: "Cette conversation honnête change durablement la façon dont vous vivez, ensemble, cette carrière.", reward: { loyalty: 6, coolness: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-tentation-retraite-doree',
    type: 'life-moment',
    title: 'Partir au sommet',
    narrativeText:
      "Tout ce que tu pouvais raisonnablement viser est, plus ou moins, déjà accompli. Une petite voix, de plus en plus difficile à ignorer, se demande s'il ne vaudrait pas mieux partir maintenant, invaincu dans les mémoires, plutôt que de risquer d'user la légende.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-repousser-tentation',
        label: 'Repousser cette pensée, il reste des combats à mener',
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Le doute revient plus fort dès la séance suivante, difficile à vraiment chasser.", reward: { coolness: -6 } },
          failure: { text: "La pensée s'éloigne, provisoirement.", reward: {} },
          success: { text: "Tu retrouves une clarté simple : tant qu'il reste envie et santé, la question ne se pose pas encore.", reward: { coolness: 5, stats: { mental: 2 } } },
          criticalSuccess: { text: "Cette envie intacte, à ce stade de carrière, est peut-être ta plus grande force restante.", reward: { coolness: 8, stats: { mental: 3 }, reputationInternal: 3 } },
        },
      },
      {
        id: 'choice-accepter-doute',
        label: 'Accepter honnêtement d\'y réfléchir vraiment',
        statTested: 'strategie',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "La réflexion tourne en rond, sans rien clarifier, et te laisse simplement plus fatigué.", reward: { fatigue: 6 } },
          failure: { text: "La question reste ouverte, sans réponse pour l'instant.", reward: {} },
          success: { text: "Tu poses, honnêtement, les critères qui détermineront le bon moment — sans précipitation ni déni.", reward: { stats: { strategie: 2 }, coolness: 3 } },
          criticalSuccess: { text: "Cette lucidité rare sur ta propre trajectoire impressionne jusqu'à {{mentor}}, qui n'a pas souvent vu ça.", reward: { stats: { strategie: 3 }, coolness: 5, entourageDelta: [{ role: 'Mentor', delta: 2 }] } },
        },
      },
    ],
  },
]

export const LIFE_MOMENT_CARDS: LifeMomentCard[] = [...EARLY_LIFE_MOMENTS, ...MID_LIFE_MOMENTS, ...LATE_LIFE_MOMENTS]
