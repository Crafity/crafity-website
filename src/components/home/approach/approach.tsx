import { PrincipleCard } from './principle-card'

import styles from './approach.module.css'

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
    <div className={styles.container} id="approach">
      <h2 className={styles.statement}>BUILT TO LAST. BUILT WITH PASSION.</h2>

      <div className={styles.divider} />

      <div className={styles.principles}>
        {principles.map((principle, index) => (
          <PrincipleCard key={principle.title} index={index} {...principle} />
        ))}
      </div>
    </div>
  )
}
