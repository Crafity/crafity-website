import styles from './navigation.module.css'

import { Link } from '@/components/common/link/link'

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} href="#work">
        Work
      </Link>
      <Link className={styles.link} href="#approach">
        Approach
      </Link>
      <Link className={styles.link} href="#contact">
        Contact
      </Link>
    </nav>
  )
}
