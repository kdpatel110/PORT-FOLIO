// Home page: stacks all the portfolio sections in order.
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { CtaBanner } from "@/components/cta-banner"
import { Projects } from "@/components/projects"
import { Portfolio } from "@/components/portfolio"
import { Testimonial } from "@/components/testimonial"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CtaBanner />
      <Projects />
      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </main>
  )
}
