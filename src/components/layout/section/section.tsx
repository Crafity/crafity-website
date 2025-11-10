import { ReactNode } from 'react'
import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './section.module.css'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  padding?: 'base' | 'large' | 'none'
}

/**
 * Section component for semantic page sections with vertical padding.
 *
 * Consolidates the old Section and SectionContainer components into a single,
 * flexible component following semantic HTML best practices.
 *
 * @example
 * ```tsx
 * <Section>
 *   <Container size="wide">
 *     <h2>Section Content</h2>
 *   </Container>
 * </Section>
 * ```
 *
 * @example With custom padding
 * ```tsx
 * <Section padding="large">
 *   <Container size="base">
 *     <p>Content with extra vertical padding</p>
 *   </Container>
 * </Section>
 * ```
 */
export function Section({
  children,
  className,
  id,
  padding = 'base',
}: SectionProps) {
  return (
    <section
      className={clsx(styles.section, styles[padding], className)}
      id={id}>
      {children}
    </section>
  )
}
