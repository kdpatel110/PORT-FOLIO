// Top navigation bar with the logo and menu links.
"use client"

const navLinks = ["Home", "About Me", "Projects","Contact"]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo / brand name */}
        <a href="#home" className="text-lg font-bold tracking-tight">
          Dhruvi<span className="text-primary">.</span>
        </a>

        {/* Menu links (hidden on small screens) */}
        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            </li>
          ))}
          {/* Language switch pill */}
          <li>
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Indian
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
