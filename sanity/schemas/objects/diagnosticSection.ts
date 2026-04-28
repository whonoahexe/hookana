import { defineArrayMember, defineField, defineType } from "sanity"

const diagnosticOption = defineArrayMember({
  type: "object",
  name: "diagnosticOption",
  fields: [
    defineField({ name: "label", title: "Option Text", type: "string" }),
    defineField({ name: "value", title: "Score Value", type: "number", description: "Scoring weight (e.g. 5, 3.5, 2, 1)" }),
  ],
  preview: { select: { title: "label", subtitle: "value" } },
})

const diagnosticQuestion = defineArrayMember({
  type: "object",
  name: "diagnosticQuestion",
  fields: [
    defineField({ name: "id", title: "ID", type: "string", description: "Unique ID, e.g. q1, q2" }),
    defineField({ name: "area", title: "Area", type: "string", description: "e.g. Hook Quality" }),
    defineField({ name: "text", title: "Question Text", type: "text", rows: 2 }),
    defineField({ name: "subtext", title: "Subtext / Hint", type: "text", rows: 2 }),
    defineField({ name: "weight", title: "Weight", type: "number", description: "Scoring weight multiplier (e.g. 1.8)" }),
    defineField({ name: "options", title: "Options (4)", type: "array", of: [diagnosticOption] }),
  ],
  preview: { select: { title: "area", subtitle: "text" } },
})

const statItem = defineArrayMember({
  type: "object",
  name: "diagnosticStat",
  fields: [
    defineField({ name: "value", title: "Value", type: "string" }),
    defineField({ name: "label", title: "Label", type: "string" }),
  ],
  preview: { select: { title: "value", subtitle: "label" } },
})

export const diagnosticSection = defineType({
  name: "diagnosticSection",
  title: "Diagnostic Section",
  type: "object",
  fields: [
    defineField({ name: "headingLine1", title: "Heading Line 1", type: "string" }),
    defineField({ name: "headingLine2", title: "Heading Line 2", type: "string" }),
    defineField({ name: "descriptionText", title: "Description Text", type: "text", rows: 2 }),
    defineField({ name: "footerText", title: "Footer Text", type: "text", rows: 2 }),
    defineField({ name: "stats", title: "Stats", type: "array", of: [statItem] }),
    defineField({ name: "introSubcopy", title: "Intro Subcopy", type: "string", description: 'Appears under "Before We Begin"' }),
    defineField({
      name: "form",
      title: "Form Labels",
      type: "object",
      fields: [
        defineField({ name: "brandNameLabel", title: "Brand Name Label", type: "string" }),
        defineField({ name: "brandNameHelp", title: "Brand Name Help Text", type: "string" }),
        defineField({ name: "brandNamePlaceholder", title: "Brand Name Placeholder", type: "string" }),
        defineField({ name: "industryLabel", title: "Industry Label", type: "string" }),
        defineField({ name: "industryHelp", title: "Industry Help Text", type: "string" }),
        defineField({ name: "spendLabel", title: "Monthly Ad Spend Label", type: "string" }),
        defineField({ name: "spendHelp", title: "Monthly Ad Spend Help Text", type: "string" }),
        defineField({ name: "startButtonText", title: "Start Button Text", type: "string" }),
        defineField({
          name: "industryOptions",
          title: "Industry Options",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "spendOptions",
          title: "Monthly Spend Options",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
    defineField({ name: "questions", title: "Diagnostic Questions", type: "array", of: [diagnosticQuestion] }),
  ],
})
