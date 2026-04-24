import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type WhatWeDoTab = {
  value: string
  label: string
  title: string
  description: string
  deliverables: string[]
  stats: { label: string; text: string }[]
}

const WHAT_WE_DO_TABS: WhatWeDoTab[] = [
  {
    value: "core-service",
    label: "Core Service",
    title: "Ad Creative Production",
    description:
      "Static ads, video ads, carousels, motion graphics. Optimized for Meta, TikTok, Snapchat, and YouTube.",
    deliverables: [
      "Hook variations and A/B test sets",
      "Static ad designs (feed, story, square, landscape)",
      "Short-form video cuts for Meta, TikTok, Snapchat",
      "Carousel ad sequences",
      "Motion graphics and animated assets",
      "Platform-specific resizes and adaptations",
    ],
    stats: [
      {
        label: "TURNAROUND",
        text: "Standard: 48 hours. Rush (same-day) available on Growth and Enterprise plans.",
      },
      {
        label: "REVISIONS",
        text: "Unlimited. First-draft approval rate above 85%.",
      },
      {
        label: "BEST FOR",
        text: "Performance marketers running paid acquisition who need consistent creative volume.",
      },
    ],
  },
  {
    value: "video-production",
    label: "Video Production",
    title: "Video-First Creative Systems",
    description:
      "Performance-led short-form and paid social video built to test hooks, pacing, and offers quickly.",
    deliverables: [
      "UGC-style edits and creator content assembly",
      "Thumb-stop hooks and first-3-second variants",
      "Platform-native subtitles and motion captions",
      "Multi-ratio exports (9:16, 1:1, 16:9)",
      "Performance cutdowns for retargeting stages",
      "Weekly refresh batches to avoid fatigue",
    ],
    stats: [
      {
        label: "TURNAROUND",
        text: "First round in 48 hours. Priority queues available.",
      },
      {
        label: "REVISIONS",
        text: "Unlimited iteration cycles during active testing windows.",
      },
      {
        label: "BEST FOR",
        text: "Teams scaling spend on Meta and TikTok with heavy video dependence.",
      },
    ],
  },
  {
    value: "strategy-layer",
    label: "Strategy Layer",
    title: "Creative Strategy Layer",
    description:
      "We turn performance inputs into clear creative direction so your team ships the right tests faster.",
    deliverables: [
      "Offer and angle mapping by funnel stage",
      "Message hierarchy and hook framework planning",
      "Competitor and category creative signal scans",
      "Testing roadmaps by objective and budget",
      "Creative brief templates for rapid deployment",
      "Weekly insight summaries from live results",
    ],
    stats: [
      {
        label: "TURNAROUND",
        text: "Strategic plans delivered in 2-3 business days.",
      },
      {
        label: "REVISIONS",
        text: "Rolling updates as new platform data comes in.",
      },
      {
        label: "BEST FOR",
        text: "Brands needing stronger creative direction before scaling production.",
      },
    ],
  },
  {
    value: "ai-augmented",
    label: "AI-Augmented",
    title: "AI-Augmented Workflow",
    description:
      "Automation accelerates variant generation and iteration while human creatives keep quality and brand fit high.",
    deliverables: [
      "Rapid concept expansion from winning themes",
      "Script and hook ideation at high volume",
      "Batch variation prompts for copy and visuals",
      "Asset tagging and retrieval for fast reuse",
      "Performance signal clustering for next tests",
      "Human QA checkpoints before launch",
    ],
    stats: [
      {
        label: "TURNAROUND",
        text: "Concept-to-ready cycles compressed to same-day for many requests.",
      },
      {
        label: "REVISIONS",
        text: "Near-real-time refinements powered by guided automation.",
      },
      {
        label: "BEST FOR",
        text: "Teams that need speed and breadth without sacrificing creative quality.",
      },
    ],
  },
]

function WhatWeDoPanel({ tab }: { tab: WhatWeDoTab }) {
  return (
    <div className="grid h-full gap-12 lg:grid-cols-[860px_448px] lg:gap-55.75">
      <div>
        <h3 className="type-heading-1 text-lime-950">{tab.title}</h3>
        <p className="type-heading-4 mt-3 max-w-170 text-accent-foreground">
          {tab.description}
        </p>

        <ul className="mt-14 overflow-hidden rounded-lg">
          {tab.deliverables.map((item, index) => (
            <li
              key={item}
              className={`min-h-15 px-5 py-4 ${
                index % 2 === 0
                  ? "bg-linear-to-r from-background to-lime-400"
                  : "bg-linear-to-r from-lime-400 to-background"
              }`}
            >
              <p className="type-monospaced text-foreground">• {item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-9">
        {tab.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-3">
            <p className="font-mono text-sm leading-3 text-pink-500 uppercase">
              {stat.label}
            </p>
            <p className="type-heading-3 text-accent-foreground">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WhatWeDo() {
  return (
    <div className="mx-auto w-full max-w-468">
      <div className="flex flex-col gap-5 px-30">
        <p className="inline-flex w-fit items-center justify-center rounded-lg bg-pink-500 px-3 py-3 font-mono text-base leading-6 text-primary-foreground">
          What We Do?
        </p>
        <h2 className="font-sans text-[42px] leading-9 font-semibold tracking-[-1.5px] text-foreground md:text-[64px] md:leading-12">
          Full-stack creative production.
        </h2>
      </div>

      <Tabs defaultValue="core-service" className="mt-10">
        <div className="flex justify-end pr-17">
          <TabsList className="h-auto flex-wrap justify-end gap-0 rounded-none bg-transparent p-0">
            {WHAT_WE_DO_TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="type-heading-4 h-15 rounded-t-lg rounded-b-none border border-neutral-200 bg-neutral-100 px-8 text-left data-[state=active]:border-lime-200 data-[state=active]:bg-lime-200 data-[state=active]:text-accent-foreground"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {WHAT_WE_DO_TABS.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="mt-0 h-200 rounded-lg rounded-tr-none bg-lime-200 px-30 py-30"
          >
            <WhatWeDoPanel tab={tab} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
