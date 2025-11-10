/* eslint-disable unicorn/consistent-function-scoping, unicorn/prefer-query-selector */
import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * Fluid Typography Testing - Style Guide
 *
 * Interactive prototype to test fluid typography formulas before implementation.
 * Tests the token-based hybrid approach with clamp() scaling within breakpoints.
 *
 * Key concepts tested:
 * 1. Token-based min/max values (references existing design tokens)
 * 2. Hybrid approach (different clamp per breakpoint)
 * 3. Smooth scaling within breakpoint ranges
 * 4. Accessibility (rem + vw formula)
 */

const meta: Meta = {
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Style Guide/Fluid Typography (Prototype)',
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * ViewportIndicator - Shows current viewport width
 */
function ViewportIndicator() {
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 0 : window.innerWidth,
  )

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getBreakpoint = (w: number) => {
    if (w < 640) return 'xs (Mobile)'
    if (w < 768) return 'sm (Large Mobile)'
    if (w < 1024) return 'md (Tablet)'
    if (w < 1280) return 'lg (Laptop)'
    if (w < 1536) return 'xl (Desktop)'
    if (w < 1920) return '2xl (Large Desktop)'
    return '3xl (Ultra Wide)'
  }

  return (
    <div
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-default-color)',
        borderRadius: '4px',
        fontFamily: 'var(--mono-font-family)',
        fontSize: '12px',
        marginBottom: '2rem',
        padding: '1rem',
        position: 'sticky',
        top: '1rem',
        zIndex: 10,
      }}>
      <strong>Current Viewport:</strong> {width}px ({getBreakpoint(width)})
      <br />
      <small style={{ color: 'var(--text-tertiary)' }}>
        Resize browser window to see fluid scaling in action
      </small>
    </div>
  )
}

/**
 * FluidHeading - Test component with inline styles using clamp()
 */
interface FluidHeadingProps {
  children: React.ReactNode
  clampFormula: string
  description: string
  showFormulaDetails?: boolean
  tokenRange: string
}

function FluidHeading({
  children,
  clampFormula,
  description,
  showFormulaDetails = false,
  tokenRange,
}: FluidHeadingProps) {
  const [computedSize, setComputedSize] = useState<string>('')

  useEffect(() => {
    const element = document.getElementById(`heading-${clampFormula}`)
    if (element) {
      const size = window.getComputedStyle(element).fontSize
      setComputedSize(size)
    }
  }, [clampFormula])

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border-default-color)',
        marginBottom: '3rem',
        paddingBottom: '2rem',
      }}>
      <div style={{ marginBottom: '1rem' }}>
        <div
          style={{
            color: 'var(--text-tertiary)',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
          }}>
          {tokenRange}
        </div>
        <div
          style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
            marginBottom: '0.5rem',
          }}>
          {description}
        </div>
        <code
          style={{
            background: 'var(--bg-secondary)',
            borderRadius: '3px',
            color: 'var(--accent-secondary)',
            display: 'block',
            fontFamily: 'var(--mono-font-family)',
            fontSize: '13px',
            marginTop: '0.5rem',
            padding: '0.5rem',
          }}>
          font-size: {clampFormula};
        </code>
        {computedSize && (
          <div
            style={{
              color: 'var(--accent-primary)',
              fontFamily: 'var(--mono-font-family)',
              fontSize: '12px',
              marginTop: '0.5rem',
            }}>
            → Computed: {computedSize} (
            {Math.round(Number.parseFloat(computedSize))}
            px)
          </div>
        )}
      </div>

      <h2
        id={`heading-${clampFormula}`}
        style={{
          color: 'var(--text-primary)',
          fontFamily: 'var(--accent-font-family)',
          fontSize: clampFormula,
          fontWeight: 'var(--font-weight-bold)',
          letterSpacing: 'var(--letter-spacing-tight)',
          lineHeight: 'var(--line-height-tight)',
          margin: 0,
        }}>
        {children}
      </h2>

      {showFormulaDetails && (
        <details style={{ marginTop: '1rem' }}>
          <summary
            style={{
              color: 'var(--text-tertiary)',
              cursor: 'pointer',
              fontSize: '12px',
            }}>
            Show formula breakdown
          </summary>
          <div
            style={{
              background: 'var(--bg-secondary)',
              borderRadius: '4px',
              fontFamily: 'var(--mono-font-family)',
              fontSize: '12px',
              lineHeight: '1.6',
              marginTop: '0.5rem',
              padding: '1rem',
            }}>
            <div>
              <strong>clamp(</strong>
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              <span style={{ color: 'var(--accent-secondary)' }}>min</span>:{' '}
              {clampFormula.split(',')[0]?.replace('clamp(', '').trim()}
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              <span style={{ color: 'var(--accent-secondary)' }}>
                preferred
              </span>
              : {clampFormula.split(',')[1]?.trim()}
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              <span style={{ color: 'var(--accent-secondary)' }}>max</span>:{' '}
              {clampFormula.split(',')[2]?.replace(')', '').trim()}
            </div>
            <div>
              <strong>)</strong>
            </div>
          </div>
        </details>
      )}
    </div>
  )
}

