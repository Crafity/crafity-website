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

/* Spacing */
--spacing-4, --spacing-8, --spacing-16

/* Typography */
--font-family, --mono-font-family, --accent-font-family
--font-size-base, --font-size-lg, --font-size-xl

/* Animation */
--transition-color, --transition-all
--duration-normal, --ease-out
```

---

## Project-Specific Context

**This file contains universal standards.**

For project-specific details (tech stack, design system values, component inventory), check if `project.md` exists in the root directory and read it.

If no `project.md` exists, these standards still apply for any React + TypeScript + CSS Modules project.
