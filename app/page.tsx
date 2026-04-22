import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function Page() {
  return (
    <div className="px-5">
      <div className="mt-20 flex h-200 w-full rounded-md bg-pink-50 py-14">
        <div className="flex max-w-200 flex-col items-center justify-between pl-40">
          <div className="flex flex-col justify-between gap-3">
            <p className="pr-8 font-sans text-[64px] leading-16 font-black text-neutral-950 uppercase">
              Creativity at Volume.
            </p>
            <p className="type-heading-2 text-primary uppercase">
              Without the compromise.
            </p>
          </div>

          <div>
            <p className="type-paragraph-large text-accent-foreground">
              D2C brands and performance teams need fresh creatives, fast,
              on-brand, and at scale. Hookana is the creative production engine
              that keeps your pipeline full without blowing your budget or
              burning out your team.
            </p>

            <Button size="lg" className="mt-4 rounded-md" variant="destructive">
              GET 2 FREE CONCEPTS
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
