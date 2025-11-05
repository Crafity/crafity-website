import styles from './command-input.module.css'

export function CommandInput() {
  return (
    <a className={styles.command} href="#work">
      <span className={styles.prompt}>$</span>
      <span className={styles.text}>explore_work</span>
      <span className={styles.cursor} />
    </a>
  )
}
