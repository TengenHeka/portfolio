'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'

const SOCIALS = [
  { logo: '/brands/github.svg', label: 'GitHub (TengenHeka)', href: 'https://github.com/TengenHeka' },
  { logo: '/brands/instagram.svg', label: 'Instagram', href: '#' },
  { logo: '/brands/linkedin.svg', label: 'LinkedIn', href: '#' },
  { logo: '/brands/youtube.svg', label: 'YouTube', href: '#' },
]

const PROJECT_TYPES = [
  'Web / Shopify Build',
  'Video & Motion Editing',
  'Cybersecurity / Scripting',
  'SMMA / Digital Strategy',
  'Something else',
]

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative py-24">
      <div
        className="absolute left-1/2 top-0 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-primary">// contact</p>
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Build Something
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Got a project, a collaboration, or just want to talk shop about security, video, or
              startups? Drop a message.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm transition-all hover:border-primary/50 hover:text-primary"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/90 p-1.5">
                    <img src={s.logo || '/placeholder.svg'} alt="" className="h-full w-full object-contain" />
                  </span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="glass rounded-2xl border border-border p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="type" className="text-sm font-medium">
                  Project Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
                >
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-popover">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about it..."
                  className="resize-none rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-neon disabled:opacity-80"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Message Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground sm:px-6">
        <p>
          © 2026 Yunish Gurung (TengenHeka). Built with Next.js &amp; Tailwind CSS. Kathmandu,
          Nepal.
        </p>
      </div>
    </footer>
  )
}
