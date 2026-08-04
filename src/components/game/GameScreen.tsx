import type { CareerStoreState } from '../../store/careerStoreFactory'
import type { StoreApi, UseBoundStore } from 'zustand'
import { useNavStore } from '../../store/navStore'
import { CharacterSheet } from '../character/CharacterSheet'
import { EventCard } from './EventCard'
import { RoundFightCard } from './RoundFightCard'
import { DormantPotentialCardView } from './DormantPotentialCardView'
import { TechniqueDiscoveryPrompt } from './TechniqueDiscoveryPrompt'
import { ResultBanner } from './ResultBanner'
import { YearSummaryScreen } from './YearSummaryScreen'
import { PointAllocationScreen } from './PointAllocationScreen'
import { GameOverScreen } from './GameOverScreen'
import { TechniquesButton } from './TechniquesPanel'

export function GameScreen({ useStore }: { useStore: UseBoundStore<StoreApi<CareerStoreState>> }) {
  const goTo = useNavStore((s) => s.goTo)
  const state = useStore()
  const { character, phase } = state

  if (!character) {
    goTo('home')
    return null
  }

  if (phase === 'game-over' && state.endingType) {
    return (
      <GameOverScreen
        character={character}
        endingType={state.endingType}
        onBackHome={() => {
          // La carrière est déjà retirée du localStorage à ce stade ; il faut aussi
          // vider l'état en mémoire, sinon l'accueil propose de "reprendre" une
          // carrière déjà terminée et on boucle indéfiniment sur cet écran.
          state.abandonCareer()
          goTo('home')
        }}
      />
    )
  }

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col items-center gap-4 pb-24">
      <div className="w-full max-w-xl flex justify-between items-center">
        <button onClick={() => goTo('home')} className="text-xs opacity-50 hover:opacity-90">
          ← Accueil
        </button>
      </div>

      <div className="w-full max-w-xl">
        <CharacterSheet character={character} />
      </div>

      <div className="w-full max-w-xl">
        {phase === 'resolution' && state.lastResolution && (
          <ResultBanner result={state.lastResolution} onContinue={state.acknowledgeResolution} />
        )}

        {phase === 'technique-discovery' && state.pendingDiscoveryTechniqueId && (
          <TechniqueDiscoveryPrompt
            techniqueId={state.pendingDiscoveryTechniqueId}
            onChoose={state.chooseTechniqueDiscovery}
          />
        )}

        {phase === 'card' && state.currentCard && state.currentCard.type === 'fight' && (
          <RoundFightCard
            key={state.currentCard.id}
            card={state.currentCard}
            character={character}
            fightRound={state.fightRound}
            lastRoundResult={state.lastRoundResult}
            onChooseApproach={state.chooseTacticalApproach}
            onAcknowledgeRound={state.acknowledgeRoundResult}
          />
        )}

        {phase === 'card' &&
          state.currentCard &&
          (state.currentCard.type === 'life-moment' ||
            state.currentCard.type === 'training' ||
            state.currentCard.type === 'lineage-exclusive') && (
            <EventCard key={state.currentCard.id} card={state.currentCard} character={character} onChoose={state.chooseCardOption} />
          )}

        {phase === 'card' && state.currentCard && state.currentCard.type === 'dormant-potential' && (
          <DormantPotentialCardView key={state.currentCard.id} card={state.currentCard} onChoose={state.chooseDormantDoor} />
        )}

        {phase === 'year-summary' && state.yearSummary && (
          <YearSummaryScreen
            summary={state.yearSummary}
            character={character}
            onContinue={state.confirmYearSummary}
            onRetire={state.retireNow}
          />
        )}

        {phase === 'point-allocation' && <PointAllocationScreen character={character} onValidate={state.allocatePoints} />}
      </div>

      <TechniquesButton character={character} />
    </div>
  )
}
