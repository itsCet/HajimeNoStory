import { useMetaStore } from '../../store/metaStore'
import { useNavStore } from '../../store/navStore'
import { RANK_TROPHIES, TITLE_TROPHIES, TECHNIQUE_TROPHIES, MARK_TROPHIES, ALL_TROPHIES } from '../../data/trophies'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { TrophyGrid } from './TrophyGrid'

export function TrophyScreen() {
  const goTo = useNavStore((s) => s.goTo)
  const unlockedIds = new Set(useMetaStore((s) => s.unlockedTrophyIds))

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center gap-4">
      <div className="w-full max-w-2xl flex items-center justify-between">
        <Button variant="ghost" onClick={() => goTo('home')}>
          ← Retour
        </Button>
        <span className="text-sm font-semibold">
          {unlockedIds.size}/{ALL_TROPHIES.length}
        </span>
      </div>

      <div className="w-full max-w-2xl space-y-5">
        <Card>
          <h3 className="font-display mb-3">🏅 Rangs</h3>
          <TrophyGrid trophies={RANK_TROPHIES} unlockedIds={unlockedIds} />
        </Card>
        <Card>
          <h3 className="font-display mb-3">👑 Titres</h3>
          <TrophyGrid trophies={TITLE_TROPHIES} unlockedIds={unlockedIds} />
        </Card>
        <Card>
          <h3 className="font-display mb-3">🥊 Techniques</h3>
          <TrophyGrid trophies={TECHNIQUE_TROPHIES} unlockedIds={unlockedIds} />
        </Card>
        <Card>
          <h3 className="font-display mb-3">✨ Marques</h3>
          <TrophyGrid trophies={MARK_TROPHIES} unlockedIds={unlockedIds} />
        </Card>
      </div>
    </div>
  )
}
