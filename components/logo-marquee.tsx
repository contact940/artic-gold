"use client"

import Image from "next/image"
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
  { src: "/images/trust/hyatt.webp", alt: "Hyatt" },
  { src: "/images/trust/macif.webp", alt: "Macif" },
  { src: "/images/trust/l'oreal.webp", alt: "L'Oréal" },
  { src: "/images/trust/attijari.webp", alt: "Attijariwafa Bank" },
  { src: "/images/trust/dps market.webp", alt: "DPS Market" },
  { src: "/images/trust/uac.webp", alt: "UAC" },
]

export function LogoMarquee({ className, variant = "dark" }: LogoMarqueeProps) {
  const logos = variant === "light" ? logosParticulier : logosProfessionnel
  const isDark = variant === "dark"
  const isProfessional = variant === "dark"

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex animate-marquee items-center gap-16">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={`${typeof logo === "string" ? logo : logo.alt}-${i}`}
            className={cn(
              "flex h-24 shrink-0 items-center justify-center rounded-lg px-8",
            )}
          >
            {isProfessional && typeof logo === "object" ? (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="h-16 w-auto object-contain"
              />
            ) : (
              <span
                className={cn(
                  "whitespace-nowrap text-sm font-semibold tracking-wide",
                  isDark ? "text-white/60" : "text-muted-foreground",
                )}
              >
                {typeof logo === "string" ? logo : logo.alt}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
