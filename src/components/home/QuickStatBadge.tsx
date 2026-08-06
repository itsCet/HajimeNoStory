export function QuickStatBadge({
  emoji,
  iconSrc,
  label,
  value,
  badge,
  onClick,
}: {
  emoji?: string
  iconSrc?: string
  label: string
  value: string
  badge?: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="app-card relative rounded-2xl px-4 py-3 flex flex-col items-center gap-0.5 min-w-[92px] min-h-[44px] cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-500"
    >
      {badge && (
        // ember-900 sur ember-300 : contraste suffisant, là où blanc sur ember-500 tombait à 2.2:1
        <span className="absolute -top-2 -right-2 bg-ember-300 text-ember-900 text-[10px] font-bold rounded-full px-1.5 py-0.5 shadow">
          {badge}
        </span>
      )}
      {iconSrc ? (
        <img src={iconSrc} alt="" className="w-11 h-11 rounded-lg object-cover shadow-sm" />
      ) : (
        <span className="text-2xl">{emoji}</span>
      )}
      <span className="text-xs opacity-70">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </button>
  )
}
