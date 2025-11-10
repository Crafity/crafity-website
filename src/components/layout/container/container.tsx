import { ReactNode } from 'react'
import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './container.module.css'

import { isResponsiveProp, ResponsiveProp } from '@/types/responsive'

type ContainerSize = 'narrow' | 'base' | 'comfortable' | 'wide' | 'full'

interface ContainerProps {
  children: ReactNode
  className?: string
  padding?: boolean
  size?: ContainerSize | ResponsiveProp<ContainerSize>
}

/**
 * Container component for horizontal centering with max-width constraints.
 *
 * Follows industry best practices from Material-UI Container and Chakra Container.
 *
 * @example Static size
 * ```tsx
 * <Container size="base">
 *   <p>Centered content with 900px max-width</p>
 * </Container>
 * ```
 *
 * @example Responsive size
 * ```tsx
 * <Container size={{ base: 'full', md: 'comfortable', lg: 'base' }}>
 *   <p>Responsive container width</p>
 * </Container>
 * ```
 *
 * @example Without padding (for full-bleed content)
 * ```tsx
 * <Container size="base" padding={false}>
 *   <img src="hero.jpg" alt="Full bleed within constraint" />
 * </Container>
 * ```
 */
export function Container({
  children,
  className,
  padding = true,
  size = 'base',
}: ContainerProps) {
  const isSizeResponsive = isResponsiveProp(size)

  return (
    <div
      className={clsx(
        styles.container,
        !isSizeResponsive && styles[size],
        isSizeResponsive && styles['size-responsive'],
        !padding && styles['no-padding'],
        className,
      )}
      style={
        isSizeResponsive
          ? ({
              '--container-size-2xl': size['2xl'] && getMaxWidth(size['2xl']),
              '--container-size-3xl': size['3xl'] && getMaxWidth(size['3xl']),
              '--container-size-base': getMaxWidth(size.base),
              '--container-size-lg': size.lg && getMaxWidth(size.lg),
              '--container-size-md': size.md && getMaxWidth(size.md),
              '--container-size-sm': size.sm && getMaxWidth(size.sm),
              '--container-size-xl': size.xl && getMaxWidth(size.xl),
              '--container-size-xs': size.xs && getMaxWidth(size.xs),
            } as React.CSSProperties)
          : undefined
      }>
      {children}
    </div>
  )
}

// Helper to map size names to max-width values
function getMaxWidth(size: ContainerSize): string {
  const sizeMap: Record<ContainerSize, string> = {
    base: '900px',
    comfortable: '1100px',
    full: '100%',
    narrow: '700px',
    wide: '1400px',
  }
  return sizeMap[size]
}
