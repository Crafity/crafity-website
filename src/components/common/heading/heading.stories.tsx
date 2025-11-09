import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading } from './heading'

const meta: Meta<typeof Heading> = {
  argTypes: {
    align: {
      control: 'select',
      description: 'Text alignment',
      options: ['left', 'center', 'right'],
    },
    level: {
      control: 'select',
      description: 'Semantic HTML heading level',
      options: [1, 2, 3, 4, 5, 6],
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
      },
    },
    size: {
      control: 'select',
      description:
        'Visual size (independent of semantic level). Auto-defaults based on level if not specified.',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    variant: {
      control: 'select',
      description: 'Visual variant',
      options: ['default', 'accent', 'display'],
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/Heading',
}

export default meta
type Story = StoryObj<typeof meta>

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-8)',
      }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map(size => (
        <div key={size}>
          <Heading level={2} size={size}>
            Heading Size: {size}
          </Heading>
        </div>
      ))}
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
      <Heading level={2} variant="default">
        Default Variant
      </Heading>
      <Heading level={2} variant="accent">
        Accent Variant (Uppercase)
      </Heading>
      <Heading level={2} variant="display">
        Display Variant (Base Font)
      </Heading>
    </div>
  ),
}

export const SemanticVsVisual: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-8)',
      }}>
      <div>
        <p
          style={{
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-xs)',
            marginBottom: 'var(--spacing-2)',
          }}>
          Semantic h2, visual size 3xl:
        </p>
        <Heading level={2} size="3xl">
          Large Visual Heading
        </Heading>
      </div>
      <div>
        <p
          style={{
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-xs)',
            marginBottom: 'var(--spacing-2)',
          }}>
          Semantic h2, visual size sm:
        </p>
        <Heading level={2} size="sm">
          Small Visual Heading
        </Heading>
      </div>
      <div>
        <p
          style={{
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-xs)',
            marginBottom: 'var(--spacing-2)',
          }}>
          Semantic h4, visual size xl:
        </p>
        <Heading level={4} size="xl">
          Subtitle That Looks Larger
        </Heading>
      </div>
    </div>
  ),
}

export const AutoSizedHeadings: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-4)',
      }}>
      <Heading level={1}>H1 - Auto-sized to 3xl</Heading>
      <Heading level={2}>H2 - Auto-sized to 2xl</Heading>
      <Heading level={3}>H3 - Auto-sized to xl</Heading>
      <Heading level={4}>H4 - Auto-sized to lg</Heading>
      <Heading level={5}>H5 - Auto-sized to md</Heading>
      <Heading level={6}>H6 - Auto-sized to sm</Heading>
    </div>
  ),
}

export const WithAlignment: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-8)',
      }}>
      <Heading align="left" level={2}>
        Left Aligned
      </Heading>
      <Heading align="center" level={2}>
        Center Aligned
      </Heading>
      <Heading align="right" level={2}>
        Right Aligned
      </Heading>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      {/* Hero title */}
      <Heading align="center" level={1} size="3xl" variant="accent">
        E-COMMERCE PLATFORM TRANSFORMATION
      </Heading>

      <div style={{ marginTop: 'var(--spacing-16)' }} />

      {/* Section heading with accent bar */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            background:
              'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))',
            height: '4px',
            margin: '0 auto var(--spacing-6)',
            width: '80px',
          }}
        />
        <Heading level={2} variant="accent">
          FEATURED WORK
        </Heading>
      </div>

      <div style={{ marginTop: 'var(--spacing-16)' }} />

      {/* Article heading */}
      <Heading level={2} size="lg">
        Understanding Modern Web Architecture
      </Heading>
      <p
        style={{
          color: 'var(--text-secondary)',
          marginTop: 'var(--spacing-4)',
        }}>
        This is an example of a standard article heading using the default
        variant with large size.
      </p>

      <div style={{ marginTop: 'var(--spacing-12)' }} />

      {/* Subsection */}
      <Heading level={3} size="md">
        Key Principles
      </Heading>
      <p
        style={{
          color: 'var(--text-secondary)',
          marginTop: 'var(--spacing-4)',
        }}>
        Subsections use h3 with medium visual size for clear hierarchy.
      </p>
    </div>
  ),
}

export const Default: Story = {
  args: {
    children: 'Default Heading',
    level: 2,
    variant: 'default',
  },
}

export const AccentUppercase: Story = {
  args: {
    children: 'Featured Work',
    level: 2,
    variant: 'accent',
  },
}

export const DisplayFont: Story = {
  args: {
    children: 'Display Heading with Base Font',
    level: 1,
    variant: 'display',
  },
}
