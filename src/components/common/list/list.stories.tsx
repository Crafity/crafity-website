import type { Meta, StoryObj } from '@storybook/react-vite'

import { List } from './list'

const meta: Meta<typeof List> = {
  argTypes: {
    marker: {
      control: 'select',
      description: 'Style of list marker',
      options: ['default', 'arrow'],
    },
  },
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/List',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <li>First item with default browser styling</li>
        <li>Second item in the list</li>
        <li>Third item with standard bullets</li>
      </>
    ),
    marker: 'default',
  },
}

export const Arrow: Story = {
  args: {
    children: (
      <>
        <li>Custom arrow marker (→)</li>
        <li>Styled with accent color</li>
        <li>Perfect for feature lists or key points</li>
      </>
    ),
    marker: 'arrow',
  },
}

export const LongContent: Story = {
  args: {
    children: (
      <>
        <li>
          This is a longer list item that demonstrates how the component handles
          text wrapping and maintains proper alignment of the arrow marker
          across multiple lines of content.
        </li>
        <li>
          Another long item showing that the arrow stays properly positioned at
          the start of the text, regardless of how much content the list item
          contains.
        </li>
        <li>Short item for contrast</li>
      </>
    ),
    marker: 'arrow',
  },
}

export const FeatureList: Story = {
  args: {
    children: (
      <>
        <li>Real-time inventory tracking with automatic stock alerts</li>
        <li>Dynamic pricing based on market conditions and supplier data</li>
        <li>Mobile-first interface optimized for field operations</li>
        <li>Seamless integration with existing accounting systems</li>
        <li>Advanced reporting and analytics dashboard</li>
      </>
    ),
    marker: 'arrow',
  },
}

export const Comparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          Default marker:
        </h3>
        <List marker="default">
          <li>Standard browser bullets</li>
          <li>Simple and familiar</li>
          <li>Works for general content</li>
        </List>
      </div>
      <div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          Arrow marker:
        </h3>
        <List marker="arrow">
          <li>Custom arrow (→) in accent color</li>
          <li>More visually distinctive</li>
          <li>Great for highlighting features or benefits</li>
        </List>
      </div>
    </div>
  ),
}
