import styles from './hero-statement.module.css'

import { Heading } from '@/components/common/heading/heading'

export function HeroStatement() {
  return (
    <Heading className={styles.statement} level={1}>
      <span className={styles.line1}>ENTERPRISE-GRADE</span>
      <span className={styles.line2}>ENGINEERING</span>
      <span className={styles.line3}>
        WITH <span className={styles.highlight}>STARTUP</span> DNA
      </span>
    </Heading>
  )
}
