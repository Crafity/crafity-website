import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './typography.module.css'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function Typography({ children, className }: TypographyProps) {
  return <div className={clsx(styles.typography, className)}>{children}</div>
}
