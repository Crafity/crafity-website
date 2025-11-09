import type { Meta, StoryObj } from '@storybook/react-vite'

import { ContentWidth } from './content-width'

const meta: Meta<typeof ContentWidth> = {
  argTypes: {
    indent: {
      control: 'boolean',
      description:
        'Add left margin for asymmetric layout (32px mobile, 96px desktop)',
    },
  },
  component: ContentWidth,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Layout/ContentWidth',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ background: 'rgba(255, 69, 0, 0.1)', padding: '2rem' }}>
        <p>
          ContentWidth without indent provides a simple wrapper with max-width
          constraint. Used for standard content blocks.
        </p>
      </div>
    ),
    indent: false,
  },
}

export const WithIndent: Story = {
  args: {
    children: (
      <div style={{ background: 'rgba(149, 197, 239, 0.1)', padding: '2rem' }}>
        <p>
          ContentWidth with indent adds left margin (32px mobile, 96px desktop)
          for asymmetric Dutch design-inspired layouts. Creates visual interest
          and hierarchy.
        </p>
      </div>
    ),
    indent: true,
  },
}

export const Comparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Without indent:</h3>
        <ContentWidth indent={false}>
          <div
            style={{
              background: 'rgba(255, 69, 0, 0.1)',
              border: '2px solid var(--accent-primary)',
              padding: '2rem',
            }}>
            <p>Full-width content within the max-width constraint.</p>
          </div>
        </ContentWidth>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>With indent:</h3>
        <ContentWidth indent={true}>
          <div
            style={{
              background: 'rgba(149, 197, 239, 0.1)',
              border: '2px solid var(--accent-secondary)',
              padding: '2rem',
            }}>
            <p>
              Indented content creates asymmetric layout. Notice the left margin
              (32px on mobile, 96px on desktop).
            </p>
          </div>
        </ContentWidth>
      </div>
    </div>
  ),
}

export const TypicalUsage: Story = {
  render: () => (
    <div>
      <ContentWidth>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Section Title
        </h2>
        <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
          This paragraph uses default ContentWidth (no indent). It's suitable
          for introductory text or main content that should be left-aligned.
        </p>
      </ContentWidth>

      <ContentWidth indent={true}>
        <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
          This paragraph uses ContentWidth with indent. Perfect for quotes,
          highlights, or content you want to visually offset from the main flow.
        </p>
      </ContentWidth>

      <ContentWidth>
        <p style={{ lineHeight: 1.6 }}>
          Back to standard width. The indent prop allows you to create rhythm
          and visual hierarchy by alternating between standard and indented
          content blocks.
        </p>
      </ContentWidth>
    </div>
  ),
}

export const MaxWidthDemo: Story = {
  render: () => (
    <div style={{ background: '#1a1a1a', padding: '2rem' }}>
      <ContentWidth>
        <div
          style={{
            background: 'rgba(255, 69, 0, 0.2)',
            border: '2px dashed var(--accent-primary)',
            padding: '2rem',
          }}>
          <h3 style={{ marginBottom: '1rem' }}>Max-width constraint</h3>
          <p>
            ContentWidth limits content to a readable line length. On wide
            screens, content doesn't stretch too far, maintaining optimal
            readability (typically 60-80 characters per line).
          </p>
        </div>
      </ContentWidth>
    </div>
  ),
}
