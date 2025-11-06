import type { Meta, StoryObj } from '@storybook/react-vite'

import { TerminalWindow } from './terminal-window'

const meta: Meta<typeof TerminalWindow> = {
  argTypes: {
    children: {
      control: 'text',
      description: 'Content displayed inside the terminal window',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for custom styling',
    },
    title: {
      control: 'text',
      description: 'Optional title shown in the terminal header',
    },
  },
  component: TerminalWindow,
  parameters: {
    docs: {
      description: {
        component:
          'A terminal-styled container component with macOS-style window controls (red, yellow, blue dots) and optional title.',
      },
    },
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/TerminalWindow',
}

export default meta
type Story = StoryObj<typeof TerminalWindow>

export const Default: Story = {
  args: {
    children: (
      <div style={{ fontFamily: 'monospace', padding: '8px' }}>
        $ npm install crafity
        <br />
        Installing dependencies...
        <br />✓ Done!
      </div>
    ),
  },
}

export const WithTitle: Story = {
  args: {
    children: (
      <div style={{ fontFamily: 'monospace', padding: '8px' }}>
        $ git commit -m "Initial commit"
        <br />
        [main abc1234] Initial commit
        <br />1 file changed, 100 insertions(+)
      </div>
    ),
    title: 'bash',
  },
  parameters: {
    docs: {
      description: {
        story: 'Terminal window with a title displayed in the header.',
      },
    },
  },
}

export const MultilineContent: Story = {
  args: {
    children: (
      <div style={{ fontFamily: 'monospace', padding: '8px' }}>
        $ cd crafity-start
        <br />$ npm run dev
        <br />
        <br />
        &gt; crafity-start@1.0.0 dev
        <br />
        &gt; vite
        <br />
        <br />
        VITE v5.0.0 ready in 234 ms
        <br />
        <br />➜ Local: http://localhost:3000/
        <br />➜ Network: use --host to expose
      </div>
    ),
    title: 'terminal',
  },
  parameters: {
    docs: {
      description: {
        story: 'Terminal window with multiple lines of output.',
      },
    },
  },
}

export const EmptyTerminal: Story = {
  args: {
    children: (
      <div style={{ fontFamily: 'monospace', padding: '8px' }}>
        $ <span className="cursor">_</span>
      </div>
    ),
    title: 'zsh',
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty terminal with just a cursor, ready for input.',
      },
    },
  },
}

export const WithColoredOutput: Story = {
  args: {
    children: (
      <div style={{ fontFamily: 'monospace', padding: '8px' }}>
        <span style={{ color: 'var(--terminal-blue)' }}>$</span> npm test
        <br />
        <br />
        <span style={{ color: 'var(--terminal-yellow)' }}>RUNS</span>{' '}
        src/tests/app.test.ts
        <br />
        <span style={{ color: 'var(--accent-primary)' }}>PASS</span>{' '}
        src/tests/app.test.ts
        <br />
        <br />
        Test Suites:{' '}
        <span style={{ color: 'var(--accent-primary)' }}>1 passed</span>, 1
        total
        <br />
        Tests: <span style={{ color: 'var(--accent-primary)' }}>5 passed</span>,
        5 total
      </div>
    ),
    title: 'npm',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Terminal window with colored output using terminal color tokens.',
      },
    },
  },
}
