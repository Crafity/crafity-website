import { ReactNode } from 'react'
import { clsx } from 'clsx'

import { Dots } from '../dots/dots'

import styles from './terminal-window.module.css'

interface TerminalWindowProps {
  children: ReactNode
  className?: string
  title?: string
}

export function TerminalWindow({
  children,
  className,
  title,
}: TerminalWindowProps) {
  return (
    <div className={clsx(styles.terminal, className)}>
      <div className={styles.header}>
        <Dots />
        {title && <div className={styles.title}>{title}</div>}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
