import { Bike, Dumbbell, Guitar, Palette, Users, Coffee } from 'lucide-react'

const ITEMS = [
  { icon: Bike, title: 'Riding & Moto Exploration', desc: 'Chasing roads across Nepal on two wheels.' },
  { icon: Dumbbell, title: 'Calisthenics & Gym', desc: 'Bodyweight strength and disciplined training.' },
  { icon: Guitar, title: 'Guitar & Bass', desc: 'Riffs, rhythm, and low-end grooves.' },
  { icon: Palette, title: 'Art, Drawing & Design', desc: 'Sketching concepts and visual identity.' },
  { icon: Users, title: 'Rotaract Central Valley', desc: 'Kasthamandap — service and leadership.' },
  { icon: Coffee, title: 'Coffee Culture & Craft', desc: 'Certified barista with a year behind the bar.' },
]

export function Ventures() {
  return (
    <section id="ventures" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">// beyond the code</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Lifestyle &amp; Ventures
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The pursuits that fuel the work — an extreme life enthusiast on and off the screen.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group glass flex items-start gap-4 rounded-xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:glow-purple"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent transition-colors group-hover:bg-accent/20">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
