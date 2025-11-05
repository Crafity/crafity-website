# CRAFITY HOMEPAGE - IMPLEMENTATION GUIDE

**Version:** 1.0  
**Date:** November 2024  
**Status:** Ready for Implementation  
**Tool:** Claude Code (VS Code)

---

## 📋 TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Component Architecture](#component-architecture)
4. [Token System](#token-system)
5. [Build Strategy](#build-strategy)
6. [Chunks 1-12: Detailed Specs](#implementation-chunks)
7. [Code Patterns](#code-patterns)
8. [Testing & Validation](#testing--validation)
9. [Performance Targets](#performance-targets)
10. [Deployment](#deployment)

---

## 1. PROJECT OVERVIEW

### **Goal**
Build Crafity's homepage - a boutique engineering firm's showcase site with terminal aesthetic and bold typography.

### **Key Features**
- Dark/Light theme with system preference detection
- Terminal aesthetic (30% accent, 70% clean typography)
- Asymmetric layouts with geometric accents
- Responsive design (mobile-first)
- Zero JavaScript animations (CSS only)
- Performance target: Lighthouse 95+ all metrics

### **Content Source**
All content is defined in `CRAFITY_HOMEPAGE_MASTER_CONTENT.md` (companion document).

---

## 2. TECH STACK

### **Core**
```json
{
  "framework": "TanStack Start v1.134.9",
  "runtime": "React 19.2.0",
  "language": "TypeScript (strict mode)",
  "styling": "CSS Modules + PostCSS",
  "package-manager": "pnpm",
  "deployment": "Docker (Vercel/Cloudflare Pages recommended)"
}
```

### **Already Configured**
- ✅ ESLint (comprehensive rules)
- ✅ Prettier (code formatting)
- ✅ Stylelint (CSS linting)
- ✅ PostCSS (nested, custom-media, autoprefixer)
- ✅ TypeScript strict mode
- ✅ Breakpoints system

### **Fonts (Self-hosted)**
- Space Grotesk Bold (display/headers)
- Inter Regular + Medium (body)
- JetBrains Mono Regular + Bold (terminal/code)

---

## 3. COMPONENT ARCHITECTURE

### **Folder Structure**
```
src/components/
├── common/              # Highly reusable
│   ├── button/         ✅ (exists, needs token update)
│   ├── link/
│   ├── terminal-window/
│   ├── tech-stack/
│   ├── stat/
│   └── theme-toggle/
│
├── layout/              # Structural
│   ├── page-container/ ✅ (exists)
│   ├── section-container/
│   ├── header/         ✅ (exists, needs token cleanup)
│   └── footer/
│
└── home/                # Homepage-specific
    ├── hero/
    ├── client-trust/
    ├── featured-work/
    ├── services/
    ├── approach/
    └── cta/
```

### **Total Components: ~31**
- Common/UI: 8
- Layout: 5
- Homepage sections: 18

---

## 4. TOKEN SYSTEM

### **Current State**
Basic tokens exist but need restructuring:
- ✅ Spacing system (good)
- ✅ Breakpoints (good)
- ⚠️ Colors (needs semantic naming)
- ⚠️ Typography (needs expansion)
- ❌ Animations (missing)

### **Target Token Structure**

#### **Color Tokens (Semantic Naming)**
```css
/* color-tokens.css */
:root {
  /* Backgrounds */
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #2a2a2a;
  
  /* Text */
  --text-primary: #fafafa;
  --text-secondary: rgba(250, 250, 250, 0.7);
  --text-tertiary: rgba(250, 250, 250, 0.5);
  
  /* Accents */
  --accent-primary: #ff4500;      /* Orange-red */
  --accent-secondary: #95c5ef;    /* Blue */
  
  /* Borders */
  --border-subtle: #1a1a1a;
  --border-default: #333333;
  --border-strong: #4a4a4a;
  
  /* Terminal */
  --terminal-red: #ff4500;
  --terminal-yellow: #ffcc00;
  --terminal-blue: #95c5ef;
  
  /* Grid overlay */
  --grid-color: rgba(149, 197, 239, 0.03);
}

[data-theme='light'] {
  --bg-primary: #fafafa;
  --bg-secondary: #ffffff;
  --bg-tertiary: #f5f5f5;
  --text-primary: #0a0a0a;
  --text-secondary: rgba(10, 10, 10, 0.7);
  --accent-primary: #dc2626;      /* Darker red */
  --accent-secondary: #2563eb;    /* Darker blue */
  --border-default: #e5e5e5;
  --terminal-red: #dc2626;
  --terminal-yellow: #fbbf24;
  --terminal-blue: #2563eb;
  --grid-color: rgba(37, 99, 235, 0.03);
}
```

#### **Typography Tokens**
```css
/* typography-tokens.css */
:root {
  /* Font Families */
  --font-family: 'Inter', sans-serif;
  --mono-font-family: 'JetBrains Mono', monospace;
  --accent-font-family: 'Space Grotesk', sans-serif;

  /* Font Sizes */
  --font-size-hero: 96px;
  --font-size-h1: 60px;
  --font-size-h2: 52px;
  --font-size-h3: 40px;
  --font-size-h4: 32px;
  --font-size-h5: 28px;
  --font-size-h6: 24px;
  --font-size-body-large: 20px;
  --font-size-body: 18px;
  --font-size-body-small: 16px;
  --font-size-terminal: 14px;
  --font-size-meta: 12px;

  /* Line Heights */
  --line-height-tight: 1.1;
  --line-height-normal: 1.2;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.7;

  /* Letter Spacing */
  --letter-spacing-hero: -2px;
  --letter-spacing-tight: -1.5px;
  --letter-spacing-normal: -1px;
  --letter-spacing-wide: 1px;
  --letter-spacing-wider: 2px;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

#### **Animation Tokens**
```css
/* animation-tokens.css */
:root {
  /* Durations */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;

  /* Easings */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Transitions */
  --transition-color: color var(--duration-normal) var(--ease-out);
  --transition-bg: background-color var(--duration-normal) var(--ease-out);
  --transition-opacity: opacity var(--duration-normal) var(--ease-out);
  --transition-transform: transform var(--duration-normal) var(--ease-out);
  --transition-all: all var(--duration-normal) var(--ease-out);
}
```

#### **Border Tokens**
```css
/* border-tokens.css */
:root {
  /* Widths */
  --border-width-thin: var(--spacing-0-1);    /* 1px */
  --border-width-medium: var(--spacing-0-5);  /* 2px */
  --border-width-thick: var(--spacing-1);     /* 4px */
  
  /* Radius */
  --radius-small: 4px;
  --radius-medium: 8px;
  --radius-large: 12px;
  --radius-full: 9999px;
  
  /* Shortcuts */
  --border-default: var(--border-width-thin) solid var(--border-default);
  --border-accent: var(--border-width-medium) solid var(--accent-primary);
}
```

#### **Spacing Tokens**
```css
/* spacing-tokens.css (rename from unit-tokens.css) */
/* Keep existing - already good! */
:root {
  --spacing-0: 0px;
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  /* ... up to */
  --spacing-96: 24rem;   /* 384px */
}
```

---

## 5. BUILD STRATEGY

### **Incremental Approach**
Build in 12 reviewable chunks, each independently testable.

### **Token Usage Optimization**
- Use **Sonnet 4** for components (90% of work)
- Use **Haiku** for CSS tweaks/polish
- Batch related files in single requests
- Keep conversations going for iterations

### **Validation Per Chunk**
Each chunk must be:
1. ✅ Visually correct (matches design)
2. ✅ Responsive (mobile tested)
3. ✅ Accessible (keyboard nav, semantic HTML)
4. ✅ Performance (no console errors)

---

## 6. IMPLEMENTATION CHUNKS

---

### **CHUNK 1: Design Tokens Cleanup** 🔧

**Goal:** Restructure tokens with semantic naming, add missing tokens.

**Model:** Sonnet 4  
**Estimated tokens:** ~12k  
**Files changed:** 7

#### **Tasks**
1. Restructure `color-tokens.css`:
   - Replace generic names (`--color`, `--color-dark`) with semantic (`--text-primary`, `--bg-primary`)
   - Add light theme variables `[data-theme='light']`
   - Add terminal color tokens
   - Add border color tokens

2. Expand `typography-tokens.css`:
   - Add font size scale (hero → meta)
   - Add line height scale
   - Add letter spacing scale
   - Add font weight tokens

3. Create `animation-tokens.css`:
   - Duration tokens
   - Easing tokens
   - Transition shortcut tokens

4. Expand `border-tokens.css`:
   - Add border radius tokens
   - Add border shortcut tokens

5. Rename `unit-tokens.css` → `spacing-tokens.css`

6. Update `tokens.css` to import new files

7. Update existing components to use new token names:
   - `header/navigation.module.css`
   - `header/logo.module.css`
   - `button/button.module.css`

#### **Validation**
- [ ] Header looks identical (visual regression)
- [ ] All tokens follow naming convention
- [ ] Light theme variables defined (not yet applied)
- [ ] No console errors
- [ ] Stylelint passes

#### **Example Prompt for Claude Code**
```
Restructure CSS tokens with semantic naming:

1. Update color-tokens.css:
   - Replace --color → --text-primary
   - Replace --color-dark → --bg-primary
   - Replace --color-gray → --border-default
   - Add --text-secondary, --bg-secondary, --accent-primary (#ff4500)
   - Add light theme: [data-theme='light'] { ... }

2. Expand typography-tokens.css:
   - Add font sizes: --font-size-hero (96px) → --font-size-meta (12px)
   - Add line heights: --line-height-tight (1.1) → --line-height-loose (1.7)
   - Add letter spacing: --letter-spacing-hero (-2px) → --letter-spacing-wider (2px)

3. Create animation-tokens.css:
   - Add --duration-* tokens (instant → slower)
   - Add --ease-* tokens (in, out, in-out)
   - Add --transition-* shortcuts

4. Expand border-tokens.css:
   - Add --radius-* tokens
   - Add border shortcuts

5. Update Header components (navigation.module.css, logo.module.css):
   - Replace hard-coded colors with new tokens
   - Keep visual appearance identical

Keep existing spacing tokens as-is (already good).
```

---

### **CHUNK 2: Layout Foundation** 🏗️

**Goal:** Create SectionContainer and basic Footer structure.

**Model:** Sonnet 4  
**Estimated tokens:** ~10k  
**Files changed:** 4

#### **Tasks**
1. Create `layout/section-container/`:
   - Wrapper for sections with consistent vertical spacing
   - Props: `id`, `className`, `children`
   - Vertical padding: 100px desktop, 60px mobile

2. Create `layout/footer/` (basic structure):
   - 4 columns: Crafity, Navigate, Connect, Legal
   - Footer bottom: copyright, KvK, VAT
   - Terminal `$ exit` at bottom

3. Update `routes/index.tsx`:
   - Wrap sections in SectionContainer
   - Add Footer

#### **Component Specs**

**SectionContainer:**
```tsx
// layout/section-container/section-container.tsx
interface SectionContainerProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section className={cn(styles.section, className)} id={id}>
      {children}
    </section>
  )
}
```

```css
/* section-container.module.css */
.section {
  padding: var(--spacing-24) 0; /* 96px */
  
  @media (--lg-n-below) {
    padding: var(--spacing-16) 0; /* 64px */
  }
}
```

**Footer (basic structure):**
```tsx
// layout/footer/footer.tsx
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.logo}>CRAFITY</div>
          <div className={styles.tagline}>Built with passion</div>
          <div className={styles.year}>Since 2010</div>
        </div>
        
        <div className={styles.column}>
          <div className={styles.title}>NAVIGATE</div>
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className={styles.column}>
          <div className={styles.title}>CONNECT</div>
          <a href="https://www.linkedin.com/company/crafity">LinkedIn</a>
          <a href="https://github.com/crafity">GitHub</a>
        </div>
        
        <div className={styles.column}>
          <div className={styles.title}>LEGAL</div>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      
      <div className={styles.divider} />
      
      <div className={styles.bottom}>
        <div>© 2010-2025 Crafity · Haarlem, Netherlands</div>
        <div>KvK: 62274198 · VAT: NL8547.39.877.B.01</div>
      </div>
      
      <div className={styles.exit}>$ exit</div>
    </footer>
  )
}
```

#### **Validation**
- [ ] SectionContainer adds consistent spacing
- [ ] Footer renders all links correctly
- [ ] Footer is responsive
- [ ] All links functional
- [ ] No console errors

---

### **CHUNK 3: Common Components** 🧩

**Goal:** Build reusable components needed by multiple sections.

**Model:** Sonnet 4  
**Estimated tokens:** ~12k  
**Files changed:** 6

#### **Components to Create**

**1. TerminalWindow**
```tsx
// common/terminal-window/terminal-window.tsx
interface TerminalWindowProps {
  children: ReactNode
  title?: string
  className?: string
}

export function TerminalWindow({ children, className, title }: TerminalWindowProps) {
  return (
    <div className={cn(styles.terminal, className)}>
      <div className={styles.header}>
        <div className={styles.dots}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="blue" />
        </div>
        {title && <div className={styles.title}>{title}</div>}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
```

```css
/* terminal-window.module.css */
.terminal {
  padding: var(--spacing-6);
  border: var(--border-width-medium) solid var(--accent-secondary);
  background: var(--bg-secondary);
  box-shadow: 0 0 60px rgba(149, 197, 239, 0.15);
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-5);
  gap: var(--spacing-3);
}

.dots {
  display: flex;
  gap: var(--spacing-2);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  
  &[data-color='red'] {
    background: var(--terminal-red);
  }
  
  &[data-color='yellow'] {
    background: var(--terminal-yellow);
  }
  
  &[data-color='blue'] {
    background: var(--terminal-blue);
  }
}

.title {
  color: var(--text-secondary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-terminal);
}

.content {
  color: var(--text-primary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-terminal);
  line-height: var(--line-height-relaxed);
}
```

**2. Stat Component**
```tsx
// common/stat/stat.tsx
interface StatProps {
  number: string
  label: string
}

export function Stat({ label, number }: StatProps) {
  return (
    <div className={styles.stat}>
      <div className={styles.number}>{number}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}
```

```css
/* stat.module.css */
.stat {
  padding: var(--spacing-8);
  border: var(--border-width-thin) solid var(--border-default);
  background: var(--bg-secondary);
  text-align: center;
}

.number {
  margin-bottom: var(--spacing-2);
  color: var(--accent-primary);
  font-family: var(--accent-font-family);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-normal);
  line-height: var(--line-height-tight);
}

.label {
  color: var(--text-primary);
  font-family: var(--font-family);
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-normal);
}
```

**3. Link Component**
```tsx
// common/link/link.tsx
interface LinkProps {
  children: ReactNode
  href: string
  external?: boolean
}

export function Link({ children, external, href }: LinkProps) {
  return (
    <a 
      className={styles.link}
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}>
      {children}
    </a>
  )
}
```

```css
/* link.module.css */
.link {
  color: var(--accent-secondary);
  text-decoration: none;
  transition: var(--transition-color);
  
  &:hover {
    color: var(--accent-primary);
  }
}
```

#### **Validation**
- [ ] TerminalWindow renders with dots
- [ ] Stat component displays number + label
- [ ] Link component handles internal/external
- [ ] All styled with tokens
- [ ] No console errors

---

### **CHUNK 4: Hero Section** 🎯

**Goal:** Build complete Hero section with terminal, statement, and stats.

**Model:** Sonnet 4  
**Estimated tokens:** ~18k  
**Files changed:** 8

#### **Content Reference**
See `CRAFITY_HOMEPAGE_MASTER_CONTENT.md` - Section 3: Hero Section

#### **Components**

**1. Hero Container**
```tsx
// home/hero/hero.tsx
export function Hero() {
  return (
    <div className={styles.hero}>
      <TerminalWindow title="crafity-init v14.0">
        <div className={styles.command}>
          crafity@enterprise:~$ ./deploy --quality=enterprise --speed=startup
        </div>
        <div className={styles.output}>
          &gt; Initializing deployment sequence...
        </div>
        <div className={styles.progress}>
          <div className={styles.progressLabel}>Loading engineering capabilities</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>
          <div className={styles.progressPercent}>100%</div>
        </div>
        <div className={styles.success}>
          ✓ System ready. 25+ years of experience loaded.
        </div>
        <div className={styles.success}>
          ✓ Trusted by: Sonic Equipment, Schiphol, eBay, CarNext
        </div>
      </TerminalWindow>
      
      <HeroStatement />
      <StatsGrid />
      <CommandInput />
    </div>
  )
}
```

**2. HeroStatement**
```tsx
// home/hero/hero-statement.tsx
export function HeroStatement() {
  return (
    <h1 className={styles.statement}>
      <span className={styles.line1}>ENTERPRISE-GRADE</span>
      <span className={styles.line2}>ENGINEERING</span>
      <span className={styles.line3}>WITH STARTUP DNA</span>
    </h1>
  )
}
```

```css
/* hero-statement.module.css */
.statement {
  max-width: 1200px;
  margin: var(--spacing-20) auto;
  font-family: var(--accent-font-family);
  font-size: var(--font-size-hero);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-hero);
  line-height: var(--line-height-tight);
  text-align: center;
  
  @media (--lg-n-below) {
    font-size: 56px;
  }
  
  @media (--md-n-below) {
    font-size: 40px;
  }
}

.line1 {
  display: block;
  color: var(--text-primary);
}

.line2 {
  display: block;
  color: var(--accent-primary);
}

.line3 {
  display: block;
  
  /* Gradient effect on "STARTUP" */
  .word-startup {
    color: var(--accent-secondary);
  }
}
```

**3. StatsGrid**
```tsx
// home/hero/stats-grid.tsx
export function StatsGrid() {
  return (
    <div className={styles.grid}>
      <Stat label="Years Experience" number="25+" />
      <Stat label="Projects Delivered" number="50+" />
      <Stat label="Built with Passion" number="100%" />
    </div>
  )
}
```

```css
/* stats-grid.module.css */
.grid {
  display: grid;
  max-width: 1000px;
  margin: var(--spacing-16) auto;
  gap: var(--spacing-8);
  grid-template-columns: repeat(3, 1fr);
  
  @media (--md-n-below) {
    grid-template-columns: 1fr;
  }
}
```

**4. CommandInput**
```tsx
// home/hero/command-input.tsx
export function CommandInput() {
  return (
    <a className={styles.command} href="#work">
      <span className={styles.prompt}>$</span>
      <span className={styles.text}>explore_work</span>
      <span className={styles.cursor}>_</span>
    </a>
  )
}
```

```css
/* command-input.module.css */
.command {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--spacing-16) auto 0;
  color: var(--text-primary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-body);
  gap: var(--spacing-2);
  text-decoration: none;
  transition: var(--transition-color);
  
  &:hover {
    color: var(--accent-secondary);
  }
}

