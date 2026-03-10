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
          <FadeIn delay={0} direction="none">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              {"Entreprise tous corps d'état"}
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              Un seul partenaire pour tous vos
              <span className="block font-playfair italic text-gold">{" "}travaux</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
              {"Artigold coordonne tous les corps d'État pour vos projets de rénovation et de construction, que vous soyez particulier ou professionnel."}
            </p>
          </FadeIn>
          <FadeIn delay={300}>
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
          </FadeIn>
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
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
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
                      <p className="text-sm text-white/70">Votre maison, notre savoir-faire</p>
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
              <div className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
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
                      <p className="text-sm text-white/70">Expertise structurée, résultats concrets</p>
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

        <FadeIn delay={300}>
          <div className="mt-16 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/30" />
            <p className="text-center text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Artigold</span>
              {" "}— de la conception à la réception de vos travaux
            </p>
            <div className="h-px w-12 bg-gold/30" />
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Stats Banner */}
      <section className="relative border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-16 md:grid-cols-4">
          {[
            { value: "500+", label: "Projets livrés" },
            { value: "10 ans", label: "D'expérience" },
            { value: "4.8/5", label: "Note clients" },
            { value: "98%", label: "Clients satisfaits" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Pourquoi Artigold ? */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Nos engagements
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Pourquoi <span className="font-playfair italic text-gold">Artigold</span> ?
            </h2>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Award,
              title: "Qualité",
              description:
                "Des matériaux et finitions haut de gamme pour chaque projet.",
            },
            {
              icon: Clock,
              title: "Respect des délais",
              description:
                "Un planning rigoureux, des engagements tenus.",
            },
            {
              icon: Eye,
              title: "Transparence",
              description:
                "Devis détaillé, suivi régulier, aucune surprise.",
            },
            {
              icon: Users,
              title: "Coordination TCE",
              description:
                "Un seul interlocuteur pour tous les corps de métier.",
            },
          ].map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold/20">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                  <pillar.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-card-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] px-6 py-24 md:py-32">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/hero-home.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Commencez maintenant
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              {"Prêt à transformer "}
              <span className="font-playfair italic text-gold">votre espace</span> ?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé gratuit sous 48h.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
            >
              Demander un devis gratuit
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
