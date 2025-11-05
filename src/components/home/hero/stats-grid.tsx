import { Stat } from '../../common/stat/stat'

import styles from './stats-grid.module.css'

export function StatsGrid() {
  return (
    <div className={styles.grid}>
      <Stat label="Years Experience" number="25+" />
      <Stat label="Projects Delivered" number="50+" />
      <Stat label="Built with Passion" number="100%" />
    </div>
  )
}
