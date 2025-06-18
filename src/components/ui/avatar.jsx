import { forwardRef } from "react"

const Avatar = forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props} />
))
Avatar.displayName = "Avatar"

const AvatarImage = forwardRef(({ className = "", ...props }, ref) => (
  <img ref={ref} className={`aspect-square h-full w-full object-cover ${className}`} {...props} />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex h-full w-full items-center justify-center rounded-full bg-muted bg-slate-100 text-slate-600 text-sm font-medium ${className}`}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
