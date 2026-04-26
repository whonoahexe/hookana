import { Button } from "@/components/ui/button"
import { ContactLink } from "@/components/ui/contact-link"
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

function PlanTierTearEdge() {
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
          fill="var(--color-card)"
        />
      </svg>
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
    <article className="relative overflow-visible">
      <div className="overflow-hidden rounded-t-md bg-card">
        <div
          className={`relative flex items-center justify-between py-5 pl-15 ${headerClasses}`}
        >
          <div
            className="absolute top-0 left-0 h-6 w-6 bg-blue-950"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}
          />
          <p className="type-heading-1 relative">{tier.name}</p>
          <DollarSign
            className="relative mr-4 size-10 shrink-0"
            strokeWidth={1.75}
          />
        </div>

        <div className="px-12 pt-15 pb-40">
          <p className="type-heading-2 text-foreground">{tier.description}</p>

          <div className="mt-11">
            {tier.features.map((feature) => (
              <div
                key={feature.label}
                className="border-t border-dotted border-neutral-950 py-11"
              >
                <p className="type-heading-2 text-foreground">
                  {feature.label}
                </p>
                <p className="type-heading-1 mt-2 text-foreground">
                  {feature.value}
                </p>
              </div>
            ))}
          </div>

          <ContactLink>
            <Button
              size="lg"
              variant="default"
              className="rounded-md px-6 py-6"
            >
              GET 2 FREE CONCEPTS
              <ArrowUpRight className="size-4" />
            </Button>
          </ContactLink>
        </div>
      </div>
      <PlanTierTearEdge />
    </article>
  )
}

export function Pricing() {
  return (
    <div className="px-5 py-20 md:px-36 md:py-40">
      <div className="mx-auto flex flex-col items-center gap-20">
        <div className="flex max-w-142 flex-col items-center gap-6 text-center">
          <p className="type-monospaced rounded-md bg-[#BFDEFF] p-3 text-foreground">
            Simple Pricing
          </p>
          <h2 className="font-sans text-[42px] leading-9 font-semibold tracking-[-1.5px] text-primary-foreground md:text-[64px] md:leading-12">
            Plans that grow with
            <br />
            you.
          </h2>
        </div>

        <div className="grid w-full gap-6 xl:grid-cols-3 xl:gap-6">
          {PLAN_TIERS.map((tier) => (
            <PlanTierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  )
}
