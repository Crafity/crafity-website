# CRAFITY HOMEPAGE - MASTER CONTENT DOCUMENT

**Status:** FINALIZED - Ready for Development  
**Date:** November 2024  
**Version:** 1.0 - Content Locked

---

## 📋 TABLE OF CONTENTS

1. [Meta & SEO](#1-meta--seo)
2. [Header / Navigation](#2-header--navigation)
3. [Hero Section](#3-hero-section)
4. [Client Trust Bar](#4-client-trust-bar)
5. [Featured Work](#5-featured-work)
6. [Services (What We Do)](#6-services-what-we-do)
7. [Approach (How We Work)](#7-approach-how-we-work)
8. [CTA (Call to Action)](#8-cta-call-to-action)
9. [Footer](#9-footer)
10. [Design System Reference](#10-design-system-reference)
11. [Key Decisions Log](#11-key-decisions-log)

---

## 1. META & SEO

### Page Title
```html
<title>Crafity // Built with passion</title>
```

### Meta Description
```html
<meta name="description" content="E-commerce modernization, legacy rescue, senior engineering capacity. 25+ years experience. Clients: Sonic Equipment, ING, Picnic, Schiphol, Electronic Arts. Netherlands.">
```

### Open Graph Tags
```html
<meta property="og:title" content="Crafity // Built with passion">
<meta property="og:description" content="E-commerce modernization, legacy rescue, senior engineering capacity. 25+ years experience. Clients: Sonic Equipment, ING, Picnic, Schiphol, Electronic Arts. Netherlands.">
<meta property="og:image" content="[path-to-logo]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.crafity.com">
```

### Additional Meta
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8">
<link rel="canonical" href="https://www.crafity.com">
```

### Favicon
- To be added before launch

---

## 2. HEADER / NAVIGATION

### Logo Area
```
$ CRAFITY
// Built with passion
```

**Notes:**
- Terminal prompt `$` before CRAFITY (terminal aesthetic)
- Tagline in monospace font (JetBrains Mono)
- Tagline color: blue accent (#95C5EF dark / #2563EB light)

### Navigation Links
```
Work | Approach | Contact
```

**Link Targets:**
- Work → #work (scroll to Featured Work section)
- Approach → #approach (scroll to Approach section)
- Contact → #contact (scroll to CTA section)

**Navigation Behavior:**
- Desktop: Horizontal, right-aligned
- Mobile: Stacked below logo (no hamburger)
- Hover: Red ">" prefix appears before link text

**No Services page** - services content stays on homepage

---

## 3. HERO SECTION

### Terminal Window Content

**Terminal Header:**
```
crafity-init v14.0
```
(v14.0 = years since founding in 2010)

**Terminal Commands:**
```bash
crafity@enterprise:~$ ./deploy --quality=enterprise --speed=startup
> Initializing deployment sequence...
```

**Progress Bar:**
```
Loading engineering capabilities
[████████████████████████████████] 100%
```

**Success Messages:**
```
✓ System ready. 25+ years of experience loaded.
✓ Trusted by: Sonic Equipment, Schiphol, eBay, CarNext
```

---

### Hero Statement
```
ENTERPRISE-GRADE
ENGINEERING
WITH STARTUP DNA
```

**Typography:**
- Font: Space Grotesk Bold
- Size: 96px (desktop)
- Color: 
  - "ENTERPRISE-GRADE" = primary text color
  - "ENGINEERING" = orange-red accent (#FF4500)
  - "STARTUP" = blue accent (#95C5EF)

**Important Note:**
This statement is **ONLY for homepage hero**. Not a company slogan to repeat everywhere. Core tagline remains "Built with passion".

---

### Stats Grid
```
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│  25+                │  │  50+                │  │  100%               │
│  Years Experience   │  │  Projects Delivered │  │  Built with Passion │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

**Stats Explanation:**
- **25+ Years Experience** = Combined team expertise (Bart + Galina individual experience)
- **50+ Projects Delivered** = Total projects since 2010
- **100% Built with Passion** = References core tagline, not measurable metric (intentional)

---

### Command Input
```
$ explore_work_
```
(with blinking cursor animation)

**Notes:**
- Links to #work section
- Terminal aesthetic element
- Cursor blinks at 1s interval

---

## 4. CLIENT TRUST BAR

### Layout
```
━━━━━━━━━━━━━━ TRUSTED BY ━━━━━━━━━━━━━━━━━━━━━━━━

Sonic Equipment · Royal Schiphol Group · eBay · Picnic

Brenntag · CarNext · Electronic Arts · ING · Nike · 
Nederlands Spoorwegen · T-Mobile · Marktplaats
```

**Visual Treatment:**
- No big stat number (removed "25+" to avoid confusion)
- Just "TRUSTED BY" label
- Line 1: 4 featured clients (orange-red highlights)
- Line 2: 8 supporting clients (normal text)
- Horizontal lines top & bottom (PTT style)

**Featured Clients (Line 1):**
1. Sonic Equipment
2. Royal Schiphol Group
3. eBay
4. Picnic

**Supporting Clients (Line 2):**
5. Brenntag
6. CarNext
7. Electronic Arts
8. ING
9. Nike
10. Nederlands Spoorwegen
11. T-Mobile
12. Marktplaats

**Total: 12 clients shown**

**Full Client List (for reference, not all shown):**
Sonic Equipment, Schiphol, Brenntag, GrandVision, CarNext.com, eBay, AKQA, Media Monks, Politie Nederland, Kamernet, Electronic Arts, ING Group NV, Marktplaats, Nike, Nederlands Spoorwegen, Picnic, T-Mobile

---

## 5. FEATURED WORK

### Layout
Bento grid: 1 large card + 2 smaller cards

---

### LARGE CARD - SONIC EQUIPMENT

**Header:**
```
● ● ● (terminal dots - red, yellow, blue)

SONIC EQUIPMENT
Headless E-commerce Migration
```

**Description:**
```
Transformed a legacy monolith into a modern headless architecture—without 
a single minute of downtime. Over 18 months, we orchestrated a complete 
platform evolution: from building the technical foundation and CI/CD 
pipelines to implementing a comprehensive design system. Every component 
was battle-tested in isolation before going live, so customers saw 
continuous improvements rather than waiting for the big reveal.
```

**Tech Stack:**
```
18 Months · TypeScript · Next.js · Algolia · CloudFlare · Azure
```

**CTA:**
```
→ View case study
```

**Link:** TBD (placeholder `#` for now, case study page to be created in Sprint 2)

---

### SMALL CARD - ROYAL SCHIPHOL GROUP

**Header:**
```
● ● ● (terminal dots)

SCHIPHOL
Mission-Critical Operations Platform
```

**Description:**
```
Built the next-generation monitoring system for one of Europe's busiest 
airports. Real-time data aggregation from dozens of sources, microfrontend 
architecture handling 24/7 operations, and a complete design system 
implementation. When the system goes down, planes don't move—we made 
sure it never does.
```

**Tech Stack:**
```
10 Months · TypeScript · React · Microservices · Real-time Data
```

**CTA:**
```
→ View case study
```

**Link:** TBD (placeholder `#`)

**Important Notes:**
- Do NOT mention internal project name "Wilbur"
- Do NOT mention internal terms like "PAX", "BAX", "Havendienst"
- Keep generic: "monitoring system", "control rooms", "operations"
- This was Galina's project (March-December 2023)

---

### SMALL CARD - CARNEXT

**Header:**
```
● ● ● (terminal dots)

CARNEXT
Pan-European E-commerce Platform
```

**Description:**
```
Three years building the digital backbone of a 22-country used car 
marketplace. Started with checkout optimization, evolved into full 
platform modernization. Migrated from monolith to event-driven 
microservices, integrated A/B testing at scale, and kept millions of 
transactions flowing smoothly while rebuilding the engine mid-flight.
```

**Tech Stack:**
```
3 Years · TypeScript · Node.js · Kafka · Event-driven Architecture
```

**CTA:**
```
→ View case study
```

**Link:** TBD (placeholder `#`)

---

## 6. SERVICES (WHAT WE DO)

### Section Title
```
WHAT WE DO
```

---

### SERVICE 01: E-COMMERCE MODERNIZATION

**Title:**
```
E-COMMERCE MODERNIZATION
```

**Description:**
```
Legacy monolith holding you back? We migrate e-commerce platforms to 
modern headless architectures without disrupting your business. Zero 
downtime, incremental delivery, and customers who notice the improvements—
not the construction.
```

**Client Examples:**
```
RECENT: Sonic Equipment, Brenntag
```

---

### SERVICE 02: LEGACY SYSTEM RESCUE

**Title:**
```
LEGACY SYSTEM RESCUE
```

**Description:**
```
Your critical system is showing its age, but you can't afford to replace 
it overnight. We refactor, optimize, and modernize while keeping the lights 
on. Technical debt becomes technical assets, one careful step at a time.
```

**Client Examples:**
```
RECENT: Schiphol, Picnic, Electronic Arts
```

---

### SERVICE 03: SENIOR ENGINEERING CAPACITY

**Title:**
```
SENIOR ENGINEERING CAPACITY
```

**Description:**
```
Need senior engineers who hit the ground running? We embed directly into 
your teams—attending stand-ups, using your tools, building actual features. 
Not advisors pointing from the sidelines. Engineers who ship code and 
mentor your team while doing it.
```

**Client Examples:**
```
RECENT: eBay, ING, Nike
```

---

### SERVICE 04: PLATFORM DEVELOPMENT

**Title:**
```
PLATFORM DEVELOPMENT
```

**Description:**
```
Building something new from scratch? We design and deliver scalable 
platforms built for growth. Multi-tenant architectures, real-time systems, 
event-driven backends. Modern stack, battle-tested patterns, zero shortcuts.
```

**Client Examples:**
```
RECENT: CarNext, Brenntag
```

---

**Visual Treatment:**
- Diagonal geometric accents (triangles) before each service
- Service numbers: 01, 02, 03, 04 (JetBrains Mono, blue accent)
- Alternating left/right indentation (asymmetric layout)
- No boxes/borders around services (open layout)

---

## 7. APPROACH (HOW WE WORK)

### Main Statement
```
BUILT TO LAST. BUILT WITH PASSION.
```

**Typography:**
- Font: Space Grotesk Bold
- Size: 52px
- Centered
- Max-width: 800px

**Visual:**
- Gradient divider line below (blue → orange-red, 2px height)

---

### PRINCIPLE 01: NO SHORTCUTS

**Title:**
```
NO SHORTCUTS
```

**Description:**
```
We don't hack together solutions. Every line of code is written with 
maintainability in mind. We use proven patterns, write comprehensive 
tests, and document our decisions. Your future team will thank you.
```

---

### PRINCIPLE 02: BUILDING TEAMS, NOT JUST SYSTEMS

**Title:**
```
BUILDING TEAMS, NOT JUST SYSTEMS
```

**Description:**
```
Great code requires great collaboration. We invest in your people as 
much as your platform—mentoring developers, sharing knowledge, and 
creating an environment where everyone grows. The system we deliver 
is sustainable because the team we leave behind is capable.
```

---

### PRINCIPLE 03: TECHNICAL LEADERSHIP

**Title:**
```
TECHNICAL LEADERSHIP
```

**Description:**
```
25+ years of experience means we've seen it all. We guide architectural 
decisions, mentor junior developers, and help you avoid costly mistakes. 
We're not just coding—we're leading.
```

---

### PRINCIPLE 04: SUSTAINABLE GROWTH

**Title:**
```
SUSTAINABLE GROWTH
```

**Description:**
```
We build systems that scale with your business. Not over-engineered, 
not under-engineered. Just right for where you are now and where 
you're going. Pragmatic solutions that work.
```

---

**Visual Treatment:**
- Vertical accent bars (4px) on left of each principle
- Alternating bar colors: orange-red, blue, orange-red, blue
- Alternating indents: 40px, 120px, 40px, 120px (asymmetric)
- 80px gap between principles
- No boxes, whitespace creates structure

---

## 8. CTA (CALL TO ACTION)

### Headline
```
LET'S BUILD SOMETHING
```

### Description
```
Whether you're migrating to headless, rescuing a legacy system, 
or need senior engineering capacity—let's start the conversation.
```

### Command Button
```
$ start_conversation
```

**Link:** `mailto:info@crafity.com`

### Contact Info
```
info@crafity.com · Randstad, Netherlands
```

---

**What NOT to include:**
- ❌ Phone number (not shown)
- ❌ Availability hours (not mentioned - discovered in conversation)
- ❌ Response time promise (expectation: fast, but don't promise)

---

## 9. FOOTER

### Footer Content

**Left Column:**
```
CRAFITY
Built with passion
Since 2010
```

**Navigate Column:**
```
NAVIGATE
Work
Approach
Contact
```

**Connect Column:**
```
CONNECT
LinkedIn
GitHub
```

**Legal Column:**
```
LEGAL
Privacy Policy
```

**Footer Bottom:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

© 2010-2025 Crafity · Haarlem, Netherlands
KvK: 62274198 · VAT: NL8547.39.877.B.01

$ exit
```

---

### Footer Links (URLs)

**Navigation:**
- Work → #work
- Approach → #approach
- Contact → #contact

**Social:**
- LinkedIn → https://www.linkedin.com/company/crafity
- GitHub → https://github.com/crafity

**Legal:**
- Privacy Policy → /privacy (to be generated with iubenda/termsfeed before launch)

**Notes:**
- No Terms of Service page (common for consultancies, not needed)
- "$ exit" is final terminal touch (small, subtle)

---

## 10. DESIGN SYSTEM REFERENCE

### Color Palette

**Dark Theme (Primary):**
```
Background Primary:   #0A0A0A  (almost black)
Background Secondary: #1A1A1A  (dark grey - cards/terminal)
Text Primary:         #FAFAFA  (off-white)
Text Secondary:       #FAFAFA  (70% opacity)

Accent Primary:       #FF4500  (orange-red)
Accent Secondary:     #95C5EF  (light blue)
Borders:              #333333  (medium grey)

Terminal Dots:
  - Red:    #FF4500
  - Yellow: #FFCC00
  - Blue:   #95C5EF

Grid Overlay:         rgba(149, 197, 239, 0.02-0.03)
```

**Light Theme (Secondary):**
```
Background Primary:   #FAFAFA  (off-white)
Background Secondary: #FFFFFF  (white - cards/terminal)
Text Primary:         #0A0A0A  (near black)
Text Secondary:       #0A0A0A  (60-70% opacity)

Accent Primary:       #DC2626  (red)
Accent Secondary:     #2563EB  (vibrant blue)
Borders:              #E5E5E5  (light grey)

Terminal Dots:
  - Red:    #DC2626
  - Yellow: #FBBF24
  - Blue:   #2563EB
```

---

### Typography

**Font Families:**
```css
Display/Headers: 'Space Grotesk', sans-serif (700 weight)
Body Text:       'Inter', sans-serif (400, 500 weight)
Terminal/Code:   'JetBrains Mono', monospace (400, 700 weight)
```

**Type Scale:**
```
Hero/H1:      96px  (line-height: 1.1, letter-spacing: -2px)
H2:           60px  (line-height: 1.1, letter-spacing: -1.5px)
Statement:    52px  (line-height: 1.2, letter-spacing: -1.5px)
H3:           40px  (line-height: 1.2, letter-spacing: -1px)
Project Name: 32px  (line-height: 1.2, letter-spacing: -1px)
H4:           28px  (line-height: 1.3)
Service Title:24px  (line-height: 1.3)
Body Large:   20px  (line-height: 1.6)
Body:         18px  (line-height: 1.7)
Body Regular: 16px  (line-height: 1.6)
Terminal:     14px  (line-height: 1.6)
Meta/Label:   12px  (line-height: 1.4, letter-spacing: 1px, uppercase)
```

**Font Usage Guidelines:**
- **Space Grotesk Bold:** All display text, hero statements, section headers, client names, stat numbers
- **Inter:** All body copy, descriptions, readable content
- **JetBrains Mono:** Terminal content, prompts, technical labels, code snippets, version numbers, meta info

---

### Terminal Elements

**Terminal Window:**
- Border: 2px solid blue accent
- Background: secondary background color
- Padding: 25px
- Shadow: 0 0 60px rgba(149, 197, 239, 0.15) (dark theme)
- Max-width: 1000px

**Terminal Dots:**
- Size: 12px diameter
- Colors: Red (#FF4500), Yellow (#FFCC00), Blue (#95C5EF)
- Gap: 8px between dots

**Command Prompt:**
- Font: JetBrains Mono
- Color: Blue accent
- Examples: `$`, `crafity@enterprise:~$`, `>`

**Progress Bar:**
- Track: 6px height, #333333 background
- Fill: Gradient (blue → orange-red)
- Max-width: 400px

---

### Spacing System

**Base Unit:** 4px

```
Section Padding (Vertical):
  Desktop: 100-120px
  Mobile:  60-80px

Container:
  Max-width: 1400px
  Padding:   60px (desktop), 24px (mobile)

Component Gaps:
  Between sections:   100-120px
  Between components: 60-80px
  Between principles: 80px
  Between elements:   40px
  Card grid gap:      30px
```

---

### Layout Principles

1. **Asymmetric preferred** over centered layouts
2. **Left-aligned** content (Dutch design principle)
3. **Generous whitespace** (let content breathe)
4. **Diagonal elements** for visual interest (use sparingly)
5. **Terminal aesthetic** = accent (30%), not dominant (70% clean typography)

---

### Mobile Navigation

**Desktop:**
```
$ CRAFITY // Built with passion          Work | Approach | Contact
```

**Mobile (Stacked):**
```
$ CRAFITY
// Built with passion

Work | Approach | Contact
```

**No hamburger menu** - navigation stays visible, stacked below logo.

---

## 11. KEY DECISIONS LOG

### Content Decisions

1. **Tagline:** "Built with passion" is THE tagline (appears in header, footer, approach)
2. **Hero statement:** "Enterprise-grade engineering with startup DNA" is ONLY for homepage hero, not repeated elsewhere
3. **Stats philosophy:** "100% Built with Passion" kept intentionally (not measurable, but on-brand)
4. **Client selection:** 12 clients shown (strategic mix of enterprise, consumer, tech)
5. **Featured projects:** Sonic (large), Schiphol + CarNext (small) - shows diversity
6. **Services:** 4 core services with accurate client attributions
7. **Principles:** 4 principles focusing on quality, teams, leadership, sustainability
8. **Tone:** Bold and confident (earned through 25+ years), not arrogant
9. **No About page:** Homepage provides sufficient info
10. **No Services page:** Services stay on homepage (no separate page)

---

### Design Decisions

1. **Theme:** Dark primary, light secondary (both fully designed)
2. **Terminal aesthetic:** 30% accent, 70% clean typography
3. **Logo:** Keep `$ CRAFITY` with terminal prompt
4. **Navigation:** Work | Approach | Contact (no Services, no About)
5. **Mobile nav:** Stacked (no hamburger)
6. **Terminal usage:** Hero only (+ subtle accents), not every section
7. **Typography power:** Bold scale contrast, asymmetric layouts, geometric lines
8. **Project cards:** Terminal borders but lighter treatment (not full terminal windows)
9. **Services:** Open layout with diagonal accents, no boxes
10. **Approach:** Vertical bars + alternating indents, no boxes

---

### Technical Decisions

1. **Email:** info@crafity.com (not personal email)
2. **Location:** "Randstad, Netherlands" (not specific city)
3. **No phone number** on homepage
4. **No availability hours** mentioned
5. **No response time promise** (expectation: fast, but unstated)
6. **Privacy Policy:** Use generator (iubenda/termsfeed)
7. **No Terms of Service** (not needed for consultancy)
8. **Copyright:** © 2010-2025 Crafity (shows longevity)
9. **Case study links:** Placeholder `#` for now (create pages in Sprint 2)
10. **Version number:** v14.0 (years since 2010)

---

### What We Explicitly REMOVED/AVOIDED

1. ❌ **Albert Heijn** - not in actual client list (was in design mockup, error)
2. ❌ **VodafoneZiggo** - not in actual client list (was in design mockup, error)
3. ❌ **"Wilbur" project name** - internal Schiphol name, removed
4. ❌ **"PAX/BAX" terminology** - internal Schiphol jargon, removed
5. ❌ **"340% performance improvement"** - unverified claim for Sonic, removed
6. ❌ **"Magento 1 migration"** - not confirmed in CV, removed
7. ❌ **Fake tech stacks** - replaced with accurate stacks from CV's
8. ❌ **"Grew from engineer to lead"** - about individual, not Crafity company
9. ❌ **Hamburger menu** - chose stacked mobile nav instead
10. ❌ **Terminal boxes everywhere** - reduced to hero + subtle accents

---

## 12. SOURCES & VERIFICATION

All content in this document is verified against:

**Primary Sources:**
1. Bart Riemens CV (Resume-Bart-Riemens-2025-Vodafone-Ziggo.pdf)
2. Galina Slavova CV (CV_Galina_Slavova_Crafity_EN_20231213.pdf)
3. Explicit client list provided by Bart
4. Case study content written and approved in this conversation
5. Design system documents from design chat

**Verified Facts:**
- ✅ All client names confirmed against provided list
- ✅ All project details verified against CV's
- ✅ All tech stacks verified against CV's
- ✅ All durations verified against CV's
- ✅ Company details (KvK, VAT, founding year) provided by Bart
- ✅ Contact info (email, LinkedIn, GitHub) provided by Bart

**No fabricated content:** Everything in this document has source verification.

---

## 13. PRE-LAUNCH CHECKLIST

### Must Complete Before Launch:

**Content:**
- [x] All homepage copy finalized
- [ ] Privacy Policy generated (iubenda/termsfeed)
- [ ] All links verified (LinkedIn, GitHub, email)
- [ ] Proofread all copy one final time

**Technical:**
- [ ] Update HTML with all corrected content
- [ ] Remove placeholder `#` links or create case study pages
- [ ] Add favicon
- [ ] Add OG image (logo)
- [ ] Test all navigation anchors work
- [ ] Mobile responsive design implemented
- [ ] Cross-browser testing
- [ ] Performance optimization (Lighthouse 95+)

**Legal/Compliance:**
- [ ] Privacy Policy live
- [ ] Cookie consent (if needed)
- [ ] KvK/VAT numbers displayed correctly
- [ ] Contact info accurate

**Design:**
- [ ] Terminal border issues fixed (Featured Work cards)
- [ ] Terminal positioning improved
- [ ] Mobile layouts finalized
- [ ] All colors match design system
- [ ] All fonts loading correctly
- [ ] Animations smooth (cursor blink, hover states)

---

## 14. NEXT STEPS (POST-CONTENT)

### Sprint 2: Design Refinement
- Fix terminal borders on project cards
- Improve terminal window positioning
- Finalize mobile responsive layouts
- Add smooth scroll behavior
- Polish animations/transitions

### Sprint 3: Case Study Pages
- Create template for case studies
- Write expanded versions of Sonic, Schiphol, CarNext
- Add Brenntag case study
- Add eBay case study (optional)
- Link from Featured Work cards

### Sprint 4: Technical Implementation
- Decide tech stack (Next.js? Astro? Plain HTML?)
- Set up development environment
- Implement components
- Deploy to staging
- Performance testing

### Sprint 5: Launch Preparation
- Final QA testing
- SEO optimization
- Analytics setup
- Backup/rollback plan
- Go live!

---

## 15. CONTACT & FEEDBACK

**For questions about this content:**
- Email: briemens@crafity.com
- This document: CRAFITY_HOMEPAGE_MASTER_CONTENT.md
- Related files: CRAFITY_DESIGN_SYSTEM.md, case study files

**Document Change Log:**
- v1.0 (Nov 2024): Initial finalized version, all content locked

---

**END OF MASTER CONTENT DOCUMENT**

Total Sections: 9  
Total Words: ~4,500  
Status: Ready for Development ✅