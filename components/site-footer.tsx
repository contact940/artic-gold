"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function SiteFooter() {
  const pathname = usePathname()
  const isDark = pathname === "/professionnel"

  return (
    <footer
      className={cn(
        "relative",
        isDark
          ? "bg-[#0a0a0a] text-white"
          : "bg-[#1a1a1a] text-white",
      )}
    >
      {/* Gold divider on top */}
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">

        {/* Separator */}
        <div className="mb-16 border-t border-white/10" />

        {/* Main footer grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo artic.webp"
                alt="Artigold"
                width={100}
                height={80}
                className="rounded-full opacity-90 transition-opacity hover:opacity-100"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              Entreprise tous corps d{"'"}état, Artigold vous accompagne de la
              conception à la réception de vos travaux.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Navigation footer">
              {[
                { href: "/", label: "Accueil" },
                { href: "/particulier", label: "Particuliers" },
                { href: "/professionnel", label: "Professionnels" },
                { href: "/histoire", label: "Histoire" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-gold"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
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
                  className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-gold"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+33123456789"
                className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-gold/10">
                  <Phone className="h-4 w-4 text-gold" />
                </div>
                01 23 45 67 89
              </a>
              <a
                href="mailto:contact@artigold.fr"
                className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-gold/10">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                contact@artigold.fr
              </a>
              <span className="flex items-center gap-3 text-sm text-white/50">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                Paris & Île-de-France
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            {"\u00A9"} {new Date().getFullYear()} Artigold. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <span>Mentions légales</span>
            <span>Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
