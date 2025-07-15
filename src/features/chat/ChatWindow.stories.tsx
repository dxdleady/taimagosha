import type { Meta, StoryObj } from '@storybook/react';

import { ChatWindow } from './ChatWindow';

const meta: Meta<typeof ChatWindow> = {
  title: 'Features/Chat/ChatWindow',
  component: ChatWindow,
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
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const WithMessages: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    Story => {
      // Mock some messages in the store
      return (
        <div className='max-w-md mx-auto'>
          <Story />
        </div>
      );
    },
  ],
};

export const Loading: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    Story => {
      // Mock loading state
      return (
        <div className='max-w-md mx-auto'>
          <Story />
        </div>
      );
    },
  ],
};
