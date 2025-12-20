# Visual Design Token Reference

## Color Palette

### Backgrounds
```css
██ --bg-primary: #0D1321          (Deep Charcoal Navy)
██ --bg-secondary: #1a1f2e        (Lighter Navy)
██ --bg-card: rgba(31,35,54,0.8)  (Glassmorphism Card)
```

### Brand
```css
🟠 --brand-orange: #D1824F         (Primary Brand)
🟠 --brand-orange-light: #E09B6F   (Hover State)
🟠 --brand-orange-dark: #B56535    (Active State)
```

### Status
```css
🟢 --status-live: #4ade80          (Live Projects)
🟡 --status-process: #fbbf24       (In Progress)
🔵 --status-beta: #60a5fa          (Beta/Testing)
```

### Text
```css
⬜ --text-primary: #ffffff         (100% opacity - Headings)
⬜ --text-secondary: rgba(255,255,255,0.7)  (70% - Body)
⬜ --text-muted: rgba(255,255,255,0.5)      (50% - Subtle)
```

---

## Border Radius Scale

```
8px   ┌─┐  --radius-sm        (Small buttons)
      └─┘

12px  ┌──┐  --inner-radius    (Buttons, inputs)
      └──┘

20px  ┌───┐  --card-radius    (Main cards) ← BASE
      └───┘

28px  ┌────┐  --radius-xl     (Large containers)
      └────┘

∞     ⬭  --radius-full        (Pills, badges)
```

---

## Shadow & Glow Effects

### Standard Shadows
```
--shadow-sm      ▁         (Subtle depth)
--shadow-md      ▂         (Medium depth)
--shadow-lg      ▃         (Strong depth)
--card-shadow    ▃         (Card default)
```

### Brand Glows
```
--brand-glow         🟠     (Subtle orange glow)
--brand-glow-hover   🟠🟠   (Hover glow)
--brand-glow-strong  🟠🟠🟠 (Active/strong glow)
```

---

## Spacing Scale

```
4px   ▪  --spacing-xs
8px   ▪▪  --space-xs
12px  ▪▪▪  --space-sm
16px  ▪▪▪▪  --space-md       ← BASE (1rem)
24px  ▪▪▪▪▪▪  --space-lg
32px  ▪▪▪▪▪▪▪▪  --space-xl
48px  ▪▪▪▪▪▪▪▪▪▪▪▪  --space-2xl
```

---

## Typography Scale

```
12px  Aa  --text-xs       (Tags, labels)
14px  Aa  --text-sm       (Small text)
16px  Aa  --text-base     ← BASE (Body text)
18px  Aa  --text-lg       (Large body)
20px  Aa  --text-xl       (Subheadings)
24px  Aa  --text-2xl      (Section headers)
30px  Aa  --text-3xl      (Page titles)
48px  Aa  --text-5xl      (Hero text)
```

### Font Weights
```
400  Regular    --font-weight-normal
500  Medium     --font-weight-medium
600  Semibold   --font-weight-semibold
700  Bold       --font-weight-bold
```

---

## Z-Index Layers

```
300  ▓▓▓  --z-tooltip      (Tooltips, popovers)
200  ▓▓   --z-modal        (Modals, overlays)
100  ▓    --z-nav          (Navigation bar)
50   ▒    --z-dropdown     (Dropdowns)
0    ░    --z-base         (Default)
```

---

## Glassmorphism

```
Blur Strength:
--glass-blur: 12px          ≈≈≈  (Subtle blur)
--glass-blur-strong: 20px   ≈≈≈≈≈  (Strong blur)

Border:
--glass-border-color: rgba(255,255,255,0.1)  ┌─────┐
                                              │░░░░░│
                                              └─────┘
```

---

## Transition Timing

```
0.15s  ━  --transition-speed-fast   (Instant feedback)
0.3s   ━━  --transition-speed       ← DEFAULT (Smooth)
0.5s   ━━━  --transition-speed-slow (Deliberate)
```

### Easing Curves
```
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
               ╱‾‾‾╲    (Natural, Apple-like)

--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
               ╱‾‾╲_╱    (Playful bounce)
```

---

## Component Anatomy

