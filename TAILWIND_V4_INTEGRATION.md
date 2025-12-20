# Tailwind v4 + Master Theme Integration Guide

## Overview
This document explains how the "Boardrooms to Backroads" Master Theme integrates with Tailwind CSS v4's `@theme inline` system using OKLCH color space.

---

## Architecture Summary

### Files Structure
```
src/app/
  ├── globals.css          # Tailwind v4 config + @theme inline mappings
  ├── theme.css            # Master theme with CSS custom properties
  └── layout.tsx           # Imports globals.css

src/components/
  └── ProjectCard.tsx      # Example component using theme utilities
```

---

## Key Changes from Original Setup

### 1. Updated Base Radius
**Before:** `--radius: 0.625rem` (10px)  
**After:** `--radius: 1.25rem` (20px)

This aligns with the Geography Quiz card aesthetic and ensures visual consistency.

### 2. Added Status Colors
```css
--status-live: #4ade80;      /* Green */
--status-process: #fbbf24;   /* Yellow */
--status-beta: #60a5fa;      /* Blue */
```

### 3. Added "Ghost" Architectural Variables
```css
/* Spacing */
--spacing-xs: 0.25rem;       /* 4px - NEW */

/* Glassmorphism */
--glass-blur: 12px;          /* NEW */
--glass-border-color: rgba(255, 255, 255, 0.1); /* NEW */

/* Z-Index */
--z-nav: 100;                /* NEW */
--z-modal: 200;              /* NEW */

/* Typography */
--leading-tight: 1.2;        /* NEW */
--tracking-tight: -0.02em;   /* NEW */
```

### 4. Dark Mode Optimization
The `.dark` class in `globals.css` now uses deep navy colors matching the `#0d1321` to `#1a1f2e` gradient aesthetic:

```css
--background: oklch(0.12 0.02 255);     /* #0d1321 equivalent */
--card: oklch(0.15 0.02 255 / 0.8);    /* Semi-transparent navy */
--primary: oklch(0.67 0.15 45);         /* Brand Orange in OKLCH */
```

