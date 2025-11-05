import type { Meta, StoryObj } from '@storybook/react-vite'

import { Hero } from './hero'

const meta: Meta<typeof Hero> = {
  component: Hero,
  parameters: {
    docs: {
      description: {
        component:
          'Complete hero section featuring terminal window, hero statement, stats grid, and command input. This is a composition component that brings together multiple sub-components.',
      },
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Home/Hero',
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Complete hero section with all elements: terminal window, hero statement, stats, and CTA.',
      },
    },
  },
}

export const Mobile: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Hero section on mobile viewport - all elements stack vertically.',
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
        story: 'Hero section on tablet viewport.',
      },
    },
    viewport: {
      defaultViewport: 'md',
    },
  },
}
