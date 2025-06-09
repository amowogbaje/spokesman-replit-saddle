import * as React from "react"
import { cn } from "@/lib/utils"

interface AppIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number
  alt?: string
}

export function AppIcon({
  size = 40,
  alt = "App Icon",
  src = "/ssoh.png",
  className,
  ...props
}: AppIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("rounded-full object-cover", className)}
      {...props}
    />
  )
}
