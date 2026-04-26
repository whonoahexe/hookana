import type { DiagnosticQuestion } from "./diagnostic-types"

export const INDUSTRY_OPTIONS = [
  "Beauty & Skincare",
  "Fashion & Apparel",
  "Health & Wellness",
  "Food & Beverage",
  "Home & Living",
  "Tech & Gadgets",
  "Fitness & Sports",
  "Pet Products",
  "Other D2C",
]

export const MONTHLY_SPEND_OPTIONS = [
  "Under $5K",
  "$5K - $25K",
  "$25K - $100K",
  "$100K - $500K",
  "$500K+",
]

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "q1",
    area: "Hook Quality",
    text: "When you look at your last 10 ads, how many had a genuinely different opening hook?",
    subtext:
      "Not just different copy on the same template. Different visual pattern, different emotional trigger, different scroll-stop mechanism.",
    weight: 1.8,
    options: [
      {
        label:
          "8-10 had distinctly different hooks with different scroll-stop mechanics",
        value: 5,
      },
      {
        label:
          "4-7 had different hooks, the rest were variations of the same pattern",
        value: 3,
      },
      {
        label:
          "2-3 were genuinely different, the rest followed the same formula",
        value: 2,
      },
      {
        label: "Most used the same opening style with different text overlays",
        value: 1,
      },
    ],
  },
  {
    id: "q2",
    area: "Creative Volume",
    text: "How many net-new creative concepts are you launching per week?",
    subtext:
      "Not resizes. Not copy swaps. Genuinely new concepts with different angles, formats, or visual approaches.",
    weight: 1.7,
    options: [
      {
        label: "10+ new concepts per week, across multiple formats",
        value: 5,
      },
      {
        label: "5-9 new concepts per week, mostly in 1-2 formats",
        value: 3.5,
      },
      {
        label: "2-4 new concepts per week, when the team has bandwidth",
        value: 2,
      },
      {
        label: "Less than 2 per week, or we batch monthly",
        value: 1,
      },
    ],
  },
  {
    id: "q3",
    area: "Format Diversity",
    text: "How many different ad formats are you actively testing right now?",
    subtext:
      "Static, carousel, video (talking head), video (product demo), UGC-style, motion graphics, before/after, listicle.",
    weight: 1.5,
    options: [
      {
        label: "5+ formats actively in rotation, adapted per platform",
        value: 5,
      },
      {
        label: "3-4 formats, leaning heavily on 1-2",
        value: 3,
      },
      {
        label: "2 formats max",
        value: 2,
      },
      {
        label: "Primarily one format across all campaigns",
        value: 1,
      },
    ],
  },
  {
    id: "q4",
    area: "Testing Velocity",
    text: "When a creative starts winning, how quickly do you produce variations before performance decays?",
    subtext:
      "Creative fatigue is real. Winning ads have a shelf life. Can your pipeline spin variations fast enough?",
    weight: 1.8,
    options: [
      {
        label: "Within 24-48 hours we have 3-5 variations live",
        value: 5,
      },
      {
        label: "Within a week, we get 2-3 variations out",
        value: 3.5,
      },
      {
        label: "Takes 2-3 weeks, performance usually drops first",
        value: 2,
      },
      {
        label: "We rarely iterate on winners",
        value: 1,
      },
    ],
  },
  {
    id: "q5",
    area: "Creative Strategy",
    text: "Before producing a new ad, is there a documented brief with a specific angle and hypothesis?",
    subtext:
      "Not a vague 'make it look good.' A specific angle, hook type, CTA strategy, and measurable hypothesis.",
    weight: 1.6,
    options: [
      {
        label:
          "Every creative ships with angle, hook, hypothesis, and success metric",
        value: 5,
      },
      {
        label: "Most have a brief, but more directional than specific",
        value: 3,
      },
      {
        label: "Briefs exist sometimes, production often starts without one",
        value: 2,
      },
      {
        label: "We rarely brief. Designers create based on intuition",
        value: 1,
      },
    ],
  },
  {
    id: "q6",
    area: "Performance Analysis",
    text: "When an ad underperforms, can you identify exactly which creative element failed?",
    subtext:
      "Hook? Pacing? CTA? Visual style? If you can only say it did not work, your feedback loop is broken.",
    weight: 1.6,
    options: [
      {
        label: "We break down by hook, body, CTA, and visual separately",
        value: 5,
      },
      {
        label: "Can usually identify the weak point informally",
        value: 3.5,
      },
      {
        label: "Look at CTR/CPA but rarely diagnose specific elements",
        value: 2,
      },
      {
        label: "Just pause underperformers and move on",
        value: 1,
      },
    ],
  },
  {
    id: "q8",
    area: "Production Capacity",
    text: "We need 20 new creatives by Friday. Could your pipeline deliver?",
    subtext:
      "The stress test. If production cannot handle surge demand, creative is your ceiling.",
    weight: 1.7,
    options: [
      {
        label: "Yes, comfortably",
        value: 5,
      },
      {
        label: "Could do it but quality would suffer",
        value: 3,
      },
      {
        label: "Could deliver 5-10 at best",
        value: 2,
      },
      {
        label: "No chance. 2-3 weeks minimum",
        value: 1,
      },
    ],
  },
]

