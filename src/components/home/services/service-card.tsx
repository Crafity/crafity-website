import { ReactNode } from 'react'

import styles from './service-card.module.css'

import { Heading } from '@/components/common/heading/heading'
import { Text } from '@/components/common/text/text'

interface ServiceCardProps {
  description: ReactNode
  examples?: string
  index: string | number
  title: string
}

export function ServiceCard({
  description,
  examples,
  index,
  title,
}: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.accent} />

      <Text className={styles.number} size="xs" variant="label">
        {index}
      </Text>
      <Heading className={styles.title} level={3} size="md">
        {title}
      </Heading>
      <Text className={styles.description}>{description}</Text>
      {examples && (
        <Text className={styles.examples} size="xs" variant="label">
          RECENT: {examples}
        </Text>
      )}
    </div>
  )
}
