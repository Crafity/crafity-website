import styles from './stat.module.css'

interface StatProps {
  label: string
  number: string
}

export function Stat({ label, number }: StatProps) {
  return (
    <div className={styles.stat}>
      <div className={styles.number}>{number}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}