.prompt {
  color: var(--accent-secondary);
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}
```

#### **Validation**
- [ ] Terminal window renders correctly
- [ ] Progress bar shows filled
- [ ] Hero statement has correct typography
- [ ] Stats grid shows 3 columns (1 on mobile)
- [ ] Command input cursor blinks
- [ ] All links work
- [ ] Responsive on mobile

---

### **CHUNK 5: Client Trust Bar** 🏢

**Goal:** Client logo section with featured + supporting clients.

**Model:** Sonnet 4  
**Estimated tokens:** ~8k  
**Files changed:** 3

#### **Content Reference**
See `CRAFITY_HOMEPAGE_MASTER_CONTENT.md` - Section 4: Client Trust Bar

#### **Component**
```tsx
// home/client-trust/client-trust.tsx
export function ClientTrust() {
  const featuredClients = [
    'Sonic Equipment',
    'Royal Schiphol Group',
    'eBay',
    'Picnic',
  ]
  
  const supportingClients = [
    'Brenntag',
    'CarNext',
    'Electronic Arts',
    'ING',
    'Nike',
    'Nederlands Spoorwegen',
    'T-Mobile',
    'Marktplaats',
  ]
  
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.label}>TRUSTED BY</div>
      <div className={styles.divider} />
      
      <div className={styles.featured}>
        {featuredClients.map(client => (
          <span className={styles.client} key={client}>{client}</span>
        ))}
      </div>
      
      <div className={styles.supporting}>
        {supportingClients.map(client => (
          <span className={styles.client} key={client}>{client}</span>
        ))}
      </div>
    </div>
  )
}
```

```css
/* client-trust.module.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.divider {
  height: 2px;
  margin-bottom: var(--spacing-8);
  background: linear-gradient(
    90deg,
    transparent,
    var(--border-default) 20%,
    var(--border-default) 80%,
    transparent
  );
}

.label {
  margin-bottom: var(--spacing-8);
  color: var(--text-secondary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-meta);
  letter-spacing: var(--letter-spacing-wide);
}

.featured {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: var(--spacing-6);
  gap: var(--spacing-6);
  
  .client {
    color: var(--accent-primary);
    font-family: var(--accent-font-family);
    font-size: var(--font-size-h6);
    font-weight: var(--font-weight-bold);
  }
}

.supporting {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-4);
  
  .client {
    color: var(--text-primary);
    font-family: var(--font-family);
    font-size: var(--font-size-body-small);
    
    &::after {
      margin-left: var(--spacing-4);
      content: '·';
    }
    
    &:last-child::after {
      content: '';
    }
  }
}
```

#### **Validation**
- [ ] Featured clients highlighted
- [ ] Supporting clients with separator dots
- [ ] Horizontal divider lines render
- [ ] Responsive text wrapping

---

### **CHUNK 6: Featured Work** 💼

**Goal:** Bento grid with 1 large + 2 small project cards.

**Model:** Sonnet 4  
**Estimated tokens:** ~15k  
**Files changed:** 6

#### **Content Reference**
See `CRAFITY_HOMEPAGE_MASTER_CONTENT.md` - Section 5: Featured Work

#### **Components**

**1. FeaturedWork Container**
```tsx
// home/featured-work/featured-work.tsx
export function FeaturedWork() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>FEATURED WORK</h2>
      
      <div className={styles.grid}>
        <ProjectCard
          client="SONIC EQUIPMENT"
          description="Transformed a legacy monolith into a modern headless architecture—without a single minute of downtime. Over 18 months, we orchestrated a complete platform evolution: from building the technical foundation and CI/CD pipelines to implementing a comprehensive design system. Every component was battle-tested in isolation before going live, so customers saw continuous improvements rather than waiting for the big reveal."
          large
          tags={['18 Months', 'TypeScript', 'Next.js', 'Algolia', 'CloudFlare', 'Azure']}
          title="Headless E-commerce Migration"
        />
        
        <ProjectCard
          client="SCHIPHOL"
          description="Built the next-generation monitoring system for one of Europe's busiest airports. Real-time data aggregation from dozens of sources, microfrontend architecture handling 24/7 operations, and a complete design system implementation. When the system goes down, planes don't move—we made sure it never does."
          tags={['10 Months', 'TypeScript', 'React', 'Microservices', 'Real-time Data']}
          title="Mission-Critical Operations Platform"
        />
        
        <ProjectCard
          client="CARNEXT"
          description="Three years building the digital backbone of a 22-country used car marketplace. Started with checkout optimization, evolved into full platform modernization. Migrated from monolith to event-driven microservices, integrated A/B testing at scale, and kept millions of transactions flowing smoothly while rebuilding the engine mid-flight."
          tags={['3 Years', 'TypeScript', 'Node.js', 'Kafka', 'Event-driven Architecture']}
          title="Pan-European E-commerce Platform"
        />
      </div>
    </div>
  )
}
```

**2. ProjectCard**
```tsx
// home/featured-work/project-card.tsx
interface ProjectCardProps {
  client: string
  title: string
  description: string
  tags: string[]
  large?: boolean
}

export function ProjectCard({ client, description, large, tags, title }: ProjectCardProps) {
  return (
    <div className={cn(styles.card, large && styles.large)}>
      <div className={styles.dots}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="blue" />
      </div>
      
      <div className={styles.header}>
        <div className={styles.client}>{client}</div>
        <div className={styles.title}>{title}</div>
      </div>
      
      <p className={styles.description}>{description}</p>
      
      <TechStack tags={tags} />
      
      <a className={styles.link} href="#">
        → View case study
      </a>
    </div>
  )
}
```

```css
/* project-card.module.css */
.card {
  display: flex;
  padding: var(--spacing-6);
  border: var(--border-width-medium) solid var(--border-default);
  background: var(--bg-secondary);
  flex-direction: column;
  transition: var(--transition-all);
  
  &:hover {
    border-color: var(--accent-secondary);
  }
}

