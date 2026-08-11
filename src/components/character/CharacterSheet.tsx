import { useState } from 'react'
import type { CharacterState } from '../../engine/types'
import { RANK_MAP } from '../../data/ranks'
import { CLUB_MAP } from '../../data/clubs'
import { LINEAGE_MAP } from '../../data/lineages'
import { FIGHTING_STYLE_MAP } from '../../data/fightingStyles'
import { DISCIPLINE_MAP } from '../../data/disciplines'
import { INNATE_GIFT_MAP } from '../../data/innateGifts'
import { STATS } from '../../data/stats'
import { Card } from '../ui/Card'
import { Badge, Tag } from '../ui/Badge'
import { ProgressBar } from '../ui/ProgressBar'
import { Button } from '../ui/Button'

export function CharacterSheet({ character }: { character: CharacterState }) {
  const [expanded, setExpanded] = useState(false)
  const rank = RANK_MAP[character.rankId]
  const club = CLUB_MAP[character.clubId]
  const lineage = LINEAGE_MAP[character.lineageId]
  const style = FIGHTING_STYLE_MAP[character.styleId]
  const discipline = DISCIPLINE_MAP[character.disciplineId]
  const gift = INNATE_GIFT_MAP[character.innateGiftId]

  return (
    <Card className="w-full">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-lg font-display">{character.name}</h2>
            <Badge label={rank.badgeLetter} color={rank.badgeColor} />
            <span className="text-xs opacity-60">
              {character.age} ans · Année {character.yearIndex}
            </span>
          </div>
          <div className="mt-1.5 flex gap-1.5 flex-wrap">
            <Tag>{rank.label}</Tag>
            <Tag>{club.name}</Tag>
          </div>
          <div className="mt-1.5 flex gap-1.5 flex-wrap">
            <Tag>{lineage.isAutodidact ? 'Autodidacte' : lineage.name}</Tag>
            <Tag>{style.name}</Tag>
            <Tag>{discipline.name}</Tag>
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-ember-500/20 text-ember-600 dark:text-ember-400">
              {gift.emoji} {gift.name}
            </span>
          </div>
        </div>
        <Button variant="ghost" onClick={() => setExpanded((e) => !e)}>
          {expanded ? 'Réduire ▲' : 'Détail ▼'}
        </Button>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <ProgressBar
          value={character.health}
          // La barre vire à l'orange puis au rouge : la santé à 0 met fin à la
          // carrière, le joueur doit pouvoir le voir venir.
          color={character.health <= 20 ? '#dc2626' : character.health <= 40 ? '#e87a00' : '#3fae5b'}
          label="Santé"
          emoji="❤️"
        />
        <ProgressBar value={character.fatigue} color="#c9a15a" label="Fatigue" emoji="🥱" />
        <ProgressBar value={character.coolness} color="#a35bc9" label="Sang-froid" emoji="🧘" />
      </div>
      {character.health <= 20 && (
        <div className="mt-2 text-xs font-semibold text-red-500">
          ⚠️ Santé critique — un combat de plus peut mettre fin à ta carrière.
        </div>
      )}
      <div className="mt-2 text-xs opacity-70">{character.eventsRemainingThisYear} évènement(s) restant(s) cette année</div>

      {expanded && (
        <div className="mt-5 space-y-4 border-t border-black/10 dark:border-white/10 pt-4">
          <div>
            <h3 className="text-sm font-semibold mb-2 opacity-80">Statistiques</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {STATS.map((s) => (
                <ProgressBar key={s.key} value={character.stats[s.key]} color={s.color} label={s.label} emoji={s.emoji} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2 opacity-80">Réputation & Loyauté</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <ProgressBar value={character.reputationInternal} color="#3a7bd5" label="Réputation (salle)" emoji="🏠" />
              <ProgressBar value={character.reputationExternal} color="#3a7bd5" label="Réputation (public)" emoji="📣" />
              <ProgressBar value={character.loyalty} color="#3a7bd5" label="Loyauté" emoji="🤝" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2 opacity-80">Entourage</h3>
            <ul className="space-y-1 text-sm">
              {character.entourage.map((m) => (
                <li key={m.role} className="flex justify-between">
                  <span>
                    {m.role} · {m.npcName}
                  </span>
                  <span className="capitalize opacity-70">{m.standing}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  )
}
