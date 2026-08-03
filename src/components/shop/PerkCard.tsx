import type { ShopPerk } from '../../engine/types'
import { Button } from '../ui/Button'

export function PerkCard({
  perk,
  owned,
  equipped,
  canEquipMore,
  currency,
  onBuy,
  onEquip,
  onUnequip,
}: {
  perk: ShopPerk
  owned: boolean
  equipped: boolean
  canEquipMore: boolean
  currency: number
  onBuy: () => void
  onEquip: () => void
  onUnequip: () => void
}) {
  return (
    <div
      className={`rounded-xl px-4 py-3 border ${
        equipped ? 'border-ember-500 bg-ember-500/10' : 'border-black/10 dark:border-white/10'
      }`}
    >
      <div className="flex justify-between items-start gap-2">
        <div>
          <div className="font-semibold">{perk.name}</div>
          <p className="text-xs opacity-70 mt-0.5">{perk.description}</p>
        </div>
        {!owned && <span className="text-xs font-bold whitespace-nowrap">{perk.cost} 🥊</span>}
      </div>
      <div className="mt-3">
        {!owned ? (
          <Button variant="secondary" onClick={onBuy} disabled={currency < perk.cost}>
            Débloquer
          </Button>
        ) : equipped ? (
          <Button variant="ghost" onClick={onUnequip}>
            Déséquiper
          </Button>
        ) : (
          <Button variant="secondary" onClick={onEquip} disabled={!canEquipMore}>
            Équiper
          </Button>
        )}
      </div>
    </div>
  )
}
