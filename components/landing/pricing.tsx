import { Button } from "@/components/ui/button"
import { ArrowUpRight, DollarSign } from "lucide-react"

type PlanTier = {
  id: "starter" | "growth" | "enterprise"
  name: string
  description: string
  features: { label: string; value: string }[]
}

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

export function Pricing() {
  return (
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
  )
}
