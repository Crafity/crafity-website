# Development Standards

> **Project Context**: If `project.md` exists, read it for project-specific details.

## 1. Philosophy

- **Quality over speed** - No shortcuts. Build it right the first time.
- **Design system first** - Always use tokens, never hardcode values
- **Accessibility by default** - Target Lighthouse 100 (all metrics)
- **DRY principle** - Don't repeat yourself. Create reusable patterns.

## 2. Code Organization

### Folder Structure

```
src/
├── components/
│   ├── common/          # Reusable UI (needs Storybook stories)
│   ├── layout/          # Structural components
│   └── [page]/          # Page-specific sections
├── css/                 # Design tokens
└── routes/              # Pages
```

### Naming Conventions

- **Folders/Files**: kebab-case (`terminal-window/`)
- **Components**: PascalCase (`TerminalWindow`)
- **CSS Classes**: kebab-case (`.terminal-window`)
- **CSS Modules**: `component-name.module.css`

### Import Order (auto-sorted by ESLint)

1. React
2. External packages
3. Internal imports
4. CSS modules

## 3. CSS & Styling

### Always Use Design Tokens

```css
/* ❌ Never: Hardcoded values */
.card {
  padding: 32px;
  color: #fafafa;
}

/* ✅ Always: Design tokens */
.card {
  padding: var(--spacing-8);
  color: var(--text-primary);
}
```

### 2-Tier Token Architecture

**Primitive tokens** (in `src/css/*-tokens.css`):

- Abstract, reusable values
- T-shirt sizing: `--font-size-xl`, `--spacing-8`
- DO NOT use directly in most cases

**Component aliases** (in component CSS):

- Context-specific meaning
- Create when: responsive values, shared across elements, theme variations
- Use primitives directly when: single use, static, no variation

**Example:**

```css
/* hero.module.css */
.hero {
  /* Create alias for responsive value */
  --hero-title-size: var(--font-size-lg);

  @media (--md-n-above) {
    --hero-title-size: var(--font-size-2xl);
  }
}

.title {
  font-size: var(--hero-title-size); /* Use alias (responsive) */
  font-weight: var(--font-weight-bold); /* Use primitive (static) */
}
```

### Semantic Naming

```css
/* ✅ Semantic: What it IS */
--bg-primary
--text-secondary
--accent-primary

/* ❌ Descriptive: What it LOOKS LIKE */
--black
--white
--orange-red
```

**Why?** Semantic names work with both light and dark themes.

### CSS Modules Pattern

```tsx
// component.tsx
import styles from './component.module.css'

export function Component() {
  return <div className={styles.container}>...</div>
}
```

### Responsive Design

- **Mobile-first approach**
- Use custom media queries: `@media (--md-n-above)`, `@media (--lg-n-below)`
- Breakpoints defined in `src/css/breakpoints.css`

**Example:**

```css
/* Base (mobile) */
.container {
  padding: var(--spacing-4);
}

/* Enhance for larger screens */
@media (--md-n-above) {
  .container {
    padding: var(--spacing-8);
  }
}
```

### Spacing System

**Overview**

Our spacing system uses numeric tokens following industry standards (Chakra UI, Material-UI). Numbers represent token names that map to CSS custom properties, not pixel values.

**Key Principle:**
```typescript
8 → --spacing-8 → 32px  // Token 8 maps to CSS variable, NOT 8px!
```

**SpacingToken Type**

All spacing values must use the `SpacingToken` type (defined in [src/types/spacing.ts](src/types/spacing.ts)):

```typescript
type SpacingToken =
  | 0 | 0.1 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60
  | 64 | 72 | 80 | 96
```

**Common Spacing Tokens**

| Token | CSS Variable | Pixel Value | Use Case |
|-------|-------------|-------------|----------|
| `0` | `--spacing-0` | 0px | No spacing |
| `1` | `--spacing-1` | 4px | Tiny gaps, borders |
| `2` | `--spacing-2` | 8px | Minimal spacing |
| `4` | `--spacing-4` | 16px | Small padding, tight gaps |
| `6` | `--spacing-6` | 24px | Grid gaps, medium padding |
| `8` | `--spacing-8` | 32px | Common padding, stack space |
| `12` | `--spacing-12` | 48px | Large spacing |
| `16` | `--spacing-16` | 64px | Section padding (default) |
| `24` | `--spacing-24` | 96px | Large section padding |

