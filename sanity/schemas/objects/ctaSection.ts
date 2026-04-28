import { defineField, defineType } from "sanity"

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "text", rows: 3, description: "Split by newlines in display" }),
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({ name: "ctaText", title: "CTA Button Text", type: "string" }),
  ],
})
