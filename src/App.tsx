import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { useNavStore } from './store/navStore'
import { useGameStore } from './store/gameStore'
import { useDestinyStore } from './store/destinyStore'
import { HomeScreen } from './components/home/HomeScreen'
import { CreationWizard } from './components/creation/CreationWizard'
import { DestinyRecapScreen } from './components/creation/DestinyRecapScreen'
import { GameScreen } from './components/game/GameScreen'
import { TrophyScreen } from './components/trophies/TrophyScreen'
import { ShopScreen } from './components/shop/ShopScreen'
import { HistoryScreen } from './components/history/HistoryScreen'
import { PatchNotesScreen } from './components/patchnotes/PatchNotesScreen'

export default function App() {
  useTheme()
  const screen = useNavStore((s) => s.screen)

  useEffect(() => {
    useGameStore.getState().resumeIfAny()
    useDestinyStore.getState().resumeIfAny()
  }, [])

  switch (screen) {
    case 'home':
      return <HomeScreen />
    case 'creation':
      return <CreationWizard />
    case 'destiny-recap':
      return <DestinyRecapScreen />
    case 'game':
      return <GameScreen useStore={useGameStore} />
    case 'destiny-game':
      return <GameScreen useStore={useDestinyStore} />
    case 'trophies':
      return <TrophyScreen />
    case 'shop':
      return <ShopScreen />
    case 'history':
      return <HistoryScreen />
    case 'patchnotes':
      return <PatchNotesScreen />
    default:
      return <HomeScreen />
  }
}