**Usage in TypeScript/TSX**

```tsx
// ✅ Correct: Use numeric tokens
<Stack space={8}>...</Stack>                    // 32px
<Grid gap={6}>...</Grid>                        // 24px
<Section padding={16}>...</Section>             // 64px
<Box p={4} mb={8}>...</Box>                     // 16px padding, 32px bottom margin

// ✅ Responsive spacing
<Stack space={{ base: 8, md: 12, lg: 16 }}>...</Stack>
<Box p={{ base: 4, md: 6 }}>...</Box>

// ❌ Wrong: Don't use strings or random numbers
<Stack space="medium">...</Stack>               // Old pattern - removed
<Grid gap={25}>...</Grid>                       // Invalid - not in SpacingToken
```

**Usage in CSS**

```css
/* ✅ Correct: Use CSS custom properties */
.container {
  padding: var(--spacing-8);          /* 32px */
  gap: var(--spacing-6);              /* 24px */
  margin-bottom: var(--spacing-16);   /* 64px */
}

/* ✅ Responsive with component aliases */
.hero {
  --hero-spacing: var(--spacing-12);

  @media (--md-n-above) {
    --hero-spacing: var(--spacing-16);
  }

  @media (--lg-n-above) {
    --hero-spacing: var(--spacing-24);
  }
}

.hero-content {
  padding: var(--hero-spacing);
}

/* ❌ Wrong: Don't hardcode pixels */
.container {
  padding: 32px;  /* Use var(--spacing-8) instead */
}
```

**Layout Components with Spacing**

**Box Component** - For granular padding/margin control:

```tsx
import { Box } from '@/components/layout/box'

// Padding examples
<Box p={8}>All sides 32px</Box>
<Box px={8} py={4}>Horizontal 32px, Vertical 16px</Box>
<Box pt={4} pr={6} pb={4} pl={6}>Individual sides</Box>

// Margin examples
<Box mb={8}>Bottom margin 32px</Box>
<Box mx={4} my={8}>Horizontal 16px, Vertical 32px</Box>

// Combined padding and margin
<Box p={6} mb={12}>Padding 24px, Bottom margin 48px</Box>

// Responsive spacing
<Box p={{ base: 4, md: 6, lg: 8 }}>
  Grows from 16px → 24px → 32px
</Box>

// Property precedence: p < px/py < pt/pr/pb/pl
<Box p={8} px={4}>           {/* Results in: top/bottom 32px, left/right 16px */}
<Box p={8} px={4} pl={6}>    {/* Results in: top/bottom 32px, right 16px, left 24px */}
```

**Stack Component** - For vertical spacing between children:

```tsx
import { Stack } from '@/components/layout/stack'

// Static spacing
<Stack space={8}>           {/* 32px between items */}
  <Item />
  <Item />
</Stack>

// Responsive spacing
<Stack space={{ base: 8, md: 12, lg: 16 }}>
  <Item />
  <Item />
</Stack>

// With dividers
<Stack space={12} dividers>
  <Section1 />
  <Section2 />
</Stack>
```

**Grid Component** - For multi-column layouts:

```tsx
import { Grid } from '@/components/layout/grid'

// Static gap
<Grid columns={3} gap={6}>  {/* 24px gap */}
  <Card />
  <Card />
  <Card />
</Grid>

// Responsive columns and gap
<Grid
  columns={{ base: 1, md: 2, lg: 3 }}
  gap={{ base: 4, md: 6, lg: 8 }}>
  <Card />
  <Card />
  <Card />
</Grid>
```

**Section Component** - For page sections with vertical padding:

```tsx
import { Section } from '@/components/layout/section'

// Standard section
<Section padding={16}>      {/* 64px top/bottom (default) */}
  <Content />
</Section>

// Large section (hero)
<Section padding={24}>      {/* 96px top/bottom */}
  <Hero />
</Section>

// No padding
<Section padding={0}>
  <FullBleedContent />
</Section>

// Responsive padding
<Section padding={{ base: 12, md: 16, lg: 24 }}>
  <Content />
</Section>
```

