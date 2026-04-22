import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight } from "lucide-react"

export default function Page() {
  return (
    <div className="px-5">
      {/* Hero section */}
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
              on-brand, and at scale. Hookana is the creative production engine
              that keeps your pipeline full without blowing your budget or
              burning out your team.
            </p>

            <Button size="lg" className="mt-4 rounded-md" variant="destructive">
              GET 2 FREE CONCEPTS
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Problems section */}
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
  )
}
