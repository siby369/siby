import dynamic from "next/dynamic"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { PeekSidebarWrapper } from "@/components/peek-sidebar-wrapper"

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop)
)

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <SiteHeader />
      <PeekSidebarWrapper>
        {children}
      </PeekSidebarWrapper>
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
