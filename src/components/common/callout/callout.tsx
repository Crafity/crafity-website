import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './callout.module.css'

interface CalloutProps {
  children: ReactNode
  className?: string
  title?: string
}

export function Callout({ children, className, title }: CalloutProps) {
  return (
    <div className={clsx(styles.callout, className)}>
      {title && <strong className={styles.title}>{title}</strong>}
      {children}
    </div>
  )
}
