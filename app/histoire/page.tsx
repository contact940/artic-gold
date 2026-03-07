import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Leaf,
  Calendar,
} from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { FadeIn } from "@/components/fade-in"
// --- theme-aware page: receives ?from=particulier or ?from=professionnel ---

export const metadata: Metadata = {
  title: "Notre Histoire et Nos Valeurs | Artigold",
  description:
    "Découvrez l'histoire d'Artigold, entreprise de construction et rénovation tous corps d'état. Nos valeurs : qualité, transparence, efficacité et bien-être.",
}

const milestones = [
  {
    year: "2015",
    title: "Naissance d'Artigold",
    description:
      "Creation de l'entreprise par des professionnels du batiment passionnes. Premiers chantiers de renovation pour des particuliers en Ile-de-France.",
  },
  {
    year: "2017",
    title: "Developpement tous corps d'Etat",
    description:
      "Structuration de l'offre multi-metiers : electricite, plomberie, maconnerie, peinture, second oeuvre. Constitution d'un reseau d'artisans qualifies.",
  },
  {
    year: "2019",
    title: "Premier gros projet professionnel",
    description:
      "Renovation de 1 500 m2 de bureaux en site occupe pour un grand groupe. Debut de l'activite B2B et developpement du pilotage de chantier.",
  },
  {
    year: "2021",
    title: "Structuration & croissance",
    description:
      "Recrutement de chefs de projet, mise en place de processus qualite, partenariats avec des fournisseurs premium. Passage a 40 chantiers par an.",
  },
  {
    year: "2024",
    title: "Vision actuelle",
    description:
      "Accompagnement 360 pour particuliers et professionnels. Projets cle en main, qualite de finition, transparence totale. Plus de 200 projets realises.",
  },
]

const values = [
  {
    icon: Award,
    title: "Qualité",
    description:
      "Des materiaux haut de gamme, des finitions impeccables, un controle rigoureux a chaque etape.",
  },
  {
    icon: Shield,
    title: "Transparence",
    description:
      "Des devis detailles, un suivi regulier, aucune surprise. Vous savez exactement ou en sont vos travaux.",
  },
  {
    icon: Heart,
    title: "Respect des personnes",
    description:
      "Respect des lieux, des voisins, des occupants. Des equipes formees et bienveillantes.",
  },
  {
    icon: Lightbulb,
    title: "Engagement",
    description:
      "Des delais tenus, des promesses respectees. Nous nous engageons sur les resultats, pas seulement sur les moyens.",
  },
]

const stats = [
  { value: "500+", label: "Projets livrés" },
  { value: "10", label: "Années d'expérience" },
  { value: "4.8/5", label: "Note clients" },
  { value: "98%", label: "Clients satisfaits" },
]

