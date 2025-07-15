import { useEffect } from 'react';

import { ChatWindow } from './features/chat/ChatWindow';
import { InfoIcon } from './features/infoPills/InfoIcon';
import { InfoPill } from './features/infoPills/InfoPill';
import { SettingsScreen } from './features/settings/SettingsScreen';
import { useAppStore } from './store/appStore';
import { useCharacterStore } from './store/characterStore';
import { useMCPStore } from './store/mcpStore';

function App() {
  const { currentCharacter, loadAvailableCharacters } = useCharacterStore();
  const { currentScreen, setCurrentScreen } = useAppStore();
  const { mcpItems, initializeMCPs } = useMCPStore();

  useEffect(() => {
    // Load available characters on app start
    loadAvailableCharacters();
    // Initialize MCP items
    initializeMCPs();
  }, [loadAvailableCharacters, initializeMCPs]);

  // Get active MCP names for display
  const activeMCPs =
    mcpItems
      .filter(item => item.enabled)
      .map(item => item.name.toLowerCase())
      .join(', ') || 'none';

  const handleHeartClick = () => {
    setCurrentScreen('settings');
  };

  const handlePillClick = () => {
    setCurrentScreen('settings');
  };

  // Show settings screen if selected
  if (currentScreen === 'settings') {
    return <SettingsScreen />;
  }

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <div className='max-w-md mx-auto p-4'>
        {/* Header with Heart close to name */}
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3'>
            <h1 className='text-2xl font-bold'>
              <span className='text-blue-400'>
                {currentCharacter?.displayName.slice(0, 3) || 'TAI'}
              </span>
              {currentCharacter?.displayName.slice(3) || 'MAGOSHA'}
            </h1>
            <button
              onClick={handleHeartClick}
              className='hover:scale-110 transition-transform'
            >
              <img
                src={currentCharacter?.assets.heart || '/assets/heart.gif'}
                alt='Heart'
                className='w-8 h-8'
              />
            </button>
          </div>
        </div>

        {/* Info Pills */}
        <div className='flex flex-col gap-4 mb-8 items-center'>
          <button
            onClick={handlePillClick}
            className='flex items-center justify-center gap-4 bg-gray-800 rounded-full px-6 py-3 border border-gray-700 hover:bg-gray-700 transition-colors'
          >
            <img
              src='/assets/icons/character_skeleton.png'
              alt='Character'
              className='w-8 h-8'
            />
            <InfoPill
              label={`${currentCharacter?.id || 'duck'}_character.json`}
            />
            <InfoIcon
              tooltip={`${
                currentCharacter?.name || 'Character'
              } configuration file`}
            />
          </button>

          <button
            onClick={handlePillClick}
            className='flex items-center justify-center gap-4 bg-gray-800 rounded-full px-6 py-3 border border-gray-700 hover:bg-gray-700 transition-colors'
          >
            <img
              src='/assets/icons/mcp_catch.png'
              alt='MCP'
              className='w-8 h-8'
            />
            <InfoPill label={activeMCPs} />
            <InfoIcon tooltip='Active MCP connections' />
          </button>
        </div>

        {/* Character Display */}
        <div className='flex justify-center mb-6'>
          <div className='w-64 h-64 flex items-center justify-center'>
            <img
              src={currentCharacter?.assets.avatar || '/assets/duck.gif'}
              alt={`${currentCharacter?.name || 'Duck'} Character`}
              className='w-full h-full object-contain'
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/duck.gif'; // Fallback to duck.gif
              }}
            />
          </div>
        </div>

        {/* Chat Window */}
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
