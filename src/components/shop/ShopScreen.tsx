import { useState } from 'react'
import { useMetaStore } from '../../store/metaStore'
import { useNavStore } from '../../store/navStore'
import { SHOP_PERKS } from '../../data/shopPerks'
import { STATS } from '../../data/stats'
import type { StatKey } from '../../engine/types'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { PerkCard } from './PerkCard'

export function ShopScreen() {
  const goTo = useNavStore((s) => s.goTo)
  const currency = useMetaStore((s) => s.currency)
  const unlockedPerkIds = useMetaStore((s) => s.unlockedPerkIds)
  const equippedPerkIds = useMetaStore((s) => s.equippedPerkIds)
  const buyPerk = useMetaStore((s) => s.buyPerk)
  const equipPerk = useMetaStore((s) => s.equipPerk)
  const unequipPerk = useMetaStore((s) => s.unequipPerk)
  const [statChoice, setStatChoice] = useState<StatKey>('puissance')

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center gap-4">
      <div className="w-full max-w-xl flex items-center justify-between">
        <Button variant="ghost" onClick={() => goTo('home')}>
          ← Retour
        </Button>
        <span className="text-sm font-semibold">{currency} 🥊 Éclats</span>
      </div>

      <Card className="w-full max-w-xl">
        <p className="text-sm opacity-70 mb-4">
          Gagnés en terminant une carrière. Jusqu'à 2 avantages équipés à la fois, actifs à partir de la{' '}
          <span className="font-semibold">prochaine</span> carrière.
        </p>
        <div className="space-y-3">
          {SHOP_PERKS.map((perk) => {
            const owned = unlockedPerkIds.includes(perk.id)
            const equipped = equippedPerkIds.includes(perk.id)
            return (
              <div key={perk.id}>
                <PerkCard
                  perk={perk}
                  owned={owned}
                  equipped={equipped}
                  canEquipMore={equippedPerkIds.length < 2}
                  currency={currency}
                  onBuy={() => buyPerk(perk.id)}
                  onEquip={() => equipPerk(perk.id, perk.statChoice ? statChoice : undefined)}
                  onUnequip={() => unequipPerk(perk.id)}
                />
                {perk.statChoice && owned && !equipped && (
                  <select
                    value={statChoice}
                    onChange={(e) => setStatChoice(e.target.value as StatKey)}
                    className="mt-1.5 w-full rounded-lg px-2 py-1.5 text-sm bg-black/5 dark:bg-white/10"
                  >
                    {STATS.map((s) => (
                      <option key={s.key} value={s.key}>
                        {s.emoji} {s.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
