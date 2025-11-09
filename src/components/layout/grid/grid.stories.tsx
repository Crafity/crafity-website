import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid } from './grid'

const meta: Meta<typeof Grid> = {
  argTypes: {
    columns: {
      control: 'object',
      description:
        'Responsive column counts for mobile, tablet, and desktop breakpoints',
      table: {
        defaultValue: { summary: '{ mobile: 1, tablet: 2, desktop: 3 }' },
        type: {
          summary: '{ mobile?: number; tablet?: number; desktop?: number }',
        },
      },
    },
    gap: {
      control: 'select',
      description: 'Gap size between grid items (responsive)',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
        type: {
          summary: "'small' | 'medium' | 'large'",
        },
      },
    },
  },
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Layout/Grid',
}

export default meta
type Story = StoryObj<typeof meta>

const ExampleCard = ({ label }: { label: string }) => (
  <div
    style={{
      alignItems: 'center',
      aspectRatio: '1',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-default-color)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-primary)',
      display: 'flex',
      fontFamily: 'var(--accent-font-family)',
      justifyContent: 'center',
      padding: 'var(--spacing-4)',
    }}>
    {label}
  </div>
)

export const AllGaps: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-16)',
      }}>
      {(['small', 'medium', 'large'] as const).map(gap => (
        <div key={gap}>
          <h3
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-base)',
              marginBottom: 'var(--spacing-4)',
              textTransform: 'uppercase',
            }}>
            {gap} gap ({getGapValue(gap)})
          </h3>
          <Grid columns={{ base: 2, lg: 4, md: 3 }} gap={gap}>
            <ExampleCard label="1" />
            <ExampleCard label="2" />
            <ExampleCard label="3" />
            <ExampleCard label="4" />
          </Grid>
        </div>
      ))}
    </div>
  ),
}

export const SmallGap: Story = {
  args: {
    children: (
      <>
        <ExampleCard label="1" />
        <ExampleCard label="2" />
        <ExampleCard label="3" />
        <ExampleCard label="4" />
        <ExampleCard label="5" />
        <ExampleCard label="6" />
      </>
    ),
    columns: { base: 2, lg: 4, md: 3 },
    gap: 'small',
  },
}

export const MediumGap: Story = {
  args: {
    children: (
      <>
        <ExampleCard label="1" />
        <ExampleCard label="2" />
        <ExampleCard label="3" />
        <ExampleCard label="4" />
        <ExampleCard label="5" />
        <ExampleCard label="6" />
      </>
    ),
    columns: { base: 2, lg: 4, md: 3 },
    gap: 'medium',
  },
}

export const LargeGap: Story = {
  args: {
    children: (
      <>
        <ExampleCard label="1" />
        <ExampleCard label="2" />
        <ExampleCard label="3" />
        <ExampleCard label="4" />
        <ExampleCard label="5" />
        <ExampleCard label="6" />
      </>
    ),
    columns: { base: 2, lg: 4, md: 3 },
    gap: 'large',
  },
}

export const TwoColumns: Story = {
  args: {
    children: (
      <>
        <ExampleCard label="Item 1" />
        <ExampleCard label="Item 2" />
        <ExampleCard label="Item 3" />
        <ExampleCard label="Item 4" />
      </>
    ),
    columns: { base: 1, lg: 2, md: 2 },
  },
}

export const ThreeColumns: Story = {
  args: {
    children: (
      <>
        <ExampleCard label="Item 1" />
        <ExampleCard label="Item 2" />
        <ExampleCard label="Item 3" />
        <ExampleCard label="Item 4" />
        <ExampleCard label="Item 5" />
        <ExampleCard label="Item 6" />
      </>
    ),
    columns: { base: 1, lg: 3, md: 2 },
  },
}

export const FourColumns: Story = {
  args: {
    children: (
      <>
        <ExampleCard label="Item 1" />
        <ExampleCard label="Item 2" />
        <ExampleCard label="Item 3" />
        <ExampleCard label="Item 4" />
        <ExampleCard label="Item 5" />
        <ExampleCard label="Item 6" />
        <ExampleCard label="Item 7" />
        <ExampleCard label="Item 8" />
      </>
    ),
    columns: { base: 2, lg: 4, md: 3 },
  },
}

