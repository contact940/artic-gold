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
    icon: Building,
    title: "Bureaux & tertiaire",
    description:
      "Am\u00e9nagement et r\u00e9novation de plateaux de bureaux, salles de r\u00e9union, open spaces, espaces d\u2019accueil. Travaux en site occup\u00e9, respect des plannings d\u2019exploitation.",
  },
  {
    icon: Store,
    title: "Commerces & retail",
    description:
      "Boutiques, restaurants, agences, showrooms. Am\u00e9nagements sur mesure respectant les chartes d\u2019enseigne et les contraintes d\u2019exploitation.",
  },
  {
    icon: Factory,
    title: "Industrie & logistique",
    description:
      "Locaux techniques, zones de production, ateliers, entrep\u00f4ts. Interventions en milieu contraint avec respect des normes de s\u00e9curit\u00e9 industrielle.",
  },
  {
    icon: Building2,
    title: "Promotion immobili\u00e8re & logements collectifs",
    description:
      "Parties communes, halls, escaliers, appartements t\u00e9moins. Qualit\u00e9 de finition et respect des standards de la promotion immobili\u00e8re.",
  },
]

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnostic & cadrage",
    description:
      "Visites, relev\u00e9s, compr\u00e9hension des contraintes (site occup\u00e9, flux, normes). D\u00e9finition du p\u00e9rim\u00e8tre d\u2019intervention.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Conception & planification",
    description:
      "Proposition technique, planning, phasage des travaux, budget d\u00e9taill\u00e9. Validation conjointe avec vos \u00e9quipes.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Ex\u00e9cution tous corps d\u2019\u00c9tat",
    description:
      "Pilotage des \u00e9quipes, coordination des m\u00e9tiers (CVC, \u00e9lectricit\u00e9, second \u0153uvre, finitions). Reporting r\u00e9gulier.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "R\u00e9ception & suivi",
    description:
      "Contr\u00f4le qualit\u00e9, lev\u00e9e des r\u00e9serves, accompagnement post-chantier. Garanties d\u00e9cennale et biennale.",
  },
]

const advantages = [
  {
    icon: HardHat,
    title: "Chantiers en site occup\u00e9",
    description:
      "Continuit\u00e9 d\u2019activit\u00e9 garantie pendant les travaux.",
  },
  {
    icon: ShieldCheck,
    title: "Normes PMR & incendie",
    description: "Conformit\u00e9 r\u00e9glementaire assur\u00e9e.",
  },
  {
    icon: Briefcase,
    title: "Assurance d\u00e9cennale & RC Pro",
    description:
      "Protection compl\u00e8te de votre investissement.",
  },
  {
    icon: ChartBar,
    title: "Reporting & transparence",
    description:
      "Suivi r\u00e9gulier de l\u2019avancement et du budget.",
  },
]

const references = [
  {
    title: "R\u00e9novation de 1\u00a0200 m\u00b2 de bureaux",
    category: "Tertiaire",
    surface: "1 200 m\u00b2",
    highlight: "Livr\u00e9 en 4 mois",
  },
  {
    title: "R\u00e9novation d\u2019un site industriel l\u00e9ger",
    category: "Industrie",
    surface: "1 200 m\u00b2",
    highlight: "Z\u00e9ro interruption d\u2019activit\u00e9",
  },
  {
    title: "Cr\u00e9ation d\u2019une boutique haut de gamme",
    category: "Commerce",
    surface: "120 m\u00b2",
    highlight: "Ouverture dans les d\u00e9lais",
  },
  {
    title: "R\u00e9habilitation de logements collectifs",
    category: "Promotion",
    surface: "2 800 m\u00b2",
    highlight: "48 logements livr\u00e9s",
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
            Ils nous confient leurs projets
          </p>
          <LogoMarquee />
        </FadeIn>
      </section>

      {/* Domains */}
      <SectionWrapper variant="dark">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {"Nos domaines d\u2019intervention"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              {"Des solutions adapt\u00e9es \u00e0"}{" "}
              <span className="font-playfair italic text-gold">chaque secteur</span>
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

      {/* References */}
      <SectionWrapper variant="dark-muted">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              R\u00e9f\u00e9rences
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              Quelques{" "}
              <span className="font-playfair italic text-gold">projets types</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {references.map((ref, i) => (
            <FadeIn key={ref.title} delay={i * 100}>
              <div className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/8 hover:shadow-xl hover:shadow-gold/5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
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

      {/* Case Studies */}
      <SectionWrapper variant="dark">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {"\u00c9tudes de cas"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold text-white md:text-4xl">
              Avant /{" "}
              <span className="font-playfair italic text-gold">Après</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "R\u00e9novation d\u2019un hall d\u2019accueil corporate",
              before:
                "Hall vieillissant, \u00e9clairage inadapt\u00e9, sols d\u00e9grad\u00e9s",
              after:
                "Espace modernis\u00e9 avec sol en pierre naturelle, \u00e9clairage LED et signal\u00e9tique int\u00e9gr\u00e9e",
              figures: [
                { label: "Surface", value: "320 m\u00b2" },
                { label: "Dur\u00e9e", value: "6 semaines" },
                { label: "Activit\u00e9", value: "Maintenue" },
              ],
            },
            {
              title: "Mise aux normes PMR d\u2019un ERP",
              before:
                "B\u00e2timent non conforme aux normes d\u2019accessibilit\u00e9 PMR et s\u00e9curit\u00e9 incendie",
              after:
                "Mise en conformit\u00e9 totale : rampes, sanitaires adapt\u00e9s, alarmes incendie, balisage",
              figures: [
                { label: "Surface", value: "1 400 m\u00b2" },
                { label: "Dur\u00e9e", value: "10 semaines" },
                { label: "Conformit\u00e9", value: "100%" },
              ],
            },
          ].map((cs, i) => (
            <FadeIn key={cs.title} delay={i * 150}>
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
                      Apr\u00e8s
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
              {"Fond\u00e9e en 2015, Artigold s\u2019est rapidement orient\u00e9e vers les projets professionnels en capitalisant sur son expertise tous corps d\u2019\u00e9tat. Bureaux, commerces, sites industriels, \u00e9tablissements recevant du public : chaque chantier renforce notre savoir-faire et notre capacit\u00e9 \u00e0 r\u00e9pondre aux exigences les plus strictes."}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {"Certifi\u00e9e Qualibat, titulaire d\u2019une assurance d\u00e9cennale et engag\u00e9e dans une d\u00e9marche RSE, Artigold est le partenaire de confiance des entreprises et des institutions en \u00cele-de-France."}
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
              Un projet professionnel a{" "}
              <span className="font-playfair italic text-gold">discuter</span> ?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              {"\u00c9changez avec un chef de projet Artigold pour obtenir une proposition technique adapt\u00e9e \u00e0 vos enjeux."}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact?type=professionnel"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
              >
                {"\u00c9changer avec un chef de projet"}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Voir nos r\u00e9alisations
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
