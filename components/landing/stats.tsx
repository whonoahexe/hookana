import type { StatsContent } from "@/sanity/lib/types"

const FALLBACK: StatsContent = {
  tabLabel: "Don't Take Our Word For It",
  stats: [
    { value: "80%", label: "Lower cost vs agencies" },
    { value: "3x", label: "Faster creative output" },
    { value: "48hr", label: "Average turnaround" },
    { value: "10K+", label: "Creatives shipped" },
  ],
  marqueeItems: [],
}

export function Stats({ content }: { content: StatsContent | null }) {
  const { tabLabel, stats } = content ?? FALLBACK
  const items = stats?.length > 0 ? stats : FALLBACK.stats

  return (
    <section className="mt-16 2xl:mt-30">
      {/* Tab */}
      <div className="relative z-0 ml-4 sm:ml-8 flex h-12 w-[80vw] max-w-[280px] sm:max-w-[300px] items-center rounded-none rounded-t-md border-none bg-secondary px-6 text-accent-foreground [clip-path:polygon(0_0,calc(100%-1.5rem)_0,100%_100%,0_100%)] 2xl:h-15 2xl:w-88 2xl:px-8 2xl:[clip-path:polygon(0_0,calc(100%-2.5rem)_0,100%_100%,0_100%)]">
        <p className="font-sans text-sm font-bold tracking-tight uppercase sm:text-base 2xl:type-heading-4 text-primary-foreground">
          {tabLabel}
        </p>
      </div>

      {/* Stats */}
      <div className="z-20 -mt-1 overflow-hidden rounded-md bg-secondary py-10 px-6 sm:px-10 md:py-20 2xl:px-0 2xl:py-30">
        <div className="mx-auto grid w-full grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4 2xl:flex 2xl:justify-center 2xl:gap-30">
          {items.map((item) => (
            <div key={item.value} className="flex flex-col items-center 2xl:items-start gap-2 text-center 2xl:text-left">
              <p className="font-sans text-4xl font-semibold tracking-[-1.5px] uppercase sm:text-5xl 2xl:type-heading-1 inline-flex items-center bg-accent px-2 sm:px-3 text-accent-foreground">
                {item.value}
              </p>
              <p className="font-sans text-sm font-semibold tracking-tight uppercase sm:text-base 2xl:type-heading-3 text-primary-foreground max-w-[120px] 2xl:max-w-none">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
