import type { FightCard } from '../../engine/types'
import { GESTURE_TECHNIQUES } from './gestureTechniques'
import { RANK_MAP } from '../ranks'

const CHAMPION_ORDER = RANK_MAP['rank-champion-monde'].order

// Boucle de fin de carrière : une fois champion du monde, ces combats reviennent
// régulièrement dans le pool. Chaque victoire compte comme une défense de titre ;
// l'âge et la fatigue accumulée rendent chaque nouvelle défense plus risquée.
export const TITLE_DEFENSE_CARDS: FightCard[] = [
  {
    id: 'card-fight-mondial-encaissement',
    type: 'fight',
    title: 'Défense de titre — le mur',
    narrativeText:
      "Le prétendant du jour a bâti sa réputation sur une seule qualité : il ne tombe jamais. Douze rounds prévus, et l'intention affichée de tous les tenir.",
    opponentName: 'Un prétendant increvable',
    opponentTagline: 'Il ne tombe jamais. Officiellement, en tout cas.',
    requirement: { minRankOrder: CHAMPION_ORDER, excludedFlags: ['discovered:tech-generic-encaissement-total'], weight: 2 },
    gestures: [
      {
        id: 'g-defense-encaisser',
        label: "Tenir la distance sans faiblir",
        statTested: 'endurance',
        difficulty: 74,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.endurance,
        outcomes: {
          criticalFailure: { text: "Le rythme qu'il impose finit par avoir raison de toi plus vite que prévu.", reward: { health: -16, fatigue: 14 } },
          failure: { text: "Tu tiens, difficilement, jusqu'à la limite.", reward: { fatigue: 14 } },
          success: {
            text: "Tu encaisses tout ce qu'il a à offrir sans jamais vraiment vaciller. Sa légende de l'increvable s'arrête ce soir-là.",
            reward: { careerPoints: 22, reputationExternal: 14, titleDefenseWin: true, unlockTechniqueIds: ['tech-generic-encaissement-total'], setFlags: ['discovered:tech-generic-encaissement-total'] },
          },
          criticalSuccess: {
            text: "C'est lui, finalement, qui craque le premier — sous tes yeux, incrédule de sa propre limite enfin atteinte.",
            reward: { careerPoints: 30, reputationExternal: 20, titleDefenseWin: true, unlockTechniqueIds: ['tech-generic-encaissement-total'], setFlags: ['discovered:tech-generic-encaissement-total'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-fight-mondial-poing-final',
    type: 'fight',
    title: 'Défense de titre — le finisseur',
    narrativeText:
      "Un puncher pur, classé pour ses seuls poings, monte sur le ring avec l'intention affichée de ne pas laisser le combat aller à la carte des juges.",
    opponentName: 'Un puncher pur et dangereux',
    opponentTagline: "Il ne veut pas de décision. Il veut un knock-out.",
    requirement: { minRankOrder: CHAMPION_ORDER, excludedFlags: ['discovered:tech-generic-poing-point-final'], weight: 2 },
    gestures: [
      {
        id: 'g-defense-finir',
        label: 'Prendre le risque de conclure toi-même',
        statTested: 'puissance',
        difficulty: 76,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.puissance,
        outcomes: {
          criticalFailure: { text: "L'échange de puissance tourne largement en sa faveur. Le round est difficile à encaisser.", reward: { health: -18, coolness: -8 } },
          failure: { text: "L'échange reste dangereux pour les deux, sans décision nette.", reward: { fatigue: 12, health: -6 } },
          success: {
            text: "Tout ce que tu as construit dans ce combat converge enfin dans un seul poing. La décision n'ira pas jusqu'aux juges.",
            reward: { careerPoints: 24, reputationExternal: 16, titleDefenseWin: true, unlockTechniqueIds: ['tech-generic-poing-point-final'], setFlags: ['discovered:tech-generic-poing-point-final'] },
          },
          criticalSuccess: {
            text: "Le coup met fin à toute discussion, littéralement. Le prétendant finisseur découvre, à ses dépens, ce qu'est un vrai point final.",
            reward: { careerPoints: 32, reputationExternal: 22, titleDefenseWin: true, unlockTechniqueIds: ['tech-generic-poing-point-final'], setFlags: ['discovered:tech-generic-poing-point-final'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-fight-titre-sang-froid',
    type: 'fight',
    title: 'Défense de titre — le provocateur',
    narrativeText:
      "Un prétendant connu pour ses provocations avant et pendant le combat, cherchant systématiquement à faire sortir ses adversaires de leur match mental.",
    opponentName: 'Un provocateur redoutable',
    opponentTagline: 'Il gagne autant avec sa bouche qu\'avec ses poings.',
    requirement: { minRankOrder: CHAMPION_ORDER, excludedFlags: ['discovered:tech-generic-sang-froid-glacial'], weight: 2 },
    gestures: [
      {
        id: 'g-defense-calme',
        label: 'Ignorer totalement la provocation',
        statTested: 'mental',
        difficulty: 74,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.mental,
        outcomes: {
          criticalFailure: { text: "La provocation finit par te faire sortir de ton match. Le combat devient chaotique, à son avantage.", reward: { coolness: -12, health: -10 } },
          failure: { text: "Tu résistes tant bien que mal aux provocations, sans jamais vraiment prendre le dessus.", reward: { coolness: -4, fatigue: 10 } },
          success: {
            text: "Rien de ce qu'il dit ou fait ne t'atteint. Frustré de ne trouver aucune prise, il commet l'erreur que tu attendais.",
            reward: { careerPoints: 22, reputationExternal: 14, titleDefenseWin: true, unlockTechniqueIds: ['tech-generic-sang-froid-glacial'], setFlags: ['discovered:tech-generic-sang-froid-glacial'] },
          },
          criticalSuccess: {
            text: "Ton calme absolu devient, lui-même, la meilleure provocation possible. Il perd tous ses moyens avant même le milieu du combat.",
            reward: { careerPoints: 30, reputationExternal: 20, titleDefenseWin: true, unlockTechniqueIds: ['tech-generic-sang-froid-glacial'], setFlags: ['discovered:tech-generic-sang-froid-glacial'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-fight-defense-anticipation',
    type: 'fight',
    title: 'Défense de titre — le mystère',
    narrativeText:
      "Un prétendant venu d'un circuit peu documenté, dont personne dans ton camp n'a réussi à trouver suffisamment d'images pour bâtir un vrai plan de combat.",
    opponentName: 'Un prétendant peu documenté',
    opponentTagline: 'Personne, dans ton camp, ne sait vraiment à quoi s\'attendre.',
    requirement: { minRankOrder: CHAMPION_ORDER, excludedFlags: ['discovered:tech-generic-anticipation-parfaite'], weight: 2 },
    gestures: [
      {
        id: 'g-defense-lire',
        label: "Lire le combat en direct, sans plan préétabli",
        statTested: 'reflexes',
        difficulty: 76,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.reflexes,
        outcomes: {
          criticalFailure: {
            text: "L'inconnu joue clairement en sa faveur. Un coup que tu n'as pas vu venir te touche en plein visage — la vision, de ce côté, reste trouble bien après le combat.",
            reward: { health: -16, coolness: -8, unlockTrophyIds: ['mark-retine-fragile'] },
          },
          failure: { text: "Tu t'adaptes progressivement, mais avec retard sur chaque nouveauté.", reward: { fatigue: 12 } },
          success: {
            text: "Des années de combats t'ont appris à lire n'importe quel style en temps réel. L'inconnu cesse rapidement d'en être un.",
            reward: { careerPoints: 24, reputationExternal: 16, titleDefenseWin: true, unlockTechniqueIds: ['tech-generic-anticipation-parfaite'], setFlags: ['discovered:tech-generic-anticipation-parfaite'] },
          },
          criticalSuccess: {
            text: "Tu sembles réagir avant même qu'il ait terminé de bouger. Le mystère, pour tout le monde sauf toi, reste entier.",
            reward: { careerPoints: 32, reputationExternal: 22, titleDefenseWin: true, unlockTechniqueIds: ['tech-generic-anticipation-parfaite'], setFlags: ['discovered:tech-generic-anticipation-parfaite'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-fight-defense-veteran',
    type: 'fight',
    title: 'Défense de titre — le vétéran',
    narrativeText:
      "Un ancien champion en fin de carrière, venu chercher une dernière fois la ceinture qu'il a portée autrefois, avec toute l'expérience que ça suppose.",
    opponentName: 'Un ancien champion',
    opponentTagline: 'Il a déjà porté cette ceinture. Il la veut à nouveau.',
    requirement: { minRankOrder: CHAMPION_ORDER, weight: 2 },
    gestures: [
      {
        id: 'g-defense-veteran-strategie',
        label: "Ne pas sous-estimer son expérience",
        statTested: 'strategie',
        difficulty: 74,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.strategie,
        outcomes: {
          criticalFailure: { text: "Son expérience fait toute la différence. Tu tombes dans des pièges que tu n'avais pas vus venir.", reward: { health: -14, coolness: -6 } },
          failure: { text: "Le combat reste équilibré face à un adversaire qui sait exactement quoi faire.", reward: { fatigue: 10 } },
          success: { text: "Ton propre plan tient bon face à toute son expérience accumulée.", reward: { careerPoints: 22, reputationExternal: 14, titleDefenseWin: true } },
          criticalSuccess: { text: "L'expérience ne suffit pas ce soir-là. Le vétéran salue, sportif, une nouvelle génération qui vient de s'imposer.", reward: { careerPoints: 30, reputationExternal: 20, titleDefenseWin: true } },
        },
      },
    ],
  },
  {
    id: 'card-fight-defense-prodige',
    type: 'fight',
    title: 'Défense de titre — le prodige',
    narrativeText:
      "Un jeune prétendant, plus rapide que tout ce que tu as affronté récemment, arrivé avec la conviction tranquille que c'est déjà son tour.",
    opponentName: 'Un jeune prodige surdoué',
    opponentTagline: "Plus rapide que quiconque affronté jusqu'ici.",
    requirement: { minRankOrder: CHAMPION_ORDER, weight: 2 },
    gestures: [
      {
        id: 'g-defense-prodige-experience',
        label: "Opposer l'expérience à la vitesse",
        statTested: 'technique',
        difficulty: 76,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.technique,
        outcomes: {
          criticalFailure: { text: "Sa vitesse te dépasse largement ce soir-là. Un rappel brutal que le temps ne s'arrête jamais.", reward: { health: -16, coolness: -8 } },
          failure: { text: "Tu compenses tant bien que mal le déficit de vitesse par l'expérience.", reward: { fatigue: 12 } },
          success: { text: "L'expérience finit par payer face à la fougue, aussi rapide soit-elle.", reward: { careerPoints: 24, reputationExternal: 16, titleDefenseWin: true } },
          criticalSuccess: { text: "Tu donnes ce soir-là une véritable leçon au prodige — celle que seule l'expérience peut enseigner.", reward: { careerPoints: 32, reputationExternal: 22, titleDefenseWin: true } },
        },
      },
    ],
  },
]
