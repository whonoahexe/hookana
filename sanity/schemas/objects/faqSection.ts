import { defineArrayMember, defineField, defineType } from "sanity"

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    defineField({ name: "heading1", title: "Heading Line 1", type: "string" }),
    defineField({ name: "heading2", title: "Heading Line 2", type: "string" }),
    defineField({
      name: "items",
      title: "FAQ Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
  ],
})
