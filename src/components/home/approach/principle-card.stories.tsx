import type { Meta, StoryObj } from '@storybook/react-vite'

import { PrincipleCard } from './principle-card'

const meta: Meta<typeof PrincipleCard> = {
  argTypes: {
    description: {
      control: 'text',
      description: 'Detailed description of the principle',
    },
    index: {
      control: 'number',
      description: 'Index for alternating layout (even numbers use offset)',
    },
    title: {
      control: 'text',
      description: 'Principle title',
    },
  },
  component: PrincipleCard,
  parameters: {
    docs: {
      description: {
        component:
          'A principle card component with vertical accent bar and alternating layout based on index. Used in the Approach section.',
      },
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Home/PrincipleCard',
}

export default meta
type Story = StoryObj<typeof PrincipleCard>

export const OddIndex: Story = {
  args: {
    description:
      "Don't just deliver features—understand the business problem first. Tech decisions should solve real problems, not create new ones.",
    index: 0,
    title: 'BUSINESS-FIRST ENGINEERING',
  },
  parameters: {
    docs: {
      description: {
        story: 'Principle card with odd index (0) - default alignment.',
      },
    },
  },
}

export const EvenIndex: Story = {
  args: {
    description:
      "We don't just write code—we build systems you can maintain. Clear architecture, readable code, proper documentation.",
    index: 1,
    title: 'MAINTAINABILITY OVER CLEVERNESS',
  },
  parameters: {
    docs: {
      description: {
        story: 'Principle card with even index (1) - offset alignment.',
      },
    },
  },
}

export const ThirdCard: Story = {
  args: {
    description:
      "When others say 'impossible,' we start debugging. Legacy systems, technical debt, abandoned projects—we've seen it all.",
    index: 2,
    title: 'NO PROJECT TOO BROKEN',
  },
}

export const LongDescription: Story = {
  args: {
    description:
      'This is a principle card with a significantly longer description to test how the component handles extended content. The layout should maintain visual consistency even when the description spans multiple lines. We want to ensure that the vertical bar, title, and description all align properly regardless of content length.',
    index: 0,
    title: 'COMPREHENSIVE APPROACH TO DIGITAL EXCELLENCE',
  },
  parameters: {
    docs: {
      description: {
        story: 'Principle card with extended description for testing layout.',
      },
    },
  },
}

export const MinimalContent: Story = {
  args: {
    description: 'Short principle description.',
    index: 1,
    title: 'PRINCIPLE',
  },
  parameters: {
    docs: {
      description: {
        story: 'Principle card with minimal content.',
      },
    },
  },
}