export const ResponsiveColumns: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-16)',
      }}>
      <div>
        <h3
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-base)',
            marginBottom: 'var(--spacing-4)',
            textTransform: 'uppercase',
          }}>
          1 / 2 / 3 (Mobile / Tablet / Desktop)
        </h3>
        <Grid columns={{ base: 1, lg: 3, md: 2 }}>
          <ExampleCard label="1" />
          <ExampleCard label="2" />
          <ExampleCard label="3" />
          <ExampleCard label="4" />
          <ExampleCard label="5" />
          <ExampleCard label="6" />
        </Grid>
      </div>

      <div>
        <h3
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-base)',
            marginBottom: 'var(--spacing-4)',
            textTransform: 'uppercase',
          }}>
          2 / 3 / 4 (Mobile / Tablet / Desktop)
        </h3>
        <Grid columns={{ base: 2, lg: 4, md: 3 }}>
          <ExampleCard label="1" />
          <ExampleCard label="2" />
          <ExampleCard label="3" />
          <ExampleCard label="4" />
          <ExampleCard label="5" />
          <ExampleCard label="6" />
          <ExampleCard label="7" />
          <ExampleCard label="8" />
        </Grid>
      </div>

      <div>
        <h3
          style={{
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--font-size-base)',
            marginBottom: 'var(--spacing-4)',
            textTransform: 'uppercase',
          }}>
          1 / 1 / 2 (Mobile / Tablet / Desktop)
        </h3>
        <Grid columns={{ base: 1, lg: 2, md: 1 }}>
          <ExampleCard label="1" />
          <ExampleCard label="2" />
          <ExampleCard label="3" />
          <ExampleCard label="4" />
        </Grid>
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  args: {
    children: (
      <>
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-6)',
          }}>
          <h3
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-md)',
              marginBottom: 'var(--spacing-3)',
            }}>
            Feature Card 1
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.6',
            }}>
            Grid automatically adapts to different screen sizes. On mobile,
            items stack vertically. On tablet, they arrange in 2 columns. On
            desktop, 3 columns.
          </p>
        </div>

        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-6)',
          }}>
          <h3
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-md)',
              marginBottom: 'var(--spacing-3)',
            }}>
            Feature Card 2
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.6',
            }}>
            Gap sizes are also responsive. The large gap uses 32px on mobile and
            48px on tablet and desktop, ensuring appropriate spacing at all
            sizes.
          </p>
        </div>

        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-6)',
          }}>
          <h3
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-md)',
              marginBottom: 'var(--spacing-3)',
            }}>
            Feature Card 3
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.6',
            }}>
            Use Grid for feature showcases, product listings, team member cards,
            blog post previews, or any content that benefits from a structured,
            multi-column layout.
          </p>
        </div>

        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-6)',
          }}>
          <h3
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-md)',
              marginBottom: 'var(--spacing-3)',
            }}>
            Feature Card 4
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.6',
            }}>
            All spacing uses design tokens from the design system, ensuring
            consistency across your application and easy theme customization.
          </p>
        </div>

        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-6)',
          }}>
          <h3
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-md)',
              marginBottom: 'var(--spacing-3)',
            }}>
            Feature Card 5
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.6',
            }}>
            The Grid component handles all the complexity of responsive layouts,
            so you can focus on your content rather than breakpoint logic.
          </p>
        </div>

        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-6)',
          }}>
          <h3
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-md)',
              marginBottom: 'var(--spacing-3)',
            }}>
            Feature Card 6
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.6',
            }}>
            Customize the column counts for each breakpoint to perfectly match
            your design needs. The default (1/2/3) works great for most use
            cases.
          </p>
        </div>
      </>
    ),
    columns: { base: 1, lg: 3, md: 2 },
    gap: 'large',
  },
}

// Helper function
function getGapValue(gap: string): string {
  const values: Record<string, string> = {
    large: '32px / 48px',
    medium: '24px / 32px',
    small: '16px / 24px',
  }
  return values[gap] || ''
}
