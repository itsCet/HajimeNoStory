import type { Technique } from '../../engine/types'

// Une technique secrète par lignée (9), transmise via la carte exclusive de l'héritage.
// Personne en dehors de cette lignée ne peut jamais l'obtenir.
export const LINEAGE_TECHNIQUES: Technique[] = [
  {
    id: 'tech-lineage-kurogane',
    name: 'Poing qui Fend le Bois',
    emoji: '🪵',
    source: 'lineage-secret',
    relatedGestureStat: 'puissance',
    description: "L'héritage Kurogane : un coup transmis de main en main, pensé pour traverser une garde plutôt que la contourner.",
    rollBonus: 18,
    cooldownCards: 4,
    unlock: { type: 'lineage-card', cardId: 'card-lineage-kurogane' },
    successSceneText:
      "Le geste que Kurogane t'a fait répéter mille fois part enfin sans hésitation. La garde adverse cède comme une planche mal clouée.",
    failureSceneText:
      "Le coup part juste, mais trop tôt dans ta tête — Kurogane t'a toujours dit que c'était encore ta faiblesse. Il esquive de justesse.",
    trophyId: 'trophy-tech-fend-bois',
  },
  {
    id: 'tech-lineage-fujimori',
    name: 'Trait de Rasoir',
    emoji: '🪒',
    source: 'lineage-secret',
    relatedGestureStat: 'technique',
    description: "L'héritage Fujimori : un jab d'une précision absolue, placé exactement là où la garde adverse est la plus fine.",
    rollBonus: 18,
    cooldownCards: 4,
    unlock: { type: 'lineage-card', cardId: 'card-lineage-fujimori' },
    successSceneText:
      "Le coup trouve l'interstice exact que Fujimori t'a appris à voir. Net, propre, sans une once de gaspillage.",
    failureSceneText:
      "Tu vises trop fin. Le coup rate l'ouverture d'un rien, et Fujimori, en toi, te reproche déjà cette imprécision.",
    trophyId: 'trophy-tech-rasoir',
  },
  {
    id: 'tech-lineage-otsuka',
    name: 'Lecture Totale',
    emoji: '📖',
    source: 'lineage-secret',
    relatedGestureStat: 'mental',
    description: "L'héritage Otsuka : une capacité à anticiper l'intégralité du schéma de combat adverse, coup avant qu'il ne parte.",
    rollBonus: 18,
    cooldownCards: 4,
    unlock: { type: 'lineage-card', cardId: 'card-lineage-otsuka' },
    successSceneText:
      "Tout ce qu'Otsuka t'a fait noter, des heures durant, prend sens d'un coup. Tu sais ce qu'il va faire avant qu'il le sache lui-même.",
    failureSceneText:
      "Le schéma que tu croyais avoir percé se brise — il improvise, et ton avance tactique s'évapore d'un coup.",
    trophyId: 'trophy-tech-lecture-totale',
  },
  {
    id: 'tech-lineage-shirasagi',
    name: 'Vol du Héron',
    emoji: '🕊️',
    source: 'lineage-secret',
    relatedGestureStat: 'vitesse',
    description: "L'héritage Shirasagi : un déplacement si léger que le regard adverse peine à le suivre jusqu'à l'impact.",
    rollBonus: 18,
    cooldownCards: 4,
    unlock: { type: 'lineage-card', cardId: 'card-lineage-shirasagi' },
    successSceneText:
      "Tes pieds quittent le sol sans bruit, exactement comme Shirasagi te l'a enseigné. Tu es déjà reparti quand il réalise que tu étais là.",
    failureSceneText:
      "Le pas part une fraction trop lourd. Shirasagi t'a toujours dit qu'un héron pressé retombe comme une pierre — c'est ce qui arrive.",
    trophyId: 'trophy-tech-heron',
  },
  {
    id: 'tech-lineage-domon',
    name: 'Roc Immobile',
    emoji: '🪨',
    source: 'lineage-secret',
    relatedGestureStat: 'endurance',
    description: "L'héritage Domon : une capacité à encaisser un échange entier sans jamais céder un pouce de terrain.",
    rollBonus: 18,
    cooldownCards: 4,
    unlock: { type: 'lineage-card', cardId: 'card-lineage-domon' },
    successSceneText:
      "Tu tiens la position exactement comme Domon te l'a martelé pendant des années. L'échange se termine, et c'est toi qui es encore là.",
    failureSceneText:
      "Un coup trouve la faille que Domon redoutait toujours de te voir laisser. Tu plies, juste assez pour perdre l'échange.",
    trophyId: 'trophy-tech-roc',
  },
  {
    id: 'tech-lineage-akatsu',
    name: 'Instinct de Ruelle',
    emoji: '🌆',
    source: 'lineage-secret',
    relatedGestureStat: 'reflexes',
    description: "L'héritage Akatsu : une combinaison improvisée, née du sparring rugueux plutôt que d'aucun manuel.",
    rollBonus: 18,
    cooldownCards: 4,
    unlock: { type: 'lineage-card', cardId: 'card-lineage-akatsu' },
    successSceneText:
      "Rien de tout ça n'est écrit nulle part — c'est Akatsu qui te l'a mis dans le corps, à la dure. Le coup surgit sans prévenir, et touche.",
    failureSceneText:
      "L'improvisation part de travers. Akatsu t'a toujours prévenu : sans discipline derrière, l'instinct seul ne suffit pas toujours.",
    trophyId: 'trophy-tech-ruelle',
  },
  {
    id: 'tech-lineage-himura',
    name: 'Piège Silencieux',
    emoji: '🕸️',
    source: 'lineage-secret',
    relatedGestureStat: 'reflexes',
    description: "L'héritage Himura : une garde délibérément ouverte, posée comme un appât pour attirer l'erreur adverse.",
    rollBonus: 18,
    cooldownCards: 4,
    unlock: { type: 'lineage-card', cardId: 'card-lineage-himura' },
    successSceneText:
      "L'ouverture que tu laisses est fausse, exactement comme Himura te l'a enseigné. Il mord, et le piège se referme aussitôt.",
    failureSceneText:
      "Il ne mord pas à l'appât. Himura t'a prévenu : un piège qu'on referme trop tôt ne prend jamais rien.",
    trophyId: 'trophy-tech-piege',
  },
  {
    id: 'tech-lineage-nishikido',
    name: 'Échec et Mat',
    emoji: '♟️',
    source: 'lineage-secret',
    relatedGestureStat: 'strategie',
    description: "L'héritage Nishikido : une séquence de feintes préparée des jours à l'avance, qui ne laisse qu'une seule issue à l'adversaire.",
    rollBonus: 18,
    cooldownCards: 4,
    unlock: { type: 'lineage-card', cardId: 'card-lineage-nishikido' },
    successSceneText:
      "Chaque feinte a été posée d'avance, comme Nishikido te l'a montré sur son carnet. Il ne lui reste plus qu'une seule ouverture — la mauvaise.",
    failureSceneText:
      "Il dévie du script que tu avais préparé. Nishikido le dit toujours : un plan qui ne survit pas au premier échange n'était pas un plan.",
    trophyId: 'trophy-tech-echec-mat',
  },
  {
    id: 'tech-lineage-tsukimori',
    name: 'Étincelle du Showman',
    emoji: '✨',
    source: 'lineage-secret',
    relatedGestureStat: 'mental',
    description: "L'héritage Tsukimori : un enchaînement spectaculaire qui électrise la salle autant qu'il déstabilise l'adversaire.",
    rollBonus: 18,
    cooldownCards: 4,
    unlock: { type: 'lineage-card', cardId: 'card-lineage-tsukimori' },
    successSceneText:
      "Tsukimori te l'a répété : un bon coup se voit, un grand coup se ressent dans toute la salle. Le public explose, et lui, vacille.",
    failureSceneText:
      "Le geste retombe à plat, trop appuyé. Tsukimori grimacerait en le voyant — le spectacle sans l'impact ne sert à rien.",
    trophyId: 'trophy-tech-showman',
  },
]
