import type { Meta, StoryObj } from '@storybook/react-vite'

import { ResponsiveText } from './responsive-text'

const meta: Meta<typeof ResponsiveText> = {
  component: ResponsiveText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Common/ResponsiveText',
}

export default meta
type Story = StoryObj<typeof meta>

export const TwoBreakpoints: Story = {
  args: {
    text: {
      base: 'Mobile view (base)',
      md: 'Desktop view (md and above)',
    },
  },
}

export const ThreeBreakpoints: Story = {
  args: {
    text: {
      base: 'Mobile',
      lg: 'Desktop',
      md: 'Tablet',
    },
  },
}

export const AllBreakpoints: Story = {
  args: {
    text: {
      '2xl': '2x Extra Large (2xl)',
      '3xl': '3x Extra Large (3xl)',
      base: 'Extra Small (base)',
      lg: 'Large (lg)',
      md: 'Medium (md)',
      sm: 'Small (sm)',
      xl: 'Extra Large (xl)',
      xs: 'Extra Small (xs)',
    },
  },
}

export const TerminalCommand: Story = {
  args: {
    text: {
      base: '$ ./deploy --quality=enterprise',
      md: 'crafity@enterprise:~$ ./deploy --quality=enterprise --speed=startup',
    },
  },
  render: args => (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fafafa',
        fontFamily: 'monospace',
        padding: '1rem',
      }}>
      <ResponsiveText {...args} />
    </div>
  ),
}

export const WithJSXContent: Story = {
  args: {
    text: {
      base: (
        <>
          $ ./deploy{' '}
          <span style={{ color: '#ff6b6b' }}>--quality=enterprise</span>
        </>
      ),
      md: (
        <>
          crafity@enterprise:~$ ./deploy{' '}
          <span style={{ color: '#ff6b6b' }}>--quality=enterprise</span>{' '}
          <span style={{ color: '#4ecdc4' }}>--speed=startup</span>
        </>
      ),
    },
  },
  render: args => (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fafafa',
        fontFamily: 'monospace',
        padding: '1rem',
      }}>
      <ResponsiveText {...args} />
    </div>
  ),
}

export const ProgressiveEnhancement: Story = {
  args: {
    text: {
      base: 'Loading...',
      lg: 'Loading engineering capabilities...',
      md: 'Loading project data...',
      sm: 'Loading data...',
    },
  },
}

export const AllVariantsDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>
          Two Breakpoints (Most Common)
        </h3>
        <p
          style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1rem' }}>
          Resize your browser to see the text change
        </p>
        <div
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            padding: '1rem',
          }}>
          <ResponsiveText
            text={{
              base: '📱 Mobile View',
              md: '💻 Desktop View',
            }}
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Three Breakpoints</h3>
        <div
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            padding: '1rem',
          }}>
          <ResponsiveText
            text={{
              base: '📱 Mobile',
              lg: '💻 Desktop',
              md: '📱 Tablet',
            }}
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Real-World Example</h3>
        <div
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '4px',
            color: '#fafafa',
            fontFamily: 'monospace',
            padding: '1rem',
          }}>
          <ResponsiveText
            text={{
              base: '✓ 25+ years loaded',
              md: '✓ System ready. 25+ years of experience loaded.',
            }}
          />
        </div>
      </div>
    </div>
  ),
}
