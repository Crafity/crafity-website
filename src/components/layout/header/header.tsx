import { Logo } from './logo'
import { Navigation } from './navigation'

import styles from './header.module.css'

import { ThemeToggle } from '@/components/common/theme-toggle/theme-toggle'
import { Container } from '@/components/layout/container/container'

export function Header() {
  return (
    <header className={styles.header}>
      <Container size="full">
        <div className={styles.content}>
          <Logo />
          <Navigation />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
