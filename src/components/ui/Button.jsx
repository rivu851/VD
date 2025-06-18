import { forwardRef } from "react"

const Button = forwardRef(({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 bg-slate-900 text-white hover:bg-slate-800",
    ghost: "hover:bg-accent hover:text-accent-foreground hover:bg-slate-100",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground border-slate-200 hover:bg-slate-100",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 bg-slate-100 text-slate-900 hover:bg-slate-200",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  )
})

Button.displayName = "Button"

export { Button }