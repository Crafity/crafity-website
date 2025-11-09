import { useEffect } from 'react'
import type { Decorator } from '@storybook/react-vite'

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'dark'

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      root.dataset.theme = prefersDark ? 'dark' : 'light'
    } else {
      root.dataset.theme = theme
    }
  }, [theme])

  return <Story />
}
