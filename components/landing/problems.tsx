"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type ReceiptItem = {
  qty: string
  desc: string
}

const tabs = [
  {
    value: "bottleneck",
    label: "Bottleneck",
    inactiveWidth: "10.5rem",
    headlineLine1: "Scaling ad spend is easy.",
    headlineLine2: "Scaling creatives?",
    subheading: "Not so much.",
    ask: "Sound familiar?",
    body: "Your ad platforms move faster than your team can produce. Winning ads stale out before you can replace them.",
    receipt: {
      num: "#00412",
      problem: "BOTTLENECK",
      total: "$24,800",
      items: [
        { qty: "18 hrs", desc: "Team time lost chasing briefs" },
        { qty: "4 wk", desc: "Avg shelf life of a winning hook" },
        { qty: "7 ads", desc: "Missed test slots per platform" },
        { qty: "$11k", desc: "Wasted spend on fatigued creatives" },
        { qty: "2 sprint", desc: "Eng diverted to 'just a quick edit'" },
      ] satisfies ReceiptItem[],
    },
  },
  {
    value: "lag",
    label: "Lag",
    inactiveWidth: "8.5rem",
    headlineLine1: "Briefs go out Monday.",
    headlineLine2: "Assets land next Thursday.",
    subheading: "By then the trend is gone.",
    ask: "Sound familiar?",
    body: "Every extra day between concept and live ad is CPM you can't recover. Winning hooks have a shelf life, and your pipeline is measured in weeks.",
    receipt: {
      num: "#00567",
      problem: "LAG",
      total: "$31,200",
      items: [
        { qty: "10 days", desc: "Brief → live ad turnaround" },
        { qty: "3 trends", desc: "Missed this quarter" },
        { qty: "$18k", desc: "CPM inflation while waiting" },
        { qty: "42%", desc: "Drop in CTR after day 14" },
        { qty: "1 wk", desc: "Dead air between test cycles" },
      ] satisfies ReceiptItem[],
    },
  },
  {
    value: "burnout",
    label: "Burnout",
    inactiveWidth: "10rem",
    headlineLine1: "Your best strategist is",
    headlineLine2: "trimming TikToks at 11pm.",
    subheading: "Again.",
    ask: "Sound familiar?",
    body: "Growth teams weren't built to be creative factories. When every launch depends on heroics, the people who care most are the first to leave.",
    receipt: {
      num: "#00689",
      problem: "BURNOUT",
      total: "2 FTE",
      items: [
        { qty: "11:42pm", desc: "Avg export time on launch nights" },
        { qty: "6 apps", desc: "Tools your editor juggles nightly" },
        { qty: "2 FTE", desc: "Unbudgeted production hours / mo" },
        { qty: "1 dept", desc: "At risk of attrition this quarter" },
        { qty: "0 days", desc: "Your creative lead took off in Q1" },
      ] satisfies ReceiptItem[],
    },
  },
  {
    value: "risk",
    label: "Risk",
    inactiveWidth: "9.75rem",
    headlineLine1: "One ad account,",
    headlineLine2: "three winners on rotation.",
    subheading: "Until they aren't.",
    ask: "Sound familiar?",
    body: "When two creatives carry 80% of spend, a single fatigue curve tanks the quarter. Testing volume isn't a nice-to-have — it's the only insurance policy that works.",
    receipt: {
      num: "#00741",
      problem: "RISK",
      total: "80% SPEND",
      items: [
        { qty: "3 ads", desc: "Carrying 80% of your account" },
        { qty: "9 days", desc: "Until the next fatigue curve hits" },
        { qty: "1 event", desc: "Between 'on track' and 'tanked quarter'" },
        { qty: "0 backup", desc: "Tested hooks ready to promote" },
        { qty: "$62k", desc: "Exposed spend on brittle rotation" },
      ] satisfies ReceiptItem[],
    },
  },
]

