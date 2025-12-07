import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { QueryProvider } from "@/lib/query-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "From Boardrooms to Backroads",
  description: "Personal and business insights from Daniel Duncombe",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0D1321] text-white`}
      >
        <QueryProvider>
          <Navigation />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  )
}
