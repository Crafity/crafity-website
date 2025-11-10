import type { Meta, StoryObj } from '@storybook/react-vite'

import { Box } from './box'

const meta: Meta<typeof Box> = {
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Layout/Box',
}

export default meta
type Story = StoryObj<typeof meta>

export const Padding: Story = {
  args: {
    children: 'Box with padding (32px)',
    p: 8,
  },
  render: args => (
    <div style={{ border: '1px dashed gray' }}>
      <div style={{ background: 'rgba(255,0,0,0.1)' }}>
        <Box {...args}>{args.children}</Box>
      </div>
    </div>
  ),
}

export const ResponsivePadding: Story = {
  args: {
    children: 'Responsive padding (grows with viewport)',
    p: { base: 4, lg: 12, md: 8 },
  },
  render: Padding.render,
}

export const DirectionalPadding: Story = {
  args: {
    children: 'Horizontal: 48px, Vertical: 16px',
    px: 12,
    py: 4,
  },
  render: Padding.render,
}

export const Margin: Story = {
  args: {
    children: 'Box with bottom margin',
    mb: 8,
  },
}

export const Combined: Story = {
  args: {
    children: 'Padding + Margin',
    m: 4,
    p: 6,
  },
  render: Padding.render,
}
