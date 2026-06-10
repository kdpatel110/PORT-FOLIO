// "What People Say About Me?" — a single testimonial quote card.
import { Star } from "lucide-react"

export function Testimonial() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-16">
      {/* Section intro */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">What People Say About Me?</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          There&apos;s nothing more heartwarming than hearing from the people I&apos;ve worked with. Their kindness and
          collaboration keep me motivated every day.
        </p>
      </div>

      {/* Quote card */}
      <figure className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-card p-8">
        <blockquote className="leading-relaxed text-muted-foreground">
          I had the pleasure of working with Reza for nearly two years at FinlyWealth, and I&apos;d recommend him without
          hesitation. Reza is a solid full-stack engineer with strong command across backend services, databases, and
          frontend, and is comfortable owning work across the entire development lifecycle. He has a good understanding
          of build processes and engineering best practices, and has shown the ability to take on technically ambitious
          projects and see them through.
        </blockquote>

        <figcaption className="mt-6">
          <div className="font-bold">Kevin Shahnazari</div>
          {/* Five-star rating */}
          <div className="mt-1 flex gap-0.5 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
