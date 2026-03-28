"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/particulier", label: "Particuliers" },
  { href: "/professionnel", label: "Professionnels" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [fromParam, setFromParam] = useState<string | null>(null)
  const pathname = usePathname()
  const isDark = pathname === "/professionnel" || (pathname === "/histoire" && fromParam === "professionnel")
  const hasHero = ["/", "/particulier", "/professionnel", "/histoire", "/contact"].some(p => pathname === p || pathname.startsWith(p + "?"))

  useEffect(() => {
    setFromParam(new URLSearchParams(window.location.search).get("from"))
    const onScroll = () => {
      const hero = document.querySelector("section")
      const threshold = hero ? hero.offsetHeight - 80 : window.innerHeight * 0.55
      setScrolled(!hasHero || window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const filteredNavLinks = (() => {
    let links = navLinks.filter((link) => {
      if (pathname.startsWith("/particulier")) return link.href !== "/professionnel"
      if (pathname.startsWith("/professionnel")) return link.href !== "/particulier"
      return true
    })

    if (pathname.startsWith("/particulier")) {
      links = [
        ...links.slice(0, 2),
        { href: "/histoire?from=particulier", label: "Notre histoire" },
        ...links.slice(2),
      ]
    } else if (pathname.startsWith("/professionnel")) {
      links = [
        ...links.slice(0, 2),
        { href: "/histoire?from=professionnel", label: "Notre histoire" },
        ...links.slice(2),
      ]
    }

    return links
  })()

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-header-slide-in",
        scrolled
          ? isDark
            ? "bg-[#111111]/90 backdrop-blur-xl shadow-lg shadow-black/10"
            : "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/50"
          : isDark
            ? "bg-linear-to-b from-black/50 to-transparent"
            : "bg-linear-to-b from-black/30 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-2">
          <div className="transition-transform duration-200 hover:scale-105">
            <Image
              src="/logo artic.webp"
              alt="Artigold"
              width={120}
              height={100}
              className="rounded-full"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navigation principale"
        >
          {filteredNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                pathname === link.href
                  ? scrolled
                    ? isDark ? "text-gold" : "text-gold"
                    : "text-gold"
                  : isDark
                    ? "text-white/80 hover:text-white"
                    : scrolled
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className="absolute inset-0 rounded-full bg-gold/10 transition-opacity duration-200"
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "ml-4 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300",
              !scrolled && !isDark
                ? "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border border-white/20"
                : isDark
                  ? "bg-gold text-primary-foreground hover:bg-gold-dark shadow-lg shadow-gold/20"
                  : "bg-gold text-primary-foreground hover:bg-gold-dark shadow-lg shadow-gold/20",
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            Devis gratuit
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "inline-flex items-center justify-center rounded-full p-2.5 md:hidden transition-colors",
            isDark
              ? "text-white hover:bg-white/10"
              : scrolled
                ? "text-foreground hover:bg-foreground/5"
                : "text-white hover:bg-white/10",
          )}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={cn(
          "grid overflow-hidden border-t md:hidden transition-[grid-template-rows] duration-300 ease-in-out",
          isDark
            ? "border-white/10 bg-[#111111]/60 backdrop-blur-2xl"
            : "border-border/50 bg-white/60 backdrop-blur-2xl",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        aria-label="Navigation mobile"
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-6 pb-6 pt-4">
            {filteredNavLinks.map((link, i) => (
              <div
                key={link.href}
                style={{ animationDelay: `${i * 50}ms` }}
                className={mobileOpen ? "animate-fade-in-left" : ""}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? isDark
                        ? "bg-gold/10 text-gold"
                        : "bg-gold/10 text-gold"
                      : isDark
                        ? "text-white hover:bg-white/5 hover:text-gold"
                        : "text-foreground hover:bg-secondary hover:text-gold",
                  )}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div
              style={{ animationDelay: `${filteredNavLinks.length * 50}ms` }}
              className={mobileOpen ? "animate-fade-in-left" : ""}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-dark"
              >
                <Phone className="h-4 w-4" />
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
