# CRAFITY BEST PRACTICES & STANDARDS

**Version:** 1.0
**Date:** November 2024
**Purpose:** Knowledge base for team members and AI agents working on Crafity projects

---

## 📋 TABLE OF CONTENTS

1. [Project Philosophy](#1-project-philosophy)
2. [Code Organization](#2-code-organization)
3. [CSS & Styling Standards](#3-css--styling-standards)
4. [Component Patterns](#4-component-patterns)
5. [TypeScript Conventions](#5-typescript-conventions)
6. [Design Token System](#6-design-token-system)
7. [Responsive Design](#7-responsive-design)
8. [Performance Standards](#8-performance-standards)
9. [Linting & Code Quality](#9-linting--code-quality)
10. [Common Mistakes to Avoid](#10-common-mistakes-to-avoid)
11. [Git Workflow](#11-git-workflow)
12. [AI Agent Guidelines](#12-ai-agent-guidelines)

---

## 1. PROJECT PHILOSOPHY

### Core Principles

**Quality Over Speed**
- No shortcuts. Every line of code is maintainable.
- Write code that your future team will thank you for.
- If it's worth building, it's worth building right.

**Terminal Aesthetic Balance**
- Terminal elements = 30% accent, 70% clean typography
- Use terminal styling strategically, not everywhere
- Let content breathe with generous whitespace

**Design System First**
- Always use design tokens, never hardcode values
- Semantic naming over descriptive (e.g., `--text-primary` not `--white`)
- Consistency across all components

**Accessibility by Default**
- Semantic HTML elements
- Keyboard navigation support
- ARIA labels where needed
- Lighthouse accessibility score: 100

---

## 2. CODE ORGANIZATION

### Folder Structure

```
src/
├── components/
│   ├── common/           # Highly reusable UI components
│   │   ├── button/
│   │   ├── link/
│   │   ├── terminal-window/
│   │   └── [component]/
│   │       ├── [component].tsx
│   │       └── [component].module.css
│   │
│   ├── layout/           # Structural components
│   │   ├── header/
│   │   ├── footer/
│   │   ├── section-container/
│   │   └── page-container/
│   │
│   └── home/             # Page-specific components
│       ├── hero/
│       └── [section]/
│
├── css/
│   ├── tokens.css        # Main token import file
│   ├── color-tokens.css
│   ├── typography-tokens.css
│   ├── spacing-tokens.css
│   ├── border-tokens.css
│   ├── animation-tokens.css
│   ├── shadow-tokens.css
│   └── breakpoints.css
│
└── routes/               # TanStack Start routing
    ├── __root.tsx
    └── index.tsx
```

### File Naming Conventions

**Components:**
- Folder and file names: `kebab-case` (e.g., `section-container/`)
- Component name: `PascalCase` (e.g., `SectionContainer`)
- CSS Module: Match component file (e.g., `section-container.module.css`)

**CSS Classes:**
- Always use `kebab-case` (e.g., `.terminal-window`, `.nav-link`)
- Never use `camelCase` or `PascalCase` in CSS
- Use bracket notation in JSX when needed: `styles['bottom-text']`

---

## 3. CSS & STYLING STANDARDS

### Design Token Usage

**✅ ALWAYS USE TOKENS:**
```css
/* Good */
.container {
  padding: var(--spacing-8);
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: var(--border-width-thin) solid var(--border-default);
  transition: var(--transition-color);
}

/* Bad - hardcoded values */
.container {
  padding: 32px;
  color: #fafafa;
  background: #1a1a1a;
  border: 1px solid #333;
  transition: color 200ms ease-out;
}
```

### CSS Modules Pattern

**Every component has its own CSS Module:**
```tsx
// component-name.tsx
import styles from './component-name.module.css'

export function ComponentName() {
  return <div className={styles.container}>...</div>
}
```

**CSS Module Structure:**
```css
/* component-name.module.css */

/* Root element */
.container {
  /* Layout properties first */
  display: flex;
  padding: var(--spacing-8);

  /* Visual properties */
  background: var(--bg-primary);

  /* Typography */
  color: var(--text-primary);
  font-family: var(--font-family);

  /* Responsive */
  @media (--md-n-below) {
    padding: var(--spacing-4);
  }
}

/* Child elements */
.title {
  margin-bottom: var(--spacing-4);
  color: var(--accent-primary);
}

/* State variations */
.container:hover {
  background: var(--bg-secondary);
}
```

### Property Order (Stylelint Enforced)

Stylelint automatically orders CSS properties using `stylelint-config-idiomatic-order`:

1. Positioning (position, top, right, bottom, left, z-index)
2. Display & Box Model (display, flex, grid, width, height, padding, margin)
3. Visual (background, border, box-shadow)
4. Typography (color, font-family, font-size, line-height)
5. Other (cursor, transition, animation)

**Let autofix handle this:** Run `pnpm run stylelint:fix`

### Conditional Classes with clsx

**✅ USE clsx FOR MULTIPLE CLASSES:**
```tsx
import { clsx } from 'clsx'

// Good - clean and readable
<div className={clsx(styles.card, large && styles.large, className)} />

// Good - conditional styling
<div className={clsx(!unstyled && styles.link, className)} />

// Bad - manual string manipulation
<div className={[styles.card, className].filter(Boolean).join(' ')} />
```

### Global Typography Defaults

**Define typography in global.css to reduce duplication:**
```css
/* global.css */

/* Semantic HTML defaults */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--accent-font-family);
  font-weight: var(--font-weight-bold);
}

h1 {
  font-size: var(--font-size-h1);
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-tight);
}

p {
  font-size: var(--font-size-body);
  line-height: var(--line-height-loose);
}

code, kbd, pre {
  font-family: var(--mono-font-family);
  font-size: var(--font-size-terminal);
}
```

**Only override when necessary:**
```css
/* Component override when needed */
.title {
  /* Override default h2 styling */
  font-size: var(--font-size-hero);
}
```

---

## 4. COMPONENT PATTERNS

### Component Template

**Standard component structure:**
```tsx
import { ReactNode } from 'react'
import { clsx } from 'clsx'

import styles from './component-name.module.css'

interface ComponentNameProps {
  children: ReactNode
  className?: string
  id?: string
}

export function ComponentName({ children, className, id }: ComponentNameProps) {
  return (
    <div className={clsx(styles.container, className)} id={id}>
      {children}
    </div>
  )
}
```

### Props Interface Standards

**✅ ALWAYS:**
- Define explicit interfaces for all props
- Sort props alphabetically (enforced by ESLint)
- Use `ReactNode` for children
- Support `className` for extensibility
- Use optional props with `?` when appropriate

```tsx
interface CardProps {
  children: ReactNode
  className?: string
  description: string
  large?: boolean
  title: string
}
```

### Smart Link Component Pattern

**Automatic link type detection:**
```tsx
export function Link({ children, className, href, unstyled }: LinkProps) {
  const linkClassName = clsx(!unstyled && styles.link, className)

  // External links (http/https)
  if (href.startsWith('http://') || href.startsWith('https://')) {
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
    return <a className={linkClassName} href={href}>{children}</a>
  }

  // Protocol links (mailto:, tel:)
  if (href.startsWith('mailto:') || href.startsWith('tel:')) {
    return <a className={linkClassName} href={href}>{children}</a>
  }

  // Internal routes (TanStack Router)
  return <RouterLink className={linkClassName} to={href}>{children}</RouterLink>
}
```

**Benefits:**
- DRY principle - no repeated `target="_blank" rel="noopener noreferrer"`
- Automatic security for external links
- Works with both plain anchors and TanStack Router
- Single component to maintain

### Component Composition

**Support className prop for extensibility:**
```tsx
// Parent component can extend styling
<TerminalWindow className={styles.customTerminal} title="crafity">
  {content}
</TerminalWindow>

// TerminalWindow accepts and merges className
export function TerminalWindow({ children, className, title }: Props) {
  return <div className={clsx(styles.terminal, className)}>
    {/* ... */}
  </div>
}
```

---

## 5. TYPESCRIPT CONVENTIONS

### Strict Mode Always

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### Type Safety

**✅ DO:**
```tsx
// Explicit interface
interface StatProps {
  label: string
  number: string
}

export function Stat({ label, number }: StatProps) {
  return <div>{number} {label}</div>
}
```

**❌ DON'T:**
```tsx
// Implicit any
export function Stat(props) {
  return <div>{props.number} {props.label}</div>
}
```

### Import Organization (ESLint Enforced)

**Automatic import sorting via `simple-import-sort`:**
```tsx
// 1. React first
import { ReactNode } from 'react'

// 2. External packages
import { Link as RouterLink } from '@tanstack/react-router'
import { clsx } from 'clsx'

// 3. Internal imports (relative paths)
import styles from './component.module.css'
```

**Let autofix handle this:** ESLint will automatically sort imports

---

## 6. DESIGN TOKEN SYSTEM

### Token Categories

**All tokens defined in `/src/css/` folder:**

1. **color-tokens.css** - Semantic color names
2. **typography-tokens.css** - Font families, sizes, weights, line heights
3. **spacing-tokens.css** - Consistent spacing scale (4px base)
4. **border-tokens.css** - Border widths, radius, shortcuts
5. **animation-tokens.css** - Durations, easings, transitions
6. **shadow-tokens.css** - Box shadows and glow effects
7. **breakpoints.css** - Responsive breakpoints

### Semantic Naming Convention

**✅ USE SEMANTIC NAMES:**
```css
:root {
  /* What it IS (semantic) */
  --bg-primary: #0a0a0a;
  --text-primary: #fafafa;
  --accent-primary: #ff4500;
}
```

**❌ DON'T USE DESCRIPTIVE NAMES:**
```css
:root {
  /* What it LOOKS LIKE (descriptive) */
  --black: #0a0a0a;
  --white: #fafafa;
  --orange-red: #ff4500;
}
```

**Why?** Semantic names work with both light and dark themes:
```css
/* Dark theme */
:root {
  --bg-primary: #0a0a0a;    /* black */
  --text-primary: #fafafa;   /* white */
}

/* Light theme */
[data-theme='light'] {
  --bg-primary: #fafafa;     /* white */
  --text-primary: #0a0a0a;   /* black */
}
```

### Theme Support

**Both dark and light themes fully defined:**
```css
/* color-tokens.css */
:root {
  /* Dark theme (default) */
  --bg-primary: #0a0a0a;
  --text-primary: #fafafa;
}

[data-theme='light'] {
  /* Light theme */
  --bg-primary: #fafafa;
  --text-primary: #0a0a0a;
}
```

### Shadow Token Pattern

**Standardize box-shadows:**
```css
/* shadow-tokens.css */
:root {
  --shadow-small: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  --shadow-medium: 0 3px 6px rgb(0 0 0 / 15%), 0 2px 4px rgb(0 0 0 / 12%);
  --shadow-large: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
  --shadow-glow-blue: 0 0 60px rgb(149 197 239 / 15%);
  --shadow-glow-red: 0 0 60px rgb(255 69 0 / 15%);
}

[data-theme='light'] {
  --shadow-glow-blue: 0 0 60px rgb(37 99 235 / 12%);
  --shadow-glow-red: 0 0 60px rgb(220 38 38 / 12%);
}
```

**Usage:**
```css
.terminal {
  box-shadow: var(--shadow-glow-blue);
}
```

---

## 7. RESPONSIVE DESIGN

### Breakpoint System

**Custom media queries in breakpoints.css:**
```css
@custom-media --sm (width >= 640px);
@custom-media --md (width >= 768px);
@custom-media --lg (width >= 1024px);
@custom-media --xl (width >= 1280px);
@custom-media --xxl (width >= 1536px);

/* Inverse breakpoints (n-below = and below) */
@custom-media --sm-n-below (width < 640px);
@custom-media --md-n-below (width < 768px);
@custom-media --lg-n-below (width < 1024px);
@custom-media --xl-n-below (width < 1280px);
@custom-media --xxl-n-below (width < 1536px);
```

### Mobile-First Approach

**✅ MOBILE FIRST:**
```css
/* Base styles (mobile) */
.container {
  padding: var(--spacing-4);
  font-size: var(--font-size-body-small);
}

/* Enhance for larger screens */
@media (--md) {
  .container {
    padding: var(--spacing-8);
    font-size: var(--font-size-body);
  }
}
```

**Common mobile adjustments:**
```css
@media (--md-n-below) {
  .grid {
    grid-template-columns: 1fr; /* Single column */
  }

  .title {
    font-size: 40px; /* Smaller hero text */
  }

  .card {
    padding-left: var(--spacing-8); /* Remove indents */
  }
}
```

---

## 8. PERFORMANCE STANDARDS

### Lighthouse Targets

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Bundle Size Goals

- **Initial JS:** < 100kb (gzipped)
- **Initial CSS:** < 20kb (gzipped)
- **Fonts:** < 150kb total

### Font Loading

**Self-host fonts, preload critical fonts:**
```tsx
// __root.tsx
<head>
  <link
    as="font"
    crossOrigin="anonymous"
    href="/fonts/space-grotesk-bold.woff2"
    rel="preload"
    type="font/woff2"
  />
</head>
```

---

## 9. LINTING & CODE QUALITY

### Available Commands

```bash
# TypeScript + ESLint
pnpm run lint          # Check for errors
pnpm run lint:fix      # Auto-fix errors

# Stylelint (CSS)
pnpm run stylelint     # Check CSS
pnpm run stylelint:fix # Auto-fix CSS

# Build
pnpm run build         # Production build
```

### Pre-commit Checklist

**Before committing:**
1. ✅ Run `pnpm run lint:fix`
2. ✅ Run `pnpm run stylelint:fix`
3. ✅ Run `pnpm run build` (ensure no errors)
4. ✅ Test in browser
5. ✅ Check responsive design

### ESLint Key Rules

**Automatically enforced:**
- Import sorting (React first, then external packages, then relative)
- JSX prop sorting (reserved props first, alphabetical)
- Interface/type key sorting
- Unused import removal
- Console.log warnings (use console.error or console.warn)
- Destructured prop sorting

### Stylelint Key Rules

**Automatically enforced:**
- Property ordering (idiomatic order)
- kebab-case class names
- Font family name quotes
- Max nesting depth: 4 levels
- CSS Modules validation

---

## 10. COMMON MISTAKES TO AVOID

### CSS Mistakes

**❌ DON'T: Hardcode values**
```css
.card {
  padding: 32px;
  color: #fafafa;
}
```

**✅ DO: Use tokens**
```css
.card {
  padding: var(--spacing-8);
  color: var(--text-primary);
}
```

---

**❌ DON'T: Repeat font-family everywhere**
```css
.title { font-family: 'Space Grotesk', sans-serif; }
.heading { font-family: 'Space Grotesk', sans-serif; }
```

**✅ DO: Set global defaults**
```css
/* global.css */
h1, h2, h3 { font-family: var(--accent-font-family); }
```

---

**❌ DON'T: Use camelCase in CSS**
```css
.bottomText { color: var(--text-secondary); }
```

**✅ DO: Use kebab-case**
```css
.bottom-text { color: var(--text-secondary); }
```

---

### Component Mistakes

**❌ DON'T: Manual className joining**
```tsx
const className = [styles.card, large && styles.large]
  .filter(Boolean)
  .join(' ')
```

**✅ DO: Use clsx**
```tsx
const className = clsx(styles.card, large && styles.large)
```

---

**❌ DON'T: Repeat link attributes**
```tsx
<a href="https://..." target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a href="https://..." target="_blank" rel="noopener noreferrer">GitHub</a>
```

**✅ DO: Use Link component**
```tsx
<Link href="https://...">LinkedIn</Link>
<Link href="https://...">GitHub</Link>
```

---

**❌ DON'T: Omit prop interfaces**
```tsx
export function Card(props) {
  return <div>{props.title}</div>
}
```

**✅ DO: Define explicit interfaces**
```tsx
interface CardProps {
  title: string
}

export function Card({ title }: CardProps) {
  return <div>{title}</div>
}
```

---

### TypeScript Mistakes

**❌ DON'T: Use `any`**
```tsx
const handleClick = (event: any) => { /* ... */ }
```

**✅ DO: Use proper types**
```tsx
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { /* ... */ }
```

---

**❌ DON'T: Ignore TypeScript errors**
```tsx
// @ts-ignore
const result = dangerousFunction()
```

**✅ DO: Fix the underlying issue**
```tsx
const result = safeFunctionWithTypes()
```

---

## 11. GIT WORKFLOW

### Commit Message Format

**Use conventional commits:**
```
feat: add shadow tokens for consistent box-shadows
fix: correct terminal window border color in light theme
refactor: replace manual className joining with clsx
docs: update best practices with new token patterns
chore: update dependencies
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring (no behavior change)
- `docs`: Documentation
- `style`: Formatting (no code change)
- `chore`: Maintenance

### Branch Naming

```
feature/shadow-tokens
fix/footer-link-colors
refactor/use-clsx
docs/best-practices
```

### Pull Request Checklist

**Before creating PR:**
- [ ] All linting passes
- [ ] Build succeeds
- [ ] Tested in browser (Chrome, Firefox, Safari)
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] No console errors
- [ ] Accessibility checked (keyboard navigation)

---

## 12. AI AGENT GUIDELINES

### When Working with Claude Code or AI Assistants

**✅ DO:**
- Provide context about design tokens and component patterns
- Reference this document when asking for help
- Ask agent to use existing patterns (Link component, clsx, tokens)
- Request linting after code changes
- Verify changes work in browser

**❌ DON'T:**
- Let agent hardcode values instead of using tokens
- Accept solutions that don't match project patterns
- Skip linting/building after changes
- Assume generated code follows all conventions

### Effective Prompts

**Good prompt examples:**
```
Create a new Card component following project patterns:
- Use design tokens from src/css/
- Support className prop for extensibility
- Use clsx for conditional classes
- Include TypeScript interface
- Add CSS Module with kebab-case classes
```

```
Refactor this component to use:
- clsx instead of manual className joining
- Link component instead of plain <a> tags
- Shadow tokens instead of hardcoded box-shadow
Then run linting to verify
```

### Common Agent Mistakes to Watch For

1. **Hardcoded values** - Always check generated CSS uses tokens
2. **Missing clsx** - Component should use clsx when combining classes
3. **Incorrect import order** - Let ESLint fix this automatically
4. **camelCase CSS classes** - Should be kebab-case
5. **Missing TypeScript types** - Interfaces should be explicit

---

## 13. QUICK REFERENCE

### Essential Commands

```bash
# Development
pnpm run dev                    # Start dev server

# Linting
pnpm run lint:fix              # Fix ESLint errors
pnpm run stylelint:fix         # Fix CSS errors

# Build
pnpm run build                 # Production build

# Docker
pnpm run docker:build          # Build Docker image
pnpm run docker:run            # Run Docker container
```

### File Checklist for New Components

When creating a new component, ensure you have:

1. [ ] Component file: `component-name.tsx`
2. [ ] CSS Module: `component-name.module.css`
3. [ ] TypeScript interface for props
4. [ ] `className` prop for extensibility
5. [ ] Design tokens (no hardcoded values)
6. [ ] clsx for conditional classes
7. [ ] Export from parent folder's index.ts (if applicable)

### Token Reference

**Common tokens you'll use most:**
```css
/* Colors */
--bg-primary, --bg-secondary
--text-primary, --text-secondary
--accent-primary, --accent-secondary
--border-default

/* Spacing */
--spacing-2, --spacing-4, --spacing-8, --spacing-16

/* Typography */
--font-family, --mono-font-family, --accent-font-family
--font-size-body, --font-size-h1, --font-size-terminal
--line-height-normal, --line-height-loose

/* Animation */
--transition-color, --transition-all
--duration-normal, --ease-out

/* Shadows */
--shadow-small, --shadow-glow-blue
```

---

## 14. LEARNING RESOURCES

### Project Documentation

- **CRAFITY_IMPLEMENTATION_GUIDE.md** - Technical implementation specs
- **CRAFITY_HOMEPAGE_MASTER_CONTENT.md** - Content and copy
- **CRAFITY_BEST_PRACTICES.md** - This document

### Key Technologies

- [TanStack Start](https://tanstack.com/start) - Meta-framework
- [React 19](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped styles
- [PostCSS](https://postcss.org) - CSS processing
- [clsx](https://github.com/lukeed/clsx) - Conditional classes

---

## 15. PHILOSOPHY SUMMARY

**Remember:**

1. **Quality Over Speed** - Do it right the first time
2. **Design Tokens Always** - No hardcoded values
3. **Semantic Naming** - What it IS, not what it LOOKS LIKE
4. **Component Composition** - Support className for extensibility
5. **TypeScript Strict** - Types catch bugs early
6. **Accessibility First** - Build for everyone
7. **Mobile First** - Start small, enhance for larger screens
8. **Let Tools Help** - ESLint, Stylelint, and TypeScript are your friends
9. **DRY Principle** - Don't Repeat Yourself (Link component, global typography)
10. **Document Decisions** - Update this file when patterns emerge

---

**Built with passion. Maintained with care.**

---

**END OF BEST PRACTICES DOCUMENT**

**Version:** 1.0
**Last Updated:** November 2024
**Next Review:** When new patterns emerge or team grows
