import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  const skills = [
    "Financial Analysis",
    "Operational Accounting",
    "Risk & Controls",
    "Process Optimization",
    "Data Interpretation",
    "Technical Writing",
    "Stakeholder Management",
    "Travel Photography",
    "Storytelling",
    "Content Creation",
  ]

  const quickFacts = [
    { label: "From", value: "Originally from Canada" },
    { label: "Current Focus", value: "Travel, Writing & Creative Projects" },
    { label: "Professional Experience", value: "8+ Years" },
    { label: "Previous Roles", value: "KPMG • CrossCountry Consulting" },
  ]

  return (
    <div className="min-h-screen bg-[#0D1321]">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-5xl sm:text-6xl font-bold text-white">
          About Me
        </h1>
      </section>

      {/* Content Layout */}
      <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Biography */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">My Story</h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm Daniel, a finance and accounting professional who stepped
                  away from the corporate world to embark on a year-long journey
                  across the globe. After more than eight years working with
                  clients across industries—and being recognized as an
                  Exceptional Employee at both KPMG and CrossCountry—I realized
                  I wanted to experience the world more deeply and reconnect
                  with my curiosity, creativity, and sense of adventure.
                </p>

                <p>
                  My career has taught me the importance of precision,
                  integrity, and building strong relationships. Whether managing
                  complex audits, improving internal controls, or supporting
                  operational teams, I've always approached work with a balance
                  of analytical thinking and empathy.
                </p>

                <p>
                  In 2024–2025, I shifted gears and began traveling full-time.
                  My journey has taken me from African safaris and remote
                  islands to historic cities, mountains, and deserts. Along the
                  way, I've rediscovered my love for storytelling, meeting new
                  people, documenting experiences, and diving into cultures far
                  from home.
                </p>

                <p>
                  Today, I combine my professional background with a passion for
                  exploring the world, creating meaningful content, and sharing
                  what I learn. Whether I'm writing, photographing wildlife,
                  developing new ideas, or planning future projects, I'm driven
                  by curiosity and a desire to grow.
                </p>

                <p>
                  This website—
                  <span className="font-medium">From Boardrooms to Backroads</span>
                  — is a reflection of that journey: a space where structured
                  thinking meets spontaneous adventure.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl font-bold mb-4 text-white">My Philosophy</h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I believe the best growth comes from stepping outside of what
                  feels familiar—whether in work, travel, or personal
                  development. Every place, project, and person teaches
                  something new if you're open to it.
                </p>
                <p>
                  I value intentional living, continuous learning, and the
                  balance between structure and curiosity. And whether I'm
                  building financial models or trekking across rural landscapes,
                  I try to stay grounded, grateful, and open to the unexpected.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <Card className="bg-[#1A1F2E] border-[#2A2F3E]">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <Avatar className="w-48 h-48">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Profile" />
                    <AvatarFallback>DD</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-white">
                  Daniel Duncombe
                </h3>
                <p className="text-gray-400 text-center mb-6">
                  Finance Professional • Traveler • Storyteller
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="bg-[#1A1F2E] border-[#2A2F3E]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Facts</h3>
                <div className="space-y-4">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="flex flex-col gap-1">
                      <span className="text-sm text-gray-400 font-medium">
                        {fact.label}
                      </span>
                      <span className="text-base font-semibold text-white">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-base px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
