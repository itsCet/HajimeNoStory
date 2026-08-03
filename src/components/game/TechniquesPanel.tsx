import { useState } from 'react'
import type { CharacterState } from '../../engine/types'
import { listUnlockedTechniques } from '../../engine/techniqueEngine'
import { DORMANT_POTENTIAL } from '../../data/dormantPotential'

export function TechniquesButton({ character }: { character: CharacterState }) {
  const [open, setOpen] = useState(false)
  const techniques = listUnlockedTechniques(character)
  if (techniques.length === 0 && !character.dormantPotential.mode) return null

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-ring-600 hover:bg-ring-700 text-white shadow-lg shadow-ring-900/30 flex items-center justify-center text-2xl"
        aria-label="Techniques"
        title="Techniques"
      >
        🥊
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="app-card w-full sm:w-96 sm:rounded-2xl rounded-t-2xl max-h-[80vh] overflow-y-auto p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display text-lg">Techniques</h3>
              <button onClick={() => setOpen(false)} className="opacity-60 hover:opacity-100">
                ✕
              </button>
            </div>
            <div className="space-y-2.5">
              {character.dormantPotential.mode && (
                <div className="rounded-xl px-4 py-3 border-2 border-ember-500/50 bg-ember-500/10">
                  <div className="font-medium">🐆 {DORMANT_POTENTIAL.name}</div>
                  <div className="text-xs opacity-70 mt-0.5">
                    {character.dormantPotential.mode === 'mastered' ? 'Maîtrisé — sans coût.' : 'Déchaîné — coûte de la santé à chaque usage.'}
                  </div>
                </div>
              )}
              {techniques.map((t) => (
                <div key={t.id} className="rounded-xl px-4 py-3 border border-black/10 dark:border-white/10">
                  <div className="flex justify-between items-start">
                    <div className="font-medium">
                      {t.emoji} {t.name}
                    </div>
                    <span className={`text-xs font-semibold ${t.ready ? 'text-emerald-600 dark:text-emerald-400' : 'opacity-50'}`}>
                      {t.ready ? 'Prête' : `Repos (${t.cooldownRemaining})`}
                    </span>
                  </div>
                  <div className="text-xs opacity-60 mt-0.5">{t.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
