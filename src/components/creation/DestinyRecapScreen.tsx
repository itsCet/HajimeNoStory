import { useDestinyStore } from '../../store/destinyStore'
import { useNavStore } from '../../store/navStore'
import { CLUB_MAP } from '../../data/clubs'
import { LINEAGE_MAP } from '../../data/lineages'
import { FIGHTING_STYLE_MAP } from '../../data/fightingStyles'
import { DISCIPLINE_MAP } from '../../data/disciplines'
import { INNATE_GIFT_MAP } from '../../data/innateGifts'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

export function DestinyRecapScreen() {
  const character = useDestinyStore((s) => s.character)
  const goTo = useNavStore((s) => s.goTo)

  if (!character) {
    goTo('home')
    return null
  }

  const club = CLUB_MAP[character.clubId]
  const lineage = LINEAGE_MAP[character.lineageId]
  const style = FIGHTING_STYLE_MAP[character.styleId]
  const discipline = DISCIPLINE_MAP[character.disciplineId]
  const gift = INNATE_GIFT_MAP[character.innateGiftId]

  return (
    <div className="min-h-screen px-4 py-10 flex flex-col items-center justify-center">
      <Card className="max-w-md w-full text-center">
        <div className="text-4xl mb-2">🎲</div>
        <h2 className="font-display text-xl mb-1">Ton destin est tracé</h2>
        <p className="text-sm opacity-60 mb-5">Rien n'a été choisi. Tout a été décidé pour toi.</p>

        <div className="space-y-2 text-sm text-left">
          <Row label="Nom" value={character.name} />
          <Row label="Salle" value={club.name} />
          <Row label="Lignée" value={lineage.isAutodidact ? 'Autodidacte' : lineage.name} />
          <Row label="Style" value={style.name} />
          <Row label="Discipline" value={discipline.name} />
          <Row label="Don inné" value={`${gift.emoji} ${gift.name}`} />
        </div>

        <Button className="mt-6 w-full" onClick={() => goTo('destiny-game')}>
          Commencer l'aventure
        </Button>
      </Card>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-black/5 dark:border-white/10 pb-1.5">
      <span className="opacity-60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