**Common Spacing Patterns**

```tsx
// Card with custom spacing
<Card p={6} mb={8}>         {/* Padding 24px, Bottom margin 32px */}
  <Stack space={4}>         {/* 16px between elements */}
    <Heading level={3}>Title</Heading>
    <Text>Description</Text>
  </Stack>
</Card>

// Section → Container → Stack composition
<Section padding={16}>
  <Container size="base">
    <Stack space={12}>      {/* 48px between major blocks */}
      <Heading level={2}>Section Title</Heading>
      <Stack space={4}>     {/* 16px between paragraphs */}
        <Text>First paragraph</Text>
        <Text>Second paragraph</Text>
      </Stack>
    </Stack>
  </Container>
</Section>

// Responsive grid with proper gaps
<Grid
  columns={{ base: 1, md: 2, lg: 3 }}
  gap={{ base: 4, md: 6 }}>
  {items.map(item => (
    <Card key={item.id} p={{ base: 4, md: 6 }}>
      {item.content}
    </Card>
  ))}
</Grid>
```

**Spacing Decision Guide**

```
Need vertical spacing between siblings?
└─ Use Stack with space prop
    ├─ Tight spacing (list items, form fields) → 4 (16px)
    ├─ Medium spacing (paragraphs, cards) → 8 (32px)
    ├─ Large spacing (sections, major blocks) → 12-16 (48-64px)
    └─ Extra large (page sections) → 24 (96px)

Need multi-column layout?
└─ Use Grid with gap prop
    ├─ Tight grid → 4 (16px)
    ├─ Medium grid → 6 (24px)
    └─ Loose grid → 8 (32px)

Need padding/margin on a specific element?
└─ Use Box component
    ├─ Uniform → p={8} or m={8}
    ├─ Axis-based → px={8} py={4} or mx={4} my={8}
    └─ Directional → pt={4} pr={6} pb={4} pl={6}

Need section-level vertical spacing?
└─ Use Section with padding prop
    ├─ Standard section → 16 (64px, default)
    ├─ Hero/feature → 24 (96px)
    └─ No spacing → 0
```

**Type-Safe Spacing Utilities**

```typescript
import { getSpacingVar, SpacingToken } from '@/types/spacing'

// Convert token to CSS variable
getSpacingVar(8)    // Returns: 'var(--spacing-8)'
getSpacingVar(12)   // Returns: 'var(--spacing-12)'

// Use in dynamic styles
const spacing: SpacingToken = 8
const style = {
  padding: getSpacingVar(spacing)
}
```

**Migration Notes**

This is the current spacing system (numeric tokens). The old t-shirt size system (`"small"`, `"medium"`, `"large"`) has been removed.

If you encounter old code:
- `space="small"` → `space={8}`
- `space="medium"` → `space={12}`
- `space="large"` → `space={16}`
- `gap="medium"` → `gap={6}`
- `padding="base"` → `padding={16}`

## 4. TypeScript

### Strict Mode Always

See `tsconfig.json` for full configuration.

**Key rules:**

- Explicit interfaces for all props
- No `any` type
- Props sorted alphabetically (ESLint enforced)
- Optional props with `?`

**Example:**

```tsx
interface CardProps {
  children: ReactNode
  className?: string // Optional, alphabetical
  title: string
  variant?: 'primary' | 'secondary'
}

export function Card({ children, className, title, variant }: CardProps) {
  // ...
}
```

## 5. Component Patterns

### Standard Template

```tsx
import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './component.module.css'

interface ComponentProps {
  children: ReactNode
  className?: string
}

export function Component({ children, className }: ComponentProps) {
  return <div className={clsx(styles.container, className)}>{children}</div>
}
```

### Always Support `className` Prop

Enables component extensibility and composition.

```tsx
// Parent can extend styling
<TerminalWindow className={styles.customTerminal}>{content}</TerminalWindow>
```

### Use `clsx` for Conditional Classes

```tsx
/* ✅ DO: Use clsx */
<div className={clsx(styles.card, isLarge && styles.large, className)} />

  /* ❌ DON'T: Manual string manipulation */
  <div className={[styles.card, className].filter(Boolean).join(' ')} />
```

