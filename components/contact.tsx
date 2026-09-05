"use client"

import { useState } from "react"

const SOCIALS = [
  { logo: "/brands/github.svg.png", label: "GitHub (TengenHeka)", href: "https://github.com/TengenHeka" },
  { logo: "/brands/instagram.svg", label: "Instagram", href: "https://instagram.com/_mamba_yz" },
  { logo: "/brands/linkedin.svg", label: "LinkedIn", href: "https://np.linkedin.com/in/yunish-gurung-ab83423b4" },
  { logo: "/brands/youtube.svg", label: "YouTube", href: "#", isPending: true },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "347ec92e-4238-493d-bda1-c5f17fc20595")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      if (data.success) {
        setSent(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (err) {
      alert("Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs font-medium text-primary shadow-[0_0_12px_rgba(var(--primary-rgb),0.2)]">
          <span>// contact</span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Let's Build Something</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Got a project, a collaboration, or just want to talk shop about security, video, or startups? Drop a message.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-start space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect Directly</h3>
            <p className="text-sm text-muted-foreground">
              Prefer direct links? Find me across these platforms or reach out through social channels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.isPending ? "_self" : "_blank"}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (social.isPending) {
                    e.preventDefault()
                    alert("YT journey is yet to begin. 🎬")
                  }
                }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <img src={social.logo} alt={social.label} className="h-5 w-5" />
                <span className="font-mono text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl border border-border p-8">
          {sent ? (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4 text-primary">
                ✓
              </div>
              <h3 className="text-xl font-semibold">Message Sent!</h3>
              <p className="text-sm text-muted-foreground">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 font-mono text-xs text-primary underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground">Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground">Project Type</label>
                <select
                  name="project_type"
                  className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                >
                  <option>Web / Shopify Build</option>
                  <option>Video & Motion Editing</option>
                  <option>Cybersecurity / Scripting</option>
                  <option>SMMA / Digital Strategy</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about it..."
                  className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Yunish Gurung (TengenHeka). Built with Next.js & Tailwind CSS. Kathmandu, Nepal.
        </p>
      </div>
    </footer>
  )
}
