import { cn } from "../lib/utils"

interface BadgeProps {
  label: string
  variant?: "discount" | "amber" | "green" | "red" | "neutral"
  icon?: string | null
}

const variantStyles = {
  discount: "bg-[#14532D] text-white", 
  amber:    "bg-[#FAEEDA] text-[#633806]",
  green:    "bg-[#EAF3DE] text-[#27500A]",
  red:      "bg-[#FCEBEB] text-[#791F1F]",
  neutral:  "bg-muted text-muted-foreground border border-border",
}

export function Badge({ label, variant = "amber", icon = null }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium",
        variantStyles[variant]
      )}
      style={{
        borderRadius: "0 var(--spacing-4, 16px) var(--spacing-4, 16px) 0",
        padding: "var(--spacing-2, 8px) var(--spacing-4, 16px)",
      }}
    >
      {icon && <i className={`ti ti-${icon}`} aria-hidden="true" />}
      {label}
    </span>
  )
}