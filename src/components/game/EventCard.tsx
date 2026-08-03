import type { CharacterState, LifeMomentCard, TrainingCard, LineageExclusiveCard } from '../../engine/types'
import { renderText } from '../../engine/cardEngine'
import { Card } from '../ui/Card'
import { ChoiceButton } from './ChoiceButton'

const TYPE_LABEL: Record<string, string> = {
  'life-moment': 'Moment de vie',
  training: 'Entraînement',
  'lineage-exclusive': 'Moment exclusif',
}

export function EventCard({
  card,
  character,
  onChoose,
}: {
  card: LifeMomentCard | TrainingCard | LineageExclusiveCard
  character: CharacterState
  onChoose: (choiceId: string) => void
}) {
  const options = card.type === 'training' ? card.approaches : card.choices

  return (
    <Card>
      <div className="text-xs uppercase tracking-wide opacity-50 mb-1">{TYPE_LABEL[card.type]}</div>
      <h2 className="font-display text-xl mb-3">{card.title}</h2>
      <p className="opacity-85 leading-relaxed mb-5 whitespace-pre-line">{renderText(character, card.narrativeText)}</p>
      <div className="space-y-2.5">
        {options.map((opt) => (
          <ChoiceButton key={opt.id} label={opt.label} statTested={opt.statTested} onClick={() => onChoose(opt.id)} />
        ))}
      </div>
    </Card>
  )
}
