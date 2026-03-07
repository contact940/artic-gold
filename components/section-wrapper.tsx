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
        "px-6 py-20 md:py-28",
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
