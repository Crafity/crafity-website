import { AccentBar } from '@/components/common/accent-bar/accent-bar'
import { ContentWidth } from '@/components/layout/content-width/content-width'
import { SectionHeader } from '@/components/layout/section-header/section-header'

export function WhatWeDidSection() {
  return (
    <>
      <SectionHeader>What We Did</SectionHeader>
      <ContentWidth indent>
        <p>
          We worked embedded at Sonic over 19 months, transforming the platform
          while building their internal capability.
        </p>

        <AccentBar size="large" title="Phase 1: Modernize in Place">
          <p>
            We started by rebuilding the entire e-commerce experience with
            modern components. Each component was built in isolation, tested
            thoroughly, then integrated into the existing platform. This
            approach meant we could iterate quickly while keeping 65 countries
            operational.
          </p>
          <p>
            We replaced the search with Algolia, giving customers instant
            results across their multilingual catalog. We rebuilt checkout
            flows, product pages, and every customer-facing feature—all while
            the platform stayed live.
          </p>
          <p>
            The key decision: build everything to eventually move to Next.js,
            but don't couple to any specific platform. This let us deliver value
            immediately while preparing for the bigger architectural shift.
          </p>
        </AccentBar>

        <AccentBar size="large" title="Phase 2: Move to Modern Infrastructure">
          <p>
            With all components ready, we migrated to Next.js. This gave Sonic
            server-side rendering for instant page loads, edge caching for
            global performance, and most importantly: fast, independent
            deployment.
          </p>
          <p>
            We unified their domain architecture, eliminating the technical
            complexity of separate marketing and e-commerce systems.
          </p>
        </AccentBar>

        <AccentBar size="large" title="Building the Team">
          <p>
            During the project, Sonic hired 2 frontend developers and 1 backend
            developer. We mentored them as we built—pair programming, code
            reviews, architectural decisions made together. By the end, they
            owned the entire platform.
          </p>
          <p>
            We transitioned from interim team to advisors, then stepped back
            completely. Sonic went from external dependency to confident
            in-house capability.
          </p>
        </AccentBar>
      </ContentWidth>
    </>
  )
}
