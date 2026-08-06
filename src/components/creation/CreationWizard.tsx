import { useMemo, useState } from 'react'
import { CLUBS, CLUB_MAP } from '../../data/clubs'
import { LINEAGE_MAP } from '../../data/lineages'
import { FAMILY_BACKGROUNDS } from '../../data/familyBackgrounds'
import { FIGHTING_STYLE_MAP } from '../../data/fightingStyles'
import { DISCIPLINES } from '../../data/disciplines'
import type { Gender } from '../../engine/types'
import { Rng, createSeed } from '../../engine/rng'
import { rollFightingStyle, generateRandomName } from '../../engine/characterFactory'
import { useGameStore } from '../../store/gameStore'
import { useNavStore } from '../../store/navStore'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

type Step = 'club' | 'lineage' | 'family' | 'style' | 'discipline' | 'summary'

export function CreationWizard() {
  const startCareer = useGameStore((s) => s.startCareer)
  const goTo = useNavStore((s) => s.goTo)

  const [clubId, setClubId] = useState<string | null>(null)
  const [lineageId, setLineageId] = useState<string | null>(null)
  const [familyBackgroundId, setFamilyBackgroundId] = useState<string | null>(null)
  const [styleId, setStyleId] = useState<string | null>(null)
  const [disciplineId, setDisciplineId] = useState<string | null>(null)
  const [gender, setGender] = useState<Gender>('m')
  const [name, setName] = useState('')

  const lineage = lineageId ? LINEAGE_MAP[lineageId] : null
  const needsFamilyStep = lineage?.isAutodidact ?? false

  const steps: Step[] = useMemo(
    () => ['club', 'lineage', ...(needsFamilyStep ? (['family'] as Step[]) : []), 'style', 'discipline', 'summary'],
    [needsFamilyStep],
  )
  const [stepIndex, setStepIndex] = useState(0)
  const step = steps[stepIndex] ?? 'club'

  function next() {
    setStepIndex((i) => Math.min(steps.length - 1, i + 1))
  }
  function back() {
    setStepIndex((i) => Math.max(0, i - 1))
  }

  function handleStart() {
    if (!clubId || !lineageId || !styleId || !disciplineId) return
    startCareer({
      gender,
      name: name.trim() || undefined,
      clubId,
      lineageId,
      familyBackgroundId: needsFamilyStep ? familyBackgroundId ?? undefined : undefined,
      styleId,
      disciplineId,
    })
    goTo('game')
  }

  return (
    <div className="min-h-screen px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-xl">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" onClick={() => (stepIndex === 0 ? goTo('home') : back())}>
            ← Retour
          </Button>
          <span className="text-xs opacity-50">
            Étape {stepIndex + 1}/{steps.length}
          </span>
        </div>

        {step === 'club' && (
          <StepGrid
            title="Ta salle d'origine"
            items={CLUBS.map((c) => ({ id: c.id, name: c.name, tagline: `${c.city} — ${c.tagline}` }))}
            selectedId={clubId}
            onSelect={(id) => {
              setClubId(id)
              setLineageId(null)
              next()
            }}
          />
        )}

        {step === 'lineage' && clubId && (
          <StepGrid
            title="Ta lignée d'entraîneur"
            items={CLUB_MAP[clubId].availableLineageIds.map((id) => {
              const l = LINEAGE_MAP[id]
              return { id: l.id, name: l.name, tagline: l.tagline }
            })}
            selectedId={lineageId}
            onSelect={(id) => {
              setLineageId(id)
              next()
            }}
          />
        )}

        {step === 'family' && (
          <StepGrid
            title="Ton milieu d'origine"
            items={FAMILY_BACKGROUNDS.map((f) => ({ id: f.id, name: f.name, tagline: f.tagline }))}
            selectedId={familyBackgroundId}
            onSelect={(id) => {
              setFamilyBackgroundId(id)
              next()
            }}
          />
        )}

        {step === 'style' && (
          <StyleTestStep
            styleId={styleId}
            onResolved={(id) => setStyleId(id)}
            onContinue={next}
          />
        )}

        {step === 'discipline' && (
          <StepGrid
            title="Ta discipline de prédilection"
            items={DISCIPLINES.map((d) => ({ id: d.id, name: d.name, tagline: d.description }))}
            selectedId={disciplineId}
            onSelect={(id) => {
              setDisciplineId(id)
              next()
            }}
          />
        )}

        {step === 'summary' && clubId && lineageId && styleId && disciplineId && (
          <SummaryStep
            gender={gender}
            setGender={setGender}
            name={name}
            setName={setName}
            clubId={clubId}
            lineageId={lineageId}
            familyBackgroundId={familyBackgroundId}
            styleId={styleId}
            disciplineId={disciplineId}
            onStart={handleStart}
          />
        )}
      </div>
    </div>
  )
}

