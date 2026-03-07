"use client"

import { useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"
import { Send, User, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

const particulierProjectTypes = [
  "Rénovation énergétique",
  "Rénovation intérieure",
  "Rénovation complète clé en main",
  "Extension & surélévation",
  "Aménagement extérieur",
  "Autre",
]

const professionnelProjectTypes = [
  "Aménagement de bureaux",
  "Commerce & retail",
  "Industrie & entrepôt",
  "Rénovation énergétique",
  "Mise aux normes",
  "Rénovation complète clé en main",
  "Autre",
]

const secteurActivite = [
  "Commerce & Distribution",
  "Industrie & Production",
  "Services & Tertiaire",
  "Restauration & Hôtellerie",
  "Santé & Bien-être",
  "Immobilier & Promotion",
  "Éducation & Formation",
  "Autre",
]

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
const labelClass = "mb-2 block text-sm font-medium text-card-foreground"

function Field({
  id,
  label,
  required,
  children,
}: {
  id?: string
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
    </div>
  )
}

function ContactFormInner() {
  const searchParams = useSearchParams()
  const preselectedType = searchParams.get("type") ?? ""

  const initialProfile =
    preselectedType === "professionnel"
      ? "professionnel"
      : preselectedType === "particulier"
        ? "particulier"
        : ""

  const [profile, setProfile] = useState<"particulier" | "professionnel" | "">(
    initialProfile as "particulier" | "professionnel" | "",
  )

  const [formData, setFormData] = useState({
    // shared
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    // professionnel only
    societe: "",
    secteur: "",
    fonction: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleProfileChange(p: "particulier" | "professionnel") {
    setProfile(p)
    setFormData((prev) => ({
      ...prev,
      projectType: "",
      societe: "",
      secteur: "",
      fonction: "",
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const isPro = profile === "professionnel"
  const projectTypes = isPro ? professionnelProjectTypes : particulierProjectTypes

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <Send className="h-8 w-8 text-gold" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-card-foreground">
          Message envoyé !
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Merci pour votre message. Notre équipe vous recontactera sous 48h.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-6">
        {/* Profile toggle */}
        <div>
          <p className={labelClass}>
            Je suis <span className="text-gold">*</span>
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleProfileChange("particulier")}
              className={cn(
                "flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all",
                profile === "particulier"
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-input bg-background text-muted-foreground hover:border-gold/50 hover:text-foreground",
              )}
            >
              <User className="h-4 w-4" />
              Particulier
            </button>
            <button
              type="button"
              onClick={() => handleProfileChange("professionnel")}
              className={cn(
                "flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all",
                profile === "professionnel"
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-input bg-background text-muted-foreground hover:border-gold/50 hover:text-foreground",
              )}
            >
              <Briefcase className="h-4 w-4" />
              Professionnel
            </button>
          </div>
        </div>

        {/* Professional company fields */}
        {isPro && (
          <>
            {/* Société */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="societe" label="Raison sociale" required>
                <input
                  type="text"
                  id="societe"
                  name="societe"
                  required
                  value={formData.societe}
                  onChange={handleChange}
                  placeholder="Nom de votre entreprise"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Secteur & Fonction */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="secteur" label="Secteur d'activité" required>
                <select
                  id="secteur"
                  name="secteur"
                  required
                  value={formData.secteur}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Sélectionnez...</option>
                  {secteurActivite.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="fonction" label="Votre fonction">
                <input
                  type="text"
                  id="fonction"
                  name="fonction"
                  value={formData.fonction}
                  onChange={handleChange}
                  placeholder="Directeur, Gérant, Chef de projet..."
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="border-t border-border pt-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Contact de l'entreprise
              </p>
            </div>
          </>
        )}

        {/* Nom & Prenom — always visible once a profile is chosen */}
        {profile && (
          <>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="nom" label="Nom" required>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className={inputClass}
                />
              </Field>
              <Field id="prenom" label="Prénom" required>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Email & Phone */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="email" label="Email" required>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={isPro ? "contact@societe.fr" : "votre@email.fr"}
                  className={inputClass}
                />
              </Field>
              <Field id="phone" label="Téléphone">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Project Type */}
            <Field id="projectType" label="Type de projet" required>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Sélectionnez...</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>

            {/* Message */}
            <Field id="message" label="Message" required>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  isPro
                    ? "Décrivez votre projet, vos contraintes, votre calendrier, le budget estimé..."
                    : "Décrivez votre projet, vos attentes, votre calendrier..."
                }
                className={cn(inputClass, "resize-none")}
              />
            </Field>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-dark sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Envoyer mon message
            </button>
          </>
        )}
      </div>
    </form>
  )
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <p className="text-muted-foreground">Chargement du formulaire...</p>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  )
}
