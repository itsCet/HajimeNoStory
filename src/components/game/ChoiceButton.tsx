import { STAT_MAP } from '../../data/stats'
import type { StatKey } from '../../engine/types'

export function ChoiceButton({
  label,
  statTested,
  onClick,
}: {
  label: string
  statTested: StatKey
  onClick: () => void
}) {
  const stat = STAT_MAP[statTested]
  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:border-ring-400 transition-colors flex items-center justify-between gap-3"
    >
      <span className="font-medium">{label}</span>
      <span className="text-xs opacity-60 whitespace-nowrap">
        {stat.emoji} {stat.label}
      </span>
    </button>
  )
}
