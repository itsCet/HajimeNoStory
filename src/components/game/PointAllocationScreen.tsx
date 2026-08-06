import { useState } from 'react'
import type { CharacterState, StatKey } from '../../engine/types'
import { STATS } from '../../data/stats'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

/** Plafond dur d'une statistique (aligné sur allocatePoints et characterFactory). */
const MAX_STAT = 100

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

  /** Points encore acceptables sur cette stat avant de toucher le plafond. */
  function headroom(key: StatKey): number {
    return Math.max(0, MAX_STAT - character.stats[key] - (draft[key] ?? 0))
  }

  /** Une stat dépasse-t-elle le plafond ? Ne doit jamais arriver, mais bloque la validation si ça arrive. */
  const overflowing = STATS.filter((s) => character.stats[s.key] + (draft[s.key] ?? 0) > MAX_STAT)

  function add(key: StatKey, delta: number) {
    setDraft((d) => {
      const current = d[key] ?? 0
      if (delta > 0) {
        if (remaining <= 0) return d
        if (character.stats[key] + current >= MAX_STAT) return d
      }
      return { ...d, [key]: Math.max(0, current + delta) }
    })
  }

  /** Distribue tous les points restants au hasard, en respectant le plafond de chaque stat. */
  function randomize() {
    setDraft((d) => {
      const next: Partial<Record<StatKey, number>> = { ...d }
      let left = character.pendingPointsToAllocate - Object.values(next).reduce((a, b) => a + (b ?? 0), 0)
      // Ne considère que les stats qui ont encore de la place sous le plafond.
      let eligible = STATS.filter((s) => character.stats[s.key] + (next[s.key] ?? 0) < MAX_STAT)
      while (left > 0 && eligible.length > 0) {
        const pick = eligible[Math.floor(Math.random() * eligible.length)]
        next[pick.key] = (next[pick.key] ?? 0) + 1
        left -= 1
        eligible = eligible.filter((s) => character.stats[s.key] + (next[s.key] ?? 0) < MAX_STAT)
      }
      return next
    })
  }

  function reset() {
    setDraft({})
  }

  const allMaxed = STATS.every((s) => headroom(s.key) === 0)

  return (
    <Card>
      <h2 className="font-display text-xl mb-1">Répartir les points</h2>
      <p className={`text-sm mb-4 ${remaining > 0 ? 'opacity-70' : 'opacity-50'}`}>
        {remaining} point{remaining !== 1 ? 's' : ''} restant{remaining !== 1 ? 's' : ''}
      </p>

      <div className="flex gap-2 mb-4">
        <Button variant="secondary" className="flex-1" onClick={randomize} disabled={remaining <= 0 || allMaxed}>
          🎲 Répartir au hasard
        </Button>
        <Button variant="ghost" onClick={reset} disabled={spent === 0}>
          Réinitialiser
        </Button>
      </div>

      <div className="space-y-3 mb-5">
        {STATS.map((s) => {
          const added = draft[s.key] ?? 0
          const total = character.stats[s.key] + added
          const maxed = total >= MAX_STAT
          const over = total > MAX_STAT
          return (
            <div key={s.key} className="flex items-center gap-3">
              <span className="w-8 text-lg text-center">{s.emoji}</span>
              <span className="flex-1 text-sm font-medium">{s.label}</span>
              <span
                className={`text-xs w-20 text-right tabular-nums ${
                  over
                    ? 'text-red-500 font-bold'
                    : maxed
                      ? 'text-amber-500 font-semibold'
                      : 'opacity-70'
                }`}
              >
                {total}
                {added > 0 && <span className="opacity-70"> (+{added})</span>}
                {maxed && !over && <span className="ml-1">MAX</span>}
              </span>
              <button
                onClick={() => add(s.key, -1)}
                disabled={!added}
                aria-label={`Retirer un point en ${s.label}`}
                className="w-11 h-11 rounded-full bg-black/10 dark:bg-white/10 disabled:opacity-30 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-500"
              >
                −
              </button>
              <button
                onClick={() => add(s.key, 1)}
                disabled={remaining <= 0 || headroom(s.key) === 0}
                aria-label={`Ajouter un point en ${s.label}`}
                className="w-11 h-11 rounded-full bg-ring-600 text-white disabled:opacity-30 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-500"
              >
                +
              </button>
            </div>
          )
        })}
      </div>

      {overflowing.length > 0 && (
        <p className="text-sm text-red-500 font-medium mb-3">
          Plafond dépassé sur {overflowing.map((s) => s.label).join(', ')}. Retire des points avant de valider.
        </p>
      )}

      {remaining > 0 && overflowing.length === 0 && (
        <p className="text-xs opacity-70 mb-3">
          {allMaxed
            ? 'Toutes tes statistiques sont au maximum : les points restants seront perdus.'
            : `Il te reste ${remaining} point${remaining !== 1 ? 's' : ''} à placer.`}
        </p>
      )}

      <Button className="w-full" disabled={spent === 0 || overflowing.length > 0} onClick={() => onValidate(draft)}>
        Valider
      </Button>
    </Card>
  )
}