.large {
  grid-row: span 2;
}

.dots {
  display: flex;
  margin-bottom: var(--spacing-5);
  gap: var(--spacing-2);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  
  &[data-color='red'] {
    background: var(--terminal-red);
  }
  
  &[data-color='yellow'] {
    background: var(--terminal-yellow);
  }
  
  &[data-color='blue'] {
    background: var(--terminal-blue);
  }
}

.header {
  margin-bottom: var(--spacing-4);
}

.client {
  margin-bottom: var(--spacing-2);
  color: var(--accent-primary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-terminal);
  letter-spacing: var(--letter-spacing-wide);
}

.title {
  color: var(--text-primary);
  font-family: var(--accent-font-family);
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-normal);
  line-height: var(--line-height-normal);
}

.description {
  margin-bottom: var(--spacing-6);
  color: var(--text-primary);
  font-family: var(--font-family);
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-relaxed);
}

.link {
  margin-top: auto;
  color: var(--accent-secondary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-body-small);
  text-decoration: none;
  transition: var(--transition-color);
  
  &:hover {
    color: var(--accent-primary);
  }
}
```

**3. TechStack**
```tsx
// common/tech-stack/tech-stack.tsx
interface TechStackProps {
  tags: string[]
}

export function TechStack({ tags }: TechStackProps) {
  return (
    <div className={styles.stack}>
      {tags.map(tag => (
        <span className={styles.tag} key={tag}>{tag}</span>
      ))}
    </div>
  )
}
```

```css
/* tech-stack.module.css */
.stack {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-4);
  gap: var(--spacing-2);
}

