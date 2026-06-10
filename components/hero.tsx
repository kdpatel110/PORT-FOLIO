// Hero section: greeting, name, role and the two portrait photos.
import { Button } from "@/components/ui/button"
import { Mail, Link as Linkedin, GitBranch, X, Phone, icons, FileText} from "lucide-react"

// Social links shown as small round icon buttons under the name.
// (This lucide build has no brand icons, so we use generic ones.)
const socials = [Linkedin, GitBranch, X, Mail, Phone]

export function Hero() {
  return (
    <section id="home" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        {/* Left: portrait in a yellow hoodie */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/portrait-hoodie.png"
            alt="Reza Ghasemzadeh - Full-Stack Developer"
            className="w-80 md:w-96"
          />
        </div>

        {/* Right: intro text + social links + CTA */}
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-primary">Hi There, I&apos;m</p>
          <h1 className="mt-1 text-4xl font-extrabold tracking-tight md:text-5xl">Dhruvi Kalariya</h1>
          <h2 className="mt-2 text-lg font-semibold text-muted-foreground">Problem Solver</h2>

          {/* Social icon buttons */}
          <div className="mt-5 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="https://www.linkedin.com/in/dhruvikalariya1102006/" aria-label="Linkedin" title="Linkedin"> <Linkedin/> </a>
            <a href="https://github.com/kdpatel110" aria-label="Github" title="Github"> <GitBranch/> </a>
            <a href="https://x.com/DKalariya64774" aria-label="X" title="X"> <X/> </a>
            <a href="/Resume.pdf" aria-label="Resume" title="Resume" target="_blank"> <FileText/> </a>
            <a href="#contact" aria-label="Contact" title="Contact"> <Phone/> </a>
          </div>

          {/* Call to action button */}
          <Button className="mt-6 rounded-full" size="lg">
            Pick a Time That Works for You 😎
          </Button>
        </div>
      </div>
    </section>
  )
}
