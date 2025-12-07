"use client"

import Link from "next/link"
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
    <div className="min-h-screen bg-[#0D1321]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0D1321]">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-wide">
            Crafting Digital Experiences, Exploring the World
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-16 font-light tracking-wider">
            Traveler / Strategist / Creator
          </p>
          
          {/* Primary CTA */}
          <div className="mb-8">
            <Link href="/blog/business">
              <Button
                size="lg"
                className="bg-[#C77443] hover:bg-[#B56535] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Read Business Blog
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/blog/personal" className="text-white/80 hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-1">
              Read Personal Blog
            </Link>
            <Link href="/credentials" className="text-white/80 hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-1">
              View My Credentials
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-1">
              Who Am I?
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto bg-[#0D1321]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
          Featured Content
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Latest Personal Blog */}
          {personalError ? (
            <Card className="overflow-hidden bg-[#1A1F2E] border-[#2A2F3E]">
              <CardContent className="p-8 text-center">
                <p className="text-gray-400">Unable to load personal blog posts</p>
              </CardContent>
            </Card>
          ) : latestPersonal ? (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-[#1A1F2E] border-[#2A2F3E]">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={latestPersonal.featuredImage}
                  alt={latestPersonal.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{latestPersonal.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{latestPersonal.readTime} min</span>
                </div>
                <CardTitle className="text-xl text-white">{latestPersonal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{latestPersonal.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/personal/${latestPersonal.id}`}>
                  <Button variant="ghost" size="sm" className="text-[#C77443] hover:text-[#B56535] hover:bg-[#2A2F3E]">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ) : null}

          {/* Latest Business Blog */}
          {businessError ? (
            <Card className="overflow-hidden bg-[#1A1F2E] border-[#2A2F3E]">
              <CardContent className="p-8 text-center">
                <p className="text-gray-400">Unable to load business blog posts</p>
              </CardContent>
            </Card>
          ) : latestBusiness ? (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-[#1A1F2E] border-[#2A2F3E]">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={latestBusiness.featuredImage}
                  alt={latestBusiness.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{latestBusiness.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{latestBusiness.readTime} min</span>
                </div>
                <CardTitle className="text-xl text-white">{latestBusiness.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{latestBusiness.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/business/${latestBusiness.id}`}>
                  <Button variant="ghost" size="sm" className="text-[#C77443] hover:text-[#B56535] hover:bg-[#2A2F3E]">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ) : null}

          {/* Featured Gallery */}
          {galleryError ? (
            <Card className="overflow-hidden bg-[#1A1F2E] border-[#2A2F3E]">
              <CardContent className="p-8 text-center">
                <p className="text-gray-400">Unable to load gallery items</p>
              </CardContent>
            </Card>
          ) : featuredGallery ? (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-[#1A1F2E] border-[#2A2F3E]">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={featuredGallery.imageUrl}
                  alt={featuredGallery.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">{featuredGallery.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{featuredGallery.description}</p>
              </CardContent>
              <CardFooter>
                <Link href="/gallery">
                  <Button variant="ghost" size="sm" className="text-[#C77443] hover:text-[#B56535] hover:bg-[#2A2F3E]">
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
