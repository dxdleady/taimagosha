import type { Meta, StoryObj } from '@storybook/react';
import { SettingsPanel } from './SettingsPanel';

const meta: Meta<typeof SettingsPanel> = {
  title: 'Features/Settings/SettingsPanel',
  component: SettingsPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    Story => (
      <div className='relative min-h-screen'>
        <Story />
      </div>
    ),
  ],
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  decorators: [
    Story => (
      <div className='relative min-h-screen'>
        <Story />
      </div>
    ),
  ],
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  decorators: [
    Story => (
      <div className='relative min-h-screen'>
        <Story />
      </div>
    ),
  ],
};

export const OpenPanel: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    Story => {
      // Mock open state
      return (
        <div className='relative min-h-screen'>
          <Story />
          <div className='absolute left-0 top-full mt-2 w-80 bg-gray-800 rounded-lg border border-gray-700 shadow-xl z-50'>
            <div className='p-6'>
              <h3 className='text-lg font-semibold text-white mb-6 text-center'>
                Character Settings
              </h3>
              <div className='mb-6'>
                <label className='text-white font-medium mb-3 block text-center'>
                  Select Character
                </label>
                <select className='w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center'>
                  <option>Duck - Friendly duck character</option>
                  <option>Robo - Robotic assistant</option>
                  <option>Taimagosha - Main character</option>
                </select>
              </div>
              <div className='text-sm text-gray-400 bg-gray-700 p-4 rounded-lg text-center'>
                <div className='space-y-2'>
                  <p>
                    <strong>Character:</strong> Duck
                  </p>
                  <p>
                    <strong>Model:</strong> DeepSeek Chat v3
                  </p>
                  <p>
                    <strong>Personality:</strong> Friendly
                  </p>
                  <p>
                    <strong>Memory:</strong> Basic mode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  ],
};
