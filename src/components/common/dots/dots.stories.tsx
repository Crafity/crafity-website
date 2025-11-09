import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dots } from './dots'

const meta: Meta<typeof Dots> = {
  component: Dots,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Common/Dots',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
