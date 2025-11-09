import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from './divider'

const meta: Meta<typeof Divider> = {
  argTypes: {
    spacing: {
      control: 'select',
      description: 'Vertical spacing (margin) around the divider',
      options: ['none', 'small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
        type: {
          summary: "'none' | 'small' | 'medium' | 'large'",
        },
      },
    },
    variant: {
      control: 'select',
      description: 'Visual style of the divider',
      options: ['default', 'gradient'],
      table: {
        defaultValue: { summary: 'default' },
        type: {
          summary: "'default' | 'gradient'",
        },
      },
    },
  },
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/Divider',
}

export default meta
type Story = StoryObj<typeof meta>

const ExampleText = ({ text }: { text: string }) => (
  <p style={{ color: 'var(--text-secondary)' }}>{text}</p>
)

export const Default: Story = {
  args: {
    spacing: 'medium',
    variant: 'default',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div>
      <h3
        style={{
          fontFamily: 'var(--accent-font-family)',
          fontSize: 'var(--font-size-base)',
          marginBottom: 'var(--spacing-4)',
        }}>
        Default Divider
      </h3>
      <ExampleText text="Content before divider" />
      <Divider variant="default" />
      <ExampleText text="Content after divider" />

      <div style={{ marginTop: 'var(--spacing-16)' }} />

      <h3
        style={{
          fontFamily: 'var(--accent-font-family)',
          fontSize: 'var(--font-size-base)',
          marginBottom: 'var(--spacing-4)',
        }}>
        Gradient Divider
      </h3>
      <ExampleText text="Content before gradient divider" />
      <Divider variant="gradient" />
      <ExampleText text="Content after gradient divider" />
    </div>
  ),
}

export const AllSpacing: Story = {
  render: () => (
    <div>
      {(['none', 'small', 'medium', 'large'] as const).map(spacing => (
        <div key={spacing}>
          <h3
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-base)',
              marginBottom: 'var(--spacing-2)',
            }}>
            {spacing.charAt(0).toUpperCase() + spacing.slice(1)} Spacing
          </h3>
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-default-color)',
              padding: 'var(--spacing-4)',
            }}>
            <ExampleText text="Content above" />
            <Divider spacing={spacing} />
            <ExampleText text="Content below" />
          </div>
          {spacing !== 'large' && (
            <div style={{ marginBottom: 'var(--spacing-8)' }} />
          )}
        </div>
      ))}
    </div>
  ),
}

export const GradientWithLargeSpacing: Story = {
  args: {
    spacing: 'large',
    variant: 'gradient',
  },
}

export const RealWorldExample: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <article>
        <h1
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-2xl)',
            marginBottom: 'var(--spacing-4)',
          }}>
          Article Title
        </h1>
        <p
          style={{
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-xs)',
          }}>
          Published on November 9, 2025
        </p>

        <Divider spacing="large" variant="gradient" />

        <h2
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-4)',
          }}>
          Introduction
        </h2>
        <ExampleText text="This is an example of using dividers to separate content sections in an article. The gradient divider with large spacing creates a clear visual break between the article header and the content." />

        <Divider spacing="medium" />

        <h2
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-4)',
          }}>
          Main Content
        </h2>
        <ExampleText text="Standard dividers with medium spacing work well between sections of similar hierarchy. They provide visual separation without being too dominant." />

        <Divider spacing="medium" />

        <h2
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-4)',
          }}>
          Conclusion
        </h2>
        <ExampleText text="Choose the divider variant and spacing based on the visual weight you want. Gradient dividers are great for major breaks, while default dividers work for subtle separation." />
      </article>
    </div>
  ),
}

export const BetweenCards: Story = {
  render: () => (
    <div>
      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-default-color)',
          padding: 'var(--spacing-8)',
        }}>
        <h3
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-md)',
            marginBottom: 'var(--spacing-4)',
          }}>
          First Card
        </h3>
        <ExampleText text="Content in the first card" />
      </div>

      <Divider spacing="medium" variant="default" />

      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-default-color)',
          padding: 'var(--spacing-8)',
        }}>
        <h3
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-md)',
            marginBottom: 'var(--spacing-4)',
          }}>
          Second Card
        </h3>
        <ExampleText text="Content in the second card" />
      </div>

      <Divider spacing="medium" variant="default" />

      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-default-color)',
          padding: 'var(--spacing-8)',
        }}>
        <h3
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-md)',
            marginBottom: 'var(--spacing-4)',
          }}>
          Third Card
        </h3>
        <ExampleText text="Content in the third card" />
      </div>
    </div>
  ),
}
