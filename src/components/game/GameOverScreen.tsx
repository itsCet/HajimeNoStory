import type { CharacterState, CareerEndingType } from '../../engine/types'
import { getEndingText } from '../../engine/careerEndEngine'
import { RANK_MAP } from '../../data/ranks'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

const ENDING_EMOJI: Record<CareerEndingType, string> = {
  retirement: '🕊️',
  glory: '🌇',
  tragic: '💔',
}

export function GameOverScreen({
  character,
  endingType,
  onBackHome,
}: {
  character: CharacterState
  endingType: CareerEndingType
  onBackHome: () => void
}) {
  const ending = getEndingText(endingType)
  const rank = RANK_MAP[character.rankId]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card className="max-w-md w-full text-center">
        <div className="text-5xl mb-3">{ENDING_EMOJI[endingType]}</div>
        <h2 className="font-display text-xl mb-1">{ending.title}</h2>
        <p className="text-sm opacity-60 mb-4">
          {character.name} · {rank.label} · {character.yearIndex} ans de carrière
        </p>
        <p className="opacity-85 leading-relaxed mb-6">{ending.text}</p>
        <Button className="w-full" onClick={onBackHome}>
          Retour à l'accueil
        </Button>
      </Card>
    </div>
  )
}