export default async function HistoirePage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>
}) {
  const { from } = await searchParams
  const isDark = from === "professionnel"
  const backHref = isDark ? "/professionnel" : "/particulier"
  const backLabel = isDark ? "Retour aux Professionnels" : "Retour aux Particuliers"

  // Theme tokens
  const t = {
    wrapper: isDark ? "bg-[#111111]" : "",
    heading: isDark ? "text-white" : "text-foreground",
    body: isDark ? "text-white/70" : "text-muted-foreground",
    statLabel: isDark ? "text-white/60" : "text-muted-foreground",
    statsBanner: isDark
      ? "border-y border-white/10 bg-[#0d0d0d]"
      : "border-y border-border bg-secondary",
    card: isDark
      ? "border-white/10 bg-white/5 hover:border-gold/30 hover:bg-white/[0.08]"
      : "border-border bg-card hover:shadow-md",
    cardHeading: isDark ? "text-white" : "text-card-foreground",
    cardText: isDark ? "text-white/60" : "text-muted-foreground",
    timelineLine: isDark ? "bg-white/10" : "bg-border",
    timelineDot: isDark ? "border-gold bg-[#111111]" : "border-gold bg-background",
    rseCard: isDark ? "border-white/10 bg-white/5" : "border-border bg-card",
    rseCardHeading: isDark ? "text-white" : "text-card-foreground",
    rseCardText: isDark ? "text-white/60" : "text-muted-foreground",
    sw1: isDark ? ("dark-muted" as const) : ("muted" as const),
    sw2: isDark ? ("dark" as const) : ("default" as const),
    sw3: isDark ? ("dark-muted" as const) : ("muted" as const),
  }

  return (
    <div className={t.wrapper}>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <Image
          src="/images/hero-histoire.jpg"
          alt="Bâtiment emblématique Artigold"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <Link
                href={backHref}
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-background/70 transition-colors hover:text-background"
              >
                ← {backLabel}
              </Link>
              <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-background md:text-5xl lg:text-6xl">
                L{"'"}histoire d{"'"}<span className="font-playfair italic text-gold">Artigold</span>
              </h1>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
                Une entreprise generale du batiment nee du terrain, au service des particuliers et des professionnels.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className={t.statsBanner}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold md:text-4xl">{stat.value}</p>
                <p className={`mt-1 text-sm ${t.statLabel}`}>{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Chronologie */}
      <SectionWrapper variant={t.sw1}>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Frise chronologique
            </p>
            <h2 className={`mt-3 text-balance text-3xl font-bold md:text-4xl ${t.heading}`}>
              Notre{" "}<span className="font-playfair italic text-gold">parcours</span>
            </h2>
          </div>
        </FadeIn>
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className={`absolute left-6 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px ${t.timelineLine}`} />
          <div className="flex flex-col gap-12">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 100}>
                <div
                  className={`relative flex flex-col gap-4 pl-16 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:pl-0 md:text-right" : "md:ml-auto md:pl-12"
                    }`}
                >
                  <div
                    className={`absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${t.timelineDot} md:left-auto ${i % 2 === 0 ? "md:-right-2.5" : "md:-left-2.5"
                      }`}
                  >
                    <div className="h-2 w-2 rounded-full bg-gold" />
                  </div>
                  <div className={`flex items-center gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className={`h-4 w-4 text-gold ${i % 2 !== 0 ? "md:order-first" : ""}`} />
                    <span className="text-sm font-bold text-gold">{m.year}</span>
                  </div>
                  <h3 className={`text-lg font-bold ${t.heading}`}>{m.title}</h3>
                  <p className={`text-sm leading-relaxed ${t.body}`}>{m.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper variant={t.sw2}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Notre philosophie
              </p>
              <h2 className={`mt-3 text-balance text-3xl font-bold md:text-4xl ${t.heading}`}>
                Notre{" "}<span className="font-playfair italic text-gold">vision</span>
              </h2>
              <p className={`mt-6 text-base leading-relaxed ${t.body}`}>
                Apporter de la <span className="font-bold">clarté</span> là où les travaux font peur. Nous démystifions le BTP et rendons chaque étape compréhensible.
              </p>
              <p className={`mt-6 text-base leading-relaxed ${t.body}`}>
                <span className="font-bold">Coordonner simplement</span> des métiers complexes. Électricien, plombier, maçon, peintre... nous orchestrons chaque intervention.
              </p>
              <p className={`mt-6 text-base leading-relaxed ${t.body}`}>
                Être un <span className="font-bold">partenaire de confiance</span> sur la durée. Nos clients reviennent et nous recommandent, c{"'"}est notre plus belle réussite.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-96">
              <Image
                src="/images/team-artigold.jpg"
                alt="Équipe Artigold sur un chantier"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant={t.sw2}>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Ce qui nous guide
            </p>
            <h2 className={`mt-3 text-balance text-3xl font-bold md:text-4xl ${t.heading}`}>
              Nos{" "}<span className="font-playfair italic text-gold">valeurs</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 100}>
              <div className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all ${t.card}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <v.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className={`mt-5 text-lg font-bold ${t.cardHeading}`}>{v.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${t.cardText}`}>{v.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* RSE */}
      <SectionWrapper variant={t.sw3}>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10">
              <Leaf className="h-8 w-8 text-gold" />
            </div>
            <h2 className={`mt-6 text-balance text-3xl font-bold md:text-4xl ${t.heading}`}>
              Engagements RSE
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${t.body}`}>
              Artigold s{"'"}engage pour un BTP plus responsable. Nous
              privilégions les matériaux éco-responsables, réduisons les déchets
              de chantier par le tri sélectif et le recyclage, et veillons au
              bien-être de nos équipes à travers des conditions de travail
              respectueuses et des formations continues.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Leaf,
                  title: "Matériaux responsables",
                  description: "Sélection de fournisseurs certifiés et de matériaux à faible impact environnemental.",
                },
                {
                  icon: Users,
                  title: "Bien-être des équipes",
                  description: "Formations continues, équipements de qualité et respect de l'équilibre vie pro/perso.",
                },
                {
                  icon: Award,
                  title: "Tri & recyclage",
                  description: "Tri systématique des déchets de chantier et partenariats avec des filières de recyclage.",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-2xl border p-6 shadow-sm ${t.rseCard}`}>
                  <item.icon className="h-6 w-6 text-gold" />
                  <h3 className={`mt-3 text-sm font-bold ${t.rseCardHeading}`}>{item.title}</h3>
                  <p className={`mt-2 text-xs leading-relaxed ${t.rseCardText}`}>{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant={t.sw2}>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={`text-balance text-3xl font-bold md:text-4xl ${t.heading}`}>
              Envie de travailler avec <span className="font-playfair italic text-gold">nous</span> ?
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-dark"
            >
              Nous contacter
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  )
}
