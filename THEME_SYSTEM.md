# Theme System Documentation
## Boardrooms to Backroads Design System

### Overview
This document explains how to use the centralized CSS Custom Properties theme system across the entire website.

---

## Quick Reference

### Most Common Variables

```css
/* Colors */
--bg-primary: #0D1321;           /* Main background */
--bg-card: rgba(31, 35, 54, 0.8); /* Card background */
--brand-orange: #D1824F;         /* Brand color */
--text-primary: #ffffff;         /* White text */
--text-secondary: rgba(255, 255, 255, 0.7); /* Muted text */

/* Border Radius */
--card-radius: 20px;             /* Main containers */
--inner-radius: 12px;            /* Buttons, sub-elements */

/* Shadows */
--card-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
--brand-glow: 0 0 30px rgba(209, 130, 79, 0.3);

/* Transitions */
--transition-speed: 0.3s;
--transition-all: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Migration Examples

### Before & After: Card Component

**❌ Before (Hard-coded values):**
```css
.project-card {
  background: rgba(31, 35, 54, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  border-color: #D1824F;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}
```

**✅ After (Using theme variables):**
```css
.project-card {
  background: var(--bg-card);
  backdrop-filter: var(--glass-backdrop);
  border: var(--glass-border);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: var(--space-xl);
  transition: var(--transition-all);
}

.project-card:hover {
  border-color: var(--brand-orange);
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-2px);
}
```

**Benefits:**
- ✅ Consistency across all cards
- ✅ Easy to update globally
- ✅ More readable code
- ✅ Reduced file size (browser caches variables)

---

### Before & After: Button Component

**❌ Before:**
```css
.cta-button {
  background: #D1824F;
  color: #ffffff;
  border-radius: 12px;
  padding: 16px 32px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #B56535;
  box-shadow: 0 0 20px rgba(209, 130, 79, 0.4);
}
```

**✅ After:**
```css
.cta-button {
  background: var(--brand-orange);
  color: var(--text-primary);
  border-radius: var(--inner-radius);
  padding: var(--space-md) var(--space-xl);
  font-weight: var(--font-weight-semibold);
  transition: var(--transition-all);
}

.cta-button:hover {
  background: var(--brand-orange-dark);
  box-shadow: var(--brand-glow-hover);
}
```

---

### Before & After: Typography

**❌ Before:**
```css
.page-title {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
  letter-spacing: -0.5px;
}

.description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}
```

**✅ After:**
```css
.page-title {
  font-family: var(--font-primary);
  font-size: var(--text-5xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.description {
  font-size: var(--text-xl);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
}
```

---

## Common Patterns

### 1. Glassmorphism Cards

```css
.glass-card {
  background: var(--bg-card);
  backdrop-filter: var(--glass-backdrop);
  border: var(--glass-border);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: var(--space-xl);
}
```

### 2. Hover Effects

```css
.interactive-element {
  transition: var(--transition-all);
}

.interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: var(--brand-glow-hover);
}
```

### 3. Active States

```css
.button.active {
  background: var(--brand-orange);
  box-shadow: var(--brand-glow-strong);
  border-color: var(--brand-orange);
}
```

### 4. Disabled States

```css
.button:disabled {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
  pointer-events: none;
}
```

### 5. Form Inputs

```css
.input-field {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  padding: var(--space-md) var(--space-lg);
  transition: var(--transition-colors);
}

.input-field:focus {
  outline: none;
  border-color: var(--brand-orange);
  box-shadow: var(--brand-glow);
}
```

---

## Tailwind Integration

Since the project uses Tailwind CSS, you can also reference theme variables in Tailwind classes:

### In tailwind.config.ts:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        'brand-orange': 'var(--brand-orange)',
        'brand-orange-dark': 'var(--brand-orange-dark)',
        'bg-primary': 'var(--bg-primary)',
        'bg-card': 'var(--bg-card)',
      },
      borderRadius: {
        'card': 'var(--card-radius)',
        'inner': 'var(--inner-radius)',
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
        'glow': 'var(--brand-glow)',
      },
    },
  },
}
```

### Usage in Components:

```tsx
<div className="bg-[var(--bg-card)] rounded-[var(--card-radius)] shadow-[var(--card-shadow)]">
  <h1 className="text-[var(--text-primary)]">Title</h1>
  <p className="text-[var(--text-secondary)]">Description</p>
</div>
```

---

## Component-Specific Refactoring

### Projects Page Cards

```css
/* Old approach */
.project-card {
  background: rgba(26, 31, 46, 0.6);
  border: 1px solid #2A2F3E;
  /* ... */
}

/* New approach */
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  transition: var(--transition-all);
}

.project-card:hover {
  border-color: var(--brand-orange);
  box-shadow: var(--brand-glow-hover);
}
```

### Navigation Bar

```css
.nav-bar {
  background: rgba(13, 19, 33, 0.95);
  backdrop-filter: var(--blur-md);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-link {
  color: var(--text-secondary);
  transition: var(--transition-colors);
}

.nav-link:hover {
  color: var(--brand-orange);
}

.nav-link.active {
  color: var(--brand-orange);
}
```

### Quiz/Game Components

```css
.quiz-container {
  background: var(--bg-card);
  backdrop-filter: var(--glass-backdrop);
  border: var(--glass-border);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
}

.option-button {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid var(--border-subtle);
  border-radius: var(--inner-radius);
  transition: var(--transition-all);
}

.option-button:hover {
  border-color: var(--brand-orange);
  transform: translateY(-2px);
}

.option-button.correct {
  background: var(--success-green-bg);
  border-color: var(--success-green);
}

.option-button.incorrect {
  background: var(--error-red-bg);
  border-color: var(--error-red);
}
```

---

## Best Practices

### ✅ DO:
- Use theme variables for ALL colors, spacing, and transitions
- Reference variables consistently across components
- Use semantic variable names (e.g., `--text-secondary` not `--grey-400`)
- Group related variables in comments

### ❌ DON'T:
- Hard-code colors or values
- Create duplicate variables for the same value
- Override theme variables without good reason
- Use inline styles with hard-coded values

---

## Testing Your Migration

After refactoring a component, verify:

1. ✅ Visual appearance is identical
2. ✅ Hover states work correctly
3. ✅ Transitions are smooth
4. ✅ Mobile responsive behavior unchanged
5. ✅ No console errors

---

## Quick Migration Checklist

```markdown
- [ ] Replace hard-coded background colors with `var(--bg-*)`
- [ ] Replace brand orange (#D1824F) with `var(--brand-orange)`
- [ ] Replace border-radius values with `var(--radius-*)`
- [ ] Replace box-shadow with `var(--*-shadow)`
- [ ] Replace transitions with `var(--transition-*)`
- [ ] Replace font-family with `var(--font-primary)`
- [ ] Replace padding/margins with `var(--space-*)`
- [ ] Test hover/active states
- [ ] Test on mobile devices
```

---

## Support & Questions

For questions about the theme system or help with migrations:
- Review `theme.css` for full variable reference
- Check examples in this document
- Test changes locally before deploying

Last Updated: December 20, 2025
