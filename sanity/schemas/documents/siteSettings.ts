import { defineField, defineType } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "navbar", title: "Navbar", type: "navbarSection" }),
    defineField({ name: "footer", title: "Footer", type: "footerSection" }),
  ],
})
