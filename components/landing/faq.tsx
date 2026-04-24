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
      "Starter delivers first rounds in 48 hours. Growth gets priority queues with faster turnarounds, and Enterprise includes same-day rush support.",
  },
  {
    value: "creative-types",
    question: "What types of creatives do you produce?",
    answer:
      "Static ads, carousels, motion graphics, and short-form video built for Meta, TikTok, Snapchat, and YouTube.",
  },
  {
    value: "revisions",
    question: "Do you offer revisions?",
    answer:
      "Yes. Every plan includes unlimited revisions while your campaigns and testing windows are active.",
  },
  {
    value: "concept-to-variation",
    question: 'What does "concept to variation" mean?',
    answer:
      "We turn one core idea into multiple hooks, angles, and format variants so your team can test faster and scale winners confidently.",
  },
  {
    value: "freelancer-vs-agency",
    question: "How is Hookana different from a freelancer or agency?",
    answer:
      "Hookana runs as a production system, not ad-hoc capacity. You get predictable throughput, platform-native output, and ongoing iteration built for performance teams.",
  },
]

export function Faq() {
  return (
    <section className="mx-auto mt-16.25 w-full max-w-408 pb-30">
      <div className="flex flex-col gap-16 lg:grid lg:grid-cols-[477px_800px] lg:justify-between lg:gap-0">
        <div className="flex max-w-119.25 flex-col gap-15">
          <h2 className="font-sans text-[64px] leading-12 font-semibold tracking-[-1.5px] text-pink-500 md:text-[96px] md:leading-18">
            Got
            <br />
            questions?
          </h2>
          <p className="type-heading-1 text-primary-foreground">Good.</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full rounded-none border-0 bg-transparent lg:w-200"
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
                  <p className="type-paragraph-regular">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>

              <div
                className="mt-5 mb-5 h-px w-full text-pink-500"
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
