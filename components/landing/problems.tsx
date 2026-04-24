import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Problems() {
  return (
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
  )
}
