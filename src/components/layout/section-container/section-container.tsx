import { ReactNode } from 'react'

import styles from './section-container.module.css'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  const classNames = [styles.section, className].filter(Boolean).join(' ')

  return (
    <section className={classNames} id={id}>
      {children}
    </section>
  )
}
