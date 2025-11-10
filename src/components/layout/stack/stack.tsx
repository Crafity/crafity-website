import { Children, Fragment, ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './stack.module.css'

import {
  getSpacingVar,
  SpacingToken,
} from '@/components/layout/box/box-spacing'
import { isResponsiveProp, ResponsiveProp } from '@/types/responsive'

interface StackProps {
  children: ReactNode
  className?: string
  dividers?: boolean
  gap?: SpacingToken | ResponsiveProp<SpacingToken>
}

/**
 * Stack component for vertical spacing between elements.
 *
 * Follows industry best practices from Chakra UI Stack and Material-UI Stack.
 * Optionally renders dividers between children.
 *
 * @example Static spacing
 * ```tsx
 * <Stack gap={16}>
 *   <Heading level={2}>Title</Heading>
 *   <Text>First paragraph</Text>
 *   <Text>Second paragraph</Text>
 * </Stack>
 * ```
 *
 * @example Responsive spacing
 * ```tsx
 * <Stack gap={{ base: 8, md: 12, lg: 16 }}>
 *   <Section1 />
 *   <Section2 />
 * </Stack>
 * ```
 *
 * @example With dividers
 * ```tsx
 * <Stack gap={12} dividers>
 *   <Section1 />
 *   <Section2 />
 *   <Section3 />
 * </Stack>
 * ```
 */
export function Stack({
  children,
  className,
  dividers = false,
  gap = 0,
}: StackProps) {
  const childArray = Children.toArray(children)
  const isSpaceResponsive = isResponsiveProp(gap)

  return (
    <div
      className={clsx(
        styles.stack,
        isSpaceResponsive && styles['space-responsive'],
        className,
      )}
      style={
        (isSpaceResponsive
          ? ({
              '--stack-gap-2xl': gap['2xl'] && getSpacingVar(gap['2xl']),
              '--stack-gap-3xl': gap['3xl'] && getSpacingVar(gap['3xl']),
              '--stack-gap-base': getSpacingVar(gap.base),
              '--stack-gap-lg': gap.lg && getSpacingVar(gap.lg),
              '--stack-gap-md': gap.md && getSpacingVar(gap.md),
              '--stack-gap-sm': gap.sm && getSpacingVar(gap.sm),
              '--stack-gap-xl': gap.xl && getSpacingVar(gap.xl),
              '--stack-gap-xs': gap.xs && getSpacingVar(gap.xs),
            } satisfies React.CSSProperties)
          : {
              '--stack-gap': getSpacingVar(gap),
            }) satisfies React.CSSProperties
      }>
      {dividers
        ? childArray.map((child, index) => (
            <Fragment key={index}>
              {child}
              {index < childArray.length - 1 && (
                <hr className={styles.divider} />
              )}
            </Fragment>
          ))
        : children}
    </div>
  )
}
