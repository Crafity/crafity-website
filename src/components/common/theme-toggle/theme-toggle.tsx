import { useEffect, useState } from 'react'

import styles from './theme-toggle.module.css'

type Theme = 'dark' | 'light' | 'system'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system'
    const saved = localStorage.getItem('theme')
    return (saved as Theme) || 'system'
  })

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    const effectiveTheme =
      theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme

    document.documentElement.setAttribute('data-theme', effectiveTheme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const cycleTheme = () => {
    setTheme(current => {
      if (current === 'system') return 'dark'
      if (current === 'dark') return 'light'
      return 'system'
    })
  }

  return (
    <button className={styles.toggle} onClick={cycleTheme} type="button">
      {theme === 'system' && '⚙️'}
      {theme === 'dark' && '🌙'}
      {theme === 'light' && '☀️'}
    </button>
  )
}
