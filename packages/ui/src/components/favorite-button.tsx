import { HeartIcon } from "lucide-react"
import { cn } from "../lib/utils"

interface FavoriteButtonProps {
  isAuthenticated: boolean
  isFavorite?: boolean
  disabled?: boolean
  onFavoriteToggle?: () => void
  onAuthRequired?: () => void
}

export function FavoriteButton({
  isAuthenticated = false,
  isFavorite = false,
  disabled = false,
  onFavoriteToggle,
  onAuthRequired,
}: FavoriteButtonProps) {
  function handleClick() {
    if (!isAuthenticated) {
      onAuthRequired?.()  // abre modal de registro
    } else {
      onFavoriteToggle?.() // agrega/quita de favoritos
    }
  }

  return (
   <button
  onClick={handleClick}
  disabled={disabled}
  aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
  className={cn(
    "flex items-center justify-center transition-colors",
    disabled && "opacity-40 cursor-not-allowed"
  )}
>
  <HeartIcon
    size={24}
    className={isFavorite ? "text-white fill-white" : "text-white fill-none"}
  />
</button>
  )
}