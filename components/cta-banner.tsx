// Yellow call-to-action banner shown between sections.
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:text-left">
        <h3 className="text-xl font-bold md:text-2xl">I build with passion, wherever I am ! 🚀</h3>
        <Button variant="secondary" size="lg" className="rounded-full">
          Hire Me Now
        </Button>
      </div>
    </section>
  )
}