function DiagnosticReceipt({
  receipt,
}: {
  receipt: (typeof tabs)[0]["receipt"]
}) {
  return (
    <div className="relative w-full self-start rounded-sm bg-pink-50 px-11 pt-10 pb-18 shadow-[0_1px_0_rgba(0,0,0,0.04),0_10px_24px_-18px_rgba(0,0,0,0.18)]">
      {/* Stamp */}
      <div className="pointer-events-none absolute top-[42%] right-[-4px] -translate-y-1/2 rotate-[-12deg] rounded-[10px] border-3 border-primary px-4 py-2.5 font-sans text-xl font-black tracking-wide text-primary opacity-85 uppercase">
        SOUND FAMILIAR?
      </div>

      {/* Header */}
      <div className="mb-4 flex items-baseline justify-between border-b border-dashed border-neutral-950 pb-4">
        <span className="font-sans text-xl font-bold tracking-tight uppercase">
          HOOKANA · DIAGNOSTIC
        </span>
        <span className="font-mono text-xs tracking-widest text-neutral-600 uppercase">
          {receipt.num}
        </span>
      </div>

      {/* Meta */}
      <div className="mb-5 font-mono text-xs tracking-widest text-neutral-600 uppercase">
        CASHIER · CREATIVE OPS
      </div>

      {/* Problem label */}
      <div className="mb-3 font-mono text-xs tracking-widest text-neutral-600 uppercase">
        Hidden cost of{" "}
        <span className="font-bold text-primary">{receipt.problem}</span> per
        month
      </div>

      {/* Items */}
      <ul className="m-0 list-none p-0">
        {receipt.items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[1fr_auto] gap-3 border-b border-dotted border-neutral-950/20 py-2.5 font-mono text-sm leading-snug"
          >
            <span className="text-neutral-800">{item.desc}</span>
            <span className="font-bold whitespace-nowrap">{item.qty}</span>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="mt-4 grid grid-cols-[1fr_auto] items-baseline gap-3 border-t border-dashed border-neutral-950 pt-4 font-sans text-xl font-bold uppercase tracking-tight">
        <span>Total drag</span>
        <span className="text-2xl text-primary">{receipt.total}</span>
      </div>

      {/* Footer */}
      <div className="mt-3 flex justify-between font-mono text-[11px] tracking-widest text-neutral-500 uppercase">
        <span>TY — COME AGAIN</span>
        <span>PAID · IN CPM</span>
      </div>

      {/* Zigzag bottom edge — same pattern used across the site */}
      <div className="absolute right-0 -bottom-7 left-0 h-7">
        <svg
          width="100%"
          height="28"
          viewBox="0 0 696 28"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-pink-50"
            d="M0,0 L25,28 L50,0 L75,28 L100,0 L125,28 L150,0 L175,28 L200,0 L225,28 L250,0 L275,28 L300,0 L325,28 L350,0 L375,28 L400,0 L425,28 L450,0 L475,28 L500,0 L525,28 L550,0 L575,28 L600,0 L625,28 L650,0 L675,28 L696,0 Z"
          />
        </svg>
      </div>
    </div>
  )
}

export function Problems() {
  return (
    <div className="px-5">
      <Tabs defaultValue="bottleneck" className="mt-40 gap-0">
        <TabsList className="ml-8 h-auto gap-0 rounded-none bg-transparent p-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="type-heading-4 relative z-0 h-15 w-60! rounded-none rounded-t-md border-none bg-lime-50 text-accent-foreground [clip-path:polygon(0_0,calc(100%-2.5rem)_0,100%_100%,0_100%)] not-first:-ml-8 data-[state=active]:z-20 data-[state=active]:-translate-y-0.5 data-[state=active]:bg-lime-200"
              style={{ width: tab.inactiveWidth }}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="z-40 w-full flex-none rounded-md rounded-b-2xl bg-lime-200 px-20 py-18"
          >
            <div className="grid h-full grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left: copy */}
              <div className="flex min-h-120 flex-col justify-between">
                <div className="flex max-w-120 flex-col gap-6">
                  <p className="type-heading-1 text-lime-950">
                    {tab.headlineLine1}
                    <br />
                    {tab.headlineLine2}
                  </p>
                  <p className="type-heading-3 text-accent-foreground">
                    {tab.subheading}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="type-monospaced text-primary">{tab.ask}</p>
                  <p className="type-heading-4 max-w-172 text-accent-foreground">
                    {tab.body}
                  </p>
                </div>
              </div>

              {/* Right: diagnostic receipt */}
              <div className="flex justify-end">
                <DiagnosticReceipt receipt={tab.receipt} />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
