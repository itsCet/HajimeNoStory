import { useEffect } from 'react'
import { useMetaStore } from '../store/metaStore'

export function useTheme() {
  const theme = useMetaStore((s) => s.theme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  return theme
}
