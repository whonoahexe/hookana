import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Cta() {
  return (
    <div className="mx-auto flex max-w-360 flex-col items-center gap-5 px-6 py-20 text-center md:py-28">
      <h2 className="font-sans text-[52px] leading-[0.9] font-semibold tracking-[-1.5px] text-pink-500 uppercase md:max-w-187.5 md:text-[96px] md:leading-17">
        STOP LETTING
        <br />
        CREATIVE BE THE
        <br />
        BOTTLENECK.
      </h2>

      <p className="type-heading-4 max-w-276 text-foreground">
        See how Hookana can 3x your creative output in just 48 hours.
      </p>

      <Button
        size="lg"
        className="mt-1 rounded-lg bg-secondary px-8 text-secondary-foreground hover:bg-secondary/90"
      >
        GET 2 FREE CONCEPTS
        <ArrowDown className="size-4" strokeWidth={2} />
      </Button>
    </div>
  )
}
