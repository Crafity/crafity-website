import { TerminalWindow } from '../../common/terminal-window/terminal-window'

import { CommandInput } from './command-input'
import { HeroStatement } from './hero-statement'
import { StatsGrid } from './stats-grid'

import styles from './hero.module.css'

export function Hero() {
  return (
    <div className={styles.hero}>
      <HeroStatement />
      <TerminalWindow
        className={styles['terminal-window']}
        title="crafity-init v14.0">
        <div className={styles.command}>
          crafity@enterprise:~$ ./deploy --quality=enterprise --speed=startup
        </div>
        <div className={styles.output}>
          &gt; Initializing deployment sequence...
        </div>
        <div className={styles.progress}>
          <div className={styles['progress-label']}>
            Loading engineering capabilities
          </div>
          <div className={styles['progress-bar']}>
            <div className={styles['progress-fill']} />
          </div>
          <div className={styles['progress-percent']}>100%</div>
        </div>
        <div className={styles.success}>
          ✓ System ready. 25+ years of experience loaded.
        </div>
        <div className={styles.success}>
          ✓ Trusted by: Sonic Equipment, Schiphol, eBay, CarNext
        </div>
      </TerminalWindow>
      <StatsGrid />
      <CommandInput />
    </div>
  )
}
