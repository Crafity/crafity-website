import type { Meta, StoryObj } from '@storybook/react-vite'

import { Text } from './text'

const meta: Meta<typeof Text> = {
  argTypes: {
    align: {
      control: 'select',
      description: 'Text alignment',
      options: ['left', 'center', 'right'],
    },
    color: {
      control: 'select',
      description: 'Text color',
      options: ['primary', 'secondary', 'tertiary', 'accent'],
      table: {
        defaultValue: { summary: 'secondary' },
      },
    },
    size: {
      control: 'select',
      description: 'Text size',
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'base' },
      },
    },
    variant: {
      control: 'select',
      description: 'Text variant',
      options: ['body', 'caption', 'label', 'code'],
      table: {
        defaultValue: { summary: 'body' },
      },
    },
    weight: {
      control: 'select',
      description: 'Font weight',
      options: ['normal', 'medium', 'bold'],
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
  },
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/Text',
}

export default meta
type Story = StoryObj<typeof meta>

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-4)',
      }}>
      <Text size="xs">Extra small text (12px)</Text>
      <Text size="sm">Small text (14px)</Text>
      <Text size="base">Base text (18px) - Default</Text>
      <Text size="lg">Large text (20px)</Text>
      <Text size="xl">Extra large text (32px)</Text>
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-4)',
      }}>
      <Text color="primary">Primary text color (brightest)</Text>
      <Text color="secondary">Secondary text color (default)</Text>
      <Text color="tertiary">Tertiary text color (subtle)</Text>
      <Text color="accent">Accent text color (brand color)</Text>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-8)',
      }}>
      <div>
        <Text color="primary" size="sm" variant="label" weight="bold">
          Body Variant
        </Text>
        <Text variant="body">
          This is the default body variant. It uses standard font family,
          relaxed line height, and is perfect for paragraphs and general
          content.
        </Text>
      </div>

      <div>
        <Text color="primary" size="sm" variant="label" weight="bold">
          Caption Variant
        </Text>
        <Text color="tertiary" variant="caption">
          Last updated: November 9, 2025 • Reading time: 5 min
        </Text>
      </div>

      <div>
        <Text color="primary" size="sm" variant="label" weight="bold">
          Label Variant
        </Text>
        <Text variant="label">Form Field Label</Text>
      </div>

      <div>
        <Text color="primary" size="sm" variant="label" weight="bold">
          Code Variant
        </Text>
        <Text variant="code">const greeting = "Hello, World!"</Text>
      </div>
    </div>
  ),
}

export const AllWeights: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-4)',
      }}>
      <Text weight="normal">Normal weight (400)</Text>
      <Text weight="medium">Medium weight (500)</Text>
      <Text weight="bold">Bold weight (700)</Text>
    </div>
  ),
}

export const WithAlignment: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-4)',
      }}>
      <Text align="left">Left aligned text (default)</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      {/* Article header */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-2)',
          }}>
          Understanding Component Architecture
        </h2>
        <Text color="tertiary" variant="caption">
          Published on November 9, 2025 • 8 min read
        </Text>
      </div>

      <div style={{ marginTop: 'var(--spacing-8)' }} />

      {/* Body content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-4)',
        }}>
        <Text>
          Component-based architecture is the foundation of modern web
          development. It allows us to build complex user interfaces by
          composing simple, reusable pieces.
        </Text>
        <Text>
          In this article, we'll explore best practices for creating
          maintainable component systems that scale with your application.
        </Text>
      </div>

      <div style={{ marginTop: 'var(--spacing-8)' }} />

      {/* Form example */}
      <div>
        <Text color="primary" variant="label" weight="medium">
          Email Address
        </Text>
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default-color)',
            marginTop: 'var(--spacing-2)',
            padding: 'var(--spacing-3)',
          }}>
          <Text color="tertiary" size="sm" variant="code">
            user@example.com
          </Text>
        </div>
      </div>

      <div style={{ marginTop: 'var(--spacing-8)' }} />

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gap: 'var(--spacing-6)',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
        {[
          { label: 'Projects', value: '150+' },
          { label: 'Clients', value: '50+' },
          { label: 'Countries', value: '20+' },
        ].map(stat => (
          <div key={stat.label}>
            <Text align="center" color="accent" size="xl" weight="bold">
              {stat.value}
            </Text>
            <Text align="center" color="tertiary" variant="caption">
              {stat.label}
            </Text>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const Default: Story = {
  args: {
    children: 'This is default body text with secondary color.',
  },
}

export const Caption: Story = {
  args: {
    children: 'Last updated: November 2025',
    color: 'tertiary',
    variant: 'caption',
  },
}

export const Label: Story = {
  args: {
    children: 'Form Field Label',
    color: 'primary',
    variant: 'label',
    weight: 'medium',
  },
}

export const Code: Story = {
  args: {
    children: 'const example = "Hello World"',
    variant: 'code',
  },
}
