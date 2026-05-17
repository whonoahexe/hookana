"use client"

import { useEffect, useRef, useState } from "react"
import { cldVideo, cldPoster } from "@/lib/cloudinary"
import type { TestimonialContent } from "@/sanity/lib/types"

const FALLBACK_URL = "https://res.cloudinary.com/ddbynpktj/video/upload/v1778666335/Testimonials_Deeanimators_qkytj7.mp4"

export function Testimonial({ content }: { content: TestimonialContent | null }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  const url = content?.videoUrl || FALLBACK_URL

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="mt-8 2xl:mt-15 aspect-square sm:aspect-video w-full overflow-hidden rounded-md bg-secondary p-6"
    >
      {visible && (
        <video
          src={cldVideo(url, 1080)}
          poster={cldPoster(url, 1080)}
          className="h-full w-full rounded-sm object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
        />
      )}
    </section>
  )
}
