"use client"

import { BoxIcon, InfinityIcon, LinkIcon, ExternalLinkIcon, Maximize2Icon } from "lucide-react"
import Image from "next/image"
import React from "react"

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Markdown } from "@/components/markdown"
import { Tag } from "@/components/ui/tag"
import { ProseMono } from "@/components/ui/typography"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { usePeekSidebar } from "@/hooks/use-peek-sidebar"
import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { Project } from "../../types/projects"

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const { start, end } = project.period
  const isOngoing = !end
  const isSinglePeriod = end === start
  const { setIsOpen } = usePeekSidebar()

  const projectUrl = addQueryParams(project.link, UTM_PARAMS)

  return (
    <Sheet onOpenChange={setIsOpen}>
      <Collapsible className={className} defaultOpen={project.isExpanded}>
        <div className="flex items-center hover:bg-accent-muted group/item">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex size-6 shrink-0 select-none dark:grayscale"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <BoxIcon className="size-4" />
            </div>
          )}

          <div className="flex-1 border-l border-dashed border-edge">
            <div className="flex w-full items-center">
              <CollapsibleTrigger className="flex-1 items-center gap-2 p-4 pr-2 text-left">
                <div className="flex-1">
                  <h3 className="mb-1 leading-snug font-medium text-balance">
                    {project.title}
                  </h3>

                  <dl className="text-sm text-muted-foreground">
                    <dt className="sr-only">Period</dt>
                    <dd className="flex items-center gap-0.5">
                      <span>{start}</span>
                      {!isSinglePeriod && (
                        <>
                          <span className="font-mono">—</span>
                          {isOngoing ? (
                            <>
                              <InfinityIcon
                                className="size-4.5 translate-y-[0.5px]"
                                aria-hidden
                              />
                              <span className="sr-only">Present</span>
                            </>
                          ) : (
                            <span>{end}</span>
                          )}
                        </>
                      )}
                    </dd>
                  </dl>
                </div>
              </CollapsibleTrigger>

              <div className="flex items-center gap-1 pr-4">
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-muted-foreground hover:text-foreground opacity-0 group-hover/item:opacity-100 transition-opacity"
                  >
                    <Maximize2Icon className="size-4" />
                    <span className="sr-only">Peek Project</span>
                  </Button>
                </SheetTrigger>

                <Tooltip>
                  <TooltipTrigger
                    render={
                      <a
                        className="relative flex size-8 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground"
                        href={projectUrl}
                        target="_blank"
                        rel="noopener"
                      >
                        <LinkIcon className="pointer-events-none size-4" />
                        <span className="sr-only">Open Project Link</span>
                      </a>
                    }
                  />
                  <TooltipContent>
                    <p>Open Project Link</p>
                  </TooltipContent>
                </Tooltip>

                <CollapsibleTrigger className="p-2 text-muted-foreground [&_svg]:size-4" aria-hidden>
                  <CollapsibleChevronsIcon duration={0.15} />
                </CollapsibleTrigger>
              </div>
            </div>
          </div>
        </div>

        <CollapsibleContent className="overflow-hidden">
          <div className="space-y-4 border-t border-edge p-4">
            {project.description && (
              <ProseMono>
                <Markdown>{project.description}</Markdown>
              </ProseMono>
            )}

            {project.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, index) => (
                  <li key={index} className="flex">
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <SheetContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div className="flex items-center gap-3">
              {project.logo && (
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={24}
                  height={24}
                  className="size-6 rounded-sm select-none"
                  unoptimized
                />
              )}
              <h2 className="text-xl font-semibold">{project.title}</h2>
            </div>
            <div className="flex items-center gap-2 mr-8">
              <Button variant="outline" size="sm" asChild>
                <a href={projectUrl} target="_blank" rel="noopener">
                  <ExternalLinkIcon className="mr-2 size-4" />
                  Visit Website
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 bg-zinc-100 dark:bg-zinc-900/50 relative overflow-hidden">
            {project.link !== "#" ? (
              <iframe
                src={projectUrl}
                className="h-full w-full border-none"
                title={project.title}
              />
            ) : (
              <div className="flex h-full items-center justify-center p-12 text-center flex-col gap-4">
                <div className="size-20 rounded-2xl bg-muted flex items-center justify-center border">
                   <BoxIcon className="size-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">No Live Preview Available</h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    This project doesn't have a live URL configured yet. You can check the details in the portfolio list.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

