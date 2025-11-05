import { TerminalWindow } from '../../common/terminal-window/terminal-window'

import { CommandInput } from './command-input'
import { HeroStatement } from './hero-statement'
import { StatsGrid } from './stats-grid'

import styles from './hero.module.css'

export function Hero() {
  return (
    <div className={styles.hero}>
      <TerminalWindow
        className={styles['terminal-window']}
        title="crafity-init v14.0">
        <div className={styles.command}>
          <span className={styles['desktop-text']}>
            crafity@enterprise:~$ ./deploy --quality=enterprise --speed=startup
          </span>
          <span className={styles['mobile-text']}>
            $ ./deploy{' '}
            <span className={styles['no-wrap']}>--quality=enterprise</span>
          </span>
        </div>
        <div className={styles.output}>
          <span className={styles['desktop-text']}>
            &gt; Initializing deployment sequence...
          </span>
          <span className={styles['mobile-text']}>&gt; Initializing...</span>
        </div>
        <div className={styles.progress}>
          <div className={styles['progress-label']}>
            <span className={styles['desktop-text']}>
              Loading engineering capabilities
            </span>
            <span className={styles['mobile-text']}>Loading capabilities</span>
          </div>
          <div className={styles['progress-bar']}>
            <div className={styles['progress-fill']} />
          </div>
          <div className={styles['progress-percent']}>100%</div>
        </div>
        <div className={styles.success}>
          <span className={styles['desktop-text']}>
            ✓ System ready. 25+ years of experience loaded.
          </span>
          <span className={styles['mobile-text']}>✓ 25+ years loaded</span>
        </div>
        <div className={styles.success}>
          <span className={styles['desktop-text']}>
            ✓ Trusted by: Sonic Equipment, Schiphol, eBay, CarNext
          </span>
          <span className={styles['mobile-text']}>
            ✓ Sonic, Schiphol, eBay+
          </span>
        </div>
      </TerminalWindow>
      <HeroStatement />
      <StatsGrid />
      <CommandInput />
    </div>
  )
}