.tag {
  padding: var(--spacing-1) var(--spacing-3);
  border: var(--border-width-thin) solid var(--border-default);
  color: var(--text-secondary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-meta);
  white-space: nowrap;
  
  &::before {
    margin-right: var(--spacing-1);
    content: '·';
  }
}
```

**4. Grid Layout**
```css
/* featured-work.module.css */
.grid {
  display: grid;
  gap: var(--spacing-8);
  grid-template-columns: 2fr 1fr;
  
  @media (--lg-n-below) {
    grid-template-columns: 1fr;
  }
}
```

#### **Validation**
- [ ] Bento grid: 1 large (left), 2 small (right stack)
- [ ] Terminal dots on each card
- [ ] Hover states on cards
- [ ] Tech tags render correctly
- [ ] Mobile: single column
- [ ] Links are placeholder `#`

---

### **CHUNK 7: Services Section** ⚙️

**Goal:** 4 service cards with diagonal accents and alternating layouts.

**Model:** Sonnet 4  
**Estimated tokens:** ~12k  
**Files changed:** 4

#### **Content Reference**
See `CRAFITY_HOMEPAGE_MASTER_CONTENT.md` - Section 6: Services

#### **Component**
```tsx
// home/services/services.tsx
export function Services() {
  const services = [
    {
      description: "Legacy monolith holding you back? We migrate e-commerce platforms to modern headless architectures without disrupting your business. Zero downtime, incremental delivery, and customers who notice the improvements—not the construction.",
      examples: 'Sonic Equipment, Brenntag',
      number: '01',
      title: 'E-COMMERCE MODERNIZATION',
    },
    {
      description: "Your critical system is showing its age, but you can't afford to replace it overnight. We refactor, optimize, and modernize while keeping the lights on. Technical debt becomes technical assets, one careful step at a time.",
      examples: 'Schiphol, Picnic, Electronic Arts',
      number: '02',
      title: 'LEGACY SYSTEM RESCUE',
    },
    {
      description: "Need senior engineers who hit the ground running? We embed directly into your teams—attending stand-ups, using your tools, building actual features. Not advisors pointing from the sidelines. Engineers who ship code and mentor your team while doing it.",
      examples: 'eBay, ING, Nike',
      number: '03',
      title: 'SENIOR ENGINEERING CAPACITY',
    },
    {
      description: "Building something new from scratch? We design and deliver scalable platforms built for growth. Multi-tenant architectures, real-time systems, event-driven backends. Modern stack, battle-tested patterns, zero shortcuts.",
      examples: 'CarNext, Brenntag',
      number: '04',
      title: 'PLATFORM DEVELOPMENT',
    },
  ]
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>WHAT WE DO</h2>
      
      <div className={styles.services}>
        {services.map((service, index) => (
          <ServiceCard {...service} index={index} key={service.number} />
        ))}
      </div>
    </div>
  )
}
```

