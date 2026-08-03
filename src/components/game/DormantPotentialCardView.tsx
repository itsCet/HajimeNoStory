import type { DormantPotentialCard } from '../../engine/types'
import { Card } from '../ui/Card'

export function DormantPotentialCardView({
  card,
  onChoose,
}: {
  card: DormantPotentialCard
  onChoose: (doorId: 'force' | 'negotiate' | 'decline') => void
}) {
  return (
    <Card className="border-2 border-ember-500/50">
      <div className="text-xs uppercase tracking-wide text-ember-600 dark:text-ember-400 mb-1 font-bold">
        Un choix qui ne se représentera pas
      </div>
      <h2 className="font-display text-xl mb-3">{card.title}</h2>
      <p className="opacity-85 leading-relaxed mb-5 whitespace-pre-line">{card.narrativeText}</p>
      <div className="space-y-2.5">
        {card.doors.map((door) => (
          <button
            key={door.id}
            onClick={() => onChoose(door.id)}
            className="w-full text-left rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:border-ember-500 transition-colors"
          >
            {door.label}
          </button>
        ))}
      </div>
    </Card>
  )
}
