import { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CookieBanner } from './cookie-banner'

const meta: Meta<typeof CookieBanner> = {
  component: CookieBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Components/Cookie Banner',
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default cookie banner - shown on first visit when no consent is given yet.
 * The banner appears in the bottom-right corner with a slide-in animation.
 */
export const Default: Story = {
  decorators: [
    Story => {
      useEffect(() => {
        // Clear any existing consent cookie for demo purposes
        document.cookie =
          'crafity-cookie-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax'
      }, [])

      return (
        <div style={{ minHeight: '100vh', padding: '2rem' }}>
          <div
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-family)',
              maxWidth: '800px',
            }}>
            <h1>Cookie Banner Demo</h1>
            <p>
              This page demonstrates the cookie consent banner. The banner
              appears in the bottom-right corner on first visit.
            </p>
            <p>
              Click "Allow all" to accept cookies, or "Decline" to reject them.
              Your choice is saved in a cookie for 1 year.
            </p>
          </div>
          <Story />
        </div>
      )
    },
  ],
}

/**
 * Mobile view of the cookie banner.
 * On mobile, the banner takes full width with left/right padding.
 */
export const Mobile: Story = {
  decorators: [
    Story => {
      useEffect(() => {
        document.cookie =
          'crafity-cookie-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax'
      }, [])

      return (
        <div style={{ minHeight: '100vh', padding: '1rem' }}>
          <Story />
        </div>
      )
    },
  ],
  globals: {
    viewport: {
      value: 'xs',
    },
  },
}

/**
 * Dark theme variant.
 * The banner adapts to the dark theme using CSS custom properties.
 */
export const DarkTheme: Story = {
  decorators: [
    Story => {
      useEffect(() => {
        document.cookie =
          'crafity-cookie-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax'
        delete document.documentElement.dataset.theme
      }, [])

      return (
        <div style={{ minHeight: '100vh', padding: '2rem' }}>
          <Story />
        </div>
      )
    },
  ],
}

/**
 * Light theme variant.
 * Shows how the banner looks in light mode.
 */
export const LightTheme: Story = {
  decorators: [
    Story => {
      useEffect(() => {
        document.cookie =
          'crafity-cookie-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax'
        document.documentElement.dataset.theme = 'light'

        return () => {
          delete document.documentElement.dataset.theme
        }
      }, [])

      return (
        <div style={{ minHeight: '100vh', padding: '2rem' }}>
          <Story />
        </div>
      )
    },
  ],
}
