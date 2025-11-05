import { clsx } from 'clsx'

import styles from './principle-card.module.css'

interface PrincipleCardProps {
  description: string
  index: number
  title: string
}

export function PrincipleCard({
  description,
  index,
  title,
}: PrincipleCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className={clsx(styles.card, isEven && styles.even)}>
      <div className={styles.bar} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
