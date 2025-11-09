import styles from './technical-notes.module.css'

import { TerminalWindow } from '@/components/common/terminal-window/terminal-window'
import { SectionHeader } from '@/components/layout/section-header/section-header'

export function TechnicalNotesSection() {
  return (
    <>
      <SectionHeader>Technical Notes</SectionHeader>
      <TerminalWindow
        className={styles['tech-terminal']}
        title="technical-challenges.log">
        <div className={styles['technical-content']}>
          <div className={styles['tech-section']}>
            <div className={styles['tech-header']}>
              <span className={styles['tech-icon']}>⚡</span>
              <span className={styles['tech-title']}>
                Global operations, zero downtime
              </span>
            </div>
            <p>
              Transforming a platform serving 65 countries while maintaining
              100% uptime required surgical precision. We rebuilt the experience
              piece by piece, with each component tested in isolation before
              going live.
            </p>
          </div>

          <div className={styles['tech-divider']} />

          <div className={styles['tech-section']}>
            <div className={styles['tech-header']}>
              <span className={styles['tech-icon']}>🔧</span>
              <span className={styles['tech-title']}>
                Modern architecture, gradual transition
              </span>
            </div>
            <p>
              Built every component to work in the existing platform today while
              being ready for Next.js tomorrow. This required careful
              abstraction: clean interfaces, no platform coupling, explicit
              boundaries between our code and existing infrastructure.
            </p>
          </div>

          <div className={styles['tech-divider']} />

          <div className={styles['tech-section']}>
            <div className={styles['tech-header']}>
              <span className={styles['tech-icon']}>🔍</span>
              <span className={styles['tech-title']}>
                Instant search at scale
              </span>
            </div>
            <p>
              Migrated to Algolia for instant, typo-tolerant search across a
              multilingual catalog. Thousands of professional tools, multiple
              languages, instant results as customers type.
            </p>
          </div>

          <div className={styles['tech-divider']} />

          <div className={styles['tech-section']}>
            <div className={styles['tech-header']}>
              <span className={styles['tech-icon']}>🏗️</span>
              <span className={styles['tech-title']}>
                Building for two platforms simultaneously
              </span>
            </div>
            <p>
              Every technical decision considered both immediate delivery
              (working in current platform) and future state (Next.js). This
              influenced component design, data patterns, and infrastructure
              choices throughout.
            </p>
          </div>

          <div className={styles['tech-divider']} />

          <div className={styles['tech-section']}>
            <div className={styles['tech-header']}>
              <span className={styles['tech-icon']}>💻</span>
              <span className={styles['tech-title']}>Technology stack</span>
            </div>
            <ul>
              <li>
                <strong>Next.js:</strong> Server-side rendering, edge caching,
                modern React
              </li>
              <li>
                <strong>Algolia:</strong> Instant search, multilingual,
                typo-tolerant
              </li>
              <li>
                <strong>TypeScript:</strong> Type safety across codebase
              </li>
              <li>
                <strong>Cloudflare:</strong> Unified domain architecture
              </li>
              <li>
                <strong>Vercel:</strong> Fast deployment, global edge network
              </li>
            </ul>
          </div>
        </div>
      </TerminalWindow>
    </>
  )
}
