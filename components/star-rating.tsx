import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  maxStars?: number
  className?: string
  dark?: boolean
}

export function StarRating({
  rating,
  maxStars = 5,
  className,
  dark = false,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, i) => {
          const filled = i < Math.floor(rating)
          const partial = !filled && i < rating
          return (
            <Star
              key={i}
              className={cn(
                "h-5 w-5",
                filled
                  ? "fill-gold text-gold"
                  : partial
                    ? "fill-gold/50 text-gold"
                    : dark
                      ? "fill-none text-white/30"
                      : "fill-none text-muted-foreground/30",
              )}
            />
          )
        })}
      </div>
      <span
        className={cn(
          "text-sm font-semibold",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {rating}/5
      </span>
    </div>
  )
}
