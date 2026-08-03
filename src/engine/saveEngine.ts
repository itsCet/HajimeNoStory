import type { CharacterState, MetaState } from './types'

const KEY_CAREER = 'hajime-no-story:career'
const KEY_DESTINY_CAREER = 'hajime-no-story:destiny-career'
const KEY_META = 'hajime-no-story:meta'

// v2 : rééquilibrage à 5 évènements/an (seuils de rang, points à répartir).
// Les sauvegardes v1 sont invalidées plutôt que migrées à moitié.
const SAVE_VERSION = 2
const META_VERSION = 1

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export function loadCharacter(isDestiny: boolean): CharacterState | null {
  const key = isDestiny ? KEY_DESTINY_CAREER : KEY_CAREER
  const data = safeParse<{ version: number; character: CharacterState | null }>(localStorage.getItem(key))
  if (!data || data.version !== SAVE_VERSION) return null
  return data.character
}

export function saveCharacter(character: CharacterState | null, isDestiny: boolean) {
  const key = isDestiny ? KEY_DESTINY_CAREER : KEY_CAREER
  localStorage.setItem(key, JSON.stringify({ version: SAVE_VERSION, character }))
}

export function clearCharacter(isDestiny: boolean) {
  const key = isDestiny ? KEY_DESTINY_CAREER : KEY_CAREER
  localStorage.removeItem(key)
}

const DEFAULT_META: MetaState = {
  version: META_VERSION,
  currency: 0,
  unlockedPerkIds: [],
  equippedPerkIds: [],
  equippedPerkStatChoices: {},
  unlockedTrophyIds: [],
  history: [],
  settings: { theme: 'dark' },
}

export function loadMeta(): MetaState {
  const data = safeParse<MetaState>(localStorage.getItem(KEY_META))
  if (!data || data.version !== META_VERSION) return { ...DEFAULT_META }
  return { ...DEFAULT_META, ...data }
}

export function saveMeta(meta: MetaState) {
  localStorage.setItem(KEY_META, JSON.stringify(meta))
}
