export function Footer() {
  return (
    <footer className="type-monospaced flex flex-col items-center justify-center gap-4 py-30 text-primary-foreground uppercase">
      <p className="max-w-122 text-center">
        CREATIVE PRODUCTION FOR PERFORMANCE MARKETERS WHO REFUSE TO COMPROMISE.
      </p>
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-dotted underline-offset-4"
        >
          INSTAGRAM
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-dotted underline-offset-4"
        >
          LINKEDIN
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-dotted underline-offset-4"
        >
          TIKTOK
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="mailto:hello@hookana.com"
          className="underline decoration-dotted underline-offset-4"
        >
          EMAIL US
        </a>
      </p>
      <p>© 2026 HOOKANA · ALL RIGHTS RESERVED</p>
    </footer>
  )
}
