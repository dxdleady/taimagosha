import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessage } from './ChatMessage';

const meta: Meta<typeof ChatMessage> = {
  title: 'Features/Chat/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'object',
      description: 'The message object to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockUserMessage = {
  id: '1',
  text: 'Hello, how are you?',
  sender: 'user' as const,
  timestamp: Date.now(),
};

const mockAIMessage = {
  id: '2',
  text: 'Hello! I am doing well, thank you for asking. How can I help you today?',
  sender: 'ai' as const,
  timestamp: Date.now(),
};

const mockLongMessage = {
  id: '3',
  text: 'This is a very long message that demonstrates how the chat message component handles longer text content. It should wrap properly and maintain good readability across different screen sizes.',
  sender: 'ai' as const,
  timestamp: Date.now(),
};

export const UserMessage: Story = {
  args: {
    message: mockUserMessage,
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

export const AIMessage: Story = {
  args: {
    message: mockAIMessage,
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

export const LongMessage: Story = {
  args: {
    message: mockLongMessage,
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
    message: mockAIMessage,
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

export const Conversation: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    () => (
      <div className='w-full max-w-md space-y-4'>
        <ChatMessage message={mockUserMessage} />
        <ChatMessage message={mockAIMessage} />
        <ChatMessage message={mockLongMessage} />
      </div>
    ),
  ],
  render: () => <div />,
};
