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
          {socials.map((Icon, i) => (
            <a key={i} href="#" aria-label="Social link" className="opacity-80 transition-opacity hover:opacity-100">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Credit line */}
        <p className="text-sm opacity-80">Made with ❤️ and lots of ☕2026 ©</p>
      </div>
    </footer>
  )
}
