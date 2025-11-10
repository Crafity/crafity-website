import styles from './situation-section.module.css'

import { Card } from '@/components/common/card/card'
import { Heading } from '@/components/common/heading/heading'
import { LeftAccentCard } from '@/components/common/left-accent-card/left-accent-card'
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'

export function SituationSection() {
  return (
    <Container size="comfortable">
      <Stack gap={16}>
        <Heading fluid align="center" level={2} size="5xl" variant="accent">
          The Situation
        </Heading>
        <div>
          <p>
            Sonic Equipment is the global specialist in professional hand tools,
            filled toolboxes and premium storage solutions. Operating across 65+
            countries, they serve professional technicians in automotive,
            agriculture, trucking, maritime, aviation, and industrial sectors.
          </p>
          <p>Their e-commerce platform worked, but it was holding them back.</p>
        </div>

        <LeftAccentCard
          children={
            <p>
              Every deployment required coordinating with an external partner.
              Changes that should take hours took weeks. Simple updates became
              expensive, time-consuming operations. The business wanted to move
              faster, but the platform architecture wouldn't let them.
            </p>
          }
          accentColor="secondary"
          title="They were dependent."
        />

        <LeftAccentCard
          children={
            <p>
              Marketing and e-commerce lived on separate systems, separate
              domains. This created technical complexity and forced them to
              build shared features twice—once for marketing, once for shop.
            </p>
          }
          accentColor="primary"
          title="The platform was fragmented."
        />

        <LeftAccentCard
          children={
            <p>
              With thousands of professional tools across multiple languages and
              markets, customers needed instant, intelligent search. The
              existing search was rigid and slow.
            </p>
          }
          accentColor="secondary"
          title="Search wasn't keeping up."
        />

        <LeftAccentCard
          children={
            <p>
              Sonic's vision was clear: transition from external dependency to
              an in-house development team. They needed a partner who could
              build the new platform <em>and</em> build their team's capability
              to own it.
            </p>
          }
          accentColor="primary"
          title="They wanted ownership."
        />

        <Card
          borderSide="left"
          borderWidth="accent"
          className={styles['constraint-text']}
          variant="filled">
          <p>
            The constraint: 65 countries, thousands of professional customers,
            zero tolerance for downtime during business hours.
          </p>
        </Card>
      </Stack>
    </Container>
  )
}