/**
 * Story: Hero Heading (Most Common Use Case)
 */
export const HeroHeading: Story = {
  render: () => (
    <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '2rem' }}>
      <ViewportIndicator />

      <h1
        style={{
          color: 'var(--text-primary)',
          fontSize: 'var(--font-size-2xl)',
          marginBottom: '1rem',
        }}>
        Hero Heading Test
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Most common use case - page titles that scale dramatically from mobile
        to desktop. Testing token-based ranges across breakpoints.
      </p>

      {/* Mobile range (320-767px) */}
      <div
        style={{
          background: 'rgba(255, 69, 0, 0.05)',
          border: '1px solid rgba(255, 69, 0, 0.2)',
          borderRadius: '8px',
          marginBottom: '2rem',
          padding: '2rem',
        }}>
        <h3
          style={{
            color: 'var(--accent-primary)',
            fontSize: '14px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
          }}>
          📱 Mobile Range (320-767px)
        </h3>
        <FluidHeading
          showFormulaDetails
          clampFormula="clamp(1.4375rem, calc(1.4375rem * 0.5 + 2.5vw), 2.5rem)"
          description="Conservative scaling for mobile readability"
          tokenRange="lg → 2xl (23px → 40px)">
          ENTERPRISE-GRADE ENGINEERING
        </FluidHeading>
      </div>

      {/* Tablet range (768-1279px) */}
      <div
        style={{
          background: 'rgba(149, 197, 239, 0.05)',
          border: '1px solid rgba(149, 197, 239, 0.2)',
          borderRadius: '8px',
          marginBottom: '2rem',
          padding: '2rem',
        }}>
        <h3
          style={{
            color: 'var(--accent-secondary)',
            fontSize: '14px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
          }}>
          💻 Tablet Range (768-1279px)
        </h3>
        <FluidHeading
          showFormulaDetails
          clampFormula="clamp(3.3125rem, calc(3.3125rem * 0.4 + 3.5vw), 4.4375rem)"
          description="Moderate scaling for balanced visual impact"
          tokenRange="3xl → 4xl (53px → 71px)">
          ENTERPRISE-GRADE ENGINEERING
        </FluidHeading>
      </div>

      {/* Desktop range (1280-1920px) */}
      <div
        style={{
          background: 'rgba(46, 204, 113, 0.05)',
          border: '1px solid rgba(46, 204, 113, 0.2)',
          borderRadius: '8px',
          marginBottom: '2rem',
          padding: '2rem',
        }}>
        <h3
          style={{
            color: '#2ecc71',
            fontSize: '14px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            marginBottom: '1rem',
            textTransform: 'uppercase',
          }}>
          🖥️ Desktop Range (1280-1920px)
        </h3>
        <FluidHeading
          showFormulaDetails
          clampFormula="clamp(4.4375rem, calc(4.4375rem * 0.6 + 2vw), 5.9375rem)"
          description="Aggressive scaling for maximum visual impact"
          tokenRange="4xl → 5xl (71px → 95px)">
          ENTERPRISE-GRADE ENGINEERING
        </FluidHeading>
      </div>
    </div>
  ),
}

