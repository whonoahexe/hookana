import { defineArrayMember, defineField, defineType } from "sanity"

export const navbarSection = defineType({
  name: "navbarSection",
  title: "Navbar",
  type: "object",
  fields: [
    defineField({ name: "logoText", title: "Logo Text", type: "string" }),
    defineField({ name: "ctaText", title: "CTA Button Text", type: "string" }),
    defineField({
      name: "links",
      title: "Navigation Links",
      type: "array",
      description: "All nav links in order. Grouped 3-2-2 on desktop.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Href", type: "string", description: "e.g. / or #pricing" }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
  ],
})
