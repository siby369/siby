import type { Metadata } from "next"

import { ProjectPreview } from "@/features/portfolio/components/projects/project-preview"
import { Panel, PanelHeader, PanelTitle } from "@/features/portfolio/components/panel"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my projects and work.",
}

export default function Page() {
  return (
    <div className="min-h-svh mx-auto md:max-w-3xl">
      {/* Top patterned stripe */}
      <Separator />

      {/* Page heading */}
      <div className="screen-line-after border-x border-edge px-4 pt-2 pb-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          Projects
        </h1>
      </div>

      {/* Description */}
      <div className="screen-line-after border-x border-edge px-4 py-3">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      {/* Patterned separator before project list */}
      <Separator />

      {/* Projects — one Panel per project */}
      {PROJECTS.map((project, index) => (
        <div key={project.id}>
          <Panel>
            <PanelHeader className="py-2">
              <PanelTitle className="text-xl">{project.title}</PanelTitle>
            </PanelHeader>
            <ProjectPreview project={project} />
          </Panel>
          {index < PROJECTS.length - 1 && <Separator />}
        </div>
      ))}

      {/* Footer */}
      <Separator />
      <div className="border-x border-edge px-4 py-4">
        <div className="rounded-xl border border-dashed p-4">
          <p className="font-mono text-sm text-muted-foreground">
            // More projects on the way…
          </p>
        </div>
      </div>
      <Separator />
    </div>
  )
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  )
}
