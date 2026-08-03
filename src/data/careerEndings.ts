import type { CareerEndingDef } from '../engine/types'

export const CAREER_ENDINGS: CareerEndingDef[] = [
  {
    id: 'ending-retraite-sommet',
    type: 'retirement',
    title: 'Raccrocher les gants au sommet',
    text:
      "Tu poses les gants toi-même, au meilleur moment pour le faire — celui que la plupart des boxeurs ne reconnaissent jamais à temps. La salle qui t'a vu débuter t'ouvre ses portes une dernière fois, mais pas pour un combat : pour le tablier d'entraîneur.",
  },
  {
    id: 'ending-prolongation',
    type: 'glory',
    title: 'Jusqu\'à la limite',
    text:
      "Tu as continué bien après le moment où il aurait été raisonnable de t'arrêter. Le corps a fini par réclamer son dû, mais personne dans le milieu ne remettra jamais en cause ce que tu as bâti sur ce ring.",
  },
  {
    id: 'ending-tragique',
    type: 'tragic',
    title: 'Le dernier round',
    text:
      "Un combat de trop a tranché à ta place. La commission médicale a rendu son verdict, sans appel possible — ta carrière s'arrête ici, sur une décision que tu n'as pas eu à prendre toi-même.",
  },
]

export const CAREER_ENDING_MAP: Record<string, CareerEndingDef> = CAREER_ENDINGS.reduce(
  (acc, e) => ({ ...acc, [e.id]: e }),
  {} as Record<string, CareerEndingDef>,
)
