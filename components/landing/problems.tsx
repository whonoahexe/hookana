import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabs = [
  {
    value: "bottleneck",
    label: "Bottleneck",
    inactiveWidth: "10.5rem",
    heading: "Scaling ad spend is easy. Scaling creatives?",
    subheading: "Not so much.",
    body: "Your ad platforms move faster than your team can produce. Winning ads stale out before you can replace them.",
  },
  {
    value: "lag",
    label: "Lag",
    inactiveWidth: "8.5rem",
    heading: "Weeks to produce. Days to go stale.",
    subheading: "The math doesn't add up.",
    body: "By the time your creative is approved, tested, and live — the trend has passed. Your competitors already iterated three times.",
  },
  {
    value: "burnout",
    label: "Burnout",
    inactiveWidth: "10rem",
    heading: "Your best creatives are stuck in a loop.",
    subheading: "Resize. Repurpose. Repeat.",
    body: "When top talent spends their days reformatting banners and resizing assets, they burn out — and your creative quality suffers.",
  },
  {
    value: "risk",
    label: "Risk",
    inactiveWidth: "9.75rem",
    heading: "More output shouldn't mean less control.",
    subheading: "But it usually does.",
    body: "As creative volume scales, brand consistency breaks down. Off-brand assets ship, mistakes compound, and trust erodes.",
  },
]

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
            className="z-40 h-200 w-full flex-none rounded-md rounded-b-2xl bg-lime-200 p-30"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex max-w-120 flex-col gap-6">
                <p className="type-heading-1 text-lime-950">{tab.heading}</p>
                <p className="type-heading-3 text-accent-foreground">
                  {tab.subheading}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="type-monospaced text-primary">Sound familiar?</p>
                <p className="type-heading-4 max-w-172 text-accent-foreground">
                  {tab.body}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
