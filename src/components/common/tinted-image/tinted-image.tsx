import { CSSProperties } from 'react'
import { clsx } from 'clsx'

import styles from './tinted-image.module.css'

export interface TintedImageProps {
  alt: string
  className?: string
  filters?: {
    brightness?: number
    contrast?: number
    invert?: boolean
  }
  height?: string | number
  src: string
  tintColor?: string
  width?: string | number
}

export function TintedImage({
  alt,
  className,
  // filters = {},
  height = '80px',
  src,
  // tintColor = 'var(--accent-primary)',
  width = '100%',
}: TintedImageProps) {
  // const { brightness = 1.2, contrast = 1.1, invert = false } = filters

  // Build filter string
  // const filterString = [
  //   invert && 'invert(1)',
  //   'grayscale(100%)',
  //   `brightness(${brightness})`,
  //   `contrast(${contrast})`,
  // ]
  //   .filter(Boolean)
  //   .join(' ')

  const filterString =
    'grayscale(1) sepia(1) saturate(2) hue-rotate(187deg) brightness(0.9)'

  const containerStyle: CSSProperties = {
    height,
    width,
  }

  const imageStyle: CSSProperties = {
    filter: filterString,
  }

  // const overlayStyle: CSSProperties = {
  //   background: tintColor,
  // }

  return (
    <div className={clsx(styles.container, className)} style={containerStyle}>
      <img alt={alt} className={styles.image} src={src} style={imageStyle} />
      {/* <div className={styles.overlay} style={overlayStyle} /> */}
    </div>
  )
}
