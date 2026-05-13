"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, ArrowDown, Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { HeroContent } from "@/sanity/lib/types"

const FALLBACK: HeroContent = {
  headline: "Creativity at Volume.",
  subheadline: "Without the compromise.",
  description:
    "D2C brands and performance teams need fresh creatives, fast, on-brand, and at scale. Hookana is the creative production engine that keeps your pipeline full without blowing your budget or burning out your team.",
  ctaText: "GET 2 FREE CONCEPTS",
  watchReelText: "WATCH THE REEL",
  videoCards: [
    { label: "Brand Films", url: "https://res.cloudinary.com/ddbynpktj/video/upload/v1778667210/out_nutri-2_rk660s.mp4", type: "video" },
    { label: "Ad Creatives", url: "https://res.cloudinary.com/ddbynpktj/video/upload/v1778667201/out_nutri-3_y4swhm.mp4", type: "video" },
    { label: "Social Content", url: "https://res.cloudinary.com/ddbynpktj/video/upload/v1778667201/out_nutri-1_ltewso.mp4", type: "video" },
    { label: "Ad Creatives", url: "https://res.cloudinary.com/ddbynpktj/video/upload/v1778666353/2_e1t9tk.mp4", type: "video" },
    { label: "Social Content", url: "https://res.cloudinary.com/ddbynpktj/video/upload/v1778666347/Ishan_Nutri_2_cj01cg.mp4", type: "video" },
    { label: "Brand Films", url: "https://res.cloudinary.com/ddbynpktj/video/upload/v1778666347/The_Glow-Up_Formula_H03_y0f2rq.mp4", type: "video" },
    { label: "Ad Creatives", url: "https://res.cloudinary.com/ddbynpktj/video/upload/v1778666327/STOMACH_WHISPERER_H03_bc3wye.mp4", type: "video" },
    { label: "Brand Films", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778667389/out_11_mbqizo.png", type: "image" },
    { label: "Ad Creatives", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778667388/out_7_xvwrjs.png", type: "image" },
    { label: "Social Content", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778667387/out_9_a0sz97.png", type: "image" },
    { label: "Brand Films", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778667387/out_6_arat2h.png", type: "image" },
    { label: "Ad Creatives", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778666323/12_x1rb1v.png", type: "image" },
    { label: "Social Content", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778666319/10_parbi7.png", type: "image" },
    { label: "Brand Films", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778666318/8_ksieve.png", type: "image" },
    { label: "Ad Creatives", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778666317/5_ptc95r.png", type: "image" },
    { label: "Social Content", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778666315/2_yhjbs6.png", type: "image" },
    { label: "Brand Films", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778666314/1_iycztf.png", type: "image" },
    { label: "Ad Creatives", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778666312/4_mefyyz.png", type: "image" },
    { label: "Social Content", url: "https://res.cloudinary.com/ddbynpktj/image/upload/v1778666312/3_ylu6cf.png", type: "image" },
  ],
}

const CARD_STYLES = [
  { bg: "bg-neutral-400", labelColor: "text-white/60" },
  { bg: "bg-neutral-500", labelColor: "text-neutral-950/60" },
  { bg: "bg-neutral-600", labelColor: "text-white/60" },
]

const VISIBLE = 3


export function Hero({ content }: { content: HeroContent | null }) {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [carouselStart, setCarouselStart] = useState(0)

  const { headline, subheadline, description, ctaText, videoCards } =
    content ?? FALLBACK
  const cards = videoCards?.length > 0 ? videoCards : FALLBACK.videoCards
  const maxStart = Math.max(0, cards.length - VISIBLE)
  const visibleCards = cards.slice(carouselStart, carouselStart + VISIBLE)

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselStart((s) => (s >= maxStart ? 0 : s + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [maxStart])
  const activeCard = activeVideo !== null ? cards[activeVideo] : undefined
  const activeUrl = activeCard?.url
  const activeType = activeCard?.type ?? "video"

  return (
    <>
      <div className="px-2 lg:px-5">
        <div className="mt-5 flex min-h-[600px] w-full flex-col overflow-hidden rounded-t-[1.5rem] rounded-b-[2.5rem] bg-pink-50 px-5 pt-20 pb-24 md:mt-10 md:rounded-t-md md:rounded-b-[3rem] md:px-10 md:pt-24 lg:mt-20 lg:h-220 lg:min-h-0 lg:rounded-md lg:px-12 lg:pt-24 lg:pb-0 xl:px-20 xl:pt-30">
          {/* Hero Content */}
          <div className="flex w-full flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-center lg:gap-16 lg:text-left xl:gap-34">
            <div className="flex max-w-120 flex-col gap-2 md:gap-3 lg:max-w-96 xl:max-w-120">
              <p className="font-sans text-5xl leading-[0.9] font-black tracking-tighter text-neutral-950 uppercase sm:text-6xl lg:text-[52px] lg:leading-[1.05] lg:tracking-tight xl:text-[64px] xl:leading-16">
                {headline}
              </p>
              <p className="type-heading-3 xl:type-heading-2 text-pink-500 uppercase lg:text-2xl">
                {subheadline}
              </p>
            </div>

            <div className="flex max-w-160 flex-col gap-8 lg:max-w-120 lg:gap-6 xl:max-w-160">
              <p className="type-paragraph-regular md:type-paragraph-large px-2 text-accent-foreground lg:px-0">
                {description}
              </p>

              <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start lg:gap-5">
                <Button
                  size="lg"
                  className="w-full rounded-md sm:w-auto"
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
                    {ctaText}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/*
            Outer wrapper: full width + relative so arrows can be anchored
            to the hero edges while the card stack keeps its original layout.
          */}
          <div className="relative mt-12 w-full lg:mt-20">
            {/* Left arrow — anchored to the left edge of the hero inner area */}
            <button
              onClick={() => setCarouselStart((s) => Math.max(0, s - 1))}
              disabled={carouselStart === 0}
              className="absolute left-0 top-1/2 z-40 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-950/10 transition hover:bg-neutral-950/20 disabled:pointer-events-none disabled:opacity-20"
              aria-label="Previous"
            >
              <ChevronLeft className="size-5" />
            </button>

            {/*
              Card stack: identical structure to original — mx-auto centers on
              mobile, lg:w-fit lets desktop cards overflow to the right and get
              clipped by the hero's overflow-hidden.
            */}
            <div className="relative mx-auto w-full max-w-[300px] lg:flex lg:w-fit lg:max-w-none lg:flex-row lg:gap-0">
              {visibleCards.map((card, i) => {
                const { bg, labelColor } = CARD_STYLES[(carouselStart + i) % CARD_STYLES.length]
                return (
                  <div
                    key={carouselStart + i}
                    className={cn(
                      "group aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-md transition-all duration-300 hover:shadow-2xl",
                      // Mobile: tighter stacking (4 % / 8 % vs original 10 % / 20 %)
                      i === 0 ? "relative z-30" : "absolute inset-x-0 top-0",
                      i === 1 && "z-20 translate-y-[4%] opacity-90",
                      i === 2 && "z-10 translate-y-[8%] opacity-70",
                      // Desktop: side-by-side, reset mobile offsets, heavy overlap
                      "lg:relative lg:inset-auto lg:w-[500px] lg:shrink-0 lg:translate-y-0 lg:scale-100 lg:opacity-100 lg:hover:-translate-y-4",
                      i === 0 ? "lg:z-30" : i === 1 ? "lg:z-20 lg:-ml-40" : "lg:z-10 lg:-ml-40",
                      bg
                    )}
                    onClick={() => setActiveVideo(carouselStart + i)}
                  >
                    {card.url && (
                      <div className="absolute inset-0">
                        {card.type === "image" ? (
                          <img
                            src={card.url}
                            alt=""
                            className="h-full w-full object-cover"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
                          />
                        ) : (
                          <video
                            key={card.url}
                            src={card.url}
                            className="pointer-events-none h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        )}
                      </div>
                    )}

                    {/* Vignette */}
                    <div className="pointer-events-none absolute inset-0 rounded-md bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

                    {/* Play button — videos only */}
                    {card.type !== "image" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex size-18 items-center justify-center rounded-full bg-black/20 ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <Play className="size-8 fill-white text-white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-5 left-6">
                      <p className={cn("type-monospaced text-xs tracking-widest uppercase", labelColor)}>
                        {card.label}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 size-2 rounded-full bg-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                )
              })}
            </div>

            {/* Right arrow — anchored to the right edge of the hero inner area */}
            <button
              onClick={() => setCarouselStart((s) => Math.min(maxStart, s + 1))}
              disabled={carouselStart >= maxStart}
              className="absolute right-0 top-1/2 z-40 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-950/10 transition hover:bg-neutral-950/20 disabled:pointer-events-none disabled:opacity-20"
              aria-label="Next"
            >
              <ChevronRight className="size-5" />
            </button>
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
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-xl"
          onClick={() => setActiveVideo(null)}
        />
        <div className="relative flex flex-col items-end">
          <button
            className="mb-3 flex size-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
          >
            <X className="size-5" />
          </button>
          <div
            className="overflow-hidden rounded-md bg-neutral-900"
            style={activeType !== "image" ? { height: "78vh", width: "calc(78vh * 9 / 16)" } : undefined}
          >
            {activeUrl && activeType === "image" ? (
              <img
                key={activeVideo}
                src={activeUrl}
                alt=""
                className="block max-h-[85vh] max-w-[90vw] object-contain"
              />
            ) : activeUrl ? (
              <video
                key={activeVideo}
                src={activeUrl}
                className="h-full w-full object-cover"
                autoPlay
                controls
                playsInline
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3">
                <div className="flex size-16 items-center justify-center rounded-full bg-white/10">
                  <Play className="size-7 fill-white/40 text-white/40" />
                </div>
                <p className="type-monospaced text-xs tracking-widest text-white/30 uppercase">
                  Video coming soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
