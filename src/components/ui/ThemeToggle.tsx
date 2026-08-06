import { useMetaStore } from '../../store/metaStore'

export function ThemeToggle() {
  const theme = useMetaStore((s) => s.theme)
  const toggleTheme = useMetaStore((s) => s.toggleTheme)
  return (
    <button
      onClick={toggleTheme}
      className="app-card rounded-full w-11 h-11 flex items-center justify-center text-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-500"
      aria-label="Changer de thème"
      title="Changer de thème"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
