import React from 'react';

import { useSettingsStore } from '../../store/settingsStore';

export const MemoryControls: React.FC = () => {
  const {
    deepMemoryEnabled,
    maxMemoryMessages,
    toggleDeepMemory,
    setMaxMemoryMessages,
  } = useSettingsStore();

  return (
    <div className='flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700 mb-2'>
      <div className='flex items-center gap-4'>
        {/* Deep Memory Toggle */}
        <div className='flex items-center gap-2'>
          <button
            onClick={toggleDeepMemory}
            className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors ${
              deepMemoryEnabled ? 'bg-blue-600' : 'bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-3 w-3 rounded-full bg-white transition-transform ${
                deepMemoryEnabled ? 'translate-x-4' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className='text-sm text-gray-300'>Memory</span>
        </div>

        {/* Memory Length */}
        {deepMemoryEnabled && (
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-400'>Length:</span>
            <input
              type='range'
              min='5'
              max='50'
              value={maxMemoryMessages}
              onChange={e => setMaxMemoryMessages(parseInt(e.target.value))}
              className='w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer'
            />
            <span className='text-sm text-gray-400 w-8'>
              {maxMemoryMessages}
            </span>
          </div>
        )}
      </div>

      <div className='text-xs text-gray-500'>
        {deepMemoryEnabled ? `${maxMemoryMessages} msgs` : 'Basic'}
      </div>
    </div>
  );
};
