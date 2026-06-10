"use client"

import Link from "next/link"
import React, { useState, useEffect } from "react"

import { cn } from "@/lib/utils"
import type { NavItem as NavItemType } from "@/types/nav"

export function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItemType[]
  activeId?: string
  className?: string
}) {
  const [showProjectsPulse, setShowProjectsPulse] = useState(false)

  useEffect(() => {
    if (activeId && activeId.startsWith("/projects")) {
      sessionStorage.setItem("has-seen-projects-nav-tip", "true")
      return
    }

    const hasSeen = sessionStorage.getItem("has-seen-projects-nav-tip")
    if (hasSeen) return

    let scrollTriggered = false
    let timerTriggered = false

    const handleScroll = () => {
      if (window.scrollY > 80) {
        scrollTriggered = true
        checkAndShow()
      }
    }

    const timer = setTimeout(() => {
      timerTriggered = true
      checkAndShow()
    }, 5000)

    const checkAndShow = () => {
      if (scrollTriggered && timerTriggered) {
        setShowProjectsPulse(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeId])

  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ title, href }) => {
        const active =
          activeId === href ||
          (href === "/" // Home page
            ? ["/", "/index"].includes(activeId || "")
            : activeId?.startsWith(href))

        const isProjects = title.toLowerCase() === "projects"

        return (
          <NavItem 
            key={href} 
            href={href} 
            active={active}
            onClick={isProjects ? () => {
              setShowProjectsPulse(false)
              sessionStorage.setItem("has-seen-projects-nav-tip", "true")
            } : undefined}
          >
            <span className="inline-flex items-center gap-1">
              {title}
              {isProjects && showProjectsPulse && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              )}
            </span>
          </NavItem>
        )
      })}
    </nav>
  )
}

export function NavItem({
  active,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean
}) {
  return (
    <Link
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-[color] hover:text-foreground",
        active && "text-foreground"
      )}
      {...props}
    />
  )
}
