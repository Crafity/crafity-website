import styles from './what-we-did-section.module.css'

import { Heading } from '@/components/common/heading/heading'
import { PrincipleCard } from '@/components/home/approach/principle-card'
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'

export function WhatWeDidSection() {
  return (
    <>
      <div className={styles['section-header']}>
        <Heading fluid align="center" level={2} size="5xl" variant="accent">
          What We Did
        </Heading>
      </div>
      <Container size="comfortable">
        <Stack gap={16}>
          <p>
            We worked embedded at Sonic over 19 months, transforming the
            platform while building their internal capability.
          </p>

          <PrincipleCard
            description={
              <>
                <p>
                  We started by rebuilding the entire e-commerce experience with
                  modern components. Each component was built in isolation,
                  tested thoroughly, then integrated into the existing platform.
                  This approach meant we could iterate quickly while keeping 65
                  countries operational.
                </p>
                <p>
                  We replaced the search with Algolia, giving customers instant
                  results across their multilingual catalog. We rebuilt checkout
                  flows, product pages, and every customer-facing feature—all
                  while the platform stayed live.
                </p>
                <p>
                  The key decision: build everything to eventually move to
                  Next.js, but don't couple to any specific platform. This let
                  us deliver value immediately while preparing for the bigger
                  architectural shift.
                </p>
              </>
            }
            index={1}
            title="Phase 1: Modernize in Place"
          />

          <PrincipleCard
            description={
              <>
                <p>
                  With all components ready, we migrated to Next.js. This gave
                  Sonic server-side rendering for instant page loads, edge
                  caching for global performance, and most importantly: fast,
                  independent deployment.
                </p>
                <p>
                  We unified their domain architecture, eliminating the
                  technical complexity of separate marketing and e-commerce
                  systems.
                </p>
              </>
            }
            index={2}
            title="Phase 2: Move to Modern Infrastructure"
          />

          <PrincipleCard
            description={
              <>
                <p>
                  During the project, Sonic hired 2 frontend developers and 1
                  backend developer. We mentored them as we built—pair
                  programming, code reviews, architectural decisions made
                  together. By the end, they owned the entire platform.
                </p>
                <p>
                  We transitioned from interim team to advisors, then stepped
                  back completely. Sonic went from external dependency to
                  confident in-house capability.
                </p>
              </>
            }
            index={3}
            title="Building the Team"
          />
        </Stack>
      </Container>
    </>
  )
}
