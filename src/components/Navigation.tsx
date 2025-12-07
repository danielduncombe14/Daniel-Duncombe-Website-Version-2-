"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const NAV_ITEMS = [
  { path: "/about", label: "About" },
  { path: "/blog/personal", label: "Personal Blog" },
  { path: "/blog/business", label: "Business Blog" },
  { path: "/credentials", label: "Credentials" },
  { path: "/gallery", label: "Gallery" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1321]/95 backdrop-blur-md border-b border-[#2A2F3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div className="cursor-pointer px-2 py-1 rounded-md">
              <div className="text-xl font-bold text-white">From Boardrooms to Backroads</div>
              <div className="text-xs font-normal text-gray-400">by Daniel Duncombe</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={pathname === item.path 
                    ? "text-[#C77443] hover:text-[#B56535] hover:bg-[#2A2F3E]" 
                    : "text-gray-300 hover:text-white hover:bg-[#2A2F3E]"
                  }
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white hover:bg-[#2A2F3E]"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-[#2A2F3E]">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    pathname === item.path
                      ? "text-[#C77443] hover:text-[#B56535] hover:bg-[#2A2F3E]"
                      : "text-gray-300 hover:text-white hover:bg-[#2A2F3E]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
