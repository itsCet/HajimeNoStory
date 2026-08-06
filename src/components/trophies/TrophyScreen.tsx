import { useState } from 'react'
import type { Trophy } from '../../engine/types'
import { useMetaStore } from '../../store/metaStore'
import { useNavStore } from '../../store/navStore'
import { RANK_TROPHIES, TITLE_TROPHIES, TECHNIQUE_TROPHIES, MARK_TROPHIES, ALL_TROPHIES } from '../../data/trophies'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { TrophyGrid } from './TrophyGrid'

export function TrophyScreen() {
  const goTo = useNavStore((s) => s.goTo)
  const unlockedIds = new Set(useMetaStore((s) => s.unlockedTrophyIds))
  const [selected, setSelected] = useState<Trophy | null>(null)

  const selectedUnlocked = selected ? unlockedIds.has(selected.id) : false

  const sections: { emoji: string; label: string; trophies: Trophy[] }[] = [
    { emoji: '🏅', label: 'Rangs', trophies: RANK_TROPHIES },
    { emoji: '👑', label: 'Titres', trophies: TITLE_TROPHIES },
    { emoji: '🥊', label: 'Techniques', trophies: TECHNIQUE_TROPHIES },
    { emoji: '✨', label: 'Marques', trophies: MARK_TROPHIES },
  ]

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center gap-4 pb-40">
      <div className="w-full max-w-2xl flex items-center justify-between">
        <Button variant="ghost" onClick={() => goTo('home')}>
          ← Retour
        </Button>
        <span className="text-sm font-semibold">
          {unlockedIds.size}/{ALL_TROPHIES.length}
        </span>
      </div>

      <p className="w-full max-w-2xl text-xs opacity-80 -mt-2 font-medium">
        Touche un trophée pour savoir comment l'obtenir.
      </p>

      <div className="w-full max-w-2xl space-y-5">
        {sections.map((s) => {
          const count = s.trophies.filter((t) => unlockedIds.has(t.id)).length
          return (
            <Card key={s.label}>
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display">
                  {s.emoji} {s.label}
                </h3>
                <span className="text-xs opacity-50">
                  {count}/{s.trophies.length}
                </span>
              </div>
              <TrophyGrid
                trophies={s.trophies}
                unlockedIds={unlockedIds}
                onSelect={setSelected}
                selectedId={selected?.id ?? null}
              />
            </Card>
          )
        })}
      </div>

      {selected && (
        <div className="fixed bottom-0 left-0 right-0 px-4 pb-4 pointer-events-none">
          <div className="max-w-2xl mx-auto app-card rounded-2xl p-4 shadow-xl pointer-events-auto border border-black/10 dark:border-white/10">
            <div className="flex items-start gap-3">
              <span className={`text-3xl leading-none ${selectedUnlocked ? '' : 'grayscale opacity-50'}`}>
                {selected.emoji}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-display text-base">{selected.name}</div>
                <div className="text-[11px] uppercase tracking-wide opacity-50 mt-0.5">
                  {selectedUnlocked ? 'Débloqué' : 'À débloquer'}
                </div>
                <p className="text-sm opacity-85 mt-2 leading-relaxed">
                  {selectedUnlocked ? selected.description : selected.unlockCondition}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-lg opacity-40 hover:opacity-90 leading-none px-1"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
