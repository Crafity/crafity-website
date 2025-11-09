import type { Meta, StoryObj } from '@storybook/react-vite'

import { Typography } from './typography'

const meta: Meta<typeof Typography> = {
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/Typography',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <h2>Section Heading</h2>
        <p>
          This is a paragraph with <strong>bold text</strong> and{' '}
          <em>italic text</em>. The Typography component provides consistent
          styling for all text elements within rich content areas.
        </p>
        <h3>Subsection Heading</h3>
        <p>
          Another paragraph demonstrating the spacing and typography tokens
          applied automatically to all child elements.
        </p>
      </>
    ),
  },
}

export const WithLists: Story = {
  args: {
    children: (
      <>
        <h2>Features</h2>
        <p>Here are some key features:</p>
        <ul>
          <li>Consistent typography across all text elements</li>
          <li>Proper spacing between paragraphs and headings</li>
          <li>Link styling with hover effects</li>
        </ul>
      </>
    ),
  },
}

export const WithLinks: Story = {
  args: {
    children: (
      <>
        <h2>External Resources</h2>
        <p>
          For more information, visit our{' '}
          <a
            href="https://example.com"
            rel="noopener noreferrer"
            target="_blank">
            documentation
          </a>{' '}
          or contact us at{' '}
          <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </>
    ),
  },
}

export const FullExample: Story = {
  args: {
    children: (
      <>
        <h2>Privacy Policy</h2>
        <p>Last updated: January 2025</p>

        <h3>1. Information We Collect</h3>
        <p>
          We collect information that you provide directly to us, including when
          you create an account, make a purchase, or contact us for support.
        </p>

        <ul>
          <li>Personal identification information</li>
          <li>Contact information</li>
          <li>Payment information</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>
          We use the information we collect to provide, maintain, and improve
          our services. For more details, please see our{' '}
          <a href="#terms">Terms of Service</a>.
        </p>
      </>
    ),
  },
}
