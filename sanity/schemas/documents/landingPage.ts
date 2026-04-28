import { defineField, defineType } from "sanity"

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    defineField({ name: "hero", title: "Hero Section", type: "heroSection" }),
    defineField({ name: "problems", title: "Problems Section", type: "problemsSection" }),
    defineField({ name: "diagnostic", title: "Diagnostic Section", type: "diagnosticSection" }),
    defineField({ name: "howItWorks", title: "How It Works", type: "howItWorksSection" }),
    defineField({ name: "services", title: "Services / What We Do", type: "servicesSection" }),
    defineField({ name: "stats", title: "Stats", type: "statsSection" }),
    defineField({ name: "roles", title: "Roles / Who It's For", type: "rolesSection" }),
    defineField({ name: "pricing", title: "Pricing", type: "pricingSection" }),
    defineField({ name: "faq", title: "FAQ", type: "faqSection" }),
    defineField({ name: "cta", title: "CTA Section", type: "ctaSection" }),
    defineField({ name: "contact", title: "Contact Form", type: "contactSection" }),
  ],
})
