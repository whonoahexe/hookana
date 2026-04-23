import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, DollarSign, Globe } from "lucide-react"

export default function Page() {
  return (
    <div>
      {/* Hero section */}
      <div className="px-5">
        <div className="mt-20 flex h-200 w-full rounded-md bg-pink-50 py-30">
          <div className="flex max-w-200 flex-col justify-between pl-30">
            <div className="flex max-w-115 flex-col gap-3">
              <p className="pr-8 font-sans text-[64px] leading-16 font-black text-neutral-950 uppercase">
                Creativity at Volume.
              </p>
              <p className="type-heading-2 text-primary uppercase">
                Without the compromise.
              </p>
            </div>

            <div>
              <p className="type-paragraph-large text-accent-foreground">
                D2C brands and performance teams need fresh creatives, fast,
                on-brand, and at scale. Hookana is the creative production
                engine that keeps your pipeline full without blowing your budget
                or burning out your team.
              </p>

              <Button
                size="lg"
                className="mt-4 rounded-md"
                variant="destructive"
              >
                GET 2 FREE CONCEPTS
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Problems section */}
      <div className="px-5">
        <Tabs defaultValue="bottleneck" className="my-20">
          <TabsList>
            <TabsTrigger value="bottleneck">Bottleneck</TabsTrigger>
            <TabsTrigger value="lag">Lag</TabsTrigger>
            <TabsTrigger value="burnout">Burnout</TabsTrigger>
            <TabsTrigger value="risk">Risk</TabsTrigger>
          </TabsList>
          <TabsContent
            value="bottleneck"
            className="flex h-200 w-full flex-none justify-between rounded-md bg-lime-200"
          >
            <div className="flex h-full flex-col justify-between p-30">
              <div className="flex max-w-115 flex-col gap-6">
                <p className="type-heading-1 text-lime-950">
                  Scaling ad spend is easy. Scaling creatives?
                </p>
                <p className="type-heading-3 text-accent-foreground">
                  Not so much.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="type-monospaced text-primary">Sound familiar?</p>
                <p className="type-heading-4 max-w-170 text-accent-foreground">
                  Your ad platforms move faster than your team can produce.
                  Winning ads stale out before you can replace them.
                </p>
              </div>
            </div>
            <div className="flex h-full w-205 items-center justify-center rounded-md bg-card text-card-foreground">
              <p className="type-monospaced text-foreground">
                (replace with actual video embed)
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Diagnostic form */}
      <div className="flex w-full justify-center bg-blue-950">
        <section className="relative my-20 max-w-180 bg-neutral-100 px-8 py-18 md:px-19 lg:px-30">
          {/* Corner fold decoration (top-right) */}
          <div className="absolute top-0 -right-px h-15 w-16 overflow-hidden bg-[#0e0e31]">
            <div
              className="absolute inset-0 bg-pink-300"
              style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
            />
          </div>

          <div className="mx-auto max-w-138">
            <div className="flex items-start justify-between gap-6">
              <h2 className="w-63.75 font-sans text-[64px] leading-12 font-semibold tracking-[-1.5px] text-card-foreground uppercase">
                <span className="block">Before</span>
                <span className="block">We</span>
                <span className="block">Begin</span>
              </h2>
              <p className="type-heading-3 max-w-79.5 text-foreground">
                Tell us about your brand so we can calibrate the diagnostic.
              </p>
            </div>

            <div className="mt-20 border-t border-dotted border-neutral-500" />

            <form className="mt-24 flex flex-col gap-13">
              <FormField
                label="Brand name *"
                help="We use this to personalize your results. Your score means more when it's named."
              >
                <div className="flex h-9 w-80 items-center gap-2 rounded-lg border border-neutral-950 bg-popover px-3 shadow-xs">
                  <Globe className="size-4 shrink-0 text-primary-foreground/70" />
                  <Input
                    className="h-auto flex-1 rounded-none border-none bg-transparent px-0 py-0 text-sm text-primary-foreground shadow-none placeholder:text-primary-foreground/60 focus-visible:border-none focus-visible:ring-0"
                    placeholder="e.g Glowup Skincare"
                  />
                </div>
              </FormField>

              <FormField
                label="Industry *"
                help="Creative benchmarks differ by vertical. A skincare brand and a fitness brand have very different hook standards."
              >
                <Select>
                  <SelectTrigger className="h-9 w-80 rounded-lg border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="beauty">
                        Beauty &amp; Skincare
                      </SelectItem>
                      <SelectItem value="fitness">
                        Fitness &amp; Health
                      </SelectItem>
                      <SelectItem value="fashion">
                        Fashion &amp; Apparel
                      </SelectItem>
                      <SelectItem value="food">Food &amp; Beverage</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormField>

              <FormField
                label="Monthly ad spend *"
                help={`Helps us calibrate expectations. What counts as "low volume" at $5K looks very different at $500K.`}
              >
                <Select>
                  <SelectTrigger className="h-9 w-80 rounded-lg border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
                    <DollarSign className="size-4 shrink-0" />
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="under5k">Under $5K/mo</SelectItem>
                      <SelectItem value="5k-25k">$5K - $25K/mo</SelectItem>
                      <SelectItem value="25k-100k">$25K - $100K/mo</SelectItem>
                      <SelectItem value="100k-500k">
                        $100K - $500K/mo
                      </SelectItem>
                      <SelectItem value="over500k">$500K+/mo</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormField>
            </form>

            <div className="mt-20 border-t border-dotted border-neutral-500" />

            <p className="mt-5 max-w-137.75 font-mono text-xs leading-3.5 text-blue-500">
              Built from patterns across 10,000+ ad creatives. Identifies
              structural gaps that cause creative fatigue, low CTR, and wasted
              ad spend.
            </p>
          </div>

          {/* Bottom zigzag decoration */}
          <div className="absolute right-0 -bottom-7 left-0 h-7">
            <svg
              width="100%"
              height="28"
              viewBox="0 0 696 28"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,0 L25,28 L50,0 L75,28 L100,0 L125,28 L150,0 L175,28 L200,0 L225,28 L250,0 L275,28 L300,0 L325,28 L350,0 L375,28 L400,0 L425,28 L450,0 L475,28 L500,0 L525,28 L550,0 L575,28 L600,0 L625,28 L650,0 L675,28 L696,0 Z"
                fill="#f5f5f5"
              />
            </svg>
          </div>
        </section>
      </div>
    </div>
  )
}

function FormField({
  label,
  help,
  children,
}: {
  label: string
  help: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6">
      <p className="type-monospaced text-foreground uppercase">{label}</p>
      {children}
      <p className="font-mono text-xs leading-3.5 text-foreground">{help}</p>
    </div>
  )
}
