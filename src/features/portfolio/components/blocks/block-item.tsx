"use client"

import {
  LaptopIcon,
  Maximize2Icon,
  MonitorIcon,
  RotateCcwIcon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react"
import React, { useMemo, useState } from "react"

import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/base/ui/tabs"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Index } from "@/__registry__/index"
import { OpenInV0Button } from "@/components/v0-open-button"

export function BlockItem({
  name,
  title,
  description,
  link,
}: {
  name: string
  title: string
  description?: string
  link?: string
}) {
  const [replay, setReplay] = useState(0)

  const Preview = useMemo(() => {
    const Component = Index[name]?.component
    if (!Component) return (
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <p className="text-sm text-center">Preview not available for this project yet.</p>
        {link && (
          <Button variant="link" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">Visit Project Website</a>
          </Button>
        )}
      </div>
    )
    return <Component />
  }, [name, link])

  const sourceCode = useMemo(() => {
    return `import React from "react"
import { cn } from "@/lib/utils"

export default function ${name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}() {        
  return (
    <div className="flex items-center justify-center p-8">
      <h1 className="text-2xl font-bold">${title}</h1>
      <p>${description || ""}</p>
    </div>
  )
}`
  }, [name, title, description])

  return (
    <div className="group/block relative flex flex-col gap-4 py-8">
      <Tabs defaultValue="preview" className="flex flex-col gap-4">
        <div className="flex h-10 items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-4">
            <TabsList className="h-8 p-0.5">
              <TabsTrigger
                value="preview"
                className="h-7 rounded-md px-3 text-xs"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="h-7 rounded-md px-3 text-xs">
                Code
              </TabsTrigger>
              <TabsIndicator />
            </TabsList>

            <span className="hidden truncate text-sm font-medium text-muted-foreground lg:inline-block">        
              {title}
            </span>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 overflow-hidden">
            <div className="hidden items-center gap-1 rounded-lg border bg-muted/50 p-1 xl:flex">
              <div className="flex items-center gap-0.5 border-r pr-1 mr-1">
                <div className="size-2 rounded-full bg-border" />
                <div className="size-2 rounded-full bg-border" />
                <div className="size-2 rounded-full bg-muted-foreground/40" />
              </div>
              <Button variant="ghost" size="icon-xs" className="h-6 w-6">
                <SmartphoneIcon className="size-3.5" />
              </Button>
              <Button variant="ghost" size="icon-xs" className="h-6 w-6">
                <TabletIcon className="size-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                className="h-6 w-6 bg-background shadow-xs"
              >
                <MonitorIcon className="size-3.5" />
              </Button>
              <Button variant="ghost" size="icon-xs" className="h-6 w-6">
                <LaptopIcon className="size-3.5" />
              </Button>
            </div>

            <div className="flex items-center gap-1 rounded-lg border bg-muted/50 p-1">
              <Button variant="ghost" size="icon-xs" className="h-6 w-6">
                <Maximize2Icon className="size-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                className="h-6 w-6"
                onClick={() => setReplay((v) => v + 1)}
              >
                <RotateCcwIcon className="size-3.5" />
              </Button>
            </div>

            <div className="hidden max-w-[240px] items-center gap-2 rounded-lg border bg-muted/50 px-3 py-1 font-mono text-xs sm:flex">
              <span className="text-muted-foreground shrink-0">$</span>
              <span className="truncate">npx shadcn add @siby369/{name}</span>
            </div>

            <OpenInV0Button url={`https://v0.dev/chat/b/new?template=https://siby.com/registry/components/${name}.json`} />
          </div>
        </div>

        <div className="px-4">
          <TabsContent
            value="preview"
            className="relative mt-0 min-h-[450px] overflow-hidden rounded-xl border bg-background"
          >
            <div
              key={replay}
              className="flex h-full min-h-[450px] w-full items-center justify-center p-4"
            >
              <React.Suspense fallback={<div className="text-sm text-muted-foreground animate-pulse">Loading preview...</div>}>
                {Preview}
              </React.Suspense>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-0 overflow-hidden rounded-xl border bg-zinc-950">
            <div className="max-h-[600px] overflow-auto p-4">
               <pre className="font-mono text-xs leading-relaxed text-zinc-400">
                 <code>{sourceCode}</code>
               </pre>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
)
}