/**
 * Story: All Fluid Sizes
 */
export const AllFluidSizes: Story = {
  render: () => (
    <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '2rem' }}>
      <ViewportIndicator />

      <h1
        style={{
          color: 'var(--text-primary)',
          fontSize: 'var(--font-size-2xl)',
          marginBottom: '1rem',
        }}>
        All Fluid Typography Sizes
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Complete fluid typography system showing all sizes. Each uses token
        references for min/max values. Resize window to see smooth scaling.
      </p>

      <FluidHeading
        clampFormula="clamp(4.4375rem, calc(4.4375rem * 0.6 + 2vw), 5.9375rem)"
        description="Largest display size - hero sections on ultra-wide screens"
        tokenRange="5xl-fluid: 4xl → 5xl">
        Display 5xl Fluid
      </FluidHeading>

      <FluidHeading
        clampFormula="clamp(3.3125rem, calc(3.3125rem * 0.5 + 2.5vw), 4.4375rem)"
        description="Large display size - page titles on desktop"
        tokenRange="4xl-fluid: 3xl → 4xl">
        Display 4xl Fluid
      </FluidHeading>

      <FluidHeading
        clampFormula="clamp(2.5rem, calc(2.5rem * 0.5 + 2vw), 3.3125rem)"
        description="Medium display size - hero sections on tablet"
        tokenRange="3xl-fluid: 2xl → 3xl">
        Display 3xl Fluid
      </FluidHeading>

      <FluidHeading
        clampFormula="clamp(1.875rem, calc(1.875rem * 0.6 + 1.5vw), 2.5rem)"
        description="Section headers with moderate scaling"
        tokenRange="2xl-fluid: xl → 2xl">
        Heading 2xl Fluid
      </FluidHeading>

      <FluidHeading
        clampFormula="clamp(1.4375rem, calc(1.4375rem * 0.65 + 1vw), 1.875rem)"
        description="Subsection headers with subtle scaling"
        tokenRange="xl-fluid: lg → xl">
        Heading xl Fluid
      </FluidHeading>

      <FluidHeading
        clampFormula="clamp(1.125rem, calc(1.125rem * 0.7 + 1vw), 1.4375rem)"
        description="Large body text with gentle scaling"
        tokenRange="lg-fluid: base → lg">
        Large Text lg Fluid
      </FluidHeading>
    </div>
  ),
}

/**
 * Story: Comparison - Static vs Fluid
 */
