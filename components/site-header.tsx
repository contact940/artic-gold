"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
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
  // Pages that start with a full-screen hero — all other pages use solid header
  const hasHero = ["/", "/particulier", "/professionnel", "/histoire"].some(p => pathname === p || pathname.startsWith(p + "?"))

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

  // Reset mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // hide the other section link when on a specific page, and inject Histoire link
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? isDark
            ? "bg-[#111111]/95 backdrop-blur-sm shadow-sm"
            : "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
          : isDark
            ? "bg-linear-to-b from-gray-900 to-transparent"
            : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {filteredNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === link.href
                  ? scrolled || isDark ? "text-gold" : "text-gold underline-offset-4"
                  : isDark
                    ? "text-white hover:text-gold"
                    : scrolled
                      ? "text-foreground hover:text-gold"
                      : "text-white hover:text-gold",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors",
              !scrolled && !isDark
                ? "bg-white text-gold hover:bg-white/90"
                : "bg-gold text-primary-foreground hover:bg-gold-dark",
            )}
          >
            <Phone className="h-4 w-4" />
            Nous contacter
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "inline-flex items-center justify-center rounded-md p-2 md:hidden",
            isDark
              ? "text-white"
              : scrolled
                ? "text-foreground"
                : "text-white",
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
      {mobileOpen && (
        <nav
          className={cn(
            "border-t px-6 pb-6 pt-4 md:hidden",
            isDark
              ? "border-white/10 bg-[#111111]"
              : "border-border bg-background",
          )}
          aria-label="Navigation mobile"
        >
          <div className="flex flex-col gap-4">
            {filteredNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-gold"
                    : isDark
                      ? "text-white hover:text-gold"
                      : "text-foreground hover:text-gold",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-dark"
            >
              <Phone className="h-4 w-4" />
              Nous contacter
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