**ServiceCard:**
```tsx
// home/services/service-card.tsx
interface ServiceCardProps {
  title: string
  description: string
  examples: string
  number: string
  index: number
}

export function ServiceCard({ description, examples, index, number, title }: ServiceCardProps) {
  const isEven = index % 2 === 0
  
  return (
    <div className={cn(styles.card, isEven && styles.even)}>
      <div className={styles.accent} />
      
      <div className={styles.number}>{number}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.examples}>RECENT: {examples}</div>
    </div>
  )
}
```

```css
/* service-card.module.css */
.card {
  position: relative;
  padding: var(--spacing-10);
  padding-left: var(--spacing-12);
  
  &.even {
    padding-left: var(--spacing-16);
  }
}

.accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--accent-primary);
}

.even .accent {
  background: var(--accent-secondary);
}

.number {
  margin-bottom: var(--spacing-2);
  color: var(--accent-secondary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-terminal);
  letter-spacing: var(--letter-spacing-wide);
}

.even .number {
  color: var(--accent-primary);
}

.title {
  margin-bottom: var(--spacing-4);
  color: var(--text-primary);
  font-family: var(--accent-font-family);
  font-size: var(--font-size-h5);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-wide);
  line-height: var(--line-height-normal);
}

.description {
  margin-bottom: var(--spacing-4);
  color: var(--text-primary);
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
}

.examples {
  color: var(--text-secondary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-terminal);
  letter-spacing: var(--letter-spacing-wide);
}
```

