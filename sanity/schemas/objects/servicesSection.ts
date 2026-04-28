import { defineArrayMember, defineField, defineType } from "sanity"

const serviceTab = defineArrayMember({
  type: "object",
  name: "serviceTab",
  fields: [
    defineField({ name: "value", title: "ID (slug)", type: "string" }),
    defineField({ name: "label", title: "Tab Label", type: "string" }),
    defineField({ name: "title", title: "Panel Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "label" } },
        }),
      ],
    }),
  ],
  preview: { select: { title: "label" } },
})

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label (tag)", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "tabs", title: "Service Tabs", type: "array", of: [serviceTab] }),
  ],
})
