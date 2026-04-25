import { Button } from "@/components/ui/button"
import { ArrowUpRight, CirclePlay, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <div className="px-5">
      <div className="mt-20 flex h-220 w-full flex-col overflow-hidden rounded-md bg-pink-50 px-20 pt-30">
        {/* Hero Content */}
        <div className="flex w-full justify-center gap-34">
          <div className="flex max-w-120 flex-col gap-3">
            <p className="font-sans text-[64px] leading-16 font-black tracking-tight text-neutral-950 uppercase">
              Creativity at Volume.
            </p>
            <p className="type-heading-2 text-primary uppercase">
              Without the compromise.
            </p>
          </div>

          <div className="flex max-w-160 flex-col gap-6">
            <p className="type-paragraph-large text-accent-foreground">
              D2C brands and performance teams need fresh creatives, fast,
              on-brand, and at scale. Hookana is the creative production engine
              that keeps your pipeline full without blowing your budget or
              burning out your team.
            </p>

            <div className="flex gap-5">
              <Button
                size="lg"
                className="mt-4 rounded-md"
                variant="destructive"
              >
                GET 2 FREE CONCEPTS
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                size="lg"
                className="mt-4 rounded-md border-destructive"
                variant="outline"
              >
                WATCH THE REEL
                <CirclePlay className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Videos */}
        <div className="relative mt-20">
          <div className="absolute aspect-video w-full rounded-md bg-[#D9D9D9]" />
          <div className="absolute mt-10 aspect-video w-full rounded-md bg-[#A2A2A2]" />
          <div className="absolute mt-20 aspect-video w-full rounded-md bg-[#585858]" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative">
        <div className="absolute bottom-8 left-8 z-20">
          <ArrowDown className="size-6 text-accent-foreground" />
        </div>
      </div>
    </div>
  )
}