### Storybook Policy

- Common components (`src/components/common/`) **MUST** have stories
- Other components: create stories unless good reason not to
- **When in doubt: ask user first**

**Story structure:**

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ComponentName } from './component-name'

const meta: Meta<typeof ComponentName> = {
  title: 'Common/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered', // or 'fullscreen', 'padded'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
}

// Variation story
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary button',
  },
}

// Multiple examples in one story
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ComponentName variant="primary">Primary</ComponentName>
      <ComponentName variant="secondary">Secondary</ComponentName>
    </div>
  ),
}
```

### Layout Composition Pattern

Layout follows a predictable 3-layer hierarchy for consistent page structure:

1. **Section** - Semantic sectioning with vertical padding
2. **Container** - Horizontal centering with max-width constraint
3. **Stack/Grid** - Spacing/layout between content elements

**Standard composition:**

```tsx
<Section padding={16}>             {/* Layer 1: Vertical spacing (64px) */}
  <Container size="wide">          {/* Layer 2: Horizontal constraint */}
    <Stack space={16}>             {/* Layer 3: Content spacing (64px) */}
      <Heading level={2}>Title</Heading>
      <Text>Content</Text>
    </Stack>
  </Container>
</Section>
```

**When to use each component:**

| Component | Purpose | Key Props | Use When |
|-----------|---------|-----------|----------|
| **Section** | Vertical padding for page sections | `padding`: SpacingToken (0, 8, 16, 24, etc.)<br/>`id`: for anchor links | Creating semantic page sections with vertical spacing |
| **Container** | Horizontal centering + max-width | `size`: 'narrow' \| 'base' \| 'comfortable' \| 'wide' \| 'full'<br/>`padding`: boolean (default: true) | Constraining content width and adding edge padding |
| **Stack** | Vertical spacing between children | `space`: SpacingToken (0, 4, 8, 12, 16, 24, etc.)<br/>`dividers`: boolean | Spacing sibling elements vertically |
| **Grid** | Multi-column layouts | `columns`: number or responsive<br/>`gap`: SpacingToken (4, 6, 8, 12, etc.) | Creating responsive grid layouts |
| **Box** | Granular padding/margin control | `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl`<br/>`m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml` | Fine-grained spacing control within components |

**Container size selection guide:**

```tsx
// Forms, CTAs, focused content
<Container size="narrow">   {/* 600px */}

// Articles, case studies, long-form reading
<Container size="base">     {/* 900px */}

// Comfortable wider reading
<Container size="comfortable"> {/* 1000px */}

// Service grids, multi-column layouts
<Container size="wide">     {/* 1200px */}

// Hero sections, full-width layouts
<Container size="full">     {/* 1400px */}
```

**Common patterns:**

```tsx
// Hero section (full-width, large padding)
<Section padding={24}>  {/* 96px */}
  <Container size="full">
    <Hero />
  </Container>
</Section>

// Content section (readable width, base padding)
<Section padding={16}>  {/* 64px - default */}
  <Container size="base">
    <Article />
  </Container>
</Section>

// Services section (wide for grid, base padding)
<Section padding={16} id="services">
  <Container size="wide">
    <Grid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>  {/* 24px gap */}
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </Grid>
  </Container>
</Section>

// Full-bleed image within constraint (no padding)
<Section padding={0}>
  <Container size="base" padding={false}>
    <img src="hero.jpg" alt="Full bleed" />
  </Container>
</Section>
```

**Decision tree:**

```
Creating a page section?
└─ Yes → Use <Section>
    ├─ Large hero/feature? → padding={24} (96px)
    ├─ Standard section? → padding={16} (64px, default)
    └─ No padding needed? → padding={0}

Need horizontal centering/max-width?
└─ Yes → Use <Container> inside Section
    ├─ What content type?
    │   ├─ Form/CTA → size="narrow"
    │   ├─ Article → size="base"
    │   ├─ Grid → size="wide"
    │   └─ Hero → size="full"
    └─ Full-bleed within constraint? → padding={false}

Need vertical spacing between elements?
└─ Yes → Use <Stack> inside Container
    └─ Choose space: 8 (32px), 12 (48px), 16 (64px), 24 (96px)

