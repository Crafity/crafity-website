import styles from './logo.module.css'

export function Logo() {
  return (
    <div className={styles['logo-container']}>
      <span className={styles['terminal-prompt']}>$</span>
      <div className={styles.logo}>CRAFITY</div>
      <div className={styles.tagline}>// Built with passion</div>
    </div>
  )
}
