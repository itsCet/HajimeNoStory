import type { ReactNode } from 'react'

/**
 * Choisit noir ou blanc selon la luminance du fond. Les rangs vont du gris clair
 * à l'or en passant par le rouge : un texte blanc systématique tombait à 2.54:1
 * sur les teintes claires.
 */
function readableTextColor(hex: string): string {
  const m = hex.replace('#', '')
  const full = m.length === 3 ? m.split('').map((c) => c + c).join('') : m
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255)
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
  const luminance = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
  // Seuil issu du point d'égalité des ratios face au noir et au blanc.
  return luminance > 0.179 ? '#1a1a1a' : '#ffffff'
}

export function Badge({ label, color, textColor }: { label: string; color: string; textColor?: string }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold"
      style={{ backgroundColor: color, color: textColor ?? readableTextColor(color) }}
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
