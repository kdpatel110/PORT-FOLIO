// "What have I created?" — personal projects shown as cards.
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { Link } from "lucide-react"

export function Projects() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16">
      {/* Section intro */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">What have I created?</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Creating isn&apos;t just part of my work, it&apos;s part of my life. Here you can explore the projects
          I&apos;ve built and released with my own vision and passion.
        </p>
      </div>

      {/* Project cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="rounded-xl border border-border bg-card p-6">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold text-primary">{project.name}</h3>
              <a href={project.address}> <Link/> </a>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

            <Button  className="mt-4 rounded-full" size="sm">
              Read More
            </Button>
            

          </article>
        ))}
      </div>
    </section>
  )
}
