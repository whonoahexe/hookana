import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, DollarSign, Globe } from "lucide-react"

type WhatWeDoTab = {
  value: string
  label: string
  title: string
  description: string
  deliverables: string[]
  stats: { label: string; text: string }[]
}

type PlanTier = {
  id: "starter" | "growth" | "enterprise"
  name: string
  description: string
  features: { label: string; value: string }[]
}

type FaqItem = {
  value: string
  question: string
  answer: string
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

const SOLUTION_TAGS = [
  "48HR TURNAROUND",
  "UNLIMITED REVISIONS",
  "AD-PLATFORM NATIVE FORMATS",
  "CONSISTENT QUALITY AT SCALE",
]

const STATS_HIGHLIGHTS = [
  { value: "80%", label: "Lower cost vs agencies" },
  { value: "3x", label: "Faster creative output" },
  { value: "48hr", label: "Average turnaround" },
  { value: "10K+", label: "Creatives shipped" },
]

const PLAN_TIERS: PlanTier[] = [
  {
    id: "starter",
    name: "Starter Sprint",
    description: "For brands testing creative production outsourcing.",
    features: [
      { label: "Creatives / month", value: "30" },
      { label: "Turnaround time", value: "48Hr" },
      { label: "Brand", value: "1" },
      { label: "Support", value: "Slack / Email" },
      { label: "Revisions", value: "Unlimited" },
    ],
  },
  {
    id: "growth",
    name: "Growth Engine",
    description: "For teams scaling creative output aggressively.",
    features: [
      { label: "Creatives / month", value: "50+" },
      { label: "Turnaround time", value: "24-48Hr" },
      { label: "Brand", value: "Up to 3" },
      { label: "Support", value: "Priority queue" },
      { label: "Revisions", value: "Unlimited" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For agencies and large D2C brands with high-volume needs.",
    features: [
      { label: "Creatives / month", value: "Unlimited" },
      { label: "Turnaround time", value: "Same-day rush" },
      { label: "Brand", value: "Unlimited" },
      { label: "Support", value: "Dedicated team" },
      { label: "Revisions", value: "Unlimited" },
    ],
  },
]

const FAQ_ITEMS: FaqItem[] = [
  {
    value: "delivery-speed",
    question: "How fast can you deliver?",
    answer:
      "Starter delivers first rounds in 48 hours. Growth gets priority queues with faster turnarounds, and Enterprise includes same-day rush support.",
  },
  {
    value: "creative-types",
    question: "What types of creatives do you produce?",
    answer:
      "Static ads, carousels, motion graphics, and short-form video built for Meta, TikTok, Snapchat, and YouTube.",
  },
  {
    value: "revisions",
    question: "Do you offer revisions?",
    answer:
      "Yes. Every plan includes unlimited revisions while your campaigns and testing windows are active.",
  },
  {
    value: "concept-to-variation",
    question: 'What does "concept to variation" mean?',
    answer:
      "We turn one core idea into multiple hooks, angles, and format variants so your team can test faster and scale winners confidently.",
  },
  {
    value: "freelancer-vs-agency",
    question: "How is Hookana different from a freelancer or agency?",
    answer:
      "Hookana runs as a production system, not ad-hoc capacity. You get predictable throughput, platform-native output, and ongoing iteration built for performance teams.",
  },
]

export default function Page() {
  return (
    <div>
      {/* Hero section */}
      <div className="px-5">
        <div className="mt-20 flex h-200 w-full rounded-md bg-pink-50 py-30">
          <div className="flex max-w-200 flex-col justify-between pl-30">
            <div className="flex max-w-115 flex-col gap-3">
              <p className="pr-8 font-sans text-[64px] leading-16 font-black text-neutral-950 uppercase">
                Creativity at Volume.
              </p>
              <p className="type-heading-2 text-primary uppercase">
                Without the compromise.
              </p>
            </div>

            <div>
              <p className="type-paragraph-large text-accent-foreground">
                D2C brands and performance teams need fresh creatives, fast,
                on-brand, and at scale. Hookana is the creative production
                engine that keeps your pipeline full without blowing your budget
                or burning out your team.
              </p>

              <Button
                size="lg"
                className="mt-4 rounded-md"
                variant="destructive"
              >
                GET 2 FREE CONCEPTS
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Problems section */}
      <div className="px-5">
        <Tabs defaultValue="bottleneck" className="my-20">
          <TabsList>
            <TabsTrigger value="bottleneck">Bottleneck</TabsTrigger>
            <TabsTrigger value="lag">Lag</TabsTrigger>
            <TabsTrigger value="burnout">Burnout</TabsTrigger>
            <TabsTrigger value="risk">Risk</TabsTrigger>
          </TabsList>
          <TabsContent
            value="bottleneck"
            className="flex h-200 w-full flex-none justify-between rounded-md bg-lime-200"
          >
            <div className="flex h-full flex-col justify-between p-30">
              <div className="flex max-w-115 flex-col gap-6">
                <p className="type-heading-1 text-lime-950">
                  Scaling ad spend is easy. Scaling creatives?
                </p>
                <p className="type-heading-3 text-accent-foreground">
                  Not so much.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="type-monospaced text-primary">Sound familiar?</p>
                <p className="type-heading-4 max-w-170 text-accent-foreground">
                  Your ad platforms move faster than your team can produce.
                  Winning ads stale out before you can replace them.
                </p>
              </div>
            </div>
            <div className="flex h-full w-205 items-center justify-center rounded-md bg-card text-card-foreground">
              <p className="type-monospaced text-foreground">
                (replace with actual video embed)
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Diagnostic form */}
      <div className="w-full bg-blue-950">
        <div className="flex w-full justify-center">
          <section className="relative my-20 max-w-180 bg-neutral-100 px-8 py-18 md:px-19 lg:px-30">
            {/* Corner fold decoration (top-right) */}
            <div className="absolute top-0 -right-px h-15 w-16 overflow-hidden bg-[#0e0e31]">
              <div
                className="absolute inset-0 bg-pink-300"
                style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
              />
            </div>

            <div className="mx-auto max-w-138">
              <div className="flex items-start justify-between gap-6">
                <h2 className="w-63.75 font-sans text-[64px] leading-12 font-semibold tracking-[-1.5px] text-card-foreground uppercase">
                  <span className="block">Before</span>
                  <span className="block">We</span>
                  <span className="block">Begin</span>
                </h2>
                <p className="type-heading-3 max-w-79.5 text-foreground">
                  Tell us about your brand so we can calibrate the diagnostic.
                </p>
              </div>

              <div className="mt-20 border-t border-dotted border-neutral-500" />

              <form className="mt-24 flex flex-col gap-13">
                <FormField
                  label="Brand name *"
                  help="We use this to personalize your results. Your score means more when it's named."
                >
                  <div className="flex h-9 w-80 items-center gap-2 rounded-lg border border-neutral-950 bg-popover px-3 shadow-xs">
                    <Globe className="size-4 shrink-0 text-primary-foreground/70" />
                    <Input
                      className="h-auto flex-1 rounded-none border-none bg-transparent px-0 py-0 text-sm text-primary-foreground shadow-none placeholder:text-primary-foreground/60 focus-visible:border-none focus-visible:ring-0"
                      placeholder="e.g Glowup Skincare"
                    />
                  </div>
                </FormField>

                <FormField
                  label="Industry *"
                  help="Creative benchmarks differ by vertical. A skincare brand and a fitness brand have very different hook standards."
                >
                  <Select>
                    <SelectTrigger className="h-9 w-80 rounded-lg border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="beauty">
                          Beauty &amp; Skincare
                        </SelectItem>
                        <SelectItem value="fitness">
                          Fitness &amp; Health
                        </SelectItem>
                        <SelectItem value="fashion">
                          Fashion &amp; Apparel
                        </SelectItem>
                        <SelectItem value="food">
                          Food &amp; Beverage
                        </SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormField>

                <FormField
                  label="Monthly ad spend *"
                  help={`Helps us calibrate expectations. What counts as "low volume" at $5K looks very different at $500K.`}
                >
                  <Select>
                    <SelectTrigger className="h-9 w-80 rounded-lg border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
                      <DollarSign className="size-4 shrink-0" />
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="under5k">Under $5K/mo</SelectItem>
                        <SelectItem value="5k-25k">$5K - $25K/mo</SelectItem>
                        <SelectItem value="25k-100k">
                          $25K - $100K/mo
                        </SelectItem>
                        <SelectItem value="100k-500k">
                          $100K - $500K/mo
                        </SelectItem>
                        <SelectItem value="over500k">$500K+/mo</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormField>
              </form>

              <div className="mt-20 border-t border-dotted border-neutral-500" />

              <p className="mt-5 max-w-137.75 font-mono text-xs leading-3.5 text-blue-500">
                Built from patterns across 10,000+ ad creatives. Identifies
                structural gaps that cause creative fatigue, low CTR, and wasted
                ad spend.
              </p>
            </div>

            {/* Bottom zigzag decoration */}
            <div className="absolute right-0 -bottom-7 left-0 h-7">
              <svg
                width="100%"
                height="28"
                viewBox="0 0 696 28"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,0 L25,28 L50,0 L75,28 L100,0 L125,28 L150,0 L175,28 L200,0 L225,28 L250,0 L275,28 L300,0 L325,28 L350,0 L375,28 L400,0 L425,28 L450,0 L475,28 L500,0 L525,28 L550,0 L575,28 L600,0 L625,28 L650,0 L675,28 L696,0 Z"
                  fill="#f5f5f5"
                />
              </svg>
            </div>
          </section>
        </div>

        {/* The Hookana Way */}
        <section className="px-5 pb-20 md:pb-28">
          <div className="mx-auto flex max-w-237.5 flex-col items-center gap-6 text-center">
            <p className="rounded-lg bg-pink-500 px-3 py-3 font-mono text-base leading-6 text-primary-foreground">
              The Hookana Way
            </p>

            <h2 className="font-sans text-[42px] leading-9 font-semibold tracking-[-1.5px] text-primary-foreground md:text-[64px] md:leading-12">
              Closer than an agency.
              <br />
              Faster than a team.
            </h2>

            <Button
              size="lg"
              variant="outline"
              className="h-10 min-w-50 rounded-lg border-neutral-200 bg-transparent px-6 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Get 2 Free Concepts
              <ArrowUpRight className="size-4" />
            </Button>
          </div>

          <div className="mx-auto mt-24 grid max-w-237.5 gap-4 md:grid-cols-3">
            <HookanaStepCard
              className="md:-rotate-2"
              title="BRIEF IT."
              body="Drop your brief via Slack, Notion, email. We adapt to your tools."
              caption="Day 0"
            />
            <HookanaStepCard
              className="md:rotate-1"
              title="WE BUILD IT."
              body="Our creative team produces ad-ready assets in 48 hours or less."
              caption="24 - 48 hours"
            />
            <HookanaStepCard
              className="md:-rotate-2"
              title="YOU TEST IT."
              body="Launch, measure, iterate. We keep the creative pipeline flowing."
              caption="Ongoing"
            />
          </div>
        </section>
      </div>

      <section className="bg-neutral-100 px-6 py-20 md:py-24">
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

        {/* Roles section */}
        <section className="mt-40 flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <p className="font-sans text-[128px] leading-12 font-black text-foreground uppercase">
              We get it.
            </p>
            <p className="type-heading-2 text-foreground">
              We&apos;ve been in your shoes.
            </p>
          </div>

          <div className="mt-20 w-full px-5">
            <div className="mx-auto grid w-full max-w-362.5 gap-6 xl:grid-cols-2">
              <ReceiptCard background="problem" edgeStroke="#8ec5ff">
                <div className="flex h-full flex-col gap-8">
                  <h2 className="max-w-158.25 font-sans text-[38px] leading-9.5 font-semibold tracking-[-1.5px] text-[#0705e2] md:text-[48px] md:leading-12">
                    You know creative is the lever. You can&apos;t pull it fast
                    enough.
                  </h2>
                  <p className="mt-auto max-w-152.5 font-serif text-[18px] leading-6.75 font-semibold text-[#0e0e31]">
                    &quot;I know the lever is creative, but I can&apos;t pull it
                    fast enough.&quot; Your ad accounts need fresh assets daily,
                    not weekly. Your ROAS depends on constantly testing new
                    hooks, formats, and angles. But your creative pipeline
                    can&apos;t keep up with ad platform velocity.
                  </p>
                </div>
              </ReceiptCard>

              <ReceiptCard background="solution" edgeStroke="#8ec5ff">
                <div className="flex h-full flex-col gap-8">
                  <h2 className="max-w-158.25 font-sans text-[38px] leading-9.5 font-semibold tracking-[-1.5px] text-[#0e0e31] md:text-[48px] md:leading-12">
                    Creatives that match your ad platform&apos;s speed.
                  </h2>

                  <div className="mt-auto">
                    <div className="flex max-w-152.5 flex-wrap gap-2">
                      {SOLUTION_TAGS.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-linear-to-r from-[rgba(191,222,255,0.7)] to-[#1d1cff] px-3 py-0 font-mono text-[16px] leading-6 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-8 max-w-152.5 font-serif text-[18px] leading-6.75 font-semibold text-[#090909]">
                      Hookana delivers creatives at the speed of your ad
                      platform. Constant testing, zero bottlenecks, predictable
                      output.
                    </p>

                    <Button
                      size="lg"
                      className="mt-8 h-10 rounded-lg bg-[#1d1cff] px-6 py-2.5 text-[14px] leading-5 font-medium text-white hover:bg-[#1615d9]"
                    >
                      START A SPRINT
                      <ArrowUpRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </ReceiptCard>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-20 overflow-hidden rounded-lg bg-secondary px-6 py-12 md:px-12 md:py-20">
          <div className="mx-auto grid max-w-237.5 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS_HIGHLIGHTS.map((item) => (
              <div key={item.value} className="flex flex-col items-start gap-2">
                <p className="type-heading-1 inline-flex items-center bg-accent px-3 text-accent-foreground">
                  {item.value}
                </p>
                <p className="type-heading-3 text-primary-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mt-15 aspect-video w-full rounded-md bg-secondary text-secondary-foreground" />
      </section>

      <section className="bg-blue-950">
        {/* plans */}
        <div className="px-5 py-20 md:py-30">
          <div className="mx-auto flex max-w-408 flex-col items-center gap-20">
            <div className="flex max-w-143.25 flex-col items-center gap-6 text-center">
              <p className="type-monospaced rounded-lg bg-blue-200 px-3 py-3 text-foreground">
                Simple Pricing
              </p>
              <h2 className="font-sans text-[42px] leading-9 font-semibold tracking-[-1.5px] text-primary-foreground md:text-[64px] md:leading-12">
                Plans that grow with
                <br />
                you.
              </h2>
            </div>

            <div className="grid w-full gap-4 xl:grid-cols-3 xl:gap-6">
              {PLAN_TIERS.map((tier) => (
                <PlanTierCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mx-auto mt-16.25 w-full max-w-408 pb-30">
          <div className="flex flex-col gap-16 lg:grid lg:grid-cols-[477px_800px] lg:justify-between lg:gap-0">
            <div className="flex max-w-119.25 flex-col gap-15">
              <h2 className="font-sans text-[64px] leading-12 font-semibold tracking-[-1.5px] text-pink-500 md:text-[96px] md:leading-18">
                Got
                <br />
                questions?
              </h2>
              <p className="type-heading-1 text-primary-foreground">Good.</p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full rounded-none border-0 bg-transparent lg:w-200"
            >
              {FAQ_ITEMS.map((item) => (
                <div key={item.value} className="w-full">
                  <AccordionItem
                    value={item.value}
                    className="border-0 not-last:border-b-0 data-open:bg-transparent"
                  >
                    <AccordionTrigger className="type-heading-2 px-0 py-4 text-pink-100 hover:no-underline **:data-[slot=accordion-trigger-icon]:text-pink-100">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pt-1 pb-0 text-pink-50/90">
                      <p className="type-paragraph-regular">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>

                  <div
                    className="mt-5 mb-5 h-px w-full text-pink-500"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to right, currentColor 0, currentColor 2px, transparent 2px, transparent 4px)",
                    }}
                  />
                </div>
              ))}
            </Accordion>
          </div>
        </section>
      </section>

      <section className="bg-blue-50">
        {/* CTA section */}
        <div></div>
      </section>
    </div>
  )
}

function PlanTierCard({ tier }: { tier: PlanTier }) {
  const headerClasses =
    tier.id === "starter"
      ? "bg-lime-500 text-accent-foreground"
      : tier.id === "growth"
        ? "bg-blue-500 text-primary-foreground"
        : "bg-pink-500 text-primary-foreground"

  return (
    <article className="overflow-hidden rounded-md bg-neutral-100">
      <div
        className={`relative flex items-center justify-between px-7 py-5 ${headerClasses}`}
      >
        <div
          className="absolute top-0 left-0 h-6 w-6 bg-blue-950"
          style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}
        />
        <p className="type-heading-2 relative">{tier.name}</p>
        <DollarSign className="relative size-10 shrink-0" strokeWidth={1.75} />
      </div>

      <div className="px-7 py-8">
        <p className="type-heading-4 text-foreground">{tier.description}</p>

        <div className="mt-6">
          {tier.features.map((feature) => (
            <div
              key={feature.label}
              className="border-t border-dotted border-neutral-400 py-5"
            >
              <p className="type-heading-4 text-foreground">{feature.label}</p>
              <p className="type-heading-1 mt-2 text-foreground">
                {feature.value}
              </p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          variant="destructive"
          className="mt-3 h-10 rounded-lg px-6 text-xs font-medium"
        >
          GET 2 FREE CONCEPTS
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </article>
  )
}

function FormField({
  label,
  help,
  children,
}: {
  label: string
  help: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6">
      <p className="type-monospaced text-foreground uppercase">{label}</p>
      {children}
      <p className="font-mono text-xs leading-3.5 text-foreground">{help}</p>
    </div>
  )
}

function HookanaStepCard({
  title,
  body,
  caption,
  className,
}: {
  title: string
  body: string
  caption: string
  className?: string
}) {
  return (
    <article
      className={`rounded-lg border border-pink-500 px-6 py-6 text-center ${className ?? ""}`}
    >
      <p className="type-heading-3 text-pink-500">{title}</p>
      <p className="type-paragraph-regular mt-3 font-semibold text-primary-foreground">
        {body}
      </p>
      <p className="type-monospaced mt-3 text-primary-foreground/95">
        {caption}
      </p>
    </article>
  )
}

function ReceiptCard({
  children,
  background,
  edgeStroke,
}: {
  children: React.ReactNode
  background: "problem" | "solution"
  edgeStroke: string
}) {
  return (
    <article
      className={`relative min-h-155 overflow-visible px-6 py-8 md:min-h-182 md:px-12 md:py-12 ${
        background === "problem" ? "bg-[#e9e9f4]" : "bg-[#bfdeff]"
      }`}
    >
      <ReceiptCorner />
      {children}
      <ReceiptTearEdge stroke={edgeStroke} />
    </article>
  )
}

function ReceiptCorner() {
  return (
    <div className="absolute top-0 right-0 h-11 w-11 overflow-hidden bg-[#0e0e31]">
      <div
        className="absolute inset-0 bg-[#1d1cff]"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />
    </div>
  )
}

function ReceiptTearEdge({ stroke }: { stroke: string }) {
  return (
    <div className="pointer-events-none absolute right-0 -bottom-7 left-0 h-7">
      <svg
        width="100%"
        height="28"
        viewBox="0 0 696 28"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L25,28 L50,0 L75,28 L100,0 L125,28 L150,0 L175,28 L200,0 L225,28 L250,0 L275,28 L300,0 L325,28 L350,0 L375,28 L400,0 L425,28 L450,0 L475,28 L500,0 L525,28 L550,0 L575,28 L600,0 L625,28 L650,0 L675,28 L696,0 Z"
          fill="#ffffff"
          stroke={stroke}
          strokeWidth="1.25"
        />
      </svg>
    </div>
  )
}

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
