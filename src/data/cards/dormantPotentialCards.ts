import type { LifeMomentCard, DormantPotentialCard } from '../../engine/types'

export const FAUVE_REVEAL_CARD: LifeMomentCard = {
  id: 'card-fauve-reveal',
  type: 'life-moment',
  title: 'Quelque chose a bougé',
  narrativeText:
    "Dans les dernières secondes d'un round, acculé, quelque chose s'est réveillé en toi que tu n'avais jamais senti auparavant — une clarté violente, presque animale, qui a pris les commandes une fraction de seconde de trop pour être un hasard. {{mentor}} t'a regardé redescendre les marches du ring sans dire un mot, mais son regard, lui, avait tout vu.",
  requirement: {},
  choices: [
    {
      id: 'choice-ressentir',
      label: "Essayer de comprendre ce que c'était",
      statTested: 'mental',
      difficulty: 40,
      outcomes: {
        criticalFailure: {
          text: "Plus tu y penses, plus la sensation t'échappe, comme un mot qu'on a sur le bout de la langue.",
          reward: { coolness: -5 },
        },
        failure: { text: "Tu n'arrives pas vraiment à remettre le doigt dessus.", reward: {} },
        success: {
          text: "Ce n'était pas de la rage, ni de la peur. Quelque chose de plus ancien, tapi, qui attendait son heure depuis toujours.",
          reward: { coolness: 3 },
        },
        criticalSuccess: {
          text: "Tu sens presque son contour maintenant — une présence, en toi, qui n'attend qu'une chose : qu'on vienne la chercher.",
          reward: { coolness: 5, stats: { mental: 2 } },
        },
      },
    },
  ],
}

export const FAUVE_CHOICE_CARD: DormantPotentialCard = {
  id: 'card-fauve-choice',
  type: 'dormant-potential',
  title: 'Le Fauve',
  narrativeText:
    "Il ne s'est plus manifesté depuis ce round-là — mais tu sais désormais qu'il est là, quelque part sous la surface, avec sa propre volonté. Ce qu'il attend de toi n'a rien d'ambigu : que tu choisisses, une bonne fois, ce que vous allez devenir l'un pour l'autre.",
  requirement: {},
  doors: [
    {
      id: 'force',
      label: 'Le prendre de force',
      resultText:
        "Tu cesses de le fuir et vas le chercher toi-même, sans détour. Ce qui remonte alors n'a plus rien de discret.",
      reward: {},
    },
    {
      id: 'negotiate',
      label: 'Négocier tes conditions',
      resultText:
        "Tu poses tes propres limites avant de le laisser entrer — un pacte plutôt qu'une reddition.",
      reward: {},
    },
    {
      id: 'decline',
      label: 'Partir sans rien',
      resultText:
        "Tu tournes le dos à ce qui t'a été offert. La porte se referme pour de bon, et quelque chose en toi reste, durablement, plus froid qu'avant.",
      reward: {},
    },
  ],
}
