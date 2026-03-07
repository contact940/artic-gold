"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { cn } from "@/lib/utils"

export interface BlogArticle {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  audience: "Particuliers" | "Professionnels"
}

interface BlogFilterProps {
  articles: BlogArticle[]
}

const audiences = ["Tous", "Particuliers", "Professionnels"] as const

export function BlogFilter({ articles }: BlogFilterProps) {
  const [search, setSearch] = useState("")
  const [audience, setAudience] = useState<(typeof audiences)[number]>("Tous")

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesSearch =
        search === "" ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        a.category.toLowerCase().includes(search.toLowerCase())
      const matchesAudience =
        audience === "Tous" || a.audience === audience
      return matchesSearch && matchesAudience
    })
  }, [articles, search, audience])

  return (
    <div>
      {/* Search + Filter bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Rechercher un article..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-input bg-background py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>
        <div className="flex items-center gap-2">
          {audiences.map((a) => (
            <button
              key={a}
              onClick={() => setAudience(a)}
              className={cn(
                "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                audience === a
                  ? "bg-gold text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-14 text-center">
          <p className="text-lg font-semibold text-foreground">
            Aucun article trouvé
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Essayez avec d{"'"}autres mots-clés ou modifiez les filtres.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 80}>
              <Link
                href={`/blog/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span className="rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                      {article.category}
                    </span>
                    <span className="rounded-md bg-gold/90 px-2.5 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                      {article.audience}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-balance text-lg font-bold text-card-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  )
}
