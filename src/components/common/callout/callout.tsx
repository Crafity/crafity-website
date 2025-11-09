import { ReactNode } from 'react'
import { clsx } from 'clsx'

import { Card } from '../card/card'

import styles from './callout.module.css'

interface CalloutProps {
  children: ReactNode
  className?: string
  title?: string
}

export function Callout({ children, className, title }: CalloutProps) {
  return (
    <Card className={clsx(styles.callout, className)} variant="filled">
      {title && <strong className={styles.title}>{title}</strong>}
      {children}
    </Card>
  )
}