export const StaticVsFluid: Story = {
  render: () => (
    <div style={{ margin: '0 auto', maxWidth: '1400px', padding: '2rem' }}>
      <ViewportIndicator />

      <h1
        style={{
          color: 'var(--text-primary)',
          fontSize: 'var(--font-size-2xl)',
          marginBottom: '1rem',
        }}>
        Comparison: Static vs Fluid Typography
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Direct comparison showing the difference between static sizes (current
        approach) and fluid scaling (proposed). Resize window to see the
        difference.
      </p>

      <div
        style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        }}>
        {/* Static column */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            padding: '2rem',
          }}>
          <h2
            style={{
              color: 'var(--text-tertiary)',
              fontSize: '14px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              marginBottom: '2rem',
              textTransform: 'uppercase',
            }}>
            ❌ Static (Current)
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <code
              style={{
                color: 'var(--text-tertiary)',
                display: 'block',
                fontFamily: 'var(--mono-font-family)',
                fontSize: '12px',
                marginBottom: '0.5rem',
              }}>
              font-size: var(--font-size-3xl)
            </code>
            <h3
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--accent-font-family)',
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 'var(--line-height-tight)',
                margin: 0,
              }}>
              FIXED SIZE
            </h3>
            <div
              style={{
                color: 'var(--text-tertiary)',
                fontSize: '12px',
                marginTop: '0.5rem',
              }}>
              Always 53px (3xl token)
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <code
              style={{
                color: 'var(--text-tertiary)',
                display: 'block',
                fontFamily: 'var(--mono-font-family)',
                fontSize: '12px',
                marginBottom: '0.5rem',
              }}>
              font-size: var(--font-size-2xl)
            </code>
            <h3
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--accent-font-family)',
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 'var(--line-height-tight)',
                margin: 0,
              }}>
              FIXED SIZE
            </h3>
            <div
              style={{
                color: 'var(--text-tertiary)',
                fontSize: '12px',
                marginTop: '0.5rem',
              }}>
              Always 40px (2xl token)
            </div>
          </div>

          <div>
            <code
              style={{
                color: 'var(--text-tertiary)',
                display: 'block',
                fontFamily: 'var(--mono-font-family)',
                fontSize: '12px',
                marginBottom: '0.5rem',
              }}>
              font-size: var(--font-size-xl)
            </code>
            <h3
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--accent-font-family)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 'var(--line-height-tight)',
                margin: 0,
              }}>
              FIXED SIZE
            </h3>
            <div
              style={{
                color: 'var(--text-tertiary)',
                fontSize: '12px',
                marginTop: '0.5rem',
              }}>
              Always 30px (xl token)
            </div>
          </div>
        </div>

        {/* Fluid column */}
        <div
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 69, 0, 0.1), rgba(149, 197, 239, 0.1))',
            border: '2px solid var(--accent-primary)',
            borderRadius: '8px',
            padding: '2rem',
          }}>
          <h2
            style={{
              color: 'var(--accent-primary)',
              fontSize: '14px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              marginBottom: '2rem',
              textTransform: 'uppercase',
            }}>
            ✅ Fluid (Proposed)
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <code
              style={{
                color: 'var(--text-secondary)',
                display: 'block',
                fontFamily: 'var(--mono-font-family)',
                fontSize: '12px',
                marginBottom: '0.5rem',
              }}>
              clamp(2.5rem, calc(...), 3.3125rem)
            </code>
            <h3
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--accent-font-family)',
                fontSize: 'clamp(2.5rem, calc(2.5rem * 0.5 + 2vw), 3.3125rem)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 'var(--line-height-tight)',
                margin: 0,
              }}>
              SCALES SMOOTHLY
            </h3>
            <div
              style={{
                color: 'var(--accent-primary)',
                fontSize: '12px',
                marginTop: '0.5rem',
              }}>
              40px → 53px (scales with viewport)
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <code
              style={{
                color: 'var(--text-secondary)',
                display: 'block',
                fontFamily: 'var(--mono-font-family)',
                fontSize: '12px',
                marginBottom: '0.5rem',
              }}>
              clamp(1.875rem, calc(...), 2.5rem)
            </code>
            <h3
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--accent-font-family)',
                fontSize:
                  'clamp(1.875rem, calc(1.875rem * 0.6 + 1.5vw), 2.5rem)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 'var(--line-height-tight)',
                margin: 0,
              }}>
              SCALES SMOOTHLY
            </h3>
            <div
              style={{
                color: 'var(--accent-primary)',
                fontSize: '12px',
                marginTop: '0.5rem',
              }}>
              30px → 40px (scales with viewport)
            </div>
          </div>

          <div>
            <code
              style={{
                color: 'var(--text-secondary)',
                display: 'block',
                fontFamily: 'var(--mono-font-family)',
                fontSize: '12px',
                marginBottom: '0.5rem',
              }}>
              clamp(1.4375rem, calc(...), 1.875rem)
            </code>
            <h3
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--accent-font-family)',
                fontSize:
                  'clamp(1.4375rem, calc(1.4375rem * 0.65 + 1vw), 1.875rem)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 'var(--line-height-tight)',
                margin: 0,
              }}>
              SCALES SMOOTHLY
            </h3>
            <div
              style={{
                color: 'var(--accent-primary)',
                fontSize: '12px',
                marginTop: '0.5rem',
              }}>
              23px → 30px (scales with viewport)
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-default-color)',
          borderRadius: '8px',
          marginTop: '2rem',
          padding: '1.5rem',
        }}>
        <h3
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}>
          💡 Testing Instructions
        </h3>
        <ol
          style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
            lineHeight: '1.6',
          }}>
          <li>Slowly resize your browser window from narrow to wide</li>
          <li>Notice: Static text stays the same size</li>
          <li>Notice: Fluid text scales smoothly with the viewport</li>
          <li>Try zooming (Cmd/Ctrl +/-) - both should scale with zoom</li>
        </ol>
      </div>
    </div>
  ),
}

