const STATS_HIGHLIGHTS = [
  { value: "80%", label: "Lower cost vs agencies" },
  { value: "3x", label: "Faster creative output" },
  { value: "48hr", label: "Average turnaround" },
  { value: "10K+", label: "Creatives shipped" },
]

export function Stats() {
  return (
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
  )
}
