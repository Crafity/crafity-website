import { ReactNode } from 'react'

/**
 * Standard breakpoint names matching breakpoints.css
 *
 * - base: 0px+ (mobile-first default)
 * - xs: 640px+ (extra small)
 * - sm: 640px+ (small)
 * - md: 768px+ (medium/tablet)
 * - lg: 1024px+ (large/laptop)
 * - xl: 1280px+ (extra large/desktop)
 * - 2xl: 1536px+ (2x extra large)
 * - 3xl: 1920px+ (3x extra large/ultra wide)
 */
export type Breakpoint =
  | 'base'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'

/**
 * Ordered list of breakpoints (mobile-first)
 */
export const BREAKPOINTS: readonly Breakpoint[] = [
  'base',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
] as const

/**
 * Generic responsive prop type - value can change per breakpoint
 *
 * @example
 * ```tsx
 * // Static value (no responsive behavior)
 * <Stack space="medium" />
 *
 * // Responsive value (changes per breakpoint)
 * <Stack space={{ base: 'small', md: 'medium', lg: 'large' }} />
 * ```
 */
export type ResponsiveProp<T> = {
  '2xl'?: T
  '3xl'?: T
  base: T // Required - mobile-first fallback
  lg?: T
  md?: T
  sm?: T
  xl?: T
  xs?: T
}

/**
 * Responsive text content type
 * Use specifically for text/ReactNode that changes per breakpoint
 */
export type ResponsiveContent = ResponsiveProp<ReactNode>

/**
 * Helper to check if a prop is responsive
 *
 * @example
 * ```tsx
 * const space = props.space
 * if (isResponsiveProp(space)) {
 *   // Handle responsive prop
 * } else {
 *   // Handle static value
 * }
 * ```
 */
export function isResponsiveProp<T>(
  value: T | ResponsiveProp<T>,
): value is ResponsiveProp<T> {
  return typeof value === 'object' && value !== null && 'base' in value
}

/**
 * Get active breakpoints from a responsive prop
 * Returns only breakpoints that have defined values
 *
 * @example
 * ```tsx
 * const breakpoints = getActiveBreakpoints({ base: 'small', md: 'large' })
 * // Returns: ['base', 'md']
 * ```
 */
export function getActiveBreakpoints<T>(prop: ResponsiveProp<T>): Breakpoint[] {
  return BREAKPOINTS.filter(bp => prop[bp] !== undefined)
}

/**
 * Map spacing size names to spacing token numbers
 * Used by Stack and Grid components
 */
export function getSpacingToken(
  size: 'small' | 'medium' | 'large' | 'xlarge',
): string {
  const map = {
    large: '16',
    medium: '12',
    small: '8',
    xlarge: '24',
  }
  return map[size]
}

/**
 * Map gap size names to spacing tokens (for Grid)
 * Small/Medium/Large have different responsive values
 */
export function getGapToken(
  size: 'small' | 'medium' | 'large',
  isBase: boolean,
): string {
  if (isBase) {
    const baseMap = {
      large: '8',
      medium: '6',
      small: '4',
    }
    return baseMap[size]
  }
  // md and above
  const mdMap = {
    large: '12',
    medium: '8',
    small: '6',
  }
  return mdMap[size]
}
