import type { Meta, StoryObj } from '@storybook/react-vite'

import { SonicEquipmentPage } from './sonic-equipment-page'

const meta: Meta<typeof SonicEquipmentPage> = {
  component: SonicEquipmentPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Pages/Work/SonicEquipment',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
