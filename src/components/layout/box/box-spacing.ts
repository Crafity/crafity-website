import { ResponsiveProp } from '@/types/responsive'

/**
 * Spacing token scale - Maps to CSS --spacing-* tokens
 * Numbers are token names, NOT pixels (8 = --spacing-8 = 32px)
 */
export type SpacingToken =
  | 0
  | 0.1
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96

/**
 * Convert spacing token to CSS custom property
 * Handles fractional tokens (0.1 → --spacing-0-1)
 */
export function getSpacingVar(token: SpacingToken): string {
  const cssToken = String(token).replace('.', '-')
  return `var(--spacing-${cssToken})`
}

/**
 * Common spacing values (optional convenience)
 */
export const COMMON_SPACING = {
  large: 16,
  medium: 12,
  minimal: 2,
  none: 0,
  small: 8,
  tiny: 4,
  xlarge: 24,
} as const

/**
 * Spacing props interface for Box component and components that expose spacing.
 * Follows Chakra UI / Material UI naming conventions.
 */
export interface BoxSpacingProps {
  // Margin
  m?: SpacingToken | ResponsiveProp<SpacingToken>
  mb?: SpacingToken | ResponsiveProp<SpacingToken>
  ml?: SpacingToken | ResponsiveProp<SpacingToken>
  mr?: SpacingToken | ResponsiveProp<SpacingToken>
  mt?: SpacingToken | ResponsiveProp<SpacingToken>
  mx?: SpacingToken | ResponsiveProp<SpacingToken>
  my?: SpacingToken | ResponsiveProp<SpacingToken>
  // Padding
  p?: SpacingToken | ResponsiveProp<SpacingToken>
  pb?: SpacingToken | ResponsiveProp<SpacingToken>
  pl?: SpacingToken | ResponsiveProp<SpacingToken>
  pr?: SpacingToken | ResponsiveProp<SpacingToken>
  pt?: SpacingToken | ResponsiveProp<SpacingToken>
  px?: SpacingToken | ResponsiveProp<SpacingToken>
  py?: SpacingToken | ResponsiveProp<SpacingToken>
}
