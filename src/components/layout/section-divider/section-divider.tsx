import { clsx } from 'clsx'

import styles from './section-divider.module.css'

interface SectionDividerProps {
  className?: string
}

export function SectionDivider({ className }: SectionDividerProps) {
  return <div className={clsx(styles.divider, className)} />
}
