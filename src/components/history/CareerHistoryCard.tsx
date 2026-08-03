import type { CareerHistoryEntry } from '../../engine/types'
import { RANK_MAP } from '../../data/ranks'
import { CLUB_MAP } from '../../data/clubs'
import { LINEAGE_MAP } from '../../data/lineages'

const ENDING_EMOJI: Record<CareerHistoryEntry['endingType'], string> = {
  retirement: '🕊️',
  glory: '🌇',
  tragic: '💔',
}

export function CareerHistoryCard({ entry }: { entry: CareerHistoryEntry }) {
  const rank = RANK_MAP[entry.finalRankId]
  const club = CLUB_MAP[entry.clubId]
  const lineage = LINEAGE_MAP[entry.lineageId]

  return (
    <div className="rounded-xl px-4 py-3 border border-black/10 dark:border-white/10">
      <div className="flex justify-between items-start gap-2">
        <div>
          <div className="font-semibold">
            {ENDING_EMOJI[entry.endingType]} {entry.characterName}
          </div>
          <div className="text-xs opacity-60 mt-0.5">
            {club.name} · {lineage.isAutodidact ? 'Autodidacte' : lineage.name} · {rank.label}
          </div>
        </div>
        <span className="text-xs opacity-50 whitespace-nowrap">{entry.yearsPlayed} ans</span>
      </div>
      <p className="text-sm opacity-75 mt-2 italic">{entry.endingText}</p>
      <div className="text-xs opacity-50 mt-2">
        Score {entry.score} · {entry.currencyEarned} 🥊 gagnés
      </div>
    </div>
  )
}
