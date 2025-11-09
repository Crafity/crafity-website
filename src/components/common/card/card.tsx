import { CSSProperties, ReactNode } from 'react'
import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './card.module.css'

interface CardProps {
  borderSide?: 'all' | 'left' | 'none'
  borderWidth?: 'thin' | 'medium' | 'accent' | 'accent-thin'
  children: ReactNode
  className?: string
  glow?: boolean
  radius?: 'none' | 'small' | 'medium' | 'large'
  style?: CSSProperties
  variant?: 'filled' | 'outlined' | 'elevated' | 'transparent'
}

export function Card({
  borderSide = 'all',
  borderWidth = 'medium',
  children,
  className,
  glow = false,
  radius = 'medium',
  style,
  variant = 'filled',
}: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        styles[`variant-${variant}`],
        styles[`border-side-${borderSide}`],
        styles[`border-width-${borderWidth}`],
        styles[`radius-${radius}`],
        glow && styles.glow,
        className,
      )}
      style={style}>
      {children}
    </div>
  )
}
