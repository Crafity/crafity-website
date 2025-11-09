import { Card } from '../card/card'

import styles from './stat.module.css'

interface StatProps {
  label: string
  number: string
}

export function Stat({ label, number }: StatProps) {
  return (
    <Card className={styles.stat} variant="filled">
      <div className={styles.number}>{number}</div>
      <div className={styles.label}>{label}</div>
    </Card>
  )
}
