import type { Trophy } from '../../engine/types'
import { ALL_TECHNIQUES } from '../techniques'

// Un trophée par technique apprenable, généré depuis la donnée des techniques
// elle-même — débloqué à la première utilisation réussie.
export const TECHNIQUE_TROPHIES: Trophy[] = ALL_TECHNIQUES.map((t) => ({
  id: t.trophyId,
  category: 'technique' as const,
  name: t.name,
  emoji: t.emoji,
  description: t.description,
  unlockCondition: `Utiliser « ${t.name} » avec succès pour la première fois.`,
}))
