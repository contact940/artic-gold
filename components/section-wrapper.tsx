import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  variant?: "default" | "muted" | "dark" | "dark-muted"
}

export function SectionWrapper({
  children,
  className,
  id,
  variant = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-6 py-24 md:py-32",
        variant === "default" && "bg-background",
        variant === "muted" && "bg-secondary",
        variant === "dark" && "bg-[#1a1a1a] text-white",
        variant === "dark-muted" && "bg-[#111111] text-white",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
