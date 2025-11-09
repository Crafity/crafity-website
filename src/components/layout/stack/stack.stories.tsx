import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stack } from './stack'

const meta: Meta<typeof Stack> = {
  argTypes: {
    dividers: {
      control: 'boolean',
      description: 'Add horizontal dividers between children',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    space: {
      control: 'select',
      description: 'Amount of vertical spacing between children',
      options: ['small', 'medium', 'large', 'xlarge'],
      table: {
        defaultValue: { summary: 'medium' },
        type: {
          summary: "'small' | 'medium' | 'large' | 'xlarge'",
        },
      },
    },
  },
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Layout/Stack',
}

export default meta
type Story = StoryObj<typeof meta>

const ExampleBox = ({ label }: { label: string }) => (
  <div
    style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-default-color)',
      color: 'var(--text-primary)',
      padding: 'var(--spacing-4)',
    }}>
    {label}
  </div>
)

export const AllSpacing: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--spacing-16)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      }}>
      {(['small', 'medium', 'large', 'xlarge'] as const).map(space => (
        <div key={space}>
          <h3
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-base)',
              marginBottom: 'var(--spacing-4)',
              textTransform: 'uppercase',
            }}>
            {space} ({getSpaceValue(space)})
          </h3>
          <Stack space={space}>
            <ExampleBox label="Item 1" />
            <ExampleBox label="Item 2" />
            <ExampleBox label="Item 3" />
          </Stack>
        </div>
      ))}
    </div>
  ),
}

export const Small: Story = {
  args: {
    children: (
      <>
        <ExampleBox label="Small spacing (32px)" />
        <ExampleBox label="Good for tightly related items" />
        <ExampleBox label="Like form fields or list items" />
      </>
    ),
    space: 'small',
  },
}

export const Medium: Story = {
  args: {
    children: (
      <>
        <ExampleBox label="Medium spacing (48px)" />
        <ExampleBox label="Default spacing for most content" />
        <ExampleBox label="Good balance between connection and separation" />
      </>
    ),
    space: 'medium',
  },
}

export const Large: Story = {
  args: {
    children: (
      <>
        <ExampleBox label="Large spacing (64px)" />
        <ExampleBox label="For distinct content blocks" />
        <ExampleBox label="Creates clear visual separation" />
      </>
    ),
    space: 'large',
  },
}

export const XLarge: Story = {
  args: {
    children: (
      <>
        <ExampleBox label="XLarge spacing (96px)" />
        <ExampleBox label="For major content sections" />
        <ExampleBox label="Maximum vertical breathing room" />
      </>
    ),
    space: 'xlarge',
  },
}

export const WithDividers: Story = {
  args: {
    children: (
      <>
        <ExampleBox label="Section 1" />
        <ExampleBox label="Section 2" />
        <ExampleBox label="Section 3" />
        <ExampleBox label="Section 4" />
      </>
    ),
    dividers: true,
    space: 'medium',
  },
}

export const WithDividersDifferentSpacing: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--spacing-16)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      }}>
      {(['small', 'medium', 'large'] as const).map(space => (
        <div key={space}>
          <h3
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-base)',
              marginBottom: 'var(--spacing-4)',
              textTransform: 'uppercase',
            }}>
            {space} with dividers
          </h3>
          <Stack dividers space={space}>
            <ExampleBox label="Section 1" />
            <ExampleBox label="Section 2" />
            <ExampleBox label="Section 3" />
          </Stack>
        </div>
      ))}
    </div>
  ),
}

export const RealWorldExample: Story = {
  args: {
    children: (
      <>
        <div>
          <h2
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-4)',
            }}>
            Article Title
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            This is an example of using Stack to space content sections. The
            large spacing (64px) creates clear visual separation between
            distinct content blocks.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-md)',
              marginBottom: 'var(--spacing-4)',
            }}>
            Introduction
          </h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Stack components are perfect for creating consistent vertical rhythm
            in your layouts without having to manage margins on individual
            elements.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-md)',
              marginBottom: 'var(--spacing-4)',
            }}>
            Why Use Stack?
          </h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Instead of adding margin-bottom to every element, Stack handles
            spacing declaratively. This makes it easier to maintain consistent
            spacing and adjust it globally.
          </p>
        </div>
      </>
    ),
    space: 'large',
  },
}

// Helper function
function getSpaceValue(space: string): string {
  const values: Record<string, string> = {
    large: '64px',
    medium: '48px',
    small: '32px',
    xlarge: '96px',
  }
  return values[space] || ''
}
