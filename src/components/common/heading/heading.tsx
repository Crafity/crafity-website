import { ReactNode } from 'react'
import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './heading.module.css'

import { isResponsiveProp, ResponsiveProp } from '@/types/responsive'

type HeadingSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'

interface HeadingProps {
  align?: 'left' | 'center' | 'right'
  children: ReactNode
  className?: string
  color?: 'default' | 'primary' | 'secondary'
  fluid?: boolean
  level: 1 | 2 | 3 | 4 | 5 | 6
  size?: HeadingSize | ResponsiveProp<HeadingSize>
  variant?: 'default' | 'accent' | 'display'
}

/**
 * Heading component for semantic headings with flexible visual styling.
 *
 * Follows industry best practices by separating semantic meaning (level)
 * from visual appearance (size). Based on Chakra UI Heading and Material-UI Typography.
 *
 * @example Semantic h2 with static size
 * ```tsx
 * <Heading level={2} size="3xl" align="center">
 *   Page Title
 * </Heading>
 * ```
 *
 * @example Responsive heading size
 * ```tsx
 * <Heading level={1} size={{ base: 'xl', md: '2xl', lg: '3xl' }}>
 *   Responsive Title
 * </Heading>
 * ```
 *
 * @example Uppercase accent heading
 * ```tsx
 * <Heading level={2} variant="accent">
 *   FEATURED WORK
 * </Heading>
 * ```
 *
 * @example Auto-sized heading (h1 defaults to 5xl, h2 to 2xl)
 * ```tsx
 * <Heading level={1}>
 *   Main Title
 * </Heading>
 * ```
 *
 * @example Fluid heading (scales smoothly between breakpoints)
 * All sizes now support fluid scaling with conservative ranges for smaller sizes
 * ```tsx
 * <Heading level={1} size="5xl" fluid>
 *   Hero Title (dramatic scaling)
 * </Heading>
 * <Heading level={5} size="md" fluid>
 *   Body Text (conservative scaling)
 * </Heading>
 * ```
 */
export function Heading({
  align,
  children,
  className,
  color = 'default',
  fluid = false,
  level,
  size,
  variant = 'default',
}: HeadingProps) {
  const Tag = `h${level}` as const

  // Default size based on level if not specified
  // All sizes now support fluid typography with appropriate scaling ranges
  const defaultSizes = ['5xl', '2xl', 'xl', 'lg', 'md', 'sm'] as const
  const defaultSize = defaultSizes[level - 1]
  const computedSize = size || defaultSize

  const isSizeResponsive = isResponsiveProp(computedSize)

  return (
    <Tag
      className={clsx(
        styles.heading,
        styles[`color-${color}`],
        !isSizeResponsive && styles[`size-${computedSize}`],
        isSizeResponsive && styles['size-responsive'],
        fluid && styles.fluid,
        !isSizeResponsive && fluid && styles[`size-${computedSize}-fluid`],
        styles[`variant-${variant}`],
        align && styles[`align-${align}`],
        className,
      )}
      style={
        isSizeResponsive
          ? ({
              '--heading-size-2xl':
                computedSize['2xl'] && getSizeValue(computedSize['2xl']),
              '--heading-size-3xl':
                computedSize['3xl'] && getSizeValue(computedSize['3xl']),
              '--heading-size-base': getSizeValue(computedSize.base),
              '--heading-size-lg':
                computedSize.lg && getSizeValue(computedSize.lg),
              '--heading-size-md':
                computedSize.md && getSizeValue(computedSize.md),
              '--heading-size-sm':
                computedSize.sm && getSizeValue(computedSize.sm),
              '--heading-size-xl':
                computedSize.xl && getSizeValue(computedSize.xl),
              '--heading-size-xs':
                computedSize.xs && getSizeValue(computedSize.xs),
            } satisfies React.CSSProperties)
          : undefined
      }>
      {children}
    </Tag>
  )
}

// Helper to map size names to CSS variables
function getSizeValue(size: HeadingSize): string {
  const sizeMap: Record<HeadingSize, string> = {
    '2xl': 'var(--font-size-2xl)',
    '3xl': 'var(--font-size-3xl)',
    '4xl': 'var(--font-size-4xl)',
    '5xl': 'var(--font-size-5xl)',
    lg: 'var(--font-size-lg)',
    md: 'var(--font-size-md)',
    sm: 'var(--font-size-sm)',
    xl: 'var(--font-size-xl)',
    xs: 'var(--font-size-xs)',
  }
  return sizeMap[size]
}
