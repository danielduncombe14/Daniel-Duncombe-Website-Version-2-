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
  title: {
    default: "From Boardrooms to Backroads | Daniel Duncombe",
    template: "%s | From Boardrooms to Backroads",
  },
  description: "Travel, finance, and creative projects by Daniel Duncombe. Exploring the world while sharing insights from boardrooms to backroads.",
  keywords: ["travel blog", "finance", "digital nomad", "photography", "business insights", "personal development"],
  authors: [{ name: "Daniel Duncombe" }],
  creator: "Daniel Duncombe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "From Boardrooms to Backroads",
    title: "From Boardrooms to Backroads | Daniel Duncombe",
    description: "Travel, finance, and creative projects by Daniel Duncombe",
    images: [
      {
        url: "/og-image.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "From Boardrooms to Backroads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From Boardrooms to Backroads | Daniel Duncombe",
    description: "Travel, finance, and creative projects by Daniel Duncombe",
    images: ["/og-image.jpg"], // Add this image to your public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5HE8DR3PP0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5HE8DR3PP0');
            `,
          }}
        />
      </head>
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
