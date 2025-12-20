"use client"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Star, Briefcase } from "lucide-react"
import type { Credential } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default function Credentials() {
  const { data: credentials, isLoading, isError } = useQuery<Credential[]>({
    queryKey: ["/api/credentials"],
    queryFn: () => fetchJson("/api/credentials"),
  })

  const education = credentials?.filter((c) => c.type === "education") || []
  const certifications = credentials?.filter((c) => c.type === "certification") || []
  const awards = credentials?.filter((c) => c.type === "award") || []

  const skills = [
    { category: "Finance & Accounting", items: ["Financial Analysis", "Operational Accounting", "Risk & Controls", "Process Optimization"] },
    { category: "Technical", items: ["Data Interpretation", "Technical Writing", "System Implementation", "Excel Modeling"] },
    { category: "Leadership", items: ["Stakeholder Management", "Team Collaboration", "Project Management", "Client Relations"] },
    { category: "Creative", items: ["Travel Photography", "Storytelling", "Content Creation", "Visual Design"] },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-[#0D1321]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Credentials & Expertise
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed" style={{ maxWidth: '800px', margin: '0 auto' }}>
            A comprehensive overview of my education, certifications, and professional achievements
          </p>
        </div>

        {/* Education Timeline */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-[#C77443]" />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          {isLoading ? (
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="hover:shadow-lg transition-shadow bg-[#1A1F2E] border-[#2A2F3E]">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-white">{edu.title}</CardTitle>
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{edu.organization}</span>
                        </div>
                        <p className="text-sm text-gray-400">{edu.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.description && (
                    <CardContent>
                      <p className="text-gray-400">{edu.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Certifications Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-[#C77443]" />
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow bg-[#1A1F2E] border-[#2A2F3E]">
                  <CardHeader>
                    <CardTitle className="text-lg mb-2 text-white">{cert.title}</CardTitle>
                    <p className="text-sm text-gray-400 mb-1">{cert.organization}</p>
                    <p className="text-xs text-gray-400">{cert.date}</p>
                  </CardHeader>
                  {cert.description && (
                    <CardContent>
                      <p className="text-sm text-gray-400">{cert.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Skills Matrix */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-[#C77443]" />
            <h2 className="text-3xl font-bold text-white">Skills Matrix</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="hover:shadow-lg transition-shadow bg-[#1A1F2E] border-[#2A2F3E]">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        {awards.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-8 h-8 text-[#C77443]" />
              <h2 className="text-3xl font-bold text-white">Awards & Recognition</h2>
            </div>

            <div className="space-y-4">
              {awards.map((award) => (
                <Card key={award.id} className="hover:shadow-lg transition-shadow bg-[#1A1F2E] border-[#2A2F3E]">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1 text-white">{award.title}</CardTitle>
                        <p className="text-sm text-gray-400">
                          {award.organization} • {award.date}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  {award.description && (
                    <CardContent>
                      <p className="text-gray-400">{award.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
