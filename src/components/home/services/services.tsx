import { ServiceCard } from './service-card'

import styles from './services.module.css'

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
    <div className={styles.container}>
      <h2 className={styles.title}>WHAT WE DO</h2>

      <div className={styles.services}>
        {services.map(service => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </div>
  )
}
