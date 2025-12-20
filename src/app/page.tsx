"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import type { BlogPost, GalleryItem } from "@/lib/types"

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default function Home() {
  const { data: personalPosts, isError: personalError } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/personal"],
    queryFn: () => fetchJson("/api/blog/personal"),
  })

  const { data: businessPosts, isError: businessError } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/business"],
    queryFn: () => fetchJson("/api/blog/business"),
  })

  const { data: galleryItems, isError: galleryError } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
    queryFn: () => fetchJson("/api/gallery"),
  })

  const latestPersonal = !personalError ? personalPosts?.[0] : undefined
  const latestBusiness = !businessError ? businessPosts?.[0] : undefined
  const featuredGallery = !galleryError ? galleryItems?.[0] : undefined

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
        {/* Hero Background Image - Optimized with Next.js Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop"
            alt="Travel background"
            fill
            priority={true}
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-[var(--bg-primary)]/70 to-[var(--bg-primary)]" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-8 leading-tight tracking-wide">
            Crafting Digital Experiences, Exploring the World
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-12 font-light tracking-wider whitespace-nowrap">
            Traveler / Strategist / Creator
          </p>
          
          {/* CTAs Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-4xl mx-auto px-4">
            <Link href="/credentials">
              <button
                className="w-full min-h-[100px] flex items-center justify-center gap-2 text-white px-6 py-4 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px] whitespace-nowrap bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-dark)]"
              >
                View My Credentials
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
            </Link>
            <Link href="/blog/personal">
              <button
                className="w-full min-h-[100px] flex items-center justify-center gap-2 text-white px-6 py-4 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px] whitespace-nowrap bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-dark)]"
              >
                Read Personal Blog
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
            </Link>
            <Link href="/blog/business">
              <button
                className="w-full min-h-[100px] flex items-center justify-center gap-2 text-white px-6 py-4 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px] whitespace-nowrap bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-dark)]"
              >
                Read Business Blog
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
            </Link>
            <Link href="/about">
              <button
                className="w-full min-h-[100px] flex items-center justify-center gap-2 text-white px-6 py-4 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-y-[-2px] whitespace-nowrap bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-dark)]"
              >
                Who Am I?
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto bg-[var(--bg-primary)]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[var(--text-primary)]">
          Featured Content
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Latest Personal Blog */}
          {personalError ? (
            <Card className="overflow-hidden bg-[var(--bg-card)] border-[var(--border-card)]">
              <CardContent className="p-8 text-center">
                <p className="text-gray-400">Unable to load personal blog posts</p>
              </CardContent>
            </Card>
          ) : latestPersonal ? (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-[var(--bg-card)] border-[var(--border-card)]">
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={latestPersonal.featuredImage}
                  alt={latestPersonal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{latestPersonal.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{latestPersonal.readTime} min</span>
                </div>
                <CardTitle className="text-xl text-[var(--text-primary)]">{latestPersonal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{latestPersonal.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/personal/${latestPersonal.id}`}>
                  <Button variant="ghost" size="sm" className="text-[var(--brand-orange)] hover:text-[var(--brand-orange-dark)] hover:bg-[var(--border-card)]">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ) : null}

          {/* Latest Business Blog */}
          {businessError ? (
            <Card className="overflow-hidden bg-[var(--bg-card)] border-[var(--border-card)]">
              <CardContent className="p-8 text-center">
                <p className="text-gray-400">Unable to load business blog posts</p>
              </CardContent>
            </Card>
          ) : latestBusiness ? (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-[var(--bg-card)] border-[var(--border-card)]">
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={latestBusiness.featuredImage}
                  alt={latestBusiness.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{latestBusiness.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{latestBusiness.readTime} min</span>
                </div>
                <CardTitle className="text-xl text-[var(--text-primary)]">{latestBusiness.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{latestBusiness.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/business/${latestBusiness.id}`}>
                  <Button variant="ghost" size="sm" className="text-[var(--brand-orange)] hover:text-[var(--brand-orange-dark)] hover:bg-[var(--border-card)]">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ) : null}

          {/* Featured Gallery */}
          {galleryError ? (
            <Card className="overflow-hidden bg-[var(--bg-card)] border-[var(--border-card)]">
              <CardContent className="p-8 text-center">
                <p className="text-gray-400">Unable to load gallery items</p>
              </CardContent>
            </Card>
          ) : featuredGallery ? (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-[var(--bg-card)] border-[var(--border-card)]">
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={featuredGallery.imageUrl}
                  alt={featuredGallery.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-[var(--text-primary)]">{featuredGallery.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{featuredGallery.description}</p>
              </CardContent>
              <CardFooter>
                <Link href="/gallery">
                  <Button variant="ghost" size="sm" className="text-[var(--brand-orange)] hover:text-[var(--brand-orange-dark)] hover:bg-[var(--border-card)]">
                    View Gallery
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ) : null}
        </div>
      </section>
    </div>
  )
}