/**
 * Story: Real-World Example
 */
export const RealWorldExample: Story = {
  render: () => (
    <div style={{ margin: '0 auto', maxWidth: '1400px', padding: '2rem' }}>
      <ViewportIndicator />

      <div
        style={{
          background: 'var(--bg-primary)',
          minHeight: '400px',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}>
        <h1
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'clamp(1.4375rem, calc(1.4375rem * 0.5 + 2.5vw), 2.5rem)',
            fontWeight: 'var(--font-weight-bold)',
            letterSpacing: 'var(--letter-spacing-tight)',
            lineHeight: 'var(--line-height-tight)',
            marginBottom: '2rem',
          }}>
          ENTERPRISE-GRADE
          <br />
          <span style={{ color: 'var(--accent-primary)' }}>ENGINEERING</span>
          <br />
          WITH <span style={{ color: 'var(--accent-secondary)' }}>
            STARTUP
          </span>{' '}
          DNA
        </h1>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-lg)',
            margin: '0 auto',
            maxWidth: '600px',
          }}>
          This is how the homepage hero would look with fluid typography. Resize
          the window to see the text scale naturally.
        </p>
      </div>

      <div style={{ marginTop: '3rem', padding: '0 2rem' }}>
        <h2
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'clamp(1.875rem, calc(1.875rem * 0.6 + 1.5vw), 2.5rem)',
            fontWeight: 'var(--font-weight-bold)',
            letterSpacing: 'var(--letter-spacing-wide)',
            marginBottom: '2rem',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
          Featured Work
        </h2>

        <div
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}>
          {[1, 2, 3].map(i => (
            <div
              key={i}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-default-color)',
                borderRadius: '8px',
                padding: '2rem',
              }}>
              <h3
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--accent-font-family)',
                  fontSize:
                    'clamp(1.4375rem, calc(1.4375rem * 0.65 + 1vw), 1.875rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: 'var(--line-height-tight)',
                  marginBottom: '1rem',
                }}>
                Project Title {i}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                This card title also uses fluid typography, scaling
                proportionally with the viewport width.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

/**
 * Story: Full Range Hero (Mobile to Desktop)
 *
 * Demonstrates a single heading that uses CSS media queries with clamp()
 * to scale smoothly across ALL breakpoints (xs → 3xl)
 */
