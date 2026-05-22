import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

interface BrandButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
}

function BrandButton({ src, alt, className, ...props }: BrandButtonProps) {
  return (
    <div
      data-slot="brand-button"
      className={cn(
        "absolute bottom-2 right-4 flex h-12 w-12 items-center justify-center",
        "rounded-xl border border-[var(--ds-color-neutral-600)] bg-white p-2",
        className
      )}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain"
      />
    </div>
  )
}

export { BrandButton }