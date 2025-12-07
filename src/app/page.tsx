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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-medium">
            Traveler • Strategist • Creator
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center max-w-2xl mx-auto">
            <Link href="/credentials">
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-background/10 backdrop-blur-md border-white/20 text-white hover:bg-background/20"
              >
                View My Credentials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/blog/personal">
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-background/10 backdrop-blur-md border-white/20 text-white hover:bg-background/20"
              >
                Read Personal Blog
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/blog/business">
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-background/10 backdrop-blur-md border-white/20 text-white hover:bg-background/20"
              >
                Read Business Blog
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-background/10 backdrop-blur-md border-white/20 text-white hover:bg-background/20"
              >
                Who Am I?
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Featured Content
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Latest Personal Blog */}
          {personalError ? (
            <Card className="overflow-hidden">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">Unable to load personal blog posts</p>
              </CardContent>
            </Card>
          ) : latestPersonal ? (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={latestPersonal.featuredImage}
                  alt={latestPersonal.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{latestPersonal.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{latestPersonal.readTime} min</span>
                </div>
                <CardTitle className="text-xl">{latestPersonal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{latestPersonal.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/personal/${latestPersonal.id}`}>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ) : null}

          {/* Latest Business Blog */}
          {businessError ? (
            <Card className="overflow-hidden">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">Unable to load business blog posts</p>
              </CardContent>
            </Card>
          ) : latestBusiness ? (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={latestBusiness.featuredImage}
                  alt={latestBusiness.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{latestBusiness.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{latestBusiness.readTime} min</span>
                </div>
                <CardTitle className="text-xl">{latestBusiness.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{latestBusiness.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/business/${latestBusiness.id}`}>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ) : null}

          {/* Featured Gallery */}
          {galleryError ? (
            <Card className="overflow-hidden">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">Unable to load gallery items</p>
              </CardContent>
            </Card>
          ) : featuredGallery ? (
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={featuredGallery.imageUrl}
                  alt={featuredGallery.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{featuredGallery.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{featuredGallery.description}</p>
              </CardContent>
              <CardFooter>
                <Link href="/gallery">
                  <Button variant="ghost" size="sm">
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