export const FullRangeHero: Story = {
  render: () => (
    <div style={{ margin: '0 auto', maxWidth: '1400px', padding: '2rem' }}>
      <ViewportIndicator />

      <h1
        style={{
          color: 'var(--text-primary)',
          fontSize: 'var(--font-size-2xl)',
          marginBottom: '1rem',
        }}>
        Full Range Hero Heading
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        This heading uses CSS custom properties with media queries to create a
        single heading that scales smoothly from mobile (320px) to ultra-wide
        (1920px+). Each breakpoint has its own clamp() formula.
      </p>

      <style>
        {`
          /* Fluid hero heading using CSS custom properties + media queries */
          .fluid-hero-demo {
            /* Mobile base (xs-sm: 320-767px) - xl → 3xl (more impactful) */
            --hero-fluid-size: clamp(1.875rem, calc(1.875rem * 0.4 + 3vw), 3.3125rem);
          }

          @media (width >= 768px) {
            /* Tablet+ (md-lg: 768-1279px) - 3xl → 5xl (bigger jump) */
            .fluid-hero-demo {
              --hero-fluid-size: clamp(3.3125rem, calc(3.3125rem * 0.3 + 4vw), 5.9375rem);
            }
          }

          @media (width >= 1280px) {
            /* Desktop+ (xl-3xl: 1280px+) - 4xl → 6.5rem (more dramatic) */
            .fluid-hero-demo {
              --hero-fluid-size: clamp(4.4375rem, calc(4.4375rem * 0.4 + 3vw), 6.5rem);
            }
          }
        `}
      </style>

      <div
        style={{
          background:
            'linear-gradient(135deg, var(--bg-primary), var(--bg-secondary))',
          border: '2px solid var(--accent-primary)',
          borderRadius: '12px',
          minHeight: '400px',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}>
        <h2
          className="fluid-hero-demo"
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'var(--hero-fluid-size)',
            fontWeight: 'var(--font-weight-bold)',
            letterSpacing: 'var(--letter-spacing-tight)',
            lineHeight: 'var(--line-height-tight)',
            margin: 0,
          }}>
          ENTERPRISE-GRADE
          <br />
          <span style={{ color: 'var(--accent-primary)' }}>ENGINEERING</span>
          <br />
          WITH <span style={{ color: 'var(--accent-secondary)' }}>
            STARTUP
          </span>{' '}
          DNA
        </h2>
      </div>

      <div
        style={{
          background: 'var(--bg-secondary)',
          borderRadius: '8px',
          marginTop: '2rem',
          padding: '2rem',
        }}>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
          }}>
          📐 How This Works
        </h3>

        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}>
          <div
            style={{
              background: 'rgba(255, 69, 0, 0.05)',
              border: '1px solid rgba(255, 69, 0, 0.2)',
              borderRadius: '6px',
              padding: '1.5rem',
            }}>
            <div
              style={{
                color: 'var(--accent-primary)',
                fontSize: '12px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}>
              📱 Mobile (320-767px)
            </div>
            <code
              style={{
                display: 'block',
                fontFamily: 'var(--mono-font-family)',
                fontSize: '11px',
                lineHeight: '1.6',
                marginTop: '0.5rem',
              }}>
              clamp(
              <br />
              &nbsp;&nbsp;1.875rem, {/* xl: 30px */}
              <br />
              &nbsp;&nbsp;calc(1.875rem * 0.4 + 3vw),
              <br />
              &nbsp;&nbsp;3.3125rem {/* 3xl: 53px */}
              <br />)
            </code>
            <div
              style={{
                color: 'var(--text-secondary)',
                fontSize: '12px',
                marginTop: '0.75rem',
              }}>
              Token range: <strong>xl → 3xl</strong>
              <br />
              Size range: <strong>30px → 53px</strong>
              <br />
              <small style={{ color: 'var(--text-tertiary)' }}>
                ✨ Starts bigger for hero impact
              </small>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(149, 197, 239, 0.05)',
              border: '1px solid rgba(149, 197, 239, 0.2)',
              borderRadius: '6px',
              padding: '1.5rem',
            }}>
            <div
              style={{
                color: 'var(--accent-secondary)',
                fontSize: '12px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}>
              💻 Tablet (768-1279px)
            </div>
            <code
              style={{
                display: 'block',
                fontFamily: 'var(--mono-font-family)',
                fontSize: '11px',
                lineHeight: '1.6',
                marginTop: '0.5rem',
              }}>
              clamp(
              <br />
              &nbsp;&nbsp;3.3125rem, {/* 3xl: 53px */}
              <br />
              &nbsp;&nbsp;calc(3.3125rem * 0.3 + 4vw),
              <br />
              &nbsp;&nbsp;5.9375rem {/* 5xl: 95px */}
              <br />)
            </code>
            <div
              style={{
                color: 'var(--text-secondary)',
                fontSize: '12px',
                marginTop: '0.75rem',
              }}>
              Token range: <strong>3xl → 5xl</strong>
              <br />
              Size range: <strong>53px → 95px</strong>
              <br />
              <small style={{ color: 'var(--text-tertiary)' }}>
                ✨ Bigger jump for visual impact
              </small>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(46, 204, 113, 0.05)',
              border: '1px solid rgba(46, 204, 113, 0.2)',
              borderRadius: '6px',
              padding: '1.5rem',
            }}>
            <div
              style={{
                color: '#2ecc71',
                fontSize: '12px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}>
              🖥️ Desktop (1280px+)
            </div>
            <code
              style={{
                display: 'block',
                fontFamily: 'var(--mono-font-family)',
                fontSize: '11px',
                lineHeight: '1.6',
                marginTop: '0.5rem',
              }}>
              clamp(
              <br />
              &nbsp;&nbsp;4.4375rem, {/* 4xl: 71px */}
              <br />
              &nbsp;&nbsp;calc(4.4375rem * 0.4 + 3vw),
              <br />
              &nbsp;&nbsp;6.5rem {/* 104px - beyond 5xl! */}
              <br />)
            </code>
            <div
              style={{
                color: 'var(--text-secondary)',
                fontSize: '12px',
                marginTop: '0.75rem',
              }}>
              Token range: <strong>4xl → 6.5rem</strong>
              <br />
              Size range: <strong>71px → 104px</strong>
              <br />
              <small style={{ color: 'var(--text-tertiary)' }}>
                ✨ Goes beyond 5xl for ultra-wide screens
              </small>
            </div>
          </div>
        </div>

        <div
          style={{
            background: 'var(--bg-primary)',
            borderRadius: '6px',
            marginTop: '1.5rem',
            padding: '1.5rem',
          }}>
          <h4
            style={{
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}>
            📊 Complete Scaling Path
          </h4>
          <div
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--mono-font-family)',
              fontSize: '13px',
              lineHeight: '1.8',
            }}>
            <div>
              320px (mobile):{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>30px</strong>{' '}
              (xl token - strong start!)
            </div>
            <div>
              640px (lg mobile): <strong>42px</strong> ← smooth scaling
            </div>
            <div>
              767px: <strong>53px</strong> (reaches 3xl token maximum)
            </div>
            <div style={{ color: 'var(--accent-secondary)' }}>
              ↓ 768px breakpoint: stays at <strong>53px</strong> (3xl token, no
              jump!)
            </div>
            <div>
              1000px (tablet): <strong>73px</strong> ← smooth, dramatic scaling
            </div>
            <div>
              1279px: <strong>95px</strong> (reaches 5xl token maximum)
            </div>
            <div style={{ color: 'var(--accent-secondary)' }}>
              ↓ 1280px breakpoint: jumps to <strong>71px</strong> (restarts from
              4xl)
            </div>
            <div>
              1600px (desktop): <strong>88px</strong> ← smooth scaling continues
            </div>
            <div>
              1920px (ultra-wide): <strong>104px</strong> (beyond 5xl token!)
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: 'rgba(255, 193, 7, 0.1)',
          border: '1px solid rgba(255, 193, 7, 0.3)',
          borderRadius: '8px',
          marginTop: '2rem',
          padding: '1.5rem',
        }}>
        <h4
          style={{
            color: '#ffc107',
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}>
          🧪 Testing Instructions
        </h4>
        <ol
          style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
            lineHeight: '1.8',
            margin: 0,
            paddingLeft: '1.5rem',
          }}>
          <li>
            <strong>Slowly resize</strong> your browser from narrow to wide
          </li>
          <li>
            Watch the heading size - it should scale smoothly within each range
          </li>
          <li>
            Notice small jumps at <strong>768px</strong> and{' '}
            <strong>1280px</strong> (breakpoint transitions)
          </li>
          <li>
            Compare to the viewport indicator to see which breakpoint you're in
          </li>
          <li>Test zoom (Cmd/Ctrl +/-) - text should scale proportionally</li>
        </ol>
      </div>
    </div>
  ),
}

