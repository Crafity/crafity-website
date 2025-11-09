import { PrincipleCard } from './principle-card'

import styles from './approach.module.css'

import { Divider } from '@/components/common/divider/divider'
import { Heading } from '@/components/common/heading/heading'
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'

const principles = [
  {
    description:
      "We don't hack together solutions. Every line of code is written with maintainability in mind. We use proven patterns, write comprehensive tests, and document our decisions. Your future team will thank you.",
    title: 'NO SHORTCUTS',
  },
  {
    description:
      'Great code requires great collaboration. We invest in your people as much as your platform—mentoring developers, sharing knowledge, and creating an environment where everyone grows. The system we deliver is sustainable because the team we leave behind is capable.',
    title: 'BUILDING TEAMS, NOT JUST SYSTEMS',
  },
  {
    description:
      "25+ years of experience means we've seen it all. We guide architectural decisions, mentor junior developers, and help you avoid costly mistakes. We're not just coding—we're leading.",
    title: 'TECHNICAL LEADERSHIP',
  },
  {
    description:
      "We build systems that scale with your business. Not over-engineered, not under-engineered. Just right for where you are now and where you're going. Pragmatic solutions that work.",
    title: 'SUSTAINABLE GROWTH',
  },
]

export function Approach() {
  return (
    <Container size="wide">
      <Stack space="xlarge">
        <div className={styles.statement}>
          <Heading align="center" level={2} variant="accent">
            BUILT TO LAST. BUILT WITH PASSION.
          </Heading>
        </div>

        <div className={styles.divider}>
          <Divider spacing="none" variant="gradient" />
        </div>

        <Stack space="xlarge">
          {principles.map((principle, index) => (
            <PrincipleCard key={principle.title} index={index} {...principle} />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
