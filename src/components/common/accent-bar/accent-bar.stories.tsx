import type { Meta, StoryObj } from '@storybook/react-vite'

import { AccentBar } from './accent-bar'

const meta: Meta<typeof AccentBar> = {
  argTypes: {
    size: {
      control: 'select',
      description:
        'Size variant: normal for subsections, large for phases/major sections',
      options: ['normal', 'large'],
    },
    title: {
      control: 'text',
      description: 'Optional title displayed above content',
    },
    variant: {
      control: 'select',
      description:
        'Color variant: auto alternates colors, or force primary/secondary',
      options: ['auto', 'primary', 'secondary'],
    },
  },
  component: AccentBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/AccentBar',
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: (
      <p>This is a normal-sized accent bar with a title and content.</p>
    ),
    size: 'normal',
    title: 'Key Feature',
    variant: 'auto',
  },
}

export const Large: Story = {
  args: {
    children: (
      <p>
        Large accent bars are used for major sections like project phases. The
        title is automatically uppercase and uses the accent font family.
      </p>
    ),
    size: 'large',
    title: 'Phase 1: Discovery',
    variant: 'auto',
  },
}

export const WithoutTitle: Story = {
  args: {
    children: (
      <p>
        An accent bar can be used without a title for simpler content blocks.
      </p>
    ),
    size: 'normal',
    variant: 'auto',
  },
}

export const PrimaryVariant: Story = {
  args: {
    children: <p>Forces the primary accent color (orange-red).</p>,
    size: 'normal',
    title: 'Primary Color',
    variant: 'primary',
  },
}

export const SecondaryVariant: Story = {
  args: {
    children: <p>Forces the secondary accent color (blue).</p>,
    size: 'normal',
    title: 'Secondary Color',
    variant: 'secondary',
  },
}

export const ProjectPhases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <AccentBar size="large" title="Phase 1: Discovery" variant="auto">
        <p>
          Initial meetings with stakeholders to understand business processes,
          pain points, and requirements. Conducted system audit and data
          analysis.
        </p>
      </AccentBar>

      <AccentBar size="large" title="Phase 2: Design" variant="auto">
        <p>
          Created wireframes and prototypes for the new CRM system. Designed
          database schema and API architecture.
        </p>
      </AccentBar>

      <AccentBar size="large" title="Phase 3: Development" variant="auto">
        <p>
          Built custom CRM with real-time inventory tracking, automated pricing
          engine, and mobile-responsive interface.
        </p>
      </AccentBar>

      <AccentBar size="large" title="Phase 4: Deployment" variant="auto">
        <p>
          Rolled out system in phases, provided training, and ensured smooth
          transition from legacy system.
        </p>
      </AccentBar>
    </div>
  ),
}

export const Subsections: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <AccentBar size="normal" title="Challenge" variant="auto">
        <p>Manual processes led to errors and delays in order fulfillment.</p>
      </AccentBar>

      <AccentBar size="normal" title="Solution" variant="auto">
        <p>
          Automated workflow with real-time inventory sync and order validation.
        </p>
      </AccentBar>

      <AccentBar size="normal" title="Result" variant="auto">
        <p>
          90% reduction in processing errors and 50% faster order fulfillment.
        </p>
      </AccentBar>
    </div>
  ),
}

export const MixedContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <AccentBar size="large" title="Technical Stack">
        <ul>
          <li>Frontend: React 19 with TypeScript</li>
          <li>Backend: Node.js with Express</li>
          <li>Database: PostgreSQL with Redis cache</li>
          <li>Infrastructure: Docker + AWS</li>
        </ul>
      </AccentBar>

      <AccentBar size="normal" title="Key Integrations">
        <ul>
          <li>Exact Online API for accounting sync</li>
          <li>Stripe for payment processing</li>
          <li>SendGrid for email notifications</li>
        </ul>
      </AccentBar>
    </div>
  ),
}
