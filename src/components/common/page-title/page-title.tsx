import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './page-title.module.css'

interface PageTitleProps {
  children: ReactNode
  className?: string
}

interface PageTitleLineProps {
  children: ReactNode
  className?: string
  color?: 'default' | 'primary' | 'secondary'
}

interface PageTitleAccentProps {
  children: ReactNode
  className?: string
  color?: 'primary' | 'secondary'
}

export function PageTitle({ children, className }: PageTitleProps) {
  return <h1 className={clsx(styles.title, className)}>{children}</h1>
}

PageTitle.Line = function PageTitleLine({
  children,
  className,
  color = 'default',
}: PageTitleLineProps) {
  return (
    <span
      className={clsx(
        styles.line,
        color === 'default' && styles['line-default'],
        color === 'primary' && styles['line-primary'],
        color === 'secondary' && styles['line-secondary'],
        className,
      )}>
      {children}
    </span>
  )
}

PageTitle.Accent = function PageTitleAccent({
  children,
  className,
  color = 'secondary',
}: PageTitleAccentProps) {
  return (
    <span
      className={clsx(
        styles.accent,
        color === 'primary' && styles['accent-primary'],
        color === 'secondary' && styles['accent-secondary'],
        className,
      )}>
      {children}
    </span>
  )
}
