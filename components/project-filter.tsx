"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { MapPin, Calendar } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { cn } from "@/lib/utils"

export interface Project {
  title: string
  image: string
  client: "Particulier" | "Professionnel"
  ville: string
  annee: string
  description: string
  avant?: string
  apres?: string
}

interface ProjectFilterProps {
  projects: Project[]
}

const filters = ["Tous", "Particulier", "Professionnel"] as const

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tous")

  const filtered = useMemo(() => {
    if (filter === "Tous") return projects
    return projects.filter((p) => p.client === filter)
  }, [projects, filter])

  return (
    <div>
      {/* Filter bar */}
      <div className="flex items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-lg px-5 py-2.5 text-sm font-medium transition-colors",
              filter === f
                ? "bg-gold text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            {f === "Tous" ? "Tous les projets" : f === "Particulier" ? "Particuliers" : "Professionnels"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <FadeIn key={project.title} delay={i * 80}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3">
                  <span
                    className={cn(
                      "rounded-md px-2.5 py-1 text-xs font-semibold backdrop-blur-sm",
                      project.client === "Particulier"
                        ? "bg-gold/90 text-primary-foreground"
                        : "bg-foreground/80 text-background",
                    )}
                  >
                    {project.client}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-card-foreground">
                  {project.title}
                </h3>
                <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {project.ville}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.annee}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {project.avant && project.apres && (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border bg-secondary p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Avant
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-foreground">
                        {project.avant}
                      </p>
                    </div>
                    <div className="rounded-lg border border-gold/20 bg-gold/5 p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                        {"Apr\u00e8s"}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-foreground">
                        {project.apres}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
