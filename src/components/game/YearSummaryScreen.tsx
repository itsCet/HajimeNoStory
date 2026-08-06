import type { YearSummary } from '../../engine/yearEngine'
import type { CharacterState } from '../../engine/types'
import { canRetireVoluntarily } from '../../engine/careerEndEngine'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

export function YearSummaryScreen({
  summary,
  character,
  onContinue,
  onRetire,
}: {
  summary: YearSummary
  character: CharacterState
  onContinue: () => void
  onRetire: () => void
}) {
  return (
    <Card>
      <div className="text-xs uppercase tracking-wide opacity-50 mb-1">Bilan de l'année {summary.yearIndex}</div>
      <h2 className="font-display text-xl mb-4">{summary.rankLabel}</h2>

      <div className="grid grid-cols-2 gap-3 text-sm mb-5">
        <Stat label="Entraînements" value={summary.trainings} />
        <Stat label="Moments de vie" value={summary.lifeMoments} />
        <Stat label="Combats" value={summary.fights} />
        <Stat label="Réussites" value={summary.successes} />
        <Stat label="Échecs" value={summary.failures} />
        <Stat label="Progression (classement)" value={summary.pointsEarned} />
        <Stat label="Total cumulé" value={summary.totalCareerPoints} />
        <Stat label="Points à répartir" value={character.pendingPointsToAllocate} />
      </div>

      <p className="text-sm opacity-70 mb-5">
        Tu as {summary.age} ans. La fatigue accumulée retombe à zéro — <span className="font-semibold">REPOSÉ</span>.
      </p>

      <Button className="w-full" onClick={onContinue}>
        Répartir les points gagnés
      </Button>

      {canRetireVoluntarily(character) && (
        <button
          onClick={onRetire}
          className="w-full min-h-[44px] text-center text-xs opacity-75 hover:opacity-100 mt-3 underline cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-500"
        >
          Raccrocher les gants dès maintenant
        </button>
      )}
    </Card>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-black/5 dark:bg-white/5 px-3 py-2">
      <div className="text-xs opacity-60">{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  )
}