### Card Component
```
┌─────────────────────────────────┐ ← --card-radius (20px)
│  GLASSMORPHISM CARD             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                  │
│  bg: var(--bg-card)             │ ← rgba(31,35,54,0.8)
│  backdrop-blur: 20px            │ ← --glass-backdrop
│  border: rgba(255,255,255,0.1) │ ← --glass-border-color
│  shadow: 0 8px 32px rgba(0,0,0,0.3) │ ← --card-shadow
│                                  │
│  ┌──────────────┐               │
│  │   BUTTON     │ ← --inner-radius (12px)
│  └──────────────┘               │
│                                  │
└─────────────────────────────────┘

HOVER STATE:
  border-color: --brand-orange
  box-shadow: --brand-glow-hover
  transform: translateY(-2px)
```

### Button Component
```
┌───────────────┐ ← --inner-radius (12px)
│ 🟠 PRIMARY   │
└───────────────┘
  bg: --brand-orange
  hover: --brand-orange-light + glow
  active: --brand-orange-dark

┌───────────────┐
│ ⬜ SECONDARY  │ (Ghost style)
└───────────────┘
  bg: transparent
  border: --border-medium
  hover: border-[--brand-orange]
```

### Status Badge
```
⬭ Live       bg: --status-live (#4ade80)
⬭ Process    bg: --status-process (#fbbf24)
⬭ Beta       bg: --status-beta (#60a5fa)

border-radius: --radius-full (9999px)
padding: --spacing-xs --space-sm
font-size: --text-xs
```

---

## Real-World Usage

### Project Card Example
```tsx
<div className="
  bg-[var(--bg-card)]              ← Semi-transparent navy
  rounded-[var(--card-radius)]     ← 20px radius
  shadow-[var(--card-shadow)]      ← Depth shadow
  p-[var(--space-xl)]              ← 32px padding
  border border-[var(--glass-border-color)]  ← Subtle border
  backdrop-blur-[var(--glass-blur-strong)]   ← 20px blur
  hover:border-[var(--brand-orange)]         ← Orange on hover
  hover:shadow-[var(--brand-glow-hover)]     ← Glow effect
  transition-[var(--transition-all)]         ← 0.3s smooth
">
  <h3 className="text-[var(--text-primary)] text-2xl font-bold">
    Financial Automation
  </h3>
  
  <span className="bg-[var(--status-live)] px-2 py-1 rounded-full">
    Live
  </span>
  
  <p className="text-[var(--text-secondary)]">
    Automated workflows saving 40 hours/month
  </p>
  
  <button className="
    bg-[var(--brand-orange)]
    rounded-[var(--inner-radius)]
    hover:bg-[var(--brand-orange-light)]
    hover:shadow-[var(--brand-glow-hover)]
  ">
    View Case Study
  </button>
</div>
```

---

## OKLCH Color Conversions

```
HEX         OKLCH                   Name
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#D1824F  →  oklch(0.67 0.15 45)    Brand Orange
#0D1321  →  oklch(0.12 0.02 255)   Deep Navy
#1a1f2e  →  oklch(0.15 0.02 255)   Lighter Navy
#4ade80  →  oklch(0.77 0.18 145)   Status Live
#fbbf24  →  oklch(0.84 0.16 85)    Status Process
#60a5fa  →  oklch(0.70 0.14 245)   Status Beta
```

**Why OKLCH?**
- Perceptually uniform (colors feel consistent)
- Better gradients (smoother transitions)
- Modern CSS standard (future-proof)

---

## Quick Copy-Paste Snippets

### Glassmorphism Card
```css
background: var(--bg-card);
backdrop-filter: var(--glass-backdrop);
border: var(--glass-border);
border-radius: var(--card-radius);
box-shadow: var(--card-shadow);
```

### Brand Orange Button
```css
background: var(--brand-orange);
color: var(--text-primary);
border-radius: var(--inner-radius);
transition: var(--transition-all);

&:hover {
  background: var(--brand-orange-light);
  box-shadow: var(--brand-glow-hover);
  transform: translateY(-2px);
}
```

### Status Badge
```css
background: var(--status-live);
color: var(--bg-primary);
border-radius: var(--radius-full);
padding: var(--spacing-xs) var(--space-sm);
font-size: var(--text-xs);
font-weight: var(--font-weight-semibold);
```

---

**Design System Version:** 2.0  
**Last Updated:** December 20, 2025  
**Compatible With:** Tailwind CSS v4, Next.js 14+
