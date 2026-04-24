import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

function HookanaStepCard({
  title,
  body,
  caption,
  className,
}: {
  title: string
  body: string
  caption: string
  className?: string
}) {
  return (
    <article
      className={`rounded-lg border border-pink-500 px-6 py-6 text-center ${className ?? ""}`}
    >
      <p className="type-heading-3 text-pink-500">{title}</p>
      <p className="type-paragraph-regular mt-3 font-semibold text-primary-foreground">
        {body}
      </p>
      <p className="type-monospaced mt-3 text-primary-foreground/95">
        {caption}
      </p>
    </article>
  )
}

export function HookanaWay() {
  return (
    <section className="mt-40 px-5 pb-20 md:pb-28">
      <div className="mx-auto flex max-w-237.5 flex-col items-center gap-6 text-center">
        <p className="rounded-lg bg-pink-500 px-3 py-3 font-mono text-base leading-6 text-primary-foreground">
          The Hookana Way
        </p>

        <h2 className="font-sans text-[42px] leading-9 font-semibold tracking-[-1.5px] text-primary-foreground md:text-[64px] md:leading-12">
          Closer than an agency.
          <br />
          Faster than a team.
        </h2>

        <Button
          size="lg"
          variant="outline"
          className="h-10 min-w-50 rounded-lg border-neutral-200 bg-transparent px-6 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          Get 2 Free Concepts
          <ArrowUpRight className="size-4" />
        </Button>
      </div>

      <div className="mx-auto mt-24 grid max-w-237.5 gap-4 md:grid-cols-3">
        <HookanaStepCard
          className="md:-rotate-2"
          title="BRIEF IT."
          body="Drop your brief via Slack, Notion, email. We adapt to your tools."
          caption="Day 0"
        />
        <HookanaStepCard
          className="md:rotate-1"
          title="WE BUILD IT."
          body="Our creative team produces ad-ready assets in 48 hours or less."
          caption="24 - 48 hours"
        />
        <HookanaStepCard
          className="md:-rotate-2"
          title="YOU TEST IT."
          body="Launch, measure, iterate. We keep the creative pipeline flowing."
          caption="Ongoing"
        />
      </div>
    </section>
  )
}
