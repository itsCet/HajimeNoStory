import type { FightCard } from '../../engine/types'
import { GESTURE_TECHNIQUES } from './gestureTechniques'

// ─────────────────────────────────────────────────────────────────────────
// DÉBUT DE CARRIÈRE (paliers 0-3 : amateur novice → pro classe C)
// ─────────────────────────────────────────────────────────────────────────
const EARLY_FIGHTS: FightCard[] = [
  {
    id: 'card-fight-premier-amateur',
    type: 'fight',
    title: 'Premier combat amateur',
    narrativeText:
      "Le club voisin a amené un débutant à peu près à ton niveau. La salle improvisée sert de ring pour l'occasion — pas de gradins, juste quelques chaises pliantes et {{mentor}} au bord du tapis.",
    opponentName: 'Un débutant du club voisin',
    opponentTagline: 'Aussi nerveux que toi, ça se voit.',
    requirement: { maxRankOrder: 0, onceOnly: true, weight: 3 },
    gestures: [
      {
        id: 'g-direct',
        label: 'Placer un direct simple',
        statTested: 'technique',
        difficulty: 32,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.technique,
        outcomes: {
          criticalFailure: { text: "Le coup part dans le vide, et tu perds l'équilibre un instant.", reward: { coolness: -5 } },
          failure: { text: "Le coup touche, mais sans grande conviction. L'échange continue, incertain.", reward: { fatigue: 4 } },
          success: { text: "Le direct touche net. L'arbitre lève la main de ton côté à la fin de l'assaut.", reward: { careerPoints: 6, reputationExternal: 2 } },
          criticalSuccess: { text: "Le coup surprend complètement ton adversaire, qui recule, déstabilisé pour de bon.", reward: { careerPoints: 9, reputationExternal: 3, reputationInternal: 2 } },
        },
      },
      {
        id: 'g-esquive-contre',
        label: 'Attendre et contrer',
        statTested: 'reflexes',
        difficulty: 32,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.reflexes,
        outcomes: {
          criticalFailure: { text: "Tu anticipes mal, et le coup adverse arrive en premier.", reward: { health: -3, coolness: -4 } },
          failure: { text: "Le contre part trop tard pour vraiment compter.", reward: { fatigue: 4 } },
          success: { text: "Tu laisses venir, puis places ton contre au bon moment.", reward: { careerPoints: 6, reputationExternal: 2 } },
          criticalSuccess: { text: "Le contre est si net que l'arbitre marque une pause pour vérifier que tout va bien pour ton adversaire.", reward: { careerPoints: 9, reputationExternal: 3, reputationInternal: 2 } },
        },
      },
    ],
  },
  {
    id: 'card-fight-amateur-regional',
    type: 'fight',
    title: 'Tournoi amateur régional',
    narrativeText:
      "La salle est plus grande cette fois, presque impressionnante. En face, un boxeur venu d'un autre club, réputé pour sa vivacité.",
    opponentName: "Un boxeur du tournoi régional",
    opponentTagline: 'Rapide, et visiblement sûr de lui.',
    requirement: { minRankOrder: 0, maxRankOrder: 1, weight: 2 },
    gestures: [
      {
        id: 'g-puissance',
        label: 'Chercher à conclure vite',
        statTested: 'puissance',
        difficulty: 38,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.puissance,
        outcomes: {
          criticalFailure: { text: "Tu t'ouvres complètement en cherchant le coup fort, et le paies immédiatement.", reward: { health: -5, coolness: -4 } },
          failure: { text: "Le coup part sans assez de poids derrière pour vraiment compter.", reward: { fatigue: 5 } },
          success: { text: "Le coup porte, et fait clairement reculer ton adversaire.", reward: { careerPoints: 7, reputationExternal: 3 } },
          criticalSuccess: { text: "L'impact surprend toute la salle, adversaire compris.", reward: { careerPoints: 10, reputationExternal: 4, reputationInternal: 2 } },
        },
      },
      {
        id: 'g-vitesse',
        label: 'Multiplier les touches rapides',
        statTested: 'vitesse',
        difficulty: 38,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.vitesse,
        outcomes: {
          criticalFailure: { text: "Tu t'épuises à courir après un rythme que tu ne tiens pas vraiment.", reward: { fatigue: 9 } },
          failure: { text: "Les touches restent trop légères pour vraiment marquer des points.", reward: { fatigue: 5 } },
          success: { text: "Tu enchaînes les touches rapides, accumulant clairement l'avantage.", reward: { careerPoints: 7, reputationExternal: 3 } },
          criticalSuccess: { text: "Ton adversaire n'arrive tout simplement plus à suivre le rythme que tu imposes.", reward: { careerPoints: 10, reputationExternal: 4, reputationInternal: 2 } },
        },
      },
    ],
  },
  {
    id: 'card-fight-debut-crochet-foie',
    type: 'fight',
    title: 'Un adversaire qui recule',
    narrativeText:
      "Ton adversaire garde ses distances depuis le début du combat, la garde haute et fermée. Il va falloir trouver une autre ouverture que le visage.",
    opponentName: 'Un amateur prudent',
    opponentTagline: 'Garde haute, peu de prises de risques.',
    requirement: { minRankOrder: 1, maxRankOrder: 4, excludedFlags: ['discovered:tech-generic-crochet-foie'], weight: 2 },
    gestures: [
      {
        id: 'g-corps',
        label: 'Viser le corps plutôt que la garde',
        statTested: 'puissance',
        difficulty: 40,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.puissance,
        outcomes: {
          criticalFailure: { text: "Le coup part trop haut et s'écrase sur l'avant-bras adverse.", reward: { fatigue: 6 } },
          failure: { text: "Le coup touche les côtes sans vraiment inquiéter ton adversaire.", reward: { fatigue: 4 } },
          success: {
            text: "Le coup s'enfonce sous la garde, pile sous les côtes. Ton adversaire baisse instinctivement les coudes.",
            reward: { careerPoints: 8, reputationExternal: 2, unlockTechniqueIds: ['tech-generic-crochet-foie'], setFlags: ['discovered:tech-generic-crochet-foie'] },
          },
          criticalSuccess: {
            text: "Le coup coupe littéralement le souffle de ton adversaire, qui met un genou au sol un instant.",
            reward: { careerPoints: 12, reputationExternal: 4, unlockTechniqueIds: ['tech-generic-crochet-foie'], setFlags: ['discovered:tech-generic-crochet-foie'] },
          },
        },
      },
      {
        id: 'g-patience',
        label: "Attendre l'ouverture au visage",
        statTested: 'technique',
        difficulty: 40,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.technique,
        outcomes: {
          criticalFailure: { text: "L'ouverture attendue ne vient jamais, et tu perds patience au mauvais moment.", reward: { coolness: -5 } },
          failure: { text: "Le combat s'étire sans qu'aucune vraie ouverture n'apparaisse.", reward: { fatigue: 5 } },
          success: { text: "L'ouverture finit par apparaître, et tu la saisis proprement.", reward: { careerPoints: 8, reputationExternal: 2 } },
          criticalSuccess: { text: "Ta patience est récompensée par un coup d'une précision totale.", reward: { careerPoints: 12, reputationExternal: 4 } },
        },
      },
    ],
  },
  {
    id: 'card-fight-pro-debut',
    type: 'fight',
    title: 'Premier combat professionnel',
    narrativeText:
      "Un vrai vestiaire, un vrai bandage fait par un soigneur, et pour la première fois, un chèque qui t'attend à la sortie, quel que soit le résultat. En face, un pro de classe C, plus expérimenté que tout ce que tu as affronté jusqu'ici.",
    opponentName: 'Un professionnel de classe C',
    opponentTagline: 'Trois ans de licence, et ça se sent.',
    requirement: { requiredFlags: ['flag-turned-pro'], maxRankOrder: 4, onceOnly: true, weight: 3 },
    gestures: [
      {
        id: 'g-imposer',
        label: "Imposer ton style dès l'entame",
        statTested: 'puissance',
        difficulty: 46,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.puissance,
        outcomes: {
          criticalFailure: { text: "L'expérience adverse se sent immédiatement. Tu passes le premier round à encaisser.", reward: { health: -6, coolness: -6 } },
          failure: { text: "L'échange reste indécis, chacun cherchant encore ses marques.", reward: { fatigue: 6 } },
          success: { text: "Tu prends l'ascendant plus tôt que ton adversaire ne l'espérait.", reward: { careerPoints: 14, reputationExternal: 5, reputationInternal: 4 } },
          criticalSuccess: { text: "L'expérience adverse ne fait pas le poids face à ce que tu montres ce soir-là. La salle s'en souviendra.", reward: { careerPoints: 20, reputationExternal: 8, reputationInternal: 6 } },
        },
      },
      {
        id: 'g-patience-pro',
        label: 'Rester patient et observer',
        statTested: 'strategie',
        difficulty: 46,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.strategie,
        outcomes: {
          criticalFailure: { text: "Ta prudence se transforme en passivité, et les juges le remarquent.", reward: { coolness: -6 } },
          failure: { text: "Tu restes trop en retrait pour vraiment marquer des points.", reward: { fatigue: 6 } },
          success: { text: "Tu attends ton moment, et le combat finit par pencher de ton côté.", reward: { careerPoints: 14, reputationExternal: 5, reputationInternal: 4 } },
          criticalSuccess: { text: "Ta lecture du combat est si juste que ton adversaire ne comprend jamais vraiment ce qui lui arrive.", reward: { careerPoints: 20, reputationExternal: 8, reputationInternal: 6 } },
        },
      },
      {
        id: 'g-reflexes-pro',
        label: "Rester mobile et esquiver",
        statTested: 'reflexes',
        difficulty: 46,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.reflexes,
        outcomes: {
          criticalFailure: { text: "Tu perds l'équilibre en voulant esquiver un coup qui n'était même pas là.", reward: { coolness: -6, fatigue: 6 } },
          failure: { text: "Tu esquives par intermittence, sans vraiment prendre le dessus.", reward: { fatigue: 6 } },
          success: { text: "Ta mobilité use patiemment la confiance de ton adversaire.", reward: { careerPoints: 14, reputationExternal: 5, reputationInternal: 4 } },
          criticalSuccess: { text: "Ton adversaire, frustré de ne jamais te toucher, finit par commettre une erreur décisive.", reward: { careerPoints: 20, reputationExternal: 8, reputationInternal: 6 } },
        },
      },
    ],
  },
  {
    id: 'card-fight-pro-second',
    type: 'fight',
    title: 'Deuxième combat professionnel',
    narrativeText:
      "Le premier chèque a déjà été dépensé en équipement neuf. Un deuxième adversaire attend, cette fois réputé pour son endurance à toute épreuve.",
    opponentName: 'Un pro endurant',
    opponentTagline: 'Il ne recule jamais, quel que soit le rythme.',
    requirement: { requiredFlags: ['flag-turned-pro'], minRankOrder: 3, maxRankOrder: 4, weight: 2 },
    gestures: [
      {
        id: 'g-vitesse-2',
        label: "Multiplier les angles",
        statTested: 'vitesse',
        difficulty: 46,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.vitesse,
        outcomes: {
          criticalFailure: { text: "Tu t'épuises à tourner sans jamais vraiment le déstabiliser.", reward: { fatigue: 10 } },
          failure: { text: "Les angles restent trop prévisibles pour vraiment payer.", reward: { fatigue: 6 } },
          success: { text: "Tu finis par trouver la faille dans son style pourtant très stable.", reward: { careerPoints: 13, reputationExternal: 4 } },
          criticalSuccess: { text: "Il ne comprend jamais d'où viennent réellement tes coups. Le combat finit sans appel.", reward: { careerPoints: 18, reputationExternal: 7, reputationInternal: 4 } },
        },
      },
      {
        id: 'g-endurance-2',
        label: 'Accepter la guerre d\'usure',
        statTested: 'endurance',
        difficulty: 46,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.endurance,
        outcomes: {
          criticalFailure: { text: "Il tient la distance mieux que toi, et le dernier round est difficile à encaisser.", reward: { health: -6, fatigue: 10 } },
          failure: { text: "Tu tiens, mais clairement affaibli sur la fin.", reward: { fatigue: 8 } },
          success: { text: "Tu tiens la cadence aussi longtemps que lui, et places les coups qui comptent à la fin.", reward: { careerPoints: 13, reputationExternal: 4 } },
          criticalSuccess: { text: "Tu le sors littéralement de son propre jeu d'endurance. Il n'avait jamais vécu ça.", reward: { careerPoints: 18, reputationExternal: 7, reputationInternal: 4 } },
        },
      },
    ],
  },
]

export const FIGHT_CARDS: FightCard[] = [...EARLY_FIGHTS]
