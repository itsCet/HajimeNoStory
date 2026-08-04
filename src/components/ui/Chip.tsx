import type { RewardChip } from '../../engine/statEngine'
import { STAT_MAP } from '../../data/stats'

export function Chip({ chip }: { chip: RewardChip }) {
  const statDef = STAT_MAP[chip.label as keyof typeof STAT_MAP]
  const label = statDef ? statDef.label : chip.label
  const emoji = statDef ? statDef.emoji : chip.emoji
  const positive = chip.positive
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
        positive
          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
          : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200'
      }`}
    >
      <span>{emoji}</span>
      <span>{label}</span>
      <span>
        {positive ? '+' : '−'}
        {Math.abs(chip.value)}
      </span>
    </span>
  )
}
