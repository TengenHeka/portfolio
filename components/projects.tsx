"use client"

import { useState } from "react"
import { ExternalLink, Code2, Sparkles, Terminal } from "lucide-react"

type Project = {
  id: string
  title: string
  description: string
  tag: string
  stack: string[]
  frame: "dashboard" | "terminal" | "cards"
  url: string
  githubUrl?: string
  cta: string
}

const PROJECTS: Project[] = [
  {
    id: "nexus-analytics",
    title: "Nexus Analytics Platform",
    description: "Real-time infrastructure monitoring dashboard with predictive anomaly detection and custom alert pipelines.",
    tag: "Featured",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts"],
    frame: "dashboard",
    url: "https://example.com",
    cta: "View Live Project",
  },
  {
    id: "synth-cli",
    title: "Synth Developer CLI",
    description: "Blazing-fast command line interface for automated environment provisioning and microservice orchestration.",
    tag: "Open Source",
    stack: ["Rust", "Tokio", "Clap", "Docker API"],
    frame: "terminal",
    url: "https://example.com",
    cta: "Explore Repository",
  },
  {
    id: "aether-ui",
    title: "Aether Component Library",
    description: "Accessible, unstyled UI primitives designed for high-performance React applications with built-in dark mode.",
    tag: "Design System",
    stack: ["React", "Radix UI", "Tailwind", "Framer Motion"],
    frame: "cards",
    url: "https://example.com",
    cta: "Read Documentation",
  },
]

function FrameWireframe({ kind, url }: { kind: Project["frame"]; url: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/60 bg-muted/30 p-3 shadow-inner">
      <div className="flex items-center justify-between border-b border-border/40 pb-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="truncate font-mono text-[10px] text-muted-foreground">{url}</span>
      </div>

      <div className="mt-3 flex h-[calc(100%-2rem)] items-center justify-center">
        {kind === "dashboard" && (
          <div className="grid w-full grid-cols-3 gap-2">
            <div className="h-16 rounded-lg border border-border/50 bg-background/50 p-2">
              <div className="h-2 w-12 rounded bg-primary/20" />
              <div className="mt-2 h-4 w-8 rounded bg-primary/40" />
            </div>
            <div className="h-16 rounded-lg border border-border/50 bg-background/50 p-2">
              <div className="h-2 w-12 rounded bg-primary/20" />
              <div className="mt-2 h-4 w-10 rounded bg-primary/40" />
            </div>
            <div className="h-16 rounded-lg border border-border/50 bg-background/50 p-2">
              <div className="h-2 w-12 rounded bg-primary/20" />
              <div className="mt-2 h-4 w-6 rounded bg-primary/40" />
            </div>
          </div>
        )}

        {kind === "terminal" && (
          <div className="w-full rounded-lg border border-border/50 bg-background/80 p-3 font-mono text-xs text-primary">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Terminal className="h-3 w-3" />
              <span>~ synth init my-app</span>
            </div>
            <div className="mt-1 text-emerald-400">✓ Initialized successfully</div>
          </div>
        )}

        {kind === "cards" && (
          <div className="flex gap-2">
            <div className="h-12 w-16 rounded-md border border-primary/30 bg-primary/10" />
            <div className="h-12 w-16 rounded-md border border-border/50 bg-background/50" />
            <div className="h-12 w-16 rounded-md border border-border/50 bg-background/50" />
          </div>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<string>("all")

  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tag.toLowerCase() === filter.toLowerCase())

  return (
    <section id="projects" className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Selected Work</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">A showcase of production systems, developer tooling, and experimental side projects.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <a
            key={p.id}
            href={p.url}
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

            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

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

            <span className="mt-5 inline-flex w-fit items-center gap-1 border-b border-primary/40 pb-0.5 font-mono text-sm text-primary transition-colors group-hover:border-primary">
              {p.cta}
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}