#### **Validation**
- [ ] 4 services render
- [ ] Alternating indents (40px, 120px, 40px, 120px)
- [ ] Alternating accent colors (red, blue, red, blue)
- [ ] Vertical bars on left
- [ ] Client examples show

---

### **CHUNK 8: Approach Section** 🎨

**Goal:** Main statement + 4 principle cards with alternating layout.

**Model:** Sonnet 4  
**Estimated tokens:** ~12k  
**Files changed:** 4

#### **Content Reference**
See `CRAFITY_HOMEPAGE_MASTER_CONTENT.md` - Section 7: Approach

#### **Component**
```tsx
// home/approach/approach.tsx
export function Approach() {
  const principles = [
    {
      description: "We don't hack together solutions. Every line of code is written with maintainability in mind. We use proven patterns, write comprehensive tests, and document our decisions. Your future team will thank you.",
      title: 'NO SHORTCUTS',
    },
    {
      description: "Great code requires great collaboration. We invest in your people as much as your platform—mentoring developers, sharing knowledge, and creating an environment where everyone grows. The system we deliver is sustainable because the team we leave behind is capable.",
      title: 'BUILDING TEAMS, NOT JUST SYSTEMS',
    },
    {
      description: "25+ years of experience means we've seen it all. We guide architectural decisions, mentor junior developers, and help you avoid costly mistakes. We're not just coding—we're leading.",
      title: 'TECHNICAL LEADERSHIP',
    },
    {
      description: "We build systems that scale with your business. Not over-engineered, not under-engineered. Just right for where you are now and where you're going. Pragmatic solutions that work.",
      title: 'SUSTAINABLE GROWTH',
    },
  ]
  
  return (
    <div className={styles.container}>
      <h2 className={styles.statement}>
        BUILT TO LAST. BUILT WITH PASSION.
      </h2>
      
      <div className={styles.divider} />
      
      <div className={styles.principles}>
        {principles.map((principle, index) => (
          <PrincipleCard {...principle} index={index} key={principle.title} />
        ))}
      </div>
    </div>
  )
}
```

**PrincipleCard:**
```tsx
// home/approach/principle-card.tsx
interface PrincipleCardProps {
  title: string
  description: string
  index: number
}

export function PrincipleCard({ description, index, title }: PrincipleCardProps) {
  const isEven = index % 2 === 0
  
  return (
    <div className={cn(styles.card, isEven && styles.even)}>
      <div className={styles.bar} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
```

```css
/* principle-card.module.css */
.card {
  position: relative;
  padding: var(--spacing-10);
  padding-left: var(--spacing-12);
  
  &.even {
    padding-left: var(--spacing-24);
  }
}

.bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--accent-primary);
}

.even .bar {
  background: var(--accent-secondary);
}

.title {
  margin-bottom: var(--spacing-4);
  color: var(--text-primary);
  font-family: var(--accent-font-family);
  font-size: var(--font-size-h5);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-wide);
  line-height: var(--line-height-normal);
}

.description {
  color: var(--text-primary);
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
}
```

**Main Statement:**
```css
/* approach.module.css */
.statement {
  max-width: 800px;
  margin: 0 auto var(--spacing-16);
  color: var(--text-primary);
  font-family: var(--accent-font-family);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-tight);
  text-align: center;
}

.divider {
  height: 2px;
  max-width: 600px;
  margin: 0 auto var(--spacing-20);
  background: linear-gradient(
    90deg,
    var(--accent-secondary),
    var(--accent-primary)
  );
}

.principles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20);
}
```

#### **Validation**
- [ ] Main statement centered, big typography
- [ ] Gradient divider below statement
- [ ] 4 principles with alternating indents
- [ ] Alternating bar colors (red, blue, red, blue)
- [ ] 80px gap between principles

---

### **CHUNK 9: CTA Section** 📞

**Goal:** Simple call-to-action with terminal-styled button.

**Model:** Sonnet 4  
**Estimated tokens:** ~8k  
**Files changed:** 3

#### **Content Reference**
See `CRAFITY_HOMEPAGE_MASTER_CONTENT.md` - Section 8: CTA

