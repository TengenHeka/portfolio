"use client"

import { useState } from "react"
import { ExternalLink, Code2, Sparkles, Terminal } from "lucide-react"

type Project = {
  id: string
  title: string
  description: string
  tag: string
  stack: string[]
  image: string // <-- Change 'frame' to 'image' here
  url: string
  cta: string
}

const PROJECTS: Project[] = [
  {
    id: "unified-solutions",
    title: "Unified Solutions",
    description: "IT company built with friends delivering modern web development, digital solutions, and tech infrastructure.",
    tag: "IT & Web Agency",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/project1.png",
    url: "https://unifiedsolutions.com.np",
    cta: "Visit Website",
  },
  {
    id: "eternal-jewelry",
    title: "Eternal Jewelry E-commerce",
    description: "High-converting online store designed for premium jewelry sales with custom UI and seamless checkout.",
    tag: "E-Commerce",
    stack: ["Shopify / Web", "UI/UX", "Branding"],
    image: "/project2.png",
    url: "https://tryeternalrose.com",
    cta: "Visit Store",
  },
  {
  id: "video-editing-showcase",
  title: "High-Retention Video Editing",
  description: "Short-form clips, post-production, and engaging visual content created for social growth and storytelling.",
  tag: "Video & Motion",
  stack: ["DaVinci Resolve", "CapCut", "Post-Production"],
  image: "",
  url: "https://www.instagram.com/lifeofmamba_/",
  cta: "View Instagram Edits",
  }
]

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
           <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/60 bg-muted/40 flex items-center justify-center">
              {p.image ? (
                <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <span className="font-mono text-xs text-muted-foreground/60">Content Preview Coming Soon</span>
          )}
            </div>

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