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
    <div className="flex h-full w-full items-end justify-between">
      <div className="flex h-full w-full flex-col justify-between">
        <div>
          <h3 className="type-heading-1 text-lime-950">{tab.title}</h3>
          <p className="type-heading-4 mt-3 max-w-170 text-accent-foreground">
            {tab.description}
          </p>
        </div>

        <ul className="max-w-215 overflow-hidden rounded-md">
          {tab.deliverables.map((item, index) => (
            <li
              key={item}
              className={`min-h-15 px-11 py-4 ${
                index % 2 === 0
                  ? "bg-linear-to-r from-background to-lime-500"
                  : "bg-linear-to-r from-lime-500 to-background"
              }`}
            >
              <p className="type-monospaced text-right text-accent-foreground">
                • {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex min-w-178 flex-col gap-6">
        {tab.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-3 border-l-20 border-pink-500 bg-background px-8 py-7"
          >
            <p className="font-mono text-sm leading-3 text-primary uppercase">
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
    <div className="mx-auto w-full">
      <div className="flex flex-col gap-4 px-30">
        <p className="inline-flex w-fit items-center justify-center rounded-lg bg-pink-500 p-3 font-mono text-base leading-6 text-primary-foreground">
          What We Do?
        </p>
        <h2 className="font-sans text-[42px] leading-9 font-semibold tracking-[-1.5px] text-foreground md:text-[64px] md:leading-12">
          Full-stack creative production.
        </h2>
      </div>

      <Tabs defaultValue="core-service" className="mt-2">
        <div className="flex justify-end pr-17">
          <TabsList className="ml-8 h-auto gap-0 rounded-none bg-transparent p-0">
            {WHAT_WE_DO_TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="type-heading-4 relative z-0 h-15 w-60! rounded-none rounded-t-md border-none bg-lime-50 text-accent-foreground [clip-path:polygon(0_0,calc(100%-2.5rem)_0,100%_100%,0_100%)] not-first:-ml-8 data-[state=active]:z-20 data-[state=active]:-translate-y-0.5 data-[state=active]:bg-lime-200"
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
            className="z-40 h-200 w-full flex-none rounded-md rounded-b-2xl bg-lime-200 pt-30 pr-20 pb-20 pl-30"
          >
            <WhatWeDoPanel tab={tab} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
