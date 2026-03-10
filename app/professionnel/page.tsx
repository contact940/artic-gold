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
    "Projets BTP pour commerces, bureaux, industrie et promoteurs. Artigold, entreprise tous corps d'état, votre partenaire de confiance.",
}

const domains = [
  {
    icon: Building,
    title: "Bureaux & tertiaire",
    description:
      "Amenagement et renovation de plateaux de bureaux, salles de reunion, open spaces, espaces d'accueil. Travaux en site occupe, respect des plannings d'exploitation.",
  },
  {
    icon: Store,
    title: "Commerces & retail",
    description:
      "Boutiques, restaurants, agences, showrooms. Amenagements sur mesure respectant les chartes d'enseigne et les contraintes d'exploitation.",
  },
  {
    icon: Factory,
    title: "Industrie & logistique",
    description:
      "Locaux techniques, zones de production, ateliers, entrepots. Interventions en milieu contraint avec respect des normes de securite industrielle.",
  },
  {
    icon: Building2,
    title: "Promotion immobiliere & logements collectifs",
    description:
      "Parties communes, halls, escaliers, appartements temoins. Qualite de finition et respect des standards de la promotion immobiliere.",
  },
]

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnostic & cadrage",
    description:
      "Visites, releves, comprehension des contraintes (site occupe, flux, normes). Definition du perimetre d'intervention.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Conception & planification",
    description:
      "Proposition technique, planning, phasage des travaux, budget detaille. Validation conjointe avec vos equipes.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Execution tous corps d'Etat",
    description:
      "Pilotage des equipes, coordination des metiers (CVC, electricite, second oeuvre, finitions). Reporting regulier.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Reception & suivi",
    description:
      "Controle qualite, levee des reserves, accompagnement post-chantier. Garanties decennale et biennale.",
  },
]

const advantages = [
  {
    icon: HardHat,
    title: "Chantiers en site occupe",
    description:
      "Continuite d'activite garantie pendant les travaux.",
  },
  {
    icon: ShieldCheck,
    title: "Normes PMR & incendie",
    description:
      "Conformite reglementaire assuree.",
  },
  {
    icon: Briefcase,
    title: "Assurance decennale & RC Pro",
    description:
      "Protection complete de votre investissement.",
  },
  {
    icon: ChartBar,
    title: "Reporting & transparence",
    description:
      "Suivi regulier de l'avancement et du budget.",
  },
]

