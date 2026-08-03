export function QuickStatBadge({
  emoji,
  label,
  value,
  badge,
  onClick,
}: {
  emoji: string
  label: string
  value: string
  badge?: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="app-card relative rounded-2xl px-4 py-3 flex flex-col items-center gap-0.5 min-w-[92px] hover:scale-[1.03] active:scale-[0.98] transition-transform"
    >
      {badge && (
        <span className="absolute -top-2 -right-2 bg-ember-500 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 shadow">
          {badge}
        </span>
      )}
      <span className="text-2xl">{emoji}</span>
      <span className="text-xs opacity-70">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </button>
  )
}
