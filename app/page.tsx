import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Building2, Award, Clock, Eye, Users } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { FadeIn } from "@/components/fade-in"

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-home.jpg"
          alt="Projet de construction Artigold"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 px-6 py-20 text-center">
          <FadeIn>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-background md:text-5xl lg:text-6xl">
              Un seul partenaire pour tous vos
              <span className="font-playfair italic leading-tight tracking-tight text-gold">{" "}travaux</span>
              {/* <span className="font-playfair italic leading-tight tracking-tight text-gold">rénover</span> */}
              {/* {" ?"} */}
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-background/85 md:text-xl">
              Artigold coordonne tous les corps d’État pour vos projets de rénovation et de construction, que vous soyez particulier ou professionnel.
            </p>
          </FadeIn>
        </div>
      </section>
      {/* Choice Cards */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <h2 className="mb-10 text-balance text-xl font-bold text-foreground md:text-2xl">
              Choisissez votre profil pour découvrir notre accompagnement :
            </h2>
          </div>
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Particulier Card */}
          <FadeIn delay={0}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
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
                  <span className="text-lg font-semibold text-background">
                    Particulier
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <h2 className="text-xl font-bold text-card-foreground">
                  Je suis un particulier
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Rénovation intérieure, isolation, amélioration de
                  l{"'"}habitat, projet clé en main. Nous prenons soin de votre
                  projet comme si c{"'"}était le nôtre.
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
          </FadeIn>

          {/* Professionnel Card */}
          <FadeIn delay={150}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
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
                  <span className="text-lg font-semibold text-background">
                    Professionnel
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <h2 className="text-xl font-bold text-card-foreground">
                  Je suis un professionnel
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Chantier multi-corps d{"'"}État, mise aux normes, bureaux,
                  commerces, industrie. Une expertise structurée au service de
                  vos projets professionnels.
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
          </FadeIn>
        </div>

        {/* Tagline */}
        <FadeIn delay={300}>
          <p className="mt-12 text-center text-base leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Artigold</span>
            {" "}— entreprise tous corps d{"'"}état, de la conception à la
            réception de vos travaux.
          </p>
        </FadeIn>
      </SectionWrapper>

      {/* Pourquoi Artigold ? */}
      <SectionWrapper variant="muted">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Nos engagements
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Pourquoi <span className="font-playfair italic text-gold">Artigold</span> ?
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Award,
              title: "Qualite",
              description:
                "Des materiaux et finitions haut de gamme pour chaque projet.",
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
                "Devis detaille, suivi regulier, aucune surprise.",
            },
            {
              icon: Users,
              title: "Coordination tous corps d'État",
              description:
                "Un seul interlocuteur pour tous les corps de metier.",
            },
          ].map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <pillar.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-card-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        {/* <FadeIn delay={400}>
          <div className="mt-10 text-center">
            <Link
              href="/histoire"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
            >
              {"Découvrir notre histoire"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn> */}
      </SectionWrapper>
    </>
  )
}
