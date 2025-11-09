import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './content-width.module.css'

interface ContentWidthProps {
  children: ReactNode
  className?: string
  indent?: boolean
}

export function ContentWidth({
  children,
  className,
  indent = false,
}: ContentWidthProps) {
  return (
    <div className={clsx(styles.container, indent && styles.indent, className)}>
      {children}
    </div>
  )
}
