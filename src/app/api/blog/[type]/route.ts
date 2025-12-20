import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await params
    
    if (type !== 'personal' && type !== 'business') {
      return NextResponse.json(
        { error: 'Invalid blog type. Must be "personal" or "business"' },
        { status: 400 }
      )
    }

    const posts = storage.getAllBlogPosts(type)
    return NextResponse.json(posts)
  } catch (error) {
    // Log error in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching blog posts:', error)
    }
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}
