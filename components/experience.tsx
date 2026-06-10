// "My Experiences" timeline: a list of past jobs with bullet points.
import { Briefcase } from "lucide-react"
import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {/* Section intro */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">My Experiences</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          My work experience has been more than just a career path; it&apos;s been a journey of growth and learning.
          I&apos;ve worked with amazing people who&apos;ve taught and inspired me along the way.
        </p>
      </div>

      {/* Experience cards in a responsive two-column grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {experiences.map((job) => (
          <article key={job.title} className="relative rounded-xl border border-border bg-card p-6">
            {/* Period badge with an icon in the top-right corner */}
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              <Briefcase className="h-3 w-3" />
              {job.period}
            </span>

            <h3 className="pr-28 text-base font-bold">{job.title}</h3>

            {/* Bullet list of responsibilities */}
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
              {job.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
