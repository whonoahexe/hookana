"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, CirclePlay, ArrowDown, Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const VIDEO_CARDS = [
  {
    id: 1,
    label: "Brand Films",
    mobileClasses: "z-30 scale-100 translate-y-0",
    desktopClasses: "lg:z-10 lg:scale-100 lg:translate-y-0 lg:mt-0",
    bg: "bg-neutral-400",
    labelColor: "text-white/60",
  },
  {
    id: 2,
    label: "Ad Creatives",
    mobileClasses: "z-20 scale-[0.95] translate-y-4 opacity-90",
    desktopClasses: "lg:z-20 lg:scale-100 lg:translate-y-0 lg:mt-10 lg:opacity-100",
    bg: "bg-neutral-500",
    labelColor: "text-neutral-950/60",
  },
  {
    id: 3,
    label: "Social Content",
    mobileClasses: "z-10 scale-[0.90] translate-y-8 opacity-80",
    desktopClasses: "lg:z-30 lg:scale-100 lg:translate-y-0 lg:mt-20 lg:opacity-100",
    bg: "bg-neutral-600",
    labelColor: "text-white/60",
  },
]

export function Hero() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  return (
    <>
      <div className="px-2 lg:px-5">
        <div className="mt-5 flex min-h-[600px] w-full flex-col overflow-hidden rounded-t-[1.5rem] rounded-b-[2.5rem] bg-pink-50 px-5 pt-20 pb-24 md:mt-10 md:rounded-t-md md:rounded-b-[3rem] md:px-10 md:pt-24 lg:mt-20 lg:h-220 lg:min-h-0 lg:rounded-md lg:px-12 lg:pt-24 lg:pb-0 xl:px-20 xl:pt-30">
          {/* Hero Content */}
          <div className="flex w-full flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-center lg:gap-16 lg:text-left xl:gap-34">
            <div className="flex max-w-120 flex-col gap-2 md:gap-3 lg:max-w-96 xl:max-w-120">
              <p className="font-sans text-5xl font-black leading-[0.9] tracking-tighter text-neutral-950 uppercase sm:text-6xl lg:text-[52px] lg:leading-[1.05] lg:tracking-tight xl:text-[64px] xl:leading-16">
                Creativity at Volume.
              </p>
              <p className="type-heading-3 text-pink-500 uppercase lg:text-2xl xl:type-heading-2">
                Without the compromise.
              </p>
            </div>

            <div className="flex max-w-160 flex-col gap-8 lg:max-w-120 lg:gap-6 xl:max-w-160">
              <p className="type-paragraph-regular md:type-paragraph-large text-accent-foreground px-2 lg:px-0">
                D2C brands and performance teams need fresh creatives, fast,
                on-brand, and at scale. Hookana is the creative production
                engine that keeps your pipeline full without blowing your budget
                or burning out your team.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-5 w-full">
                <Button
                  size="lg"
                  className="rounded-md w-full sm:w-auto"
                  variant="default"
                  asChild
                >
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    GET 2 FREE CONCEPTS
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="rounded-md border-destructive w-full sm:w-auto"
                  variant="outline"
                  onClick={() => setActiveVideo(0)}
                >
                  WATCH THE REEL
                  <CirclePlay className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Stacked video cards */}
          <div className="relative mt-12 w-full max-w-[500px] mx-auto lg:mt-20 lg:max-w-none">
            {VIDEO_CARDS.map((card, i) => (
              <div
                key={card.id}
                className={cn(
                  "group aspect-video w-full cursor-pointer rounded-md transition-all duration-300 hover:shadow-2xl",
                  i === 0 ? "relative" : "absolute inset-x-0 top-0",
                  "lg:absolute lg:hover:-translate-y-4",
                  card.bg,
                  card.mobileClasses,
                  card.desktopClasses
                )}
                onClick={() => setActiveVideo(card.id)}
              >
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex size-18 items-center justify-center rounded-full bg-black/20 ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play className="size-8 fill-white text-white" />
                  </div>
                </div>

                {/* Card label */}
                <div className="absolute bottom-5 left-6">
                  <p
                    className={cn(
                      "type-monospaced text-xs tracking-widest uppercase",
                      card.labelColor
                    )}
                  >
                    {card.label}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 size-2 rounded-full bg-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative hidden lg:block">
          <div className="absolute bottom-8 left-8 z-20">
            <ArrowDown className="size-6 text-accent-foreground" />
          </div>
        </div>
      </div>

      {/* Full-screen video modal */}
      <div
        className={cn(
          "fixed inset-0 z-100 flex items-center justify-center transition-all duration-300",
          activeVideo !== null
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-xl"
          onClick={() => setActiveVideo(null)}
        />

        {/* Modal content */}
        <div className="relative w-full max-w-5xl px-6">
          <button
            className="absolute -top-14 right-6 flex size-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
          >
            <X className="size-5" />
          </button>

          <div className="aspect-video w-full overflow-hidden rounded-md bg-neutral-900">
            {/* Replace src with actual video URL when ready */}
            <video
              className="h-full w-full object-cover"
              controls
              autoPlay
              src={undefined}
              suppressHydrationWarning
            />
            {/* Placeholder shown until video src is set */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="flex size-16 items-center justify-center rounded-full bg-white/10">
                <Play className="size-7 fill-white/40 text-white/40" />
              </div>
              <p className="type-monospaced text-xs tracking-widest text-white/30 uppercase">
                Video coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
