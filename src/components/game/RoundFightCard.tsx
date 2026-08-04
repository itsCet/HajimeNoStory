import { useState } from 'react'
import type { CharacterState, FightCard, TacticalApproachId } from '../../engine/types'
import type { FightRoundState } from '../../store/careerStoreFactory'
import { eligibleReadyTechniquesForGesture } from '../../engine/techniqueEngine'
import { renderText, type RoundResult } from '../../engine/cardEngine'
import { TACTICAL_APPROACH_LIST } from '../../data/tacticalApproaches'
import { GESTURE_TECHNIQUES } from '../../data/cards/gestureTechniques'
import { DORMANT_POTENTIAL } from '../../data/dormantPotential'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Chip } from '../ui/Chip'
import type { RewardChip } from '../../engine/statEngine'

function MomentumBar({ momentum, threshold }: { momentum: number; threshold: number }) {
  const clamped = Math.max(-threshold, Math.min(threshold, momentum))
  const pct = ((clamped + threshold) / (threshold * 2)) * 100
  const label =
    momentum === 0
      ? 'Combat équilibré'
      : momentum > 0
        ? `Avantage pour toi (${momentum > 0 ? '+' : ''}${momentum})`
        : `Adversaire devant (${momentum})`
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs mb-1 opacity-70">
        <span>Adversaire</span>
        <span>{label}</span>
        <span>Toi</span>
      </div>
      <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 relative overflow-hidden">
        <div className="absolute inset-y-0 left-1/2 w-px bg-black/20 dark:bg-white/20" />
        <div
          className="h-full rounded-full bg-gradient-to-r from-red-500 via-ring-400 to-emerald-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function RoundFightCard({
  card,
  character,
  fightRound,
  lastRoundResult,
  onChooseApproach,
  onAcknowledgeRound,
}: {
  card: FightCard
  character: CharacterState
  fightRound: FightRoundState | null
  lastRoundResult: RoundResult | null
  onChooseApproach: (approachId: TacticalApproachId, techniqueId?: string, useDormant?: boolean) => void
  onAcknowledgeRound: () => void
}) {
  const [selectedApproach, setSelectedApproach] = useState<TacticalApproachId | null>(null)
  const [useDormant, setUseDormant] = useState(false)

  const roundIndex = fightRound?.roundIndex ?? 0
  const momentum = fightRound?.momentum ?? 0
  const dormantArmed = character.dormantPotential.path !== null && character.dormantPotential.mode !== null

  function handleAcknowledgeRound() {
    // Repart d'une approche vierge pour le round suivant.
    setSelectedApproach(null)
    setUseDormant(false)
    onAcknowledgeRound()
  }

  if (lastRoundResult) {
    return (
      <Card>
        <div className="text-xs uppercase tracking-wide opacity-50 mb-1">
          Round {roundIndex}/{card.totalRounds}
        </div>
        <h2 className="font-display text-xl mb-3">{card.title}</h2>
        <MomentumBar momentum={lastRoundResult.momentum} threshold={card.koThreshold} />
        {lastRoundResult.techniqueSceneText && (
          <div className="mb-4 pl-3 border-l-2 border-ember-500 italic opacity-90 text-sm">
            {lastRoundResult.techniqueSceneText}
          </div>
        )}
        <p className="opacity-85 leading-relaxed mb-4">{lastRoundResult.text}</p>
        {lastRoundResult.chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {lastRoundResult.chips.map((chip: RewardChip, i: number) => (
              <Chip key={i} chip={chip} />
            ))}
          </div>
        )}
        <Button className="w-full" onClick={handleAcknowledgeRound}>
          Round suivant
        </Button>
      </Card>
    )
  }

  const approach = selectedApproach ? TACTICAL_APPROACH_LIST.find((a) => a.id === selectedApproach)! : null

  return (
    <Card>
      <div className="text-xs uppercase tracking-wide opacity-50 mb-1">
        Combat — Round {roundIndex + 1}/{card.totalRounds}
      </div>
      <h2 className="font-display text-xl mb-1">{card.title}</h2>
      <div className="text-sm opacity-70 mb-3">
        {card.opponentName} — <span className="italic">{card.opponentTagline}</span>
      </div>
      {roundIndex === 0 && <p className="opacity-85 leading-relaxed mb-4 whitespace-pre-line">{renderText(character, card.narrativeText)}</p>}
      <MomentumBar momentum={momentum} threshold={card.koThreshold} />

      {!approach && (
        <div className="space-y-2.5">
          <div className="text-xs font-semibold uppercase tracking-wide opacity-50 mb-1">Choisis ton approche</div>
          {TACTICAL_APPROACH_LIST.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelectedApproach(a.id)}
              className="w-full text-left rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:border-ring-400 transition-colors flex items-center justify-between gap-3"
            >
              <div>
                <div className="font-medium">
                  {a.emoji} {a.label}
                </div>
                <div className="text-xs opacity-60 mt-0.5">{a.description}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {approach && (
        <div className="space-y-2.5">
          <button onClick={() => setSelectedApproach(null)} className="text-xs opacity-60 hover:opacity-100 mb-1">
            ← Choisir une autre approche
          </button>

          {dormantArmed && (
            <button
              onClick={() => setUseDormant((v) => !v)}
              className={`w-full text-left rounded-xl px-4 py-3 border-2 transition-colors ${
                useDormant ? 'border-ember-500 bg-ember-500/15' : 'border-dashed border-ember-500/50 hover:border-ember-500'
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
            onClick={() => onChooseApproach(approach.id, undefined, useDormant)}
            className="w-full text-left rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:border-ring-400"
          >
            Ne pas l'utiliser, la garder pour plus tard
          </button>
          {eligibleReadyTechniquesForGesture(character, GESTURE_TECHNIQUES[approach.statTested]).map((t) => (
            <button
              key={t.id}
              disabled={!t.ready}
              onClick={() => onChooseApproach(approach.id, t.id, useDormant)}
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
