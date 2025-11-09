import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './list.module.css'

interface ListProps {
  children: ReactNode
  className?: string
  marker?: 'arrow' | 'default'
}

export function List({ children, className, marker = 'default' }: ListProps) {
  return (
    <ul
      className={clsx(
        styles.list,
        marker === 'arrow' && styles.arrow,
        className,
      )}>
      {children}
    </ul>
  )
}
