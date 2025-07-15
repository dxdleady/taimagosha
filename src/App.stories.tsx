import type { Meta, StoryObj } from '@storybook/react';

import App from './App';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
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

export const WithDifferentCharacter: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    Story => {
      // Mock different character selection
      return <Story />;
    },
  ],
};
