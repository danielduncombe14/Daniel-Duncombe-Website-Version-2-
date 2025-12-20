"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default function BusinessBlog() {
  const { data: posts, isLoading, isError } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/business"],
    queryFn: () => fetchJson("/api/blog/business"),
  })

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-[#0D1321]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Business Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Professional insights, business strategy, and industry perspectives
          </p>
        </div>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="aspect-[16/9]" />
                <CardHeader>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-6 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {posts?.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-[#1A1F2E] border-[#2A2F3E]"
              >
                <Link href={`/blog/business/${post.id}`}>
                  <div className="aspect-[16/9] overflow-hidden cursor-pointer">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  <Link href={`/blog/business/${post.id}`}>
                    <CardTitle className="text-2xl text-white hover:text-[#C77443] cursor-pointer transition-colors">
                      {post.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/business/${post.id}`}>
                    <Button variant="ghost" size="sm" className="text-[#C77443] hover:text-[#B56535] hover:bg-[#2A2F3E]">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">
              Failed to load posts. Please try again later.
            </p>
          </div>
        )}

        {!isLoading && !isError && (!posts || posts.length === 0) && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">
              No posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