Need multi-column layout?
└─ Yes → Use <Grid> inside Container
    └─ Set responsive columns + gap (4-8 typical)

Need granular padding/margin control?
└─ Yes → Use <Box>
    └─ Apply directional spacing (p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml)
```

## 6. Linting & Code Quality

### Before Every Commit

```bash
pnpm run test:all        # Test types, lint, stylelint
pnpm run build           # Verify no build errors
```

### Key ESLint Rules (auto-enforced)

- Import sorting (React first, external, internal, styles)
- Props sorting (reserved first, then alphabetical)
- Interface/type key sorting
- Unused import removal
- No `console.log` (use `console.warn` or `console.error`)

### Key Stylelint Rules (auto-enforced)

- Property ordering (idiomatic order)
- kebab-case class names only
- Font family name quotes
- Max nesting depth: 4 levels

## 7. Performance Standards

### Targets

- **Lighthouse**: 100 (all metrics)
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Not actively monitored during development, but keep in mind for architectural decisions.

## 8. Git Workflow

### Commit Messages (Conventional Commits)

```
feat: add shadow tokens for consistent box-shadows
fix: correct terminal border color in light theme
refactor: replace manual className joining with clsx
docs: update standards document
chore: update dependencies
```

**Types:** `feat`, `fix`, `refactor`, `docs`, `style`, `chore`

### Branch Naming

```
feature/shadow-tokens
fix/footer-responsive
refactor/use-clsx
docs/update-standards
```

## 9. AI Agent Guidelines

### ⚠️ CRITICAL: Always Propose Before Implementing

**Before making ANY code changes:**

1. **Analyze** the request and existing code
2. **Propose** your approach with:
   - What you'll change and why
   - Which files will be affected
   - Any trade-offs or alternatives
3. **Wait** for explicit approval
4. **Then implement** after user confirms

**Example workflow:**

```
User: "Add a Card component"

Agent: "I'll create a Card component with these characteristics:
- Location: `src/components/common/card/`
- Props: children, title, variant (primary/secondary), className
- Styling: CSS Module with design tokens
- Storybook: Yes (required for common components)
- Will follow the standard component template

Should I proceed?"

User: "Yes, but also add an optional `footer` prop"

Agent: "Updated plan - adding optional footer prop. Implementing now..."
```

### Use TodoWrite for Multi-Step Tasks

When task has 3+ steps, use TodoWrite tool to:

- Track progress
- Give user visibility
- Prevent forgotten tasks
- Mark todos completed immediately after finishing

### Common AI Mistakes to Avoid

1. ❌ Hardcoded values instead of tokens
2. ❌ Missing `clsx` for conditional classes
3. ❌ Skipping TypeScript interfaces
4. ❌ Using `any` type
5. ❌ camelCase CSS class names
6. ❌ Not asking when uncertain

### When to Ask User

- Uncertain about implementation approach
- Multiple valid solutions exist
- Deviating from established patterns
- Creating new patterns/conventions
- Performance/architecture trade-offs
- Storybook needed for edge-case component

## 10. Common Anti-Patterns

### ❌ DON'T: Hardcode Values

```css
.card {
  padding: 32px;
  color: #fafafa;
}
```

### ✅ DO: Use Tokens

```css
.card {
  padding: var(--spacing-8);
  color: var(--text-primary);
}
```

---

### ❌ DON'T: Repeat Attributes

```tsx
<a href="https://..." target="_blank" rel="noopener noreferrer">Link 1</a>
<a href="https://..." target="_blank" rel="noopener noreferrer">Link 2</a>
```

### ✅ DO: Use Smart Components

```tsx
<Link href="https://...">Link 1</Link>  {/* Auto-detects external */}
<Link href="#section">Link 2</Link>    {/* Auto-detects anchor */}
```

**Smart Link Component Implementation:**

```tsx
// common/link/link.tsx
import { ReactNode } from 'react'
import { Link as RouterLink } from '@tanstack/react-router'
import { clsx } from 'clsx'

import styles from './link.module.css'

interface LinkProps {
  children: ReactNode
  className?: string
  external?: boolean
  href: string
  unstyled?: boolean
}

