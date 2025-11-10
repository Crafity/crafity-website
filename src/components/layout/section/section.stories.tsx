import type { Meta, StoryObj } from '@storybook/react-vite'

import { Container } from '../container/container'

import { Section } from './section'

const meta: Meta<typeof Section> = {
  argTypes: {
    id: {
      control: 'text',
      description: 'HTML id for anchor links',
    },
    padding: {
      control: 'select',
      description: 'Amount of vertical padding for the section',
      options: ['base', 'large', 'none'],
      table: {
        defaultValue: { summary: 'base' },
        type: {
          summary: "'base' | 'large' | 'none'",
        },
      },
    },
  },
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Layout/Section',
}

export default meta
type Story = StoryObj<typeof meta>

const ExampleContent = ({ title }: { title: string }) => (
  <div
    style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-default-color)',
      padding: 'var(--spacing-8)',
    }}>
    <h2
      style={{
        fontFamily: 'var(--accent-font-family)',
        fontSize: 'var(--font-size-lg)',
        marginBottom: 'var(--spacing-4)',
      }}>
      {title}
    </h2>
    <p style={{ color: 'var(--text-secondary)' }}>
      This is example content inside a section. Sections provide vertical
      padding to create visual separation between page areas.
    </p>
  </div>
)

export const AllPaddingVariants: Story = {
  render: () => (
    <div style={{ background: 'var(--bg-primary)' }}>
      <Section padding="base">
        <Container size="wide">
          <ExampleContent title="Base Padding (64px / 96px)" />
        </Container>
      </Section>

      <div style={{ background: 'var(--accent-primary)', height: '2px' }} />

      <Section padding="large">
        <Container size="wide">
          <ExampleContent title="Large Padding (96px / 128px)" />
        </Container>
      </Section>

      <div style={{ background: 'var(--accent-primary)', height: '2px' }} />

      <Section padding="none">
        <Container size="wide">
          <ExampleContent title="No Padding (0px)" />
        </Container>
      </Section>
    </div>
  ),
}

export const Base: Story = {
  args: {
    children: (
      <Container size="wide">
        <ExampleContent title="Base Section" />
      </Container>
    ),
    padding: 'base',
  },
}

export const Large: Story = {
  args: {
    children: (
      <Container size="wide">
        <ExampleContent title="Large Section" />
      </Container>
    ),
    padding: 'large',
  },
}

export const None: Story = {
  args: {
    children: (
      <Container size="wide">
        <ExampleContent title="Section with No Padding" />
      </Container>
    ),
    padding: 'none',
  },
}

export const WithAnchorId: Story = {
  args: {
    children: (
      <Container size="wide">
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default-color)',
            padding: 'var(--spacing-8)',
          }}>
          <h2
            style={{
              fontFamily: 'var(--accent-font-family)',
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-4)',
            }}>
            Section with ID
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            This section has <code>id="services"</code>, so you can link to it
            with <code>&lt;a href="#services"&gt;</code>
          </p>
        </div>
      </Container>
    ),
    id: 'services',
    padding: 'base',
  },
}

export const RealWorldExample: Story = {
  render: () => (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* Hero section - typically full width */}
      <Section padding="large">
        <Container size="full">
          <div
            style={{
              background:
                'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))',
              color: 'var(--bg-primary)',
              padding: 'var(--spacing-16)',
              textAlign: 'center',
            }}>
            <h1
              style={{
                fontFamily: 'var(--accent-font-family)',
                fontSize: 'var(--font-size-2xl)',
                marginBottom: 'var(--spacing-4)',
              }}>
              HERO SECTION
            </h1>
            <p style={{ fontSize: 'var(--font-size-lg)' }}>
              Full-width container with large padding
            </p>
          </div>
        </Container>
      </Section>

      {/* Content section - narrower */}
      <Section id="content" padding="base">
        <Container size="base">
          <ExampleContent title="Content Section" />
        </Container>
      </Section>

      {/* Services section - wider for grid */}
      <Section id="services" padding="base">
        <Container size="wide">
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-default-color)',
              padding: 'var(--spacing-8)',
            }}>
            <h2
              style={{
                fontFamily: 'var(--accent-font-family)',
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-8)',
                textAlign: 'center',
              }}>
              SERVICES SECTION
            </h2>
            <div
              style={{
                display: 'grid',
                gap: 'var(--spacing-8)',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              }}>
              <div
                style={{
                  background: 'var(--bg-primary)',
                  padding: 'var(--spacing-6)',
                }}>
                Service 1
              </div>
              <div
                style={{
                  background: 'var(--bg-primary)',
                  padding: 'var(--spacing-6)',
                }}>
                Service 2
              </div>
              <div
                style={{
                  background: 'var(--bg-primary)',
                  padding: 'var(--spacing-6)',
                }}>
                Service 3
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  ),
}
