import type { Meta, StoryObj } from '@storybook/react';

import { MCPToggleTable } from './MCPToggleTable';

const meta = {
  title: 'Features/Settings/MCPToggleTable',
  component: MCPToggleTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MCPToggleTable>;

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
