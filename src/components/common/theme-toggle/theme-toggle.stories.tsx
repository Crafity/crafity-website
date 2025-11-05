import type { Meta, StoryObj } from '@storybook/react-vite'

import { ThemeToggle } from './theme-toggle'

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  parameters: {
    docs: {
      description: {
        component:
          'A theme toggle button that cycles through dark, light, and system theme preferences. Persists selection to localStorage and respects system color scheme preference.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Common/ThemeToggle',
}

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Click the button to cycle through theme modes: System (⚙️) → Dark (🌙) → Light (☀️)',
      },
    },
  },
}

export const InContext: Story = {
  decorators: [
    Story => (
      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-default-color)',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '24px',
        }}
      >
        <div
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--mono-font-family)',
            fontSize: '14px',
          }}
        >
          Theme preference:
        </div>
        <Story />
        <div
          style={{
            color: 'var(--text-secondary)',
            fontSize: '12px',
          }}
        >
          Toggle the theme to see the background and text colors change
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Theme toggle shown in a contextual UI container.',
      },
    },
  },
}
