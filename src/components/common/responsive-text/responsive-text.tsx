import { clsx } from 'clsx'

// eslint-disable-next-line css-modules/no-unused-class
import styles from './responsive-text.module.css'

import {
  getActiveBreakpoints,
  getHideAtBreakpoint,
  ResponsiveContent,
} from '@/types/responsive'

interface ResponsiveTextProps {
  className?: string
  text: ResponsiveContent
}

/**
 * ResponsiveText component for displaying different text content at different breakpoints.
 *
 * Uses CSS display rules to show/hide content based on viewport width.
 * Follows mobile-first cascade - only define breakpoints where content changes.
 *
 * @example Basic usage
 * ```tsx
 * <ResponsiveText
 *   text={{
 *     base: "Mobile text",
 *     md: "Desktop text with more details"
 *   }}
 * />
 * ```
 *
 * @example Multiple breakpoints
 * ```tsx
 * <ResponsiveText
 *   text={{
 *     base: "Build software",
 *     md: "Build exceptional software",
 *     lg: "Build exceptional software for ambitious companies"
 *   }}
 * />
 * ```
 */
export function ResponsiveText({ className, text }: ResponsiveTextProps) {
  const activeBreakpoints = getActiveBreakpoints(text)

  return (
    <>
      {activeBreakpoints.map(breakpoint => {
        const hideAt = getHideAtBreakpoint(breakpoint, activeBreakpoints)
        return (
          <span
            key={breakpoint}
            className={clsx(styles[`text-${breakpoint}`], className)}
            data-hide-at={hideAt}>
            {text[breakpoint]}
          </span>
        )
      })}
    </>
  )
}
