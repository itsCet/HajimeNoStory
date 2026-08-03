import type { ReactNode } from 'react'

export function Badge({ label, color, textColor = '#fff' }: { label: string; color: string; textColor?: string }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold"
      style={{ backgroundColor: color, color: textColor }}
    >
      {label}
    </span>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-black/5 dark:bg-white/10">
      {children}
    </span>
  )
}
