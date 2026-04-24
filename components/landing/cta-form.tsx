import { Input } from "@/components/ui/input"
import { Globe, User } from "lucide-react"
import { FormField } from "./form-field"

export function CtaForm() {
  return (
    <div className="mx-auto flex max-w-360 justify-center px-6 py-20 md:py-24">
      <section className="relative w-full max-w-180 bg-neutral-100 px-8 py-14 md:px-19 md:py-16 lg:px-30">
        <div className="mx-auto max-w-138">
          <div className="grid gap-8 md:grid-cols-[255px_1fr] md:gap-9">
            <h2 className="font-sans text-[42px] leading-9 font-semibold tracking-[-1.5px] text-foreground md:text-[64px] md:leading-12">
              Get your
              <br />
              first 2
              <br />
              concepts
              <br />
              free.
            </h2>
            <p className="type-heading-3 max-w-70.25 text-foreground">
              No strings. No credit card. Just tell us about your brand and
              we&apos;ll build two ad concepts on the house.
            </p>
          </div>

          <div className="mt-14 border-t border-dotted border-neutral-500" />

          <form className="mt-12 flex flex-col gap-10">
            <FormField
              label="Name *"
              help="We use this to personalize your results. Your score means more when it's named."
            >
              <div className="flex h-9 w-80 items-center gap-2 rounded-lg border border-neutral-950 bg-popover px-3 shadow-xs">
                <User className="size-4 shrink-0 text-primary-foreground/70" />
                <Input
                  className="h-auto flex-1 rounded-none border-none bg-transparent px-0 py-0 text-sm text-primary-foreground shadow-none placeholder:text-primary-foreground/60 focus-visible:border-none focus-visible:ring-0"
                  placeholder="e.g Noah"
                />
              </div>
            </FormField>

            <FormField
              label="Email *"
              help="Creative benchmarks differ by vertical. A skincare brand and a fitness brand have very different hook standards."
            >
              <div className="flex h-9 w-80 items-center gap-2 rounded-lg border border-neutral-950 bg-popover px-3 shadow-xs">
                <User className="size-4 shrink-0 text-primary-foreground/70" />
                <Input
                  className="h-auto flex-1 rounded-none border-none bg-transparent px-0 py-0 text-sm text-primary-foreground shadow-none placeholder:text-primary-foreground/60 focus-visible:border-none focus-visible:ring-0"
                  placeholder="noah@hookana.com"
                />
              </div>
            </FormField>

            <FormField
              label="Agency / Brand Website"
              help={`Helps us calibrate expectations. What counts as "low volume" at $5K looks very different at $500K.`}
            >
              <div className="flex h-9 w-80 items-center gap-2 rounded-lg border border-neutral-950 bg-popover px-3 shadow-xs">
                <Globe className="size-4 shrink-0 text-primary-foreground/70" />
                <Input
                  className="h-auto flex-1 rounded-none border-none bg-transparent px-0 py-0 text-sm text-primary-foreground shadow-none placeholder:text-primary-foreground/60 focus-visible:border-none focus-visible:ring-0"
                  placeholder="https://www.hookana.com/"
                />
              </div>
            </FormField>
          </form>

          <div className="mt-14 border-t border-dotted border-neutral-500" />

          <p className="mt-5 max-w-137.75 font-mono text-xs leading-3.5 text-blue-500">
            We&apos;ll review your brand, build 2 sample concepts, and walk you
            through them on a quick call.
          </p>
        </div>

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
  )
}
