# Backroads Challenge - Project Transfer

## Overview
The Backroads Challenge is an interactive geography quiz game that has been successfully integrated into the "From Boardrooms to Backroads" website.

## Files Transferred

### Source Location
`c:\Users\danie\OneDrive\Documents\Year Off\Project File\`

### Destination in Website

1. **Main Game Page**
   - Location: `/src/app/backroads-challenge/page.tsx`
   - Route: `/backroads-challenge`
   - Description: Next.js page component that hosts the game

2. **Game Assets (Public Directory)**
   - `/public/backroads-quiz.js` - Core game logic and country data
   - `/public/backroads-challenge.css` - Game styling

3. **Projects Page Integration**
   - File: `/src/app/projects/page.tsx`
   - Position: First project in the grid
   - Links to: `/backroads-challenge`

## Features Integrated

### Game Mechanics
- **3 Difficulty Levels:**
  - 🏢 The Boardroom (Tourist Level) - Easy mode with flag + capital shown
  - 🛣️ The Backroads (Traveler Level) - Medium mode with timer
  - 🧭 The Explorer (Expert Level) - Hard mode with timer + regional traps

### Technical Features
- 195+ countries with capitals and flags
- Real-time scoring system
- Streak tracking for hard mode
- Progress bar visualization
- Responsive mobile-first design
- Flag images from CDN (flagcdn.com)
- Timer/fuel gauge system
- Results screen with percentage calculation

### Design
- Dark theme matching website aesthetic (#0D1321 background)
- Brand orange accents (#D1824F)
- Glassmorphism UI elements
- Smooth animations and transitions
- Mobile-optimized touch targets

## Access Points

1. **Direct Link:** Visit `/backroads-challenge`
2. **Projects Page:** Navigate to Projects → Click "The Backroads Challenge" card → Click "Live Demo"
3. **Navigation:** Projects section in main navigation menu

## Technical Implementation

### Next.js Integration
- Client-side component (`"use client"`)
- Dynamic script loading for game logic
- CSS injected at runtime
- Back button for easy navigation

### Data Structure
```javascript
{
  id: "backroads-challenge",
  title: "The Backroads Challenge",
  category: "Development",
  impactStatement: "195+ countries • 3 difficulty tiers • Real-time scoring",
  toolStack: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
  liveLink: "/backroads-challenge"
}
```

## Future Enhancements (from CODE_REVIEW.md)

### Priority Improvements
1. Add ARIA labels for accessibility (WCAG 2.1 AA compliance)
2. Implement keyboard navigation
3. Add service worker for offline support
4. Implement error handling for flag loading
5. TypeScript migration for type safety

### Performance Optimizations
- Flag image caching
- State management refactoring
- Analytics integration
- Bundle size optimization

## Development Notes

### Standalone vs Integrated
- The game runs as a standalone page within the Next.js app
- Original vanilla JS preserved for simplicity
- CSS scoped to avoid conflicts with main site
- Can be easily updated by modifying files in `/public/`

### Maintenance
- To update game data: Edit `/public/backroads-quiz.js`
- To update styling: Edit `/public/backroads-challenge.css`
- To update project card: Edit `/src/app/projects/page.tsx`

## Credits

**Original Project:** The Backroads Challenge
**Integration Date:** December 20, 2025
**Website:** From Boardrooms to Backroads
**Developer:** Daniel Duncombe

---

For questions or updates, refer to the CODE_REVIEW.md and VISUAL_REFINEMENTS.md files in the original Project File folder.
