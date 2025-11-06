import type { Meta, StoryObj } from '@storybook/react-vite'

import { Footer } from './footer'

const meta: Meta<typeof Footer> = {
  component: Footer,
  parameters: {
    docs: {
      description: {
        component:
          'Site footer with company information, contact details, social links, and theme toggle. Features responsive grid layout.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Layout/Footer',
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default footer with all content and theme toggle.',
      },
    },
  },
}

export const Mobile: Story = {
  globals: {
    viewport: {
      value: 'xs',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer on mobile viewport with stacked layout.',
      },
    },
  },
}

export const Tablet: Story = {
  globals: {
    viewport: {
      value: 'md',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer on tablet viewport.',
      },
    },
  },
}
