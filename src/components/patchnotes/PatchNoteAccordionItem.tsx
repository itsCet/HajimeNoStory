import { useState } from 'react'
import type { PatchNote } from '../../engine/types'

export function PatchNoteAccordionItem({ note, defaultOpen }: { note: PatchNote; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen)
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex justify-between items-center px-4 py-3 text-left">
        <div>
          <span className="font-semibold">v{note.version}</span>
          <span className="ml-2 opacity-70">{note.title}</span>
        </div>
        <span className="text-xs opacity-50">
          {note.date} {open ? '▲' : '▼'}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3">
          {note.sections.map((s, i) => (
            <div key={i}>
              <div className="font-medium text-sm">
                {s.emoji} {s.heading}
              </div>
              <p className="text-sm opacity-75 mt-0.5">{s.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
