import type { Meta, StoryObj } from '@storybook/react-vite'

import { PrivacyPage } from './privacy-page'

const meta: Meta<typeof PrivacyPage> = {
  component: PrivacyPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Pages/Privacy',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
