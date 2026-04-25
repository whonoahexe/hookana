import { Input } from "@/components/ui/input"
import { Globe, User } from "lucide-react"
import { FormField } from "./form-field"

export function CtaForm() {
  return (
    <div className="flex w-full justify-center">
      <section className="relative -mt-20 max-w-180 bg-card px-8 py-18 md:px-19">
        <div className="absolute top-0 -right-px h-16 w-16 overflow-hidden bg-blue-50">
          <div
            className="absolute inset-0 bg-muted-foreground"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
          />
        </div>

        <div className="mx-auto">
          <div className="grid gap-8 md:grid-cols-[255px_1fr] md:gap-9">
            <h2 className="font-sans text-[42px] leading-9 font-semibold tracking-[-1.5px] text-card-foreground md:text-[64px] md:leading-12">
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

          <div className="mt-20 border-t border-dotted border-neutral-950" />

          <form className="mt-24 flex flex-col gap-12">
            <FormField
              label="Name *"
              help="We use this to personalize your results. Your score means more when it's named."
            >
              <div className="flex h-9 w-80 items-center gap-2 rounded-md border border-neutral-950 bg-popover px-3 shadow-xs">
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
              <div className="flex h-9 w-80 items-center gap-2 rounded-md border border-neutral-950 bg-popover px-3 shadow-xs">
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
              <div className="flex h-9 w-80 items-center gap-2 rounded-md border border-neutral-950 bg-popover px-3 shadow-xs">
                <Globe className="size-4 shrink-0 text-primary-foreground/70" />
                <Input
                  className="h-auto flex-1 rounded-none border-none bg-transparent px-0 py-0 text-sm text-primary-foreground shadow-none placeholder:text-primary-foreground/60 focus-visible:border-none focus-visible:ring-0"
                  placeholder="https://www.hookana.com/"
                />
              </div>
            </FormField>
          </form>

          <div className="mt-24 border-t border-dotted border-neutral-950" />

          <p className="mt-5 font-mono text-xs leading-3.5 text-blue-500">
            We&apos;ll review your brand, build 2 sample concepts, and walk you
            through them on a quick call.
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
