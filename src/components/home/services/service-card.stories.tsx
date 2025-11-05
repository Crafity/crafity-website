import type { Meta, StoryObj } from '@storybook/react-vite'

import { ServiceCard } from './service-card'

const meta: Meta<typeof ServiceCard> = {
  argTypes: {
    description: {
      control: 'text',
      description: 'Detailed description of the service',
    },
    examples: {
      control: 'text',
      description: 'Recent client examples or project names',
    },
    number: {
      control: 'text',
      description: 'Service number (e.g., "01", "02")',
    },
    title: {
      control: 'text',
      description: 'Service title',
    },
  },
  component: ServiceCard,
  parameters: {
    docs: {
      description: {
        component:
          'A service card component with diagonal corner accent, service number, title, description, and recent examples. Features alternating layout using CSS nth-child.',
      },
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Home/ServiceCard',
}

export default meta
type Story = StoryObj<typeof ServiceCard>

export const Default: Story = {
  args: {
    description:
      'Migrating from monoliths to headless commerce, implementing modern tech stacks without disrupting operations.',
    examples: 'Sonic Equipment, Major EU Retailer',
    number: '01',
    title: 'E-COMMERCE MODERNIZATION',
  },
}

export const SecondCard: Story = {
  args: {
    description:
      'Rescuing troubled projects, untangling technical debt, and bringing legacy systems back to life.',
    examples: 'ING Bank, Healthcare SaaS Provider',
    number: '02',
    title: 'LEGACY RESCUE',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Second service card - uses nth-child(even) styling with increased left margin.',
      },
    },
  },
}

export const ThirdCard: Story = {
  args: {
    description:
      'Senior engineering capacity when you need it—architecture, implementation, and team leadership.',
    examples: 'Picnic, Electronic Arts, Schiphol',
    number: '03',
    title: 'ENGINEERING CAPACITY',
  },
}

export const LongContent: Story = {
  args: {
    description:
      'This is a service card with significantly longer description text to test how the component handles multiple lines of content and maintains visual balance across different text lengths. The layout should remain consistent even with extended content.',
    examples:
      'Client One, Client Two, Client Three, Client Four, Client Five, Client Six',
    number: '04',
    title: 'COMPREHENSIVE DIGITAL TRANSFORMATION SERVICES',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Service card with extended content to test text wrapping and layout.',
      },
    },
  },
}

export const MinimalContent: Story = {
  args: {
    description: 'Short description.',
    examples: 'Client',
    number: '05',
    title: 'SERVICE',
  },
  parameters: {
    docs: {
      description: {
        story: 'Service card with minimal content.',
      },
    },
  },
}
