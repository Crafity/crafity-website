import styles from './cta.module.css'

import { Heading } from '@/components/common/heading/heading'
import { Text } from '@/components/common/text/text'
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'

export function CTA() {
  return (
    <Container size="comfortable">
      <Stack className={styles.stack} gap={12}>
        <Heading align="center" level={2} variant="accent">
          LET'S BUILD SOMETHING
        </Heading>

        <Text align="center" className={styles.description}>
          Whether you're migrating to headless, rescuing a legacy system, or
          need senior engineering capacity—let's start the conversation.
        </Text>

        <a className={styles.command} href="mailto:info@crafity.com">
          <span className={styles.prompt}>$</span>
          <span>start_conversation</span>
        </a>

        <Text
          align="center"
          className={styles.contact}
          color="secondary"
          size="sm"
          variant="code">
          info@crafity.com · Randstad, Netherlands
        </Text>
      </Stack>
    </Container>
  )
}
