import { Diagnostic } from "@/components/landing/diagnostic"

type DiagnosticStat = {
  value: string
  label: string
}

const DIAGNOSTIC_STATS: DiagnosticStat[] = [
  {
    value: "73%",
    label: "Brands have blind spots",
  },
  {
    value: "Free",
    label: "AI-powered analysis",
  },
  {
    value: "3 Min",
    label: "To diagnose yours",
  },
]

export function DiagnosticSection() {
  return (
    <div className="grid w-full gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10 lg:px-20 lg:py-0">
      <div className="flex max-w-93 flex-col gap-15 lg:mt-60">
        <p className="font-sans text-[64px] leading-16 font-black tracking-tight text-white uppercase">
          HOW HEALTHY ARE YOUR AD CREATIVES?
        </p>
        <p className="font-sans text-[64px] leading-16 font-semibold tracking-tight text-primary uppercase">{`MOST BRANDS DON'T KNOW!`}</p>
      </div>

      <div className="w-full justify-self-center">
        <Diagnostic />
      </div>

      <div className="flex max-w-116 flex-col gap-9 lg:mt-60 lg:justify-self-end">
        <p className="type-heading-4 text-white">
          7 questions designed by creative strategists who&apos;ve shipped
          10,000+ ad creatives for D2C brands.
        </p>
        <div className="flex w-full flex-wrap gap-4">
          {DIAGNOSTIC_STATS.map((stat) => (
            <div
              key={stat.value}
              className="flex w-55 flex-col gap-2 rounded-md bg-secondary px-5 py-3"
            >
              <p className="type-heading-3 text-secondary-foreground">
                {stat.value}
              </p>
              <p className="font-code text-xs tracking-tight text-secondary-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="font-code text-sm text-white">
          Your answers reveal the exact bottlenecks killing your ad performance.
        </p>
      </div>
    </div>
  )
}
