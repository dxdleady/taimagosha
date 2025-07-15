import React from 'react';

import { useCharacterStore } from '../../store/characterStore';

export const CharacterSelector: React.FC = () => {
  const { currentCharacter, availableCharacters, setCurrentCharacter } =
    useCharacterStore();

  return (
    <div className='space-y-4'>
      {/* Character Icon */}
      <div className='flex items-center space-x-4'>
        <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center'>
          <svg
            className='w-6 h-6 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />
          </svg>
        </div>

        {/* Character Selection Button */}
        <div className='flex-1'>
          <div className='border border-gray-600 rounded-lg px-4 py-3 bg-gray-800 hover:bg-gray-700 transition-colors'>
            <div className='text-sm text-gray-300 mb-1'>
              Drag & Drop file with character
            </div>
            <div className='text-sm'>
              <span className='text-gray-400'>Selected: </span>
              <span className='text-blue-400'>
                {currentCharacter?.id || 'duck'}_character.json
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Character Dropdown */}
      <div className='space-y-2'>
        <label className='block text-sm text-gray-300'>Select Character:</label>
        <select
          value={currentCharacter?.id || ''}
          onChange={e => {
            const selected = availableCharacters.find(
              c => c.id === e.target.value
            );
            if (selected) setCurrentCharacter(selected);
          }}
          className='w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        >
          {availableCharacters.map(character => (
            <option key={character.id} value={character.id}>
              {character.displayName} - {character.description}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
