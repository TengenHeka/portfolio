import { ShieldHalf, Clapperboard, Handshake } from 'lucide-react'

type Column = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: { name: string; level: number }[]
}

const COLUMNS: Column[] = [
  {
    title: 'Tech & Security',
    icon: ShieldHalf,
    skills: [
      { name: 'Web Development', level: 88 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Linux / Bash', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Python / Scripting', level: 75 },
      { name: 'Git', level: 80 },
    ],
  },
  {
    title: 'Creative & Post-Production',
    icon: Clapperboard,
    skills: [
      { name: 'DaVinci Resolve', level: 90 },
      { name: 'CapCut', level: 88 },
      { name: 'Photoshop', level: 80 },
      { name: 'Canva Pro', level: 85 },
      { name: 'Content Clipping', level: 92 },
    ],
  },
  {
    title: 'Real-World & Leadership',
    icon: Handshake,
    skills: [
      { name: 'Digital Marketing / SMMA', level: 84 },
      { name: 'Certified Barista (1 yr)', level: 90 },
      { name: 'Rotaract Leadership', level: 86 },
      { name: 'Entrepreneurship', level: 82 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div
        className="absolute left-0 top-1/3 -z-10 h-64 w-64 rounded-full bg-accent/15 blur-[120px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">// skill matrix</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Multidisciplinary by Design
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Technical depth in security and code, paired with a creative post-production toolkit and
            real-world leadership experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {COLUMNS.map((col) => {
            const Icon = col.icon
            return (
              <div
                key={col.title}
                className="glass rounded-2xl border border-border p-6 transition-all hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{col.title}</h3>
                </div>

                <ul className="mt-6 space-y-4">
                  {col.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">{s.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
