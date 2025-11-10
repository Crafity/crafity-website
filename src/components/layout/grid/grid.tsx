import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './grid.module.css'

import {
  getSpacingVar,
  SpacingToken,
} from '@/components/layout/box/box-spacing'
import { isResponsiveProp, ResponsiveProp } from '@/types/responsive'

interface GridProps {
  children: ReactNode
  className?: string
  columns?: number | ResponsiveProp<number>
  gap?: SpacingToken | ResponsiveProp<SpacingToken>
}

/**
 * Grid component for responsive multi-column layouts.
 *
 * Follows industry best practices from Chakra UI SimpleGrid and Material-UI Grid.
 * Supports responsive column counts and gaps using standard breakpoints.
 *
 * @example Basic grid with static columns
 * ```tsx
 * <Grid columns={3} gap={6}>
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
 *   gap={{ base: 4, md: 6, lg: 8 }}
 * >
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 * ```
 *
 * @example Product grid
 * ```tsx
 * <Grid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
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
  gap = 6,
}: GridProps) {
  const isColumnsResponsive = isResponsiveProp(columns)
  const isGapResponsive = isResponsiveProp(gap)

  const columnValues = isColumnsResponsive
    ? columns
    : { base: columns, lg: columns, md: columns }

  return (
    <div
      className={clsx(styles.grid, className)}
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
          '--grid-gap': isGapResponsive ? undefined : getSpacingVar(gap),
          '--grid-gap-2xl':
            isGapResponsive && gap['2xl']
              ? getSpacingVar(gap['2xl'])
              : undefined,
          '--grid-gap-3xl':
            isGapResponsive && gap['3xl']
              ? getSpacingVar(gap['3xl'])
              : undefined,
          '--grid-gap-base': isGapResponsive
            ? getSpacingVar(gap.base)
            : undefined,
          '--grid-gap-lg':
            isGapResponsive && gap.lg ? getSpacingVar(gap.lg) : undefined,
          '--grid-gap-md':
            isGapResponsive && gap.md ? getSpacingVar(gap.md) : undefined,
          '--grid-gap-sm':
            isGapResponsive && gap.sm ? getSpacingVar(gap.sm) : undefined,
          '--grid-gap-xl':
            isGapResponsive && gap.xl ? getSpacingVar(gap.xl) : undefined,
          '--grid-gap-xs':
            isGapResponsive && gap.xs ? getSpacingVar(gap.xs) : undefined,
        } satisfies React.CSSProperties
      }>
      {children}
    </div>
  )
}
