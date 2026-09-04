"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

const PROJECTS = [
  {
    title: "Unified Solutions",
    category: "IT & Web Agency",
    description: "IT company built with friends delivering modern web development, digital solutions, and tech infrastructure.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    cta: "Visit Website",
    href: "https://unifiedsolutions.com.np",
    badge: "Agency",
    image: "public/project1.png",
  },
  {
    title: "Eternal Jewelry E-commerce",
    category: "E-Commerce",
    description: "High-converting online store designed for premium jewelry sales with custom UI and seamless checkout.",
    stack: ["Shopify / Web", "UI/UX", "Branding"],
    cta: "Visit Store",
    href: "https://tryeternalrose.com/",
    badge: "Client",
    image: "public/project2.png",
  },
  {
    title: "High-Retention Video Editing",
    category: "Video & Motion",
    description: "Short-form clips, post-production, and engaging visual content created for social growth and storytelling.",
    stack: ["DaVinci Resolve", "CapCut", "Post-Production"],
    cta: "View Instagram Edits",
    href: "https://www.instagram.com/lifeofmamba_/",
    badge: "Creative",
  },
]

export function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const filtered = activeTab === "all" ? PROJECTS : PROJECTS.filter((p) => p.badge.toLowerCase() === activeTab)

  return (
    <section id="work" className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs font-medium text-primary shadow-[0_0_12px_rgba(var(--primary-rgb),0.2)]">
          <span>// portfolio</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A showcase of production systems, developer tooling, and experimental side projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
          >
            <div>
              {p.image && (
                <div className="mb-4 overflow-hidden rounded-xl border border-border/50 bg-background/50 aspect-video">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary">{p.category}</span>
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {p.badge}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold transition-colors group-hover:text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
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