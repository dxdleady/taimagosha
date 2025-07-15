import React, { useEffect } from 'react';

import { useAppStore } from '../../store/appStore';
import { useMCPStore } from '../../store/mcpStore';

import { CharacterSelector } from './CharacterSelector';
import { MCPToggleTable } from './MCPToggleTable';
import { SocialsSection } from './SocialsSection';

export const SettingsScreen: React.FC = () => {
  const setCurrentScreen = useAppStore(state => state.setCurrentScreen);
  const { initializeMCPs } = useMCPStore();

  useEffect(() => {
    initializeMCPs();
  }, [initializeMCPs]);

  const handleClose = () => {
    setCurrentScreen('main');
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col'>
      {/* Header */}
      <div className='flex justify-between items-center p-4 border-b border-gray-700'>
        <h1 className='text-lg font-semibold text-gray-300'>
          TAIMAGOSHA Настройки
        </h1>
        <button
          onClick={handleClose}
          className='text-gray-400 hover:text-white transition-colors'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-6 max-w-md mx-auto w-full'>
        {/* App Title */}
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold'>
            <span className='text-blue-400'>TAI</span>MAGOSHA
          </h2>
        </div>

        {/* Character Selection */}
        <div className='mb-8'>
          <CharacterSelector />
        </div>

        {/* MCP Toggles */}
        <div className='mb-8'>
          <MCPToggleTable />
        </div>

        {/* Socials */}
        <div className='mb-8'>
          <SocialsSection />
        </div>
      </div>
    </div>
  );
};
