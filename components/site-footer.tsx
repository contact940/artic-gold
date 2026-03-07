"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Mail, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function SiteFooter() {
  const pathname = usePathname()
  const isDark = pathname === "/professionnel"

  return (
    <footer
      className={cn(
        "border-t",
        isDark
          ? "border-white/10 bg-[#0d0d0d] text-white"
          : "border-border bg-secondary",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className={cn(
                "text-2xl font-bold tracking-tight",
                isDark ? "text-white" : "text-foreground",
              )}
            >
              <div>
                <Image
                  src="/logo artic.webp"
                  alt="Artigold"
                  width={120}
                  height={100}
                  className="rounded-full"
                />

              </div>
            </Link>
            <p
              className={cn(
                "text-sm leading-relaxed",
                isDark ? "text-white/50" : "text-muted-foreground",
              )}
            >
              Entreprise tous corps d{"'"}état, Artigold vous accompagne de la
              conception à la réception de vos travaux.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3
              className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isDark ? "text-white" : "text-foreground",
              )}
            >
              Navigation
            </h3>
            <nav
              className="flex flex-col gap-3"
              aria-label="Navigation footer"
            >
              {[
                { href: "/", label: "Accueil" },
                { href: "/particulier", label: "Particuliers" },
                { href: "/professionnel", label: "Professionnels" },
                { href: "/histoire", label: "Histoire" },
                // { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors",
                    isDark
                      ? "text-white/50 hover:text-white"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3
              className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isDark ? "text-white" : "text-foreground",
              )}
            >
              Services
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Services footer">
              {[
                { href: "/particulier", label: "Rénovation complète" },
                { href: "/particulier", label: "Rénovation énergétique" },
                { href: "/professionnel", label: "Projets professionnels" },
                { href: "/professionnel", label: "Industrie & tertiaire" },
              ].map((link, i) => (
                <Link
                  key={`${link.href}-${i}`}
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors",
                    isDark
                      ? "text-white/50 hover:text-white"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3
              className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isDark ? "text-white" : "text-foreground",
              )}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+33123456789"
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors",
                  isDark
                    ? "text-white/50 hover:text-white"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Phone className="h-4 w-4 text-gold" />
                01 23 45 67 89
              </a>
              <a
                href="mailto:contact@artigold.fr"
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors",
                  isDark
                    ? "text-white/50 hover:text-white"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Mail className="h-4 w-4 text-gold" />
                contact@artigold.fr
              </a>
              <span
                className={cn(
                  "flex items-center gap-2 text-sm",
                  isDark ? "text-white/50" : "text-muted-foreground",
                )}
              >
                <MapPin className="h-4 w-4 text-gold" />
                Paris & Ile-de-France
              </span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-12 border-t pt-8",
            isDark ? "border-white/10" : "border-border",
          )}
        >
          <p
            className={cn(
              "text-center text-xs",
              isDark ? "text-white/30" : "text-muted-foreground",
            )}
          >
            {"\u00A9"} {new Date().getFullYear()} Artigold. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
