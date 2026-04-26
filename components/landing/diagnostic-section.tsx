import { Diagnostic } from "@/components/landing/diagnostic"
import { LiveCounter } from "./live-counter"

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
    <div className="grid w-full gap-12 px-5 pt-0 pb-12 2xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] 2xl:gap-10 2xl:px-20 2xl:py-0">
      <div className="flex max-w-93 flex-col gap-8 mt-12 2xl:mt-60 2xl:gap-15 text-center 2xl:text-left mx-auto 2xl:mx-0">
        <p className="font-sans text-4xl sm:text-5xl 2xl:text-[64px] leading-tight 2xl:leading-16 font-black tracking-tight text-white uppercase">
          HOW HEALTHY ARE YOUR AD CREATIVES?
        </p>
        <p className="font-sans text-4xl sm:text-5xl 2xl:text-[64px] leading-tight 2xl:leading-16 font-semibold tracking-tight text-primary uppercase">{`MOST BRANDS DON'T KNOW!`}</p>
      </div>

      <div className="w-full justify-self-center order-first 2xl:order-none">
        <Diagnostic />
      </div>

      <div className="flex max-w-116 flex-col gap-8 2xl:mt-60 2xl:gap-9 2xl:justify-self-end text-center 2xl:text-left mx-auto 2xl:mx-0 items-center 2xl:items-start">
        <p className="type-heading-4 text-white">
          7 questions designed by creative strategists who&apos;ve shipped
          10,000+ ad creatives for D2C brands.
        </p>
        <div className="flex w-full flex-wrap justify-center 2xl:justify-start gap-4">
          {DIAGNOSTIC_STATS.map((stat) => (
            <div
              key={stat.value}
              className="flex w-55 flex-col gap-2 rounded-md bg-secondary px-5 py-3 text-left"
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

        <LiveCounter />
      </div>
    </div>
  )
}
