import { clsx } from 'clsx'

import { Dots } from '../../common/dots/dots'
import { Heading } from '../../common/heading/heading'
import { Link } from '../../common/link/link'
import { TechStack } from '../../common/tech-stack/tech-stack'
import { Text } from '../../common/text/text'

import styles from './project-card.module.css'

interface ProjectCardProps {
  client: string
  description: string
  href?: string
  large?: boolean
  tags: string[]
  title: string
}

export function ProjectCard({
  client,
  description,
  href,
  large,
  tags,
  title,
}: ProjectCardProps) {
  return (
    <div className={clsx(styles.card, large && styles.large)}>
      <div className={styles.dots}>
        <Dots />
      </div>

      <div className={styles.header}>
        <Text className={styles.client} size="xs" variant="label">
          {client}
        </Text>
        <Heading className={styles.title} level={3} size="lg">
          {title}
        </Heading>
      </div>

      <Text className={styles.description}>{description}</Text>

      <TechStack tags={tags} />

      {href ? (
        <Link unstyled className={styles.link} href={href}>
          → View case study
        </Link>
      ) : (
        <button className={styles.link} type="button">
          → View case study
        </button>
      )}
    </div>
  )
}
