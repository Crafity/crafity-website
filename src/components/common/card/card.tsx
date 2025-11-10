import { CSSProperties, ReactNode } from 'react'
import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './card.module.css'

import { Box } from '@/components/layout/box/box'
import {
  BoxSpacingProps,
  SpacingToken,
} from '@/components/layout/box/box-spacing'
import { ResponsiveProp } from '@/types/responsive'

interface CardProps extends BoxSpacingProps {
  borderColor?: 'default' | 'primary' | 'secondary'
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
  // Box spacing props
  borderColor = 'default',
  borderSide = 'all',
  borderWidth = 'medium',
  children,
  className,
  glow = false,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  p,
  // Card props
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  radius = 'medium',
  style,
  variant = 'filled',
}: CardProps) {
  // Default padding (backwards compatible with previous Card)
  const defaultPadding: ResponsiveProp<SpacingToken> = { base: 4, md: 6 }

  return (
    <div
      className={clsx(
        styles.card,
        styles[`variant-${variant}`],
        styles[`border-side-${borderSide}`],
        styles[`border-width-${borderWidth}`],
        styles[`border-color-${borderColor}`],
        styles[`radius-${radius}`],
        glow && styles.glow,
        className,
      )}
      style={style}>
      <Box
        m={m}
        mb={mb}
        ml={ml}
        mr={mr}
        mt={mt}
        mx={mx}
        my={my}
        p={p ?? defaultPadding}
        pb={pb}
        pl={pl}
        pr={pr}
        pt={pt}
        px={px}
        py={py}>
        {children}
      </Box>
    </div>
  )
}
