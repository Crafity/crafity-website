import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './accent-bar.module.css'

interface AccentBarProps {
  children: ReactNode
  className?: string
  size?: 'normal' | 'large'
  title?: string
  variant?: 'primary' | 'secondary' | 'auto'
}

export function AccentBar({
  children,
  className,
  size = 'normal',
  title,
  variant = 'auto',
}: AccentBarProps) {
  return (
    <div
      className={clsx(
        styles.container,
        size === 'large' && styles.large,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        className,
      )}>
      <div className={styles.bar} />
      {title && <p className={styles.title}>{title}</p>}
      {children}
    </div>
  )
}
