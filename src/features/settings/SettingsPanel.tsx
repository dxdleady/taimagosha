import React, { useState } from 'react'
import { useSettingsStore } from '../../store/settingsStore'
import { useCharacterStore } from '../../store/characterStore'

export const SettingsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { 
    deepMemoryEnabled, 
    maxMemoryMessages
  } = useSettingsStore()
  
  const { 
    currentCharacter, 
    availableCharacters, 
    setCurrentCharacter 
  } = useCharacterStore()

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 hover:text-white transition-colors"
        title="Settings"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-80 bg-gray-800 rounded-lg border border-gray-700 shadow-xl z-50">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">Character Settings</h3>
            
            {/* Character Selection */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block text-center">Select Character</label>
              <select
                value={currentCharacter?.id || ''}
                onChange={(e) => {
                  const selected = availableCharacters.find(c => c.id === e.target.value)
                  if (selected) setCurrentCharacter(selected)
                }}
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              >
                {availableCharacters.map(character => (
                  <option key={character.id} value={character.id}>
                    {character.displayName} - {character.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Character Status */}
            <div className="text-sm text-gray-400 bg-gray-700 p-4 rounded-lg text-center">
              <div className="space-y-2">
                <p><strong>Character:</strong> {currentCharacter?.displayName || 'Loading...'}</p>
                <p><strong>Model:</strong> DeepSeek Chat v3</p>
                <p><strong>Personality:</strong> {currentCharacter?.character.personality || 'Default'}</p>
                <p><strong>Memory:</strong> {deepMemoryEnabled ? `${maxMemoryMessages} messages` : 'Basic mode'}</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">Memory controls available in chat area</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}