import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FaqItem = {
  value: string
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    value: "delivery-speed",
    question: "How fast can you deliver?",
    answer:
      "Most projects ship within 48 hours. Rush delivery (same-day) is available on Growth and Enterprise plans.",
  },
  {
    value: "creative-types",
    question: "What types of creatives do you produce?",
    answer:
      "Static ads, video ads, carousel ads, UGC-style edits, motion graphics, creative concepts, and ad iterations. If it runs on Meta, TikTok, Snapchat, or YouTube, we make it.",
  },
  {
    value: "revisions",
    question: "Do you offer revisions?",
    answer:
      "Unlimited revisions on all plans. First-draft approval rate sits above 85%.",
  },
  {
    value: "concept-to-variation",
    question: 'What does "concept to variation" mean?',
    answer:
      "A concept is a fresh creative idea with its own angle, hook, and visual approach. A variation is a spin on a winning concept: different headline, different opening frame, different CTA, or different pacing. We build the original concept, test it, and when it performs, we rapidly produce 3-5 variations to extend its lifespan before fatigue sets in. That's concept to variation, and it's how the best performance teams keep ROAS stable week after week.",
  },
  {
    value: "freelancer-vs-agency",
    question: "How is Hookana different from a freelancer or agency?",
    answer:
      "Freelancers are unpredictable. Agencies are slow and expensive. Hookana gives you dedicated creative production at agency quality, at a fraction of the cost, and we actually hit deadlines.",
  },
]

export function Faq() {
  return (
    <section className="mx-auto w-full px-5 py-52 md:px-36">
      <div className="flex flex-col gap-16 lg:grid lg:grid-cols-[500px_800px] lg:justify-between lg:gap-0">
        <div className="flex flex-col gap-15">
          <h2 className="font-sans text-[64px] leading-12 font-semibold tracking-[-1.5px] text-primary md:text-[96px] md:leading-18">
            Got
            <br />
            questions?
          </h2>
          <p className="font-sans text-[64px] leading-12 font-semibold tracking-[-1.5px] text-secondary-foreground md:text-[96px] md:leading-18">
            Good.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full rounded-none border-0 bg-transparent"
        >
          {FAQ_ITEMS.map((item) => (
            <div key={item.value} className="w-full">
              <AccordionItem
                value={item.value}
                className="border-0 not-last:border-b-0 data-open:bg-transparent"
              >
                <AccordionTrigger className="type-heading-2 px-0 py-4 text-pink-100 hover:no-underline **:data-[slot=accordion-trigger-icon]:text-pink-100">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-0 pt-1 pb-0 text-pink-50/90">
                  <p className="type-monospaced">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>

              <div
                className="mt-5 mb-5 h-px w-full text-primary"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, currentColor 0, currentColor 2px, transparent 2px, transparent 4px)",
                }}
              />
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
