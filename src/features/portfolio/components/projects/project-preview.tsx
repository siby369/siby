"use client"

import { ExternalLinkIcon, MonitorIcon, RotateCwIcon, SmartphoneIcon, TabletIcon } from "lucide-react"
import React, { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/base/ui/tooltip"
import { Tabs, TabsList, TabsTrigger } from "@/components/base/ui/tabs"
import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"
import { cn } from "@/lib/utils"

import type { Project } from "../../types/projects"

export function ProjectPreview({ project }: { project: Project }) {
  const [device, setDevice] = useState<string>("desktop")
  const iframeRef = useRef<HTMLIFrameElement>(null)
  
  const [iframeKey, setIframeKey] = useState(0)

  const projectUrl = addQueryParams(project.link, UTM_PARAMS)
  const externalLink = project.link !== "#" ? projectUrl : (project.repo || "#")

  const handleRefresh = () => {
    setIframeKey((v) => v + 1)
  }

  const deviceWidths: Record<string, string> = {
    mobile: "375px",
    tablet: "768px",
    desktop: "100%"
  }

  return (
    <div className="flex min-w-0 scroll-mt-14 flex-col-reverse items-stretch gap-2 p-2 md:flex-col lg:pr-0">
      <Tabs value="preview" className="w-full">
        <div className="flex w-full items-center gap-2 px-2 max-lg:hidden">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <Separator orientation="vertical" className="mx-2 h-4 data-vertical:self-center" />

          <a href={externalLink} target="_blank" rel="noopener" className="line-clamp-1 text-sm font-medium underline-offset-4 hover:underline">
            {project.title}
          </a>

          <div className="ml-auto flex items-center gap-2">
            <div className="flex h-8 items-center gap-0.75 rounded-lg border p-0.75">
              <ToggleGroup 
                type="single" 
                value={device} 
                onValueChange={(val) => val && setDevice(val)}
                className="gap-0.75 *:data-[slot=toggle-group-item]:h-6 *:data-[slot=toggle-group-item]:min-w-6 *:data-[slot=toggle-group-item]:rounded-sm! *:data-[slot=toggle-group-item]:px-0"
              >
                <Tooltip>
                  <TooltipTrigger render={
                    <ToggleGroupItem aria-label="Mobile" value="mobile">
                      <SmartphoneIcon className="size-3.5" />
                    </ToggleGroupItem>
                  } />
                  <TooltipContent><p>Mobile View</p></TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger render={
                    <ToggleGroupItem aria-label="Tablet" value="tablet">
                      <TabletIcon className="size-3.5" />
                    </ToggleGroupItem>
                  } />
                  <TooltipContent><p>Tablet View</p></TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger render={
                    <ToggleGroupItem aria-label="Desktop" value="desktop">
                      <MonitorIcon className="size-3.5" />
                    </ToggleGroupItem>
                  } />
                  <TooltipContent><p>Desktop View</p></TooltipContent>
                </Tooltip>
              </ToggleGroup>

              <Separator orientation="vertical" className="data-vertical:h-4 data-vertical:self-center mx-1" />

              <Tooltip>
                <TooltipTrigger render={
                  <Button 
                    variant="ghost" 
                    size="icon-xs" 
                    onClick={handleRefresh}
                    className="rounded-sm border-none dark:hover:bg-muted size-7"
                  >
                    <RotateCwIcon className="size-3.5" />
                    <span className="sr-only">Refresh Preview</span>
                  </Button>
                } />
                <TooltipContent><p>Refresh Preview</p></TooltipContent>
              </Tooltip>
            </div>

            <Separator orientation="vertical" className="mx-2 data-vertical:h-4 data-vertical:self-center" />

            <Button variant="outline" size="sm" className="w-fit gap-1.5 px-2 font-mono text-[0.8125rem] shadow-none [&_svg]:text-muted-foreground" asChild>
              <a href={externalLink} target="_blank" rel="noopener">
                <ExternalLinkIcon className="size-3.5" />
                Visit
              </a>
            </Button>
          </div>
        </div>

        <div className="screen-line-top h-px max-lg:hidden mt-2" />

        <div className="flex h-[768px] flex-none max-lg:hidden w-full mt-2">
          <div className="relative w-full">
            <div className="absolute inset-0 right-2 rounded-xl bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5" />
            
            <div className="relative overflow-hidden rounded-xl after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:ring-1 after:ring-foreground/10 after:ring-inset w-full h-full flex justify-center">
              {project.link !== "#" ? (
                <div 
                  className="h-full shadow-2xl transition-all duration-500 ease-in-out bg-background"
                  style={{ width: deviceWidths[device] }}
                >
                  <iframe
                    key={iframeKey}
                    ref={iframeRef}
                    src={projectUrl}
                    className="no-scrollbar h-full w-full border-none"
                    title={project.title}
                    loading="lazy"
                  />
                </div>
              ) : project.previewImage ? (
                <div 
                  className="h-full shadow-2xl transition-all duration-500 ease-in-out bg-zinc-950 flex items-center justify-center border"
                  style={{ width: deviceWidths[device] }}
                >
                  <img 
                    src={project.previewImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-left-top" 
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center p-12 text-center flex-col gap-4 bg-background z-10">
                  <div className="size-20 rounded-2xl bg-muted flex items-center justify-center border">
                    <span className="text-4xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">No Live Preview Available</h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      This project doesn't have a live URL configured yet.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile View Header */}
        <div className="flex flex-col gap-2 lg:hidden mt-2">
          <div className="flex items-center gap-2 px-2">
            <div className="line-clamp-2 text-sm font-medium text-balance">
              {project.title}
            </div>
            <div className="ml-auto shrink-0 font-mono text-sm text-muted-foreground">
              {project.id}
            </div>
          </div>
          <div className="screen-line-top h-px" />
          <div className="relative overflow-hidden rounded-xl border h-[600px]">
            {project.link !== "#" ? (
              <iframe
                key={iframeKey}
                ref={iframeRef}
                src={projectUrl}
                className="no-scrollbar h-full w-full border-none"
                title={project.title}
                loading="lazy"
              />
            ) : project.previewImage ? (
              <img 
                src={project.previewImage} 
                alt={project.title} 
                className="w-full h-full object-cover object-left-top" 
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center p-8 text-center flex-col gap-4 bg-background">
                <span className="text-4xl">🏗️</span>
                <p className="text-muted-foreground text-sm">No Live Preview Available</p>
              </div>
            )}
          </div>
        </div>
      </Tabs>
    </div>
  )
}
