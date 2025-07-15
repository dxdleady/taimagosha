import React from 'react';

export const withTailwindTheme = (Story: React.ComponentType) => (
  <div className='bg-gray-900 text-white min-h-screen p-4'>
    <Story />
  </div>
);
