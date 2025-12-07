# From Boardrooms to Backroads - Next.js Migration

A complete portfolio website built with Next.js 16, TypeScript, and shadcn/ui.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- **UI Components**: shadcn/ui component library (Button, Card, Badge, Skeleton, Avatar)
- **Data Fetching**: React Query for efficient client-side data management
- **Dark Mode**: Theme toggle with system preference detection
- **Responsive Design**: Mobile-first design with hamburger menu
- **Blog System**: Personal and Business blog sections with full post views
- **Portfolio Sections**: About, Credentials, Gallery pages

## 📁 Project Structure

```
next-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page with hero and featured content
│   │   ├── about/             # About page
│   │   ├── blog/
│   │   │   ├── personal/      # Personal blog listing
│   │   │   ├── business/      # Business blog listing
│   │   │   └── [type]/[id]/   # Dynamic blog post page
│   │   ├── credentials/       # Credentials & expertise page
│   │   ├── gallery/           # Photo gallery
│   │   └── api/               # API routes
│   │       ├── blog/[type]/   # Get blog posts by type
│   │       ├── blog/post/[id]/ # Get single blog post
│   │       ├── credentials/   # Get all credentials
│   │       └── gallery/       # Get all gallery items
│   ├── components/
│   │   ├── Navigation.tsx     # Main navigation with mobile menu
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       ├── storage.ts         # In-memory data storage with seed data
│       ├── types.ts           # TypeScript type definitions
│       ├── utils.ts           # Tailwind utility functions
│       └── query-provider.tsx # React Query provider
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app will be available at http://localhost:3000

## 📄 Pages

- **/** - Home page with hero section and featured content cards
- **/about** - About page with biography, philosophy, and skills
- **/blog/personal** - Personal blog post listing
- **/blog/business** - Business blog post listing
- **/blog/[type]/[id]** - Individual blog post view
- **/credentials** - Education, certifications, awards, and skills
- **/gallery** - Photo gallery with category filtering

## 🔌 API Routes

- `GET /api/blog/personal` - Get all personal blog posts
- `GET /api/blog/business` - Get all business blog posts
- `GET /api/blog/post/:id` - Get a single blog post by ID
- `GET /api/credentials` - Get all credentials
- `GET /api/gallery` - Get all gallery items

## 📦 Data Storage

The app uses an in-memory storage system (`src/lib/storage.ts`) with seed data:
- 2 Personal blog posts
- 2 Business blog posts
- 6 Credentials (education, certifications, awards)
- 6 Gallery items (landscape, architecture, abstract)

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Data Fetching**: @tanstack/react-query
- **Icons**: lucide-react
- **Fonts**: Geist Sans & Geist Mono

## 🚢 Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

No additional configuration needed - Vercel natively supports Next.js.

## 📝 Migration Notes

This is a complete migration from a Vite + Express + React setup to Next.js. Key changes:

- **Routing**: Replaced `wouter` with Next.js App Router
- **API**: Converted Express routes to Next.js API route handlers
- **Data Fetching**: Maintained React Query, updated fetch patterns
- **Navigation**: Updated to use Next.js `Link` and `usePathname`
- **Images**: Using Unsplash placeholder images
- **Types**: Simplified from Drizzle ORM schema to TypeScript interfaces

## 🎯 Next Steps

To further enhance the site:
- Add actual profile and hero images
- Implement a real database (PostgreSQL, MongoDB, etc.)
- Add authentication for admin features
- Implement blog post creation/editing UI
- Add image upload for gallery
- Set up analytics
- Add SEO metadata per page
- Implement sitemap generation

## 📄 License

Personal portfolio project by Daniel Duncombe
