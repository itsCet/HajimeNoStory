import { create } from 'zustand'

export type Screen =
  | 'home'
  | 'creation'
  | 'game'
  | 'destiny-recap'
  | 'destiny-game'
  | 'trophies'
  | 'shop'
  | 'history'
  | 'patchnotes'

interface NavState {
  screen: Screen
  goTo: (screen: Screen) => void
}

export const useNavStore = create<NavState>((set) => ({
  screen: 'home',
  goTo: (screen) => set({ screen }),
}))
