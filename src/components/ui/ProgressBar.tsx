export function ProgressBar({
  value,
  max = 100,
  color,
  label,
  emoji,
  height = 8,
}: {
  value: number
  max?: number
  color: string
  label?: string
  emoji?: string
  height?: number
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs mb-1 opacity-80">
          <span>
            {emoji} {label}
          </span>
          <span>{Math.round(value)}</span>
        </div>
      )}
      <div className="w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden" style={{ height }}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}