export function Link({
  children,
  className,
  external,
  href,
  unstyled,
}: LinkProps) {
  const linkClassName = clsx(!unstyled && styles.link, className)

  // External links (http/https)
  if (external || href.startsWith('http://') || href.startsWith('https://')) {
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
  if (href.startsWith('#')) {
    return (
      <a className={linkClassName} href={href}>
        {children}
      </a>
    )
  }

  // Protocol links (mailto:, tel:)
  if (href.startsWith('mailto:') || href.startsWith('tel:')) {
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
```

**Benefits:**

- DRY: No repeated `target="_blank" rel="noopener noreferrer"`
- Security: Automatic `noopener noreferrer` for external links
- Flexibility: Works with anchors, protocols, and routing
- Single component to maintain

---

### ❌ DON'T: Skip Prop Interfaces

```tsx
export function Card(props) {
  return <div>{props.title}</div>
}
```

### ✅ DO: Define Explicit Interfaces

```tsx
interface CardProps {
  title: string
}

export function Card({ title }: CardProps) {
  return <div>{title}</div>
}
```

---

### ❌ DON'T: Ignore TypeScript Errors

```tsx
// @ts-ignore
const result = dangerousFunction()
```

### ✅ DO: Fix the Underlying Issue

```tsx
const result = safeFunctionWithTypes()
```

---

## Quick Reference

### Essential Commands

```bash
pnpm dev              # Start development server
pnpm lint:fix         # Fix linting errors
pnpm test:types       # Verify typescript types
pnpm test:all         # Run test:type, lint, and stylelint
pnpm stylelint:fix    # Fix CSS errors
pnpm build            # Production build
```

### File Checklist for New Components

- [ ] Component file: `component-name.tsx`
- [ ] CSS Module: `component-name.module.css`
- [ ] TypeScript interface for props
- [ ] `className` prop for extensibility
- [ ] Design tokens (no hardcoded values)
- [ ] `clsx` for conditional classes
- [ ] Storybook story (if in `common/`)

### Most-Used Tokens

```css
/* Colors */
--bg-primary, --bg-secondary
--text-primary, --text-secondary
--accent-primary, --accent-secondary
--border-default-color

/* Spacing (use numeric tokens in TSX: 4, 6, 8, 12, 16, 24) */
--spacing-4   /* 16px - small padding, tight gaps */
--spacing-6   /* 24px - grid gaps, medium padding */
--spacing-8   /* 32px - common padding, stack space */
--spacing-12  /* 48px - large spacing */
--spacing-16  /* 64px - section padding (default) */
--spacing-24  /* 96px - large section padding */

/* Typography - Perfect Fourth Scale (1.333 ratio) */
--font-family, --mono-font-family, --accent-font-family
--font-size-5xl, --font-size-4xl, --font-size-3xl  /* Hero/display sizes */
--font-size-2xl, --font-size-xl                    /* Section headers */
--font-size-lg, --font-size-base                   /* Body text */
--font-size-sm, --font-size-xs                     /* UI/meta text */

/* Animation */
--transition-color, --transition-all
--duration-normal, --ease-out
```

### Typography Best Practices

**Perfect Fourth Modular Scale (1.333 ratio)**

Our typography system uses a mathematical scale where each size is ~33% larger than the previous. This creates visual harmony and predictable hierarchy.

**Decision Tree for Font Sizes:**

```
Is it a hero section or page title?
  ├─ Yes → Use 5xl (desktop), 4xl (tablet), 3xl (mobile)
  └─ No → Continue

Is it a major section header (H2)?
  ├─ Yes → Use 2xl (40px)
  └─ No → Continue

Is it a subsection header (H3)?
  ├─ Yes → Use xl (30px)
  └─ No → Continue

Is it featured/callout content or large body text?
  ├─ Yes → Use lg (23px)
  └─ No → Continue

Is it normal body text or paragraph?
  ├─ Yes → Use base (18px)
  └─ No → Continue

Is it terminal, code, caption, or small UI element?
  ├─ Yes → Use sm (14px)
  └─ No → Use xs (12px) for meta/labels/fine print
```

**Anti-Patterns:**

❌ **DON'T:** Create new font sizes outside the scale
```css
.custom-title {
  font-size: 35px; /* Random value breaks harmony */
}
```

✅ **DO:** Use existing scale tokens
```css
.custom-title {
  font-size: var(--font-size-xl); /* 30px - maintains harmony */
}
```

---

❌ **DON'T:** Use display sizes for body content
```css
.paragraph {
  font-size: var(--font-size-3xl); /* Too large for body text */
}
```

✅ **DO:** Use appropriate size for content type
```css
.paragraph {
  font-size: var(--font-size-base); /* 18px - readable body text */
}
```

---

**Heading Component Usage:**

```tsx
/* Page title - auto-sized to 5xl (h1 default) */
<Heading level={1}>Welcome</Heading>

/* Section header - auto-sized to 2xl (h2 default) */
<Heading level={2}>Our Services</Heading>

/* Subsection - auto-sized to xl (h3 default) */
<Heading level={3}>Technical Approach</Heading>

/* Smaller heading - auto-sized to lg (h4 default) */
<Heading level={4}>Details</Heading>

/* Override auto-sizing with explicit size */
<Heading level={2} size="3xl">Large Section Header</Heading>
```

**Auto-sizing defaults (aligned with fluid typography):**
- h1 → 5xl (95px)
- h2 → 2xl (40px)
- h3 → xl (30px)
- h4 → lg (23px)
- h5 → md (18px)
- h6 → sm (14px)

### Fluid Typography

The Heading component supports **fluid typography** via the `fluid` prop. Fluid headings scale smoothly between breakpoints using CSS `clamp()`, creating more responsive and visually harmonious layouts.

**When to use fluid:**
- Hero headings (H1 on landing pages)
- Large section headers where dramatic scaling enhances visual hierarchy
- Marketing/editorial content with flexible layouts

**When to use static (default):**
- UI elements (navigation, buttons, labels)
- Content with fixed layouts
- Small headings where fluidity isn't noticeable

**Examples:**

```tsx
/* Hero - fluid for dramatic scaling (30px → 53px → 95px) */
<Heading level={1} size="5xl" fluid>
  Enterprise Engineering
</Heading>

/* Section header - fluid for responsive hierarchy (18px → 30px → 40px) */
<Heading level={2} size="2xl" fluid>
  Our Services
</Heading>

/* UI heading - static for consistency */
<Heading level={3} size="lg">
  Dashboard Settings
</Heading>
```

**Section header with accent bar pattern:**

```tsx
<div className={styles['section-header']}>
  <div className={styles['accent-bar']} />
  <Heading level={2} size="2xl" fluid variant="accent" align="center">
    Featured Work
  </Heading>
</div>
```

```css
/* section.module.css */
.section-header {
  text-align: center;
}

.accent-bar {
  width: var(--spacing-20); /* 80px */
  height: var(--spacing-1); /* 4px */
  margin: 0 auto var(--spacing-6);
  background: linear-gradient(
    90deg,
    var(--accent-secondary),
    var(--accent-primary)
  );

  @media (--md-n-above) {
    margin-bottom: var(--spacing-8);
  }
}

.section-header h2 {
  margin-bottom: var(--spacing-12);

  @media (--md-n-above) {
    margin-bottom: var(--spacing-16);
  }
}
```

**Fluid scaling ranges:**
- **5xl** (Hero): 30px → 53px → 95px → 104px
- **2xl** (Section): 18px → 30px → 40px → 53px
- **xl** (Subsection): 18px → 23px → 30px → 40px
- **lg** (Body Large): 18px → 23px (minimal scaling)

**Why This System Matters:**

1. **Visual Harmony**: Mathematical ratios create natural rhythm
2. **Reduced Complexity**: 9 sizes (down from 12) = fewer decisions
3. **Clear Purpose**: Each size has a defined use case
4. **Professional Polish**: Matches industry standards (Stripe, GitHub, Medium)
5. **Maintainability**: Systematic approach = easier to update consistently
6. **Responsive by Design**: Fluid typography adapts seamlessly to viewport changes

---

## Project-Specific Context

**This file contains universal standards.**

For project-specific details (tech stack, design system values, component inventory), check if `project.md` exists in the root directory and read it.

If no `project.md` exists, these standards still apply for any React + TypeScript + CSS Modules project.
