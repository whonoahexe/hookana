"use client"

import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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
  return (
    <header className="mt-12 w-full px-6">
      <div className="flex w-full justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-[64px] leading-12 font-black tracking-[-1.5px] text-black"
        >
          HOOKANA
        </Link>

        {/* Desktop nav - 3 columns */}
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

        <Button size="lg" className="rounded-md px-6" variant="destructive">
          GET 2 FREE CONCEPTS
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </header>
  )
}
