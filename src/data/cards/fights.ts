import type { FightCard } from '../../engine/types'

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
    opponentAggression: 'balanced',
    totalRounds: 3,
    koThreshold: 5,
    baseDifficulty: 32,
    requirement: { maxRankOrder: 0, onceOnly: true, weight: 3 },
    outcomes: {
      criticalFailure: { text: "Le coup part dans le vide, et tu perds l'équilibre un instant.", reward: { coolness: -5 } },
      failure: { text: "Le coup touche, mais sans grande conviction. L'échange continue, incertain.", reward: { fatigue: 4 } },
      success: { text: "Le direct touche net. L'arbitre lève la main de ton côté à la fin de l'assaut.", reward: { careerPoints: 6, reputationExternal: 2 } },
      criticalSuccess: { text: "Le coup surprend complètement ton adversaire, qui recule, déstabilisé pour de bon.", reward: { careerPoints: 9, reputationExternal: 3, reputationInternal: 2, unlockTrophyIds: ['mark-premier-ko'] } },
    },
  },
  {
    id: 'card-fight-amateur-regional',
    type: 'fight',
    title: 'Tournoi amateur régional',
    narrativeText:
      "La salle est plus grande cette fois, presque impressionnante. En face, un boxeur venu d'un autre club, réputé pour sa vivacité.",
    opponentName: "Un boxeur du tournoi régional",
    opponentTagline: 'Rapide, et visiblement sûr de lui.',
    opponentAggression: 'aggressive',
    totalRounds: 3,
    koThreshold: 5,
    baseDifficulty: 38,
    requirement: { minRankOrder: 0, maxRankOrder: 1, weight: 2 },
    outcomes: {
      criticalFailure: { text: "Tu t'ouvres complètement en cherchant le coup fort, et le paies immédiatement.", reward: { health: -5, coolness: -4 } },
      failure: { text: "Le coup part sans assez de poids derrière pour vraiment compter.", reward: { fatigue: 5 } },
      success: { text: "Le coup porte, et fait clairement reculer ton adversaire.", reward: { careerPoints: 7, reputationExternal: 3 } },
      criticalSuccess: { text: "L'impact surprend toute la salle, adversaire compris.", reward: { careerPoints: 10, reputationExternal: 4, reputationInternal: 2 } },
    },
  },
  {
    id: 'card-fight-debut-crochet-foie',
    type: 'fight',
    title: 'Un adversaire qui recule',
    narrativeText:
      "Ton adversaire garde ses distances depuis le début du combat, la garde haute et fermée. Il va falloir trouver une autre ouverture que le visage.",
    opponentName: 'Un amateur prudent',
    opponentTagline: 'Garde haute, peu de prises de risques.',
    opponentAggression: 'defensive',
    totalRounds: 3,
    koThreshold: 5,
    baseDifficulty: 40,
    requirement: { minRankOrder: 1, maxRankOrder: 4, excludedFlags: ['discovered:tech-generic-crochet-foie'], weight: 2 },
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
    id: 'card-fight-pro-debut',
    type: 'fight',
    title: 'Premier combat professionnel',
    narrativeText:
      "Un vrai vestiaire, un vrai bandage fait par un soigneur, et pour la première fois, un chèque qui t'attend à la sortie, quel que soit le résultat. En face, un pro de classe C, plus expérimenté que tout ce que tu as affronté jusqu'ici.",
    opponentName: 'Un professionnel de classe C',
    opponentTagline: 'Trois ans de licence, et ça se sent.',
    opponentAggression: 'balanced',
    totalRounds: 3,
    koThreshold: 5,
    baseDifficulty: 46,
    requirement: { requiredFlags: ['flag-turned-pro'], maxRankOrder: 4, onceOnly: true, weight: 3 },
    outcomes: {
      criticalFailure: { text: "L'expérience adverse se sent immédiatement. Tu passes le premier round à encaisser.", reward: { health: -6, coolness: -6 } },
      failure: { text: "L'échange reste indécis, chacun cherchant encore ses marques.", reward: { fatigue: 6 } },
      success: { text: "Tu prends l'ascendant plus tôt que ton adversaire ne l'espérait.", reward: { careerPoints: 14, reputationExternal: 5, reputationInternal: 4 } },
      criticalSuccess: { text: "L'expérience adverse ne fait pas le poids face à ce que tu montres ce soir-là. La salle s'en souviendra.", reward: { careerPoints: 20, reputationExternal: 8, reputationInternal: 6 } },
    },
  },
  {
    id: 'card-fight-pro-second',
    type: 'fight',
    title: 'Deuxième combat professionnel',
    narrativeText:
      "Le premier chèque a déjà été dépensé en équipement neuf. Un deuxième adversaire attend, cette fois réputé pour son endurance à toute épreuve.",
    opponentName: 'Un pro endurant',
    opponentTagline: 'Il ne recule jamais, quel que soit le rythme.',
    opponentAggression: 'aggressive',
    totalRounds: 3,
    koThreshold: 5,
    baseDifficulty: 46,
    requirement: { requiredFlags: ['flag-turned-pro'], minRankOrder: 3, maxRankOrder: 4, weight: 2 },
    outcomes: {
      criticalFailure: { text: "Tu t'épuises à tourner sans jamais vraiment le déstabiliser.", reward: { fatigue: 10 } },
      failure: { text: "Les angles restent trop prévisibles pour vraiment payer.", reward: { fatigue: 6 } },
      success: { text: "Tu finis par trouver la faille dans son style pourtant très stable.", reward: { careerPoints: 13, reputationExternal: 4 } },
      criticalSuccess: { text: "Il ne comprend jamais d'où viennent réellement tes coups. Le combat finit sans appel.", reward: { careerPoints: 18, reputationExternal: 7, reputationInternal: 4 } },
    },
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
    opponentAggression: 'aggressive',
    totalRounds: 4,
    koThreshold: 5,
    baseDifficulty: 52,
    requirement: { minRankOrder: 4, maxRankOrder: 7, excludedFlags: ['discovered:tech-generic-jeu-coude'], weight: 2 },
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
    id: 'card-fight-mid-uppercut-ferme',
    type: 'fight',
    title: 'Garde impénétrable',
    narrativeText:
      "Ton adversaire garde une garde haute et fermée tout le combat, ne laissant aucune ouverture visible au visage.",
    opponentName: 'Une garde de fer',
    opponentTagline: 'Personne ne l\'a touché au visage depuis six combats.',
    opponentAggression: 'defensive',
    totalRounds: 4,
    koThreshold: 5,
    baseDifficulty: 55,
    requirement: { minRankOrder: 5, maxRankOrder: 8, excludedFlags: ['discovered:tech-generic-uppercut-ferme'], weight: 2 },
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
    id: 'card-fight-opbf-contre-corps',
    type: 'fight',
    title: 'Guerre au corps',
    narrativeText:
      "Un combat continental de préparation, contre un adversaire connu pour user ses opposants coup après coup aux côtes.",
    opponentName: 'Un spécialiste du travail au corps',
    opponentTagline: 'Il use ses adversaires, round après round.',
    opponentAggression: 'aggressive',
    totalRounds: 4,
    koThreshold: 5,
    baseDifficulty: 56,
    requirement: { minRankOrder: 6, maxRankOrder: 8, excludedFlags: ['discovered:tech-generic-contre-corps'], weight: 2 },
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
    id: 'card-fight-classe-a',
    type: 'fight',
    title: 'Combat de classement',
    narrativeText:
      "Un affrontement direct pour les places du classement national, contre un adversaire déterminé à te doubler.",
    opponentName: 'Un concurrent direct au classement',
    opponentTagline: 'Il joue sa place autant que toi.',
    opponentAggression: 'balanced',
    totalRounds: 4,
    koThreshold: 5,
    baseDifficulty: 50,
    requirement: { minRankOrder: 4, maxRankOrder: 6, weight: 2 },
    outcomes: {
      criticalFailure: { text: "Il retourne ton agressivité contre toi sans ménagement.", reward: { health: -8 } },
      failure: { text: "L'échange reste équilibré.", reward: { fatigue: 6 } },
      success: { text: "Tu prends clairement l'ascendant physique sur l'ensemble du combat.", reward: { careerPoints: 12, reputationExternal: 4 } },
      criticalSuccess: { text: "Le combat tourne complètement en ta faveur. Ta place au classement n'est plus contestable.", reward: { careerPoints: 17, reputationExternal: 7 } },
    },
  },
  {
    id: 'card-fight-classe-nationale',
    type: 'fight',
    title: "Aux portes du top national",
    narrativeText:
      "Une victoire ici, et ton nom entre enfin dans le classement national. L'adversaire, qui joue exactement la même chose, ne l'ignore pas.",
    opponentName: 'Un aspirant tout aussi affamé',
    opponentTagline: 'Cette place, il la veut autant que toi.',
    opponentAggression: 'balanced',
    totalRounds: 4,
    koThreshold: 5,
    baseDifficulty: 52,
    requirement: { minRankOrder: 5, maxRankOrder: 7, weight: 2 },
    outcomes: {
      criticalFailure: { text: "Le rythme t'épuise plus qu'il ne le déstabilise.", reward: { fatigue: 12 } },
      failure: { text: "Le rythme reste soutenable pour lui aussi.", reward: { fatigue: 8 } },
      success: { text: "Le rythme imposé fait clairement la différence sur la durée.", reward: { careerPoints: 14, reputationExternal: 5 } },
      criticalSuccess: { text: "Il ne suit jamais vraiment la cadence. Ton nom entre au classement national dès le lendemain.", reward: { careerPoints: 19, reputationExternal: 8 } },
    },
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
    opponentAggression: 'defensive',
    totalRounds: 5,
    koThreshold: 5,
    baseDifficulty: 64,
    requirement: { minRankOrder: 9, maxRankOrder: 10, excludedFlags: ['discovered:tech-generic-double-jab'], weight: 2 },
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
]

export const FIGHT_CARDS: FightCard[] = [...EARLY_FIGHTS, ...MID_FIGHTS, ...LATE_FIGHTS]
