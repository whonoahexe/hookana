import { Cta } from "@/components/landing/cta"
import { CtaForm } from "@/components/landing/cta-form"
import { DiagnosticSection } from "@/components/landing/diagnostic-section"
import { Faq } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { HeroCarousel } from "@/components/landing/hero-carousel"
import { HookanaWay } from "@/components/landing/hookana-way"
import { Pricing } from "@/components/landing/pricing"
import { Problems } from "@/components/landing/problems"
import { Roles } from "@/components/landing/roles"
import { StatsMarquee } from "@/components/landing/stats-marquee"
import { Stats } from "@/components/landing/stats"
import { Testimonial } from "@/components/landing/testimonial"
import { WhatWeDo } from "@/components/landing/what-we-do"

export default function Page() {
  return (
    <div>
      <Hero />
      <HeroCarousel />
      <Problems />

      <div className="mt-50 w-full bg-blue-950">
        <div id="free-check" className="scroll-mt-44">
          <DiagnosticSection />
        </div>
        <div id="how-it-works" className="scroll-mt-24">
          <HookanaWay />
        </div>
      </div>

      <StatsMarquee />

      <section className="w-full bg-blue-50 pt-30 pb-15">
        <div id="services" className="scroll-mt-24">
          <WhatWeDo />
        </div>
        <div id="who-its-for" className="scroll-mt-24">
          <Roles />
        </div>
        <div className="px-6">
          <Stats />
          <Testimonial />
        </div>
      </section>

      <section className="bg-blue-950">
        <div id="pricing" className="scroll-mt-24">
          <Pricing />
        </div>
        <Faq />
      </section>

      <section className="bg-blue-50">
        <Cta />
      </section>

      <section className="bg-secondary">
        <div className="relative">
          <img
            src="/svg/guy.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden w-160 max-w-none -translate-x-200 -translate-y-40 2xl:block"
          />
          <img
            src="/svg/girl.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden w-108 max-w-none translate-x-78 -translate-y-44 2xl:block"
          />
          <div id="contact" className="relative z-10 scroll-mt-24">
            <CtaForm />
          </div>

          {/* Mobile/Tablet Characters Under Form */}
          <div className="mt-12 flex items-end justify-center gap-12 px-5 pb-20 2xl:hidden">
            <img
              src="/svg/guy.svg"
              alt=""
              aria-hidden="true"
              className="hidden w-160 scale-50 md:block md:scale-75"
            />
            <img
              src="/svg/girl.svg"
              alt=""
              aria-hidden="true"
              className="hidden w-108 scale-50 md:block md:scale-75"
            />
          </div>
        </div>
        <Footer />
      </section>
    </div>
  )
}
