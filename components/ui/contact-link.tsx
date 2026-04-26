"use client"

import Link from "next/link"

export function ContactLink({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href="#contact"
      className={className}
      onClick={(e) => {
        e.preventDefault()
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }}
    >
      {children}
    </Link>
  )
}
