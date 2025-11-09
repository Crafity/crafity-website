import type { Meta, StoryObj } from '@storybook/react-vite'

import { SectionDivider } from './section-divider'

const meta: Meta<typeof SectionDivider> = {
  component: SectionDivider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Layout/SectionDivider',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const BetweenSections: Story = {
  render: () => (
    <div>
      <div
        style={{ background: 'rgba(255, 69, 0, 0.05)', padding: '3rem 2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>First Section</h2>
        <p>Content before the divider.</p>
      </div>

      <SectionDivider />

      <div
        style={{
          background: 'rgba(149, 197, 239, 0.05)',
          padding: '3rem 2rem',
        }}>
        <h2 style={{ marginBottom: '1rem' }}>Second Section</h2>
        <p>Content after the divider.</p>
      </div>
    </div>
  ),
}

export const MultipleDividers: Story = {
  render: () => (
    <div>
      <div style={{ padding: '2rem' }}>
        <h2>Section 1: Services</h2>
        <p>We provide comprehensive software development services.</p>
      </div>

      <SectionDivider />

      <div style={{ padding: '2rem' }}>
        <h2>Section 2: Approach</h2>
        <p>Our structured methodology ensures successful delivery.</p>
      </div>

      <SectionDivider />

      <div style={{ padding: '2rem' }}>
        <h2>Section 3: Work</h2>
        <p>Browse our portfolio of successful client projects.</p>
      </div>

      <SectionDivider />

      <div style={{ padding: '2rem' }}>
        <h2>Section 4: Contact</h2>
        <p>Get in touch to discuss your project needs.</p>
      </div>
    </div>
  ),
}

export const GradientDetail: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <p style={{ marginBottom: '2rem' }}>
        The SectionDivider uses a gradient that transitions from blue (left)
        through orange-red (center) to blue (right), with transparent edges.
        This creates a subtle visual break between sections.
      </p>

      <SectionDivider />

      <p style={{ marginTop: '2rem' }}>
        The divider has a max-width of 800px and is center-aligned, maintaining
        visual balance on wider screens.
      </p>
    </div>
  ),
}