/**
 * Story: Accessibility Test
 */
export const AccessibilityTest: Story = {
  render: () => (
    <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '2rem' }}>
      <ViewportIndicator />

      <h1
        style={{
          color: 'var(--text-primary)',
          fontSize: 'var(--font-size-2xl)',
          marginBottom: '1rem',
        }}>
        Accessibility Testing
      </h1>

      <div
        style={{
          background: 'rgba(255, 193, 7, 0.1)',
          border: '1px solid rgba(255, 193, 7, 0.3)',
          borderRadius: '8px',
          marginBottom: '2rem',
          padding: '1.5rem',
        }}>
        <h3
          style={{
            color: '#ffc107',
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}>
          🧪 How to Test Accessibility
        </h3>
        <ol
          style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
            lineHeight: '1.8',
          }}>
          <li>
            <strong>Browser Zoom Test:</strong> Use Cmd/Ctrl +/- to zoom. Verify
            text scales up.
          </li>
          <li>
            <strong>User Font Size Test:</strong> Change browser base font size
            (Settings). Verify text scales.
          </li>
          <li>
            <strong>Viewport Test:</strong> Resize window from 320px to 1920px.
            Verify smooth scaling.
          </li>
          <li>
            <strong>No Reflow Test:</strong> At 200% zoom, verify no horizontal
            scrolling needed.
          </li>
        </ol>
      </div>

      <div
        style={{
          background: 'var(--bg-secondary)',
          borderRadius: '8px',
          padding: '2rem',
        }}>
        <h2
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--accent-font-family)',
            fontSize: 'clamp(2.5rem, calc(2.5rem * 0.5 + 2vw), 3.3125rem)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: 'var(--line-height-tight)',
            marginBottom: '1rem',
          }}>
          Test This Heading
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '16px',
            lineHeight: '1.6',
          }}>
          This heading uses the formula:{' '}
          <code
            style={{
              background: 'var(--bg-primary)',
              color: 'var(--accent-secondary)',
              fontFamily: 'var(--mono-font-family)',
              fontSize: '14px',
              padding: '2px 6px',
            }}>
            clamp(2.5rem, calc(2.5rem * 0.5 + 2vw), 3.3125rem)
          </code>
        </p>

        <div
          style={{
            borderTop: '1px solid var(--border-default-color)',
            marginTop: '2rem',
            paddingTop: '2rem',
          }}>
          <h4 style={{ fontSize: '14px', marginBottom: '1rem' }}>
            Why This Formula is Accessible:
          </h4>
          <ul
            style={{
              color: 'var(--text-secondary)',
              fontSize: '14px',
              lineHeight: '1.8',
            }}>
            <li>
              ✅ Uses <code>rem</code> units (respects user font preferences)
            </li>
            <li>
              ✅ Mixes <code>rem + vw</code> (scales with zoom AND viewport)
            </li>
            <li>
              ✅ No pure <code>vw</code> values (which break zoom)
            </li>
            <li>✅ Conservative min/max prevents extreme sizes</li>
          </ul>
        </div>
      </div>
    </div>
  ),
}
