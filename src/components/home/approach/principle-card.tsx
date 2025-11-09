import { clsx } from 'clsx'

import styles from './principle-card.module.css'

import { Heading } from '@/components/common/heading/heading'
import { Text } from '@/components/common/text/text'

interface PrincipleCardProps {
  description: string
  index: number
  title: string
}

export function PrincipleCard({
  description,
  index,
  title,
}: PrincipleCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className={clsx(styles.card, isEven && styles.even)}>
      <div className={styles.bar} />
      <Heading className={styles.title} level={3} size="md">
        {title}
      </Heading>
      <Text className={styles.description}>{description}</Text>
    </div>
  )
}
