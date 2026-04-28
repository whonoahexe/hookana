import { defineArrayMember, defineField, defineType } from "sanity"

const receiptItem = defineArrayMember({
  type: "object",
  name: "receiptItem",
  fields: [
    defineField({ name: "qty", title: "Qty / Value", type: "string" }),
    defineField({ name: "desc", title: "Description", type: "string" }),
  ],
  preview: { select: { title: "desc", subtitle: "qty" } },
})

const problemTab = defineArrayMember({
  type: "object",
  name: "problemTab",
  fields: [
    defineField({ name: "value", title: "ID (e.g. bottleneck)", type: "string" }),
    defineField({ name: "label", title: "Tab Label", type: "string" }),
    defineField({ name: "inactiveWidth", title: "Tab Inactive Width (CSS rem)", type: "string", description: "e.g. 10.5rem — controls desktop tab width when inactive" }),
    defineField({ name: "headlineLine1", title: "Headline Line 1", type: "string" }),
    defineField({ name: "headlineLine2", title: "Headline Line 2", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "string" }),
    defineField({ name: "ask", title: "Ask Prompt", type: "string", description: 'e.g. "Sound familiar?"' }),
    defineField({ name: "body", title: "Body Text", type: "text", rows: 2 }),
    defineField({
      name: "receipt",
      title: "Receipt",
      type: "object",
      fields: [
        defineField({ name: "num", title: "Receipt Number", type: "string" }),
        defineField({ name: "problem", title: "Problem Label", type: "string" }),
        defineField({ name: "total", title: "Total", type: "string" }),
        defineField({ name: "items", title: "Line Items", type: "array", of: [receiptItem] }),
      ],
    }),
  ],
  preview: { select: { title: "label" } },
})

export const problemsSection = defineType({
  name: "problemsSection",
  title: "Problems Section",
  type: "object",
  fields: [
    defineField({ name: "tabs", title: "Problem Tabs", type: "array", of: [problemTab] }),
  ],
})
