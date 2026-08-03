import { useMetaStore } from '../../store/metaStore'
import { useNavStore } from '../../store/navStore'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { CareerHistoryCard } from './CareerHistoryCard'

export function HistoryScreen() {
  const goTo = useNavStore((s) => s.goTo)
  const history = useMetaStore((s) => s.history)

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center gap-4">
      <div className="w-full max-w-xl flex items-center justify-between">
        <Button variant="ghost" onClick={() => goTo('home')}>
          ← Retour
        </Button>
      </div>

      <Card className="w-full max-w-xl">
        <h2 className="font-display text-lg mb-4">Historique des carrières</h2>
        {history.length === 0 ? (
          <p className="text-sm opacity-60">Aucune carrière terminée pour l'instant.</p>
        ) : (
          <div className="space-y-2.5">
            {history.map((entry) => (
              <CareerHistoryCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
