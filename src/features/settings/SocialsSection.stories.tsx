import type { Meta, StoryObj } from '@storybook/react';

import { SocialsSection } from './SocialsSection';

const meta = {
  title: 'Features/Settings/SocialsSection',
  component: SocialsSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialsSection>;

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
