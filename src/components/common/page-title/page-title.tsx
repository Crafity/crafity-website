import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './page-title.module.css'

interface PageTitleProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'large'
}

export function PageTitle({
  children,
  className,
  variant = 'default',
}: PageTitleProps) {
  return (
    <h1
      className={clsx(
        styles.title,
        variant === 'default' && styles.default,
        variant === 'large' && styles.large,
        className,
      )}>
      {children}
    </h1>
  )
}
