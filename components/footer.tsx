// Page footer with social icons and a small credit line.
import { Mail, Link as Linkedin, GitBranch, X , Phone, } from "lucide-react"

// Generic icons used as social links (this lucide build has no brand icons)
const socials = [Linkedin, GitBranch, X, Mail, Phone]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
        {/* Social icons */}
        <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/dhruvikalariya1102006/" aria-label="Linkedin" title="Linkedin"> <Linkedin/> </a>
            <a href="https://github.com/kdpatel110" aria-label="Github" title="Github"> <GitBranch/> </a>
            <a href="https://x.com/DKalariya64774" aria-label="X" title="X"> <X/> </a>
            <a href="#contact" aria-label="Mail" title="Mail"> <Mail/> </a>
            <a href="#contact" aria-label="Contact" title="Contact"> <Phone/> </a>
        </div>

        {/* Credit line */}
        <p className="text-sm opacity-80">Made with ❤️ and lots of ☕2026 ©</p>
      </div>
    </footer>
  )
}