#### **Component**
```tsx
// home/cta/cta.tsx
export function CTA() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>LET'S BUILD SOMETHING</h2>
      
      <p className={styles.description}>
        Whether you're migrating to headless, rescuing a legacy system, 
        or need senior engineering capacity—let's start the conversation.
      </p>
      
      <a className={styles.command} href="mailto:info@crafity.com">
        <span className={styles.prompt}>$</span>
        <span>start_conversation</span>
      </a>
      
      <div className={styles.contact}>
        info@crafity.com · Randstad, Netherlands
      </div>
    </div>
  )
}
```

```css
/* cta.module.css */
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.title {
  margin-bottom: var(--spacing-6);
  color: var(--text-primary);
  font-family: var(--accent-font-family);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-normal);
}

.description {
  margin-bottom: var(--spacing-10);
  color: var(--text-primary);
  font-family: var(--font-family);
  font-size: var(--font-size-body-large);
  line-height: var(--line-height-relaxed);
}

.command {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-5) var(--spacing-8);
  border: var(--border-width-medium) solid var(--accent-secondary);
  background: transparent;
  color: var(--text-primary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-body);
  gap: var(--spacing-3);
  text-decoration: none;
  transition: var(--transition-all);
  
  &:hover {
    background: var(--accent-secondary);
    color: var(--bg-primary);
  }
}

.prompt {
  color: var(--accent-secondary);
}

.command:hover .prompt {
  color: var(--bg-primary);
}

.contact {
  margin-top: var(--spacing-8);
  color: var(--text-secondary);
  font-family: var(--mono-font-family);
  font-size: var(--font-size-body-small);
}
```

#### **Validation**
- [ ] Title and description centered
- [ ] Command button styled like terminal
- [ ] Hover state works
- [ ] mailto link functional
- [ ] Contact info below

---

### **CHUNK 10: Footer & Theme Toggle** 🦶

**Goal:** Complete footer implementation + theme switching.

**Model:** Sonnet 4  
**Estimated tokens:** ~15k  
**Files changed:** 6

#### **Tasks**
1. Complete Footer component (expand from Chunk 2)
2. Create ThemeToggle component
3. Add theme switching logic
4. Test light theme

#### **ThemeToggle Component**
```tsx
// common/theme-toggle/theme-toggle.tsx
import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme')
    return (saved as Theme) || 'system'
  })
  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const effectiveTheme = theme === 'system' 
      ? (prefersDark ? 'dark' : 'light')
      : theme
      
    document.documentElement.setAttribute('data-theme', effectiveTheme)
    localStorage.setItem('theme', theme)
  }, [theme])
  
  const cycleTheme = () => {
    setTheme(current => {
      if (current === 'system') return 'dark'
      if (current === 'dark') return 'light'
      return 'system'
    })
  }
  
  return (
    <button className={styles.toggle} onClick={cycleTheme} type="button">
      {theme === 'system' && '⚙️'}
      {theme === 'dark' && '🌙'}
      {theme === 'light' && '☀️'}
    </button>
  )
}
```

```css
/* theme-toggle.module.css */
.toggle {
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: var(--border-width-thin) solid var(--border-default);
  cursor: pointer;
  font-size: 20px;
  transition: var(--transition-all);
  
  &:hover {
    border-color: var(--accent-primary);
  }
}
```

**Add ThemeToggle to Footer:**
```tsx
// layout/footer/footer.tsx
<div className={styles.column}>
  <div className={styles.title}>CRAFITY</div>
  <div className={styles.tagline}>Built with passion</div>
  <div className={styles.year}>Since 2010</div>
  <ThemeToggle />  {/* ← ADD HERE */}
</div>
```

#### **Validation**
- [ ] Footer complete with all links
- [ ] Theme toggle cycles: system → dark → light
- [ ] Light theme variables work
- [ ] Theme persists in localStorage
- [ ] $ exit shows at bottom

---

### **CHUNK 11: Responsive & Polish** 📱

**Goal:** Mobile breakpoints for all sections, touch optimization.

**Model:** Haiku (CSS-only changes)  
**Estimated tokens:** ~10k  
**Files changed:** ~15 CSS Modules

#### **Tasks**
1. Add mobile breakpoints to all sections
2. Navigation: stacked on mobile (from header)
3. Hero: responsive typography (96px → 56px → 40px)
4. Stats: single column on mobile
5. Featured Work: single column on mobile
6. Services: remove alternating indents on mobile
7. Approach: reduce gaps on mobile
8. Footer: stack columns on mobile
9. Touch targets: minimum 44px
10. Test on real mobile devices

#### **Example Mobile Styles**
```css
/* General pattern for mobile */
@media (--md-n-below) {
  .grid {
    grid-template-columns: 1fr;
  }
  
  .title {
    font-size: 40px;
  }
  
  .card {
    padding-left: var(--spacing-8);
  }
  
  .card.even {
    padding-left: var(--spacing-8);
  }
}
```

#### **Validation**
- [ ] All sections work on 375px width
- [ ] Touch targets ≥ 44px
- [ ] No horizontal scroll
- [ ] Typography scales appropriately
- [ ] Images responsive

---

### **CHUNK 12: Performance & SEO** ⚡

**Goal:** Optimize for Lighthouse 95+, add SEO essentials.

**Model:** Sonnet 4  
**Estimated tokens:** ~10k  
**Files changed:** ~5

#### **Tasks**

**1. Font Optimization**
- Download Space Grotesk, Inter, JetBrains Mono (WOFF2)
- Subset to Latin characters
- Add to `/public/fonts/`
- Update `global.css` with `@font-face`
- Preload critical fonts

**2. Meta Tags**
Update `__root.tsx`:
```tsx
meta: [
  { charSet: 'utf8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { title: 'Crafity // Built with passion' },
  { name: 'description', content: 'E-commerce modernization, legacy rescue, senior engineering capacity. 25+ years experience. Clients: Sonic Equipment, ING, Picnic, Schiphol, Electronic Arts. Netherlands.' },
  { property: 'og:title', content: 'Crafity // Built with passion' },
  { property: 'og:description', content: '...' },
  { property: 'og:image', content: '/logo.svg' },
  { property: 'og:type', content: 'website' },
],
```

