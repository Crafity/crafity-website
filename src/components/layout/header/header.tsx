import styles from './header.module.css'

import { ThemeToggle } from '@/components/common/theme-toggle/theme-toggle'
import { Logo } from '@/components/layout/header/logo'
import { Navigation } from '@/components/layout/header/navigation'

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <ThemeToggle />
    </header>
  )
}
