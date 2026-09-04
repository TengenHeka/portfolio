"use client"

import { ShieldHalf, Clapperboard, Handshake } from "lucide-react"

type SkillCategory = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Tech & Security",
    icon: ShieldHalf,
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Linux / Bash", "Python", "Java", "HTML & CSS", "Git"],
  },
  {
    title: "Creative & Post-Production",
    icon: Clapperboard,
    skills: ["DaVinci Resolve", "CapCut", "Photoshop", "Canva Pro", "Content Clipping", "Post-Production"],
  },
  {
    title: "Real-World & Leadership",
    icon: Handshake,
    skills: ["Digital Marketing / SMMA", "Certified Barista (1 yr)", "Rotaract Leadership", "Entrepreneurship"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs font-medium text-primary shadow-[0_0_12px_rgba(var(--primary-rgb),0.2)]">
          <span>~/skills-stack</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">What I Work With</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Technical depth in security and code, paired with a creative post-production toolkit and real-world leadership experience.
        </p>

        <blockquote className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-6 py-3 font-mono text-xs text-muted-foreground italic">
          "You do not rise to the level of your goals. You fall to the level of your systems."
          <span className="mt-1 block font-sans text-primary/80 not-italic">— James Clear, Atomic Habits</span>
        </blockquote>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {SKILL_CATEGORIES.map((cat) => {
          const Icon = cat.icon
          return (
            <div
              key={cat.title}
              className="glass relative flex flex-col rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary/40"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:border-primary/50 hover:bg-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}