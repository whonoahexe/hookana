import { JetBrains_Mono, Lato } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", lato.variable, fontMono.variable)}
    >
      <body className="bg-pink-300 font-serif overflow-x-hidden">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
