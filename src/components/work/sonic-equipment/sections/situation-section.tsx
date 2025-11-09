import styles from './situation-section.module.css'

import { AccentBar } from '@/components/common/accent-bar/accent-bar'
import { Container } from '@/components/layout/container/container'
import { SectionHeader } from '@/components/layout/section-header/section-header'

export function SituationSection() {
  return (
    <>
      <SectionHeader>The Situation</SectionHeader>
      <Container size="comfortable">
        <p>
          Sonic Equipment is the global specialist in professional hand tools,
          filled toolboxes and premium storage solutions. Operating across 65+
          countries, they serve professional technicians in automotive,
          agriculture, trucking, maritime, aviation, and industrial sectors.
        </p>
        <p>Their e-commerce platform worked, but it was holding them back.</p>

        <AccentBar title="They were dependent.">
          <p>
            Every deployment required coordinating with an external partner.
            Changes that should take hours took weeks. Simple updates became
            expensive, time-consuming operations. The business wanted to move
            faster, but the platform architecture wouldn't let them.
          </p>
        </AccentBar>

        <AccentBar title="The platform was fragmented.">
          <p>
            Marketing and e-commerce lived on separate systems, separate
            domains. This created technical complexity and forced them to build
            shared features twice—once for marketing, once for shop.
          </p>
        </AccentBar>

        <AccentBar title="Search wasn't keeping up.">
          <p>
            With thousands of professional tools across multiple languages and
            markets, customers needed instant, intelligent search. The existing
            search was rigid and slow.
          </p>
        </AccentBar>

        <AccentBar title="They wanted ownership.">
          <p>
            Sonic's vision was clear: transition from external dependency to an
            in-house development team. They needed a partner who could build the
            new platform <em>and</em> build their team's capability to own it.
          </p>
        </AccentBar>

        <p className={styles['constraint-text']}>
          The constraint: 65 countries, thousands of professional customers,
          zero tolerance for downtime during business hours.
        </p>
      </Container>
    </>
  )
}
