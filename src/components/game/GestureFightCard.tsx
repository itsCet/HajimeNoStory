import { useState } from 'react'
import type { CharacterState, FightCard } from '../../engine/types'
import { eligibleReadyTechniquesForGesture } from '../../engine/techniqueEngine'
import { renderText } from '../../engine/cardEngine'
import { DORMANT_POTENTIAL } from '../../data/dormantPotential'
import { Card } from '../ui/Card'
import { ChoiceButton } from './ChoiceButton'

export function GestureFightCard({
  card,
  character,
  onResolve,
}: {
  card: FightCard
  character: CharacterState
  onResolve: (gestureId: string, techniqueId?: string, useDormant?: boolean) => void
}) {
  const [selectedGestureId, setSelectedGestureId] = useState<string | null>(null)
  const [useDormant, setUseDormant] = useState(false)
  const selectedGesture = card.gestures.find((g) => g.id === selectedGestureId) ?? null
  const dormantArmed = character.dormantPotential.path !== null && character.dormantPotential.mode !== null

  return (
    <Card>
      <div className="text-xs uppercase tracking-wide opacity-50 mb-1">Combat</div>
      <h2 className="font-display text-xl mb-1">{card.title}</h2>
      <div className="text-sm opacity-70 mb-3">
        {card.opponentName} — <span className="italic">{card.opponentTagline}</span>
      </div>
      <p className="opacity-85 leading-relaxed mb-5 whitespace-pre-line">{renderText(character, card.narrativeText)}</p>

      {!selectedGesture && (
        <div className="space-y-2.5">
          <div className="text-xs font-semibold uppercase tracking-wide opacity-50 mb-1">Choisis ton geste</div>
          {card.gestures.map((g) => (
            <ChoiceButton key={g.id} label={g.label} statTested={g.statTested} onClick={() => setSelectedGestureId(g.id)} />
          ))}
        </div>
      )}

      {selectedGesture && (
        <div className="space-y-2.5">
          <button onClick={() => setSelectedGestureId(null)} className="text-xs opacity-60 hover:opacity-100 mb-1">
            ← Choisir un autre geste
          </button>

          {dormantArmed && (
            <button
              onClick={() => setUseDormant((v) => !v)}
              className={`w-full text-left rounded-xl px-4 py-3 border-2 transition-colors ${
                useDormant
                  ? 'border-ember-500 bg-ember-500/15'
                  : 'border-dashed border-ember-500/50 hover:border-ember-500'
              }`}
            >
              <span className="font-semibold">
                🐆 {DORMANT_POTENTIAL.name} {useDormant ? '— activé' : ''}
              </span>
              <div className="text-xs opacity-70 mt-0.5">
                {character.dormantPotential.mode === 'mastered'
                  ? 'Maîtrisé — bonus important, sans coût.'
                  : 'Déchaîné — bonus important, au prix de ta santé.'}
              </div>
            </button>
          )}

          <div className="text-xs font-semibold uppercase tracking-wide opacity-50 pt-1">Technique</div>
          <button
            onClick={() => onResolve(selectedGesture.id, undefined, useDormant)}
            className="w-full text-left rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:border-ring-400"
          >
            Ne pas l'utiliser, la garder pour plus tard
          </button>
          {eligibleReadyTechniquesForGesture(character, selectedGesture.eligibleTechniqueIds).map((t) => (
            <button
              key={t.id}
              disabled={!t.ready}
              onClick={() => onResolve(selectedGesture.id, t.id, useDormant)}
              className="w-full text-left rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:border-ring-400 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <div className="font-medium">
                {t.emoji} {t.name}
              </div>
              <div className="text-xs opacity-60 mt-0.5">
                {t.ready ? t.description : `En repos — encore ${t.cooldownRemaining} carte(s)`}
              </div>
            </button>
          ))}
        </div>
      )}
    </Card>
  )
}
