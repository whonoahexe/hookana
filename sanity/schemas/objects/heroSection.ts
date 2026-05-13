import { defineArrayMember, defineField, defineType } from "sanity"

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "ctaText", title: "CTA Button Text", type: "string" }),
    defineField({ name: "watchReelText", title: "Watch Reel Button Text", type: "string" }),
    defineField({
      name: "videoCards",
      title: "Carousel Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "type",
              title: "Media Type",
              type: "string",
              options: {
                list: [
                  { title: "Video", value: "video" },
                  { title: "Image", value: "image" },
                ],
                layout: "radio",
              },
              initialValue: "video",
            }),
            defineField({
              name: "url",
              title: "Media URL",
              type: "url",
              description: "Direct video/image URL (Cloudinary, etc.) or Google Drive preview link",
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "type" },
          },
        }),
      ],
    }),
  ],
})
