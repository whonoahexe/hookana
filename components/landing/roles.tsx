"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const ROLE_TABS = [
  "PERFORMANCE MARKETERS",
  "AGENCY FOUNDERS",
  "D2C FOUNDERS",
] as const

type RoleTab = (typeof ROLE_TABS)[number]

const ROLE_CONTENT: Record<
  RoleTab,
  {
    problemTitle: string
    problemDescription: string
    solutionTitle: string
    solutionTags: string[]
    solutionDescription: string
  }
> = {
  "PERFORMANCE MARKETERS": {
    problemTitle:
      "You know creative is the lever. You can't pull it fast enough.",
    problemDescription:
      '"I know the lever is creative, but I can&apos;t pull it fast enough." Your ad accounts need fresh assets daily, not weekly. Your ROAS depends on constantly testing new hooks, formats, and angles. But your creative pipeline can&apos;t keep up with ad platform velocity.',
    solutionTitle: "Creatives that match your ad platform's speed.",
    solutionTags: [
      "48HR TURNAROUND",
      "UNLIMITED REVISIONS",
      "AD-PLATFORM NATIVE FORMATS",
      "CONSISTENT QUALITY AT SCALE",
    ],
    solutionDescription:
      "Hookana delivers creatives at the speed of your ad platform. Constant testing, zero bottlenecks, predictable output.",
  },
  "AGENCY FOUNDERS": {
    problemTitle:
      "Client demand is growing, but delivery keeps bottlenecking your team.",
    problemDescription:
      "New retainers are coming in, but production quality drifts as workload spikes. Internal teams get stretched, deadlines slip, and account leads spend too much time chasing assets instead of scaling client strategy.",
    solutionTitle: "White-label production your clients can depend on.",
    solutionTags: [
      "CLIENT-READY DELIVERY",
      "FAST FEEDBACK LOOPS",
      "MULTI-BRAND WORKFLOWS",
      "CONSISTENT CREATIVE QA",
    ],
    solutionDescription:
      "Scale output across accounts without adding headcount. We plug into your process, hit deadlines, and keep quality stable across brands.",
  },
  "D2C FOUNDERS": {
    problemTitle:
      "You're ready to scale spend, but creative fatigue starts first.",
    problemDescription:
      "Winning ads burn out quickly, and your team can&apos;t refresh concepts fast enough. CAC rises, prospecting stalls, and growth targets become harder to hit without a reliable creative cadence.",
    solutionTitle: "Always-on creative for your growth engine.",
    solutionTags: [
      "OFFER-LED HOOK TESTS",
      "UGC + STATIC MIX",
      "WEEKLY CREATIVE DROPS",
      "FATIGUE-RESISTANT SYSTEM",
    ],
    solutionDescription:
      "Launch fresh concepts every week and keep paid channels from stalling. We turn product insights into high-velocity testing cycles.",
  },
}

function ReceiptCorner() {
  return (
    <div className="absolute top-0 right-0 h-11 w-11 overflow-hidden bg-secondary">
      <div
        className="absolute inset-0 bg-blue-50"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />
    </div>
  )
}

function ReceiptTearEdge({
  background,
}: {
  background: "problem" | "solution"
}) {
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
          fill={background === "solution" ? "#BFDEFF" : "#E5E7EB"}
          strokeWidth="1.25"
        />
      </svg>
    </div>
  )
}

function ReceiptCard({
  children,
  background,
}: {
  children: React.ReactNode
  background: "problem" | "solution"
}) {
  return (
    <article
      className={`relative min-h-155 max-w-175 overflow-visible px-9 py-8 md:min-h-182 md:py-20 ${
        background === "problem" ? "bg-blue-100" : "bg-[#BFDEFF]"
      }`}
    >
      <ReceiptCorner />
      {children}
      <ReceiptTearEdge background={background} />
    </article>
  )
}

export function Roles() {
  const [activeRole, setActiveRole] = useState<RoleTab>(ROLE_TABS[0])
  const activeRoleContent = ROLE_CONTENT[activeRole]

  return (
    <section className="mt-40 flex w-full flex-col items-center justify-center pl-6">
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <p className="font-sans text-[128px] leading-12 font-black text-foreground uppercase">
          We get it.
        </p>
        <p className="type-heading-2 text-foreground">
          We&apos;ve been in your shoes.
        </p>
      </div>

      <div className="mt-30 w-full">
        <div className="flex w-full justify-between">
          <div className="flex w-full gap-6">
            <ReceiptCard background="problem">
              <div className="flex h-full flex-col">
                <h2 className="type-heading-1 text-secondary">
                  {activeRoleContent.problemTitle}
                </h2>
                <p className="type-paragraph-large mt-auto font-bold text-blue-950">
                  {activeRoleContent.problemDescription}
                </p>
              </div>
            </ReceiptCard>

            <ReceiptCard background="solution">
              <div className="flex h-full flex-col gap-8">
                <h2 className="type-heading-1 text-blue-950">
                  {activeRoleContent.solutionTitle}
                </h2>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-3">
                    {activeRoleContent.solutionTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-linear-to-r from-[#BFDEFF] to-blue-300 px-3 py-0 font-mono text-[16px] leading-6 text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="type-paragraph-large mt-8 font-bold text-blue-950">
                    {activeRoleContent.solutionDescription}
                  </p>

                  <Button
                    size="lg"
                    variant="secondary"
                    className="mt-8 rounded-md px-6"
                  >
                    START A SPRINT
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
            </ReceiptCard>
          </div>

          <div className="flex flex-col gap-4">
            {ROLE_TABS.map((role) => {
              const isActive = role === activeRole

              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setActiveRole(role)}
                  className={cn(
                    "relative h-15 w-full min-w-90 cursor-pointer bg-secondary px-8 text-left font-mono text-base text-secondary-foreground uppercase transition-all",
                    isActive
                      ? "[clip-path:polygon(1.5rem_0,100%_0,100%_100%,1.5rem_100%,0_50%)]"
                      : "ml-20"
                  )}
                  aria-pressed={isActive}
                >
                  {role}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
