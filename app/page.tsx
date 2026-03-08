"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Building2, Award, Clock, Eye, Users } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { FadeIn } from "@/components/fade-in"

const pillars = [
  {
    icon: Award,
    title: "Qualite",
    description: "Des materiaux et finitions haut de gamme pour chaque projet.",
  },
  {
    icon: Clock,
    title: "Respect des délais",
    description: "Un planning rigoureux, des engagements tenus.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description: "Devis detaille, suivi regulier, aucune surprise.",
  },
  {
    icon: Users,
    title: "Coordination tous corps d'État",
    description: "Un seul interlocuteur pour tous les corps de metier.",
  },
]

export default function LandingPage() {
  // ── Hero parallax ──────────────────────────────────────────────
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  // Image drifts down relative to section as page scrolls → classic parallax depth
  const heroImageY = useTransform(heroProgress, [0, 1], ["0px", "80px"])
  // Image progressively blurs as the section scrolls off screen
  const heroBlur = useTransform(heroProgress, [0, 0.75], ["blur(0px)", "blur(18px)"])
  // Content fades out and drifts up as hero scrolls off screen
  const heroContentY = useTransform(heroProgress, [0, 0.6], ["0px", "-40px"])
  const heroOpacity = useTransform(heroProgress, [0, 0.55], [1, 0])

  // ── Choice Cards horizontal scroll ────────────────────────────
  // 200vh outer = 100vh sticky + 100vh scroll room → drives 2 slides (track: 200vw, x: 0% → −50%)
  const choiceRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: choiceProgress } = useScroll({
    target: choiceRef,
    offset: ["start start", "end end"],
  })
  const choiceX = useTransform(choiceProgress, [0, 1], ["0%", "-50%"])

  // ── Pillars horizontal scroll ──────────────────────────────────
  // 400vh outer = 100vh sticky + 300vh scroll room → drives 4 slides (track: 400vw, x: 0% → −75%)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: pillarsProgress } = useScroll({
    target: pillarsRef,
    offset: ["start start", "end end"],
  })
  const pillarsX = useTransform(pillarsProgress, [0, 1], ["0%", "-75%"])

  return (
    <>
      {/* ── Hero — Parallax scroll ── */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Oversized image layer: extra bottom absorbs the 80px parallax drift */}
        <motion.div
          className="absolute inset-x-0"
          style={{ top: "-5%", bottom: "-20%", y: heroImageY, filter: heroBlur }}
        >
          <Image
            src="/images/hero-home.jpg"
            alt="Projet de construction Artigold"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-foreground/60" />
        <motion.div
          className="relative z-10 px-6 py-20 text-center"
          style={{ y: heroContentY, opacity: heroOpacity }}
        >
          <FadeIn>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-background md:text-5xl lg:text-6xl">
              Un seul partenaire pour tous vos
              <span className="font-playfair italic leading-tight tracking-tight text-gold">{" "}travaux</span>
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-background/85 md:text-xl">
              Artigold coordonne tous les corps d’État pour vos projets de rénovation et de construction, que vous soyez particulier ou professionnel.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      {/* ── Choice Cards — Desktop: side-by-side grid / Mobile: horizontal scroll ── */}

      {/* DESKTOP (md+): both cards visible at once */}
      <div className="hidden md:block bg-background px-8 py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="mb-10 text-center text-xl font-bold text-foreground md:text-2xl">
              Choisissez votre profil pour découvrir notre accompagnement :
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Particulier */}
            <FadeIn delay={0}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative h-72 overflow-hidden">
                  <Image src="/images/card-particulier.jpg" alt="Rénovation d'intérieur pour particuliers" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="rounded-full bg-gold p-2"><Home className="h-5 w-5 text-primary-foreground" /></div>
                    <span className="text-lg font-semibold text-background">Particulier</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <h2 className="text-xl font-bold text-card-foreground">Je suis un particulier</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">Rénovation intérieure, isolation, amélioration de l{"'"}habitat, projet clé en main. Nous prenons soin de votre projet comme si c{"'"}était le nôtre.</p>
                  <Link href="/particulier" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-dark">{"Découvrir l'accompagnement Particuliers"}<ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </FadeIn>
            {/* Professionnel */}
            <FadeIn delay={150}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative h-72 overflow-hidden">
                  <Image src="/images/card-professionnel.jpg" alt="Projets BTP pour professionnels" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="rounded-full bg-gold p-2"><Building2 className="h-5 w-5 text-primary-foreground" /></div>
                    <span className="text-lg font-semibold text-background">Professionnel</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <h2 className="text-xl font-bold text-card-foreground">Je suis un professionnel</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">Chantier multi-corps d{"'"}État, mise aux normes, bureaux, commerces, industrie. Une expertise structurée au service de vos projets professionnels.</p>
                  <Link href="/professionnel" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/85">{"Découvrir l'accompagnement Professionnels"}<ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={300}>
            <p className="mt-10 text-center text-base leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Artigold</span>{" "}— entreprise tous corps d{"'"}état, de la conception à la réception de vos travaux.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* MOBILE (< md): horizontal scroll one card at a time */}
      <div ref={choiceRef} className="md:hidden relative h-[200vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-background py-10">
          <FadeIn>
            <h2 className="px-6 text-center text-xl font-bold text-foreground">
              Choisissez votre profil pour découvrir notre accompagnement :
            </h2>
          </FadeIn>
          <div className="w-full overflow-hidden">
            <motion.div className="flex w-[200vw]" style={{ x: choiceX }}>
              {/* Slide 1 — Particulier */}
              <div className="flex w-screen items-center justify-center px-6">
                <div className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src="/images/card-particulier.jpg"
                      alt="Rénovation d'intérieur pour particuliers"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="rounded-full bg-gold p-2">
                        <Home className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="text-lg font-semibold text-background">Particulier</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-6">
                    <h2 className="text-xl font-bold text-card-foreground">Je suis un particulier</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Rénovation intérieure, isolation, amélioration de l{"'"}habitat, projet clé en
                      main. Nous prenons soin de votre projet comme si c{"'"}était le nôtre.
                    </p>
                    <Link
                      href="/particulier"
                      className="mt-2 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-dark"
                    >
                      {"Découvrir l'accompagnement Particuliers"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 2 — Professionnel */}
              <div className="flex w-screen items-center justify-center px-6">
                <div className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src="/images/card-professionnel.jpg"
                      alt="Projets BTP pour professionnels"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="rounded-full bg-gold p-2">
                        <Building2 className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="text-lg font-semibold text-background">Professionnel</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-6">
                    <h2 className="text-xl font-bold text-card-foreground">Je suis un professionnel</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Chantier multi-corps d{"'"}État, mise aux normes, bureaux, commerces, industrie.
                      Une expertise structurée au service de vos projets professionnels.
                    </p>
                    <Link
                      href="/professionnel"
                      className="mt-2 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/85"
                    >
                      {"Découvrir l'accompagnement Professionnels"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tagline — mobile only (desktop version is inside the grid above) */}
      <div className="md:hidden bg-background px-6 py-10">
        <p className="text-center text-base leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Artigold</span>
          {" "}— entreprise tous corps d{"'"}état, de la conception à la réception de vos travaux.
        </p>
      </div>

      {/* ── Pourquoi Artigold — Horizontal scroll ── */}
      {/* 400vh outer: 100vh sticky + 300vh scroll room drives the 4-slide track */}
      <div ref={pillarsRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-secondary py-16">
          <FadeIn>
            <div className="px-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Nos engagements
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
                Pourquoi <span className="font-playfair italic text-gold">Artigold</span> ?
              </h2>
            </div>
          </FadeIn>
          <div className="w-full overflow-hidden">
            <motion.div className="flex w-[400vw]" style={{ x: pillarsX }}>
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex w-screen items-center justify-center px-6">
                  <div className="flex w-full max-w-sm flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                      <pillar.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-card-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

