import { ReactNode } from 'react'
import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './text.module.css'

interface TextProps {
  align?: 'left' | 'center' | 'right'
  children: ReactNode
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  variant?: 'body' | 'caption' | 'label' | 'code'
  weight?: 'normal' | 'medium' | 'bold'
}

/**
 * Text component for body text, captions, and labels.
 *
 * Follows industry best practices from Chakra UI Text and Shopify Polaris Text.
 * Provides consistent typography with semantic variants.
 *
 * @example Body paragraph
 * ```tsx
 * <Text>
 *   This is a standard paragraph with secondary color.
 * </Text>
 * ```
 *
 * @example Caption text
 * ```tsx
 * <Text variant="caption" color="tertiary" size="sm">
 *   Last updated: November 2025
 * </Text>
 * ```
 *
 * @example Bold label
 * ```tsx
 * <Text variant="label" weight="bold" color="primary">
 *   Company Name:
 * </Text>
 * ```
 */
export function Text({
  align,
  children,
  className,
  color = 'secondary',
  size = 'base',
  variant = 'body',
  weight = 'normal',
}: TextProps) {
  return (
    <p
      className={clsx(
        styles.text,
        styles[`size-${size}`],
        styles[`color-${color}`],
        styles[`variant-${variant}`],
        styles[`weight-${weight}`],
        align && styles[`align-${align}`],
        className,
      )}>
      {children}
    </p>
  )
}
