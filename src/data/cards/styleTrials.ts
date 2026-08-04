import type { TrainingCard } from '../../engine/types'

// Épreuves difficiles débloquant la technique avancée du style inné (mi-carrière).
// L'échec ne donne rien, mais la carte reste dans le pool et rouvre une chance plus tard.
export const STYLE_TRIAL_CARDS: TrainingCard[] = [
  {
    id: 'card-style-puncher-trial',
    type: 'training',
    title: 'Le poing qui doit tout changer',
    narrativeText:
      "{{mentor}} accroche un sac renforcé, deux fois plus lourd que d'ordinaire, à une chaîne neuve. « Un seul coup. Le bon, ou aucun. »",
    requirement: { requiredStyleId: 'style-puncher', minRankOrder: 5, excludedFlags: ['flag-learned-tech-style-puncher-advanced'], weight: 2 },
    approaches: [
      {
        id: 'approach-seisme',
        label: 'Concentrer toute ta force dans un seul geste',
        statTested: 'puissance',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "Le geste part de travers et te déséquilibre complètement.", reward: { health: -4 } },
          failure: { text: "Le coup ébranle le sac sans plus. Pas encore ça.", reward: { fatigue: 6 } },
          success: {
            text: "Le sac se plie littéralement sous l'impact. Quelque chose vient de se débloquer dans ton geste, pour de bon.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-puncher-advanced'], setFlags: ['flag-learned-tech-style-puncher-advanced'] },
          },
          criticalSuccess: {
            text: "La chaîne elle-même cède sous le choc. {{mentor}} ne dit rien — il n'a pas besoin de le faire.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-puncher-advanced'], setFlags: ['flag-learned-tech-style-puncher-advanced'] },
          },
        },
      },
      {
        id: 'approach-seisme-mental',
        label: 'Viser le seul point exact plutôt que forcer',
        statTested: 'mental',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "L'esprit s'éparpille, et le coup part n'importe où.", reward: { coolness: -5 } },
          failure: { text: "La concentration tient un instant, puis se dérobe.", reward: { fatigue: 6 } },
          success: {
            text: "Tu vises un seul point précis, l'esprit totalement vide de tout le reste — et le sac se plie.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-puncher-advanced'], setFlags: ['flag-learned-tech-style-puncher-advanced'] },
          },
          criticalSuccess: {
            text: "Ta concentration est si totale que le coup semble se déclencher tout seul. {{mentor}} hoche la tête, satisfait.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-puncher-advanced'], setFlags: ['flag-learned-tech-style-puncher-advanced'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-style-boxeur-puncher-trial',
    type: 'training',
    title: 'La tempête à composer',
    narrativeText:
      "{{mentor}} multiplie les mitaines tenues par trois assistants différents, à des hauteurs et des angles changeants. « Trouve l'ordre. Il change à chaque fois. »",
    requirement: { requiredStyleId: 'style-boxeur-puncher', minRankOrder: 5, excludedFlags: ['flag-learned-tech-style-boxeur-puncher-advanced'], weight: 2 },
    approaches: [
      {
        id: 'approach-tempete',
        label: 'Lire les angles en temps réel',
        statTested: 'technique',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "Tu perds complètement le fil de l'enchaînement dès le second angle.", reward: { coolness: -5 } },
          failure: { text: "Tu touches deux mitaines sur trois. Pas assez.", reward: { fatigue: 6 } },
          success: {
            text: "Tu touches chaque mitaine dans l'ordre exact où elle apparaît, sans jamais réfléchir consciemment.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-boxeur-puncher-advanced'], setFlags: ['flag-learned-tech-style-boxeur-puncher-advanced'] },
          },
          criticalSuccess: {
            text: "Les trois assistants n'arrivent plus à te surprendre, quel que soit l'ordre qu'ils tentent. Le geste est devenu instinctif.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-boxeur-puncher-advanced'], setFlags: ['flag-learned-tech-style-boxeur-puncher-advanced'] },
          },
        },
      },
      {
        id: 'approach-tempete-vitesse',
        label: 'Aller plus vite que le changement d\'angle lui-même',
        statTested: 'vitesse',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "Tu arrives toujours une mitaine en retard sur le changement d'angle.", reward: { fatigue: 8 } },
          failure: { text: "Tu suis le rythme, mais jamais assez vite pour toutes les toucher.", reward: { fatigue: 6 } },
          success: {
            text: "Tu deviens plus rapide que le changement d'angle lui-même — chaque mitaine est touchée avant d'avoir fini de bouger.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-boxeur-puncher-advanced'], setFlags: ['flag-learned-tech-style-boxeur-puncher-advanced'] },
          },
          criticalSuccess: {
            text: "Les trois assistants renoncent à te surprendre par la vitesse : tu es déjà là avant qu'ils y pensent.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-boxeur-puncher-advanced'], setFlags: ['flag-learned-tech-style-boxeur-puncher-advanced'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-style-out-boxer-trial',
    type: 'training',
    title: 'Le mirage à maîtriser',
    narrativeText:
      "{{mentor}} te fait évoluer entouré de quatre partenaires qui tentent, chacun leur tour et sans prévenir, de couper ta trajectoire. « Ils ne doivent jamais savoir où tu seras. »",
    requirement: { requiredStyleId: 'style-out-boxer', minRankOrder: 5, excludedFlags: ['flag-learned-tech-style-out-boxer-advanced'], weight: 2 },
    approaches: [
      {
        id: 'approach-mirage',
        label: 'Multiplier les feintes de déplacement',
        statTested: 'vitesse',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "Tu te fais couper la route dès le premier essai, en pleine confusion.", reward: { coolness: -5 } },
          failure: { text: "Tu t'en sors, mais sans jamais vraiment les surprendre.", reward: { fatigue: 6 } },
          success: {
            text: "Aucun des quatre partenaires ne parvient plus à anticiper où tu seras la seconde suivante.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-out-boxer-advanced'], setFlags: ['flag-learned-tech-style-out-boxer-advanced'] },
          },
          criticalSuccess: {
            text: "Ils finissent par se percuter entre eux à force de te chercher. {{mentor}} peine à retenir un sourire.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-out-boxer-advanced'], setFlags: ['flag-learned-tech-style-out-boxer-advanced'] },
          },
        },
      },
      {
        id: 'approach-mirage-strategie',
        label: 'Anticiper leur schéma plutôt que courir plus vite',
        statTested: 'strategie',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "Le schéma que tu croyais voir n'existait pas. Ils te coupent la route sans effort.", reward: { coolness: -5 } },
          failure: { text: "Tu perçois un début de logique, sans pouvoir vraiment l'exploiter.", reward: { fatigue: 6 } },
          success: {
            text: "Tu comprends l'ordre dans lequel ils vont bouger avant même qu'ils s'élancent.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-out-boxer-advanced'], setFlags: ['flag-learned-tech-style-out-boxer-advanced'] },
          },
          criticalSuccess: {
            text: "Tu sembles toujours avoir un coup d'avance sur leur plan. {{mentor}} note la scène pour la montrer aux futurs élèves.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-out-boxer-advanced'], setFlags: ['flag-learned-tech-style-out-boxer-advanced'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-style-presseur-trial',
    type: 'training',
    title: 'Le mur qui avance',
    narrativeText:
      "{{mentor}} t'installe face à deux partenaires en garde, côte à côte, avec une seule consigne : avancer, sans jamais reculer d'un pas, quoi qu'ils tentent.",
    requirement: { requiredStyleId: 'style-presseur', minRankOrder: 5, excludedFlags: ['flag-learned-tech-style-presseur-advanced'], weight: 2 },
    approaches: [
      {
        id: 'approach-mur',
        label: "Ne jamais céder un pouce de terrain",
        statTested: 'endurance',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "Tu recules malgré toi dès la première vague de coups.", reward: { fatigue: 10, health: -3 } },
          failure: { text: "Tu tiens, mais en reculant légèrement à plusieurs reprises.", reward: { fatigue: 7 } },
          success: {
            text: "Tu ne cèdes pas un centimètre jusqu'à ce que les deux partenaires, épuisés, lèvent les gants les premiers.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-presseur-advanced'], setFlags: ['flag-learned-tech-style-presseur-advanced'] },
          },
          criticalSuccess: {
            text: "Tu avances même pendant qu'ils frappent. {{mentor}} n'avait jamais vu ça, pas même chez ses meilleurs élèves.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-presseur-advanced'], setFlags: ['flag-learned-tech-style-presseur-advanced'] },
          },
        },
      },
      {
        id: 'approach-mur-mental',
        label: 'Tenir par la tête quand le corps veut céder',
        statTested: 'mental',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "Le doute s'installe dès la première vague, et les jambes suivent aussitôt.", reward: { coolness: -6 } },
          failure: { text: "Tu tiens par volonté, mais ça se voit que ça coûte.", reward: { fatigue: 7 } },
          success: {
            text: "Tu refuses simplement, mentalement, l'idée même de reculer — et le corps suit.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-presseur-advanced'], setFlags: ['flag-learned-tech-style-presseur-advanced'] },
          },
          criticalSuccess: {
            text: "Rien ne semble pouvoir entamer ta détermination. Les deux partenaires cèdent avant toi, de loin.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-presseur-advanced'], setFlags: ['flag-learned-tech-style-presseur-advanced'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-style-contreur-trial',
    type: 'training',
    title: 'Le détail avant la chute',
    narrativeText:
      "{{mentor}} te fait visionner, encore et encore, un ralenti d'un boxeur professionnel juste avant qu'il ne place son coup le plus dangereux. « Le détail est là. Trouve-le, et le reste suivra. »",
    requirement: { requiredStyleId: 'style-contreur', minRankOrder: 5, excludedFlags: ['flag-learned-tech-style-contreur-advanced'], weight: 2 },
    approaches: [
      {
        id: 'approach-silence',
        label: 'Isoler le détail qui précède le coup',
        statTested: 'reflexes',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "Tu ne vois que du bruit, aucun signal clair ne se détache.", reward: { coolness: -5 } },
          failure: { text: "Tu crois voir quelque chose, sans certitude suffisante.", reward: { fatigue: 4 } },
          success: {
            text: "Le détail t'apparaît enfin, net : une microseconde, dans l'épaule, qui précède toujours le geste.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-contreur-advanced'], setFlags: ['flag-learned-tech-style-contreur-advanced'] },
          },
          criticalSuccess: {
            text: "Tu le vois désormais avant même que {{mentor}} ne relance la vidéo. Le geste, en toi, est prêt à répondre.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-contreur-advanced'], setFlags: ['flag-learned-tech-style-contreur-advanced'] },
          },
        },
      },
      {
        id: 'approach-silence-strategie',
        label: 'Décomposer la séquence complète plutôt qu\'un seul détail',
        statTested: 'strategie',
        difficulty: 62,
        outcomes: {
          criticalFailure: { text: "La séquence entière t'échappe, trop de détails à la fois.", reward: { coolness: -5 } },
          failure: { text: "Tu identifies une partie du schéma, sans le tenir en entier.", reward: { fatigue: 4 } },
          success: {
            text: "Tu reconstruis toute la mécanique du geste, du premier appui jusqu'au poing. Rien ne t'échappe plus.",
            reward: { careerPoints: 10, unlockTechniqueIds: ['tech-style-contreur-advanced'], setFlags: ['flag-learned-tech-style-contreur-advanced'] },
          },
          criticalSuccess: {
            text: "Tu pourrais décrire le geste toi-même, à l'avance, mieux que {{mentor}} ne le fait sur l'écran.",
            reward: { careerPoints: 14, unlockTechniqueIds: ['tech-style-contreur-advanced'], setFlags: ['flag-learned-tech-style-contreur-advanced'] },
          },
        },
      },
    ],
  },
]
