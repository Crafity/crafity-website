import { ReactNode } from 'react'
import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './grid.module.css'

import {
  getGapToken,
  isResponsiveProp,
  ResponsiveProp,
} from '@/types/responsive'

type GapSize = 'small' | 'medium' | 'large'

interface GridProps {
  children: ReactNode
  className?: string
  columns?: number | ResponsiveProp<number>
  gap?: GapSize | ResponsiveProp<GapSize>
}

/**
 * Grid component for responsive multi-column layouts.
 *
 * Follows industry best practices from Chakra UI SimpleGrid and Material-UI Grid.
 * Supports responsive column counts and gaps using standard breakpoints.
 *
 * @example Basic grid with static columns
 * ```tsx
 * <Grid columns={3}>
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 * ```
 *
 * @example Responsive grid with breakpoint-based columns
 * ```tsx
 * <Grid
 *   columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
 *   gap={{ base: 'small', md: 'medium', lg: 'large' }}
 * >
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 * ```
 *
 * @example Product grid
 * ```tsx
 * <Grid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="medium">
 *   {products.map(product => (
 *     <ProductCard key={product.id} {...product} />
 *   ))}
 * </Grid>
 * ```
 */
export function Grid({
  children,
  className,
  columns = { base: 1, lg: 3, md: 2 },
  gap = 'medium',
}: GridProps) {
  // Handle both static and responsive props
  const isColumnsResponsive = isResponsiveProp(columns)
  const isGapResponsive = isResponsiveProp(gap)

  // Get column values for CSS variables
  const columnValues = isColumnsResponsive
    ? columns
    : { base: columns, lg: columns, md: columns }

  // Get gap class names
  const gapClassName = isGapResponsive ? undefined : styles[gap]

  return (
    <div
      className={clsx(styles.grid, gapClassName, className)}
      style={
        {
          '--grid-cols-2xl': columnValues['2xl'],
          '--grid-cols-3xl': columnValues['3xl'],
          '--grid-cols-base': columnValues.base,
          '--grid-cols-lg': columnValues.lg,
          '--grid-cols-md': columnValues.md,
          '--grid-cols-sm': columnValues.sm,
          '--grid-cols-xl': columnValues.xl,
          '--grid-cols-xs': columnValues.xs,
          ...(isGapResponsive && {
            '--grid-gap-base': `var(--spacing-${getGapToken(gap.base, true)})`,
            '--grid-gap-md':
              gap.md && `var(--spacing-${getGapToken(gap.md, false)})`,
          }),
        } as React.CSSProperties
      }>
      {children}
    </div>
  )
}
