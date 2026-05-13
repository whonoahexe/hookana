import { defineArrayMember, defineField, defineType } from "sanity"

export const logoTickerSection = defineType({
  name: "logoTickerSection",
  title: "Logo Ticker",
  type: "object",
  fields: [
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      description: "Brand logos shown in the rotating ticker below the hero. Add or remove logos here.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "alt", title: "Brand Name / Alt Text", type: "string" }),
            defineField({ name: "logo", title: "Logo Image", type: "image" }),
          ],
          preview: {
            select: { title: "alt", media: "logo" },
          },
        }),
      ],
    }),
  ],
})
