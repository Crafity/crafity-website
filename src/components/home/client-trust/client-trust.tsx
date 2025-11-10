import styles from './client-trust.module.css'

import { Divider } from '@/components/common/divider/divider'
import { Text } from '@/components/common/text/text'
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'

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
    <Container size="wide">
      <Stack gap={12}>
        <div className={styles.header}>
          <Divider spacing="none" variant="default" />
          <Text
            align="center"
            className={styles.label}
            color="secondary"
            size="xs"
            variant="label">
            TRUSTED BY
          </Text>
          <Divider spacing="none" variant="default" />
        </div>

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
      </Stack>
    </Container>
  )
}
