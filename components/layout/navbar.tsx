"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navGroups = [
  [
    { label: "Home", href: "/" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Services", href: "#services" },
  ],
  [
    { label: "Pricing", href: "#pricing" },
    { label: "Who it's for", href: "#who-its-for" },
  ],
  [
    { label: "Free check", href: "#free-check" },
    { label: "Contact", href: "#contact" },
  ],
]

const allLinks = navGroups.flat()

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Full static navbar */}
      <header className="mt-12 w-full px-6">
        <div className="flex w-full justify-between">
          <Link
            href="/"
            className="font-sans text-[64px] leading-12 font-black tracking-[-1.5px] text-black"
          >
            HOOKANA
          </Link>

          <nav className="hidden w-full max-w-210 justify-between lg:flex">
            {navGroups.map((group, i) => (
              <div key={i} className="flex flex-col gap-2">
                {group.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="type-heading-4 whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          <Button
            size="lg"
            className="rounded-md px-6"
            variant="destructive"
            asChild
          >
            <Link href="#contact">
              GET 2 FREE CONCEPTS
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Compact floating navbar on scroll */}
      <div
        className={cn(
          "fixed top-5 left-1/2 z-50 -translate-x-1/2 transition-all duration-300",
          scrolled
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <div className="flex items-center gap-4 rounded-full bg-secondary py-3 pr-3 pl-6 shadow-xl">
          <Link
            href="/"
            className="font-sans text-lg leading-none font-black tracking-[-1px] whitespace-nowrap text-white"
          >
            HOOKANA
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Open menu"
              >
                <Menu className="size-4" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-180! border-none bg-secondary p-0"
              showCloseButton={false}
            >
              <div className="flex h-full flex-col">
                {/* Drawer header */}
                <div className="flex items-start justify-between px-14 pt-14 pb-12">
                  <Link
                    href="/"
                    className="font-sans text-[56px] leading-none font-black tracking-[-2px] text-white"
                  >
                    HOOKANA
                  </Link>
                  <SheetClose asChild>
                    <button
                      className="mt-2 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                      aria-label="Close menu"
                    >
                      <X className="size-5" />
                    </button>
                  </SheetClose>
                </div>

                {/* Nav links */}
                <nav className="flex flex-1 flex-col border-t border-white/10 px-14 pt-2">
                  {allLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between border-b border-white/10 py-6 last:border-none"
                      >
                        <span className="type-heading-3 text-white/60 transition-colors group-hover:text-white">
                          {link.label}
                        </span>
                        <ArrowUpRight className="size-5 text-white/20 transition-colors group-hover:text-white/60" />
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* CTA */}
                <div className="px-14 py-12">
                  <SheetClose asChild>
                    <Button
                      size="lg"
                      className="w-full rounded-md"
                      variant="destructive"
                      asChild
                    >
                      <Link href="#contact">
                        GET 2 FREE CONCEPTS
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}
