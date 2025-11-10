import type { Meta, StoryObj } from '@storybook/react-vite'

import { Container } from './container'

const meta: Meta<typeof Container> = {
  argTypes: {
    padding: {
      control: 'boolean',
      description:
        'Whether to include horizontal padding. Set to false for full-bleed content within max-width constraint.',
      table: {
        defaultValue: { summary: 'true' },
        type: {
          summary: 'boolean',
        },
      },
    },
    size: {
      control: 'select',
      description:
        'Semantic size determining the maximum width of the container',
      options: ['narrow', 'base', 'comfortable', 'wide', 'full'],
      table: {
        defaultValue: { summary: 'base' },
        type: {
          summary: "'narrow' | 'base' | 'comfortable' | 'wide' | 'full'",
        },
      },
    },
  },
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Layout/Container',
}

export default meta
type Story = StoryObj<typeof meta>

const ExampleContent = ({ label }: { label: string }) => (
  <div
    style={{
      background: 'var(--accent-primary)',
      color: 'var(--bg-primary)',
      fontFamily: 'var(--accent-font-family)',
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      padding: '2rem',
      textAlign: 'center',
    }}>
    {label}
  </div>
)

export const AllSizes: Story = {
  render: () => (
    <div style={{ background: 'var(--bg-secondary)', padding: '2rem 0' }}>
      {(['narrow', 'base', 'comfortable', 'wide', 'full'] as const).map(
        size => (
          <div key={size} style={{ marginBottom: '2rem' }}>
            <Container size={size}>
              <ExampleContent label={`${size} (${getSizeDescription(size)})`} />
            </Container>
          </div>
        ),
      )}
    </div>
  ),
}

export const Narrow: Story = {
  args: {
    children: (
      <ExampleContent label="Narrow (600px) - Forms, CTAs, focused content" />
    ),
    size: 'narrow',
  },
}

export const Base: Story = {
  args: {
    children: (
      <ExampleContent label="Base (900px) - Articles, case studies, long-form reading" />
    ),
    size: 'base',
  },
}

export const Comfortable: Story = {
  args: {
    children: (
      <ExampleContent label="Comfortable (1000px) - Slightly wider content" />
    ),
    size: 'comfortable',
  },
}

export const Wide: Story = {
  args: {
    children: (
      <ExampleContent label="Wide (1200px) - Multi-column layouts, service grids" />
    ),
    size: 'wide',
  },
}

export const Full: Story = {
  args: {
    children: (
      <ExampleContent label="Full (1400px) - Hero sections, full-width layouts" />
    ),
    size: 'full',
  },
}

export const WithRealContent: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem 0' }}>
        <h1
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-8)',
          }}>
          Example Article Title
        </h1>
        <p style={{ marginBottom: 'var(--spacing-4)' }}>
          This is an example of how the Container component works with real
          content. The base size (900px) is optimized for comfortable reading,
          keeping line length between 45-75 characters for optimal readability.
        </p>
        <p style={{ marginBottom: 'var(--spacing-4)' }}>
          The container automatically adds horizontal padding on mobile devices
          (16px on small screens, 24px on medium and up) to prevent content from
          touching the edges of the viewport.
        </p>
        <p>
          This follows industry best practices from design systems like
          Material-UI, Chakra UI, and Shopify Polaris.
        </p>
      </div>
    ),
    size: 'base',
  },
}

export const WithoutPadding: Story = {
  render: () => (
    <div style={{ background: 'var(--bg-secondary)', padding: '2rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Container padding={true} size="base">
          <div
            style={{
              background: 'var(--accent-secondary)',
              color: 'var(--bg-primary)',
              padding: '1rem',
              textAlign: 'center',
            }}>
            With padding (default) - Content respects edges
          </div>
        </Container>
      </div>

      <Container padding={false} size="base">
        <div
          style={{
            background: 'var(--accent-primary)',
            color: 'var(--bg-primary)',
            padding: '1rem',
            textAlign: 'center',
          }}>
          Without padding - Full bleed within max-width constraint
        </div>
      </Container>
    </div>
  ),
}

// Helper function for labels
function getSizeDescription(size: string): string {
  const descriptions: Record<string, string> = {
    base: '900px',
    comfortable: '1000px',
    full: '1400px',
    narrow: '600px',
    wide: '1200px',
  }
  return descriptions[size] || ''
}
