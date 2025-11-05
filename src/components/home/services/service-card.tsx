import { clsx } from 'clsx'

import styles from './service-card.module.css'

interface ServiceCardProps {
  description: string
  examples: string
  index: number
  number: string
  title: string
}

export function ServiceCard({
  description,
  examples,
  index,
  number,
  title,
}: ServiceCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className={clsx(styles.card, isEven && styles.even)}>
      <div className={styles.accent} />

      <div className={styles.number}>{number}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.examples}>RECENT: {examples}</div>
    </div>
  )
}
