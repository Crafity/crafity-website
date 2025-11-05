import { clsx } from 'clsx'

import { TechStack } from '../../common/tech-stack/tech-stack'

import styles from './project-card.module.css'

interface ProjectCardProps {
  client: string
  description: string
  large?: boolean
  tags: string[]
  title: string
}

export function ProjectCard({
  client,
  description,
  large,
  tags,
  title,
}: ProjectCardProps) {
  return (
    <div className={clsx(styles.card, large && styles.large)}>
      <div className={styles.dots}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="blue" />
      </div>

      <div className={styles.header}>
        <div className={styles.client}>{client}</div>
        <div className={styles.title}>{title}</div>
      </div>

      <p className={styles.description}>{description}</p>

      <TechStack tags={tags} />

      <button className={styles.link} type="button">
        → View case study
      </button>
    </div>
  )
}
