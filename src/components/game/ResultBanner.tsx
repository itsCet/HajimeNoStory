import type { ResolutionResult } from '../../engine/cardEngine'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Chip } from '../ui/Chip'

const TIER_LABEL: Record<ResolutionResult['tier'], { label: string; color: string }> = {
  'critical-failure': { label: 'Échec critique', color: 'text-red-700 dark:text-red-400' },
  failure: { label: 'Échec', color: 'text-red-600/80 dark:text-red-300/80' },
  success: { label: 'Réussite', color: 'text-emerald-600 dark:text-emerald-400' },
  'critical-success': { label: 'Réussite critique', color: 'text-emerald-700 dark:text-emerald-300' },
}

export function ResultBanner({ result, onContinue }: { result: ResolutionResult; onContinue: () => void }) {
  const tier = TIER_LABEL[result.tier]
  return (
    <Card>
      <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${tier.color}`}>{tier.label}</div>

      {result.techniqueSceneText && (
        <div className="mb-4 pl-3 border-l-2 border-ember-500 italic opacity-90 text-sm">
          {result.techniqueSceneText}
        </div>
      )}

      {result.text && <p className="opacity-85 leading-relaxed mb-4 whitespace-pre-line">{result.text}</p>}

      {result.chips.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {result.chips.map((chip, i) => (
            <Chip key={i} chip={chip} />
          ))}
        </div>
      )}

      <Button className="w-full" onClick={onContinue}>
        Continuer
      </Button>
    </Card>
  )
}
