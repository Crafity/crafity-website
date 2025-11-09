import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './responsive-text.module.css'

import { getActiveBreakpoints, ResponsiveContent } from '@/types/responsive'

interface ResponsiveTextProps {
  className?: string
  text: ResponsiveContent
}

/**
 * ResponsiveText component for displaying different text content at different breakpoints.
 *
 * @example
 * ```tsx
 * <ResponsiveText
 *   text={{
 *     base: "Mobile text",
 *     md: "Desktop text with more details"
 *   }}
 * />
 * ```
 */
export function ResponsiveText({ className, text }: ResponsiveTextProps) {
  const activeBreakpoints = getActiveBreakpoints(text)

  return (
    <>
      {activeBreakpoints.map(breakpoint => (
        <span
          key={breakpoint}
          className={clsx(styles[`text-${breakpoint}`], className)}>
          {text[breakpoint]}
        </span>
      ))}
    </>
  )
}
