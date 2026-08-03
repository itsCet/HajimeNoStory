import type { CharacterState, Reward, EntourageStanding } from './types'
import { STAT_KEYS } from '../data/stats'

const STANDING_ORDER: EntourageStanding[] = ['hostile', 'froid', 'neutre', 'amical', 'loyal']

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

export interface RewardChip {
  label: string
  emoji: string
  value: number
  positive: boolean
}

/** Applique une récompense/perte au personnage et retourne les pastilles à afficher. */
export function applyReward(character: CharacterState, reward: Reward): RewardChip[] {
  const chips: RewardChip[] = []

  if (reward.stats) {
    for (const key of STAT_KEYS) {
      const delta = reward.stats[key]
      if (!delta) continue
      character.stats[key] = clamp(character.stats[key] + delta, 5, 100)
      chips.push({ label: key, emoji: '', value: delta, positive: delta > 0 })
    }
  }

  if (reward.health) {
    character.health = clamp(character.health + reward.health, 0, 100)
    chips.push({ label: 'Santé', emoji: '❤️', value: reward.health, positive: reward.health > 0 })
    if (character.health < 20 && !character.flags.includes('flag-near-death')) {
      character.flags.push('flag-near-death')
    }
  }

  if (reward.fatigue) {
    character.fatigue = clamp(character.fatigue + reward.fatigue, 0, 100)
    chips.push({ label: 'Fatigue', emoji: '🥱', value: reward.fatigue, positive: reward.fatigue < 0 })
  }

  if (reward.coolness) {
    character.coolness = clamp(character.coolness + reward.coolness, 0, 100)
    chips.push({ label: 'Sang-froid', emoji: '🧘', value: reward.coolness, positive: reward.coolness > 0 })
  }

  if (reward.reputationInternal) {
    character.reputationInternal = clamp(character.reputationInternal + reward.reputationInternal, 0, 100)
    chips.push({
      label: 'Réputation (salle)',
      emoji: '🏠',
      value: reward.reputationInternal,
      positive: reward.reputationInternal > 0,
    })
  }

  if (reward.reputationExternal) {
    character.reputationExternal = clamp(character.reputationExternal + reward.reputationExternal, 0, 100)
    chips.push({
      label: 'Réputation (public)',
      emoji: '📣',
      value: reward.reputationExternal,
      positive: reward.reputationExternal > 0,
    })
  }

  if (reward.loyalty) {
    character.loyalty = clamp(character.loyalty + reward.loyalty, 0, 100)
    chips.push({ label: 'Loyauté', emoji: '🤝', value: reward.loyalty, positive: reward.loyalty > 0 })
  }

  if (reward.careerPoints) {
    character.careerPoints += reward.careerPoints
    character.yearStats.pointsEarned += reward.careerPoints
    chips.push({ label: 'Progression', emoji: '📈', value: reward.careerPoints, positive: reward.careerPoints > 0 })
  }

  if (reward.entourageDelta) {
    for (const change of reward.entourageDelta) {
      const member = character.entourage.find((m) => m.role === change.role)
      if (!member) continue
      const idx = clamp(STANDING_ORDER.indexOf(member.standing) + change.delta, 0, STANDING_ORDER.length - 1)
      member.standing = STANDING_ORDER[idx]
    }
  }

  if (reward.setFlags) {
    for (const flag of reward.setFlags) {
      if (!character.flags.includes(flag)) character.flags.push(flag)
    }
  }

  if (reward.titleDefenseWin) {
    character.titleDefenses += 1
  }

  if (reward.unlockTechniqueIds) {
    for (const id of reward.unlockTechniqueIds) {
      if (!character.unlockedTechniqueIds.includes(id)) character.unlockedTechniqueIds.push(id)
    }
  }

  return chips
}
