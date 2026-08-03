import type { CharacterState } from './types'
import { TECHNIQUE_MAP } from '../data/techniques'

export function isTechniqueUnlocked(character: CharacterState, techniqueId: string): boolean {
  return character.unlockedTechniqueIds.includes(techniqueId)
}

export function isTechniqueReady(character: CharacterState, techniqueId: string): boolean {
  const cooldown = character.techniqueCooldowns[techniqueId] ?? 0
  return cooldown <= 0
}

export function unlockTechnique(character: CharacterState, techniqueId: string) {
  if (!character.unlockedTechniqueIds.includes(techniqueId)) {
    character.unlockedTechniqueIds.push(techniqueId)
  }
}

export function engageTechnique(character: CharacterState, techniqueId: string) {
  const technique = TECHNIQUE_MAP[techniqueId]
  if (!technique) return
  character.techniqueCooldowns[techniqueId] = technique.cooldownCards
}

/** À appeler après la résolution de chaque carte : fait avancer tous les repos en cours. */
export function tickCooldowns(character: CharacterState) {
  for (const id of Object.keys(character.techniqueCooldowns)) {
    const remaining = character.techniqueCooldowns[id] - 1
    if (remaining <= 0) delete character.techniqueCooldowns[id]
    else character.techniqueCooldowns[id] = remaining
  }
}

export interface TechniqueStatus {
  id: string
  name: string
  emoji: string
  description: string
  ready: boolean
  cooldownRemaining: number
}

export function listUnlockedTechniques(character: CharacterState): TechniqueStatus[] {
  return character.unlockedTechniqueIds
    .map((id) => TECHNIQUE_MAP[id])
    .filter(Boolean)
    .map((t) => ({
      id: t.id,
      name: t.name,
      emoji: t.emoji,
      description: t.description,
      ready: isTechniqueReady(character, t.id),
      cooldownRemaining: character.techniqueCooldowns[t.id] ?? 0,
    }))
}

export function eligibleReadyTechniquesForGesture(
  character: CharacterState,
  eligibleTechniqueIds: string[],
): TechniqueStatus[] {
  return eligibleTechniqueIds
    .filter((id) => isTechniqueUnlocked(character, id))
    .map((id) => TECHNIQUE_MAP[id])
    .filter(Boolean)
    .map((t) => ({
      id: t.id,
      name: t.name,
      emoji: t.emoji,
      description: t.description,
      ready: isTechniqueReady(character, t.id),
      cooldownRemaining: character.techniqueCooldowns[t.id] ?? 0,
    }))
}
