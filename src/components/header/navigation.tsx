import styles from './navigation.module.css'

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <a className={styles.link} href="#work">
        Work
      </a>
      <a className={styles.link} href="#approach">
        Approach
      </a>
      <a className={styles.link} href="#contact">
        Contact
      </a>
    </nav>
  )
}
