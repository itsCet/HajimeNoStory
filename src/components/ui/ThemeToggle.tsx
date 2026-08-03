import { useMetaStore } from '../../store/metaStore'

export function ThemeToggle() {
  const theme = useMetaStore((s) => s.theme)
  const toggleTheme = useMetaStore((s) => s.toggleTheme)
  return (
    <button
      onClick={toggleTheme}
      className="app-card rounded-full w-10 h-10 flex items-center justify-center text-lg"
      aria-label="Changer de thème"
      title="Changer de thème"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
