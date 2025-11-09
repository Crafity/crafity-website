import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressBar } from './progress-bar'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/ProgressBar',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Loading project data',
    percent: 100,
  },
}

export const InProgress: Story = {
  args: {
    label: 'Processing',
    percent: 65,
  },
}

export const Starting: Story = {
  args: {
    label: 'Initializing',
    percent: 15,
  },
}
