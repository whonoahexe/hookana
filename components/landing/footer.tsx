import type { FooterContent } from "@/sanity/lib/types"

const FALLBACK: FooterContent = {
  tagline: "CREATIVE PRODUCTION FOR PERFORMANCE MARKETERS WHO REFUSE TO COMPROMISE.",
  socials: [
    { label: "INSTAGRAM", href: "https://instagram.com" },
    { label: "LINKEDIN", href: "https://www.linkedin.com" },
    { label: "TIKTOK", href: "https://www.tiktok.com" },
    { label: "EMAIL US", href: "mailto:hello@hookana.com" },
  ],
  copyright: "© 2026 HOOKANA · ALL RIGHTS RESERVED",
}

export function Footer({ content }: { content: FooterContent | null }) {
  const { tagline, socials, copyright } = content ?? FALLBACK

  return (
    <footer className="type-monospaced flex flex-col items-center justify-center gap-4 py-30 text-primary-foreground uppercase">
      <p className="max-w-122 text-center">{tagline}</p>
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        {socials.map((s, i) => (
          <>
            {i > 0 && <span key={`dot-${i}`} aria-hidden="true">·</span>}
            <a
              key={s.href}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="underline decoration-dotted underline-offset-4"
            >
              {s.label}
            </a>
          </>
        ))}
      </p>
      <p>{copyright}</p>
    </footer>
  )
}
