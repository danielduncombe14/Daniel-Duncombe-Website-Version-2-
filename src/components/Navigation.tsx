"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Luggage, Briefcase, Award, Camera, FolderKanban } from "lucide-react"
import { useState } from "react"

const NAV_ITEMS = [
  { path: "/about", label: "About", icon: User },
  { path: "/blog/personal", label: "Personal Blog", icon: Luggage },
  { path: "/blog/business", label: "Business Blog", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: FolderKanban },
  { path: "/credentials", label: "Credentials", icon: Award },
  { path: "/gallery", label: "Gallery", icon: Camera },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[var(--z-nav)] bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div className="cursor-pointer px-2 py-1 rounded-md">
              <div className="text-xl font-bold text-[var(--text-primary)]">From Boardrooms to Backroads</div>
              <div className="text-xs font-normal text-gray-400">by Daniel Duncombe</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={pathname === item.path 
                      ? "text-[var(--brand-orange)] hover:text-[var(--brand-orange-dark)] hover:bg-[var(--border-card)]" 
                      : "text-gray-300 hover:text-white hover:bg-[var(--border-card)]"
                    }
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white hover:bg-[var(--border-card)]"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-[var(--border-card)]">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      pathname === item.path
                        ? "text-[var(--brand-orange)] hover:text-[var(--brand-orange-dark)] hover:bg-[var(--border-card)]"
                        : "text-gray-300 hover:text-white hover:bg-[var(--border-card)]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
