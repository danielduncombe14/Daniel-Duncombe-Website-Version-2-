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
    <div className="min-h-screen pt-24 pb-16 px-4 bg-[#0D1321]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed" style={{ maxWidth: '800px', margin: '0 auto' }}>
            My journey from finance professional to global explorer
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Biography */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">My Story</h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm Daniel. I'm a finance and accounting professional who stepped away from the corporate world to spend a year traveling across the globe. After more than eight years working with clients across industries and being recognized as an Exceptional Employee at both KPMG and CrossCountry, I reached a point where I wanted something more. I wanted to slow down, see the world properly, and reconnect with my curiosity, creativity, and sense of adventure.
                </p>

                <p>
                  My career taught me the value of precision, integrity, and strong relationships. I've worked on business transformation projects, data projects, complex audits, and operational support, always trying to balance analytical thinking with clear communication to my stakeholders to deliver the results they need.
                </p>

                <p>
                  In 2025, I made a shift and began traveling full time. Since then, I've found myself on African safaris, remote islands, and in historic cities, mountains, and deserts. Along the way, I rediscovered how much I enjoy storytelling, meeting people from different backgrounds, documenting experiences, and immersing myself in cultures far from home.
                </p>

                <p>
                  Today, I bring together my professional background and my love of travel and exploration. I create, write, photograph, and think through new ideas as I go. Whether I'm planning future projects, capturing wildlife, or reflecting on what I've learned, curiosity is what drives me.
                </p>

                <p>
                  'From Boardrooms to Backroads' is a reflection of that journey. It's a place where structured thinking meets spontaneous adventure.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl font-bold mb-4 text-white">My Philosophy</h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I believe real growth comes from stepping outside what feels familiar, whether that's in work, travel, or life in general. Every place, project, and person has something to teach you if you're open to it.
                </p>
                <p>
                  I value intentional living, continuous learning, and finding the balance between structure and curiosity. Whether I'm building financial models or trekking through rural landscapes, I try to stay grounded, grateful, and open to whatever comes next.
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
                    <AvatarImage src="/About Me - Daniel Duncombe.jpg" alt="Daniel Duncombe" />
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
      </div>
    </div>
  )
}
