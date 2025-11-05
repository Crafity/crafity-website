import styles from './service-card.module.css'

interface ServiceCardProps {
  description: string
  examples: string
  number: string
  title: string
}

export function ServiceCard({
  description,
  examples,
  number,
  title,
}: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.accent} />

      <div className={styles.number}>{number}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.examples}>RECENT: {examples}</div>
    </div>
  )
}
