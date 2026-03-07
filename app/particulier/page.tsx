import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Leaf,
  Wallet,
  MessageCircle,
  Home,
  Bath,
  Flame,
  Paintbrush,
  Quote,
  ChevronDown,
  ClipboardList,
  FileText,
  HardHat,
  CheckCircle2,
  Key,
} from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { FadeIn } from "@/components/fade-in"
import { StarRating } from "@/components/star-rating"

export const metadata: Metadata = {
  title: "Rénovation pour Particuliers | Artigold - Entreprise Tous Corps d'État",
  description:
    "Rénovation de maison et appartement : rénovation énergétique, intérieure, complète clé en main. Délais garantis et budget maîtrisé. Devis gratuit avec Artigold.",
}

const values = [
  {
    icon: MessageCircle,
    title: "Un seul interlocuteur pour tout votre chantier",
    description:
      "Vous avez un chef de projet dédié qui coordonne tout. Plus besoin de jongler entre plusieurs artisans.",
  },
  {
    icon: Paintbrush,
    title: "Tous les corps de métier gérés par Artigold",
    description:
      "Électricité, plomberie, maçonnerie, peinture, menuiserie... On s'occupe de tout, vous n'avez rien à gérer.",
  },
  {
    icon: Clock,
    title: "Des délais annoncés et respectés autant que possible",
    description:
      "Un planning réaliste, des étapes claires, et un engagement ferme sur les dates de livraison de votre chantier.",
  },
  {
    icon: Leaf,
    title: "Des explications claires, sans langage de chantier",
    description:
      "On vous explique tout simplement, sans jargon technique. Vous comprenez chaque étape et chaque choix.",
  },
]

const services = [
  {
    icon: Home,
    title: "Renovation interieure complete",
    description:
      "Salon, chambres, pieces de vie... Nous renovons votre interieur de A a Z pour un resultat a la hauteur de vos attentes.",
    cta: "En savoir plus",
  },
  {
    icon: Bath,
    title: "Cuisine & salle de bains",
    description:
      "Creation, reamenagement, modernisation. Des espaces fonctionnels et esthetiques, adaptes a votre quotidien.",
    cta: "En savoir plus",
  },
  {
    icon: Flame,
    title: "Isolation & renovation energetique",
    description:
      "Murs, combles, fenetres, chauffage. Reduisez vos factures d'energie et gagnez en confort toute l'annee.",
    cta: "En savoir plus",
  },
  {
    icon: Key,
    title: "Extension & réagencement",
    description:
      "Ouvrir une piece, creer une suite parentale, agrandir... Nous repensons vos espaces selon vos besoins.",
    cta: "En savoir plus",
  },
]

const processSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "On discute de votre projet",
    description:
      "Vous nous expliquez ce que vous voulez changer : cuisine, salle de bains, isolation, piece a renover... Nous ecoutons et nous posons les bonnes questions.",
  },
  {
    icon: FileText,
    step: "02",
    title: "On vous propose une solution claire",
    description:
      "Un devis detaille, sans surprise, avec un planning realiste. Vous savez exactement ce qui va etre fait, quand et combien ca coute.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "On gère les travaux de A à Z",
    description:
      "Artigold coordonne tous les artisans (electricite, plomberie, peinture, maconnerie...). Un interlocuteur unique et un suivi regulier.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Vous profitez de votre nouveau chez-vous",
    description:
      "Le chantier est livre propre, conforme a ce qui a ete decide, avec toutes les garanties.",
  },
]

const testimonials = [
  {
    quote:
      "Artigold a rénové notre appartement en un temps record. Le résultat est magnifique et le suivi via WhatsApp était vraiment rassurant.",
    name: "Sophie M.",
    rating: 5,
    project: "Rénovation d'appartement, Paris 11e",
  },
  {
    quote:
      "Budget respecté, délais tenus, et une équipe à l'écoute. Je recommande Artigold sans hésitation pour tous vos projets de rénovation.",
    name: "Marc D.",
    rating: 5,
    project: "Rénovation cuisine & salle de bains",
  },
  {
    quote:
      "Grâce à Artigold, notre maison est enfin bien isolée. On a senti la différence dès le premier hiver. Un grand merci à toute l'équipe.",
    name: "Claire & Thomas R.",
    rating: 4,
    project: "Rénovation énergétique, maison individuelle",
  },
]

const faqs = [
  {
    question: "Combien de temps durent les travaux en moyenne ?",
    answer:
      "La durée dépend de l'ampleur du projet. Une rénovation de salle de bains prend 2 à 3 semaines, tandis qu'une rénovation complète d'appartement peut durer 6 à 10 semaines. Nous établissons un planning précis dès le début.",
  },
  {
    question: "Comment est fixé le budget ? Y a-t-il des surprises ?",
    answer:
      "Nous réalisons un devis détaillé et transparent avant le début des travaux. Chaque poste est chiffré et validé avec vous. En cas d'imprévu, nous vous informons immédiatement avant toute dépense supplémentaire.",
  },
  {
    question: "Quelles aides financières sont disponibles pour la rénovation énergétique ?",
    answer:
      "Plusieurs dispositifs existent : MaPrimeRénov', les CEE (Certificats d'Économie d'Énergie), l'éco-PTZ et les aides locales. Nous vous accompagnons dans l'identification des aides auxquelles vous êtes éligible.",
  },
  {
    question: "Comment fonctionne le suivi via WhatsApp ?",
    answer:
      "Dès le démarrage, nous créons un groupe WhatsApp dédié à votre projet. Votre chef de projet y partage les avancées, photos et plannings. Vous pouvez poser vos questions et recevoir des réponses rapides.",
  },
  {
    question: "Intervenez-vous uniquement en Île-de-France ?",
    answer:
      "Notre zone d'intervention principale couvre Paris et l'Île-de-France. Pour les projets en dehors de cette zone, contactez-nous pour étudier la faisabilité.",
  },
]

