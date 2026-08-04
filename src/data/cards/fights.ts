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
          criticalSuccess: { text: "Le coup surprend complètement ton adversaire, qui recule, déstabilisé pour de bon.", reward: { careerPoints: 9, reputationExternal: 3, reputationInternal: 2, unlockTrophyIds: ['mark-premier-ko'] } },
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
          criticalSuccess: { text: "Le contre est si net que l'arbitre marque une pause pour vérifier que tout va bien pour ton adversaire.", reward: { careerPoints: 9, reputationExternal: 3, reputationInternal: 2, unlockTrophyIds: ['mark-premier-ko'] } },
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

// ─────────────────────────────────────────────────────────────────────────
// MILIEU DE CARRIÈRE (paliers 4-8 : pro classe B → Champion OPBF)
// ─────────────────────────────────────────────────────────────────────────
const MID_FIGHTS: FightCard[] = [
  {
    id: 'card-fight-mid-jeu-coude',
    type: 'fight',
    title: 'Corps-à-corps serré',
    narrativeText:
      "Ton adversaire cherche systématiquement le clinch dès que la distance se referme, rendant le combat haché et physique.",
    opponentName: 'Un habitué du corps-à-corps',
    opponentTagline: 'Redoutable à bout portant.',
    requirement: { minRankOrder: 4, maxRankOrder: 7, excludedFlags: ['discovered:tech-generic-jeu-coude'], weight: 2 },
    gestures: [
      {
        id: 'g-corps-a-corps',
        label: 'Travailler la distance courte plutôt que la fuir',
        statTested: 'technique',
        difficulty: 52,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.technique,
        outcomes: {
          criticalFailure: { text: "Le corps-à-corps tourne à ton désavantage complet.", reward: { health: -6 } },
          failure: { text: "Tu subis plus que tu ne contrôles cette distance.", reward: { fatigue: 6 } },
          success: {
            text: "Tu places chaque coup au millimètre dans cet espace réduit — il n'a pas la place de répondre.",
            reward: { careerPoints: 12, reputationExternal: 4, unlockTechniqueIds: ['tech-generic-jeu-coude'], setFlags: ['discovered:tech-generic-jeu-coude'] },
          },
          criticalSuccess: {
            text: "Tu domines totalement le corps-à-corps. L'arbitre doit intervenir tant l'écart devient net.",
            reward: { careerPoints: 17, reputationExternal: 7, unlockTechniqueIds: ['tech-generic-jeu-coude'], setFlags: ['discovered:tech-generic-jeu-coude'] },
          },
        },
      },
      {
        id: 'g-refuser-clinch',
        label: 'Refuser le clinch et rester à distance',
        statTested: 'reflexes',
        difficulty: 52,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.reflexes,
        outcomes: {
          criticalFailure: { text: "Il t'accroche malgré toi à chaque tentative de fuite.", reward: { health: -6 } },
          failure: { text: "Tu glisses hors du clinch, mais il te rattrape aussitôt.", reward: { fatigue: 6 } },
          success: {
            text: "Tu esquives chaque tentative de corps-à-corps et le forces à se battre là où il ne veut pas.",
            reward: { careerPoints: 12, reputationExternal: 4, unlockTechniqueIds: ['tech-generic-jeu-coude'], setFlags: ['discovered:tech-generic-jeu-coude'] },
          },
          criticalSuccess: {
            text: "Il ne t'accroche jamais une seule fois. Sa spécialité du corps-à-corps ne lui sert à rien ce soir.",
            reward: { careerPoints: 17, reputationExternal: 7, unlockTechniqueIds: ['tech-generic-jeu-coude'], setFlags: ['discovered:tech-generic-jeu-coude'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-fight-mid-uppercut-ferme',
    type: 'fight',
    title: 'Garde impénétrable',
    narrativeText:
      "Ton adversaire garde une garde haute et fermée tout le combat, ne laissant aucune ouverture visible au visage.",
    opponentName: 'Une garde de fer',
    opponentTagline: 'Personne ne l\'a touché au visage depuis six combats.',
    requirement: { minRankOrder: 5, maxRankOrder: 8, excludedFlags: ['discovered:tech-generic-uppercut-ferme'], weight: 2 },
    gestures: [
      {
        id: 'g-uppercut',
        label: 'Chercher un angle court, depuis en dessous',
        statTested: 'puissance',
        difficulty: 55,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.puissance,
        outcomes: {
          criticalFailure: { text: "Le coup s'écrase contre l'avant-bras, sans effet.", reward: { fatigue: 8 } },
          failure: { text: "L'angle reste trop ouvert pour vraiment passer.", reward: { fatigue: 6 } },
          success: {
            text: "Le coup remonte de nulle part, pile sous la garde. Sa garde impénétrable vient de trouver sa limite.",
            reward: { careerPoints: 13, reputationExternal: 5, unlockTechniqueIds: ['tech-generic-uppercut-ferme'], setFlags: ['discovered:tech-generic-uppercut-ferme'] },
          },
          criticalSuccess: {
            text: "Le coup le surprend complètement. Six combats sans être touché au visage — la série s'arrête net ce soir.",
            reward: { careerPoints: 18, reputationExternal: 8, unlockTechniqueIds: ['tech-generic-uppercut-ferme'], setFlags: ['discovered:tech-generic-uppercut-ferme'] },
          },
        },
      },
      {
        id: 'g-uppercut-technique',
        label: 'Chercher la faille par la précision, pas la force',
        statTested: 'technique',
        difficulty: 55,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.technique,
        outcomes: {
          criticalFailure: { text: "Le geste part propre mais rate totalement l'angle visé.", reward: { fatigue: 8 } },
          failure: { text: "Tu tournes autour de la garde sans jamais trouver le bon interstice.", reward: { fatigue: 6 } },
          success: {
            text: "Tu repères l'angle exact, minuscule, et places le coup sans jamais forcer.",
            reward: { careerPoints: 13, reputationExternal: 5, unlockTechniqueIds: ['tech-generic-uppercut-ferme'], setFlags: ['discovered:tech-generic-uppercut-ferme'] },
          },
          criticalSuccess: {
            text: "Le coup est si précis qu'il semble avoir traversé sa garde sans jamais la toucher.",
            reward: { careerPoints: 18, reputationExternal: 8, unlockTechniqueIds: ['tech-generic-uppercut-ferme'], setFlags: ['discovered:tech-generic-uppercut-ferme'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-fight-opbf-contre-corps',
    type: 'fight',
    title: 'Guerre au corps',
    narrativeText:
      "Un combat continental de préparation, contre un adversaire connu pour user ses opposants coup après coup aux côtes.",
    opponentName: 'Un spécialiste du travail au corps',
    opponentTagline: 'Il use ses adversaires, round après round.',
    requirement: { minRankOrder: 6, maxRankOrder: 8, excludedFlags: ['discovered:tech-generic-contre-corps'], weight: 2 },
    gestures: [
      {
        id: 'g-contre-corps',
        label: 'Contrer au corps plutôt que défendre',
        statTested: 'endurance',
        difficulty: 56,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.endurance,
        outcomes: {
          criticalFailure: { text: "Ses coups au corps te coupent complètement le souffle.", reward: { health: -8, fatigue: 8 } },
          failure: { text: "Tu encaisses plus que tu ne rends.", reward: { fatigue: 8 } },
          success: {
            text: "Tu laisses passer son coup et places le tien, pile aux côtes. Sa garde redescend, prudente, dès le round suivant.",
            reward: { careerPoints: 14, reputationExternal: 5, unlockTechniqueIds: ['tech-generic-contre-corps'], setFlags: ['discovered:tech-generic-contre-corps'] },
          },
          criticalSuccess: {
            text: "Le rôle s'inverse complètement : c'est lui qui use, maintenant, contre son propre jeu.",
            reward: { careerPoints: 19, reputationExternal: 8, unlockTechniqueIds: ['tech-generic-contre-corps'], setFlags: ['discovered:tech-generic-contre-corps'] },
          },
        },
      },
      {
        id: 'g-fuir-corps',
        label: 'Rester hors de portée plutôt que rendre coup pour coup',
        statTested: 'reflexes',
        difficulty: 56,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.reflexes,
        outcomes: {
          criticalFailure: { text: "Il te coupe la route à chaque tentative de fuite, et te punit aux côtes.", reward: { health: -8, fatigue: 8 } },
          failure: { text: "Tu limites les dégâts sans jamais vraiment reprendre l'initiative.", reward: { fatigue: 8 } },
          success: {
            text: "Tu restes systématiquement hors de sa portée. Sa spécialité ne lui sert à rien s'il ne peut jamais s'approcher.",
            reward: { careerPoints: 14, reputationExternal: 5, unlockTechniqueIds: ['tech-generic-contre-corps'], setFlags: ['discovered:tech-generic-contre-corps'] },
          },
          criticalSuccess: {
            text: "Il finit le combat frustré, sans avoir pu placer une seule fois son coup au corps.",
            reward: { careerPoints: 19, reputationExternal: 8, unlockTechniqueIds: ['tech-generic-contre-corps'], setFlags: ['discovered:tech-generic-contre-corps'] },
          },
        },
      },
    ],
  },
  {
    id: 'card-fight-classe-a',
    type: 'fight',
    title: 'Combat de classement',
    narrativeText:
      "Un affrontement direct pour les places du classement national, contre un adversaire déterminé à te doubler.",
    opponentName: 'Un concurrent direct au classement',
    opponentTagline: 'Il joue sa place autant que toi.',
    requirement: { minRankOrder: 4, maxRankOrder: 6, weight: 2 },
    gestures: [
      {
        id: 'g-classement-puissance',
        label: "Prendre l'ascendant physique",
        statTested: 'puissance',
        difficulty: 50,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.puissance,
        outcomes: {
          criticalFailure: { text: "Il retourne ton agressivité contre toi sans ménagement.", reward: { health: -8 } },
          failure: { text: "L'échange reste équilibré.", reward: { fatigue: 6 } },
          success: { text: "Tu prends clairement l'ascendant physique sur l'ensemble du combat.", reward: { careerPoints: 12, reputationExternal: 4 } },
          criticalSuccess: { text: "Le combat tourne complètement en ta faveur. Ta place au classement n'est plus contestable.", reward: { careerPoints: 17, reputationExternal: 7 } },
        },
      },
      {
        id: 'g-classement-tactique',
        label: 'Jouer un combat tactique',
        statTested: 'strategie',
        difficulty: 50,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.strategie,
        outcomes: {
          criticalFailure: { text: "Ton plan se heurte à un adversaire plus imprévisible que prévu.", reward: { coolness: -6 } },
          failure: { text: "Le combat reste indécis.", reward: { fatigue: 6 } },
          success: { text: "Ton approche tactique fait clairement la différence sur la carte des juges.", reward: { careerPoints: 12, reputationExternal: 4 } },
          criticalSuccess: { text: "Le plan fonctionne à la perfection, round après round. Aucun doute possible sur le vainqueur.", reward: { careerPoints: 17, reputationExternal: 7 } },
        },
      },
    ],
  },
  {
    id: 'card-fight-classe-nationale',
    type: 'fight',
    title: "Aux portes du top national",
    narrativeText:
      "Une victoire ici, et ton nom entre enfin dans le classement national. L'adversaire, qui joue exactement la même chose, ne l'ignore pas.",
    opponentName: 'Un aspirant tout aussi affamé',
    opponentTagline: 'Cette place, il la veut autant que toi.',
    requirement: { minRankOrder: 5, maxRankOrder: 7, weight: 2 },
    gestures: [
      {
        id: 'g-national-vitesse',
        label: 'Imposer un rythme rapide',
        statTested: 'vitesse',
        difficulty: 52,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.vitesse,
        outcomes: {
          criticalFailure: { text: "Le rythme t'épuise plus qu'il ne le déstabilise.", reward: { fatigue: 12 } },
          failure: { text: "Le rythme reste soutenable pour lui aussi.", reward: { fatigue: 8 } },
          success: { text: "Le rythme imposé fait clairement la différence sur la durée.", reward: { careerPoints: 14, reputationExternal: 5 } },
          criticalSuccess: { text: "Il ne suit jamais vraiment la cadence. Ton nom entre au classement national dès le lendemain.", reward: { careerPoints: 19, reputationExternal: 8 } },
        },
      },
      {
        id: 'g-national-endurance',
        label: "Le faire craquer à l'usure",
        statTested: 'endurance',
        difficulty: 52,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.endurance,
        outcomes: {
          criticalFailure: { text: "C'est toi qui craques le premier dans cette guerre d'usure.", reward: { health: -6, fatigue: 10 } },
          failure: { text: "Le combat s'étire sans qu'aucun des deux ne cède.", reward: { fatigue: 8 } },
          success: { text: "Tu tiens plus longtemps que lui, et ça finit par se voir sur la carte des juges.", reward: { careerPoints: 14, reputationExternal: 5 } },
          criticalSuccess: { text: "Il craque nettement avant la fin. Ton nom entre au classement national dès le lendemain.", reward: { careerPoints: 19, reputationExternal: 8 } },
        },
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────
// FIN DE CARRIÈRE (paliers 9-10 : éliminatoire mondial → challenger mondial)
// ─────────────────────────────────────────────────────────────────────────
const LATE_FIGHTS: FightCard[] = [
  {
    id: 'card-fight-eliminatoire-double-jab',
    type: 'fight',
    title: "Combat de préparation mondiale",
    narrativeText:
      "Un combat de préparation face à un boxeur rapide, connu pour une garde qui ne s'ouvre presque jamais deux fois de la même manière.",
    opponentName: 'Un boxeur rapide et insaisissable',
    opponentTagline: "Sa garde ne s'ouvre jamais deux fois pareil.",
    requirement: { minRankOrder: 9, maxRankOrder: 10, excludedFlags: ['discovered:tech-generic-double-jab'], weight: 2 },
    gestures: [
      {
        id: 'g-double-jab',
        label: 'Doubler le jab pour ouvrir la garde',
        statTested: 'vitesse',
        difficulty: 64,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.vitesse,
        outcomes: {
          criticalFailure: { text: "Les deux jabs partent trop proches l'un de l'autre. Il bloque les deux du même geste.", reward: { fatigue: 8 } },
          failure: { text: "Le premier jab fait descendre sa garde, le second arrive trop tard pour compter vraiment.", reward: { fatigue: 8 } },
          success: {
            text: "Le premier jab fait descendre sa garde d'un rien. Le second, une fraction plus tard, trouve l'ouverture exacte.",
            reward: { careerPoints: 16, reputationExternal: 8, unlockTechniqueIds: ['tech-generic-double-jab'], setFlags: ['discovered:tech-generic-double-jab'] },
          },
          criticalSuccess: {
            text: "La combinaison est si rapide qu'elle semble n'être qu'un seul geste. Sa garde, réputée insaisissable, cède complètement.",
            reward: { careerPoints: 22, reputationExternal: 12, unlockTechniqueIds: ['tech-generic-double-jab'], setFlags: ['discovered:tech-generic-double-jab'] },
          },
        },
      },
      {
        id: 'g-double-jab-lecture',
        label: 'Lire sa garde plutôt que la brusquer',
        statTested: 'strategie',
        difficulty: 64,
        eligibleTechniqueIds: GESTURE_TECHNIQUES.strategie,
        outcomes: {
          criticalFailure: { text: "Sa garde change encore une fois, exactement au moment où tu croyais l'avoir percée.", reward: { fatigue: 8 } },
          failure: { text: "Tu perçois un schéma, sans être sûr de pouvoir vraiment t'y fier.", reward: { fatigue: 8 } },
          success: {
            text: "Tu identifies le motif derrière ses changements de garde, et places ton double jab pile au bon instant.",
            reward: { careerPoints: 16, reputationExternal: 8, unlockTechniqueIds: ['tech-generic-double-jab'], setFlags: ['discovered:tech-generic-double-jab'] },
          },
          criticalSuccess: {
            text: "Tu as percé sa garde avant même le premier coup. Sa réputation d'insaisissable ne survit pas à ce combat.",
            reward: { careerPoints: 22, reputationExternal: 12, unlockTechniqueIds: ['tech-generic-double-jab'], setFlags: ['discovered:tech-generic-double-jab'] },
          },
        },
      },
    ],
  },
]

export const FIGHT_CARDS: FightCard[] = [...EARLY_FIGHTS, ...MID_FIGHTS, ...LATE_FIGHTS]
