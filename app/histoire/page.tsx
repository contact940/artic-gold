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

export const metadata: Metadata = {
  title: "Notre Histoire et Nos Valeurs | Artigold",
  description:
    "D\u00e9couvrez l\u2019histoire d\u2019Artigold, entreprise de construction et r\u00e9novation tous corps d\u2019\u00e9tat. Nos valeurs : qualit\u00e9, transparence, efficacit\u00e9 et bien-\u00eatre.",
}

const milestones = [
  {
    year: "2015",
    title: "Naissance d\u2019Artigold",
    description:
      "Cr\u00e9ation de l\u2019entreprise par des professionnels du b\u00e2timent passionn\u00e9s. Premiers chantiers de r\u00e9novation pour des particuliers en \u00cele-de-France.",
  },
  {
    year: "2017",
    title: "D\u00e9veloppement tous corps d\u2019\u00c9tat",
    description:
      "Structuration de l\u2019offre multi-m\u00e9tiers : \u00e9lectricit\u00e9, plomberie, ma\u00e7onnerie, peinture, second \u0153uvre. Constitution d\u2019un r\u00e9seau d\u2019artisans qualifi\u00e9s.",
  },
  {
    year: "2019",
    title: "Premier gros projet professionnel",
    description:
      "R\u00e9novation de 1 500 m\u00b2 de bureaux en site occup\u00e9 pour un grand groupe. D\u00e9but de l\u2019activit\u00e9 B2B et d\u00e9veloppement du pilotage de chantier.",
  },
  {
    year: "2021",
    title: "Structuration & croissance",
    description:
      "Recrutement de chefs de projet, mise en place de processus qualit\u00e9, partenariats avec des fournisseurs premium. Passage \u00e0 40 chantiers par an.",
  },
  {
    year: "2024",
    title: "Vision actuelle",
    description:
      "Accompagnement 360 pour particuliers et professionnels. Projets cl\u00e9 en main, qualit\u00e9 de finition, transparence totale. Plus de 200 projets r\u00e9alis\u00e9s.",
  },
]

const values = [
  {
    icon: Award,
    title: "Qualit\u00e9",
    description:
      "Des mat\u00e9riaux haut de gamme, des finitions impeccables, un contr\u00f4le rigoureux \u00e0 chaque \u00e9tape.",
  },
  {
    icon: Shield,
    title: "Transparence",
    description:
      "Des devis d\u00e9taill\u00e9s, un suivi r\u00e9gulier, aucune surprise. Vous savez exactement o\u00f9 en sont vos travaux.",
  },
  {
    icon: Heart,
    title: "Respect des personnes",
    description:
      "Respect des lieux, des voisins, des occupants. Des \u00e9quipes form\u00e9es et bienveillantes.",
  },
  {
    icon: Lightbulb,
    title: "Engagement",
    description:
      "Des d\u00e9lais tenus, des promesses respect\u00e9es. Nous nous engageons sur les r\u00e9sultats, pas seulement sur les moyens.",
  },
]

