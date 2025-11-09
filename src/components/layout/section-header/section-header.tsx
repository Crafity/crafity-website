import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './section-header.module.css'

interface SectionHeaderProps {
  children: ReactNode
  className?: string
}

export function SectionHeader({ children, className }: SectionHeaderProps) {
  return (
    <>
      <div className={styles.accent} />
      <h2 className={clsx(styles.title, className)}>{children}</h2>
    </>
  )
}
