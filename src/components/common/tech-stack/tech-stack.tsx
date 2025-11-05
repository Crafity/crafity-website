import styles from './tech-stack.module.css'

interface TechStackProps {
  tags: string[]
}

export function TechStack({ tags }: TechStackProps) {
  return (
    <div className={styles.stack}>
      {tags.map(tag => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}
