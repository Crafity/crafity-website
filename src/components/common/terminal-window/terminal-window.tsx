import { ReactNode } from 'react'
import { clsx } from 'clsx'

import { Card } from '../card/card'
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
    <Card glow className={clsx(styles.terminal, className)} variant="outlined">
      <div className={styles.header}>
        <Dots />
        {title && <div className={styles.title}>{title}</div>}
      </div>
      <div className={styles.content}>{children}</div>
    </Card>
  )
}
