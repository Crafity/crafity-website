import type { Meta, StoryObj } from '@storybook/react-vite'

import { HomePage } from './home-page'

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Pages/Home',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
