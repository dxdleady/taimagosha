import React from 'react';

import { useMCPStore } from '../../store/mcpStore';

export const MCPToggleTable: React.FC = () => {
  const { mcpItems, toggleMCP } = useMCPStore();

  return (
    <div className='space-y-4'>
      {/* MCP Icon */}
      <div className='flex items-center space-x-3'>
        <div className='w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center'>
          <svg
            className='w-5 h-5 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 10V3L4 14h7v7l9-11h-7z'
            />
          </svg>
        </div>
        <h3 className='text-lg font-medium text-white'>Activate MCPs:</h3>
      </div>

      {/* MCP Table */}
      <div className='bg-gray-800 rounded-lg border border-gray-700 overflow-hidden'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-gray-700'>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-300'>
                Name
              </th>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-300'>
                Description
              </th>
              <th className='px-4 py-3 text-center text-sm font-medium text-gray-300'>
                ON/OFF
              </th>
            </tr>
          </thead>
          <tbody>
            {mcpItems.map(item => (
              <tr
                key={item.id}
                className='border-b border-gray-700 last:border-b-0'
              >
                <td className='px-4 py-3 text-sm text-white font-medium'>
                  {item.name}
                </td>
                <td className='px-4 py-3 text-sm text-gray-400'>
                  {item.description}
                </td>
                <td className='px-4 py-3 text-center'>
                  <button
                    onClick={() => toggleMCP(item.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      item.enabled
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        item.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add empty rows to match design */}
      {mcpItems.length < 4 && (
        <div className='bg-gray-800 rounded-lg border border-gray-700 overflow-hidden'>
          <table className='w-full'>
            <tbody>
              {Array.from({ length: 4 - mcpItems.length }).map((_, index) => (
                <tr
                  key={`empty-${index}`}
                  className='border-b border-gray-700 last:border-b-0'
                >
                  <td className='px-4 py-3 text-sm text-gray-600'>—</td>
                  <td className='px-4 py-3 text-sm text-gray-600'>—</td>
                  <td className='px-4 py-3 text-center'>
                    <div className='relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700'>
                      <span className='inline-block h-4 w-4 transform rounded-full bg-gray-500 translate-x-1' />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
