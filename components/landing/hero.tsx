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
    offset: "mt-0",
    bg: "bg-neutral-400",
    labelColor: "text-white/60",
  },
  {
    id: 2,
    label: "Ad Creatives",
    offset: "mt-10",
    bg: "bg-neutral-500",
    labelColor: "text-neutral-950/60",
  },
  {
    id: 3,
    label: "Social Content",
    offset: "mt-20",
    bg: "bg-neutral-600",
    labelColor: "text-white/60",
  },
]

export function Hero() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  return (
    <>
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
                on-brand, and at scale. Hookana is the creative production
                engine that keeps your pipeline full without blowing your budget
                or burning out your team.
              </p>

              <div className="flex gap-5">
                <Button
                  size="lg"
                  className="mt-4 rounded-md"
                  variant="destructive"
                  asChild
                >
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    GET 2 FREE CONCEPTS
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="mt-4 rounded-md border-destructive"
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
          <div className="relative mt-20">
            {VIDEO_CARDS.map((card, i) => (
              <div
                key={card.id}
                className={cn(
                  "group absolute aspect-video w-full cursor-pointer rounded-md transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl",
                  card.bg,
                  card.offset
                )}
                style={{ zIndex: i + 1 }}
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
        <div className="relative">
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
