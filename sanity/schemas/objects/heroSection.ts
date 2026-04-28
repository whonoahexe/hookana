import { defineArrayMember, defineField, defineType } from "sanity"

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "ctaText", title: "CTA Button Text", type: "string" }),
    defineField({ name: "watchReelText", title: "Watch Reel Button Text", type: "string" }),
    defineField({
      name: "videoCards",
      title: "Video Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [defineField({ name: "label", title: "Label", type: "string" })],
          preview: { select: { title: "label" } },
        }),
      ],
    }),
  ],
})
