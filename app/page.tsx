import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Ventures } from '@/components/ventures'
import { Contact, Footer } from '@/components/contact'
import { CustomCursor } from '@/components/custom-cursor'

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Ventures />
      <Contact />
      <Footer />
    </main>
  )
}