### 5. Brand Orange Integration
Brand orange (#D1824F) is now mapped to `--primary` in dark mode, ensuring it's used consistently across all interactive elements.

---

## Using the Theme in Components

### Method 1: Direct CSS Variable Reference (Recommended)
```tsx
<div className="bg-[var(--bg-card)] rounded-[var(--card-radius)] shadow-[var(--card-shadow)]">
  <h2 className="text-[var(--text-primary)]">Title</h2>
  <p className="text-[var(--text-secondary)]">Description</p>
</div>
```

### Method 2: Tailwind Utilities (via @theme inline)
```tsx
<div className="bg-card rounded-card shadow-card">
  <h2 className="text-primary">Title</h2>
  <Badge className="bg-[var(--status-live)]">Live</Badge>
</div>
```

### Method 3: CSS Classes from theme.css
```tsx
<div className="card">
  <button className="btn-primary">Click Me</button>
  <button className="btn-secondary">Cancel</button>
</div>
```

---

## @theme inline Mappings

All theme variables are now accessible as Tailwind utilities via the `@theme inline` block in `globals.css`:

```css
@theme inline {
  /* Brand Colors */
  --color-brand-orange: var(--brand-orange);
  --color-brand-orange-light: var(--brand-orange-light);
  --color-brand-orange-dark: var(--brand-orange-dark);
  
  /* Status Colors */
  --color-status-live: var(--status-live);
  --color-status-process: var(--status-process);
  --color-status-beta: var(--status-beta);
  
  /* Shadows & Effects */
  --shadow-glow: var(--brand-glow);
  --shadow-glow-hover: var(--brand-glow-hover);
  
  /* Z-Index */
  --z-index-nav: var(--z-nav);
  --z-index-modal: var(--z-modal);
  
  /* Glassmorphism */
  --blur-glass: var(--glass-blur);
  --border-glass: var(--glass-border-color);
}
```

### Usage:
```tsx
<div className="shadow-glow z-[var(--z-index-nav)]">
  <span className="bg-[var(--color-status-live)]">Live</span>
</div>
```

---

## Component Examples

### Project Card with Status Badge
```tsx
<div className="
  bg-[var(--bg-card)]
  border border-[var(--glass-border-color)]
  rounded-[var(--card-radius)]
  shadow-[var(--card-shadow)]
  hover:shadow-[var(--card-shadow-hover)]
  hover:border-[var(--brand-orange)]
  transition-[var(--transition-all)]
">
  <h3 className="text-[var(--text-primary)] text-2xl font-bold">
    Financial Automation
  </h3>
  
  <Badge className="bg-[var(--status-live)] text-[var(--bg-primary)]">
    Live
  </Badge>
  
  <p className="text-[var(--text-secondary)]">
    Automated workflows saving 40 hours/month
  </p>
  
  <Button className="
    bg-[var(--brand-orange)]
    hover:bg-[var(--brand-orange-light)]
    hover:shadow-[var(--brand-glow-hover)]
  ">
    View Case Study
  </Button>
</div>
```

### Navigation with Active State
```tsx
<nav className="bg-[var(--bg-card)] backdrop-blur-[var(--glass-blur-strong)] z-[var(--z-index-nav)]">
  {navItems.map(item => (
    <a
      key={item.href}
      className={`
        text-[var(--text-secondary)]
        hover:text-[var(--brand-orange)]
        transition-[var(--transition-colors)]
        ${isActive && 'text-[var(--brand-orange)] font-semibold'}
      `}
    >
      {item.label}
    </a>
  ))}
</nav>
```

### Input with Focus Glow
```tsx
<input
  type="text"
  className="
    bg-[rgba(255,255,255,0.05)]
    border border-[var(--border-medium)]
    rounded-[var(--inner-radius)]
    text-[var(--text-primary)]
    focus:border-[var(--brand-orange)]
    focus:shadow-[var(--brand-glow)]
    transition-[var(--transition-colors)]
  "
  placeholder="Enter text..."
/>
```

---

## Tailwind Config Extension (Optional)

If you want shorter utility classes, extend `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        'brand-orange': 'var(--brand-orange)',
        'brand-orange-light': 'var(--brand-orange-light)',
        'brand-orange-dark': 'var(--brand-orange-dark)',
        'status-live': 'var(--status-live)',
        'status-process': 'var(--status-process)',
        'status-beta': 'var(--status-beta)',
      },
      borderRadius: {
        'card': 'var(--card-radius)',
        'inner': 'var(--inner-radius)',
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
        'card-hover': 'var(--card-shadow-hover)',
        'glow': 'var(--brand-glow)',
        'glow-hover': 'var(--brand-glow-hover)',
        'glow-strong': 'var(--brand-glow-strong)',
      },
      zIndex: {
        'nav': 'var(--z-nav)',
        'modal': 'var(--z-modal)',
      },
    },
  },
};

export default config;
```

### Then use:
```tsx
<div className="bg-brand-orange rounded-card shadow-glow z-nav">
  <span className="bg-status-live">Live</span>
</div>
```

---

## Color Space: OKLCH vs HEX

### Why OKLCH?
- **Perceptual uniformity**: Colors appear more consistent to human eyes
- **Better gradients**: Smoother transitions between colors
- **Future-proof**: Modern CSS standard

### Conversion Reference
```css
/* HEX → OKLCH */
#D1824F → oklch(0.67 0.15 45)      /* Brand Orange */
#0d1321 → oklch(0.12 0.02 255)     /* Deep Navy */
#1a1f2e → oklch(0.15 0.02 255)     /* Lighter Navy */
#4ade80 → oklch(0.77 0.18 145)     /* Status Live Green */
#fbbf24 → oklch(0.84 0.16 85)      /* Status Process Yellow */
#60a5fa → oklch(0.70 0.14 245)     /* Status Beta Blue */
```

### Tools:
- [OKLCH Color Picker](https://oklch.com/)
- [OKLCH Converter](https://colorjs.io/apps/convert/)

---

## Testing Your Theme

### Checklist:
- [ ] Cards have 20px border radius
- [ ] Brand orange appears on hover states
- [ ] Status badges show correct colors
- [ ] Glassmorphism blur works (12px/20px)
- [ ] Shadows render smoothly
- [ ] Z-index prevents overlap issues
- [ ] Dark mode uses deep navy (#0d1321)
- [ ] Transitions are smooth (0.3s)

### Quick Test Component:
```tsx
export function ThemeTest() {
  return (
    <div className="p-8 space-y-4 bg-[var(--bg-primary)]">
      <div className="card">Card with glassmorphism</div>
      <button className="btn-primary">Primary Button</button>
      <button className="btn-secondary">Secondary Button</button>
      <span className="badge-live">Live</span>
      <span className="badge-process">In Progress</span>
      <span className="badge-beta">Beta</span>
    </div>
  );
}
```

---

## Migration Tips

### Replacing Hard-Coded Values:
```tsx
// ❌ Before
<div className="bg-[#1a1f2e] rounded-[20px] shadow-lg">

// ✅ After
<div className="bg-[var(--bg-secondary)] rounded-[var(--card-radius)] shadow-[var(--card-shadow)]">
```

### Replacing Tailwind Colors:
```tsx
// ❌ Before
<Badge className="bg-green-500">Live</Badge>

// ✅ After
<Badge className="bg-[var(--status-live)]">Live</Badge>
```

### Replacing Custom Shadows:
```tsx
// ❌ Before
<div className="shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

// ✅ After
<div className="shadow-[var(--card-shadow)]">
```

---

## Performance Considerations

### CSS Variables vs Tailwind Utilities
- **CSS Variables**: Flexible, but verbose in className
- **Tailwind Utilities**: Clean syntax, requires config extension
- **Recommendation**: Use CSS variables for complex values, Tailwind for simple ones

### Bundle Size Impact
- Theme variables: ~2KB (negligible)
- Example classes in theme.css: ~3KB
- Total overhead: **~5KB** (acceptable)

---

## Troubleshooting

### Issue: Variables not working
**Solution:** Ensure `@import "./theme.css"` is before `@tailwind` in `globals.css`

### Issue: Colors look different
**Solution:** Check if browser supports OKLCH (all modern browsers do). Fallback to HEX if needed.

### Issue: Z-index conflicts
**Solution:** Use the predefined scale:
- `--z-nav: 100`
- `--z-modal: 200`
- `--z-tooltip: 300`

### Issue: Blur not rendering
**Solution:** Check for `backdrop-filter` support. Add `-webkit-backdrop-filter` for Safari.

---

## Next Steps

1. ✅ Theme system integrated
2. ✅ Globals.css updated with @theme inline
3. ✅ Example ProjectCard component created
4. 🔄 Migrate existing components to use theme variables
5. 🔄 Add more case study pages
6. 🔄 Test dark mode across all pages

---

**Last Updated:** December 20, 2025  
**Version:** 2.0 (Tailwind v4 + OKLCH)