export default function ParticulierPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] md:min-h-screen items-center overflow-hidden">
        <video
          src="/video/heropar.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <h1 className="max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight text-background md:text-5xl lg:text-6xl">
                Rénovez votre maison en toute{" "}
                <span className="font-playfair italic leading-tight tracking-tight text-gold">sérénité</span>
              </h1>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
                Artigold coordonne tous les corps de métier pour vous livrer un
                projet clé en main, dans les délais et le budget convenus.
              </p>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="mt-6 flex items-center gap-3">
                <StarRating rating={4.8} dark />
                <span className="text-sm text-background/70">
                  — Clients satisfaits de leurs travaux avec Artigold
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={350}>
              <Link
                href="/contact?type=particulier"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-dark"
              >
                Parler de mon projet
                <ArrowRight className="h-5 w-5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Processus */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Comment ça marche
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Comment ça se passe <span className="font-playfair italic text-gold">concrètement</span> ?
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 100}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl font-bold text-gold/20">
                  {s.step}
                </span>
                <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                  <s.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-bold text-card-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Nos expertises
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Nos travaux pour les <span className="font-playfair italic text-gold">particuliers</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/contact?type=particulier"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Engagements */}
      <SectionWrapper variant="muted">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Nos engagements
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Pourquoi nous faire <span className="font-playfair italic text-gold">confiance</span> ?
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-card-foreground">
                  {item.title}
                </h3>
                {/* <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p> */}
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Temoignages
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Ce que disent nos <span className="font-playfair italic text-gold">clients</span>
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <StarRating rating={4.8} />
              <span className="text-sm text-muted-foreground">
                sur la base de nos avis clients
              </span>
            </div>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Quote className="h-8 w-8 text-gold/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground italic">
                  {`"${t.quote}"`}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-card-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.project}
                      </p>
                    </div>
                    <StarRating rating={t.rating} className="scale-75 origin-right" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* WhatsApp */}
      <SectionWrapper variant="muted">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366]/10">
              <MessageCircle className="h-8 w-8 text-[#25D366]" />
            </div>
            <h2 className="mt-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Un interlocuteur unique sur WhatsApp
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Chaque client bénéficie d{"'"}un groupe WhatsApp dédié avec un
              interlocuteur unique. Suivez l{"'"}avancement de vos travaux en
              temps réel, posez vos questions et envoyez des photos directement
              depuis votre téléphone.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-foreground">
                  AG
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-card-foreground">
                    Artigold — Projet Sophie
                  </p>
                  <p className="text-xs text-muted-foreground">
                    3 participants
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <div className="self-start rounded-xl rounded-tl-none bg-secondary px-4 py-2 text-left">
                  <p className="text-xs text-muted-foreground">Chef de projet</p>
                  <p className="text-sm text-foreground">
                    Bonjour Sophie, la cuisine est terminée ! Voici les photos.
                  </p>
                </div>
                <div className="self-end rounded-xl rounded-tr-none bg-gold/10 px-4 py-2 text-left">
                  <p className="text-sm text-foreground">
                    Superbe ! Merci pour la réactivité.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Questions fréquentes
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              FAQ
            </h2>
          </div>
        </FadeIn>
        <div className="mx-auto mt-14 max-w-3xl flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 80}>
              <details className="group rounded-2xl border border-border bg-card shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left">
                  <span className="pr-4 text-base font-semibold text-card-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Présentation & Histoire */}
      <SectionWrapper variant="muted">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                {"Présentation & histoire"}
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
                Une entreprise familiale à votre écoute
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Depuis plus de 10 ans, Artigold accompagne les particuliers dans
                leurs projets de rénovation en Île-de-France. Fondée sur des
                valeurs familiales de confiance, de rigueur et de proximité,
                notre entreprise a fait le choix d{"'"}un modèle simple : un
                interlocuteur unique pour coordonner l{"'"}ensemble des corps de
                métier.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Certifiée Qualibat et RGE, Artigold s{"'"}engage dans une
                démarche de qualité et de responsabilité environnementale. Nous
                privilégions les matériaux durables et accompagnons nos clients
                dans l{"'"}obtention des aides à la rénovation énergétique.
              </p>
              <Link
                href="/histoire?from=particulier"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
              >
                Découvrir notre histoire complète
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="relative h-72 overflow-hidden rounded-2xl lg:h-80">
              <Image
                src="/images/team-artigold.jpg"
                alt="L'équipe Artigold"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Vous avez un projet de travaux ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {"Vous ne savez pas par où commencer ? Discutons-en simplement, sans engagement."}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact?type=particulier"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-dark"
              >
                Envoyer mon projet
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact?type=particulier"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Demander un rappel
              </Link>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  )
}
