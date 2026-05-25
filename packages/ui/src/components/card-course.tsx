import { Card, CardContent, CardFooter } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { FavoriteButton } from "./favorite-button"
import { RatingBadge } from "./rating-badge"
import { BrandButton } from "./brand-button"
import { Clock, MapPin, BarChart2, StarIcon } from "lucide-react"

interface CardCursoProps {
  title: string
  category: string
  price: number
  rating: number
  hours: number
  modality: string
  level: string
  image: string
  institution: string
  type: "evaluative" | "transactional"
  // Solo transaccional
  badge?: string
  description?: string
  isFavorite?: boolean
  isAuthenticated: boolean
  onAddToCart?: () => void
  onFavoriteToggle?: () => void
  onAuthRequired?: () => void
}

export function CardCourse({
  title,
  category,
  price,
  rating,
  hours,
  modality,
  level,
  image,
  institution,
  type,
  badge,
  description,
  isFavorite,
  isAuthenticated,
  onAddToCart,
  onFavoriteToggle,
  onAuthRequired
}: CardCursoProps) {
  return (
    <Card className="p-0 overflow-hidden">
      {/* Imagen hero */}
      <div className="relative">
        <img src={image} alt={title} className="w-full object-cover" />

        {/* Badge descuento — solo transaccional */}
        {type === "transactional" && badge && (
          <div className="absolute bottom-0 left-0">
            <Badge label={badge} variant="discount" />
          </div>
        )}


        {type === "transactional" && (
          <div className="absolute top-3 right-3">
            <FavoriteButton
              isAuthenticated={isAuthenticated}
              isFavorite={isFavorite}
              onFavoriteToggle={onFavoriteToggle}
              onAuthRequired={onAuthRequired}
            />
          </div>
        )}

        {/* Rating — solo evaluativa */}
        {type === "evaluative" && (
          <RatingBadge rating={4.5} />
        )}

        <BrandButton src="" alt="" />
      </div>

      <CardContent className="flex flex-col gap-2">

        {/* Título */}
        <h3 className="font-medium text-sm leading-snug">{title}</h3>

        {/* Categoría */}
        <span className="text-xs text-muted-foreground">{category}</span>

        {/* Rating con estrella — solo transaccional */}
        {type === "transactional" && (
          <div className="flex items-center gap-1">
            <StarIcon size={16} />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        )}

        {/* Descripción — solo transaccional */}
        {type === "transactional" && description && (
          <p className="text-xs text-muted-foreground line-clamp-3">{description}</p>
        )}

        {/* Meta info */}
        {type === "evaluative" ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock size={12} /> {hours} horas
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {modality}
            </span>
            <span className="flex items-center gap-1 col-span-1">
              <BarChart2 size={12} /> {level}
            </span>
            <span className="flex items-center justify-end font-semibold text-foreground text-base">
              ${price.toLocaleString()} MXN
            </span>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock size={12} /> {hours} horas</span>
              <span className="flex items-center gap-1"><MapPin size={12} /> {modality}</span>
              <span className="flex items-center gap-1 col-span-1">
                <BarChart2 size={12} /> {level}
              </span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="font-semibold text-base">${price.toLocaleString()} MXN</span>
              <Button size="sm" onClick={onAddToCart}>Agregar al carrito</Button>
            </div>
          </>
        )}

      </CardContent>
    </Card>
  )
}