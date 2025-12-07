"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"
import type { BlogPost } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"
import { use } from "react"

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default function BlogPostPage({ params }: { params: Promise<{ type: string; id: string }> }) {
  const { type, id } = use(params)
  
  const { data: post, isLoading, isError } = useQuery<BlogPost>({
    queryKey: [`/api/blog/post/${id}`],
    queryFn: () => fetchJson(`/api/blog/post/${id}`),
  })

  const backPath = `/blog/${type}`
  const backLabel = type === "personal" ? "Personal Blog" : "Business Blog"

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-48 mb-8" />
          <Skeleton className="h-[40vh] w-full mb-8 rounded-lg" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-2/3" />
        </div>
      </div>
    )
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The post you're looking for doesn't exist or has been removed.
          </p>
          <Link href={backPath}>
            <Button variant="ghost">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to {backLabel}
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Back Button */}
      <div className="px-4 max-w-4xl mx-auto mb-8">
        <Link href={backPath}>
          <Button variant="ghost">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to {backLabel}
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-[40vh] mb-12 overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none leading-relaxed text-foreground">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link href={backPath}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to {backLabel}
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}
