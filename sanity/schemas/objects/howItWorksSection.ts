import { defineArrayMember, defineField, defineType } from "sanity"

export const howItWorksSection = defineType({
  name: "howItWorksSection",
  title: "How It Works Section",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label (monospaced tag)", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "text", rows: 2 }),
    defineField({ name: "ctaText", title: "CTA Button Text", type: "string" }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 2 }),
            defineField({ name: "caption", title: "Caption (e.g. Day 0)", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "caption" } },
        }),
      ],
    }),
  ],
})
