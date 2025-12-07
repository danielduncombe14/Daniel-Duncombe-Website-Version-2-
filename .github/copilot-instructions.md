# Next.js Project Setup Instructions

## Project Overview
Next.js 14+ application with TypeScript, Tailwind CSS, and shadcn/ui components. Migrated from Vite/Express setup.

## Technology Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Query for data fetching
- In-memory storage (MemStorage)

## Project Structure
- `/app` - Next.js app router pages and layouts
- `/app/api` - API route handlers (replacing Express routes)
- `/components` - React components including Navigation and shadcn/ui
- `/lib` - Utilities, storage, and React Query setup
- `/public` - Static assets and images

## API Routes
- `/api/blog/[type]` - Blog posts (personal/business)
- `/api/blog/[type]/[id]` - Individual blog post
- `/api/credentials` - User credentials
- `/api/gallery` - Gallery items

## Pages
- `/` - Home page
- `/about` - About page
- `/personal-blog` - Personal blog listing
- `/business-blog` - Business blog listing
- `/personal-blog/[id]` - Personal blog post detail
- `/business-blog/[id]` - Business blog post detail
- `/credentials` - Credentials page
- `/gallery` - Gallery page
