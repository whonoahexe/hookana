import { Cta } from "@/components/landing/cta"
import { CtaForm } from "@/components/landing/cta-form"
import { DiagnosticSection } from "@/components/landing/diagnostic-section"
import { Faq } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { HookanaWay } from "@/components/landing/hookana-way"
import { Pricing } from "@/components/landing/pricing"
import { Problems } from "@/components/landing/problems"
import { Roles } from "@/components/landing/roles"
import { Stats } from "@/components/landing/stats"
import { Testimonial } from "@/components/landing/testimonial"
import { WhatWeDo } from "@/components/landing/what-we-do"

export default function Page() {
  return (
    <div>
      <Hero />
      <Problems />

      <div className="mt-50 w-full bg-blue-950">
        <DiagnosticSection />
        <HookanaWay />
      </div>

      <section className="w-full overflow-hidden bg-blue-50 pt-30 pb-15">
        <WhatWeDo />
        <Roles />
        <div className="px-6">
          <Stats />
          <Testimonial />
        </div>
      </section>

      <section className="bg-blue-950">
        <Pricing />
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
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden w-160 max-w-none -translate-x-200 -translate-y-40 md:block"
          />
          <img
            src="/svg/girl.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 hidden w-108 max-w-none translate-x-78 -translate-y-44 md:block"
          />
          <div className="relative z-10">
            <CtaForm />
          </div>
        </div>
        <Footer />
      </section>
    </div>
  )
}
