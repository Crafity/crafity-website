import { Children, Fragment, ReactNode } from 'react'
import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './stack.module.css'

import {
  getSpacingToken,
  isResponsiveProp,
  ResponsiveProp,
} from '@/types/responsive'

type SpaceSize = 'small' | 'medium' | 'large' | 'xlarge'

interface StackProps {
  children: ReactNode
  className?: string
  dividers?: boolean
  space?: SpaceSize | ResponsiveProp<SpaceSize>
}

/**
 * Stack component for vertical spacing between elements.
 *
 * Follows industry best practices from Chakra UI Stack and Material-UI Stack.
 * Optionally renders dividers between children.
 *
 * @example Static spacing
 * ```tsx
 * <Stack space="large">
 *   <Heading level={2}>Title</Heading>
 *   <Text>First paragraph</Text>
 *   <Text>Second paragraph</Text>
 * </Stack>
 * ```
 *
 * @example Responsive spacing
 * ```tsx
 * <Stack space={{ base: 'small', md: 'medium', lg: 'large' }}>
 *   <Section1 />
 *   <Section2 />
 * </Stack>
 * ```
 *
 * @example With dividers
 * ```tsx
 * <Stack space="medium" dividers>
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
  space = 'medium',
}: StackProps) {
  const childArray = Children.toArray(children)
  const isSpaceResponsive = isResponsiveProp(space)

  return (
    <div
      className={clsx(
        styles.stack,
        !isSpaceResponsive && styles[space],
        isSpaceResponsive && styles['space-responsive'],
        className,
      )}
      style={
        isSpaceResponsive
          ? ({
              '--stack-gap-2xl':
                space['2xl'] &&
                `var(--spacing-${getSpacingToken(space['2xl'])})`,
              '--stack-gap-3xl':
                space['3xl'] &&
                `var(--spacing-${getSpacingToken(space['3xl'])})`,
              '--stack-gap-base': `var(--spacing-${getSpacingToken(space.base)})`,
              '--stack-gap-lg':
                space.lg && `var(--spacing-${getSpacingToken(space.lg)})`,
              '--stack-gap-md':
                space.md && `var(--spacing-${getSpacingToken(space.md)})`,
              '--stack-gap-sm':
                space.sm && `var(--spacing-${getSpacingToken(space.sm)})`,
              '--stack-gap-xl':
                space.xl && `var(--spacing-${getSpacingToken(space.xl)})`,
              '--stack-gap-xs':
                space.xs && `var(--spacing-${getSpacingToken(space.xs)})`,
            } as React.CSSProperties)
          : undefined
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
