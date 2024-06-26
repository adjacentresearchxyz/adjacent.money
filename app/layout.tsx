import "@/styles/globals.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"

// fonts
// import { Inter as FontSans } from "next/font/google"
import { GeistSans as FontSans } from 'geist/font/sans';
import { GeistMono as FontMono } from 'geist/font/mono';

import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <UserProvider>
          <body
            className={cn(
              "min-h-screen bg-background antialiased",
              FontMono.className
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
                {/* <SiteFooter /> */}
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </body>
        </UserProvider>
      </html>
    </>
  )
}