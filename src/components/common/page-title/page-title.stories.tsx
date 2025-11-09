import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageTitle } from './page-title'

const meta: Meta<typeof PageTitle> = {
  argTypes: {
    variant: {
      control: 'select',
      description: 'Size variant of the page title',
      options: ['default', 'large'],
    },
  },
  component: PageTitle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/PageTitle',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Privacy Policy',
    variant: 'default',
  },
}

export const Large: Story = {
  args: {
    children: 'Case Study: Sonic Equipment',
    variant: 'large',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <p style={{ fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.7 }}>
          Default variant (normal pages):
        </p>
        <PageTitle variant="default">Privacy Policy</PageTitle>
      </div>
      <div>
        <p style={{ fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.7 }}>
          Large variant (case studies, uppercase):
        </p>
        <PageTitle variant="large">Case Study: Sonic Equipment</PageTitle>
      </div>
    </div>
  ),
}
