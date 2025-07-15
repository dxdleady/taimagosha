import type { Meta, StoryObj } from '@storybook/react';

import { CharacterSelector } from './CharacterSelector';

const meta = {
  title: 'Features/Settings/CharacterSelector',
  component: CharacterSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
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
