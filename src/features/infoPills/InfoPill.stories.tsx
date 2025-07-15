import type { Meta, StoryObj } from '@storybook/react';

import { InfoPill } from './InfoPill';

const meta: Meta<typeof InfoPill> = {
  title: 'Features/InfoPills/InfoPill',
  component: InfoPill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The text label displayed in the pill',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'duck_character.json',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const Desktop: Story = {
  args: {
    label: 'duck_character.json',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const LongLabel: Story = {
  args: {
    label: 'very_long_character_filename.json',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const MCPLabel: Story = {
  args: {
    label: 'playwright, context7',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const SocialsLabel: Story = {
  args: {
    label: 'coming soon',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
