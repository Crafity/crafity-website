import type { Meta, StoryObj } from '@storybook/react-vite'

import { Footer } from './footer'

const meta: Meta<typeof Footer> = {
  args: {},
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  title: 'Layout/Footer',
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {}
