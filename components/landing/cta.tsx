import { Button } from "@/components/ui/button"
import { ContactLink } from "@/components/ui/contact-link"
import { ArrowDown } from "lucide-react"

export function Cta() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 py-20 text-center md:pt-36 md:pb-65">
      <h2 className="font-sans text-[52px] leading-[0.9] font-black tracking-[-1.5px] text-primary uppercase md:max-w-187.5 md:text-[96px] md:leading-17">
        STOP LETTING
        <br />
        CREATIVE BE THE
        <br />
        BOTTLENECK.
      </h2>

      <p className="type-heading-4 text-foreground">
        See how Hookana can 3x your creative output in just 48 hours.
      </p>

      <ContactLink>
        <Button size="lg" variant="secondary" className="rounded-md px-8 py-6">
          GET 2 FREE CONCEPTS
          <ArrowDown className="size-4" strokeWidth={2} />
        </Button>
      </ContactLink>
    </div>
  )
}
