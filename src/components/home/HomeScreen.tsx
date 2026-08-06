import { useNavStore } from '../../store/navStore'
import { useGameStore } from '../../store/gameStore'
import { useDestinyStore } from '../../store/destinyStore'
import { useMetaStore } from '../../store/metaStore'
import { QuickStatBadge } from './QuickStatBadge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { ThemeToggle } from '../ui/ThemeToggle'
import { ALL_TROPHIES } from '../../data/trophies'
import { PATCH_NOTES } from '../../data/patchNotes'

export function HomeScreen() {
  const goTo = useNavStore((s) => s.goTo)
  const character = useGameStore((s) => s.character)
  const destinyCharacter = useDestinyStore((s) => s.character)
  const startDestiny = useDestinyStore((s) => s.startCareer)
  const currency = useMetaStore((s) => s.currency)
  const unlockedCount = useMetaStore((s) => s.unlockedTrophyIds.length)
  const historyCount = useMetaStore((s) => s.history.length)
  const lastSeenPatchVersion = useMetaStore((s) => s.lastSeenPatchVersion)
  const latestVersion = PATCH_NOTES[0]?.version
  const hasUnreadPatch = latestVersion !== undefined && lastSeenPatchVersion !== latestVersion

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 gap-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <img src="/logo.png" alt="Hajime no Story" className="w-56 sm:w-72" />
      <div className="text-center -mt-4 max-w-md">
        <p className="opacity-80">Vis une carrière entière de boxeur, du premier bleu à la légende — ou à la chute.</p>
        <p className="italic opacity-60 mt-2 text-sm">« Un round de plus. C'est toujours ça, un round de plus. »</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <QuickStatBadge iconSrc="/icons/trophees.png" label="Trophées" value={`${unlockedCount}/${ALL_TROPHIES.length}`} onClick={() => goTo('trophies')} />
        <QuickStatBadge iconSrc="/icons/boutique.png" label="Boutique" value={`${currency}`} onClick={() => goTo('shop')} />
        <QuickStatBadge iconSrc="/icons/historique.png" label="Historique" value={`${historyCount}`} onClick={() => goTo('history')} />
        <QuickStatBadge
          iconSrc="/icons/patchnotes.png"
          label="Patch notes"
          value={`v${latestVersion}`}
          badge={hasUnreadPatch ? 'MAJ' : undefined}
          onClick={() => goTo('patchnotes')}
        />
      </div>

      <div className="flex flex-col items-center gap-3 mt-2">
        <Button variant="primary" className="px-8 py-3 text-base" onClick={() => goTo('creation')}>
          Créer un personnage
        </Button>
        {character && (
          <Button variant="secondary" onClick={() => goTo('game')}>
            Reprendre la partie en cours
          </Button>
        )}
      </div>

      <Card className="max-w-md w-full mt-4 border-2 border-ember-500/40">
        <h3 className="font-display text-ember-600 dark:text-ember-400">🎲 Destin tracé</h3>
        <p className="text-sm opacity-75 mt-1">
          Tout est tiré au hasard — origine, style, lignée, discipline. Une sauvegarde entièrement séparée du mode
          normal.
        </p>
        <div className="flex gap-2 mt-3">
          <Button
            variant="secondary"
            onClick={() => {
              startDestiny('random')
              goTo('destiny-recap')
            }}
            className="flex-1"
          >
            Nouveau destin
          </Button>
          {destinyCharacter && (
            <Button variant="ghost" onClick={() => goTo('destiny-game')} className="flex-1">
              Reprendre
            </Button>
          )}
        </div>
      </Card>

      <div className="mt-auto pt-8 text-xs opacity-70 text-center">
        <p>Développé avec Claude Code</p>
      </div>
    </div>
  )
}
