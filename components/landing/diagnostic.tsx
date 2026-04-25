import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DollarSign, Globe } from "lucide-react"
import { FormField } from "./form-field"

export function Diagnostic() {
  return (
    <div className="flex w-full justify-center">
      <section className="relative -mt-20 max-w-180 bg-card px-8 py-18 md:px-19">
        <div className="absolute top-0 -right-px h-16 w-16 overflow-hidden bg-pink-300">
          <div
            className="absolute inset-0 bg-muted-foreground"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
          />
        </div>

        <div className="mx-auto">
          <div className="flex justify-between gap-8">
            <h2 className="font-sans text-[64px] leading-12 font-semibold tracking-[-1.5px] text-card-foreground uppercase">
              <span className="block">Before</span>
              <span className="block">We</span>
              <span className="block">Begin</span>
            </h2>
            <p className="type-heading-3 text-foreground">
              Tell us about your brand so we can calibrate the diagnostic.
            </p>
          </div>

          <div className="mt-20 border-t border-dotted border-neutral-950" />

          <form className="mt-24 flex flex-col gap-12">
            <FormField
              label="Brand name *"
              help="We use this to personalize your results. Your score means more when it's named."
            >
              <div className="flex h-9 w-80 items-center gap-2 rounded-md border border-neutral-950 bg-popover px-3 shadow-xs">
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
                <SelectTrigger className="h-9 w-80 rounded-md border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
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
                <SelectTrigger className="h-9 w-80 rounded-md border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
                  <DollarSign className="size-4 shrink-0" />
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="under5k">Under $5K/mo</SelectItem>
                    <SelectItem value="5k-25k">$5K - $25K/mo</SelectItem>
                    <SelectItem value="25k-100k">$25K - $100K/mo</SelectItem>
                    <SelectItem value="100k-500k">$100K - $500K/mo</SelectItem>
                    <SelectItem value="over500k">$500K+/mo</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormField>
          </form>

          <div className="mt-24 border-t border-dotted border-neutral-950" />

          <p className="mt-5 font-mono text-xs leading-3.5 text-blue-500">
            Built from patterns across 10,000+ ad creatives. Identifies
            structural gaps that cause creative fatigue, low CTR, and wasted ad
            spend.
          </p>
        </div>

        <div className="absolute right-0 -bottom-6.75 left-0 h-7">
          <svg
            width="100%"
            height="28"
            viewBox="0 0 696 28"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L25,28 L50,0 L75,28 L100,0 L125,28 L150,0 L175,28 L200,0 L225,28 L250,0 L275,28 L300,0 L325,28 L350,0 L375,28 L400,0 L425,28 L450,0 L475,28 L500,0 L525,28 L550,0 L575,28 L600,0 L625,28 L650,0 L675,28 L696,0 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </section>
    </div>
  )
}
