import { defineField, defineType } from "sanity"

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Form Section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "text", rows: 3 }),
    defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
    defineField({ name: "footerText", title: "Footer Note", type: "text", rows: 2 }),
  ],
})
