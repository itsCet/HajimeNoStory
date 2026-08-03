import type { Technique } from '../../engine/types'

// 2 techniques signature par style inné (5 styles) : une basique débloquée peu après
// les débuts pro, une avancée gagnée via une épreuve à mi-carrière.
export const STYLE_TECHNIQUES: Technique[] = [
  // ── Puncher ──────────────────────────────────────────────────────────
  {
    id: 'tech-style-puncher-basic',
    name: 'Frappe du Forgeron',
    emoji: '🔨',
    source: 'style-basic',
    relatedGestureStat: 'puissance',
    description: "Un direct chargé de tout le poids du corps, pensé pour finir l'échange d'un coup.",
    rollBonus: 14,
    cooldownCards: 3,
    unlock: { type: 'auto-after-debut' },
    successSceneText:
      "Ton poing part droit, sans détour, et s'enfonce dans sa garde comme un coin dans du bois. Il recule d'un pas qu'il n'avait pas prévu de faire.",
    failureSceneText:
      "Tu mets tout dedans — trop, peut-être. Le coup part large, il glisse sur son épaule, et tu te retrouves une seconde en trop près de lui.",
    publicAttemptVariant: {
      witnessLabel: 'La tenter devant témoin',
      secretLabel: "S'entraîner seul, en secret",
      witnessGainText: "La salle entière a vu le coup partir. Ce genre de moment, ça se raconte.",
      secretGainText: "Personne ne t'a vu. Mais tes poings, eux, se souviennent.",
      witnessRewards: { reputationExternal: 4, coolness: -2 },
      secretRewards: { stats: { puissance: 2 } },
    },
    trophyId: 'trophy-tech-forgeron',
  },
  {
    id: 'tech-style-puncher-advanced',
    name: 'Séisme du Poing',
    emoji: '🌋',
    source: 'style-advanced',
    relatedGestureStat: 'puissance',
    description: "Un uppercut ravageur qui remonte de la hanche — l'adversaire touché a besoin d'un instant pour comprendre ce qui vient de se passer.",
    rollBonus: 22,
    cooldownCards: 4,
    unlock: { type: 'trial-success', cardId: 'card-style-puncher-trial' },
    successSceneText:
      "Le coup part du sol et remonte d'un seul mouvement. L'impact résonne jusque dans les premiers rangs — et lui met un genou hésitant au tapis.",
    failureSceneText:
      "Tu charges le coup une fraction de seconde trop longtemps. Il le voit venir et se dérobe, et tu te retrouves déséquilibré, ouvert.",
    trophyId: 'trophy-tech-seisme',
  },

  // ── Boxeur-Puncher ───────────────────────────────────────────────────
  {
    id: 'tech-style-boxeur-puncher-basic',
    name: 'Enchaînement Cyclone',
    emoji: '🌀',
    source: 'style-basic',
    relatedGestureStat: 'technique',
    description: "Trois coups liés en une seule respiration, qui changent d'angle à chaque impact.",
    rollBonus: 14,
    cooldownCards: 3,
    unlock: { type: 'auto-after-debut' },
    successSceneText:
      "Le premier coup ouvre la garde, le second trouve l'angle, le troisième conclut avant qu'il ait pu répondre au premier.",
    failureSceneText:
      "Le deuxième coup de la série part une fraction trop tôt. La combinaison se casse, et il profite du trou pour reprendre pied.",
    publicAttemptVariant: {
      witnessLabel: 'La tenter devant témoin',
      secretLabel: "S'entraîner seul, en secret",
      witnessGainText: "Trois coups, un seul souffle — la salle retient le sien.",
      secretGainText: "Tu répètes la série jusqu'à ce qu'elle devienne un seul geste, sans public pour la juger encore.",
      witnessRewards: { reputationExternal: 4, coolness: -2 },
      secretRewards: { stats: { technique: 2 } },
    },
    trophyId: 'trophy-tech-cyclone',
  },
  {
    id: 'tech-style-boxeur-puncher-advanced',
    name: 'Tempête à Trois Temps',
    emoji: '⛈️',
    source: 'style-advanced',
    relatedGestureStat: 'technique',
    description: "Une variation imprévisible de l'Enchaînement Cyclone, où chaque coup peut devenir le coup final selon la garde adverse.",
    rollBonus: 22,
    cooldownCards: 4,
    unlock: { type: 'trial-success', cardId: 'card-style-boxeur-puncher-trial' },
    successSceneText:
      "Tu lis sa garde en temps réel et changes l'ordre des coups sans y penser. Le dernier surgit d'un endroit qu'il ne surveillait pas.",
    failureSceneText:
      "Tu improvises un temps de trop. La série perd son rythme, et il se referme avant que tu aies pu la reprendre.",
    trophyId: 'trophy-tech-tempete',
  },

  // ── Out-boxer ────────────────────────────────────────────────────────
  {
    id: 'tech-style-out-boxer-basic',
    name: 'Pas Papillon',
    emoji: '🦋',
    source: 'style-basic',
    relatedGestureStat: 'vitesse',
    description: "Un jab lancé en plein déplacement latéral, qui touche puis disparaît avant toute riposte.",
    rollBonus: 14,
    cooldownCards: 3,
    unlock: { type: 'auto-after-debut' },
    successSceneText:
      "Tu touches en pivotant déjà vers l'angle suivant. Le temps qu'il recentre sa garde, tu n'es plus là où il regarde.",
    failureSceneText:
      "Le déplacement casse ton équilibre une fraction de seconde trop tôt. Le coup part sans force, et tu dois te replacer à découvert.",
    publicAttemptVariant: {
      witnessLabel: 'La tenter devant témoin',
      secretLabel: "S'entraîner seul, en secret",
      witnessGainText: "Le public commence à comprendre qu'il ne te touchera pas facilement.",
      secretGainText: "Tu peaufines l'angle, seul, loin des regards qui pourraient l'apprendre par cœur avant toi.",
      witnessRewards: { reputationExternal: 4, coolness: -2 },
      secretRewards: { stats: { vitesse: 2 } },
    },
    trophyId: 'trophy-tech-papillon',
  },
  {
    id: 'tech-style-out-boxer-advanced',
    name: 'Mirage du Ring',
    emoji: '🌫️',
    source: 'style-advanced',
    relatedGestureStat: 'vitesse',
    description: "Une série de feintes de déplacement qui brouille totalement la lecture de distance de l'adversaire.",
    rollBonus: 22,
    cooldownCards: 4,
    unlock: { type: 'trial-success', cardId: 'card-style-out-boxer-trial' },
    successSceneText:
      "Il ne sait plus où tu es censé être. Le coup part d'un endroit qu'il avait déjà cessé de surveiller.",
    failureSceneText:
      "Tu multiplies les feintes une fois de trop. Il cesse de mordre à l'hameçon et coupe directement l'angle que tu comptais utiliser.",
    trophyId: 'trophy-tech-mirage',
  },

  // ── Presseur ─────────────────────────────────────────────────────────
  {
    id: 'tech-style-presseur-basic',
    name: 'Marée Montante',
    emoji: '🌊',
    source: 'style-basic',
    relatedGestureStat: 'endurance',
    description: "Une avancée continue ponctuée de coups au corps, pensée pour ne jamais laisser respirer l'adversaire.",
    rollBonus: 14,
    cooldownCards: 3,
    unlock: { type: 'auto-after-debut' },
    successSceneText:
      "Tu avances sans à-coups, coup après coup au corps, et le pousses vers les cordes sans qu'il trouve où reculer encore.",
    failureSceneText:
      "Tu avances trop droit. Il glisse sur le côté et tu te retrouves à pousser dans le vide, ouvert sur la contre-attaque.",
    publicAttemptVariant: {
      witnessLabel: 'La tenter devant témoin',
      secretLabel: "S'entraîner seul, en secret",
      witnessGainText: "La salle sent que ce style de pression-là ne s'arrêtera pas de sitôt.",
      secretGainText: "Tu roules ce rythme d'avancée seul, contre le sac, jusqu'à ce qu'il devienne automatique.",
      witnessRewards: { reputationExternal: 4, coolness: -2 },
      secretRewards: { stats: { endurance: 2 } },
    },
    trophyId: 'trophy-tech-maree',
  },
  {
    id: 'tech-style-presseur-advanced',
    name: 'Mur Vivant',
    emoji: '🧱',
    source: 'style-advanced',
    relatedGestureStat: 'endurance',
    description: "Une garde haute qui avance sans jamais rompre, absorbant les coups pour mieux les retourner à bout portant.",
    rollBonus: 22,
    cooldownCards: 4,
    unlock: { type: 'trial-success', cardId: 'card-style-presseur-trial' },
    successSceneText:
      "Tu encaisses sans reculer d'un centimètre, et au moment où il croit avoir gagné l'échange, tu répliques à bout portant.",
    failureSceneText:
      "Le mur craque un instant. Un coup passe la garde et te déséquilibre juste assez pour perdre l'avancée.",
    trophyId: 'trophy-tech-mur-vivant',
  },

  // ── Contreur ─────────────────────────────────────────────────────────
  {
    id: 'tech-style-contreur-basic',
    name: 'Écho du Riposte',
    emoji: '🪃',
    source: 'style-basic',
    relatedGestureStat: 'reflexes',
    description: "Un contre lancé dans la fraction de seconde qui suit l'attaque adverse, avant même qu'elle ait fini son geste.",
    rollBonus: 14,
    cooldownCards: 3,
    unlock: { type: 'auto-after-debut' },
    successSceneText:
      "Son coup part, et le tien part presque en même temps — sauf que le tien arrive en premier, en plein sur la garde qui s'ouvre.",
    failureSceneText:
      "Tu anticipes une fraction de seconde trop tôt. Le contre part dans le vide, et son vrai coup, lui, arrive à l'heure.",
    publicAttemptVariant: {
      witnessLabel: 'La tenter devant témoin',
      secretLabel: "S'entraîner seul, en secret",
      witnessGainText: "Un contre pareil, ça se remarque — même depuis les gradins du fond.",
      secretGainText: "Tu retravailles le timing seul, encore et encore, sans qu'aucun adversaire n'en garde le souvenir.",
      witnessRewards: { reputationExternal: 4, coolness: -2 },
      secretRewards: { stats: { reflexes: 2 } },
    },
    trophyId: 'trophy-tech-echo',
  },
  {
    id: 'tech-style-contreur-advanced',
    name: 'Silence avant la Chute',
    emoji: '🕯️',
    source: 'style-advanced',
    relatedGestureStat: 'reflexes',
    description: "Un contre parfait, déclenché après avoir lu le tell précis qui précède l'attaque la plus dangereuse de l'adversaire.",
    rollBonus: 22,
    cooldownCards: 4,
    unlock: { type: 'trial-success', cardId: 'card-style-contreur-trial' },
    successSceneText:
      "Tu as vu le détail — l'épaule qui se charge une demi-seconde trop tôt — et tu frappes avant que son coup n'existe vraiment.",
    failureSceneText:
      "Le détail que tu croyais avoir repéré n'était qu'une feinte. Tu contres dans le vide, et le vrai coup, lui, était ailleurs.",
    trophyId: 'trophy-tech-silence',
  },
]
