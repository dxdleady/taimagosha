import type { Meta, StoryObj } from '@storybook/react';
import { InfoIcon } from './InfoIcon';

const meta: Meta<typeof InfoIcon> = {
  title: 'Features/InfoPills/InfoIcon',
  component: InfoIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tooltip: {
      control: 'text',
      description: 'The tooltip text shown on hover/click',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tooltip: 'Character configuration file',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const Desktop: Story = {
  args: {
    tooltip: 'Character configuration file',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const LongTooltip: Story = {
  args: {
    tooltip:
      'This is a very long tooltip that explains the character configuration file in great detail',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const MCPTooltip: Story = {
  args: {
    tooltip: 'Active MCP connections',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const SocialsTooltip: Story = {
  args: {
    tooltip: 'Social media integrations coming soon',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
