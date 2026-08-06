import { create } from 'zustand'
import type { CareerHistoryEntry } from '../engine/types'
import { loadMeta, saveMeta } from '../engine/saveEngine'
import { SHOP_PERK_MAP } from '../data/shopPerks'
import type { StatKey } from '../engine/types'

const initialMeta = loadMeta()

interface MetaStoreState {
  currency: number
  unlockedPerkIds: string[]
  equippedPerkIds: string[]
  equippedPerkStatChoices: Partial<Record<string, StatKey>>
  unlockedTrophyIds: string[]
  history: CareerHistoryEntry[]
  lastSeenPatchVersion: string
  theme: 'light' | 'dark'

  markPatchNotesSeen: (version: string) => void
  toggleTheme: () => void
  unlockTrophies: (ids: string[]) => void
  addCurrency: (amount: number) => void
  buyPerk: (perkId: string) => boolean
  equipPerk: (perkId: string, statChoice?: StatKey) => void
  unequipPerk: (perkId: string) => void
  addHistoryEntry: (entry: CareerHistoryEntry) => void
}

function persist(state: MetaStoreState) {
  saveMeta({
    version: 1,
    currency: state.currency,
    unlockedPerkIds: state.unlockedPerkIds,
    equippedPerkIds: state.equippedPerkIds,
    equippedPerkStatChoices: state.equippedPerkStatChoices,
    unlockedTrophyIds: state.unlockedTrophyIds,
    history: state.history,
    lastSeenPatchVersion: state.lastSeenPatchVersion,
    settings: { theme: state.theme },
  })
}

export const useMetaStore = create<MetaStoreState>((set, get) => ({
  currency: initialMeta.currency,
  unlockedPerkIds: initialMeta.unlockedPerkIds,
  equippedPerkIds: initialMeta.equippedPerkIds,
  equippedPerkStatChoices: initialMeta.equippedPerkStatChoices,
  unlockedTrophyIds: initialMeta.unlockedTrophyIds,
  history: initialMeta.history,
  lastSeenPatchVersion: initialMeta.lastSeenPatchVersion,
  theme: initialMeta.settings.theme,

  markPatchNotesSeen: (version) => {
    if (get().lastSeenPatchVersion === version) return
    set({ lastSeenPatchVersion: version })
    persist(get())
  },

  toggleTheme: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark'
    set({ theme: next })
    persist(get())
  },

  unlockTrophies: (ids) => {
    if (ids.length === 0) return
    const current = new Set(get().unlockedTrophyIds)
    let changed = false
    for (const id of ids) {
      if (!current.has(id)) {
        current.add(id)
        changed = true
      }
    }
    if (!changed) return
    set({ unlockedTrophyIds: [...current] })
    persist(get())
  },

  addCurrency: (amount) => {
    set((s) => ({ currency: s.currency + amount }))
    persist(get())
  },

  buyPerk: (perkId) => {
    const perk = SHOP_PERK_MAP[perkId]
    const state = get()
    if (!perk || state.unlockedPerkIds.includes(perkId) || state.currency < perk.cost) return false
    set({ currency: state.currency - perk.cost, unlockedPerkIds: [...state.unlockedPerkIds, perkId] })
    persist(get())
    return true
  },

  equipPerk: (perkId, statChoice) => {
    const state = get()
    if (!state.unlockedPerkIds.includes(perkId) || state.equippedPerkIds.includes(perkId)) return
    if (state.equippedPerkIds.length >= 2) return
    const nextChoices = { ...state.equippedPerkStatChoices }
    if (statChoice) nextChoices[perkId] = statChoice
    set({ equippedPerkIds: [...state.equippedPerkIds, perkId], equippedPerkStatChoices: nextChoices })
    persist(get())
  },

  unequipPerk: (perkId) => {
    const state = get()
    const nextChoices = { ...state.equippedPerkStatChoices }
    delete nextChoices[perkId]
    set({
      equippedPerkIds: state.equippedPerkIds.filter((id) => id !== perkId),
      equippedPerkStatChoices: nextChoices,
    })
    persist(get())
  },

  addHistoryEntry: (entry) => {
    set((s) => ({ history: [entry, ...s.history] }))
    persist(get())
  },
}))
