import type { PatchNote } from '../engine/types'

export const PATCH_NOTES: PatchNote[] = [
  {
    version: '2.2.0',
    date: '2026-08-05',
    title: 'Deux fois plus de tout',
    sections: [
      {
        emoji: '🎴',
        heading: 'Le contenu doublé, purement et simplement',
        body:
          "78 nouvelles cartes écrites : la pioche passe de 78 à 156. Moments de vie, entraînements, combats — chaque palier de carrière dispose désormais de 37 à 53 cartes éligibles au lieu de 10 à 29. Deux carrières ne se ressemblent plus.",
      },
      {
        emoji: '🥊',
        heading: 'Beaucoup plus de combats',
        body:
          "Le nombre d'adversaires passe de 19 à 43. La fin de carrière était le point noir : les paliers Éliminatoire et Challenger mondial ne proposaient qu'UN SEUL combat, revu encore et encore. Ils en comptent désormais sept, du top 10 mondial au cogneur aux trente-et-un KO.",
      },
      {
        emoji: '👑',
        heading: 'Une couronne plus difficile à garder',
        body:
          "Huit nouveaux prétendants pour la boucle de champion du monde : l'unification des ceintures, un compatriote qui divise le pays, un colosse qui a repris dix kilos après la pesée, un revanchard obsessionnel, un médaillé olympique, l'héritier d'un ancien adversaire, une nuit d'orage sur un ring extérieur, et un retour après huit mois d'arrêt.",
      },
    ],
  },
  {
    version: '2.1.0',
    date: '2026-08-04',
    title: 'Fini les redites',
    sections: [
      {
        emoji: '🔀',
        heading: 'Les mêmes questions ne reviennent plus en boucle',
        body:
          "La pioche exclut désormais les cinq dernières cartes vues. Fini l'impression de retomber toujours sur les mêmes situations, en particulier en fin de carrière où le vivier était le plus mince.",
      },
      {
        emoji: '🖼️',
        heading: 'Nouvelle identité visuelle',
        body:
          "Logo retravaillé, murs de briques en fond d'écran, et de vraies illustrations à la place des émojis pour les Trophées, la Boutique, l'Historique et les Patch notes.",
      },
    ],
  },
  {
    version: '2.0.0',
    date: '2026-08-04',
    title: 'Round par round',
    sections: [
      {
        emoji: '🥊',
        heading: 'Les combats ne se jouent plus en un seul jet',
        body:
          "Chaque combat se déroule maintenant round après round. À chaque reprise, tu choisis ton approche : agresser pour chercher le rapport de force, temporiser pour gérer la distance, ou contre-attaquer pour punir l'erreur adverse. L'avantage s'accumule d'un round à l'autre.",
      },
      {
        emoji: '📊',
        heading: 'Un combat que tu peux voir basculer',
        body:
          "Une jauge d'ascendant suit le rapport de force en direct. Prends assez d'avance et le combat s'arrête avant la limite ; sinon, tout se joue à la décision des juges au dernier round.",
      },
      {
        emoji: '🎯',
        heading: 'Lis ton adversaire',
        body:
          "Chaque boxeur a son tempérament. Contrer celui qui se jette dedans paie ; poursuivre un adversaire fuyant à distance est une perte de temps. Techniques et instinct s'utilisent désormais round par round, plus une seule fois par combat.",
      },
    ],
  },
  {
    version: '1.2.0',
    date: '2026-08-04',
    title: 'Un jeu plus juste',
    sections: [
      {
        emoji: '⚖️',
        heading: "Fini le sentiment d'échouer en permanence",
        body:
          "Les seuils de réussite ont été revus : à niveau égal face à la difficulté, une action réussit désormais dans deux tiers des cas au lieu d'une sur deux. Les gains affichés correspondent enfin à ce qui est réellement arrivé.",
      },
      {
        emoji: '💬',
        heading: 'Toutes les questions ont plusieurs réponses',
        body:
          "Quarante-neuf cartes ne proposaient qu'une seule option — un choix qui n'en était pas un. Chacune dispose maintenant d'une vraie alternative, testant une statistique différente.",
      },
      {
        emoji: '🔧',
        heading: 'Corrections',
        body:
          "La retraite ne boucle plus indéfiniment sur l'écran de fin. Les techniques indisponibles sans raison sont réparées, et leur temps de repos se décompte correctement.",
      },
    ],
  },
  {
    version: '1.1.0',
    date: '2026-08-03',
    title: 'Cinq rounds par an',
    sections: [
      {
        emoji: '📅',
        heading: 'Un rythme resserré',
        body:
          "Cinq évènements par année au lieu de dix. Seuils de rang, points à répartir et déclenchements narratifs ont tous été réajustés pour que la carrière avance au même rythme qu'avant, en moins de temps mort.",
      },
      {
        emoji: '🐆',
        heading: 'Le Fauve ne reste plus bloqué',
        body:
          "Tomber sur la révélation au tout dernier évènement de l'année ne repousse plus le choix des trois portes à l'année suivante.",
      },
    ],
  },
  {
    version: '1.0.0',
    date: '2026-08-03',
    title: 'La totale',
    sections: [
      {
        emoji: '🏆',
        heading: 'Une carrière entière, du premier bleu à la légende',
        body:
          "Le ring ne s'arrête plus après les débuts pro. Grimpe le classement japonais, arrache le titre national, exporte ta réputation jusqu'en OPBF, puis va chercher une ceinture mondiale — et défends-la aussi longtemps que ton corps voudra bien tenir.",
      },
      {
        emoji: '🐆',
        heading: 'Quelque chose dort en toi',
        body:
          "Certains boxeurs portent un instinct qu'ils ne soupçonnent pas eux-mêmes. Il se taira longtemps. Le jour où il se nomme, à toi de décider si tu le prends de force, si tu négocies, ou si tu préfères ne jamais savoir.",
      },
      {
        emoji: '🥋',
        heading: 'Neuf salles, neuf écoles, un chemin sans maître',
        body:
          "Choisis une lignée d'entraîneur pour hériter d'une école entière — ou pars sans rien, en Autodidacte, et construis ta propre légende sans devoir rien à personne.",
      },
      {
        emoji: '🎖️',
        heading: 'Trophées, boutique et historique',
        body:
          "Chaque carrière terminée rapporte des Éclats à dépenser en avantages pour la suivante, alimente ton historique, et débloque de nouveaux trophées à travers quatre catégories.",
      },
    ],
  },
  {
    version: '0.1.0',
    date: '2026-06-12',
    title: 'Premier round',
    sections: [
      {
        emoji: '🥊',
        heading: "Les premiers pas sur le ring",
        body:
          "Crée ton boxeur, choisis sa salle d'origine, sa lignée, son style inné et sa discipline de prédilection. Le tunnel de création complet est en place — ou laisse tout au hasard en mode Destin tracé.",
      },
      {
        emoji: '📋',
        heading: "Une fiche qui vit avec toi",
        body:
          "Statistiques, santé, fatigue, sang-froid : ta fiche personnage suit chaque choix, chaque combat, chaque décision d'entraînement.",
      },
      {
        emoji: '🎬',
        heading: 'Des cartes, pas des menus',
        body:
          "Moments de vie, séances d'entraînement, premiers combats : chaque évènement se joue comme une scène, avec ses propres conséquences.",
      },
    ],
  },
]
