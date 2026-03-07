"use client"

import { cn } from "@/lib/utils"

interface LogoMarqueeProps {
  className?: string
  variant?: "light" | "dark"
}

const logosParticulier = [
  "MaPrimeRénov'",
  "Qualibat",
  "RGE",
  "Engie",
  "EDF",
  "Leroy Merlin",
  "Saint-Gobain",
  "Velux",
]

const logosProfessionnel = [
  "Hyatt",
  "Macif",
  "L'Oréal",
  "Attijariwafa Bank",
  "Bouygues",
  "Vinci",
  "Nexity",
  "Icade",
]

export function LogoMarquee({ className, variant = "dark" }: LogoMarqueeProps) {
  const logos = variant === "light" ? logosParticulier : logosProfessionnel
  const isDark = variant === "dark"

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex animate-marquee items-center gap-12">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className={cn(
              "flex h-12 shrink-0 items-center justify-center rounded-lg border px-8",
              isDark
                ? "border-white/10 bg-white/5"
                : "border-border bg-card shadow-sm",
            )}
          >
            <span
              className={cn(
                "whitespace-nowrap text-sm font-semibold tracking-wide",
                isDark ? "text-white/60" : "text-muted-foreground",
              )}
            >
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
