import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './divider.module.css'

interface DividerProps {
  className?: string
  spacing?: 'none' | 'small' | 'medium' | 'large'
  variant?: 'default' | 'gradient'
}

/**
 * Divider component for visual separation between content.
 *
 * Follows industry best practices from Material-UI Divider and Chakra Divider.
 *
 * @example Default divider
 * ```tsx
 * <Divider />
 * ```
 *
 * @example Gradient accent divider with large spacing
 * ```tsx
 * <Divider variant="gradient" spacing="large" />
 * ```
 */
export function Divider({
  className,
  spacing = 'medium',
  variant = 'default',
}: DividerProps) {
  return (
    <hr
      className={clsx(
        styles.divider,
        styles[`spacing-${spacing}`],
        styles[`variant-${variant}`],
        className,
      )}
    />
  )
}
