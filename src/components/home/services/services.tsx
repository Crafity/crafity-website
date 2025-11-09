import { ServiceCard } from './service-card'

import { Heading } from '@/components/common/heading/heading'
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'

const services = [
  {
    description:
      'Legacy monolith holding you back? We migrate e-commerce platforms to modern headless architectures without disrupting your business. Zero downtime, incremental delivery, and customers who notice the improvements—not the construction.',
    examples: 'Sonic Equipment, Brenntag',
    number: '01',
    title: 'E-COMMERCE MODERNIZATION',
  },
  {
    description:
      "Your critical system is showing its age, but you can't afford to replace it overnight. We refactor, optimize, and modernize while keeping the lights on. Technical debt becomes technical assets, one careful step at a time.",
    examples: 'Schiphol, Picnic, Electronic Arts',
    number: '02',
    title: 'LEGACY SYSTEM RESCUE',
  },
  {
    description:
      'Need senior engineers who hit the ground running? We embed directly into your teams—attending stand-ups, using your tools, building actual features. Not advisors pointing from the sidelines. Engineers who ship code and mentor your team while doing it.',
    examples: 'eBay, ING, Nike',
    number: '03',
    title: 'SENIOR ENGINEERING CAPACITY',
  },
  {
    description:
      'Building something new from scratch? We design and deliver scalable platforms built for growth. Multi-tenant architectures, real-time systems, event-driven backends. Modern stack, battle-tested patterns, zero shortcuts.',
    examples: 'CarNext, Brenntag',
    number: '04',
    title: 'PLATFORM DEVELOPMENT',
  },
]

export function Services() {
  return (
    <Container size="wide">
      <Stack space="xlarge">
        <Heading align="center" level={2} variant="accent">
          WHAT WE DO
        </Heading>

        <Stack space="xlarge">
          {services.map(service => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
