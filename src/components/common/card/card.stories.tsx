import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from './card'

const meta: Meta<typeof Card> = {
  argTypes: {
    borderSide: {
      control: 'select',
      description: 'Which sides have a border',
      options: ['all', 'left', 'none'],
    },
    borderWidth: {
      control: 'select',
      description: 'Border thickness',
      options: ['thin', 'medium', 'accent', 'accent-thin'],
    },
    glow: {
      control: 'boolean',
      description: 'Add glow effect (blue shadow)',
    },
    radius: {
      control: 'select',
      description: 'Border radius size',
      options: ['none', 'small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      description: 'Visual style variant',
      options: ['filled', 'outlined', 'elevated', 'transparent'],
    },
  },
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/Card',
}

export default meta
type Story = StoryObj<typeof meta>

// Default Card
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Card Title</h3>
        <p style={{ marginBottom: 0 }}>
          This is a default card with filled variant. It has a background and a
          thin border.
        </p>
      </div>
    ),
  },
}

// Outlined Card
export const Outlined: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Outlined Card</h3>
        <p style={{ marginBottom: 0 }}>
          This card uses the outlined variant with a medium border.
        </p>
      </div>
    ),
    variant: 'outlined',
  },
}

// Elevated Card
export const Elevated: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Elevated Card</h3>
        <p style={{ marginBottom: 0 }}>
          This card has elevation with a shadow effect, similar to the cookie
          banner.
        </p>
      </div>
    ),
    variant: 'elevated',
  },
}

// Card with Glow Effect (Terminal Window style)
export const WithGlow: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Terminal Window Style</h3>
        <p style={{ marginBottom: 0 }}>
          This card has a glow effect, similar to the terminal window component.
        </p>
      </div>
    ),
    glow: true,
    variant: 'outlined',
  },
}

// Left Border Only (AccentBar style)
export const LeftBorderOnly: Story = {
  args: {
    borderSide: 'left',
    borderWidth: 'accent',
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Accent Bar Style</h3>
        <p style={{ marginBottom: 0 }}>
          This card has only a left border with accent width, similar to the
          accent bar pattern.
        </p>
      </div>
    ),
  },
}

// Thin Accent Border (Case Study style)
export const ThinAccentBorder: Story = {
  args: {
    borderWidth: 'accent-thin',
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Case Study Quote</h3>
        <p style={{ fontStyle: 'italic', marginBottom: 0 }}>
          This card uses a thin accent border, similar to the transformation
          text in case studies.
        </p>
      </div>
    ),
    variant: 'outlined',
  },
}

// No Border Radius
export const NoRadius: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Sharp Corners</h3>
        <p style={{ marginBottom: 0 }}>This card has no border radius.</p>
      </div>
    ),
    radius: 'none',
  },
}

// Large Border Radius
export const LargeRadius: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Rounded Corners</h3>
        <p style={{ marginBottom: 0 }}>This card has large border radius.</p>
      </div>
    ),
    radius: 'large',
  },
}

// Transparent Variant (no background)
export const Transparent: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Transparent Card</h3>
        <p style={{ marginBottom: 0 }}>
          This card has no background - only border. Useful for subtle grouping
          or decorative elements.
        </p>
      </div>
    ),
    variant: 'transparent',
  },
}

// Transparent with Left Border (AccentBar replacement)
export const TransparentLeftBorder: Story = {
  args: {
    borderSide: 'left',
    borderWidth: 'accent',
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>AccentBar Style (No Background)</h3>
        <p style={{ fontStyle: 'italic', marginBottom: 0 }}>
          This replaces the AccentBar component - left accent border with no
          background fill.
        </p>
      </div>
    ),
    variant: 'transparent',
  },
}

// All Variants Side by Side
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr' }}>
      <Card variant="filled">
        <strong>Filled (default):</strong> Background + thin border
      </Card>
      <Card variant="outlined">
        <strong>Outlined:</strong> Medium border + background
      </Card>
      <Card variant="elevated">
        <strong>Elevated:</strong> Background + shadow
      </Card>
      <Card variant="transparent">
        <strong>Transparent:</strong> No background, just border
      </Card>
      <Card glow variant="outlined">
        <strong>Outlined + Glow:</strong> Terminal window style
      </Card>
      <Card borderSide="left" borderWidth="accent">
        <strong>Left Border (filled):</strong> Accent bar with background
      </Card>
      <Card borderSide="left" borderWidth="accent" variant="transparent">
        <strong>Left Border (transparent):</strong> Accent bar, no background
      </Card>
      <Card borderWidth="accent-thin" variant="outlined">
        <strong>Thin Accent:</strong> Case study quote style
      </Card>
    </div>
  ),
}

// Real-world Example: Stat Box
export const StatBoxExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Card
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '116px',
          textAlign: 'center',
        }}>
        <div
          style={{
            color: 'var(--accent-secondary)',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}>
          50+
        </div>
        <div style={{ fontSize: '0.875rem' }}>Projects</div>
      </Card>
      <Card
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '116px',
          textAlign: 'center',
        }}>
        <div
          style={{
            color: 'var(--accent-secondary)',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}>
          15+
        </div>
        <div style={{ fontSize: '0.875rem' }}>Years</div>
      </Card>
    </div>
  ),
}

// Real-world Example: Project Card
export const ProjectCardExample: Story = {
  render: () => (
    <Card
      style={{ display: 'flex', flexDirection: 'column' }}
      variant="outlined">
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ color: 'var(--accent-primary)', fontSize: '0.75rem' }}>
          CLIENT NAME
        </span>
        <h3 style={{ margin: '0.5rem 0' }}>Project Title</h3>
      </div>
      <p style={{ marginBottom: '1.5rem' }}>
        A brief description of the project and what was accomplished.
      </p>
      <div style={{ marginTop: 'auto' }}>
        <button
          style={{
            all: 'unset',
            color: 'var(--accent-secondary)',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}
          type="button">
          → View case study
        </button>
      </div>
    </Card>
  ),
}
