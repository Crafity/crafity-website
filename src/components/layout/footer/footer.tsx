import styles from './footer.module.css'

import { revokeConsent } from '@/components/common/cookie-banner/cookie-banner'
import { Link } from '@/components/common/link/link'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.logo}>CRAFITY</div>
          <div className={styles.tagline}>Built with passion</div>
          <div className={styles.year}>Since 2010</div>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>NAVIGATE</div>
          <Link className={styles.link} href="#work">
            Work
          </Link>
          <Link className={styles.link} href="#approach">
            Approach
          </Link>
          <Link className={styles.link} href="#contact">
            Contact
          </Link>
          <Link external className={styles.link} href="/storybook/?">
            Storybook
          </Link>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>CONNECT</div>
          <Link
            className={styles.link}
            href="https://www.linkedin.com/company/crafity">
            LinkedIn
          </Link>
          <Link className={styles.link} href="https://github.com/crafity">
            GitHub
          </Link>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>LEGAL</div>
          <Link className={styles.link} href="/privacy">
            Privacy Policy
          </Link>
          <button className={styles.link} onClick={revokeConsent} type="button">
            Cookie Settings
          </button>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <div className={styles['bottom-text']}>
          © 2010-2025 Crafity · Haarlem, Netherlands
        </div>
        <div className={styles['bottom-text']}>
          KvK: 62274198 · VAT: NL8547.39.877.B.01
        </div>
      </div>

      <div className={styles.exit}>$ exit</div>
    </footer>
  )
}
