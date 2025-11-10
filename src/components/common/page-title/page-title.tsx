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

/**
 * @deprecated Use <Heading level={1} size="5xl" fluid> instead for simple headings.
 * This component is kept for backward compatibility with the hero section's
 * multi-line layout with Line and Accent sub-components.
 *
 * For new implementations, prefer the Heading component with fluid prop.
 */
export function PageTitle({ children, className }: PageTitleProps) {
  return <h1 className={clsx(styles.title, className)}>{children}</h1>
}

// eslint-disable-next-line @typescript-eslint/no-deprecated
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

// eslint-disable-next-line @typescript-eslint/no-deprecated
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
