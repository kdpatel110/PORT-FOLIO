// Skills section: tech skill pills + spoken language proficiency bars.
import { skills, languages } from "@/lib/data"

export function Skills() {
  return (
    <section id="projects" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
        {/* Left: tech skills shown as pills */}
        <div>
          <h3 className="text-2xl font-bold">Skills</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Here&apos;s a look at my skill set. The tech world changes every moment and that&apos;s what makes it
            exciting! I constantly keep my knowledge up to date and love exploring new technologies to keep growing.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: spoken language levels as progress bars */}
        <div>
          <h3 className="text-2xl font-bold">Language skill</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            One of my biggest interests is learning new languages both programming and spoken ones. I try to learn
            something new every day and keep improving in the languages I love, so I can use them to grow personally and
            professionally.
          </p>

          <div className="mt-6 space-y-5">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-1 flex items-center justify-between text-sm font-medium">
                  <span>{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}%</span>
                </div>
                {/* Track + filled bar (width set from the data level) */}
                <div className="h-2.5 w-full rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${lang.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
