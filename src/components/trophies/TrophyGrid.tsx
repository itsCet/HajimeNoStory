import type { Trophy } from '../../engine/types'

export function TrophyGrid({ trophies, unlockedIds }: { trophies: Trophy[]; unlockedIds: Set<string> }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
      {trophies.map((t) => {
        const unlocked = unlockedIds.has(t.id)
        return (
          <div
            key={t.id}
            title={unlocked ? `${t.name} — ${t.description}` : `??? — ${t.unlockCondition}`}
            className={`aspect-square rounded-xl flex items-center justify-center text-2xl border ${
              unlocked
                ? 'bg-ember-500/15 border-ember-500/50'
                : 'bg-black/5 dark:bg-white/5 border-transparent grayscale opacity-40'
            }`}
          >
            {t.emoji}
          </div>
        )
      })}
    </div>
  )
}
