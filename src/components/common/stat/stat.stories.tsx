import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stat } from './stat'

const meta: Meta<typeof Stat> = {
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text shown below the number',
    },
    number: {
      control: 'text',
      description: 'The statistic number displayed prominently',
    },
  },
  component: Stat,
  parameters: {
    docs: {
      description: {
        component:
          'A statistics display component showing a prominent number with a descriptive label. Used in the hero section to highlight key metrics.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Common/Stat',
}

export default meta
type Story = StoryObj<typeof Stat>

export const Default: Story = {
  args: {
    label: 'YEARS EXPERIENCE',
    number: '25+',
  },
}

export const LargeNumber: Story = {
  args: {
    label: 'PROJECTS DELIVERED',
    number: '1000+',
  },
  parameters: {
    docs: {
      description: {
        story: 'Stat with a larger number to test layout.',
      },
    },
  },
}

export const Percentage: Story = {
  args: {
    label: 'CLIENT SATISFACTION',
    number: '99%',
  },
  parameters: {
    docs: {
      description: {
        story: 'Stat showing a percentage value.',
      },
    },
  },
}

export const LongLabel: Story = {
  args: {
    label: 'SUCCESSFUL IMPLEMENTATIONS IN PRODUCTION',
    number: '500+',
  },
  parameters: {
    docs: {
      description: {
        story: 'Stat with a longer label to test text wrapping.',
      },
    },
  },
}

export const ShortStat: Story = {
  args: {
    label: 'TEAM',
    number: '5',
  },
  parameters: {
    docs: {
      description: {
        story: 'Stat with minimal content.',
      },
    },
  },
}
