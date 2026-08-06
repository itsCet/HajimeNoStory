import { useEffect } from 'react'
import { useNavStore } from '../../store/navStore'
import { useMetaStore } from '../../store/metaStore'
import { PATCH_NOTES } from '../../data/patchNotes'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { PatchNoteAccordionItem } from './PatchNoteAccordionItem'

export function PatchNotesScreen() {
  const goTo = useNavStore((s) => s.goTo)
  const markPatchNotesSeen = useMetaStore((s) => s.markPatchNotesSeen)
  const latestVersion = PATCH_NOTES[0]?.version

  // Consulter l'écran éteint la pastille « MAJ » jusqu'à la prochaine version.
  useEffect(() => {
    if (latestVersion) markPatchNotesSeen(latestVersion)
  }, [latestVersion, markPatchNotesSeen])

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center gap-4">
      <div className="w-full max-w-xl flex items-center justify-between">
        <Button variant="ghost" onClick={() => goTo('home')}>
          ← Retour
        </Button>
      </div>

      <Card className="w-full max-w-xl">
        <h2 className="font-display text-lg mb-4">Patch notes</h2>
        <div className="space-y-2.5">
          {PATCH_NOTES.map((note, i) => (
            <PatchNoteAccordionItem key={note.version} note={note} defaultOpen={i === 0} />
          ))}
        </div>
      </Card>
    </div>
  )
}
