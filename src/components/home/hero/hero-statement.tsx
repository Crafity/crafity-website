import styles from './hero-statement.module.css'

export function HeroStatement() {
  return (
    <h1 className={styles.statement}>
      <span className={styles.line1}>ENTERPRISE-GRADE</span>
      <span className={styles.line2}>ENGINEERING</span>
      <span className={styles.line3}>
        WITH <span className={styles.highlight}>STARTUP</span> DNA
      </span>
    </h1>
  )
}
