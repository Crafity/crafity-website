import type { Meta, StoryObj } from '@storybook/react-vite'

import { SectionHeader } from './section-header'

const meta: Meta<typeof SectionHeader> = {
  component: SectionHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Layout/SectionHeader',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Services',
  },
}

export const LongTitle: Story = {
  args: {
    children: 'What We Did',
  },
}

export const MultipleSectionHeaders: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <SectionHeader>Services</SectionHeader>
        <p style={{ marginTop: '1rem' }}>
          Section content follows after the header. The gradient accent bar
          appears above the title, and the title is automatically transformed to
          uppercase.
        </p>
      </div>

      <div>
        <SectionHeader>Our Approach</SectionHeader>
        <p style={{ marginTop: '1rem' }}>
          Each section header maintains consistent styling and spacing, creating
          a clear visual hierarchy throughout the page.
        </p>
      </div>

      <div>
        <SectionHeader>Featured Work</SectionHeader>
        <p style={{ marginTop: '1rem' }}>
          The gradient bar uses blue-to-orange colors, matching the overall
          design system's accent palette.
        </p>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div>
      <SectionHeader>Technical Stack</SectionHeader>
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Frontend</h3>
        <ul>
          <li>React 19 with TypeScript</li>
          <li>TanStack Start framework</li>
          <li>CSS Modules with design tokens</li>
        </ul>

        <h3
          style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            marginTop: '2rem',
          }}>
          Backend
        </h3>
        <ul>
          <li>Node.js with Express</li>
          <li>PostgreSQL database</li>
          <li>Redis for caching</li>
        </ul>
      </div>
    </div>
  ),
}
