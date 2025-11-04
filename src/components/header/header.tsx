import styles from './header.module.css'

import { Logo } from '@/components/header/logo'
import { Navigation } from '@/components/header/navigation'

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  )
}
