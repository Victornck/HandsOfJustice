import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import CharacterSelectionPage from './pages/CharacterSelectionPage'
import StoryPage from './pages/StoryPage'
import MissionBriefingPage from './pages/MissionBriefingPage'
import MissionPage from './pages/MissionPage'

import { avatars } from './data/avatars'

import type { Screen } from './types/game'

function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [playerName, setPlayerName] = useState('')

  const selectedAvatar =
    avatars.find((avatar) => avatar.id === selectedId) ?? null

  function navigateTo(nextScreen: Screen) {
    setScreen(nextScreen)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function confirmCharacter() {
    if (!selectedAvatar || !playerName.trim()) {
      return
    }

    navigateTo('story')
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#12140F] text-[#F1F1E9]">
      <Header
        onHome={() => navigateTo('home')}
        onCharacters={() => navigateTo('characters')}
      />

      {screen === 'home' && (
        <HomePage
          onPlay={() => navigateTo('characters')}
        />
      )}

      {screen === 'characters' && (
        <CharacterSelectionPage
          selectedId={selectedId}
          playerName={playerName}
          onSelect={setSelectedId}
          onNameChange={setPlayerName}
          onConfirm={confirmCharacter}
          onBack={() => navigateTo('home')}
        />
      )}

      {screen === 'story' && selectedAvatar && (
        <StoryPage
          playerName={playerName.trim()}
          avatar={selectedAvatar}
          onBack={() => navigateTo('characters')}
          onContinue={() => navigateTo('briefing')}
        />
      )}

      {screen === 'briefing' && selectedAvatar && (
        <MissionBriefingPage
          playerName={playerName.trim()}
          onBack={() => navigateTo('story')}
          onHome={() => navigateTo('home')}
          onStart={() => navigateTo('mission')}
        />
      )}

      {screen === 'mission' && selectedAvatar && (
        <MissionPage
          playerName={playerName.trim()}
          avatar={selectedAvatar}
          onHome={() => navigateTo('home')}
        />
      )}

      <Footer />
    </main>
  )
}

export default App