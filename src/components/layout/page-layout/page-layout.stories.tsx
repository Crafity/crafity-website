import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageLayout } from './page-layout'

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Layout/PageLayout',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          background: 'rgba(255, 69, 0, 0.1)',
          minHeight: '400px',
          padding: '2rem',
        }}>
        <h1>Page Title</h1>
        <p>
          The PageLayout component provides consistent page-level container
          styling with max-width of 900px and responsive vertical padding.
        </p>
        <p>
          It automatically centers content and adjusts padding from 64px
          (mobile) to 96px (desktop).
        </p>
      </div>
    ),
  },
}

export const WithTypicalContent: Story = {
  args: {
    children: (
      <>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <p style={{ opacity: 0.7 }}>Last updated: January 2025</p>
        </header>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Introduction
          </h2>
          <p style={{ lineHeight: 1.6 }}>
            This Privacy Policy describes how we collect, use, and protect your
            personal information. We are committed to ensuring your privacy is
            protected.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Information We Collect
          </h2>
          <p style={{ lineHeight: 1.6 }}>
            We collect information that you provide directly to us, including
            when you create an account, make a purchase, or contact us for
            support.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Us</h2>
          <p style={{ lineHeight: 1.6 }}>
            If you have any questions about this Privacy Policy, please contact
            us at privacy@example.com.
          </p>
        </section>
      </>
    ),
  },
}

export const ShowingConstraints: Story = {
  render: () => (
    <div style={{ background: '#1a1a1a' }}>
      <PageLayout>
        <div
          style={{
            background: 'rgba(255, 69, 0, 0.2)',
            border: '2px dashed var(--accent-primary)',
            minHeight: '400px',
            padding: '2rem',
          }}>
          <h2 style={{ marginBottom: '1rem' }}>Max-width: 900px</h2>
          <p style={{ marginBottom: '1rem' }}>
            The colored area shows the content constraint. Content is limited to
            900px width and centered on the page.
          </p>
          <p>
            Vertical padding: 64px on mobile (0-768px), 96px on desktop
            (768px+). Try resizing your browser to see the responsive behavior.
          </p>
        </div>
      </PageLayout>
    </div>
  ),
}

export const EmptyState: Story = {
  args: {
    children: (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    ),
  },
}
