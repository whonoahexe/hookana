import type { ContactContent } from "@/sanity/lib/types"
import { ContactFormFields } from "./contact-form-fields"

const FALLBACK: Pick<ContactContent, "heading" | "subtext" | "footerText"> = {
  heading: "Get your\nfirst 2\n concepts\nfree.",
  subtext:
    "No strings. No credit card. Just tell us about your brand and we'll build two ad concepts on the house.",
  footerText:
    "We'll review your brand, build 2 sample concepts, and walk you through them on a quick call.",
}

export function CtaForm({ content }: { content: ContactContent | null }) {
  const c = content ?? FALLBACK
  const headingLines = c.heading.split("\n")

  return (
    <div className="flex w-full justify-center px-5 2xl:px-0">
      <section className="relative -mt-20 w-full max-w-180 bg-card px-6 py-12 2xl:px-19 2xl:py-18">
        <div className="absolute top-0 -right-px h-16 w-16 overflow-hidden bg-blue-50">
          <div
            className="absolute inset-0 bg-muted-foreground"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
          />
        </div>

        <div className="mx-auto">
          <div className="grid gap-6 2xl:grid-cols-[255px_1fr] 2xl:gap-9">
            <h2 className="font-sans text-4xl leading-tight font-semibold tracking-tight text-card-foreground sm:text-[42px] sm:tracking-[-1.5px] 2xl:text-[64px] 2xl:leading-12">
              {headingLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headingLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="type-heading-3 max-w-70.25 text-foreground">
              {c.subtext}
            </p>
          </div>

          <div className="mt-12 border-t border-dotted border-neutral-950 2xl:mt-20" />

          <ContactFormFields />

          <div className="mt-12 border-t border-dotted border-neutral-950 2xl:mt-24" />
          <p className="mt-5 font-mono text-xs leading-3.5 text-blue-500">
            {c.footerText}
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
