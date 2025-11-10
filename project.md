# Crafity Start - Project Context

> **Read first**: `claude.md` for universal development standards.
> This file contains project-specific configuration and context.

## Tech Stack

- **Framework**: TanStack Start v1.134.9
- **Runtime**: React 19.2.0
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: CSS Modules + PostCSS
- **Package Manager**: pnpm 10.16.1
- **Deployment**: Docker + Vercel

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components (Button, Link, TerminalWindow,
│   │                    # TechStack, Typography, List, Callout, AccentBar,
│   │                    # ThemeToggle, CookieBanner, Heading, Text, Divider)
│   ├── layout/          # Layout primitives (Header, Footer, Section, Container,
│   │                    # Stack, Grid)
│   ├── home/            # Homepage sections (Hero, ClientTrust, FeaturedWork,
│   │                    # Services, Approach, CTA + subcomponents)
│   ├── privacy/         # Privacy policy content component
│   ├── style-guide/     # Storybook documentation (layout-system.mdx, logos.mdx)
│   └── work/            # Case study content components (sonic-equipment-case-study)
├── css/                 # Design tokens (color, typography, spacing, layout, etc.)
├── routes/              # Route files (__root.tsx, index.tsx, privacy.tsx,
│                        # work/sonic-equipment/index.tsx)
└── utils/               # Utilities (analytics.ts)
```

## Design System

### Color Palette

**Dark Theme (default):**

```css
--bg-primary: #0a0a0a --bg-secondary: #1a1a1a --text-primary: #fafafa
  --text-secondary: rgba(250, 250, 250, 0.7) --accent-primary: #ff4500
  /* orange-red */ --accent-secondary: #95c5ef /* blue */
  --border-default-color: #333;
```

**Light Theme:**

```css
--bg-primary: #f5f3f0 --bg-secondary: #fff --text-primary: #1a1a1a
  --accent-primary: #ff4500 --accent-secondary: #1f70b7;
```

Full definitions: `src/css/color-tokens.css`

### Typography Scale - Perfect Fourth (1.333 ratio)

The typography system uses a **Perfect Fourth modular scale** (1.333 ratio) for mathematical harmony and visual rhythm. Each size is approximately 33% larger than the previous, creating predictable, pleasing hierarchy.

**Font Families:**
```css
--font-family: 'Instrument Sans', sans-serif;
--mono-font-family: 'Recursive', monospace;
--accent-font-family: 'Schibsted Grotesk', sans-serif;
```

**Font Sizes (9 sizes, down from 12):**
```css
/* Display Sizes - Hero sections and page titles */
--font-size-5xl: 95px;   /* Hero desktop */
--font-size-4xl: 71px;   /* Hero tablet */
--font-size-3xl: 53px;   /* Hero mobile, page titles (H1) */
--font-size-2xl: 40px;   /* Major section headers (H2) */
--font-size-xl: 30px;    /* Subsection headers (H3) */

/* Body & UI Sizes */
--font-size-lg: 23px;    /* Large body text, callouts, featured content */
--font-size-base: 18px;  /* Default body text */
--font-size-sm: 14px;    /* Small UI text, terminal, captions */
--font-size-xs: 12px;    /* Meta text, labels, footer fine print */
```

**When to use each size:**
- **5xl, 4xl, 3xl**: Hero sections and page titles (responsive)
- **2xl**: Major section headers (H2)
- **xl**: Subsection headers (H3)
- **lg**: Large body text, callouts, featured content
- **base**: Default body text (18px)
- **sm**: Terminal, code, captions, small UI elements
- **xs**: Meta text, labels, fine print

Full definitions and rationale: `src/css/typography-tokens.css`

### Spacing Scale (4px base)

```css
--spacing-0-1: 1px --spacing-1: 4px --spacing-2: 8px --spacing-4: 16px
  --spacing-8: 32px --spacing-16: 64px --spacing-24: 96px... up to
  --spacing-96: 384px;
```

Full scale: `src/css/spacing-tokens.css`

### Breakpoints (T-shirt sizing)

```
xs:  0-639px      (Mobile)
sm:  640-767px    (Large mobile)
md:  768-1023px   (Tablet)
lg:  1024-1279px  (Laptop)
xl:  1280-1535px  (Desktop)
2xl: 1536-1919px  (Large desktop)
3xl: 1920px+      (Ultra wide)
```

**Usage:**

```css
@media (--md-n-above) {
  /* 768px and up */
}
@media (--lg-n-below) {
  /* below 1024px */
}
@media (--xl-only) {
  /* 1280-1535px */
}
```

Full definitions: `src/css/breakpoints.css`

### Content Widths (Semantic)

We use **5 semantic content widths** instead of arbitrary pixel values:

```css
--content-narrow: 600px /* Forms, CTAs, focused content */
--content-base: 900px /* Articles, case studies, privacy policy */
--content-comfortable: 1000px /* Slightly wider content */
--content-wide: 1200px /* Multi-column layouts, service grids */
--content-full: 1400px /* Hero sections, full-width layouts */
```

Full definitions: `src/css/layout-tokens.css`

### Other Tokens

- **Borders**: `src/css/border-tokens.css`
- **Animations**: `src/css/animation-tokens.css`
- **Shadows**: `src/css/shadow-tokens.css`
- **Z-index**: `src/css/z-index-tokens.css`

## Development Scripts

```bash
# Development
pnpm dev                    # Start dev server (Vite)

# Linting
pnpm lint                   # Check TypeScript/ESLint
pnpm lint:fix               # Auto-fix errors
pnpm stylelint              # Check CSS
pnpm stylelint:fix          # Auto-fix CSS
pnpm test:types             # Verify typescript types
pnpm test:all               # Run test:type, lint, and stylelint

# Build
pnpm build                  # Production build
pnpm build:ci               # Storybook + build

# Storybook
pnpm storybook:dev          # Start Storybook (port 6006)
pnpm storybook:build        # Build Storybook to public/storybook

# Docker
pnpm docker:build           # Build image
pnpm docker:run             # Run container (port 3000)
pnpm docker:build:run       # Build and run
pnpm docker:rebuild:run     # Remove, rebuild, and run
```

## Configuration Files

- **TypeScript**: `tsconfig.json` (strict mode, path aliases `@/`)
- **ESLint**: `eslint.config.js` (comprehensive rules, auto-fix enabled)
- **Stylelint**: `.stylelintrc.cjs` (idiomatic order, CSS Modules)
- **Vite**: `vite.config.ts` (React, TanStack Start)
- **PostCSS**: Custom media queries, nested CSS, autoprefixer
- **Prettier**: `.prettierrc.cjs` (code formatting)

## Layout Component System

**IMPORTANT**: We use a **composition-based layout system** following industry best practices from Material-UI, Chakra UI, and Shopify Polaris.

### Core Principles

1. **Composition over configuration** - Combine simple primitives to create complex layouts
2. **Semantic HTML** - Use proper elements (`<section>`, `<h1>-<h6>`, `<p>`)
3. **Responsive by default** - Mobile-first with progressive enhancement
4. **Design tokens only** - No hardcoded values

### Layout Primitives

#### Container
Horizontal centering with semantic max-width constraints.

```tsx
<Container size="base">
  <p>Centered content with 900px max-width</p>
</Container>
```

**Props**: `size` (narrow/base/comfortable/wide/full), `className`

#### Stack
Vertical spacing between elements using CSS flexbox gap.

```tsx
<Stack space="large">
  <Heading level={2}>Title</Heading>
  <Text>First paragraph</Text>
  <Text>Second paragraph</Text>
</Stack>

{/* With dividers */}
<Stack space="medium" dividers>
  <Section1 />
  <Section2 />
</Stack>
```

**Props**: `space` (small/medium/large/xlarge), `dividers` (boolean), `className`

#### Section
Semantic page sections with vertical padding.

```tsx
<Section>
  <Container size="wide">
    <h2>Section Content</h2>
  </Container>
</Section>
```

**Props**: `spacing` (normal/large/none), `id` (for anchors), `className`

#### Grid
Responsive grid layouts.

```tsx
<Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="medium">
  <Card />
  <Card />
  <Card />
</Grid>
```

**Props**: `columns` (mobile/tablet/desktop), `gap` (small/medium/large), `className`

### Typography Components

#### Heading
Separates semantic HTML level from visual size.

```tsx
{/* Semantic h2, visual 3xl */}
<Heading level={2} size="3xl" align="center">
  Page Title
</Heading>

{/* Uppercase accent heading */}
<Heading level={2} variant="accent">
  FEATURED WORK
</Heading>

{/* Auto-sized (h1 → 3xl) */}
<Heading level={1}>Main Title</Heading>
```

**Props**: `level` (1-6), `size` (xs/sm/md/lg/xl/2xl/3xl), `variant` (default/accent/display), `align`, `className`

#### Text
Body text, captions, labels with semantic variants.

```tsx
<Text>Standard paragraph</Text>
<Text variant="caption" color="tertiary">Last updated: Nov 2025</Text>
<Text variant="label" weight="bold">Form Label</Text>
<Text variant="code">const x = 1</Text>
```

**Props**: `variant` (body/caption/label/code), `size` (xs/sm/base/lg/xl), `color` (primary/secondary/tertiary/accent), `weight`, `align`, `className`

#### Divider
Visual separation between content.

```tsx
<Divider />
<Divider variant="gradient" spacing="large" />
```

**Props**: `variant` (default/gradient), `spacing` (none/small/medium/large), `className`

### Common Layout Patterns

#### Pattern 1: Marketing Section (Homepage)
```tsx
<Section>
  <Container size="wide">
    <Stack space="large">
      <Heading level={2} variant="accent" align="center">
        FEATURED WORK
      </Heading>
      <Grid columns={{ mobile: 1, desktop: 2 }} gap="large">
        <ProjectCard />
        <ProjectCard />
      </Grid>
    </Stack>
  </Container>
</Section>
```

#### Pattern 2: Long-Form Content (Articles, Privacy)
```tsx
<Section>
  <Container size="base">
    <Stack space="large">
      <header>
        <Stack space="small">
          <Heading level={1} size="2xl">Privacy Policy</Heading>
          <Text variant="caption" color="tertiary">Last updated: Nov 2025</Text>
        </Stack>
      </header>

      <Typography>
        <Stack dividers space="medium">
          <section>...</section>
          <section>...</section>
        </Stack>
      </Typography>
    </Stack>
  </Container>
</Section>
```

### Page Architecture Pattern

**Route File** (`src/routes/[page-name].tsx`):

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { Section } from '@/components/layout/section/section'
import { Header } from '@/components/layout/header/header'
import { Footer } from '@/components/layout/footer/footer'
import { ContentComponent } from '@/components/[category]/content-component'

export const Route = createFileRoute('/page-name')({
  component: RouteComponent,
  preload: true,
})

function RouteComponent() {
  return (
    <>
      <Header />
      <Section>
        <ContentComponent />
      </Section>
      <Footer />
    </>
  )
}
```

**Content Component** (`src/components/[category]/content-component.tsx`):

```tsx
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'
import { Heading } from '@/components/common/heading/heading'
import { Text } from '@/components/common/text/text'

export function ContentComponent() {
  return (
    <Container size="base">
      <Stack space="large">
        <Heading level={1}>Page Title</Heading>
        <Text>Content...</Text>
      </Stack>
    </Container>
  )
}
```

**Rules**:
- ✅ Routes handle Header, Footer, Section wrappers
- ✅ Content components handle Container, Stack, Grid composition
- ✅ Keep routes minimal (~20 lines)
- ✅ All content/styling in components, not routes
- ✅ Components are reusable and testable

### Documentation

For complete documentation with all props, examples, and migration guides, see:
- **Storybook**: `pnpm storybook:dev` → Style Guide → Layout System
- **Source**: `src/components/style-guide/layout-system.mdx`

## Key Project Patterns

### Terminal Aesthetic

- 30% terminal aesthetic, 70% clean typography
- Terminal components: `TerminalWindow` (dots, border, monospace)
- Used primarily in Hero section, subtle elsewhere

### Dark/Light Theme

- Theme toggle in footer (system/dark/light cycle)
- Stored in localStorage
- Implemented via `data-theme` attribute on `<html>`
- Component: `src/components/common/theme-toggle/theme-toggle.tsx`

### Smart Link Component

Auto-detects link type (external, anchor, protocol, internal) and applies correct attributes/routing.

```tsx
<Link href="https://...">External</Link>  {/* Auto: target="_blank" rel="noopener" */}
<Link href="#section">Anchor</Link>      {/* Auto: smooth scroll */}
<Link href="/about">Internal</Link>      {/* Auto: TanStack Router */}
<Link href="mailto:...">Email</Link>     {/* Auto: protocol link */}
```

### Responsive Text Variants

Components show different text on mobile vs desktop:

```tsx
<span className={styles['desktop-text']}>Long descriptive text...</span>
  <span className={styles['mobile-text']}>Short</span>
```

### Cookie Consent + GA4

- Cookie banner on first visit
- Google Analytics only loads after consent
- Implementation: `src/components/common/cookie-banner/`
- Docs: `docs/COOKIE_BANNER_IMPLEMENTATION.md`

## Content & Documentation

### Primary References

- **`docs/CRAFITY_HOMEPAGE_MASTER_CONTENT.md`**: All copy, content, SEO
- **`docs/CRAFITY_IMPLEMENTATION_GUIDE.md`**: Technical specs, chunk breakdown
- **`docs/CRAFITY_BEST_PRACTICES.md`**: Deep-dive best practices
- **`docs/COOKIE_BANNER_IMPLEMENTATION.md`**: Cookie/analytics setup

### Design Philosophy

- Boutique engineering firm showcase
- Bold typography + geometric accents
- Asymmetric layouts (Dutch design influence)
- Professional but approachable tone
- Terminal aesthetic as accent (not dominant)

## Environment Variables

Create `.env` file (see `.env.example`):

```bash
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Deployment

### Docker

```bash
docker build -t crafity-start .
docker run -p 3000:3000 crafity-start
```

### Vercel

- Auto-deploy from `main` branch
- Framework preset: TanStack Start (auto-detected)
- Environment variables: Add `VITE_GA4_MEASUREMENT_ID`

## Current Status

- ✅ Homepage implemented (all sections)
- ✅ Privacy policy page
- ✅ Cookie consent + GA4 integration
- ✅ Dark/light theme toggle
- ✅ Design token system complete
- ✅ Storybook for common components
- ⏳ Case study pages (planned)
- ⏳ Performance optimization (target: Lighthouse 100)

## Open Questions / In Progress

- Routing best practices (TanStack Start patterns)
- Data fetching strategy
- SSR optimization techniques

---

**For development standards, see `claude.md` in root.**
