import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const SOLUTION_TAGS = [
  "48HR TURNAROUND",
  "UNLIMITED REVISIONS",
  "AD-PLATFORM NATIVE FORMATS",
  "CONSISTENT QUALITY AT SCALE",
]

function ReceiptCorner() {
  return (
    <div className="absolute top-0 right-0 h-11 w-11 overflow-hidden bg-[#0e0e31]">
      <div
        className="absolute inset-0 bg-[#1d1cff]"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />
    </div>
  )
}

function ReceiptTearEdge({ stroke }: { stroke: string }) {
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
          fill="#ffffff"
          stroke={stroke}
          strokeWidth="1.25"
        />
      </svg>
    </div>
  )
}

function ReceiptCard({
  children,
  background,
  edgeStroke,
}: {
  children: React.ReactNode
  background: "problem" | "solution"
  edgeStroke: string
}) {
  return (
    <article
      className={`relative min-h-155 overflow-visible px-6 py-8 md:min-h-182 md:px-12 md:py-12 ${
        background === "problem" ? "bg-[#e9e9f4]" : "bg-[#bfdeff]"
      }`}
    >
      <ReceiptCorner />
      {children}
      <ReceiptTearEdge stroke={edgeStroke} />
    </article>
  )
}

export function Roles() {
  return (
    <section className="mt-40 flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <p className="font-sans text-[128px] leading-12 font-black text-foreground uppercase">
          We get it.
        </p>
        <p className="type-heading-2 text-foreground">
          We&apos;ve been in your shoes.
        </p>
      </div>

      <div className="mt-20 w-full px-5">
        <div className="mx-auto grid w-full max-w-362.5 gap-6 xl:grid-cols-2">
          <ReceiptCard background="problem" edgeStroke="#8ec5ff">
            <div className="flex h-full flex-col gap-8">
              <h2 className="max-w-158.25 font-sans text-[38px] leading-9.5 font-semibold tracking-[-1.5px] text-[#0705e2] md:text-[48px] md:leading-12">
                You know creative is the lever. You can&apos;t pull it fast
                enough.
              </h2>
              <p className="mt-auto max-w-152.5 font-serif text-[18px] leading-6.75 font-semibold text-[#0e0e31]">
                &quot;I know the lever is creative, but I can&apos;t pull it
                fast enough.&quot; Your ad accounts need fresh assets daily, not
                weekly. Your ROAS depends on constantly testing new hooks,
                formats, and angles. But your creative pipeline can&apos;t keep
                up with ad platform velocity.
              </p>
            </div>
          </ReceiptCard>

          <ReceiptCard background="solution" edgeStroke="#8ec5ff">
            <div className="flex h-full flex-col gap-8">
              <h2 className="max-w-158.25 font-sans text-[38px] leading-9.5 font-semibold tracking-[-1.5px] text-[#0e0e31] md:text-[48px] md:leading-12">
                Creatives that match your ad platform&apos;s speed.
              </h2>

              <div className="mt-auto">
                <div className="flex max-w-152.5 flex-wrap gap-2">
                  {SOLUTION_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-linear-to-r from-[rgba(191,222,255,0.7)] to-[#1d1cff] px-3 py-0 font-mono text-[16px] leading-6 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-8 max-w-152.5 font-serif text-[18px] leading-6.75 font-semibold text-[#090909]">
                  Hookana delivers creatives at the speed of your ad platform.
                  Constant testing, zero bottlenecks, predictable output.
                </p>

                <Button
                  size="lg"
                  className="mt-8 h-10 rounded-lg bg-[#1d1cff] px-6 py-2.5 text-[14px] leading-5 font-medium text-white hover:bg-[#1615d9]"
                >
                  START A SPRINT
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>
          </ReceiptCard>
        </div>
      </div>
    </section>
  )
}
