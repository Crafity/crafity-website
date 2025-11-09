import { useEffect, useState } from 'react'

import { DarkIcon, LightIcon, SystemIcon } from './theme-icons'

import styles from './theme-toggle.module.css'

type Theme = 'dark' | 'light' | 'system'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system'
    const saved = localStorage.getItem('theme')
    if (saved !== 'dark' && saved !== 'light' && saved !== 'system')
      return 'system'
    return saved
  })

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    const effectiveTheme =
      theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme

    document.documentElement.dataset.theme = effectiveTheme
    localStorage.setItem('theme', theme)
  }, [theme])

  const cycleTheme = () => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    setTheme(current => {
      if (current === 'system') {
        // If system, go to opposite of current system preference
        return prefersDark ? 'light' : 'dark'
      }
      if (prefersDark) {
        // System prefers dark: system → light → dark → system
        if (current === 'light') return 'dark'
        return 'system'
      } else {
        // System prefers light: system → dark → light → system
        if (current === 'dark') return 'light'
        return 'system'
      }
    })
  }

  return (
    <button
      aria-label={`Current theme: ${theme}. Click to cycle.`}
      className={styles.toggle}
      onClick={cycleTheme}
      title={`Theme: ${theme}`}
      type="button">
      {theme === 'system' && <SystemIcon />}
      {theme === 'dark' && <DarkIcon />}
      {theme === 'light' && <LightIcon />}
    </button>
  )
}