**3. Sitemap**
Create `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://crafity.com/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

**4. robots.txt**
Create `/public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://crafity.com/sitemap.xml
```

**5. Structured Data**
Add to homepage:
```tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Crafity",
  "url": "https://crafity.com",
  "logo": "https://crafity.com/logo.svg",
  "foundingDate": "2010",
  "description": "Boutique engineering firm specializing in e-commerce modernization and legacy system rescue."
}
</script>
```

#### **Validation**
- [ ] Lighthouse Performance: 95+
- [ ] Lighthouse Accessibility: 100
- [ ] Lighthouse Best Practices: 100
- [ ] Lighthouse SEO: 100
- [ ] Fonts load quickly
- [ ] No layout shift (CLS = 0)

---

## 7. CODE PATTERNS

### **Component Template**
```tsx
// component-name.tsx
import styles from './component-name.module.css'

interface ComponentNameProps {
  children: ReactNode
  // other props
}

export function ComponentName({ children }: ComponentNameProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
```

### **CSS Module Template**
```css
/* component-name.module.css */
.container {
  /* Use tokens! */
  padding: var(--spacing-8);
  color: var(--text-primary);
  font-family: var(--font-family);
  
  /* Mobile breakpoint */
  @media (--md-n-below) {
    padding: var(--spacing-4);
  }
}
```

### **Conditional Classes**
```tsx
import cn from 'classnames' // or install 'clsx'

<div className={cn(
  styles.card,
  isLarge && styles.large,
  isEven && styles.even
)} />
```

### **Link Handling**
```tsx
// Internal links
<a href="#work">Work</a>

// External links
<a href="https://..." target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>

// Mailto
<a href="mailto:info@crafity.com">Contact</a>
```

---

## 8. TESTING & VALIDATION

### **Per-Chunk Validation**
After each chunk, verify:
- [ ] Visual match to design
- [ ] Responsive (test 375px, 768px, 1440px)
- [ ] No console errors
- [ ] ESLint passes
- [ ] Stylelint passes
- [ ] Links functional
- [ ] Hover states work

### **Final Testing**
Before deployment:
- [ ] Full page scroll test
- [ ] All anchor links work
- [ ] All external links open in new tab
- [ ] Theme toggle works
- [ ] Mobile menu works
- [ ] Lighthouse 95+ all metrics
- [ ] Cross-browser (Chrome, Firefox, Safari)
- [ ] Real device testing (iOS, Android)

---

## 9. PERFORMANCE TARGETS

### **Lighthouse Scores**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### **Core Web Vitals**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### **Bundle Size**
- Initial JS: < 100kb (gzipped)
- Initial CSS: < 20kb (gzipped)
- Fonts: < 150kb total

---

## 10. DEPLOYMENT

### **Build Command**
```bash
pnpm run build
```

### **Docker Deployment**
```bash
docker build -t crafity-start .
docker run -p 3000:3000 crafity-start
```

### **Vercel Deployment**
1. Connect GitHub repo
2. Auto-detect TanStack Start
3. Deploy (auto on push to main)

### **Environment Variables**
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NODE_ENV=production
```

---

## 🎯 GETTING STARTED IN CLAUDE CODE

### **Setup**
1. Open VS Code in your repo
2. Open Claude Code extension
3. Upload these documents:
   - `CRAFITY_IMPLEMENTATION_GUIDE.md` (this file)
   - `CRAFITY_HOMEPAGE_MASTER_CONTENT.md` (content reference)

### **First Prompt** (Chunk 1)
```
Implement CHUNK 1: Design Tokens Cleanup

Tasks:
1. Restructure color-tokens.css with semantic naming (bg-, text-, accent-, border- prefixes)
2. Add light theme variables [data-theme='light']
3. Expand typography-tokens.css with full scale (sizes, line-heights, letter-spacing, weights)
4. Create animation-tokens.css (durations, easings, transitions)
5. Expand border-tokens.css (radius, shortcuts)
6. Rename unit-tokens.css → spacing-tokens.css
7. Update tokens.css imports
8. Update Header components (navigation.module.css, logo.module.css) to use new tokens
9. Update button.module.css to use new tokens

Requirements:
- Follow token naming from Implementation Guide
- Visual appearance must stay identical
- Use semantic names (--text-primary not --color)
- Include light theme variables
- All changes must pass linting

Reference: CRAFITY_IMPLEMENTATION_GUIDE.md - Section 6, Chunk 1
```

### **Iteration Pattern**
```
You: [Initial request for chunk]
Claude: [Creates files]
You: "Test and validate"
You: [If issues] "The spacing is too tight on mobile"
Claude: [Fixes]
You: "Approved, move to next chunk"
```

---

## 📚 REFERENCE DOCUMENTS

- **CRAFITY_HOMEPAGE_MASTER_CONTENT.md** - All copy, content decisions
- **CRAFITY_IMPLEMENTATION_GUIDE.md** - This file (technical specs)

---

## ✅ COMPLETION CHECKLIST

### **Development**
- [ ] All 12 chunks completed
- [ ] All sections render correctly
- [ ] Responsive on all breakpoints
- [ ] Theme toggle works
- [ ] All links functional

### **Quality**
- [ ] ESLint passes
- [ ] Stylelint passes
- [ ] No console errors
- [ ] Lighthouse 95+ all metrics

### **Pre-Launch**
- [ ] Privacy Policy generated
- [ ] GA4 configured
- [ ] Domain configured
- [ ] SSL certificate
- [ ] Backup plan

---

**END OF IMPLEMENTATION GUIDE**

Version: 1.0  
Total Chunks: 12  
Estimated Timeline: 1-2 weeks  
Budget: $5-8 USD (token costs)

Good luck building! 🚀
