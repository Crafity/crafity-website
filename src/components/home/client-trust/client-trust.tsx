import styles from './client-trust.module.css'

const featuredClients = [
  'Sonic Equipment',
  'Royal Schiphol Group',
  'eBay',
  'Picnic',
]

const supportingClients = [
  'Brenntag',
  'CarNext',
  'Electronic Arts',
  'ING',
  'Nike',
  'Nederlands Spoorwegen',
  'T-Mobile',
  'Marktplaats',
]

export function ClientTrust() {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.label}>TRUSTED BY</div>
      <div className={styles.divider} />

      <div className={styles.featured}>
        {featuredClients.map(client => (
          <span key={client} className={styles.client}>
            {client}
          </span>
        ))}
      </div>

      <div className={styles.supporting}>
        {supportingClients.map(client => (
          <span key={client} className={styles.client}>
            {client}
          </span>
        ))}
      </div>
    </div>
  )
}
