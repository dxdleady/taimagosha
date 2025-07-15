import { useEffect } from 'react';

import { ChatWindow } from './features/chat/ChatWindow';
import { InfoIcon } from './features/infoPills/InfoIcon';
import { InfoPill } from './features/infoPills/InfoPill';
import { useCharacterStore } from './store/characterStore';

function App() {
  const { currentCharacter, loadAvailableCharacters } = useCharacterStore();

  useEffect(() => {
    // Load available characters on app start
    loadAvailableCharacters();
  }, [loadAvailableCharacters]);

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <div className='max-w-md mx-auto p-4'>
        {/* Header with Heart close to name */}
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3'>
            <h1 className='text-2xl font-bold'>
              <span
                style={{
                  color: currentCharacter?.ui.primary_color || '#3b82f6',
                }}
              >
                {currentCharacter?.displayName.slice(0, 3) || 'TAI'}
              </span>
              {currentCharacter?.displayName.slice(3) || 'MAGOSHA'}
            </h1>
            <img
              src={currentCharacter?.assets.heart || '/assets/heart.gif'}
              alt='Heart'
              className='w-8 h-8'
            />
          </div>
        </div>

        {/* Info Pills */}
        <div className='flex flex-col gap-4 mb-8 items-center'>
          <div className='flex items-center justify-center gap-4 bg-gray-800 rounded-full px-6 py-3 border border-gray-700'>
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
          </div>

          <div className='flex items-center justify-center gap-4 bg-gray-800 rounded-full px-6 py-3 border border-gray-700'>
            <img
              src='/assets/icons/mcp_catch.png'
              alt='MCP'
              className='w-8 h-8'
            />
            <InfoPill label='playwright, context7' />
            <InfoIcon tooltip='Active MCP connections' />
          </div>
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
