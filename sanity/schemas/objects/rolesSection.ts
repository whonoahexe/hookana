import { defineArrayMember, defineField, defineType } from "sanity"

const roleItem = defineArrayMember({
  type: "object",
  name: "roleItem",
  fields: [
    defineField({ name: "tab", title: "Tab Label", type: "string" }),
    defineField({ name: "problemTitle", title: "Problem Title", type: "string" }),
    defineField({ name: "problemDescription", title: "Problem Description", type: "text", rows: 4 }),
    defineField({ name: "solutionTitle", title: "Solution Title", type: "string" }),
    defineField({
      name: "solutionTags",
      title: "Solution Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "solutionDescription", title: "Solution Description", type: "text", rows: 3 }),
    defineField({ name: "ctaText", title: "CTA Button Text", type: "string" }),
  ],
  preview: { select: { title: "tab" } },
})

export const rolesSection = defineType({
  name: "rolesSection",
  title: "Roles Section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "string" }),
    defineField({ name: "roles", title: "Roles", type: "array", of: [roleItem] }),
  ],
})
