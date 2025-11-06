import { Stat } from '../../common/stat/stat'

import styles from './stats-grid.module.css'

export function StatsGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.stat}>
        <Stat label="Years Experience" number="25+" />
      </div>
      <div className={styles.stat}>
        <Stat label="Projects Delivered" number="50+" />
      </div>
      <div className={styles.stat}>
        <Stat label="Built with Passion" number="100%" />
      </div>
    </div>
  )
}
