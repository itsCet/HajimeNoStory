import type { TacticalApproachId } from '../engine/types'
import type { RollTier } from '../engine/rng'

// Commentaire court, générique, pour chaque round d'un combat — indépendant de
// l'adversaire. Le texte riche et spécifique reste réservé à la résolution finale
// (outcomes du FightCard), affichée une fois le combat terminé.
export const ROUND_COMMENTARY: Record<TacticalApproachId, Record<RollTier, string[]>> = {
  agresser: {
    'critical-failure': [
      "Tu t'ouvres complètement en cherchant le rapport de force, et le paies immédiatement.",
      "Le coup part trop large. Il n'attendait que ça.",
    ],
    failure: [
      "L'échange tourne à ton désavantage. Rien d'irréparable, mais ça pique.",
      "Tu pousses, sans jamais vraiment prendre le dessus.",
    ],
    success: [
      "Le coup porte. Il recule d'un pas qu'il n'avait pas prévu de faire.",
      "Tu prends clairement l'ascendant sur cet échange.",
    ],
    'critical-success': [
      "Le coup fait vaciller ton adversaire. La salle retient son souffle.",
      "Tu domines totalement l'échange, sans qu'il ait pu répondre.",
    ],
  },
  temporiser: {
    'critical-failure': [
      "Il coupe ta trajectoire au pire moment, et te punit d'être resté trop prévisible.",
      "Ton jeu de jambes te trahit, et tu te retrouves à découvert.",
    ],
    failure: [
      "Tu gères la distance sans vraiment marquer de points nets.",
      "Le rythme reste trop prudent pour vraiment compter.",
    ],
    success: [
      "Tu contrôles la distance et places quelques touches propres.",
      "Il ne trouve jamais vraiment le rythme que tu lui imposes.",
    ],
    'critical-success': [
      "Il ne te touche presque jamais, frustré de ne jamais trouver l'angle.",
      "Ta mobilité use patiemment sa confiance, round après round.",
    ],
  },
  'contre-attaquer': {
    'critical-failure': [
      "Tu anticipes mal, et le vrai coup arrive avant ton contre.",
      "Le contre part dans le vide. Il en profite sans ménagement.",
    ],
    failure: [
      "Le timing reste imparfait, un instant trop tard pour vraiment compter.",
      "Tu attends l'ouverture, qui ne vient jamais tout à fait.",
    ],
    success: [
      "Tu laisses venir, puis places ton contre au bon moment.",
      "Son erreur ne passe pas inaperçue — tu la lui fais payer.",
    ],
    'critical-success': [
      "Le contre est si net que l'arbitre marque une pause pour vérifier que tout va bien pour lui.",
      "Tu lis chaque intention avant qu'elle ne devienne un geste.",
    ],
  },
}
