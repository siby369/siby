import type { Metadata } from "next"
import { Fragment } from "react"

import { ProjectPreview } from "@/features/portfolio/components/projects/project-preview"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my projects and work.",
}

export default function Page() {
  return (
    <div className="min-h-svh">
      <div className="relative screen-line-bottom h-8 before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-line)]/56"></div>
      
      <div className="screen-line-bottom px-4 pt-2 pb-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          Projects
        </h1>
      </div>

      <div className="screen-line-bottom p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="screen-line-top screen-line-bottom">
        <div className="relative h-8 before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-line)]/56"></div>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <Fragment key={project.id}>
            {index > 0 && <Separator />}
            <ProjectPreview project={project} />
          </Fragment>
        ))}
      </div>

      <div className="screen-line-top p-2">
        <div className="rounded-xl border border-dashed p-4">
          <p className="font-mono text-sm text-muted-foreground">
            // More projects on the way…
          </p>
        </div>
      </div>
    </div>
  )
}

function Separator() {
  return (
    <div className="h-8 px-2 screen-line-after before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"></div>
  )
}
