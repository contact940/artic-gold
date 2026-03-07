import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { FadeIn } from "@/components/fade-in"
import { ProjectFilter, type Project } from "@/components/project-filter"

export const metadata: Metadata = {
  title: "Nos Realisations | Artigold - Projets de Renovation et Construction",
  description:
    "Decouvrez les realisations d'Artigold : renovations de maisons, appartements, bureaux, commerces et sites industriels en Ile-de-France.",
}

const projects: Project[] = [
  {
    title: "Renovation complete d'un appartement haussmannien",
    image: "/images/real-salon.jpg",
    client: "Particulier",
    ville: "Paris 16e",
    annee: "2025",
    description:
      "Renovation integrale d'un 120 m\u00B2 haussmannien : cuisine ouverte, 2 salles de bains, parquet restaure, electricite et plomberie refaites.",
    avant: "Appartement vetuste, cuisine fermee, salle de bains d'origine",
    apres: "Espace ouvert lumineux, finitions haut de gamme, confort moderne",
  },
  {
    title: "Amenagement de bureaux open-space",
    image: "/images/real-bureaux.jpg",
    client: "Professionnel",
    ville: "La Defense",
    annee: "2025",
    description:
      "Transformation d'un plateau de 450 m\u00B2 en open-space moderne avec salles de reunion, espace detente et traitement acoustique.",
    avant: "Plateau vide, aucun cloisonnement",
    apres: "Espace de travail fonctionnel, acoustique maitrisee, normes PMR",
  },
  {
    title: "Creation d'une cuisine contemporaine",
    image: "/images/real-cuisine.jpg",
    client: "Particulier",
    ville: "Boulogne-Billancourt",
    annee: "2024",
    description:
      "Conception et realisation d'une cuisine sur mesure avec ilot central, plans de travail en quartz et electromenager integre.",
  },
  {
    title: "Renovation d'une boutique haut de gamme",
    image: "/images/real-commerce.jpg",
    client: "Professionnel",
    ville: "Paris 8e",
    annee: "2024",
    description:
      "Amenagement complet d'une boutique de 120 m\u00B2 : facade, eclairage, mobilier sur mesure, mise aux normes ERP et accessibilite.",
    avant: "Local commercial brut, non conforme ERP",
    apres: "Boutique luxueuse, eclairage scenographique, conformite totale",
  },
  {
    title: "Salle de bains complete",
    image: "/images/real-sdb.jpg",
    client: "Particulier",
    ville: "Saint-Germain-en-Laye",
    annee: "2024",
    description:
      "Renovation d'une salle de bains de 12 m\u00B2 avec douche a l'italienne, double vasque, carrelage grand format et chauffage au sol.",
  },
  {
    title: "Rehabilitation d'un site industriel",
    image: "/images/real-industrie.jpg",
    client: "Professionnel",
    ville: "Gennevilliers",
    annee: "2023",
    description:
      "Renovation de 1 200 m\u00B2 de locaux industriels : sols, reseau electrique, eclairage LED, mise aux normes securite incendie.",
    avant: "Installation electrique vetuste, eclairage insuffisant",
    apres: "Site modernise, consommation energetique reduite de 40%",
  },
  {
    title: "Isolation thermique d'une maison individuelle",
    image: "/images/blog-energie.jpg",
    client: "Particulier",
    ville: "Versailles",
    annee: "2023",
    description:
      "Isolation des murs par l'exterieur, remplacement des menuiseries et installation d'une pompe a chaleur air-eau.",
    avant: "DPE classe E, factures energetiques elevees",
    apres: "DPE classe B, economies de 60% sur le chauffage",
  },
  {
    title: "Renovation de parties communes",
    image: "/images/real-salon.jpg",
    client: "Professionnel",
    ville: "Neuilly-sur-Seine",
    annee: "2023",
    description:
      "Rehabilitation du hall d'entree, de la cage d'escalier et des paliers d'une copropriete de 48 logements.",
  },
]

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Nos projets
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {"R\u00e9alisations & projets"}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {"D\u00e9couvrez une s\u00e9lection de nos chantiers r\u00e9alis\u00e9s pour des particuliers et des professionnels en \u00cele-de-France."}
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Projects Grid */}
      <SectionWrapper variant="muted" className="pt-0">
        <ProjectFilter projects={projects} />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Vous avez un projet similaire ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {"Contactez-nous pour \u00e9tudier votre besoin et recevoir un devis personnalis\u00e9 gratuit."}
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
