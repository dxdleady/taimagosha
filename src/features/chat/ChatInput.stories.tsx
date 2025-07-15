import type { Meta, StoryObj } from '@storybook/react';

import { ChatInput } from './ChatInput';

const meta: Meta<typeof ChatInput> = {
  title: 'Features/Chat/ChatInput',
  component: ChatInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSendMessage: {
      action: 'message sent',
      description: 'Callback function called when a message is sent',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSendMessage: (message: string) => console.log('Message sent:', message),
    disabled: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    Story => (
      <div className='w-full max-w-md'>
        <Story />
      </div>
    ),
  ],
};

export const Desktop: Story = {
  args: {
    onSendMessage: (message: string) => console.log('Message sent:', message),
    disabled: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  decorators: [
    Story => (
      <div className='w-full max-w-md'>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    onSendMessage: (message: string) => console.log('Message sent:', message),
    disabled: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    Story => (
      <div className='w-full max-w-md'>
        <Story />
      </div>
    ),
  ],
};

export const WithLongText: Story = {
  args: {
    onSendMessage: (message: string) => console.log('Message sent:', message),
    disabled: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    Story => (
      <div className='w-full max-w-md'>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    const textarea = canvas.querySelector('textarea') as HTMLTextAreaElement;
    if (textarea) {
      textarea.value =
        'This is a very long message that should demonstrate how the input handles longer text content and potentially multi-line input.';
    }
  },
};
