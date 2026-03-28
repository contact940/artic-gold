import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Factory,
  Building,
  Store,
  Building2,
  Search,
  Pencil,
  Hammer,
  CheckCircle2,
  ChartBar,
  HardHat,
  ShieldCheck,
  Briefcase,
} from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { FadeIn } from "@/components/fade-in"
import { StarRating } from "@/components/star-rating"
import { LogoMarquee } from "@/components/logo-marquee"

export const metadata: Metadata = {
  title: "Services pour Professionnels | Artigold",
  description:
    "Projets BTP pour commerces, bureaux, industrie et promoteurs. Artigold, entreprise tous corps d\u2019\u00e9tat, votre partenaire de confiance.",
}

const domains = [
  {
    icon: Factory,
    title: "Industrie & Logistique",
    description:
      "Efficacité, sécurité, maîtrise. Intervention en milieux industriels exigeants. ",
  },
  {
    icon: Building2,
    title: "Bureaux et Tertiaire",
    description:
      "Performance, image, continuité. Intervention tous espaces, délais maîtrisés.",
  },
  {
    icon: Building2,
    title: "Syndic de copropriété",
    description:
      "Qualité, finition, conformité. Parties communes et habitat",
  },
  {
    icon: Building,
    title: "Image, cohérence, impact",
    description:
      "Chartes respectées, activité préservée",
  },
]

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnostic & cadrage",
    description:
      "Analyse des contraintes et définition précise du cadre.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Conception & planification",
    description:
      "Anticiper pour mieux maîtriser. Solutions techniques, planning et budget validés ensemble.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Exécution TCE",
    description:
      "Coordonner pour délivrer sans faille. Pilotage des équipes, suivi rigoureux, avancement maîtrisé.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Réception & suivi",
    description:
      "Livrer, contrôler, accompagner. Qualité vérifiée, réserves levées, garanties.",
  },
]

const advantages = [
  {
    icon: HardHat,
    title: "Chantiers en site occupé",
    description:
      "Continuité d’activité garantie pendant les travaux.",
  },
  {
    icon: ShieldCheck,
    title: "Normes PMR & incendie",
    description: "Conformité réglementaire assurée.",
  },
  {
    icon: Briefcase,
    title: "Assurance décennale & RC Pro",
    description:
      "Protection complète de votre investissement.",
  },
  {
    icon: ChartBar,
    title: "Reporting & transparence",
    description:
      "Suivi régulier de l’avancement et du budget.",
  },
]

const references = [
  {
    title: "Rénovation de 1 200 m2 de bureaux",
    category: "Tertiaire",
    surface: "1 200 m2",
    highlight: "Livré en 4 mois",
  },
  {
    title: "Rénovation d'un site industriel léger",
    category: "Industrie",
    surface: "1 200 m2",
    highlight: "Zéro interruption d'activité",
  },
  {
    title: "Création d'une boutique haut de gamme",
    category: "Commerce",
    surface: "120 m2",
    highlight: "Ouverture dans les délais",
  },
  {
    title: "Réhabilitation de logements collectifs",
    category: "Promotion",
    surface: "2 800 m2",
    highlight: "48 logements livrés",
  },
]

