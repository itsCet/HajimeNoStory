// RNG déterministe et sérialisable (mulberry32) : l'état tient dans un simple
// nombre, ce qui permet de le stocker dans la sauvegarde et de reprendre une
// partie sans jamais rejouer les mêmes tirages.

function step(state: number): { value: number; nextState: number } {
  let s = (state + 0x6d2b79f5) | 0
  let t = Math.imul(s ^ (s >>> 15), 1 | s)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  const value = ((t ^ (t >>> 14)) >>> 0) / 4294967296
  return { value, nextState: s }
}

export class Rng {
  private state: number

  constructor(seed: number) {
    this.state = seed
  }

  next(): number {
    const r = step(this.state)
    this.state = r.nextState
    return r.value
  }

  getState(): number {
    return this.state
  }

  int(maxExclusive: number): number {
    return Math.floor(this.next() * maxExclusive)
  }

  intBetween(min: number, max: number): number {
    return min + this.int(max - min + 1)
  }

  chance(probability: number): boolean {
    return this.next() < probability
  }

  pick<T>(arr: readonly T[]): T {
    return arr[this.int(arr.length)]
  }

  weightedPick<T>(items: readonly T[], weightFn: (item: T) => number): T {
    const weights = items.map(weightFn)
    const total = weights.reduce((a, b) => a + b, 0)
    let roll = this.next() * total
    for (let i = 0; i < items.length; i++) {
      roll -= weights[i]
      if (roll <= 0) return items[i]
    }
    return items[items.length - 1]
  }
}

export function createSeed(): number {
  return Math.floor(Math.random() * 2 ** 31)
}

export type RollTier = 'critical-failure' | 'failure' | 'success' | 'critical-success'

export interface RollResult {
  tier: RollTier
  roll: number
  score: number
}

/**
 * Jet à 4 paliers. `bonus` vient d'une technique éventuellement engagée sur le geste ;
 * il déplace les seuils mais ne peut jamais transformer un jet raté en victoire garantie.
 */
export function rollAgainstStat(
  rng: Rng,
  statValue: number,
  difficulty: number,
  bonus = 0,
): RollResult {
  const roll = rng.intBetween(1, 100)
  const score = roll + statValue - difficulty + bonus
  let tier: RollTier
  if (score < 15) tier = 'critical-failure'
  else if (score < 50) tier = 'failure'
  else if (score < 90) tier = 'success'
  else tier = 'critical-success'
  return { tier, roll, score }
}
