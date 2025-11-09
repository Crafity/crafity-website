import type { Meta, StoryObj } from '@storybook/react-vite'

import { Callout } from './callout'

const meta: Meta<typeof Callout> = {
  argTypes: {
    title: {
      control: 'text',
      description: 'Optional title displayed at the top of the callout',
    },
  },
  component: Callout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/Callout',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <p>
        This is a callout box used to highlight important information or contact
        details. It stands out from regular content with a distinct background
        and border.
      </p>
    ),
  },
}

export const WithTitle: Story = {
  args: {
    children: (
      <>
        <p>For inquiries about this project, please contact:</p>
        <ul>
          <li>
            Email: <a href="mailto:info@crafity.com">info@crafity.com</a>
          </li>
          <li>
            Website: <a href="https://crafity.com">crafity.com</a>
          </li>
        </ul>
      </>
    ),
    title: 'Contact Information',
  },
}

export const WithList: Story = {
  args: {
    children: (
      <ul>
        <li>Custom CRM system with real-time inventory tracking</li>
        <li>Automated pricing engine based on market data</li>
        <li>Mobile-responsive dashboard for field operations</li>
        <li>Integration with existing accounting software</li>
      </ul>
    ),
    title: 'Key Deliverables',
  },
}

export const MultipleCallouts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Callout title="Important Notice">
        <p>This is an important announcement that users should be aware of.</p>
      </Callout>

      <Callout>
        <p>
          A callout without a title can be used for less prominent highlights.
        </p>
      </Callout>

      <Callout title="Contact Details">
        <p>Reach us at:</p>
        <ul>
          <li>Phone: +31 (0)20 123 4567</li>
          <li>Email: hello@example.com</li>
        </ul>
      </Callout>
    </div>
  ),
}
