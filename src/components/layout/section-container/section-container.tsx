import { ReactNode } from 'react'
import { clsx } from 'clsx'

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
  return (
    <section className={clsx(styles.section, className)} id={id}>
      {children}
    </section>
  )
}
