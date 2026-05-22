import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

interface RatingBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    rating: number
}

function RatingBadge({ rating, className, ...props }: RatingBadgeProps) {
    return (
        <div
            data-slot="rating-badge"
            className={cn(
                "absolute top-0 right-0 inline-flex items-center gap-2 px-4 py-2",
                "rounded-tr-2xl rounded-bl-2xl bg-primary text-[var(--ds-color-neutral-complimentary)]",
                "font-poppins text-sm font-bold leading-snug",
                className
            )}
            {...props}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0"
            >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{rating.toFixed(1)}</span>
        </div>
    )
}

export { RatingBadge }