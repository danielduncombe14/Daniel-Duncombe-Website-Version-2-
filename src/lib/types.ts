export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  type: 'personal' | 'business'
  date: string
  readTime: number
  author: string
  tags: string[]
}

export interface Credential {
  id: string
  type: 'education' | 'certification' | 'award'
  title: string
  organization: string
  date: string
  description?: string
  logo?: string
}

export interface GalleryItem {
  id: string
  title: string
  description?: string
  imageUrl: string
  category: string
}
