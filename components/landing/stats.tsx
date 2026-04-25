const STATS_HIGHLIGHTS = [
  { value: "80%", label: "Lower cost vs agencies" },
  { value: "3x", label: "Faster creative output" },
  { value: "48hr", label: "Average turnaround" },
  { value: "10K+", label: "Creatives shipped" },
]

export function Stats() {
  return (
    <section className="mt-30">
      {/* Tab */}
      <div className="relative z-0 ml-8 flex h-15 w-88 items-center rounded-none rounded-t-md border-none bg-secondary px-8 text-accent-foreground [clip-path:polygon(0_0,calc(100%-2.5rem)_0,100%_100%,0_100%)]">
        <p className="type-heading-4 text-primary-foreground">
          Don't Take Our Word For It
        </p>
      </div>

      {/* Stats */}
      <div className="z-20 -mt-1 overflow-hidden rounded-md bg-secondary py-12 md:py-30">
        <div className="mx-auto flex w-full justify-center gap-30">
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
      </div>
    </section>
  )
}
