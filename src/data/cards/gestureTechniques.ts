import type { StatKey } from '../../engine/types'

// Techniques pouvant se greffer sur un geste testant une statistique donnée.
// Seules les techniques que le joueur a réellement débloquées s'affichent en jeu —
// cette liste ne fait que déclarer les correspondances possibles, toutes lignées
// et tous styles confondus.
export const GESTURE_TECHNIQUES: Record<StatKey, string[]> = {
  puissance: [
    'tech-style-puncher-basic',
    'tech-style-puncher-advanced',
    'tech-lineage-kurogane',
    'tech-generic-crochet-foie',
    'tech-generic-uppercut-ferme',
    'tech-generic-poing-point-final',
  ],
  technique: [
    'tech-style-boxeur-puncher-basic',
    'tech-style-boxeur-puncher-advanced',
    'tech-lineage-fujimori',
    'tech-generic-jeu-coude',
  ],
  vitesse: [
    'tech-style-out-boxer-basic',
    'tech-style-out-boxer-advanced',
    'tech-lineage-shirasagi',
    'tech-generic-jab-eclair',
    'tech-generic-double-jab',
  ],
  endurance: [
    'tech-style-presseur-basic',
    'tech-style-presseur-advanced',
    'tech-lineage-domon',
    'tech-generic-garde-fer',
    'tech-generic-contre-corps',
    'tech-generic-encaissement-total',
  ],
  reflexes: [
    'tech-style-contreur-basic',
    'tech-style-contreur-advanced',
    'tech-lineage-akatsu',
    'tech-lineage-himura',
    'tech-generic-esquive-laterale',
    'tech-generic-anticipation-parfaite',
  ],
  mental: ['tech-lineage-tsukimori', 'tech-lineage-otsuka', 'tech-generic-relance', 'tech-generic-sang-froid-glacial'],
  strategie: ['tech-lineage-nishikido', 'tech-generic-feinte-double', 'tech-generic-radar-combat'],
}
