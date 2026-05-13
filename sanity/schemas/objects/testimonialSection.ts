import { defineField, defineType } from "sanity"

export const testimonialSection = defineType({
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "object",
  fields: [
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "Direct video URL (Cloudinary, etc.) or Google Drive preview link",
    }),
  ],
})
