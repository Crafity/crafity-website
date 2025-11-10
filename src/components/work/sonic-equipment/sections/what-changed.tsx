import styles from './what-changed.module.css'

import { Card } from '@/components/common/card/card'
import { Heading } from '@/components/common/heading/heading'
import { List } from '@/components/common/list/list'
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'

export function WhatChangedSection() {
  return (
    <>
      <div className={styles['section-header']}>
        <div className={styles['accent-bar']} />
        <Heading fluid align="center" level={2} size="5xl" variant="accent">
          What Changed
        </Heading>
      </div>
      <Container size="wide">
        <Stack gap={8}>
          <p className={styles['results-intro']}>
            Sonic now controls their platform:
          </p>
          <List marker="arrow">
            <li>
              Deploy in minutes, not weeks—no external partner coordination
            </li>
            <li>Search results appear instantly across global catalog</li>
            <li>Pages load near-instantly with server-side rendering</li>
            <li>Unified architecture—no more duplicate implementations</li>
            <li>In-house team ships features independently</li>
          </List>
          <Card borderWidth="accent-thin" variant="outlined">
            <strong>The transformation that matters:</strong> Sonic went from
            frustrated and dependent to confident and capable. They don't just
            have modern technology—they have a team that understands it,
            maintains it, and evolves it.
          </Card>
          <p>
            When you serve professional technicians across 65 countries, your
            platform can't be a bottleneck. Now it's not.
          </p>
        </Stack>
      </Container>
    </>
  )
}
