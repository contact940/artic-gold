import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { FadeIn } from "@/components/fade-in"
import { BlogFilter, type BlogArticle } from "@/components/blog-filter"

export const metadata: Metadata = {
  title: "Blog & Conseils | Artigold - Rénovation & BTP",
  description:
    "Conseils de rénovation, subventions énergétiques, normes PMR, exemples de chantiers. Le blog Artigold pour particuliers et professionnels.",
}

const featuredArticle = {
  slug: "renovation-energetique-guide-2026",
  title:
    "Rénovation énergétique en 2026 : le guide complet des aides et subventions",
  excerpt:
    "MaPrimeRénov', CEE, éco-PTZ... Découvrez toutes les aides financières disponibles pour vos travaux de rénovation énergétique et comment en bénéficier.",
  image: "/images/blog-energie.jpg",
  date: "15 février 2026",
  readTime: "8 min",
  category: "Rénovation énergétique",
  audience: "Particuliers" as const,
}

const articles: BlogArticle[] = [
  {
    slug: "5-erreurs-renovation-interieure",
    title: "Les 5 erreurs à éviter lors d'une rénovation intérieure",
    excerpt:
      "De la planification au choix des matériaux, découvrez les pièges courants et nos conseils pour une rénovation réussie.",
    image: "/images/blog-renovation.jpg",
    date: "8 février 2026",
    readTime: "5 min",
    category: "Conseils travaux",
    audience: "Particuliers",
  },
  {
    slug: "normes-pmr-erp-guide",
    title:
      "Normes PMR en ERP : ce que vous devez savoir en tant que professionnel",
    excerpt:
      "Accessibilité, rampes, sanitaires adaptés, signalétique... Tour d'horizon des obligations réglementaires pour les établissements recevant du public.",
    image: "/images/blog-pmr.jpg",
    date: "1er février 2026",
    readTime: "6 min",
    category: "Normes & réglementation",
    audience: "Professionnels",
  },
  {
    slug: "chantier-site-occupe-reussir",
    title:
      "Réussir un chantier en site occupé : méthodologie et retour d'expérience",
    excerpt:
      "Comment mener des travaux sans perturber l'activité de vos locaux ? Planification, phasage et communication : les clés du succès.",
    image: "/images/blog-chantier.jpg",
    date: "25 janvier 2026",
    readTime: "7 min",
    category: "Retour d'expérience",
    audience: "Professionnels",
  },
  {
    slug: "cuisine-tendances-2026",
    title: "Tendances cuisine 2026 : matériaux, couleurs et agencements",
    excerpt:
      "Bois naturel, plans de travail en quartz, îlots multifonctions... Les tendances qui vont transformer votre cuisine cette année.",
    image: "/images/blog-renovation.jpg",
    date: "18 janvier 2026",
    readTime: "4 min",
    category: "Conseils travaux",
    audience: "Particuliers",
  },
  {
    slug: "isolation-thermique-murs-combles",
    title:
      "Isolation thermique : murs ou combles, par où commencer ?",
    excerpt:
      "Priorisez vos travaux d'isolation pour un maximum d'efficacité. Analyse des déperditions et solutions adaptées à chaque configuration.",
    image: "/images/blog-energie.jpg",
    date: "10 janvier 2026",
    readTime: "6 min",
    category: "Rénovation énergétique",
    audience: "Particuliers",
  },
  {
    slug: "amenagement-bureaux-open-space",
    title:
      "Aménager des bureaux open-space : confort acoustique et productivité",
    excerpt:
      "Cloisons phoniques, traitement acoustique, éclairage naturel... Créez un espace de travail performant et agréable pour vos équipes.",
    image: "/images/blog-chantier.jpg",
    date: "3 janvier 2026",
    readTime: "5 min",
    category: "Aménagement professionnel",
    audience: "Professionnels",
  },
  {
    slug: "mise-aux-normes-incendie-erp",
    title:
      "Mise aux normes incendie en ERP : obligations et solutions",
    excerpt:
      "Systèmes de détection, compartimentage, évacuation... Tout ce qu'il faut savoir pour mettre votre établissement en conformité incendie.",
    image: "/images/blog-pmr.jpg",
    date: "20 décembre 2025",
    readTime: "7 min",
    category: "Normes & réglementation",
    audience: "Professionnels",
  },
  {
    slug: "aides-financieres-renovation-2026",
    title:
      "Toutes les aides financières pour rénover votre logement en 2026",
    excerpt:
      "MaPrimeRénov', CEE, éco-PTZ, aides locales... Le récapitulatif complet pour financer vos travaux de rénovation énergétique.",
    image: "/images/blog-energie.jpg",
    date: "15 décembre 2025",
    readTime: "9 min",
    category: "Rénovation énergétique",
    audience: "Particuliers",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              {"Blog & Conseils"}
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Conseils, tendances et expertise BTP
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Retrouvez nos articles sur la rénovation, les subventions
              énergétiques, les normes réglementaires et nos retours
              d{"'"}expérience chantier.
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Featured Article */}
      <SectionWrapper variant="muted" className="pt-0">
        <FadeIn>
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex w-fit rounded-md bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                    {featuredArticle.category}
                  </span>
                  <span className="inline-flex w-fit rounded-md bg-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground">
                    {featuredArticle.audience}
                  </span>
                </div>
                <h2 className="mt-4 text-balance text-2xl font-bold text-card-foreground md:text-3xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredArticle.readTime} de lecture
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors group-hover:text-gold-dark">
                  {"Lire l'article"}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </FadeIn>
      </SectionWrapper>

      {/* Articles Grid with search + filter */}
      <SectionWrapper>
        <BlogFilter articles={articles} />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="muted">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Vous avez un projet ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nos experts sont à votre disposition pour vous accompagner dans
              tous vos travaux de rénovation et de construction.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-dark"
            >
              Demander un devis gratuit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  )
}
