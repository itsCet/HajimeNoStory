import type { Trophy } from '../../engine/types'

export function TrophyGrid({
  trophies,
  unlockedIds,
  onSelect,
  selectedId,
}: {
  trophies: Trophy[]
  unlockedIds: Set<string>
  onSelect: (trophy: Trophy) => void
  selectedId: string | null
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
      {trophies.map((t) => {
        const unlocked = unlockedIds.has(t.id)
        const selected = selectedId === t.id
        return (
          <button
            key={t.id}
            onClick={() => onSelect(t)}
            className={`rounded-xl px-2 py-3 flex flex-col items-center gap-1.5 border transition-colors text-center ${
              unlocked
                ? 'bg-ember-500/15 border-ember-500/50 hover:border-ember-500'
                : 'bg-black/5 dark:bg-white/5 border-transparent hover:border-black/20 dark:hover:border-white/20'
            } ${selected ? 'ring-2 ring-ring-400' : ''}`}
          >
            <span className={`text-2xl leading-none ${unlocked ? '' : 'grayscale opacity-40'}`}>{t.emoji}</span>
            <span className={`text-[11px] leading-tight ${unlocked ? 'opacity-90' : 'opacity-45'}`}>{t.name}</span>
          </button>
        )
      })}
    </div>
  )
}
