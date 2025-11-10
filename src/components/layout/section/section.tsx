import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './section.module.css'

import {
  getSpacingVar,
  SpacingToken,
} from '@/components/layout/box/box-spacing'
import { isResponsiveProp, ResponsiveProp } from '@/types/responsive'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  padding?: SpacingToken | ResponsiveProp<SpacingToken>
}

/**
 * Section component for semantic page sections with vertical padding.
 *
 * Consolidates the old Section and SectionContainer components into a single,
 * flexible component following semantic HTML best practices.
 *
 * @example
 * ```tsx
 * <Section padding={16}>
 *   <Container size="wide">
 *     <h2>Section Content</h2>
 *   </Container>
 * </Section>
 * ```
 *
 * @example With responsive padding
 * ```tsx
 * <Section padding={{ base: 16, lg: 24 }}>
 *   <Container size="base">
 *     <p>Content with responsive vertical padding</p>
 *   </Container>
 * </Section>
 * ```
 */
export function Section({
  children,
  className,
  id,
  padding = 16,
}: SectionProps) {
  const isPaddingResponsive = isResponsiveProp(padding)

  return (
    <section
      className={clsx(styles.section, className)}
      id={id}
      style={
        (isPaddingResponsive
          ? {
              '--section-padding-2xl':
                padding['2xl'] && getSpacingVar(padding['2xl']),
              '--section-padding-3xl':
                padding['3xl'] && getSpacingVar(padding['3xl']),
              '--section-padding-base': getSpacingVar(padding.base),
              '--section-padding-lg': padding.lg && getSpacingVar(padding.lg),
              '--section-padding-md': padding.md && getSpacingVar(padding.md),
              '--section-padding-sm': padding.sm && getSpacingVar(padding.sm),
              '--section-padding-xl': padding.xl && getSpacingVar(padding.xl),
              '--section-padding-xs': padding.xs && getSpacingVar(padding.xs),
            }
          : {
              '--section-padding': getSpacingVar(padding),
            }) satisfies React.CSSProperties
      }>
      {children}
    </section>
  )
}
