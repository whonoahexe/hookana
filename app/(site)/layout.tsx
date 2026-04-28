import { Navbar } from "@/components/layout/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { client } from "@/sanity/lib/client"
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries"
import type { SiteSettings } from "@/sanity/lib/types"

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings: SiteSettings | null = await client.fetch(SITE_SETTINGS_QUERY)

  return (
    <ThemeProvider>
      <Navbar content={settings?.navbar ?? null} />
      {children}
    </ThemeProvider>
  )
}
