// "Every Project Has a Story" — grid of client/company work.
import { portfolio } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export function Portfolio() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Section intro */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Every Project Has a Story</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I truly love my projects, each one has been a part of my journey. Here&apos;s where you can explore the
            things I&apos;ve built with passion and persistence.
          </p>
        </div>

        {/* Portfolio item cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <article
              key={item.name}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <div>
                <h4 className="font-bold">{item.name}</h4>
                <span className="text-sm text-muted-foreground">{item.role}</span>
              </div>
              {/* "View" arrow icon that highlights on hover */}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
