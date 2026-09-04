'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type Category = 'web' | 'video' | 'cyber'
type FrameKind = 'browser' | 'media' | 'terminal'

type Project = {
  title: string
  description: string
  category: Category
  tag: string
  href: string
  cta: string
  frame: FrameKind
  url: string
  stack: string[]
  image?: string
  zoomOnHover?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'Unified Solutions IT Agency',
    description:
      'Founder-led venture crafting custom web solutions, branding, and digital strategy for modern businesses.',
    category: 'web',
    tag: 'Websites',
    href: 'https://unifiedsolutions.com.np/',
    cta: 'Visit Agency Site',
    frame: 'browser',
    url: 'unifiedsolutions.com.np',
    stack: ['Next.js', 'Brand Identity'],
    image: '/images/unified-solutions.png',
  },
  {
    title: 'Ecommerce Build',
    description:
      'Custom conversion-focused storefront designed for brand storytelling and seamless digital checkout.',
    category: 'web',
    tag: 'Websites',
    href: 'https://tryeternalrose.com/',
    cta: 'Live Storefront',
    frame: 'browser',
    url: 'tryeternalrose.com',
    stack: ['Shopify', 'UI Design'],
    image: '/images/eternal-rose.png',
    zoomOnHover: true,
  },
  {
    title: 'Cinematic & Short-Form Edits',
    description:
      'Post-production showcase featuring color grading in DaVinci Resolve, high-retention cuts in CapCut, and custom audio design.',
    category: 'video',
    tag: 'Video & Motion',
    href: 'https://instagram.com/lifeofmamba_',
    cta: 'Watch on Instagram',
    frame: 'media',
    url: 'reel · 00:32',
    stack: ['DaVinci', 'CapCut'],
  },
  {
    title: 'Network Security Lab & Scripts',
    description:
      'Hands-on cybersecurity research, custom Python network utilities, and Linux environment security scripts.',
    category: 'cyber',
    tag: 'Cybersec & Code',
    href: 'https://github.com/TengenHeka',
    cta: 'View on GitHub',
    frame: 'terminal',
    url: '~/sec-lab',
    stack: ['Python', 'Linux', 'Bash'],
  },
]

const FILTERS: { label: string; value: Category | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Websites', value: 'web' },
  { label: 'Video & Motion', value: 'video' },
  { label: 'Cybersec & Code', value: 'cyber' },
]

function FrameWireframe({
  kind,
  url,
  image,
  alt,
  zoomOnHover,
}: {
  kind: FrameKind
  url: string
  image?: string
  alt?: string
  zoomOnHover?: boolean
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background/50 transition-colors duration-300 group-hover:border-primary/60">
      {/* Frame chrome bar */}
      <div className="flex items-center gap-1.5 border-b border-border/70 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
        <span className="ml-2 flex-1 truncate rounded-md bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {kind === 'terminal' ? `$ ${url}` : url}
        </span>
      </div>

      {/* Screenshot preview — replaces the skeleton when an image is provided */}
      {image ? (
        <div className="relative h-40 overflow-hidden rounded-b-xl">
          <img
            src={image || '/placeholder.svg'}
            alt={alt ?? ''}
            className={cn(
              'h-full w-full object-cover object-top transition-transform duration-500 ease-out',
              zoomOnHover && 'group-hover:scale-105',
            )}
          />
          {/* Subtle dark overlay that fades out on hover for text contrast pop */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-background/15 transition-opacity duration-300 group-hover:opacity-0"
          />
        </div>
      ) : (
        /* Frame body — kind-specific skeleton */
        <div className="relative h-28 p-3">
        {kind === 'browser' && (
          <div className="flex h-full flex-col gap-2">
            <div className="h-2.5 w-1/2 rounded bg-primary/40 transition-colors group-hover:bg-primary/70" />
            <div className="h-2 w-3/4 rounded bg-muted-foreground/25" />
            <div className="mt-auto grid grid-cols-3 gap-2">
              <div className="h-8 rounded bg-muted-foreground/15" />
              <div className="h-8 rounded bg-muted-foreground/15" />
              <div className="h-8 rounded bg-primary/25 transition-colors group-hover:bg-primary/50" />
            </div>
          </div>
        )}

        {kind === 'media' && (
          <div className="flex h-full items-center justify-center rounded-lg bg-gradient-to-br from-purple/15 to-primary/10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/60 bg-background/60 transition-all group-hover:scale-110 group-hover:glow-neon">
              <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-primary" />
            </span>
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
              <span className="h-1 flex-1 rounded-full bg-muted-foreground/25">
                <span className="block h-full w-1/3 rounded-full bg-primary/70" />
              </span>
            </div>
          </div>
        )}

        {kind === 'terminal' && (
          <div className="flex h-full flex-col gap-1.5 font-mono text-[10px] leading-tight">
            <p className="text-neon">
              <span className="text-muted-foreground">$</span> nmap -sV target
            </p>
            <p className="text-muted-foreground">Starting scan…</p>
            <p className="text-purple">22/tcp open ssh</p>
            <p className="text-primary">443/tcp open https</p>
            <p className="text-muted-foreground">
              <span className="term-cursor" aria-hidden="true" />
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  const [active, setActive] = useState<Category | 'all'>('all')
  const visible = PROJECTS.filter((p) => active === 'all' || p.category === active)

  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">// work &amp; projects</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Selected Work
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            These are the things I&apos;ve actually shipped — real clients, real storefronts, and
            security work I built end to end. Pick a discipline and dig in.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                active === f.value
                  ? 'border-primary bg-primary/15 text-primary glow-neon'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {visible.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass relative flex flex-col rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-neon"
            >
              <FrameWireframe kind={p.frame} url={p.url} />

              <div className="mt-5 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-balance leading-snug">{p.title}</h3>
                <span className="mt-0.5 shrink-0 rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {p.tag}
                </span>
              </div>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              {/* Tech pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <span className="mt-5 inline-flex w-fit items-center gap-1 border-b border-primary/40 pb-0.5 font-mono text-sm text-primary transition-colors group-hover:border-primary">
                {p.cta}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
