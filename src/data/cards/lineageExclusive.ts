import type { LineageExclusiveCard } from '../../engine/types'
import { LINEAGE_MAP } from '../lineages'

function tech(lineageId: string): string {
  return LINEAGE_MAP[lineageId].secretTechniqueId!
}

const REQ = { requiredFlags: ['flag-turned-pro'], onceOnly: true }

export const LINEAGE_EXCLUSIVE_CARDS: LineageExclusiveCard[] = [
  {
    id: 'card-lineage-kurogane',
    type: 'lineage-exclusive',
    lineageId: 'lin-kurogane',
    title: 'Le marteau et le bois',
    narrativeText:
      "Jin Kurogane t'emmène derrière la salle, devant une pile de planches usées par des années de coups. « Le sac, dit-il, ça pardonne. Le bois, non. » Il te tend un gant renforcé et recule.",
    requirement: { ...REQ, requiredLineageId: 'lin-kurogane' },
    leadsToTechniqueId: tech('lin-kurogane'),
    choices: [
      {
        id: 'choice-force',
        label: 'Frapper de toutes tes forces',
        statTested: 'puissance',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Le coup part mal placé. Tes phalanges protestent, et Kurogane secoue la tête, pas fâché — juste pas surpris.",
            reward: { health: -4 },
          },
          failure: {
            text: "La planche plie sans se fendre. « Encore, dit-il simplement. Encore. »",
            reward: {},
          },
          success: {
            text: "Le bois cède dans un craquement sec. Kurogane hoche la tête une seule fois — c'est, chez lui, un compliment.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-kurogane')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Le bois explose en éclats. Pour la première fois, Kurogane laisse échapper quelque chose qui ressemble à de la fierté.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-kurogane')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
      {
        id: 'choice-viser-point',
        label: 'Viser un seul point précis plutôt que forcer',
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "L'esprit s'éparpille au dernier instant, et le coup part sans direction claire.",
            reward: { health: -4 },
          },
          failure: {
            text: "La planche plie sans se fendre. « Encore », répète Kurogane, imperturbable.",
            reward: {},
          },
          success: {
            text: "Tu vises un seul point, l'esprit vide de tout le reste — et le bois cède, net.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-kurogane')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Ta concentration est si totale que le coup semble se déclencher sans toi. Kurogane laisse échapper quelque chose qui ressemble à de la fierté.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-kurogane')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
    ],
  },
  {
    id: 'card-lineage-fujimori',
    type: 'lineage-exclusive',
    lineageId: 'lin-fujimori',
    title: "L'épreuve de la craie",
    narrativeText:
      "Sae Fujimori trace une ligne blanche minuscule sur un sac de frappe suspendu. « Touche-la. Seulement elle. » Aucune marge d'erreur n'est tolérée dans cette salle.",
    requirement: { ...REQ, requiredLineageId: 'lin-fujimori' },
    leadsToTechniqueId: tech('lin-fujimori'),
    choices: [
      {
        id: 'choice-precision',
        label: 'Viser la ligne exacte',
        statTested: 'technique',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Le coup part complètement à côté. Fujimori ne dit rien — le silence est pire que n'importe quel reproche.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "Tu touches le sac, mais loin de la ligne. « Recommence », dit-elle, sans lever les yeux.",
            reward: {},
          },
          success: {
            text: "Le poing s'écrase pile sur la craie. Fujimori referme son carnet de notes, satisfaite.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-fujimori')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Le coup efface la ligne entière, sans déborder d'un millimètre. Fujimori referme son carnet et, pour une fois, sourit.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-fujimori')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
      {
        id: 'choice-timing',
        label: "Attendre l'instant exact plutôt que répéter le geste",
        statTested: 'reflexes',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Tu frappes trop tôt, avant que le sac ne se stabilise. Fujimori referme son carnet sans un mot.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "Le timing reste approximatif. « Recommence », dit-elle, sans lever les yeux.",
            reward: {},
          },
          success: {
            text: "Tu attends que le sac s'immobilise exactement, et places le coup dans cette fraction de seconde parfaite.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-fujimori')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Ton timing est si exact que Fujimori vérifie deux fois son chronomètre. Elle referme son carnet et, pour une fois, sourit.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-fujimori')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
    ],
  },
  {
    id: 'card-lineage-otsuka',
    type: 'lineage-exclusive',
    lineageId: 'lin-otsuka',
    title: 'Le carnet fermé',
    narrativeText:
      "Ryo Otsuka pose devant toi un carnet rempli de notes sur un boxeur que tu n'as jamais affronté. « Dans dix minutes, je te demande comment il combat. Sans l'avoir vu bouger une seule fois. »",
    requirement: { ...REQ, requiredLineageId: 'lin-otsuka' },
    leadsToTechniqueId: tech('lin-otsuka'),
    choices: [
      {
        id: 'choice-analyse',
        label: 'Décortiquer chaque ligne du carnet',
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Tu mélanges les informations et proposes un portrait qui ne ressemble à rien. Otsuka referme le carnet sans un mot.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "Ton portrait est approximatif — juste assez pour qu'Otsuka comprenne que tu as essayé.",
            reward: {},
          },
          success: {
            text: "Ton analyse tient debout, détail après détail. Otsuka referme le carnet, presque impressionné.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-otsuka')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Tu devines même une habitude qu'Otsuka n'avait pas notée. Il te regarde différemment, à partir de maintenant.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-otsuka')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
      {
        id: 'choice-reconstruire-plan',
        label: 'Reconstruire un plan de combat complet, pas juste un portrait',
        statTested: 'strategie',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Le plan que tu construis part dans tous les sens, sans queue ni tête. Otsuka referme le carnet sans un mot.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "Le plan tient à moitié, avec des trous que tu ne sais pas combler.",
            reward: {},
          },
          success: {
            text: "Tu proposes un vrai plan, round par round, cohérent du début à la fin. Otsuka referme le carnet, presque impressionné.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-otsuka')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Ton plan anticipe même les ajustements que l'adversaire ferait en cours de combat. Otsuka te regarde différemment, à partir de maintenant.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-otsuka')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
    ],
  },
  {
    id: 'card-lineage-shirasagi',
    type: 'lineage-exclusive',
    lineageId: 'lin-shirasagi',
    title: 'La ligne de craie mouvante',
    narrativeText:
      "Ren Shirasagi trace une ligne sinueuse sur le tapis et te fait signe de la suivre à pleine vitesse, sans jamais poser un pied en dehors. « Le héron ne tombe jamais. Toi, si — pour l'instant. »",
    requirement: { ...REQ, requiredLineageId: 'lin-shirasagi' },
    leadsToTechniqueId: tech('lin-shirasagi'),
    choices: [
      {
        id: 'choice-vitesse',
        label: 'Suivre la ligne à pleine vitesse',
        statTested: 'vitesse',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Tu sors de la ligne dès le second virage et manques de perdre l'équilibre complètement.",
            reward: { health: -3 },
          },
          failure: {
            text: "Tu tiens la ligne, mais à un rythme bien trop prudent pour impressionner qui que ce soit.",
            reward: {},
          },
          success: {
            text: "Tes pieds suivent la ligne sans jamais la quitter. Shirasagi acquiesce, léger comme toujours.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-shirasagi')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Tu doubles la vitesse demandée sans jamais dévier. Pour la première fois, Shirasagi peine à cacher sa surprise.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-shirasagi')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
      {
        id: 'choice-adapter-tracee',
        label: "S'adapter aux virages plutôt que forcer le rythme",
        statTested: 'reflexes',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Un virage inattendu te prend totalement de court, et tu sors largement de la ligne.",
            reward: { health: -3 },
          },
          failure: {
            text: "Tu t'adaptes, mais toujours un instant trop tard sur chaque virage.",
            reward: {},
          },
          success: {
            text: "Tu réagis à chaque virage l'instant où il se dessine, sans jamais anticiper à tort.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-shirasagi')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Tu sembles connaître le tracé avant même que Shirasagi ne le dessine. Il peine à cacher sa surprise.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-shirasagi')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
    ],
  },
  {
    id: 'card-lineage-domon',
    type: 'lineage-exclusive',
    lineageId: 'lin-domon',
    title: 'La série sans fin',
    narrativeText:
      "Kenji Domon enfile les pattes d'ours et se plante devant toi. « Je vais frapper. Tu vas rester. On s'arrête quand je le dis, pas avant. » Ce n'est pas vraiment une proposition.",
    requirement: { ...REQ, requiredLineageId: 'lin-domon' },
    leadsToTechniqueId: tech('lin-domon'),
    choices: [
      {
        id: 'choice-tenir',
        label: 'Tenir la position, coûte que coûte',
        statTested: 'endurance',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Tes jambes cèdent avant celles de Domon. Il arrête aussitôt, sans un mot de reproche — le silence suffit.",
            reward: { fatigue: 12, health: -4 },
          },
          failure: {
            text: "Tu tiens, mais tu recules de deux pas que Domon a certainement comptés.",
            reward: { fatigue: 8 },
          },
          success: {
            text: "Tu ne bouges pas d'un centimètre jusqu'à ce qu'il arrête lui-même, à bout de souffle avant toi.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-domon')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Domon finit par baisser les gants le premier. « Bon », lâche-t-il — le mot le plus long qu'il t'ait jamais adressé après un exercice.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-domon')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
      {
        id: 'choice-refuser-ceder',
        label: 'Refuser mentalement l\'idée même de reculer',
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Le doute s'installe avant même la fatigue, et tes jambes suivent aussitôt. Domon arrête sans un mot.",
            reward: { fatigue: 12, health: -4 },
          },
          failure: {
            text: "Tu tiens par volonté, mais deux pas trahissent ta fatigue.",
            reward: { fatigue: 8 },
          },
          success: {
            text: "Tu décides, simplement, que reculer n'est pas une option — et le corps suit la décision.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-domon')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Rien ne semble pouvoir entamer ta détermination. Domon baisse les gants le premier. « Bon », lâche-t-il.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-domon')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
    ],
  },
  {
    id: 'card-lineage-akatsu',
    type: 'lineage-exclusive',
    lineageId: 'lin-akatsu',
    title: 'Le sparring sans règles',
    narrativeText:
      "Ichiro Akatsu ne t'annonce ni round ni consignes. Il enfile juste ses gants et attend. « Personne ne t'annoncera rien, dehors. Alors ici non plus. »",
    requirement: { ...REQ, requiredLineageId: 'lin-akatsu' },
    leadsToTechniqueId: tech('lin-akatsu'),
    choices: [
      {
        id: 'choice-instinct',
        label: "Répondre à l'instinct plutôt qu'à la technique",
        statTested: 'reflexes',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Tu réagis une seconde trop tard, encore et encore. Akatsu finit par lever la main : « Ça suffit pour aujourd'hui. »",
            reward: { health: -4 },
          },
          failure: {
            text: "Tu tiens le rythme sans jamais vraiment le prendre. Akatsu grommelle, pas convaincu.",
            reward: {},
          },
          success: {
            text: "Tu commences à anticiper avant même de comprendre comment. Akatsu s'arrête, un sourire en coin.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-akatsu')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Tu le touches une fois, proprement. Akatsu recule, retire ses gants, et pour la première fois, te parle comme à un égal.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-akatsu')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
      {
        id: 'choice-imposer-force',
        label: 'Imposer ta force brute, sans réfléchir',
        statTested: 'puissance',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Tu fonces sans discernement, et Akatsu te le fait payer sans ménagement.",
            reward: { health: -4 },
          },
          failure: {
            text: "Tu pousses, mais Akatsu absorbe sans problème.",
            reward: {},
          },
          success: {
            text: "Ta force finit par peser dans l'échange, sans qu'aucune technique n'y soit vraiment pour quelque chose.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-akatsu')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Akatsu recule, surpris par la puissance brute. « Voilà, dit-il enfin, un truc qu'on n'enseigne pas. »",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-akatsu')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
    ],
  },
  {
    id: 'card-lineage-himura',
    type: 'lineage-exclusive',
    lineageId: 'lin-himura',
    title: "L'appât",
    narrativeText:
      "Kaoru Himura te demande de garder volontairement une ouverture dans ta garde, encore et encore, jusqu'à ce qu'il vienne la chercher. « Le piège qui se voit n'en est plus un. Recommence. »",
    requirement: { ...REQ, requiredLineageId: 'lin-himura' },
    leadsToTechniqueId: tech('lin-himura'),
    choices: [
      {
        id: 'choice-patience',
        label: 'Attendre le bon instant pour refermer le piège',
        statTested: 'reflexes',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Tu refermes trop tôt, à vide, une fois de plus. Himura ne dit rien — il attend juste que tu recommences.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "Le timing reste imparfait. « Presque », dit Himura, ce qui, chez lui, n'est pas un compliment.",
            reward: {},
          },
          success: {
            text: "Le piège se referme exactement quand il le fallait. Himura hoche la tête, satisfait pour la première fois de la séance.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-himura')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Le piège se referme si parfaitement qu'Himura reste interdit un instant. « Voilà, dit-il enfin. C'est exactement ça. »",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-himura')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
      {
        id: 'choice-preparer-piege',
        label: "Préparer le piège à l'avance plutôt que compter sur le réflexe",
        statTested: 'strategie',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Le piège que tu as préparé est trop lisible. Himura ne mord jamais.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "L'idée est là, mais l'exécution reste maladroite.",
            reward: {},
          },
          success: {
            text: "Tu as pensé le piège trois coups à l'avance, et il se referme exactement comme prévu.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-himura')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Le piège est si bien pensé qu'Himura met un instant à comprendre qu'il vient de s'y faire prendre. « Voilà. C'est exactement ça. »",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-himura')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
    ],
  },
  {
    id: 'card-lineage-nishikido',
    type: 'lineage-exclusive',
    lineageId: 'lin-nishikido',
    title: 'La partie sur le papier',
    narrativeText:
      "Gen Nishikido étale sur la table un schéma de combat entier, coup par coup, comme une partie d'échecs. « Trouve la faille. Il n'y en a qu'une. »",
    requirement: { ...REQ, requiredLineageId: 'lin-nishikido' },
    leadsToTechniqueId: tech('lin-nishikido'),
    choices: [
      {
        id: 'choice-plan',
        label: 'Chercher la faille méthodiquement',
        statTested: 'strategie',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Tu proposes une ouverture qui n'existe pas. Nishikido replie le schéma sans un commentaire.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "Tu approches de la bonne réponse sans vraiment la trouver.",
            reward: {},
          },
          success: {
            text: "Tu pointes la faille exacte. Nishikido referme son carnet avec un signe de tête satisfait.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-nishikido')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Tu trouves la faille, puis une seconde qu'il n'avait pas prévue. Nishikido referme son carnet en silence, visiblement en train de recalculer quelque chose.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-nishikido')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
      {
        id: 'choice-executer-schema',
        label: 'Exécuter le schéma à mains nues plutôt que sur papier',
        statTested: 'technique',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Le geste ne correspond à rien de ce qui est écrit sur le papier. Nishikido replie le schéma sans un mot.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "L'exécution reste approximative, loin de la précision du schéma.",
            reward: {},
          },
          success: {
            text: "Tu reproduis le schéma exactement, geste pour geste, jusqu'à la faille qu'il décrit.",
            reward: {
              careerPoints: 14,
              reputationInternal: 6,
              unlockTechniqueIds: [tech('lin-nishikido')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Ton exécution est si propre qu'elle semble sortie du carnet lui-même. Nishikido referme celui-ci, visiblement en train de recalculer quelque chose.",
            reward: {
              careerPoints: 18,
              reputationInternal: 10,
              unlockTechniqueIds: [tech('lin-nishikido')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
    ],
  },
  {
    id: 'card-lineage-tsukimori',
    type: 'lineage-exclusive',
    lineageId: 'lin-tsukimori',
    title: 'La salle qui regarde',
    narrativeText:
      "Aya Tsukimori a rempli la salle de curieux pour l'occasion. « Un bon coup se voit. Un grand coup se ressent jusqu'au fond de la salle. Fais-le sentir. »",
    requirement: { ...REQ, requiredLineageId: 'lin-tsukimori' },
    leadsToTechniqueId: tech('lin-tsukimori'),
    choices: [
      {
        id: 'choice-spectacle',
        label: 'Électriser la salle',
        statTested: 'mental',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Le geste retombe à plat devant un public silencieux. Tsukimori grimace, plus pour toi que pour elle-même.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "Quelques applaudissements polis, sans plus. « On peut mieux faire », glisse Tsukimori.",
            reward: {},
          },
          success: {
            text: "La salle réagit, franchement. Tsukimori sourit, satisfaite de l'effet produit.",
            reward: {
              careerPoints: 14,
              reputationExternal: 6,
              unlockTechniqueIds: [tech('lin-tsukimori')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "La salle explose littéralement. Tsukimori lève les bras la première, ravie : « Voilà. C'est exactement ça, un champion. »",
            reward: {
              careerPoints: 18,
              reputationExternal: 10,
              unlockTechniqueIds: [tech('lin-tsukimori')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
      {
        id: 'choice-propre-spectaculaire',
        label: 'Miser sur la propreté du geste plutôt que sur l\'effet',
        statTested: 'technique',
        difficulty: 55,
        outcomes: {
          criticalFailure: {
            text: "Le geste, trop retenu, ne dit rien au public. Tsukimori grimace, plus pour toi que pour elle-même.",
            reward: { coolness: -4 },
          },
          failure: {
            text: "Le geste est correct, mais n'impressionne personne. « On peut mieux faire », glisse Tsukimori.",
            reward: {},
          },
          success: {
            text: "La propreté même du geste finit par électriser la salle, sans qu'il ait eu besoin d'en rajouter.",
            reward: {
              careerPoints: 14,
              reputationExternal: 6,
              unlockTechniqueIds: [tech('lin-tsukimori')],
              entourageDelta: [{ role: 'Mentor', delta: 1 }],
            },
          },
          criticalSuccess: {
            text: "Le geste est si net que la salle comprend d'instinct qu'elle vient de voir quelque chose de rare. Tsukimori lève les bras la première.",
            reward: {
              careerPoints: 18,
              reputationExternal: 10,
              unlockTechniqueIds: [tech('lin-tsukimori')],
              entourageDelta: [{ role: 'Mentor', delta: 2 }],
            },
          },
        },
      },
    ],
  },
]
