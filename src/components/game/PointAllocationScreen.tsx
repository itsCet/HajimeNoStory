import { useState } from 'react'
import type { CharacterState, StatKey } from '../../engine/types'
import { STATS } from '../../data/stats'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

export function PointAllocationScreen({
  character,
  onValidate,
}: {
  character: CharacterState
  onValidate: (allocation: Partial<Record<StatKey, number>>) => void
}) {
  const [draft, setDraft] = useState<Partial<Record<StatKey, number>>>({})
  const spent = Object.values(draft).reduce((a, b) => a + (b ?? 0), 0)
  const remaining = character.pendingPointsToAllocate - spent

  function add(key: StatKey, delta: number) {
    setDraft((d) => {
      const current = d[key] ?? 0
      const next = Math.max(0, current + delta)
      if (delta > 0 && remaining <= 0) return d
      return { ...d, [key]: next }
    })
  }

  return (
    <Card>
      <h2 className="font-display text-xl mb-1">Répartir les points</h2>
      <p className="text-sm opacity-60 mb-4">
        {remaining} point{remaining !== 1 ? 's' : ''} restant{remaining !== 1 ? 's' : ''}
      </p>

      <div className="space-y-3 mb-5">
        {STATS.map((s) => (
          <div key={s.key} className="flex items-center gap-3">
            <span className="w-8 text-lg text-center">{s.emoji}</span>
            <span className="flex-1 text-sm font-medium">{s.label}</span>
            <span className="text-xs opacity-60 w-10 text-right">
              {character.stats[s.key]}
              {draft[s.key] ? ` +${draft[s.key]}` : ''}
            </span>
            <button
              onClick={() => add(s.key, -1)}
              disabled={!draft[s.key]}
              className="w-7 h-7 rounded-full bg-black/10 dark:bg-white/10 disabled:opacity-30 flex items-center justify-center"
            >
              −
            </button>
            <button
              onClick={() => add(s.key, 1)}
              disabled={remaining <= 0}
              className="w-7 h-7 rounded-full bg-ring-600 text-white disabled:opacity-30 flex items-center justify-center"
            >
              +
            </button>
          </div>
        ))}
      </div>

      <Button className="w-full" disabled={spent === 0} onClick={() => onValidate(draft)}>
        Valider
      </Button>
    </Card>
  )
}
