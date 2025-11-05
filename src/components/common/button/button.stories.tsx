import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'

import { Button, ButtonHrefProps, ButtonOnClickProps } from './button'

const meta: Meta<typeof Button> = {
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label text',
    },
    type: {
      control: 'select',
      description: 'Button type attribute',
      options: ['button', 'submit', 'reset'],
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'A versatile button component that can render as either a button element or an anchor link.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Common/Button',
}

export default meta
type Story = StoryObj<typeof Button>

export const AsButton: StoryObj<ButtonOnClickProps> = {
  args: {
    children: 'Click me',
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button rendered as a <button> element with onClick handler.',
      },
    },
  },
}

export const AsLink: StoryObj<ButtonHrefProps> = {
  args: {
    children: 'Navigate',
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button rendered as an <a> element with href attribute.',
      },
    },
  },
}

export const LongText: Story = {
  args: {
    children: 'This is a button with much longer text content',
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with longer text content to test wrapping behavior.',
      },
    },
  },
}

export const SubmitButton: StoryObj<ButtonOnClickProps> = {
  args: {
    children: 'Submit Form',
    onClick: fn(),
    type: 'submit',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with type="submit" for form submissions.',
      },
    },
  },
}

export const ResetButton: StoryObj<ButtonOnClickProps> = {
  args: {
    children: 'Reset',
    onClick: fn(),
    type: 'reset',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with type="reset" for form resets.',
      },
    },
  },
}
