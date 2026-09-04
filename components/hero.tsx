'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Download, MapPin } from 'lucide-react'

type Token = { text: string; className: string }

// Each command is tokenized for lightweight terminal syntax highlighting.
const COMMANDS: Token[][] = [
  [
    { text: '$ ', className: 'text-accent' },
    { text: 'whoami', className: 'text-primary' },
    { text: ' → ', className: 'text-muted-foreground' },
    { text: 'Yunish Gurung', className: 'text-foreground' },
    { text: ' // TengenHeka', className: 'text-muted-foreground' },
  ],
  [
    { text: '$ ', className: 'text-accent' },
    { text: 'cat ', className: 'text-primary' },
    { text: 'role.txt', className: 'text-foreground' },
    { text: ' → ', className: 'text-muted-foreground' },
    { text: '"CyberSec + Web Dev"', className: 'text-[oklch(0.8_0.17_150)]' },
  ],
  [
    { text: '$ ', className: 'text-accent' },
    { text: 'ls ', className: 'text-primary' },
    { text: 'stack/', className: 'text-foreground' },
    { text: ' → ', className: 'text-muted-foreground' },
    { text: 'nextjs davinci bash python', className: 'text-accent' },
  ],
  [
    { text: '$ ', className: 'text-accent' },
    { text: 'echo ', className: 'text-primary' },
    { text: '$LOCATION', className: 'text-[oklch(0.82_0.15_85)]' },
    { text: ' → ', className: 'text-muted-foreground' },
    { text: 'Kathmandu, Nepal', className: 'text-foreground' },
  ],
]

function lineLength(tokens: Token[]) {
  return tokens.reduce((n, t) => n + t.text.length, 0)
}

function renderPartial(tokens: Token[], count: number) {
  const out: Token[] = []
  let remaining = count
  for (const t of tokens) {
    if (remaining <= 0) break
    if (t.text.length <= remaining) {
      out.push(t)
      remaining -= t.text.length
    } else {
      out.push({ text: t.text.slice(0, remaining), className: t.className })
      remaining = 0
    }
  }
  return out
}

function Typewriter() {
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (lineIdx >= COMMANDS.length) return
    const full = lineLength(COMMANDS[lineIdx])
    if (charIdx <= full) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 30)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setCharIdx(0)
      setLineIdx((i) => i + 1)
    }, 450)
    return () => clearTimeout(t)
  }, [charIdx, lineIdx])

  return (
    <div className="font-mono text-xs leading-relaxed sm:text-sm">
      {COMMANDS.slice(0, lineIdx).map((tokens, i) => (
        <p key={i} className="whitespace-pre-wrap">
          {tokens.map((t, j) => (
            <span key={j} className={t.className}>
              {t.text}
            </span>
          ))}
        </p>
      ))}
      {lineIdx < COMMANDS.length && (
        <p className="whitespace-pre-wrap">
          {renderPartial(COMMANDS[lineIdx], charIdx).map((t, j) => (
            <span key={j} className={t.className}>
              {t.text}
            </span>
          ))}
          <span className="term-cursor" aria-hidden="true" />
        </p>
      )}
      {lineIdx >= COMMANDS.length && (
        <p className="text-muted-foreground">
          <span className="text-accent">$ </span>
          <span className="term-cursor" aria-hidden="true" />
        </p>
      )}
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-40 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div id="about">
          <span className="glass inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.8_0.17_150)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.8_0.17_150)]" />
            </span>
            Available for work &amp; collaborations
          </span>

          <div className="mt-6 flex items-center gap-4">
            <span className="relative shrink-0">
              <span
                className="absolute -inset-1 rounded-full bg-primary/30 blur-md opacity-60"
                aria-hidden="true"
              />
              <img
                src="/images/profile.png"
                alt="Yunish Gurung portrait"
                className="relative h-16 w-16 rounded-full object-cover object-top ring-2 ring-primary/60 sm:h-20 sm:w-20"
              />
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Yunish <span className="text-primary text-glow-neon">Gurung</span>
            </h1>
          </div>

          <p className="mt-4 font-mono text-base text-accent sm:text-lg">
            Cybersecurity &amp; Web Developer | High-Retention Video Editor
          </p>

          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            BCS Cybersecurity undergrad building high-performance web applications, custom scripts,
            and high-retention video content. Founder of Unified Solutions, based in Kathmandu.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-neon"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/60 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Kathmandu, Nepal
          </p>
        </div>

        <div className="animate-float">
          <div className="glass overflow-hidden rounded-xl border border-border glow-purple">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="h-3 w-3 rounded-full bg-accent/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                tengenheka@kathmandu:~
              </span>
            </div>
            <div className="min-h-52 p-5">
              <Typewriter />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