const stats = [
  { value: "500+", label: "Projets livr\u00e9s" },
  { value: "10", label: "Ann\u00e9es d\u2019exp\u00e9rience" },
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
  const backLabel = isDark
    ? "Retour aux Professionnels"
    : "Retour aux Particuliers"

  const t = {
    wrapper: isDark ? "bg-[#111111]" : "",
    heading: isDark ? "text-white" : "text-foreground",
    body: isDark ? "text-white/70" : "text-muted-foreground",
    statLabel: isDark ? "text-white/60" : "text-muted-foreground",
    statsBanner: isDark
      ? "border-y border-white/10 bg-[#0d0d0d]"
      : "border-y border-border bg-secondary",
    card: isDark
      ? "border-white/10 bg-white/5 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-gold/5"
      : "border-border bg-card hover:-translate-y-1 hover:shadow-xl hover:border-gold/20",
    cardHeading: isDark ? "text-white" : "text-card-foreground",
    cardText: isDark ? "text-white/60" : "text-muted-foreground",
    timelineLine: isDark ? "bg-white/10" : "bg-border",
    timelineDot: isDark
      ? "border-gold bg-[#111111]"
      : "border-gold bg-background",
    rseCard: isDark
      ? "border-white/10 bg-white/5 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg"
      : "border-border bg-card hover:-translate-y-1 hover:shadow-lg hover:border-gold/20",
    rseCardHeading: isDark ? "text-white" : "text-card-foreground",
    rseCardText: isDark ? "text-white/60" : "text-muted-foreground",
    sw1: isDark ? ("dark-muted" as const) : ("muted" as const),
    sw2: isDark ? ("dark" as const) : ("default" as const),
    sw3: isDark ? ("dark-muted" as const) : ("muted" as const),
    ctaBg: isDark ? "bg-[#0a0a0a]" : "bg-[#1a1a1a]",
  }

  return (
    <div className={t.wrapper}>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <Image
          src="/images/hero-histoire.jpg"
          alt="B\u00e2timent embl\u00e9matique Artigold"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
        <div className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <Link
                href={backHref}
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <span className="mr-2">&larr;</span> {backLabel}
              </Link>
              <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                {"L\u2019histoire d\u2019"}
                <span className="font-playfair italic text-gold">
                  Artigold
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
                {"Une entreprise g\u00e9n\u00e9rale du b\u00e2timent n\u00e9e du terrain, au service des particuliers et des professionnels."}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className={t.statsBanner}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-14 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold md:text-4xl">
                  {stat.value}
                </p>
                <p className={`mt-1 text-sm ${t.statLabel}`}>{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <SectionWrapper variant={t.sw1}>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Frise chronologique
            </p>
            <h2
              className={`mt-4 text-balance text-3xl font-bold md:text-4xl ${t.heading}`}
            >
              Notre{" "}
              <span className="font-playfair italic text-gold">parcours</span>
            </h2>
          </div>
        </FadeIn>
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            className={`absolute left-6 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px ${t.timelineLine}`}
          />
          <div className="flex flex-col gap-12">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 100}>
                <div
                  className={`relative flex flex-col gap-4 pl-16 md:w-1/2 ${i % 2 === 0
                    ? "md:pr-12 md:pl-0 md:text-right"
                    : "md:ml-auto md:pl-12"
                    }`}
                >
                  <div
                    className={`absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${t.timelineDot} md:left-auto ${i % 2 === 0 ? "md:-right-2.5" : "md:-left-2.5"
                      }`}
                  >
                    <div className="h-2 w-2 rounded-full bg-gold" />
                  </div>
                  <div
                    className={`flex items-center gap-2 ${i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                  >
                    <Calendar
                      className={`h-4 w-4 text-gold ${i % 2 !== 0 ? "md:order-first" : ""
                        }`}
                    />
                    <span className="text-sm font-bold text-gold">
                      {m.year}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold ${t.heading}`}>
                    {m.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${t.body}`}>
                    {m.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper variant={t.sw2}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Notre philosophie
              </p>
              <h2
                className={`mt-4 text-balance text-3xl font-bold md:text-4xl ${t.heading}`}
              >
                Notre{" "}
                <span className="font-playfair italic text-gold">vision</span>
              </h2>
              <p className={`mt-6 text-base leading-relaxed ${t.body}`}>
                Apporter de la{" "}
                <span className="font-bold">clarté </span> là où les
                travaux font peur. Nous démystifions le BTP et rendons
                chaque étape compréhensible.
              </p>
              <p className={`mt-6 text-base leading-relaxed ${t.body}`}>
                <span className="font-bold">Coordonner simplement</span> des
                métiers complexes. Électricien, plombier, maçon,
                peintre... nous orchestrons chaque intervention.
              </p>
              <p className={`mt-6 text-base leading-relaxed ${t.body}`}>
                Être un{" "}
                <span className="font-bold">partenaire de confiance</span> sur
                la durée. Nos clients reviennent et nous recommandent,
                c'est notre plus belle réussite.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="relative h-80 overflow-hidden rounded-3xl lg:h-96">
              <Image
                src="/images/team-artigold.jpg"
                alt="Équipe Artigold sur un chantier"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant={t.sw2}>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Ce qui nous guide
            </p>
            <h2
              className={`mt-4 text-balance text-3xl font-bold md:text-4xl ${t.heading}`}
            >
              Nos{" "}
              <span className="font-playfair italic text-gold">valeurs</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 100}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 shadow-sm transition-all duration-300 ${t.card}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <v.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className={`mt-5 text-lg font-bold ${t.cardHeading}`}>
                  {v.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${t.cardText}`}>
                  {v.description}
                </p>
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
            <h2
              className={`mt-6 text-balance text-3xl font-bold md:text-4xl ${t.heading}`}
            >
              Engagements RSE
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${t.body}`}>
              {"Artigold s\u2019engage pour un BTP plus responsable. Nous privil\u00e9gions les mat\u00e9riaux \u00e9co-responsables, r\u00e9duisons les d\u00e9chets de chantier par le tri s\u00e9lectif et le recyclage, et veillons au bien-\u00eatre de nos \u00e9quipes \u00e0 travers des conditions de travail respectueuses et des formations continues."}
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Leaf,
                  title: "Mat\u00e9riaux responsables",
                  description:
                    "S\u00e9lection de fournisseurs certifi\u00e9s et de mat\u00e9riaux \u00e0 faible impact environnemental.",
                },
                {
                  icon: Users,
                  title: "Bien-\u00eatre des \u00e9quipes",
                  description:
                    "Formations continues, \u00e9quipements de qualit\u00e9 et respect de l\u2019\u00e9quilibre vie pro/perso.",
                },
                {
                  icon: Award,
                  title: "Tri & recyclage",
                  description:
                    "Tri syst\u00e9matique des d\u00e9chets de chantier et partenariats avec des fili\u00e8res de recyclage.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${t.rseCard}`}
                >
                  <item.icon className="h-6 w-6 text-gold" />
                  <h3
                    className={`mt-3 text-sm font-bold ${t.rseCardHeading}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-xs leading-relaxed ${t.rseCardText}`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section
        className={`relative overflow-hidden px-6 py-24 md:py-32 ${t.ctaBg}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Contactez-nous
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              Envie de travailler avec{" "}
              <span className="font-playfair italic text-gold">nous</span> ?
            </h2>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
            >
              Nous contacter
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
