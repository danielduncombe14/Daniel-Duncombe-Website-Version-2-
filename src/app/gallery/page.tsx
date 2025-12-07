"use client"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { GalleryItem } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default function Gallery() {
  const { data: items, isLoading, isError } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
    queryFn: () => fetchJson("/api/gallery"),
  })

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(items?.map((item) => item.category) || []))
  const filteredItems = selectedCategory
    ? items?.filter((item) => item.category === selectedCategory)
    : items

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-[#0D1321]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Gallery</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of moments captured during my travels and creative explorations
          </p>
        </div>

        {/* Category Filter */}
        {!isLoading && categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="aspect-square" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems?.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-shadow group bg-[#1A1F2E] border-[#2A2F3E]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs bg-[#2A2F3E] text-gray-300">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">
              Failed to load gallery items. Please try again later.
            </p>
          </div>
        )}

        {!isLoading && !isError && (!filteredItems || filteredItems.length === 0) && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">
              No items to display. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
