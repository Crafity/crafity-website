import styles from './cta.module.css'

export function CTA() {
  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.title}>LET'S BUILD SOMETHING</h2>

      <p className={styles.description}>
        Whether you're migrating to headless, rescuing a legacy system, or need
        senior engineering capacity—let's start the conversation.
      </p>

      <a className={styles.command} href="mailto:info@crafity.com">
        <span className={styles.prompt}>$</span>
        <span>start_conversation</span>
      </a>

      <div className={styles.contact}>
        info@crafity.com · Randstad, Netherlands
      </div>
    </div>
  )
}
