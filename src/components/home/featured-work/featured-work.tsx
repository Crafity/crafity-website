import { ProjectCard } from './project-card'

import styles from './featured-work.module.css'

export function FeaturedWork() {
  return (
    <div className={styles.container} id="work">
      <h2 className={styles.title}>FEATURED WORK</h2>

      <div className={styles.grid}>
        <ProjectCard
          client="SONIC EQUIPMENT"
          description="Transformed a legacy monolith into a modern headless architecture—without a single minute of downtime. Over 18 months, we orchestrated a complete platform evolution: from building the technical foundation and CI/CD pipelines to implementing a comprehensive design system. Every component was battle-tested in isolation before going live, so customers saw continuous improvements rather than waiting for the big reveal."
          tags={[
            '18 Months',
            'TypeScript',
            'Next.js',
            'Algolia',
            'CloudFlare',
            'Azure',
          ]}
          title="Headless E-commerce Migration"
        />

        <ProjectCard
          client="SCHIPHOL"
          description="Built the next-generation monitoring system for one of Europe's busiest airports. Real-time data aggregation from dozens of sources, microfrontend architecture handling 24/7 operations, and a complete design system implementation. When the system goes down, planes don't move—we made sure it never does."
          tags={[
            '10 Months',
            'TypeScript',
            'React',
            'Microservices',
            'Real-time Data',
          ]}
          title="Mission-Critical Operations Platform"
        />

        <ProjectCard
          client="CARNEXT"
          description="Three years building the digital backbone of a 22-country used car marketplace. Started with checkout optimization, evolved into full platform modernization. Migrated from monolith to event-driven microservices, integrated A/B testing at scale, and kept millions of transactions flowing smoothly while rebuilding the engine mid-flight."
          tags={[
            '3 Years',
            'TypeScript',
            'Node.js',
            'Kafka',
            'Event-driven Architecture',
          ]}
          title="Pan-European E-commerce Platform"
        />
      </div>
    </div>
  )
}
