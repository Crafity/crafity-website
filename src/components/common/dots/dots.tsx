import styles from './dots.module.css'

export function Dots() {
  return (
    <div className={styles.dots}>
      <span className={styles.dot} data-color="red" />
      <span className={styles.dot} data-color="yellow" />
      <span className={styles.dot} data-color="blue" />
    </div>
  )
}
