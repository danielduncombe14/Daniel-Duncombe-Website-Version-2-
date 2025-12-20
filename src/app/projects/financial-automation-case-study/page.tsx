"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react"

export default function FinancialAutomationCaseStudy() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-[#0D1321]">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/projects">
            <Button
              variant="outline"
              size="sm"
              className="border-[#D1824F] text-[#D1824F] hover:bg-[#D1824F] hover:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-[#D1824F] text-white">Automation</Badge>
            <Badge variant="outline" className="border-[#2A2F3E] text-gray-300">
              Case Study
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Financial Data Automation Pipeline
          </h1>
          <p className="text-xl text-gray-400">
            Reduced manual data entry by 80% through intelligent automation
          </p>
        </div>

        {/* Video/Demo Section */}
        <Card className="mb-12 bg-[#1A1F2E] border-[#2A2F3E]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Play className="w-5 h-5 text-[#D1824F]" />
              See It In Action
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-[#0D1321] rounded-lg flex items-center justify-center border border-[#2A2F3E]">
              {/* Replace with actual Loom embed or GIF */}
              <div className="text-center">
                <p className="text-gray-400 mb-4">Loom Video Embed Here</p>
                <div className="text-sm text-gray-500">
                  <code className="bg-[#1A1F2E] px-3 py-1 rounded">
                    &lt;iframe src="https://www.loom.com/embed/YOUR_VIDEO_ID"&gt;&lt;/iframe&gt;
                  </code>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Watch how the automation extracts data from multiple sources, transforms it, and loads it into dashboards in real-time.
            </p>
          </CardContent>
        </Card>

        {/* Problem Statement */}
        <Card className="mb-8 bg-[#1A1F2E] border-[#2A2F3E]">
          <CardHeader>
            <CardTitle className="text-white">The Problem</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              The finance team was spending 15+ hours per week manually copying data from multiple Excel files, validating entries, and updating Power BI dashboards. This process was:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Time-consuming and tedious</li>
              <li>Error-prone due to manual data entry</li>
              <li>Delaying critical business decisions</li>
              <li>Preventing team from focusing on analysis</li>
            </ul>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="mb-8 bg-[#1A1F2E] border-[#2A2F3E]">
          <CardHeader>
            <CardTitle className="text-white">The Solution</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Built an end-to-end automation pipeline using Python and Zapier that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Extracts:</strong> Automatically pulls data from 5 different source systems via APIs</li>
              <li><strong>Transforms:</strong> Applies business rules, validates data quality, and handles exceptions</li>
              <li><strong>Loads:</strong> Updates Power BI datasets and sends notifications when complete</li>
              <li><strong>Monitors:</strong> Tracks errors and sends alerts if data quality thresholds aren't met</li>
            </ul>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card className="mb-8 bg-[#1A1F2E] border-[#2A2F3E]">
          <CardHeader>
            <CardTitle className="text-white">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {["Python", "Pandas", "Zapier", "Power BI API", "Excel", "PostgreSQL", "Slack API"].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-[#0D1321] text-gray-300 border border-[#2A2F3E] px-4 py-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="mb-8 bg-[#1A1F2E] border-[#2A2F3E]">
          <CardHeader>
            <CardTitle className="text-white">Results & Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D1824F] mb-2">80%</div>
                <div className="text-sm text-gray-400">Reduction in manual entry time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D1824F] mb-2">15hrs</div>
                <div className="text-sm text-gray-400">Saved per week</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D1824F] mb-2">95%</div>
                <div className="text-sm text-gray-400">Fewer data errors</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture Diagram Section */}
        <Card className="mb-12 bg-[#1A1F2E] border-[#2A2F3E]">
          <CardHeader>
            <CardTitle className="text-white">System Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-[#0D1321] rounded-lg flex items-center justify-center border border-[#2A2F3E]">
              <div className="text-center">
                <p className="text-gray-400 mb-4">Architecture Diagram Here</p>
                <div className="text-sm text-gray-500">
                  Upload a diagram from Miro, Lucidchart, or Draw.io
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#D1824F] hover:bg-[#B56535] text-white"
            asChild
          >
            <Link href="https://github.com/yourusername/financial-automation" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View Code on GitHub
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#D1824F] text-[#D1824F] hover:bg-[#D1824F] hover:text-white"
            asChild
          >
            <Link href="/projects">
              View More Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
