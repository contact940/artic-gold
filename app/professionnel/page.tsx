"use client"

import { useRef } from "react"
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
import { motion, useScroll, useTransform } from "motion/react"
import { FadeIn } from "@/components/fade-in"
import { StarRating } from "@/components/star-rating"
import { LogoMarquee } from "@/components/logo-marquee"

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
  const domainsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: domainsProgress } = useScroll({ target: domainsRef, offset: ["start start", "end end"] })
  const domainsX = useTransform(domainsProgress, [0, 1], ["0%", "-75%"])

  const stepsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: stepsProgress } = useScroll({ target: stepsRef, offset: ["start start", "end end"] })
  const stepsX = useTransform(stepsProgress, [0, 1], ["0%", "-75%"])

  const advantagesRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: advantagesProgress } = useScroll({ target: advantagesRef, offset: ["start start", "end end"] })
  const advantagesX = useTransform(advantagesProgress, [0, 1], ["0%", "-75%"])

  const refsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: refsProgress } = useScroll({ target: refsRef, offset: ["start start", "end end"] })
  const refsX = useTransform(refsProgress, [0, 1], ["0%", "-75%"])

  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: caseStudiesProgress } = useScroll({ target: caseStudiesRef, offset: ["start start", "end end"] })
  const caseStudiesX = useTransform(caseStudiesProgress, [0, 1], ["0%", "-50%"])

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

      {/* Domains — horizontal scroll */}
      <div ref={domainsRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-[#111111] py-16">
          <div className="px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Nos domaines d'intervention
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Des solutions adaptées à <span className="font-playfair italic text-gold">chaque secteur</span>
            </h2>
          </div>
          <div className="w-full overflow-hidden">
            <motion.div
              style={{ x: domainsX }}
              className="flex w-[400vw]"
            >
              {domains.map((domain) => (
                <div key={domain.title} className="flex w-screen shrink-0 items-center justify-center px-8">
                  <div className="flex w-full max-w-lg flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center transition-colors hover:border-gold/30 hover:bg-white/8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10">
                      <domain.icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">{domain.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-white/60">{domain.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process — horizontal scroll */}
      <div ref={stepsRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-[#0d0d0d] py-16">
          <div className="px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Notre méthodologie
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Notre approche <span className="font-playfair italic text-gold">projet</span>
            </h2>
          </div>
          <div className="w-full overflow-hidden">
            <motion.div
              style={{ x: stepsX }}
              className="flex w-[400vw]"
            >
              {steps.map((s) => (
                <div key={s.step} className="flex w-screen shrink-0 items-center justify-center px-8">
                  <div className="relative flex w-full max-w-lg flex-col rounded-2xl border border-white/10 bg-white/5 p-10">
                    <span className="text-5xl font-bold text-gold/20">{s.step}</span>
                    <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                      <s.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-white/60">{s.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Advantages — horizontal scroll */}
      <div ref={advantagesRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-[#111111] py-16">
          <div className="px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Nos garanties
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Arguments & <span className="font-playfair italic text-gold">garanties</span>
            </h2>
          </div>
          <div className="w-full overflow-hidden">
            <motion.div
              style={{ x: advantagesX }}
              className="flex w-[400vw]"
            >
              {advantages.map((adv) => (
                <div key={adv.title} className="flex w-screen shrink-0 items-center justify-center px-8">
                  <div className="flex w-full max-w-lg gap-6 rounded-2xl border border-white/10 bg-white/5 p-10 transition-colors hover:border-gold/30 hover:bg-white/8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                      <adv.icon className="h-7 w-7 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{adv.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-white/60">{adv.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* References — horizontal scroll */}
      <div ref={refsRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-[#0d0d0d] py-16">
          <div className="px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Références
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Quelques <span className="font-playfair italic text-gold">projets types</span>
            </h2>
          </div>
          <div className="w-full overflow-hidden">
            <motion.div
              style={{ x: refsX }}
              className="flex w-[400vw]"
            >
              {references.map((ref) => (
                <div key={ref.title} className="flex w-screen shrink-0 items-center justify-center px-8">
                  <div className="flex w-full max-w-lg flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-10 transition-colors hover:border-gold/30 hover:bg-white/8">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                        {ref.category}
                      </span>
                      <span className="text-base font-semibold text-white/80">{ref.surface}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{ref.title}</h3>
                    <p className="text-base text-white/50">{ref.highlight}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Etudes de cas — horizontal scroll */}
      <div ref={caseStudiesRef} className="relative h-[200vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-[#111111] py-16">
          <div className="px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              {"Études de cas"}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
              Avant / <span className="font-playfair italic text-gold">Après</span>
            </h2>
          </div>
          <div className="w-full overflow-hidden">
            <motion.div
              style={{ x: caseStudiesX }}
              className="flex w-[200vw]"
            >
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
              ].map((cs) => (
                <div key={cs.title} className="flex w-screen shrink-0 items-center justify-center px-8">
                  <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-10 transition-colors hover:border-gold/30">
                    <h3 className="text-2xl font-bold text-white">{cs.title}</h3>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Avant</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">{cs.before}</p>
                      </div>
                      <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold">Après</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">{cs.after}</p>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-8">
                      {cs.figures.map((fig) => (
                        <div key={fig.label}>
                          <p className="text-2xl font-bold text-gold">{fig.value}</p>
                          <p className="text-xs text-white/50">{fig.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Histoire & Mission */}
      <section className="bg-[#0d0d0d] px-6 py-20 md:py-28">
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
      </section>

      {/* CTA */}
      <section className="bg-[#111111] px-6 py-20 md:py-28">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
              Un projet professionnel à <span className="font-playfair italic text-gold">discuter</span> ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Échangez avec un chef de projet Artigold pour obtenir une proposition technique adaptée à vos enjeux.
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
      </section>
    </div>
  )
}
