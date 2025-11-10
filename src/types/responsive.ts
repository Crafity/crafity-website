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
 * Get the breakpoint name where a specific breakpoint should be hidden
 * Returns the next defined breakpoint in the sequence, or undefined if it's the last one
 *
 * @example
 * ```tsx
 * // With { base: '...', md: '...' }
 * getHideAtBreakpoint('base', ['base', 'md']) // Returns: 'md'
 * getHideAtBreakpoint('md', ['base', 'md']) // Returns: undefined
 * ```
 */
export function getHideAtBreakpoint(
  currentBreakpoint: Breakpoint,
  activeBreakpoints: Breakpoint[],
): Breakpoint | undefined {
  const currentIndex = activeBreakpoints.indexOf(currentBreakpoint)
  return activeBreakpoints[currentIndex + 1]
}
