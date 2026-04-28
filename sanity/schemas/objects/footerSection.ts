import { defineArrayMember, defineField, defineType } from "sanity"

export const footerSection = defineType({
  name: "footerSection",
  title: "Footer",
  type: "object",
  fields: [
    defineField({ name: "tagline", title: "Tagline", type: "text", rows: 2 }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL or mailto", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
    defineField({ name: "copyright", title: "Copyright", type: "string" }),
  ],
})
