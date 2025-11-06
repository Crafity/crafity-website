import { Link } from '@tanstack/react-router'
import styles from './logo.module.css'

export function Logo() {
  return (
    <Link className={styles['logo-container']} to={'/'}>
      <picture className={styles['logo-icon']}>
        <source
          media="(prefers-color-scheme: light)"
          srcSet="/logo-constellation-icon-64-light.svg"
        />
        <img
          alt="Crafity"
          height="64"
          src="/logo-constellation-icon-64.svg"
          width="64"
        />
      </picture>
      <div className={styles['logo-wrapper']}>
        <div className={styles.logo}>CRAFITY</div>
        <div className={styles.tagline}>// Built with passion</div>
      </div>
    </Link>
  )
}