function StepGrid({
  title,
  items,
  selectedId,
  onSelect,
}: {
  title: string
  items: { id: string; name: string; tagline: string }[]
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  return (
    <Card>
      <h2 className="font-display text-xl mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-2.5">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`text-left rounded-xl px-4 py-3 border transition-colors ${
              selectedId === item.id
                ? 'border-ring-500 bg-ring-500/10'
                : 'border-black/10 dark:border-white/10 hover:border-ring-400'
            }`}
          >
            <div className="font-semibold">{item.name}</div>
            <div className="text-sm opacity-70 mt-0.5">{item.tagline}</div>
          </button>
        ))}
      </div>
    </Card>
  )
}

function StyleTestStep({
  styleId,
  onResolved,
  onContinue,
}: {
  styleId: string | null
  onResolved: (id: string) => void
  onContinue: () => void
}) {
  const style = styleId ? FIGHTING_STYLE_MAP[styleId] : null

  function runTest() {
    const rng = new Rng(createSeed())
    const result = rollFightingStyle(rng)
    onResolved(result.id)
  }

  return (
    <Card>
      <h2 className="font-display text-xl mb-4">Le test de style</h2>
      <p className="opacity-75 text-sm mb-4">
        Avant de choisir quoi que ce soit, ton corps choisit pour toi. Un premier sparring d'observation va révéler
        ton style de combat inné.
      </p>
      {!style ? (
        <Button onClick={runTest}>Faire le test</Button>
      ) : (
        <div className="rounded-xl border border-ring-500/40 bg-ring-500/10 px-4 py-4">
          <div className="font-display text-lg text-ring-600 dark:text-ring-300">{style.name}</div>
          <p className="text-sm opacity-75 mt-1">{style.description}</p>
          <Button className="mt-4" onClick={onContinue}>
            Continuer
          </Button>
        </div>
      )}
    </Card>
  )
}

function SummaryStep({
  gender,
  setGender,
  name,
  setName,
  clubId,
  lineageId,
  familyBackgroundId,
  styleId,
  disciplineId,
  onStart,
}: {
  gender: Gender
  setGender: (g: Gender) => void
  name: string
  setName: (n: string) => void
  clubId: string
  lineageId: string
  familyBackgroundId: string | null
  styleId: string
  disciplineId: string
  onStart: () => void
}) {
  const club = CLUB_MAP[clubId]
  const lineage = LINEAGE_MAP[lineageId]
  const style = FIGHTING_STYLE_MAP[styleId]
  const discipline = DISCIPLINES.find((d) => d.id === disciplineId)!

  return (
    <Card>
      <h2 className="font-display text-xl mb-4">Prêt à monter sur le ring</h2>

      <div className="space-y-2 text-sm mb-5">
        <SummaryRow label="Salle" value={club.name} />
        <SummaryRow label="Lignée" value={lineage.isAutodidact ? 'Autodidacte' : lineage.name} />
        {familyBackgroundId && (
          <SummaryRow label="Milieu" value={FAMILY_BACKGROUNDS.find((f) => f.id === familyBackgroundId)?.name ?? ''} />
        )}
        <SummaryRow label="Style" value={style.name} />
        <SummaryRow label="Discipline" value={discipline.name} />
      </div>

      <div className="flex gap-2 mb-3">
        <Button
          variant={gender === 'm' ? 'primary' : 'secondary'}
          onClick={() => setGender('m')}
          className="flex-1"
        >
          Homme
        </Button>
        <Button
          variant={gender === 'f' ? 'primary' : 'secondary'}
          onClick={() => setGender('f')}
          className="flex-1"
        >
          Femme
        </Button>
      </div>

      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Prénom Nom (laisser vide pour un tirage)"
          className="flex-1 min-h-[44px] rounded-xl px-3 py-2 bg-black/5 dark:bg-white/10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-500"
        />
        <Button
          variant="ghost"
          onClick={() => setName(generateRandomName(new Rng(createSeed()), gender))}
        >
          🎲
        </Button>
      </div>

      <Button className="mt-5 w-full" onClick={onStart}>
        Commencer l'aventure
      </Button>
    </Card>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-black/5 dark:border-white/10 pb-1.5">
      <span className="opacity-60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

