import type { Meta, StoryObj } from '@storybook/react-vite'

import { Container } from '../container/container'

import { Section } from './section'

const meta: Meta<typeof Section> = {
  argTypes: {
    id: {
      control: 'text',
      description: 'HTML id for anchor links',
    },
    spacing: {
      control: 'select',
      description: 'Amount of vertical padding for the section',
      options: ['normal', 'large', 'none'],
      table: {
        defaultValue: { summary: 'normal' },
        type: {
          summary: "'normal' | 'large' | 'none'",
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

export const AllSpacingVariants: Story = {
  render: () => (
    <div style={{ background: 'var(--bg-primary)' }}>
      <Section spacing="normal">
        <Container size="wide">
          <ExampleContent title="Normal Spacing (64px / 96px)" />
        </Container>
      </Section>

      <div style={{ background: 'var(--accent-primary)', height: '2px' }} />

      <Section spacing="large">
        <Container size="wide">
          <ExampleContent title="Large Spacing (96px / 128px)" />
        </Container>
      </Section>

      <div style={{ background: 'var(--accent-primary)', height: '2px' }} />

      <Section spacing="none">
        <Container size="wide">
          <ExampleContent title="No Spacing (0px)" />
        </Container>
      </Section>
    </div>
  ),
}

export const Normal: Story = {
  args: {
    children: (
      <Container size="wide">
        <ExampleContent title="Normal Section" />
      </Container>
    ),
    spacing: 'normal',
  },
}

export const Large: Story = {
  args: {
    children: (
      <Container size="wide">
        <ExampleContent title="Large Section" />
      </Container>
    ),
    spacing: 'large',
  },
}

export const None: Story = {
  args: {
    children: (
      <Container size="wide">
        <ExampleContent title="Section with No Padding" />
      </Container>
    ),
    spacing: 'none',
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
    spacing: 'normal',
  },
}

export const RealWorldExample: Story = {
  render: () => (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* Hero section - typically full width */}
      <Section spacing="large">
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
              Full-width container with large spacing
            </p>
          </div>
        </Container>
      </Section>

      {/* Content section - narrower */}
      <Section id="content" spacing="normal">
        <Container size="base">
          <ExampleContent title="Content Section" />
        </Container>
      </Section>

      {/* Services section - wider for grid */}
      <Section id="services" spacing="normal">
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
