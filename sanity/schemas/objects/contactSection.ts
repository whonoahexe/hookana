import { defineField, defineType } from "sanity"

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Form Section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "text", rows: 3 }),
    defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
    defineField({ name: "nameLabel", title: "Name Field Label", type: "string" }),
    defineField({ name: "nameHelp", title: "Name Field Help", type: "string" }),
    defineField({ name: "namePlaceholder", title: "Name Placeholder", type: "string" }),
    defineField({ name: "emailLabel", title: "Email Field Label", type: "string" }),
    defineField({ name: "emailHelp", title: "Email Field Help", type: "string" }),
    defineField({ name: "emailPlaceholder", title: "Email Placeholder", type: "string" }),
    defineField({ name: "websiteLabel", title: "Website Field Label", type: "string" }),
    defineField({ name: "websiteHelp", title: "Website Field Help", type: "string" }),
    defineField({ name: "websitePlaceholder", title: "Website Placeholder", type: "string" }),
    defineField({ name: "ctaText", title: "Submit Button Text", type: "string" }),
    defineField({ name: "successText", title: "Success Message", type: "string" }),
    defineField({ name: "footerText", title: "Footer Note", type: "text", rows: 2 }),
  ],
})
