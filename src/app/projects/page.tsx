"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Wrench, Lightbulb, Code2 } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  category: string
  impactStatement: string
  imageUrl: string
  toolStack?: string[]
  codeLink?: string // External GitHub link
  liveLink?: string // Can be internal (/page) or external (https://)
  caseStudyLink?: string // Internal case study page
  isAutomation?: boolean
}

// Data-driven projects array
const projectsData: Project[] = [
  {
    id: "backroads-challenge",
    title: "The Backroads Challenge",
    description: "An interactive geography quiz game with three difficulty levels, featuring 195+ countries, real-time scoring, streak tracking, and a progressive timer system. Built with vanilla JavaScript and optimized for mobile-first experiences.",
    category: "Development",
    impactStatement: "195+ countries • 3 difficulty tiers • Real-time scoring",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop",
    toolStack: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    codeLink: "https://github.com/yourusername/backroads-challenge", // External - opens new tab
    liveLink: "/backroads-challenge", // Internal - same tab
    caseStudyLink: "/projects/backroads-challenge-case-study", // Internal - same tab
    isAutomation: false,
  },
  {
    id: "project-1",
    title: "Financial Data Automation Pipeline",
    description: "Built an end-to-end automation system that extracts financial data from multiple sources, transforms it according to business rules, and loads it into reporting dashboards.",
    category: "Automation",
    impactStatement: "Reduced manual data entry by 80%",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    toolStack: ["Python", "Zapier", "Excel", "Power BI"],
    codeLink: "https://github.com/yourusername/financial-automation", // External - opens new tab
    liveLink: "", // No live demo (automation runs in background)
    caseStudyLink: "/projects/financial-automation-case-study", // Internal - same tab (with video/GIF)
    isAutomation: true,
  },
  {
    id: "project-2",
    title: "Travel Blog Platform",
    description: "Developed a modern, responsive blog platform showcasing travel experiences with rich media, interactive maps, and social sharing capabilities.",
    category: "Development",
    impactStatement: "Engaging 1000+ readers monthly",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    toolStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    codeLink: "https://github.com/yourusername/travel-blog", // External - opens new tab
    liveLink: "https://example.com/travel-blog", // External - opens new tab
    caseStudyLink: "/projects/travel-blog-case-study", // Internal - same tab
  },
  {
    id: "project-3",
    title: "Risk Assessment Dashboard",
    description: "Created an interactive dashboard for real-time risk monitoring and analysis, enabling stakeholders to identify and mitigate potential issues proactively.",
    category: "Analytics",
    impactStatement: "Improved decision-making speed by 60%",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    toolStack: ["Power BI", "SQL", "Python", "Excel"],
    codeLink: "", // No public code
    liveLink: "https://example.com/risk-dashboard", // External - opens new tab
    caseStudyLink: "/projects/risk-dashboard-case-study", // Internal - same tab
  },
  {
    id: "project-4",
    title: "Content Creation Workflow",
    description: "Designed an automated workflow that handles content scheduling, image optimization, social media posting, and performance tracking across multiple platforms.",
    category: "Automation",
    impactStatement: "Streamlined publishing process by 70%",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    toolStack: ["Zapier", "Airtable", "Buffer", "Google Sheets"],
    codeLink: "", // No public code (proprietary automation)
    liveLink: "", // No live demo (automation runs in background)
    caseStudyLink: "/projects/content-workflow-case-study", // Internal - same tab (with Loom video)
    isAutomation: true,
  },
  {
    id: "project-5",
    title: "Photography Portfolio Site",
    description: "Built a visually stunning portfolio website with advanced image galleries, filtering by location and category, and optimized loading for high-resolution images.",
    category: "Creative",
    impactStatement: "Showcasing 200+ travel photographs",
    imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
    toolStack: ["Next.js", "TypeScript", "Cloudinary"],
    codeLink: "https://github.com/yourusername/photo-portfolio", // External - opens new tab
    liveLink: "https://example.com/portfolio", // External - opens new tab
    caseStudyLink: "/projects/photo-portfolio-case-study", // Internal - same tab
  },
  {
    id: "project-6",
    title: "Process Optimization Framework",
    description: "Developed a comprehensive framework for analyzing business processes, identifying bottlenecks, and implementing data-driven improvements across departments.",
    category: "Analytics",
    impactStatement: "Reduced operational costs by 35%",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    toolStack: ["Excel", "Power BI", "Visio", "Python"],
    codeLink: "", // No public code
    liveLink: "", // No live demo
    caseStudyLink: "/projects/process-optimization-case-study", // Internal - same tab
  },
]

