import { ReactNode } from 'react'
import { Link as RouterLink } from '@tanstack/react-router'

import styles from './link.module.css'

interface LinkProps {
  children: ReactNode
  className?: string
  href: string
  unstyled?: boolean
}

function isExternalLink(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://')
}

function isAnchorLink(href: string): boolean {
  return href.startsWith('#')
}

function isProtocolLink(href: string): boolean {
  return href.startsWith('mailto:') || href.startsWith('tel:')
}

export function Link({ children, className, href, unstyled }: LinkProps) {
  const linkClassName = unstyled
    ? className
    : [styles.link, className].filter(Boolean).join(' ')

  // External links (http/https)
  if (isExternalLink(href)) {
    return (
      <a
        className={linkClassName}
        href={href}
        rel="noopener noreferrer"
        target="_blank">
        {children}
      </a>
    )
  }

  // Anchor links (#)
  if (isAnchorLink(href)) {
    return (
      <a className={linkClassName} href={href}>
        {children}
      </a>
    )
  }

  // Protocol links (mailto:, tel:)
  if (isProtocolLink(href)) {
    return (
      <a className={linkClassName} href={href}>
        {children}
      </a>
    )
  }

  // Internal routes (TanStack Router)
  return (
    <RouterLink className={linkClassName} to={href}>
      {children}
    </RouterLink>
  )
}
