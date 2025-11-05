import type { Meta, StoryObj } from '@storybook/react-vite'

import { Header } from './header'

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          'Site header containing the Crafity logo, tagline, and main navigation. Responsive design with mobile-optimized layout.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Layout/Header',
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default header with logo and navigation.',
      },
    },
  },
}

export const Mobile: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Header on mobile viewport. Logo and tagline wrap, navigation gap reduces.',
      },
    },
    viewport: {
      defaultViewport: 'sm',
    },
  },
}

export const Tablet: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Header on tablet viewport.',
      },
    },
    viewport: {
      defaultViewport: 'md',
    },
  },
}
