import styles from './what-changed.module.css'

import { List } from '@/components/common/list/list'
import { ContentWidth } from '@/components/layout/content-width/content-width'
import { SectionHeader } from '@/components/layout/section-header/section-header'

export function WhatChangedSection() {
  return (
    <>
      <SectionHeader>What Changed</SectionHeader>
      <ContentWidth indent>
        <p className={styles['results-intro']}>
          Sonic now controls their platform:
        </p>
        <List marker="arrow">
          <li>Deploy in minutes, not weeks—no external partner coordination</li>
          <li>Search results appear instantly across global catalog</li>
          <li>Pages load near-instantly with server-side rendering</li>
          <li>Unified architecture—no more duplicate implementations</li>
          <li>In-house team ships features independently</li>
        </List>
        <p className={styles['transformation-text']}>
          <strong>The transformation that matters:</strong> Sonic went from
          frustrated and dependent to confident and capable. They don't just
          have modern technology—they have a team that understands it, maintains
          it, and evolves it.
        </p>
        <p>
          When you serve professional technicians across 65 countries, your
          platform can't be a bottleneck. Now it's not.
        </p>
      </ContentWidth>
    </>
  )
}
