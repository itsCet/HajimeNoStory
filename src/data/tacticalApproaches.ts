import type { TacticalApproachDef, TacticalApproachId, OpponentAggression } from '../engine/types'

// Les 3 approches tactiques disponibles à CHAQUE round d'un combat, quel que soit
// l'adversaire. Le choix reste tactique, jamais permanent : on peut en changer
// round après round.
export const TACTICAL_APPROACHES: Record<TacticalApproachId, TacticalApproachDef> = {
  agresser: {
    id: 'agresser',
    label: 'Agresser',
    emoji: '🔥',
    description: "Chercher le rapport de force, quitte à s'exposer. Gros risque, gros gain.",
    statTested: 'puissance',
    fatigueCost: 8,
  },
  temporiser: {
    id: 'temporiser',
    label: 'Temporiser',
    emoji: '🌀',
    description: 'Gérer la distance et le rythme, sans jamais forcer.',
    statTested: 'vitesse',
    fatigueCost: 3,
  },
  'contre-attaquer': {
    id: 'contre-attaquer',
    label: 'Contre-attaquer',
    emoji: '🎯',
    description: "Attendre l'erreur adverse pour la faire payer.",
    statTested: 'reflexes',
    fatigueCost: 5,
  },
}

export const TACTICAL_APPROACH_LIST: TacticalApproachDef[] = Object.values(TACTICAL_APPROACHES)

// Modificateur de difficulté appliqué selon le style de l'adversaire : certaines
// approches sont naturellement plus efficaces contre un profil donné.
const MATCHUP_MODIFIERS: Record<OpponentAggression, Partial<Record<TacticalApproachId, number>>> = {
  aggressive: {
    'contre-attaquer': -8, // un adversaire qui se jette dedans est plus facile à contrer
    agresser: 5, // échanger avec un cogneur est plus risqué
  },
  defensive: {
    agresser: -5, // un adversaire passif ne punit pas l'engagement
    temporiser: 8, // le poursuivre à distance est frustrant, peu productif
  },
  balanced: {},
}

export function matchupModifier(aggression: OpponentAggression, approach: TacticalApproachId): number {
  return MATCHUP_MODIFIERS[aggression][approach] ?? 0
}
