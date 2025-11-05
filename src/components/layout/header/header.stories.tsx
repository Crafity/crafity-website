import type { Meta, StoryObj } from '@storybook/react-vite'

import { Header } from './header'

const meta: Meta<typeof Header> = {
  args: {},
  component: Header,
  parameters: {
    layout: 'centered',
  },
  title: 'Layout/Header',
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}