const references = [
  {
    title: "Renovation de 1 200 m2 de bureaux",
    category: "Tertiaire",
    surface: "1200 m\u00B2",
    highlight: "Livré en 4 mois",
  },
  {
    title: "Rénovation d'un site industriel léger",
    category: "Industrie",
    surface: "1 200 m\u00B2",
    highlight: "Zéro interruption d'activité",
  },
  {
    title: "Création d'une boutique haut de gamme",
    category: "Commerce",
    surface: "120 m\u00B2",
    highlight: "Ouverture dans les délais",
  },
  {
    title: "Réhabilitation de logements collectifs",
    category: "Promotion",
    surface: "2 800 m\u00B2",
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
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Votre partenaire BTP{" "}
              </h1>
              <span className="font-playfair italic text-gold text-4xl max-w-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">pour vos projets professionnels</span>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
                Artigold concoit, pilote et realise vos travaux de renovation, d'amenagement et de mise aux normes en maitrisant delais, budget et continuite d'activite.
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
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-dark"
              >
                Echanger avec un chef de projet
                <ArrowRight className="h-5 w-5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Logo Trust Banner */}
      <section className="border-y border-white/10 bg-[#0d0d0d] py-10">
        <FadeIn>
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-gold">
            Ils nous confient leurs projets
          </p>
          <LogoMarquee />
        </FadeIn>
      </section>

      {/* Domains */}
      <SectionWrapper variant="dark">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Nos domaines d'intervention
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Des solutions adaptees a <span className="font-playfair italic text-gold ">chaque secteur</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, i) => (
            <FadeIn key={domain.title} delay={i * 100}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-colors hover:border-gold/30 hover:bg-white/[0.08]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
                  <domain.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {domain.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {domain.description}
                </p>
                <Link
                  href="/contact?type=professionnel"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  {/* {"Étudier mon projet"}
                  <ArrowRight className="h-4 w-4" /> */}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Process / Timeline */}
      <SectionWrapper variant="dark-muted">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Notre methodologie
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Notre approche <span className="font-playfair italic text-gold">projet</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 100}>
              <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-3xl font-bold text-gold/20">
                  {s.step}
                </span>
                <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                  <s.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Nos garanties
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Arguments & <span className="font-playfair italic text-gold">garanties</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {advantages.map((adv, i) => (
            <FadeIn key={adv.title} delay={i * 100}>
              <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-gold/30 hover:bg-white/[0.08]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
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

      {/* References */}
      <SectionWrapper variant="dark-muted">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              References
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Quelques <span className="font-playfair italic text-gold">projets types</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {references.map((ref, i) => (
            <FadeIn key={ref.title} delay={i * 100}>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-gold/30 hover:bg-white/[0.08]">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                    {ref.category}
                  </span>
                  <span className="text-sm font-semibold text-white/80">
                    {ref.surface}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">
                  {ref.title}
                </h3>
                <p className="text-sm text-white/50">{ref.highlight}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Etudes de cas */}
      <SectionWrapper variant="dark">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              {"Études de cas"}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Avant / <span className="font-playfair italic text-gold">Après</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Rénovation d'un hall d'accueil corporate",
              before: "Hall vieillissant, éclairage inadapté, sols dégradés",
              after: "Espace modernisé avec sol en pierre naturelle, éclairage LED et signalétique intégrée",
              figures: [
                { label: "Surface", value: "320 m\u00B2" },
                { label: "Durée", value: "6 semaines" },
                { label: "Activité", value: "Maintenue" },
              ],
            },
            {
              title: "Mise aux normes PMR d'un ERP",
              before: "Bâtiment non conforme aux normes d'accessibilité PMR et sécurité incendie",
              after: "Mise en conformité totale : rampes, sanitaires adaptés, alarmes incendie, balisage",
              figures: [
                { label: "Surface", value: "1 400 m\u00B2" },
                { label: "Durée", value: "10 semaines" },
                { label: "Conformité", value: "100%" },
              ],
            },
          ].map((cs, i) => (
            <FadeIn key={cs.title} delay={i * 150}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-gold/30">
                <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Avant</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{cs.before}</p>
                  </div>
                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">Après</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{cs.after}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-6">
                  {cs.figures.map((fig) => (
                    <div key={fig.label}>
                      <p className="text-2xl font-bold text-gold">{fig.value}</p>
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
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              {"Histoire & mission"}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Une expertise forgée sur le <span className="font-playfair italic text-gold">terrain</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Fondée en 2015, Artigold s{"'"}est rapidement orientée vers les
              projets professionnels en capitalisant sur son expertise tous corps
              d{"'"}état. Bureaux, commerces, sites industriels, établissements
              recevant du public : chaque chantier renforce notre savoir-faire
              et notre capacité à répondre aux exigences les plus strictes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Certifiée Qualibat, titulaire d{"'"}une assurance décennale et
              engagée dans une démarche RSE, Artigold est le partenaire de
              confiance des entreprises et des institutions en Île-de-France.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <Link
              href="/histoire?from=professionnel"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
            >
              Découvrir notre histoire
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="dark">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
              Un projet professionnel a <span className="font-playfair italic text-gold">discuter</span> ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Echangez avec un chef de projet Artigold pour obtenir une proposition technique adaptee a vos enjeux.
            </p>
            <Link
              href="/contact?type=professionnel"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-dark"
            >
              Echanger avec un chef de projet
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </FadeIn>
      </SectionWrapper>
    </div>
  )
}