export default function ProfessionnelPage() {
  return (
    <div className="bg-[#111111]">
      {/* Hero */}
      <section className="relative flex min-h-[55vh] md:min-h-screen items-center overflow-hidden">
        <video
          src="/video/prohero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#111111] to-transparent" />
        <div className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Professionnels
              </p>
              <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                Votre partenaire BTP{" "}
                <span className="font-playfair italic text-gold">
                  pour vos projets professionnels
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
                {"Artigold con\u00e7oit, pilote et r\u00e9alise vos travaux de r\u00e9novation, d\u2019am\u00e9nagement et de mise aux normes en ma\u00eetrisant d\u00e9lais, budget et continuit\u00e9 d\u2019activit\u00e9."}
              </p>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="mt-6 flex items-center gap-3">
                <StarRating rating={4.9} dark />
                <span className="text-sm text-white/60">
                  — Nos références professionnelles
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={350}>
              <Link
                href="/contact?type=professionnel"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
              >
                {"\u00c9changer avec un chef de projet"}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Logo Trust Banner */}
      <section className="border-y border-white/10 bg-[#0d0d0d] py-10">
        <FadeIn>
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Expérience & références
          </p>
          <LogoMarquee />
        </FadeIn>
      </section>

      {/* Domains */}
      <SectionWrapper variant="dark">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {"Nos domaines"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              {"Des solutions adaptées à"}{" "}
              <span className="font-playfair italic text-gold">{`chaque secteur`}</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, i) => (
            <FadeIn key={domain.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/8 hover:shadow-xl hover:shadow-gold/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                  <domain.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {domain.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {domain.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Process / Timeline */}
      <SectionWrapper variant="dark-muted">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Notre methodologie
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              Notre approche{" "}
              <span className="font-playfair italic text-gold">projet</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 100}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5">
                <span className="text-5xl font-bold text-gold/10 transition-colors duration-300 group-hover:text-gold/20">
                  {s.step}
                </span>
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                  <s.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Artigold */}
      <SectionWrapper variant="dark">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Nos garanties
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              Arguments &{" "}
              <span className="font-playfair italic text-gold">garanties</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {advantages.map((adv, i) => (
            <FadeIn key={adv.title} delay={i * 100}>
              <div className="group flex h-full gap-5 rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/8 hover:shadow-xl hover:shadow-gold/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                  <adv.icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {adv.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Case Studies */}
      <SectionWrapper variant="dark">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {"études de cas"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              Avant /{" "}
              <span className="font-playfair italic text-gold">Après</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[{
            title: "Tertiaire",
            before:
              "Espaces de travail vieillissants, aménagement peu fonctionnel",
            after:
              "Rénovation de 1200 m² de salles de reunion.",
            figures: [
              { label: "Surface", value: "1200 m²" },
              { label: "Durée", value: "16 semaines" },
              { label: "Localisation", value: "Paris 16" },
            ],
          },
          {
            title: "Industrie",
            before:
              "Sols dégradés, usure importante dans un environnement industriel",
            after:
              "Rénovation et sablage de sols sur 14 000 m².",
            figures: [
              { label: "Surface", value: "14 000 m²" },
              { label: "Type", value: "Industrie" },
              { label: "Intervention", value: "Saint-Ouen-l'Aumône" },
            ],
          },
          {
            title: "Tertiaire",
            before:
              "Parties communes dégradées, manque d’entretien et de conformité",
            after:
              "Rénovation de deux immeubles (parties communes)",
            figures: [
              { label: "Surface", value: "320 m²" },
              { label: "Durée", value: "8 semaines" },
              { label: "Localisation", value: "Paris 19" },
            ],
          },
          {
            title: "Tertiaire",
            before:
              "Bâtiment non conforme aux normes IGH et sécurité incendie",
            after:
              "Mise en conformité complète avec validation des normes en vigueur",
            figures: [
              { label: "Surface", value: "1600 m²" },
              { label: "Durée", value: "3 mois" },
              { label: "Localisation", value: "Paris 15" },
            ],
          },
          {
            title: "Tertiaire",
            before:
              "Agence vieillissante, image non conforme aux standards",
            after:
              "Rénovation agence bancaire, Agence modernisée avec une image professionnelle et accueillante",
            figures: [
              { label: "Surface", value: "90 m²" },
              { label: "Durée", value: "4 semaines" },
              { label: "Localisation", value: "Lille" },
            ],
          }
          ].map((cs, i) => (
            <FadeIn key={cs.title + i} delay={i * 150}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5">
                <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                      Avant
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {cs.before}
                    </p>
                  </div>
                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                      Après
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {cs.after}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-8">
                  {cs.figures.map((fig) => (
                    <div key={fig.label}>
                      <p className="text-2xl font-bold text-gold">
                        {fig.value}
                      </p>
                      <p className="text-xs text-white/50">{fig.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Histoire & Mission */}
      <SectionWrapper variant="dark-muted">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {"Histoire & mission"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              Une expertise forgée sur le{" "}
              <span className="font-playfair italic text-gold">terrain</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              {"Artigold s'est rapidement orientée vers les projets professionnels en capitalisant sur son expertise tous corps d'état. Bureaux, commerces, sites industriels, établissements recevant du public : chaque chantier renforce notre savoir-faire et notre capacité à répondre aux exigences les plus strictes."}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {"Titulaire d'une assurance décennale et engagée dans une démarche RSE, Artigold est le partenaire de confiance des entreprises et des institutions en Île-de-France."}
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <Link
              href="/histoire?from=professionnel"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all duration-300 hover:gap-3 hover:text-gold-light"
            >
              Découvrir notre histoire
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Lancez votre projet
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              Un projet professionnel ?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              {"Échangez avec un chef de projet Artigold pour obtenir une proposition technique adaptée à vos enjeux."}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact?type=professionnel"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
              >
                {"Échanger avec un chef de projet"}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
