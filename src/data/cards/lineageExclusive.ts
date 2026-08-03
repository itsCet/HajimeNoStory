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
    ],
  },
]
