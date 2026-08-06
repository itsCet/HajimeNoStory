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
  {
    id: 'card-life-etudes-negligees',
    type: 'life-moment',
    title: 'Le cahier resté fermé',
    narrativeText:
      "Les cours passent au second plan depuis des mois. Un professeur te retient à la fin de l'heure, sans reproche dans la voix, juste une question simple : et si la boxe ne marche pas, il reste quoi ?",
    requirement: { maxRankOrder: 2, weight: 2 },
    choices: [
      {
        id: 'choice-assumer-choix',
        label: 'Assumer que tu as fait ton choix',
        statTested: 'mental',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Tu réponds trop vite, trop fort. La question continue de te travailler bien après.", reward: { coolness: -5 } },
          failure: { text: "Tu bafouilles une réponse convenue. Elle ne convainc personne, toi le premier.", reward: {} },
          success: { text: "Tu expliques ton choix calmement, sans agressivité. Le professeur hoche la tête et te laisse partir.", reward: { coolness: 4, stats: { mental: 1 } } },
          criticalSuccess: { text: "Ta clarté impressionne. Il te souhaite bonne chance, sincèrement — et tu repars plus solide qu'en entrant.", reward: { coolness: 7, stats: { mental: 2 } } },
        },
      },
      {
        id: 'choice-rattraper',
        label: 'Accepter de rattraper le retard en parallèle',
        statTested: 'strategie',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Vouloir tout mener de front t'épuise, et ni les cours ni la salle n'y gagnent.", reward: { fatigue: 8 } },
          failure: { text: "Tu promets de t'y remettre. Tu sais déjà que ce sera compliqué.", reward: { fatigue: 4 } },
          success: { text: "Tu trouves un rythme qui tient. Avoir un filet de sécurité allège plus l'esprit que prévu.", reward: { stats: { strategie: 2 }, coolness: 3 } },
          criticalSuccess: { text: "Tu remontes la pente sans rien lâcher à la salle. Cette discipline-là te servira bien au-delà des cours.", reward: { stats: { strategie: 3 }, coolness: 5, careerPoints: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-decouverte-poids',
    type: 'life-moment',
    title: 'Le chiffre sur la balance',
    narrativeText:
      "{{mentor}} te met sur la balance sans prévenir, note le chiffre, et t'annonce la catégorie dans laquelle tu vas boxer. Entre ce que tu pèses et ce que tu devras peser, il y a un écart que personne n'avait mentionné.",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-regime-strict',
        label: 'Suivre le protocole à la lettre',
        statTested: 'mental',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tu coupes trop, trop vite. Les séances suivantes s'en ressentent lourdement.", reward: { health: -6, fatigue: 8 } },
          failure: { text: "Tu tiens quelques jours, puis tu craques. Le poids ne bouge presque pas.", reward: { fatigue: 4 } },
          success: { text: "Tu atteins la catégorie proprement, sans t'affaiblir. {{mentor}} valide d'un mot.", reward: { stats: { mental: 2 }, careerPoints: 4 } },
          criticalSuccess: { text: "Tu arrives au poids en gardant toute ta force. Peu de débutants y parviennent du premier coup.", reward: { stats: { mental: 3 }, careerPoints: 7, health: 3 } },
        },
      },
      {
        id: 'choice-comprendre-corps',
        label: "Chercher à comprendre comment ton corps fonctionne",
        statTested: 'strategie',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tu accumules des conseils contradictoires et finis plus perdu qu'au départ.", reward: { coolness: -4 } },
          failure: { text: "Quelques principes de base retenus, rien de très précis.", reward: {} },
          success: { text: "Tu apprends à lire ton propre corps plutôt qu'à subir un protocole. Ça change tout pour la suite.", reward: { stats: { strategie: 2 }, health: 3 } },
          criticalSuccess: { text: "Tu construis une méthode qui t'est propre. {{mentor}} finit par la recommander à d'autres.", reward: { stats: { strategie: 3 }, health: 5, reputationInternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-peur-de-frapper',
    type: 'life-moment',
    title: 'La retenue de trop',
    narrativeText:
      "Au sparring, tu retiens tes coups. Pas par stratégie — parce qu'une part de toi ne veut pas vraiment faire mal à quelqu'un. {{mentor}} le voit, arrête la séance, et te regarde sans rien dire.",
    requirement: { maxRankOrder: 2, weight: 2 },
    choices: [
      {
        id: 'choice-depasser-retenue',
        label: 'Accepter que ce sport demande ça',
        statTested: 'mental',
        difficulty: 40,
        outcomes: {
          criticalFailure: { text: "Tu forces, et le geste devient brouillon, presque violent. Ce n'est pas ça non plus.", reward: { coolness: -6 } },
          failure: { text: "Tu frappes un peu plus fort, sans conviction réelle.", reward: {} },
          success: { text: "Tu comprends la différence entre faire mal et être efficace. Le geste se libère.", reward: { stats: { mental: 2 }, careerPoints: 4 } },
          criticalSuccess: { text: "Quelque chose se débloque définitivement ce jour-là. {{mentor}} note le changement immédiatement.", reward: { stats: { mental: 3 }, careerPoints: 7, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
        },
      },
      {
        id: 'choice-canaliser-technique',
        label: 'Transformer la retenue en précision',
        statTested: 'technique',
        difficulty: 40,
        outcomes: {
          criticalFailure: { text: "À force de chercher la finesse, tu ne places plus rien du tout.", reward: { coolness: -5 } },
          failure: { text: "Le geste reste propre mais sans impact.", reward: {} },
          success: { text: "Tu décides de toucher juste plutôt que fort. Une identité de boxeur commence à se dessiner.", reward: { stats: { technique: 2 }, careerPoints: 4 } },
          criticalSuccess: { text: "Cette précision née d'une hésitation devient, ce jour-là, ta vraie signature.", reward: { stats: { technique: 3 }, careerPoints: 7, coolness: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-ancien-de-la-salle',
    type: 'life-moment',
    title: 'Celui qui traîne encore là',
    narrativeText:
      "Un ancien vient encore à la salle, sans plus s'entraîner vraiment. Il parle beaucoup, raconte des combats d'il y a vingt ans, et la plupart des jeunes l'évitent poliment. Ce soir, il s'assoit à côté de toi.",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-ecouter-ancien',
        label: "Prendre le temps de l'écouter vraiment",
        statTested: 'mental',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Tu perds ta séance à écouter des histoires qui tournent en rond.", reward: { fatigue: 4 } },
          failure: { text: "Il parle longtemps. Tu retiens surtout qu'il aurait aimé faire les choses autrement.", reward: {} },
          success: { text: "Derrière les anecdotes, il glisse un conseil que personne d'autre ne t'avait donné.", reward: { stats: { strategie: 2 }, loyalty: 2 } },
          criticalSuccess: { text: "Il te confie une erreur qu'il a mis vingt ans à comprendre. Ce raccourci-là vaut de l'or.", reward: { stats: { strategie: 3 }, careerPoints: 5, loyalty: 3 } },
        },
      },
      {
        id: 'choice-observer-avertissement',
        label: 'Y voir un avertissement pour toi-même',
        statTested: 'strategie',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "L'image de ce que tu pourrais devenir te hante plus que nécessaire.", reward: { coolness: -5 } },
          failure: { text: "Tu ranges la pensée dans un coin, sans y donner suite.", reward: {} },
          success: { text: "Tu comprends qu'une carrière se prépare aussi par sa fin. C'est tôt pour y penser, mais c'est utile.", reward: { stats: { strategie: 2 }, coolness: 3 } },
          criticalSuccess: { text: "Cette lucidité précoce sur ce qu'il ne faut pas devenir orientera beaucoup de tes choix futurs.", reward: { stats: { strategie: 3 }, coolness: 5, careerPoints: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-life-jalousie-club',
    type: 'life-moment',
    title: 'Les regards dans le vestiaire',
    narrativeText:
      "Depuis que {{mentor}} passe plus de temps sur toi que sur les autres, l'ambiance du vestiaire a changé. Personne ne dit rien, mais les conversations s'arrêtent parfois quand tu entres.",
    requirement: { minRankOrder: 1, maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-crever-abces',
        label: 'Aborder le sujet franchement',
        statTested: 'mental',
        difficulty: 40,
        outcomes: {
          criticalFailure: { text: "La discussion tourne mal et officialise une tension qui restait supportable.", reward: { reputationInternal: -5, coolness: -4 } },
          failure: { text: "Chacun nie le problème. Rien ne change vraiment.", reward: {} },
          success: { text: "Poser les choses à voix haute désamorce l'essentiel. Le vestiaire respire mieux.", reward: { reputationInternal: 4, loyalty: 3 } },
          criticalSuccess: { text: "Ton honnêteté retourne complètement la situation : plusieurs deviennent de vrais soutiens.", reward: { reputationInternal: 7, loyalty: 5, coolness: 3 } },
        },
      },
      {
        id: 'choice-repondre-travail',
        label: 'Répondre par le travail, pas par les mots',
        statTested: 'endurance',
        difficulty: 40,
        outcomes: {
          criticalFailure: { text: "Tu en fais trop pour prouver quelque chose, et le corps proteste.", reward: { fatigue: 10, health: -4 } },
          failure: { text: "Tu travailles dur. Les regards, eux, ne changent pas.", reward: { fatigue: 6 } },
          success: { text: "À force de voir ce que tu donnes réellement, les non-dits s'effacent d'eux-mêmes.", reward: { stats: { endurance: 2 }, reputationInternal: 4 } },
          criticalSuccess: { text: "Ton exemple finit par tirer toute la salle vers le haut. Personne ne conteste plus rien.", reward: { stats: { endurance: 3 }, reputationInternal: 7, careerPoints: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-life-trajet-quotidien',
    type: 'life-moment',
    title: 'Une heure de trajet, deux fois par jour',
    narrativeText:
      "La salle est loin. Entre les transports, l'entraînement et le reste, les journées n'ont plus beaucoup d'espace libre. Ce soir encore, tu rentres bien après la nuit tombée.",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-utiliser-trajet',
        label: 'Transformer le trajet en temps utile',
        statTested: 'strategie',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Tu t'endors dans le train et rates ton arrêt. La soirée est perdue.", reward: { fatigue: 6 } },
          failure: { text: "Le trajet reste du temps mort, malgré tes bonnes intentions.", reward: { fatigue: 3 } },
          success: { text: "Vidéos de combats, récupération, sommeil : le trajet devient une partie de la préparation.", reward: { stats: { strategie: 2 }, careerPoints: 3 } },
          criticalSuccess: { text: "Tu tires tellement de ces heures perdues qu'elles deviennent un avantage sur les autres.", reward: { stats: { strategie: 3 }, careerPoints: 6, health: 2 } },
        },
      },
      {
        id: 'choice-encaisser-fatigue',
        label: 'Encaisser, simplement, parce que ça vaut le coup',
        statTested: 'endurance',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Le rythme finit par te rattraper. Tu arrives cassé à la séance suivante.", reward: { fatigue: 10, health: -4 } },
          failure: { text: "Tu tiens, en accumulant une fatigue sourde.", reward: { fatigue: 6 } },
          success: { text: "Ton corps s'habitue. Ce qui semblait insurmontable devient simplement ton quotidien.", reward: { stats: { endurance: 2 } } },
          criticalSuccess: { text: "Cette routine épuisante forge une résistance que les autres n'ont pas eu à développer.", reward: { stats: { endurance: 3 }, careerPoints: 5, coolness: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-combat-a-la-tele',
    type: 'life-moment',
    title: 'Un championnat, à la télévision',
    narrativeText:
      "Un titre mondial retransmis en direct, tard le soir. Tu regardes ça assis par terre, trop près de l'écran, en essayant de comprendre ce qui sépare vraiment ces deux-là de ce que tu fais chaque jour.",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-analyser-combat',
        label: 'Décortiquer chaque round comme un exercice',
        statTested: 'strategie',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "Tout va trop vite. Tu ne comprends presque rien à ce que tu regardes, et ça décourage.", reward: { coolness: -5 } },
          failure: { text: "Tu repères deux ou trois détails, sans vue d'ensemble.", reward: {} },
          success: { text: "Tu commences à voir la structure derrière le spectacle. Le niveau devient lisible.", reward: { stats: { strategie: 2 }, careerPoints: 4 } },
          criticalSuccess: { text: "Tu anticipes la fin du combat avant les commentateurs. Ce regard-là, peu de débutants l'ont.", reward: { stats: { strategie: 3 }, careerPoints: 7 } },
        },
      },
      {
        id: 'choice-rever-place',
        label: 'Te projeter, simplement, à leur place',
        statTested: 'mental',
        difficulty: 38,
        outcomes: {
          criticalFailure: { text: "L'écart entre eux et toi te paraît soudain infranchissable.", reward: { coolness: -6 } },
          failure: { text: "Le rêve reste flou, un peu enfantin.", reward: {} },
          success: { text: "Tu ne vois plus un spectacle inaccessible mais une destination. Ça change la façon dont tu t'entraînes.", reward: { coolness: 5, careerPoints: 4 } },
          criticalSuccess: { text: "Cette nuit-là, l'objectif cesse d'être un rêve pour devenir un plan. Tu ne t'entraîneras plus jamais pareil.", reward: { coolness: 8, careerPoints: 7, stats: { mental: 1 } } },
        },
      },
    ],
  },
  {
    id: 'card-life-superstition',
    type: 'life-moment',
    title: 'Toujours le gauche en premier',
    narrativeText:
      "Ça a commencé par hasard : le bandage gauche avant le droit, le jour d'une bonne performance. Depuis, tu n'as jamais changé l'ordre. Aujourd'hui, dans la précipitation, tu t'aperçois que tu as fait l'inverse.",
    requirement: { minRankOrder: 1, maxRankOrder: 4, weight: 2 },
    choices: [
      {
        id: 'choice-refaire-rituel',
        label: 'Tout défaire et recommencer dans l\'ordre',
        statTested: 'mental',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Le rituel prend le dessus. Tu montes sur le ring plus préoccupé par tes bandages que par l'adversaire.", reward: { coolness: -6 } },
          failure: { text: "Tu recommences, un peu gêné de ton propre réflexe.", reward: {} },
          success: { text: "Le rituel te recentre, comme toujours. Peu importe qu'il soit rationnel ou non.", reward: { coolness: 4 } },
          criticalSuccess: { text: "Ce petit geste te met dans une bulle de concentration parfaite. Certains rituels valent mieux que des discours.", reward: { coolness: 7, stats: { mental: 1 } } },
        },
      },
      {
        id: 'choice-briser-superstition',
        label: 'Laisser comme ça, pour prouver que ça n\'a aucune importance',
        statTested: 'strategie',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Tu y penses tout le combat. La superstition gagne, précisément parce que tu voulais la nier.", reward: { coolness: -6 } },
          failure: { text: "Ça te trotte dans la tête un moment, puis ça passe.", reward: {} },
          success: { text: "Rien ne se passe. Tu gagnes une petite liberté que beaucoup de boxeurs n'auront jamais.", reward: { stats: { mental: 2 }, coolness: 3 } },
          criticalSuccess: { text: "Tu réalises que ta solidité ne tient à aucun geste extérieur. C'est une leçon qui dépasse largement les bandages.", reward: { stats: { mental: 3 }, coolness: 6 } },
        },
      },
    ],
  },
  {
    id: 'card-life-premier-ko-encaisse',
    type: 'life-moment',
    title: 'Le plafond, vu d\'en bas',
    narrativeText:
      "Un sparring qui dérape, un coup que tu n'as pas vu partir, et soudain le plafond de la salle au-dessus de toi. Trois secondes de vide dont tu ne te souviens pas. Tout le monde s'est arrêté de bouger.",
    requirement: { minRankOrder: 1, maxRankOrder: 4, weight: 2 },
    choices: [
      {
        id: 'choice-remonter-tout-de-suite',
        label: 'Remonter sur le ring immédiatement',
        statTested: 'mental',
        difficulty: 42,
        outcomes: {
          criticalFailure: { text: "Tu remontes trop tôt, encore sonné. {{mentor}} arrête tout, furieux et inquiet.", reward: { health: -10, coolness: -6 } },
          failure: { text: "Tu tiens debout, mais la séance ne ressemble plus à rien.", reward: { health: -5, fatigue: 6 } },
          success: { text: "Tu reprends là où tu t'étais arrêté. Savoir qu'on se relève vaut mieux que ne jamais tomber.", reward: { stats: { mental: 3 }, coolness: 4 } },
          criticalSuccess: { text: "La salle entière retient ta façon de te relever ce jour-là. Certaines réputations se bâtissent au sol.", reward: { stats: { mental: 4 }, coolness: 7, reputationInternal: 5 } },
        },
      },
      {
        id: 'choice-comprendre-erreur',
        label: "Arrêter et comprendre d'où le coup est venu",
        statTested: 'strategie',
        difficulty: 42,
        outcomes: {
          criticalFailure: { text: "Personne n'a vraiment vu le coup partir. Tu restes avec une inquiétude sans réponse.", reward: { coolness: -6 } },
          failure: { text: "Tu identifies vaguement l'erreur, sans certitude.", reward: {} },
          success: { text: "Tu isoles précisément le trou dans ta garde. Ce coup-là ne repassera plus.", reward: { stats: { strategie: 2 }, careerPoints: 5 } },
          criticalSuccess: { text: "L'analyse révèle un défaut structurel dans ta garde que personne n'avait relevé. Coûteux, mais précieux.", reward: { stats: { strategie: 3 }, careerPoints: 8 } },
        },
      },
    ],
  },
  {
    id: 'card-life-reconnu-dans-la-rue',
    type: 'life-moment',
    title: 'Quelqu\'un qui te reconnaît',
    narrativeText:
      "Devant une boutique, un inconnu s'arrête, hésite, puis te demande si c'est bien toi qui as combattu la semaine dernière. C'est la première fois que ça arrive. Tu ne sais absolument pas quoi répondre.",
    requirement: { minRankOrder: 1, maxRankOrder: 4, weight: 2 },
    choices: [
      {
        id: 'choice-accueillir-simplement',
        label: 'Répondre simplement, sans en faire un événement',
        statTested: 'mental',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Tu réponds si sèchement que l'inconnu s'excuse presque de t'avoir dérangé.", reward: { reputationExternal: -3 } },
          failure: { text: "L'échange est bref et un peu gêné des deux côtés.", reward: {} },
          success: { text: "Vous discutez deux minutes. Il repartira en parlant de toi autour de lui.", reward: { reputationExternal: 4, coolness: 3 } },
          criticalSuccess: { text: "Ta simplicité le marque plus que le combat lui-même. Ce genre de réputation-là voyage vite.", reward: { reputationExternal: 7, coolness: 5, loyalty: 2 } },
        },
      },
      {
        id: 'choice-savourer-moment',
        label: 'Prendre la mesure de ce que ça signifie',
        statTested: 'strategie',
        difficulty: 34,
        outcomes: {
          criticalFailure: { text: "Tu t'emballes un peu vite sur ce que ça veut dire. Ça ne veut pas encore dire grand-chose.", reward: { coolness: -4 } },
          failure: { text: "Tu y repenses le soir, sans trop savoir quoi en faire.", reward: {} },
          success: { text: "Un inconnu connaît ton nom. C'est petit, et c'est immense — tu mesures les deux à la fois.", reward: { coolness: 5, careerPoints: 3 } },
          criticalSuccess: { text: "Tu comprends ce jour-là que ce que tu construis dépasse déjà la salle. Une bascule discrète mais réelle.", reward: { coolness: 8, careerPoints: 6, reputationExternal: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-autre-club-demarche',
    type: 'life-moment',
    title: 'Une carte glissée dans la main',
    narrativeText:
      "À la sortie d'un tournoi, l'entraîneur d'un club bien plus important te glisse sa carte. Meilleures installations, meilleurs partenaires, plus de visibilité. Il te demande simplement d'y réfléchir.",
    requirement: { minRankOrder: 1, maxRankOrder: 4, weight: 2 },
    choices: [
      {
        id: 'choice-rester-fidele',
        label: 'Rester où tu as commencé',
        statTested: 'mental',
        difficulty: 40,
        outcomes: {
          criticalFailure: { text: "Tu refuses par réflexe, et le doute sur ce choix te suivra longtemps.", reward: { coolness: -5 } },
          failure: { text: "Tu ranges la carte sans y penser davantage.", reward: {} },
          success: { text: "Ta place est ici. {{mentor}} apprend la proposition par un tiers, et ne dit rien — mais il a compris.", reward: { loyalty: 5, entourageDelta: [{ role: 'Mentor', delta: 2 }] } },
          criticalSuccess: { text: "Ta fidélité, sans calcul, scelle quelque chose entre {{mentor}} et toi qui ne se brisera plus.", reward: { loyalty: 8, entourageDelta: [{ role: 'Mentor', delta: 3 }], coolness: 4 } },
        },
      },
      {
        id: 'choice-en-parler-mentor',
        label: 'En parler ouvertement à {{mentor}}',
        statTested: 'strategie',
        difficulty: 40,
        outcomes: {
          criticalFailure: { text: "La conversation le blesse plus que tu ne l'imaginais. Un froid s'installe.", reward: { entourageDelta: [{ role: 'Mentor', delta: -1 }], coolness: -4 } },
          failure: { text: "Il écoute, hausse les épaules, et change de sujet.", reward: {} },
          success: { text: "Il t'aide à peser le pour et le contre, sans chercher à te retenir. Cette honnêteté vaut beaucoup.", reward: { stats: { strategie: 2 }, entourageDelta: [{ role: 'Mentor', delta: 1 }], careerPoints: 4 } },
          criticalSuccess: { text: "Il te dit qu'il te laissera partir le jour où ce sera bon pour toi. Tu décides de rester — et il le sait.", reward: { stats: { strategie: 3 }, entourageDelta: [{ role: 'Mentor', delta: 2 }], loyalty: 5, careerPoints: 6 } },
        },
      },
    ],
  },
  {
    id: 'card-life-carnet-progres',
    type: 'life-moment',
    title: 'Le carnet à spirale',
    narrativeText:
      "{{mentor}} pose un carnet bon marché sur le banc à côté de toi. « Chaque séance. Ce que tu as fait, ce que tu as senti, ce qui a raté. » Il ne précise pas pourquoi, et s'éloigne déjà.",
    requirement: { maxRankOrder: 3, weight: 2 },
    choices: [
      {
        id: 'choice-tenir-carnet',
        label: 'Le remplir sérieusement, chaque jour',
        statTested: 'strategie',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Tu écris trois pages puis abandonnes. Le carnet finit au fond du sac.", reward: { coolness: -3 } },
          failure: { text: "Tu notes irrégulièrement, sans en tirer grand-chose.", reward: {} },
          success: { text: "Relire tes propres notes te montre des schémas que tu ne voyais pas en les vivant.", reward: { stats: { strategie: 2 }, careerPoints: 4 } },
          criticalSuccess: { text: "Le carnet devient un outil redoutable. Des années plus tard, tu le consulteras encore.", reward: { stats: { strategie: 3 }, careerPoints: 7 } },
        },
      },
      {
        id: 'choice-noter-sensations',
        label: 'Y noter surtout ce que tu ressens',
        statTested: 'mental',
        difficulty: 36,
        outcomes: {
          criticalFailure: { text: "Relire tes doutes noir sur blanc les rend plus lourds, pas plus légers.", reward: { coolness: -5 } },
          failure: { text: "Les notes restent vagues, plus défouloir que méthode.", reward: {} },
          success: { text: "Mettre des mots sur la peur et la fatigue leur enlève une partie de leur pouvoir.", reward: { stats: { mental: 2 }, coolness: 4 } },
          criticalSuccess: { text: "Tu développes une lucidité sur toi-même que peu de boxeurs atteignent, et jamais aussi tôt.", reward: { stats: { mental: 3 }, coolness: 7 } },
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
  {
    id: 'card-life-changement-categorie',
    type: 'life-moment',
    title: 'Monter ou descendre',
    narrativeText:
      "La décharge du poids devient chaque fois plus difficile. {{mentor}} pose la question franchement : soit tu montes d'une catégorie et tu affrontes des adversaires plus lourds, soit tu continues à te vider avant chaque combat.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-monter-categorie',
        label: 'Monter de catégorie et boxer à ton poids naturel',
        statTested: 'puissance',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Les adversaires plus lourds te renvoient brutalement à ta place. Le changement est prématuré.", reward: { health: -10, coolness: -6 } },
          failure: { text: "Tu t'adaptes lentement à des adversaires plus puissants que toi.", reward: { fatigue: 8 } },
          success: { text: "Boxer sans te vider change tout : tu arrives entier sur le ring pour la première fois depuis des années.", reward: { stats: { puissance: 3 }, health: 5, careerPoints: 5 } },
          criticalSuccess: { text: "À ton poids réel, tu deviens un boxeur complètement différent. Tout le monde le remarque immédiatement.", reward: { stats: { puissance: 4 }, health: 8, careerPoints: 9 } },
        },
      },
      {
        id: 'choice-tenir-categorie',
        label: 'Rester dans ta catégorie, coûte que coûte',
        statTested: 'endurance',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "La décharge te laisse exsangue. Tu montes sur le ring avec la moitié de tes moyens.", reward: { health: -12, fatigue: 12 } },
          failure: { text: "Tu fais le poids, difficilement, comme d'habitude.", reward: { fatigue: 8, health: -4 } },
          success: { text: "Tu gardes l'avantage physique sur des adversaires de ton gabarit. Le prix à payer en vaut la peine.", reward: { stats: { endurance: 3 }, careerPoints: 5 } },
          criticalSuccess: { text: "Tu maîtrises la décharge à la perfection et restes le plus fort de ta catégorie. Un avantage énorme.", reward: { stats: { endurance: 4 }, careerPoints: 9, reputationInternal: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-life-adversaire-blesse',
    type: 'life-moment',
    title: 'Des nouvelles de l\'hôpital',
    narrativeText:
      "Ton dernier adversaire est resté en observation deux nuits. Rien de définitif, dit-on, mais rien de rassurant non plus. Tu n'as rien fait d'illégal — et pourtant l'information ne passe pas.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-aller-le-voir',
        label: 'Aller le voir, sans caméras',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "La visite se passe mal. Sa famille ne voit pas ta présence du bon œil, et tu repars pire qu'en arrivant.", reward: { coolness: -8 } },
          failure: { text: "La visite est brève et embarrassée des deux côtés.", reward: {} },
          success: { text: "Vous parlez un moment, entre gens qui font le même métier. Ça vous soulage tous les deux.", reward: { coolness: 5, reputationInternal: 5 } },
          criticalSuccess: { text: "Ce geste, jamais rendu public, circule quand même dans le milieu. Il en dit long sur qui tu es.", reward: { coolness: 8, reputationInternal: 9, loyalty: 3 } },
        },
      },
      {
        id: 'choice-accepter-metier',
        label: "Accepter que c'est le métier, et avancer",
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Tu refoules la chose, et elle revient te chercher les nuits suivantes.", reward: { coolness: -8, fatigue: 6 } },
          failure: { text: "Tu passes à autre chose sans vraiment digérer.", reward: {} },
          success: { text: "Tu poses une limite claire entre ta responsabilité et celle du sport. Nécessaire pour continuer.", reward: { stats: { mental: 2 }, coolness: 4 } },
          criticalSuccess: { text: "Cette lucidité sur ce que ce métier implique te rend plus solide, pas plus dur.", reward: { stats: { mental: 3 }, coolness: 7 } },
        },
      },
    ],
  },
  {
    id: 'card-life-fan-insistant',
    type: 'life-moment',
    title: 'Toujours au même endroit',
    narrativeText:
      "Il est à chaque pesée, chaque combat, chaque sortie de salle. Toujours poli, jamais menaçant, mais toujours là. Aujourd'hui il connaît ton adresse, et te le fait savoir en souriant.",
    requirement: { minRankOrder: 5, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-poser-limite',
        label: 'Poser une limite claire, fermement mais sans mépris',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Ta réaction est filmée et sortie de son contexte. L'histoire tourne mal en ligne.", reward: { reputationExternal: -8, coolness: -5 } },
          failure: { text: "Il s'excuse, promet de reculer. Tu n'y crois qu'à moitié.", reward: {} },
          success: { text: "La limite est comprise et respectée. Il reste un soutien, à bonne distance.", reward: { coolness: 5, reputationExternal: 3 } },
          criticalSuccess: { text: "Tu gères la situation avec assez de tact pour ne blesser personne tout en protégeant ta vie privée.", reward: { coolness: 8, reputationExternal: 6, stats: { mental: 1 } } },
        },
      },
      {
        id: 'choice-organiser-cadre',
        label: 'Lui proposer un cadre plutôt qu\'un refus',
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Le cadre proposé est interprété comme un encouragement. La situation empire.", reward: { coolness: -8 } },
          failure: { text: "L'arrangement tient quelques semaines avant de se déliter.", reward: {} },
          success: { text: "Séances de dédicaces, distance ailleurs : le cadre fonctionne pour tout le monde.", reward: { stats: { strategie: 2 }, reputationExternal: 5 } },
          criticalSuccess: { text: "Ta façon de gérer devient un modèle que ton promoteur reprendra pour d'autres boxeurs.", reward: { stats: { strategie: 3 }, reputationExternal: 8, careerPoints: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-life-proposition-louche',
    type: 'life-moment',
    title: 'Un café qu\'on t\'offre',
    narrativeText:
      "Un homme que tu n'as jamais vu t'invite à boire un café. La conversation tourne autour de rien pendant dix minutes, puis il évoque, sans jamais le dire clairement, un round précis de ton prochain combat.",
    requirement: { minRankOrder: 5, maxRankOrder: 8, weight: 1 },
    choices: [
      {
        id: 'choice-refuser-net',
        label: 'Te lever et partir immédiatement',
        statTested: 'mental',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Tu pars trop brusquement, dans un lieu public. La scène est remarquée et mal interprétée.", reward: { reputationExternal: -6, coolness: -4 } },
          failure: { text: "Tu pars sans un mot. L'homme ne se manifeste plus, mais rien n'est vraiment réglé.", reward: {} },
          success: { text: "Tu refuses sans ambiguïté et sans esclandre. Certaines lignes ne se discutent pas.", reward: { coolness: 6, reputationInternal: 5 } },
          criticalSuccess: { text: "Ton refus est si net qu'il circule dans le milieu. Plus personne ne tentera ce genre d'approche avec toi.", reward: { coolness: 9, reputationInternal: 9, loyalty: 3 } },
        },
      },
      {
        id: 'choice-signaler',
        label: 'En parler à {{mentor}} et à la fédération',
        statTested: 'strategie',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Sans preuve, ton signalement se retourne partiellement contre toi. Certains doutent de ta version.", reward: { reputationExternal: -6, fatigue: 5 } },
          failure: { text: "Le signalement est enregistré, sans suite visible.", reward: {} },
          success: { text: "La fédération prend l'affaire au sérieux. {{mentor}} te félicite d'avoir eu ce réflexe.", reward: { reputationInternal: 6, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
          criticalSuccess: { text: "Ton signalement fait tomber tout un réseau d'approches similaires. Le milieu entier en sort assaini.", reward: { reputationInternal: 10, reputationExternal: 8, careerPoints: 6 } },
        },
      },
    ],
  },
  {
    id: 'card-life-proche-malade',
    type: 'life-moment',
    title: 'Un appel en pleine séance',
    narrativeText:
      "Le téléphone vibre pendant l'entraînement. Un proche est hospitalisé — rien d'immédiatement grave, mais rien de bénin. Le prochain combat est dans trois semaines, et le camp devait commencer demain.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-suspendre-camp',
        label: 'Suspendre la préparation et être présent',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Tu es présent sans l'être vraiment, la tête au combat. Le pire des deux mondes.", reward: { coolness: -8, fatigue: 8 } },
          failure: { text: "Tu fais des allers-retours épuisants entre l'hôpital et la salle.", reward: { fatigue: 10 } },
          success: { text: "Tu es là, entièrement. Le camp attendra — certaines choses ne se rattrapent pas.", reward: { loyalty: 6, coolness: 4 } },
          criticalSuccess: { text: "Ta présence change le cours de ces semaines pour eux. Rien, dans aucune carrière, ne vaut plus que ça.", reward: { loyalty: 9, coolness: 7, stats: { mental: 2 } } },
        },
      },
      {
        id: 'choice-canaliser-combat',
        label: 'Transformer ça en carburant pour le camp',
        statTested: 'endurance',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Tu t'enterres dans le travail pour ne pas penser. Le corps lâche avant l'esprit.", reward: { fatigue: 14, health: -6 } },
          failure: { text: "Les séances passent, mécaniques, sans que tu sois vraiment là.", reward: { fatigue: 8 } },
          success: { text: "Tu canalises l'inquiétude dans le travail, sans fuir pour autant. Le camp est le meilleur depuis longtemps.", reward: { stats: { endurance: 3 }, careerPoints: 6 } },
          criticalSuccess: { text: "Tu t'entraînes avec une intensité que {{mentor}} n'avait jamais vue, tout en gardant le lien avec eux.", reward: { stats: { endurance: 4 }, careerPoints: 10, loyalty: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-comparaison-publique',
    type: 'life-moment',
    title: 'Le classement des espoirs',
    narrativeText:
      "Un magazine publie un classement des boxeurs de ta génération. Tu y figures, mais pas en tête — et le nom au-dessus du tien est celui de quelqu'un que tu estimes très honnêtement moins fort que toi.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-ignorer-classement',
        label: "Ne pas t'en occuper du tout",
        statTested: 'mental',
        difficulty: 46,
        outcomes: {
          criticalFailure: { text: "Tu prétends l'ignorer tout en y repensant chaque jour. Le pire des deux.", reward: { coolness: -6 } },
          failure: { text: "Ça t'agace quelques jours, puis ça passe.", reward: {} },
          success: { text: "Un classement de journalistes ne change rien à ce qui se passe sur le ring. Tu passes à autre chose.", reward: { coolness: 5, stats: { mental: 1 } } },
          criticalSuccess: { text: "Cette indifférence totale aux classements extérieurs devient une force durable de ta carrière.", reward: { coolness: 8, stats: { mental: 3 } } },
        },
      },
      {
        id: 'choice-provoquer-duel',
        label: 'Demander publiquement à l\'affronter',
        statTested: 'strategie',
        difficulty: 46,
        outcomes: {
          criticalFailure: { text: "Ta sortie passe pour de l'aigreur. Le classement, lui, ne bouge pas.", reward: { reputationExternal: -6, coolness: -4 } },
          failure: { text: "L'appel reste sans réponse. Les médias passent à autre chose.", reward: {} },
          success: { text: "Le défi est relevé médiatiquement. Les promoteurs commencent à en parler sérieusement.", reward: { reputationExternal: 7, careerPoints: 5 } },
          criticalSuccess: { text: "Ta sortie crée un tel intérêt que le combat devient inévitable — et tu pars avec l'avantage psychologique.", reward: { reputationExternal: 12, careerPoints: 8, coolness: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-offre-etranger',
    type: 'life-moment',
    title: 'Un contrat depuis l\'autre bout du monde',
    narrativeText:
      "Une organisation étrangère propose trois combats, une bourse sans commune mesure avec ce que tu touches ici, et une exposition immédiate. Le revers : t'installer là-bas, loin de {{mentor}} et de tout ce que tu connais.",
    requirement: { minRankOrder: 5, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-tenter-aventure',
        label: 'Tenter l\'aventure',
        statTested: 'mental',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "L'isolement et le décalage te démolissent. Les trois combats se passent mal.", reward: { coolness: -10, health: -6, loyalty: -4 } },
          failure: { text: "L'adaptation est rude. Tu remplis le contrat sans t'y épanouir.", reward: { fatigue: 10, careerPoints: 4 } },
          success: { text: "L'exposition est réelle, la bourse aussi. Tu reviens grandi et bien plus connu.", reward: { careerPoints: 10, reputationExternal: 12 } },
          criticalSuccess: { text: "Tu conquiers un public entier à l'étranger. Ton nom dépasse définitivement les frontières.", reward: { careerPoints: 15, reputationExternal: 20, coolness: 5 } },
        },
      },
      {
        id: 'choice-rester-construire',
        label: 'Refuser et construire ici, patiemment',
        statTested: 'strategie',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Tu refuses par peur plus que par stratégie, et le regret s'installe durablement.", reward: { coolness: -8 } },
          failure: { text: "Tu refuses poliment. L'offre ne se représentera pas.", reward: {} },
          success: { text: "Tu construis sur des bases solides, avec les gens qui te connaissent vraiment.", reward: { loyalty: 5, entourageDelta: [{ role: 'Mentor', delta: 1 }], careerPoints: 6 } },
          criticalSuccess: { text: "Ton pari sur la continuité paie largement : ce que tu bâtis ici est plus solide que ce qu'on t'offrait ailleurs.", reward: { loyalty: 8, entourageDelta: [{ role: 'Mentor', delta: 2 }], careerPoints: 11, reputationInternal: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-coequipier-triche',
    type: 'life-moment',
    title: 'Ce que tu n\'aurais pas dû voir',
    narrativeText:
      "Dans le vestiaire, tard, tu tombes sur un coéquipier en train de ranger quelque chose précipitamment dans son sac. Vous vous regardez une seconde de trop. Aucun de vous deux ne dit un mot.",
    requirement: { minRankOrder: 4, maxRankOrder: 8, weight: 1 },
    choices: [
      {
        id: 'choice-lui-parler-dabord',
        label: 'Lui en parler directement, à lui seul',
        statTested: 'mental',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Il nie tout en bloc et retourne la situation contre toi auprès des autres.", reward: { reputationInternal: -8, coolness: -5 } },
          failure: { text: "La conversation tourne court. Rien n'est réglé, mais tout est su.", reward: { coolness: -3 } },
          success: { text: "Il finit par parler. La discussion le pousse à arrêter avant que ça ne devienne irréparable.", reward: { reputationInternal: 6, loyalty: 4 } },
          criticalSuccess: { text: "Tu l'aides à s'en sortir sans jamais l'exposer. Il te devra beaucoup, longtemps.", reward: { reputationInternal: 9, loyalty: 7, coolness: 4 } },
        },
      },
      {
        id: 'choice-prevenir-mentor',
        label: 'Prévenir {{mentor}} sans le nommer publiquement',
        statTested: 'strategie',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "L'information fuite et le vestiaire se déchire. Tout le monde te tient pour responsable.", reward: { reputationInternal: -8, loyalty: -4 } },
          failure: { text: "{{mentor}} écoute, note, et gère à sa manière. Tu n'en sauras pas plus.", reward: {} },
          success: { text: "{{mentor}} prend le problème en main discrètement. La salle est protégée sans que personne ne soit humilié.", reward: { reputationInternal: 6, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
          criticalSuccess: { text: "Ta gestion de la situation, mesurée et sans délation publique, impressionne durablement {{mentor}}.", reward: { reputationInternal: 9, entourageDelta: [{ role: 'Mentor', delta: 2 }], stats: { strategie: 2 } } },
        },
      },
    ],
  },
  {
    id: 'card-life-demenagement-salle',
    type: 'life-moment',
    title: 'À dix minutes à pied',
    narrativeText:
      "Un logement se libère juste à côté de la salle. Plus petit, plus cher, moins agréable que là où tu vis — mais il supprimerait deux heures de transport par jour de ton quotidien.",
    requirement: { minRankOrder: 4, maxRankOrder: 7, weight: 2 },
    choices: [
      {
        id: 'choice-demenager',
        label: 'Déménager et tout organiser autour de la salle',
        statTested: 'strategie',
        difficulty: 46,
        outcomes: {
          criticalFailure: { text: "Le logement est pire que prévu et le loyer pèse. Le gain de temps ne compense pas.", reward: { coolness: -6, health: -3 } },
          failure: { text: "Le déménagement se passe correctement, sans changement notable.", reward: { fatigue: 5 } },
          success: { text: "Deux heures récupérées chaque jour, réinvesties en sommeil et en récupération. Tout s'améliore.", reward: { health: 6, stats: { endurance: 2 }, careerPoints: 4 } },
          criticalSuccess: { text: "Vivre à côté de la salle transforme complètement ta préparation. Tu ne comprends pas d'avoir attendu si longtemps.", reward: { health: 9, stats: { endurance: 3 }, careerPoints: 7 } },
        },
      },
      {
        id: 'choice-garder-distance',
        label: 'Garder une vraie séparation entre la salle et chez toi',
        statTested: 'mental',
        difficulty: 46,
        outcomes: {
          criticalFailure: { text: "Les trajets continuent de te ronger, et le choix de rester devient un regret quotidien.", reward: { fatigue: 8, coolness: -4 } },
          failure: { text: "Rien ne change. Les trajets restent ce qu'ils sont.", reward: { fatigue: 4 } },
          success: { text: "Pouvoir vraiment décrocher en rentrant vaut largement les heures de transport.", reward: { coolness: 5, stats: { mental: 2 } } },
          criticalSuccess: { text: "Cette frontière nette entre boxe et vie personnelle devient ce qui te permet de durer sans t'épuiser.", reward: { coolness: 8, stats: { mental: 3 }, loyalty: 3 } },
        },
      },
    ],
  },
  {
    id: 'card-life-journaliste-passe',
    type: 'life-moment',
    title: 'Un journaliste qui remonte loin',
    narrativeText:
      "Un journaliste prépare un long portrait de toi. Il a parlé à des gens de ton quartier, retrouvé d'anciens camarades, et évoque des choses de ton passé que tu n'avais pas prévu de rendre publiques.",
    requirement: { minRankOrder: 5, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-tout-assumer',
        label: 'Tout assumer ouvertement',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "L'honnêteté est mal reprise et tournée à charge dans l'article publié.", reward: { reputationExternal: -8, coolness: -5 } },
          failure: { text: "L'article sort, factuel et sans relief particulier.", reward: {} },
          success: { text: "Ton honnêteté désarme complètement l'angle à charge. Le portrait devient bien plus humain.", reward: { reputationExternal: 8, coolness: 5 } },
          criticalSuccess: { text: "L'article devient une référence. Des gens qui ne suivent pas la boxe retiennent ton parcours.", reward: { reputationExternal: 14, coolness: 8, loyalty: 3 } },
        },
      },
      {
        id: 'choice-cadrer-recit',
        label: 'Négocier ce qui sera dit et ce qui restera privé',
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Tes tentatives de contrôle fuitent et deviennent le sujet même de l'article.", reward: { reputationExternal: -8 } },
          failure: { text: "Un compromis mou est trouvé. L'article n'intéressera personne.", reward: {} },
          success: { text: "Tu obtiens un cadre respecté : ton histoire est racontée sans que ta vie privée soit exposée.", reward: { stats: { strategie: 2 }, reputationExternal: 6, coolness: 4 } },
          criticalSuccess: { text: "Tu orientes le récit avec une habileté remarquable. Le portrait sert exactement l'image que tu voulais construire.", reward: { stats: { strategie: 3 }, reputationExternal: 11, careerPoints: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-premiere-television',
    type: 'life-moment',
    title: 'Le direct national',
    narrativeText:
      "Ton prochain combat sera retransmis en direct sur une chaîne nationale. Des millions de gens qui ne t'ont jamais vu boxer. La production demande à te filmer pendant le camp, avant même le combat.",
    requirement: { minRankOrder: 5, maxRankOrder: 8, weight: 2 },
    choices: [
      {
        id: 'choice-jouer-le-jeu',
        label: 'Jouer le jeu des caméras',
        statTested: 'strategie',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Les caméras parasitent tout le camp. Tu arrives au combat mal préparé et exposé.", reward: { fatigue: 10, coolness: -6 } },
          failure: { text: "Le tournage se passe sans incident, et sans grand intérêt non plus.", reward: { fatigue: 4 } },
          success: { text: "Tu apparais naturel et travailleur. Le public découvre quelqu'un qu'il a envie de suivre.", reward: { reputationExternal: 10, careerPoints: 4 } },
          criticalSuccess: { text: "Le reportage fait un carton. Tu gagnes un public bien au-delà des amateurs de boxe.", reward: { reputationExternal: 17, careerPoints: 7, coolness: 4 } },
        },
      },
      {
        id: 'choice-preserver-camp',
        label: 'Préserver le camp et ne rien laisser filmer',
        statTested: 'mental',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Ton refus passe pour de l'arrogance et la production le fait savoir.", reward: { reputationExternal: -7 } },
          failure: { text: "La production trouve un autre angle. Rien ne change vraiment pour toi.", reward: {} },
          success: { text: "Ta préparation reste intacte, protégée du bruit. C'est sur le ring que tu comptes convaincre.", reward: { coolness: 5, stats: { mental: 2 }, careerPoints: 4 } },
          criticalSuccess: { text: "Ton silence total avant le combat crée plus d'attente que n'importe quel reportage l'aurait fait.", reward: { coolness: 8, stats: { mental: 3 }, reputationExternal: 8 } },
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
  {
    id: 'card-life-documentaire',
    type: 'life-moment',
    title: 'Une équipe qui veut tout filmer',
    narrativeText:
      "Un réalisateur propose un documentaire sur ta carrière. Accès complet, deux ans de tournage, y compris les moments où les choses ne vont pas bien. Il insiste précisément sur ce dernier point.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-acces-total',
        label: 'Accepter un accès réellement total',
        statTested: 'mental',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Les caméras captent des moments que tu regretteras d'avoir laissés filmer.", reward: { coolness: -10, reputationExternal: -5 } },
          failure: { text: "Le documentaire se fait, correct et sans relief.", reward: { fatigue: 6 } },
          success: { text: "L'honnêteté du film touche bien au-delà du public de la boxe.", reward: { reputationExternal: 14, coolness: 5 } },
          criticalSuccess: { text: "Le documentaire devient une référence sur ce que ce sport fait vraiment aux gens qui le pratiquent.", reward: { reputationExternal: 22, coolness: 9, careerPoints: 6 } },
        },
      },
      {
        id: 'choice-cadrer-documentaire',
        label: 'Accepter, mais en gardant le contrôle du récit',
        statTested: 'strategie',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Le film, trop lisse, ne convainc personne et le réalisateur s'en plaint publiquement.", reward: { reputationExternal: -6 } },
          failure: { text: "Le résultat est propre, un peu promotionnel, vite oublié.", reward: {} },
          success: { text: "Le film raconte exactement l'histoire que tu voulais laisser, sans rien trahir.", reward: { reputationExternal: 11, stats: { strategie: 2 } } },
          criticalSuccess: { text: "Tu construis un récit maîtrisé et sincère à la fois. Le film définira durablement ton image publique.", reward: { reputationExternal: 18, stats: { strategie: 3 }, careerPoints: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-mentor-retraite',
    type: 'life-moment',
    title: 'Le jour où il raccroche',
    narrativeText:
      "{{mentor}} t'annonce qu'il arrête. L'âge, la santé, l'envie. Il a préparé la transition, trouvé quelqu'un de compétent. Il t'annonce ça calmement, comme un point technique, ce qui le rend encore plus difficile à entendre.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-honorer-mentor',
        label: 'Lui dire enfin ce qu\'il a représenté',
        statTested: 'mental',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Les mots ne viennent pas. Vous restez tous les deux dans un silence qui ne dit rien de juste.", reward: { coolness: -8 } },
          failure: { text: "Vous vous serrez la main, brièvement. Beaucoup de choses restent non dites.", reward: {} },
          success: { text: "Tu lui dis tout, maladroitement mais entièrement. Il ne répond pas grand-chose, mais il a entendu.", reward: { loyalty: 7, coolness: 6, entourageDelta: [{ role: 'Mentor', delta: 2 }] } },
          criticalSuccess: { text: "Cette conversation restera l'une des plus importantes de ta vie, bien au-delà de la boxe.", reward: { loyalty: 10, coolness: 9, entourageDelta: [{ role: 'Mentor', delta: 3 }], stats: { mental: 2 } } },
        },
      },
      {
        id: 'choice-assurer-transition',
        label: 'Te concentrer sur la réussite de la transition',
        statTested: 'strategie',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Le nouvel entraîneur ne prend pas. Ta préparation en souffre durablement.", reward: { coolness: -8, fatigue: 8 } },
          failure: { text: "La transition se fait, cahin-caha. Rien n'est vraiment comme avant.", reward: { fatigue: 5 } },
          success: { text: "Le passage de relais se fait proprement. {{mentor}} peut partir tranquille, et c'est ce qui compte.", reward: { stats: { strategie: 2 }, careerPoints: 6, entourageDelta: [{ role: 'Mentor', delta: 1 }] } },
          criticalSuccess: { text: "Tu organises la transition si bien que rien ne se perd de ce qu'il t'a transmis. Il est fier, visiblement.", reward: { stats: { strategie: 3 }, careerPoints: 10, entourageDelta: [{ role: 'Mentor', delta: 2 }], loyalty: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-life-adversaire-en-difficulte',
    type: 'life-moment',
    title: 'Des nouvelles d\'un ancien adversaire',
    narrativeText:
      "Un boxeur que tu as affronté il y a des années traverse une mauvaise passe : plus de licence, plus d'argent, une santé abîmée par le métier. L'information te revient par un tiers, sans qu'il ait rien demandé.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-aider-discretement',
        label: 'Aider, sans que ça se sache',
        statTested: 'mental',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Ton aide est perçue comme de la pitié et mal reçue. La situation devient gênante pour tout le monde.", reward: { coolness: -7 } },
          failure: { text: "Tu envoies quelque chose sans nouvelles en retour.", reward: {} },
          success: { text: "L'aide arrive au bon moment et le remet debout. Personne d'autre n'en saura jamais rien.", reward: { coolness: 6, loyalty: 5, reputationInternal: 4 } },
          criticalSuccess: { text: "Tu l'aides à retrouver une place dans le milieu. Ce que tu as fait là comptera plus que bien des victoires.", reward: { coolness: 9, loyalty: 8, reputationInternal: 9 } },
        },
      },
      {
        id: 'choice-alerter-milieu',
        label: 'Alerter publiquement sur le sort des anciens',
        statTested: 'strategie',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Ta sortie est perçue comme une récupération. Il t'en veut de l'avoir exposé.", reward: { reputationExternal: -7, coolness: -5 } },
          failure: { text: "Le sujet fait un peu de bruit, puis retombe comme d'habitude.", reward: {} },
          success: { text: "Ta parole compte : la fédération ouvre un dossier sur l'accompagnement des anciens.", reward: { reputationExternal: 11, reputationInternal: 7 } },
          criticalSuccess: { text: "Ton intervention débouche sur un vrai fonds de solidarité. Des dizaines de boxeurs en bénéficieront après toi.", reward: { reputationExternal: 18, reputationInternal: 12, careerPoints: 6 } },
        },
      },
    ],
  },
  {
    id: 'card-life-offre-commentateur',
    type: 'life-moment',
    title: 'Une chaise derrière le micro',
    narrativeText:
      "Une chaîne te propose un poste de consultant : quelques soirées de combats par mois, un cachet confortable, et une place assurée dans le paysage médiatique le jour où tu arrêteras. À commencer dès maintenant, en parallèle.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-accepter-micro',
        label: 'Accepter et préparer l\'après dès maintenant',
        statTested: 'strategie',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Commenter les autres pendant que tu combattes encore brouille complètement ton image.", reward: { reputationInternal: -7, fatigue: 6 } },
          failure: { text: "Tu fais quelques piges sans grande conviction.", reward: { fatigue: 4 } },
          success: { text: "Tu es bon derrière le micro, et l'après-carrière cesse d'être une inconnue angoissante.", reward: { reputationExternal: 9, stats: { strategie: 2 }, careerPoints: 4 } },
          criticalSuccess: { text: "Ton analyse fait référence dès les premières émissions. Ta reconversion est assurée avant même d'y penser.", reward: { reputationExternal: 15, stats: { strategie: 3 }, careerPoints: 7 } },
        },
      },
      {
        id: 'choice-refuser-micro',
        label: 'Refuser tant que tu combats encore',
        statTested: 'mental',
        difficulty: 52,
        outcomes: {
          criticalFailure: { text: "Tu refuses sèchement, et la chaîne se tourne vers quelqu'un d'autre définitivement.", reward: { reputationExternal: -5 } },
          failure: { text: "Tu remets à plus tard, sans fermer la porte.", reward: {} },
          success: { text: "Une chose à la fois. Tant que tu montes sur un ring, c'est là que doit être ta tête.", reward: { coolness: 5, stats: { mental: 2 }, reputationInternal: 4 } },
          criticalSuccess: { text: "Ce refus net impressionne jusqu'à ceux qui te l'avaient proposé. L'offre restera ouverte, quoi qu'il arrive.", reward: { coolness: 8, stats: { mental: 3 }, reputationInternal: 7 } },
        },
      },
    ],
  },
  {
    id: 'card-life-battu-au-sparring',
    type: 'life-moment',
    title: 'Dominé par un gamin',
    narrativeText:
      "Un sparring de routine avec un jeune de la salle. Sauf qu'aujourd'hui, il te domine nettement, trois rounds de suite. Personne ne dit rien à la fin de la séance, et ce silence est plus éloquent que n'importe quel commentaire.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-analyser-lucidement',
        label: 'Analyser froidement ce qui s\'est passé',
        statTested: 'strategie',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "L'analyse ne mène qu'à un constat : la vitesse ne reviendra pas. C'est difficile à encaisser.", reward: { coolness: -10 } },
          failure: { text: "Tu mets ça sur le compte d'un mauvais jour, sans grande conviction.", reward: { coolness: -4 } },
          success: { text: "Tu identifies ce qui a changé et ce qui peut se compenser. Il reste des solutions.", reward: { stats: { strategie: 3 }, careerPoints: 5 } },
          criticalSuccess: { text: "Cette séance humiliante débouche sur une refonte complète de ton style. Elle prolongera ta carrière.", reward: { stats: { strategie: 4 }, careerPoints: 9, coolness: 4 } },
        },
      },
      {
        id: 'choice-reprendre-immediatement',
        label: 'Redemander une séance dès le lendemain',
        statTested: 'mental',
        difficulty: 56,
        outcomes: {
          criticalFailure: { text: "Tu forces, et le résultat est encore pire. La salle entière détourne le regard.", reward: { coolness: -12, health: -6 } },
          failure: { text: "La deuxième séance est plus serrée, sans être convaincante.", reward: { fatigue: 8 } },
          success: { text: "Tu inverses la tendance dès le lendemain. Le message est clair pour tout le monde, y compris pour toi.", reward: { stats: { mental: 3 }, coolness: 6, reputationInternal: 5 } },
          criticalSuccess: { text: "Tu domines si nettement la reprise que la séance de la veille devient une anecdote. La salle a compris.", reward: { stats: { mental: 4 }, coolness: 9, reputationInternal: 8 } },
        },
      },
    ],
  },
  {
    id: 'card-life-commission-medicale',
    type: 'life-moment',
    title: 'Le bilan complet',
    narrativeText:
      "La commission médicale impose un bilan approfondi aux boxeurs de plus de trente combats. Imagerie, réflexes, tests cognitifs. On te prévient que les résultats peuvent, dans certains cas, mettre fin à une licence.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-tout-faire',
        label: 'Faire tous les examens, sans rien éviter',
        statTested: 'mental',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Les résultats révèlent des choses inquiétantes. On te met sous surveillance renforcée.", reward: { health: -10, coolness: -8 } },
          failure: { text: "Rien de rédhibitoire, mais des signaux à surveiller de près.", reward: { health: -4 } },
          success: { text: "Le bilan est rassurant. Savoir précisément où tu en es vaut mieux que n'importe quelle intuition.", reward: { health: 5, coolness: 6 } },
          criticalSuccess: { text: "Les médecins sont impressionnés par ton état après tant de combats. Tu repars avec des années devant toi.", reward: { health: 9, coolness: 9, stats: { mental: 2 } } },
        },
      },
      {
        id: 'choice-preparer-examens',
        label: 'Te préparer sérieusement en amont des tests',
        statTested: 'strategie',
        difficulty: 54,
        outcomes: {
          criticalFailure: { text: "Ta préparation ressemble trop à une tentative de masquer quelque chose. La commission le remarque.", reward: { reputationInternal: -6, coolness: -6 } },
          failure: { text: "La préparation ne change pas grand-chose aux résultats.", reward: {} },
          success: { text: "Repos, hydratation, récupération : tu passes le bilan dans les meilleures conditions possibles.", reward: { health: 6, stats: { strategie: 2 } } },
          criticalSuccess: { text: "Tu abordes le bilan comme un combat, et le passes haut la main. La licence est renouvelée sans réserve.", reward: { health: 9, stats: { strategie: 3 }, careerPoints: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-distinction-officielle',
    type: 'life-moment',
    title: 'Une invitation sur papier épais',
    narrativeText:
      "Une distinction officielle, remise lors d'une cérémonie où tu ne connaîtras personne, entouré de gens dont le métier n'a rien à voir avec le tien. L'invitation précise « tenue de soirée exigée ».",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-y-aller',
        label: 'Y aller et représenter ton sport',
        statTested: 'mental',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Tu te sens complètement déplacé toute la soirée, et ça se voit sur les photos.", reward: { coolness: -6 } },
          failure: { text: "La soirée passe, protocolaire et sans intérêt particulier.", reward: {} },
          success: { text: "Tu portes bien la boxe dans un monde qui la regarde souvent de haut. Ça compte plus que la médaille.", reward: { reputationExternal: 9, coolness: 5 } },
          criticalSuccess: { text: "Ton discours, court et sincère, marque toute la salle. La boxe gagne quelques respects ce soir-là.", reward: { reputationExternal: 15, coolness: 8, reputationInternal: 6 } },
        },
      },
      {
        id: 'choice-decliner-poliment',
        label: 'Décliner et rester à la salle',
        statTested: 'strategie',
        difficulty: 50,
        outcomes: {
          criticalFailure: { text: "Le refus est mal pris par les organisateurs, qui le font savoir.", reward: { reputationExternal: -7 } },
          failure: { text: "Tu déclines poliment. Personne ne s'en formalise vraiment.", reward: {} },
          success: { text: "Tu préfères la salle aux dorures. Ceux qui comptent pour toi comprennent parfaitement.", reward: { reputationInternal: 6, loyalty: 3 } },
          criticalSuccess: { text: "Ton refus discret, sans posture, renforce paradoxalement ton image auprès de ceux qui te suivent vraiment.", reward: { reputationInternal: 10, loyalty: 5, coolness: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-ouvrir-salle',
    type: 'life-moment',
    title: 'Un local à reprendre',
    narrativeText:
      "Un local se libère dans ton ancien quartier. Assez grand pour une salle, assez abordable pour que ce soit possible. L'idée d'y former des gamins comme toi il y a vingt ans s'installe et ne repart plus.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-lancer-projet',
        label: 'Lancer le projet dès maintenant',
        statTested: 'strategie',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Le projet te dévore du temps et de l'énergie que ta carrière ne peut pas se permettre.", reward: { fatigue: 12, coolness: -6 } },
          failure: { text: "Les démarches s'enlisent. Le local reste vide pour l'instant.", reward: { fatigue: 6 } },
          success: { text: "La salle ouvre. Voir les premiers gamins arriver vaut toutes les ceintures.", reward: { reputationInternal: 9, loyalty: 5, careerPoints: 5 } },
          criticalSuccess: { text: "La salle devient rapidement un vrai lieu de vie du quartier. Ton héritage a désormais une adresse.", reward: { reputationInternal: 14, loyalty: 8, careerPoints: 9, coolness: 5 } },
        },
      },
      {
        id: 'choice-attendre-fin-carriere',
        label: 'Réserver le projet pour après ta carrière',
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: { text: "Le local est repris par quelqu'un d'autre. L'occasion ne se représentera pas.", reward: { coolness: -8 } },
          failure: { text: "Tu remets à plus tard, en espérant que ce soit encore possible.", reward: {} },
          success: { text: "Une chose à la fois. Le projet mûrit dans un coin de ta tête, et il sera meilleur pour ça.", reward: { coolness: 5, stats: { mental: 2 } } },
          criticalSuccess: { text: "Tu poses des bases solides sans te disperser. Le jour venu, tout sera prêt à démarrer.", reward: { coolness: 8, stats: { mental: 3 }, careerPoints: 6 } },
        },
      },
    ],
  },
  {
    id: 'card-life-dernier-de-generation',
    type: 'life-moment',
    title: 'Le dernier encore debout',
    narrativeText:
      "Un boxeur de ta génération annonce sa retraite. En faisant le compte le soir, tu réalises que tu es le dernier de ceux qui ont débuté en même temps que toi à combattre encore.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-fierte-durer',
        label: 'Y voir la preuve que tu as bien fait les choses',
        statTested: 'mental',
        difficulty: 53,
        outcomes: {
          criticalFailure: { text: "La fierté cède vite à une solitude que tu n'avais pas anticipée.", reward: { coolness: -8 } },
          failure: { text: "Tu y penses un soir, puis tu passes à autre chose.", reward: {} },
          success: { text: "Durer, dans ce sport, est une victoire en soi. Tu te l'accordes enfin.", reward: { coolness: 6, stats: { mental: 2 } } },
          criticalSuccess: { text: "Cette longévité devient une source de force tranquille. Tu sais exactement ce qu'elle a coûté.", reward: { coolness: 9, stats: { mental: 3 }, careerPoints: 6 } },
        },
      },
      {
        id: 'choice-reunir-generation',
        label: 'Reprendre contact avec ceux qui ont arrêté',
        statTested: 'strategie',
        difficulty: 53,
        outcomes: {
          criticalFailure: { text: "Les retrouvailles remuent des rivalités mal éteintes. L'ambiance tourne court.", reward: { coolness: -6 } },
          failure: { text: "Quelques messages échangés, sans suite réelle.", reward: {} },
          success: { text: "Vous vous retrouvez à quelques-uns. Personne d'autre ne peut comprendre ce que vous avez traversé.", reward: { loyalty: 6, coolness: 5 } },
          criticalSuccess: { text: "Ces retrouvailles recréent des liens que tu croyais perdus. Certains deviendront des soutiens précieux pour la suite.", reward: { loyalty: 9, coolness: 8, reputationInternal: 5 } },
        },
      },
    ],
  },
  {
    id: 'card-life-retour-premiere-salle',
    type: 'life-moment',
    title: 'La salle des débuts',
    narrativeText:
      "Tu repasses par hasard devant la salle où tout a commencé. Même odeur, même sac au fond à droite, même bruit. Un gamin s'y entraîne seul, exactement là où tu te tenais il y a vingt ans.",
    requirement: { minRankOrder: 9, weight: 2 },
    choices: [
      {
        id: 'choice-parler-au-gamin',
        label: 'Aller lui parler',
        statTested: 'mental',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "Il ne sait pas qui tu es et l'échange tombe complètement à plat. Tu repars un peu bête.", reward: { coolness: -5 } },
          failure: { text: "Vous échangez trois mots polis. Rien de mémorable.", reward: {} },
          success: { text: "Tu lui donnes le conseil que personne ne t'avait donné à son âge. Il s'en souviendra.", reward: { reputationInternal: 6, loyalty: 4, coolness: 4 } },
          criticalSuccess: { text: "Ce moment simple boucle quelque chose en toi. Tu repars avec une clarté que tu avais perdue.", reward: { reputationInternal: 9, loyalty: 6, coolness: 8, stats: { mental: 2 } } },
        },
      },
      {
        id: 'choice-repartir-silence',
        label: 'Le regarder un moment, puis repartir sans rien dire',
        statTested: 'strategie',
        difficulty: 48,
        outcomes: {
          criticalFailure: { text: "La nostalgie te submerge plus que prévu et te laisse mélancolique des jours entiers.", reward: { coolness: -7 } },
          failure: { text: "Tu repars sans rien ressentir de particulier.", reward: {} },
          success: { text: "Voir d'où tu viens remet tout en perspective. Le chemin parcouru devient soudain très concret.", reward: { coolness: 6, careerPoints: 4 } },
          criticalSuccess: { text: "Ce détour silencieux te rappelle exactement pourquoi tu as commencé. Ça change ta façon d'aborder la suite.", reward: { coolness: 9, careerPoints: 8, stats: { mental: 2 } } },
        },
      },
    ],
  },
]

export const LIFE_MOMENT_CARDS: LifeMomentCard[] = [...EARLY_LIFE_MOMENTS, ...MID_LIFE_MOMENTS, ...LATE_LIFE_MOMENTS]
