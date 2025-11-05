import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, ButtonHrefProps, ButtonOnClickProps } from './button'

const meta: Meta<typeof Button> = {
  args: {},
  component: Button,
  parameters: {
    layout: 'centered',
  },
  title: 'Buttons & Links/Button',
}

export default meta

export const href: StoryObj<ButtonHrefProps> = {
  args: {
    children: 'Button',
    href: '#',
  },
}

export const onClick: StoryObj<ButtonOnClickProps> = {
  args: {
    children: 'Button',
    onClick: () => alert('Button clicked!'),
  },
}