const categoryColors: Record<string, string> = {
  Automation: "border-[#D1824F] text-[#D1824F]",
  Development: "border-[#4A9EFF] text-[#4A9EFF]",
  Analytics: "border-[#9B59B6] text-[#9B59B6]",
  Creative: "border-[#1ABC9C] text-[#1ABC9C]",
}

const categoryIcons: Record<string, any> = {
  Automation: Wrench,
  Development: Code2,
  Analytics: Lightbulb,
  Creative: Lightbulb,
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter function - dynamically filter projects by category
  const filteredProjects = useMemo(() => {
    if (!selectedCategory) {
      return projectsData
    }
    return projectsData.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  // Get unique categories for filter buttons
  const categories = useMemo(() => {
    return Array.from(new Set(projectsData.map((p) => p.category)))
  }, [])

  // Render project card
  const renderProjectCard = (project: Project) => {
    const CategoryIcon = categoryIcons[project.category]
    
    return (
      <Card
        key={project.id}
        className="group overflow-hidden bg-[#1A1F2E]/60 backdrop-blur-sm border-[#2A2F3E] hover:border-[#D1824F] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D1824F]/10"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <Badge
              variant="outline"
              className={`${
                categoryColors[project.category]
              } bg-[#0D1321]/80 backdrop-blur-sm border-2 font-semibold px-3 py-1 flex items-center gap-1`}
            >
              <CategoryIcon className="w-3 h-3" />
              {project.category}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl text-white mb-2 group-hover:text-[#D1824F] transition-colors">
            {project.title}
          </CardTitle>
          
          {/* Impact Statement */}
          <div className="text-sm font-semibold text-[#D1824F] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D1824F] rounded-full animate-pulse"></span>
            {project.impactStatement}
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </CardHeader>

        {/* Tool Stack */}
        {project.toolStack && project.toolStack.length > 0 && (
          <CardContent className="pt-0">
            <div className={project.isAutomation ? "border-t border-[#2A2F3E] pt-4" : ""}>
              {project.isAutomation && (
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                  Tech Stack
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {project.toolStack.map((tool) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className={`bg-[#0D1321] text-gray-300 text-xs border border-[#2A2F3E] ${
                      project.isAutomation ? "hover:border-[#D1824F]" : ""
                    } transition-colors`}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        )}

        {/* CTA Buttons - Properly handle internal vs external links */}
        {(project.caseStudyLink || project.codeLink || project.liveLink) && (
          <CardFooter className="flex gap-2 pt-4">
            {/* Case Study Button - ALWAYS internal, opens in same tab */}
            {project.caseStudyLink && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[#D1824F] text-[#D1824F] hover:bg-[#D1824F] hover:text-white transition-all"
                asChild
              >
                <Link href={project.caseStudyLink}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Case Study
                </Link>
              </Button>
            )}
            
            {/* View Code Button - ALWAYS external, opens in new tab */}
            {project.codeLink && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[#D1824F] text-[#D1824F] hover:bg-[#D1824F] hover:text-white transition-all"
                asChild
              >
                <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </Button>
            )}
            
            {/* Live Demo Button - Check if internal or external */}
            {project.liveLink && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[#D1824F] text-[#D1824F] hover:bg-[#D1824F] hover:text-white transition-all"
                asChild
              >
                {project.liveLink.startsWith('http') ? (
                  // External link - open in new tab
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo ↗
                  </Link>
                ) : (
                  // Internal link - open in same tab
                  <Link href={project.liveLink}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Try It Live
                  </Link>
                )}
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-[#0D1321]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of automation solutions, creative projects, and technical innovations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className={`${
              selectedCategory === null
                ? "bg-[#D1824F] hover:bg-[#B56535] text-white"
                : "border-[#2A2F3E] text-gray-300 hover:border-[#D1824F] hover:text-[#D1824F]"
            } transition-all`}
          >
            All Projects ({projectsData.length})
          </Button>
          {categories.map((category) => {
            const count = projectsData.filter((p) => p.category === category).length
            const Icon = categoryIcons[category]
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-[#D1824F] hover:bg-[#B56535] text-white"
                    : "border-[#2A2F3E] text-gray-300 hover:border-[#D1824F] hover:text-[#D1824F]"
                } transition-all`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category} ({count})
              </Button>
            )
          })}
        </div>

        {/* Projects Grid - Dynamic rendering */}
        <div 
          id="project-grid"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project) => renderProjectCard(project))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Additional Section - Optional CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-[#1A1F2E]/60 backdrop-blur-sm border-[#2A2F3E] max-w-2xl mx-auto">
            <CardContent className="py-8 px-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Interested in Collaborating?
              </h3>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Button
                size="lg"
                className="bg-[#D1824F] hover:bg-[#B56535] text-white font-semibold transition-all hover:-translate-y-1"
                asChild
              >
                <Link href="/about">
                  Get in Touch
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
