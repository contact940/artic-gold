import type { Metadata } from "next"
import { Phone, Mail, Clock, MessageCircle, MapPin } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { FadeIn } from "@/components/fade-in"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contactez Artigold | Devis gratuit",
  description:
    "Contactez Artigold pour votre projet de r\u00e9novation ou de construction. Devis gratuit et personnalis\u00e9 sous 48h.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero header */}
      <section className="relative overflow-hidden bg-[#1a1a1a] px-6 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Parlons de votre projet
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Contactez-
              <span className="font-playfair italic text-gold">nous</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Expliquez-nous votre projet en quelques lignes, nous revenons vers
              vous rapidement.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Form */}
          <FadeIn className="lg:col-span-2">
            <ContactForm />
          </FadeIn>

          {/* Sidebar Info */}
          <FadeIn delay={150}>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                <h3 className="text-base font-bold text-card-foreground">
                  Coordonnées
                </h3>
                <div className="mt-5 flex flex-col gap-5">
                  <a
                    href="tel:+33123456789"
                    className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        Téléphone
                      </p>
                      <p>01 23 45 67 89</p>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@artigold.fr"
                    className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p>contact@artigold.fr</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        Horaires
                      </p>
                      <p>Lun – Ven : 8h00 – 18h00</p>
                      <p>Sam : 9h00 – 13h00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        Zone d{"\u2019"}intervention
                      </p>
                      <p>Paris & Île-de-France</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366]/10 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-card-foreground">
                    WhatsApp
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {"\u00c9changez directement avec nous pour une r\u00e9ponse rapide."}
                  </p>
                </div>
              </a>

              <div className="rounded-2xl border border-gold/30 bg-gold/5 p-7">
                <h3 className="text-base font-bold text-card-foreground">
                  Réponse rapide
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {"Notre \u00e9quipe s\u2019engage \u00e0 vous r\u00e9pondre sous 48h ouvr\u00e9es. Pour les demandes urgentes, appelez-nous directement."}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  )
}
