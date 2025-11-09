import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './page-layout.module.css'

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return <main className={clsx(styles.container, className)}>{children}</main>
}
