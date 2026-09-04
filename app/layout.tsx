import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yunish Gurung — TengenHeka | Cybersec, Visuals & Web Dev',
  description:
    'Portfolio of Yunish Gurung (TengenHeka) — BCS Cybersecurity undergrad, visual storyteller, and web developer based in Kathmandu. Founder of Unified Solutions.',
  generator: 'v0.app',
  keywords: [
    'Yunish Gurung',
    'TengenHeka',
    'Cybersecurity',
    'Web Developer',
    'Video Editor',
    'Shopify',
    'Kathmandu',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
