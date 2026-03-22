"use client"

import { usePeekSidebar } from "@/hooks/use-peek-sidebar"
import { cn } from "@/lib/utils"

export function PeekSidebarWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen } = usePeekSidebar()

  return (
    <main 
      className={cn(
        "max-w-screen flex-1 px-2 transition-all duration-500 ease-in-out origin-left",
        isOpen ? "lg:-translate-x-[30%] lg:scale-[0.98] lg:opacity-50" : "translate-x-0 scale-100 opacity-100"
      )}
    >
      {children}
    </main>
  )
}
