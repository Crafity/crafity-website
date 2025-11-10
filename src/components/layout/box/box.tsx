import { ReactNode } from 'react'

import {
  BoxSpacingProps,
  getSpacingVar,
  SpacingToken,
} from '@/components/layout/box/box-spacing'
import { isResponsiveProp, ResponsiveProp } from '@/types/responsive'

interface BoxProps extends BoxSpacingProps {
  children: ReactNode
  className?: string
}

/**
 * Box component for granular padding and margin control.
 *
 * @example Static spacing
 * <Box p={4} mb={8}>Content</Box>
 *
 * @example Responsive spacing
 * <Box p={{ base: 4, md: 8, lg: 12 }}>Content</Box>
 *
 * @example Directional spacing
 * <Box px={8} py={6}>Content</Box>
 */
export function Box({
  children,
  className,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
}: BoxProps) {
  const style: Record<string, string> = {}

  // Helper to apply spacing value or responsive values
  const applySpacing = (
    cssProperty: string,
    value: SpacingToken | ResponsiveProp<SpacingToken> | undefined,
  ) => {
    if (value === undefined) return

    if (isResponsiveProp(value)) {
      // Responsive - use CSS custom properties
      const varName = `--box-${cssProperty}`
      style[cssProperty] = `var(${varName}-base)`

      style[`${varName}-base`] = getSpacingVar(value.base)
      if (value.xs) style[`${varName}-xs`] = getSpacingVar(value.xs)
      if (value.sm) style[`${varName}-sm`] = getSpacingVar(value.sm)
      if (value.md) style[`${varName}-md`] = getSpacingVar(value.md)
      if (value.lg) style[`${varName}-lg`] = getSpacingVar(value.lg)
      if (value.xl) style[`${varName}-xl`] = getSpacingVar(value.xl)
      if (value['2xl']) style[`${varName}-2xl`] = getSpacingVar(value['2xl'])
      if (value['3xl']) style[`${varName}-3xl`] = getSpacingVar(value['3xl'])
    } else {
      // Static - direct value
      style[cssProperty] = getSpacingVar(value)
    }
  }

  // Apply padding (precedence: p < px/py < pt/pr/pb/pl)
  if (p !== undefined) applySpacing('padding', p)

  if (px !== undefined) {
    applySpacing('padding-left', px)
    applySpacing('padding-right', px)
  }
  if (py !== undefined) {
    applySpacing('padding-top', py)
    applySpacing('padding-bottom', py)
  }

  if (pt !== undefined) applySpacing('padding-top', pt)
  if (pr !== undefined) applySpacing('padding-right', pr)
  if (pb !== undefined) applySpacing('padding-bottom', pb)
  if (pl !== undefined) applySpacing('padding-left', pl)

  // Apply margin (precedence: m < mx/my < mt/mr/mb/ml)
  if (m !== undefined) applySpacing('margin', m)

  if (mx !== undefined) {
    applySpacing('margin-left', mx)
    applySpacing('margin-right', mx)
  }
  if (my !== undefined) {
    applySpacing('margin-top', my)
    applySpacing('margin-bottom', my)
  }

  if (mt !== undefined) applySpacing('margin-top', mt)
  if (mr !== undefined) applySpacing('margin-right', mr)
  if (mb !== undefined) applySpacing('margin-bottom', mb)
  if (ml !== undefined) applySpacing('margin-left', ml)

  return (
    <div className={className} style={style satisfies React.CSSProperties}>
      {children}
    </div>
  )
}
