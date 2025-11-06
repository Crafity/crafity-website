import type { Meta, StoryObj } from '@storybook/react-vite'

import { CTA } from './cta'

const meta: Meta<typeof CTA> = {
  component: CTA,
  parameters: {
    docs: {
      description: {
        component:
          'Call-to-action section with centered layout, title, description, terminal-styled email button, and contact information.',
      },
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Home/CTA',
}

export default meta
type Story = StoryObj<typeof CTA>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Default CTA section with all elements. The email button opens the default mail client.',
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
        story: 'CTA section on mobile viewport with centered layout.',
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
        story: 'CTA section on tablet viewport.',
      },
    },
  },
}
