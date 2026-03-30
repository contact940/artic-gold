import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Building2, Award, Clock, Eye, Users, ArrowUpRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { FadeIn } from "@/components/fade-in"

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-home.jpg"
          alt="Projet de construction Artigold"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />

        <div className="relative z-10 px-6 py-20 text-center">
          <FadeIn delay={100}>
            <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              Un seul partenaire pour tous vos
              <span className="block font-playfair italic text-gold">{" "}travaux</span>
            </h1>
          </FadeIn>
          {/* <FadeIn delay={300}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/particulier"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
              >
                Découvrir nos services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                Devis gratuit
              </Link>
            </div>
          </FadeIn> */}
        </div>

        <FadeIn delay={600} direction="none" className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-white/40">Défiler</span>
            <div className="h-12 w-px bg-linear-to-b from-white/40 to-transparent" />
          </div>
        </FadeIn>
      </section>

      {/* Choice Cards */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Votre profil
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Choisissez votre{" "}
              <span className="font-playfair italic text-gold">accompagnement</span>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <FadeIn delay={0}>
            <Link href="/particulier" className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src="/images/card-particulier.jpg"
                    alt="Rénovation pour particuliers"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/90 backdrop-blur-sm">
                      <Home className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-white">Particulier</span>
                    </div>
                  </div>
                </div>
                <div className="relative p-8">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {"Rénovation intérieure, isolation, amélioration de l'habitat, projet clé en main. Nous prenons soin de votre projet comme si c'était le nôtre."}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold transition-all duration-300 group-hover:gap-3">
                    {"Découvrir l'accompagnement"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={150}>
            <Link href="/professionnel" className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src="/images/card-professionnel.jpg"
                    alt="Projets BTP pour professionnels"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-white">Professionnel</span>
                    </div>
                  </div>
                </div>
                <div className="relative p-8">
                  <p className="text-sm leading-relaxed text-white/60">
                    {"Chantier multi-corps d'État, mise aux normes, bureaux, commerces, industrie. Une expertise structurée au service de vos projets professionnels."}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold transition-all duration-300 group-hover:gap-3">
                    {"Découvrir l'accompagnement"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  )
}
