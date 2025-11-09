import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './progress-bar.module.css'

interface ProgressBarProps {
  className?: string
  label: ReactNode
  percent: number
}

export function ProgressBar({ className, label, percent }: ProgressBarProps) {
  return (
    <div className={clsx(styles.progress, className)}>
      <div className={styles.label}>{label}</div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
      <div className={styles.percent}>{percent}%</div>
    </div>
  )
}
