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
    gap: {
      control: 'select',
      description: 'Amount of vertical spacing between children',
      options: [8, 12, 16, 24],
      table: {
        defaultValue: { summary: '12' },
        type: {
          summary: '8 | 12 | 16 | 24',
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
      {([8, 12, 16, 24] as const).map(space => (
        <div key={space}>
          <h3
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-base)',
              marginBottom: 'var(--spacing-4)',
              textTransform: 'uppercase',
            }}>
            space {space} ({getSpaceValue(space)})
          </h3>
          <Stack gap={space}>
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
    gap: 8,
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
    gap: 12,
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
    gap: 16,
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
    gap: 24,
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
    gap: 12,
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
      {([8, 12, 16] as const).map(space => (
        <div key={space}>
          <h3
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-base)',
              marginBottom: 'var(--spacing-4)',
              textTransform: 'uppercase',
            }}>
            space {space} with dividers
          </h3>
          <Stack dividers gap={space}>
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
    gap: 16,
  },
}

// Helper function
function getSpaceValue(space: number): string {
  const values: Record<number, string> = {
    12: '48px',
    16: '64px',
    24: '96px',
    8: '32px',
  }
  return values[space] || ''
}
