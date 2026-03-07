import type { Metadata } from "next"
import { Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { FadeIn } from "@/components/fade-in"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contactez Artigold | Devis gratuit",
  description:
    "Contactez Artigold pour votre projet de rénovation ou de construction. Devis gratuit et personnalisé sous 48h.",
}

export default function ContactPage() {
  return (
    <SectionWrapper>
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Parlons de votre projet
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Contactez-<span className="font-playfair italic text-gold">nous</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Expliquez-nous votre projet en quelques lignes, nous revenons vers vous rapidement.
          </p>
        </div>
      </FadeIn>

      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        {/* Form */}
        <FadeIn className="lg:col-span-2">
          <ContactForm />
        </FadeIn>

        {/* Sidebar Info */}
        <FadeIn delay={150}>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-base font-bold text-card-foreground">
                Coordonnées
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Téléphone</p>
                    <p>01 23 45 67 89</p>
                  </div>
                </a>
                <a
                  href="mailto:contact@artigold.fr"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p>contact@artigold.fr</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Horaires</p>
                    <p>Lun – Ven : 8h00 – 18h00</p>
                    <p>Sam : 9h00 – 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-6 transition-colors hover:bg-[#25D366]/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15">
                <MessageCircle className="h-6 w-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-card-foreground">
                  WhatsApp
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {"Échangez directement avec nous sur WhatsApp pour une réponse rapide."}
                </p>
              </div>
            </a>

            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
              <h3 className="text-base font-bold text-card-foreground">
                Réponse rapide
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Notre équipe s{"'"}engage à vous répondre sous 48h ouvrées. Pour
                les demandes urgentes, appelez-nous directement.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
