import { defineArrayMember, defineField, defineType } from "sanity"

const statItem = defineArrayMember({
  type: "object",
  fields: [
    defineField({ name: "value", title: "Value", type: "string" }),
    defineField({ name: "label", title: "Label", type: "string" }),
  ],
  preview: { select: { title: "value", subtitle: "label" } },
})

export const statsSection = defineType({
  name: "statsSection",
  title: "Stats Section",
  type: "object",
  fields: [
    defineField({ name: "tabLabel", title: "Tab Label", type: "string" }),
    defineField({ name: "stats", title: "Stat Items", type: "array", of: [statItem] }),
    defineField({
      name: "marqueeItems",
      title: "Marquee Items",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
})
