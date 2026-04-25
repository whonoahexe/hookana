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

      <section className="bg-blue-50 px-6 py-20 md:py-30">
        <WhatWeDo />
        <Roles />
        <Stats />
        <Testimonial />
      </section>

      <section className="bg-blue-950">
        <Pricing />
        <Faq />
      </section>

      <section className="bg-blue-50">
        <Cta />
      </section>

      <section className="bg-secondary">
        <CtaForm />
        <Footer />
      </section>
    </div>
  )
}
