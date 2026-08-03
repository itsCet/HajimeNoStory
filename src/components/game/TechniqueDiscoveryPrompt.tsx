import { TECHNIQUE_MAP } from '../../data/techniques'
import { Card } from '../ui/Card'

export function TechniqueDiscoveryPrompt({
  techniqueId,
  onChoose,
}: {
  techniqueId: string
  onChoose: (choice: 'witness' | 'secret') => void
}) {
  const technique = TECHNIQUE_MAP[techniqueId]
  const variant = technique.publicAttemptVariant

  return (
    <Card className="border-2 border-ring-500/40">
      <div className="text-xs uppercase tracking-wide text-ring-600 dark:text-ring-300 mb-1 font-bold">
        Une technique prend forme
      </div>
      <h2 className="font-display text-xl mb-2">
        {technique.emoji} {technique.name}
      </h2>
      <p className="opacity-85 leading-relaxed mb-5">{technique.description}</p>
      <div className="space-y-2.5">
        <button
          onClick={() => onChoose('witness')}
          className="w-full text-left rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:border-ring-400 transition-colors"
        >
          <div className="font-medium">{variant?.witnessLabel ?? 'La tenter devant témoin'}</div>
          <div className="text-xs opacity-60 mt-0.5">Un gain public, mais moins discret.</div>
        </button>
        <button
          onClick={() => onChoose('secret')}
          className="w-full text-left rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:border-ring-400 transition-colors"
        >
          <div className="font-medium">{variant?.secretLabel ?? "S'entraîner seul, en secret"}</div>
          <div className="text-xs opacity-60 mt-0.5">Un gain personnel, loin des regards.</div>
        </button>
      </div>
    </Card>
  )
}
