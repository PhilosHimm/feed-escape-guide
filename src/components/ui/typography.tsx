import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 
    | "h1" 
    | "h2" 
    | "h3" 
    | "h4" 
    | "h5" 
    | "h6" 
    | "p" 
    | "blockquote" 
    | "code" 
    | "lead" 
    | "large" 
    | "small" 
    | "muted"
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", as, children, ...props }, ref) => {
    const Component = as || getDefaultElement(variant)
    
    return (
      <Component
        className={cn(getVariantStyles(variant), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Typography.displayName = "Typography"

function getDefaultElement(variant: TypographyProps["variant"]) {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return variant
    case "blockquote":
      return "blockquote"
    case "code":
      return "code"
    default:
      return "p"
  }
}

function getVariantStyles(variant: TypographyProps["variant"]) {
  switch (variant) {
    case "h1":
      return "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
    case "h2":
      return "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
    case "h3":
      return "scroll-m-20 text-2xl font-semibold tracking-tight"
    case "h4":
      return "scroll-m-20 text-xl font-semibold tracking-tight"
    case "h5":
      return "scroll-m-20 text-lg font-semibold tracking-tight"
    case "h6":
      return "scroll-m-20 text-base font-semibold tracking-tight"
    case "p":
      return "leading-7 [&:not(:first-child)]:mt-6"
    case "blockquote":
      return "mt-6 border-l-2 pl-6 italic"
    case "code":
      return "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
    case "lead":
      return "text-xl text-muted-foreground"
    case "large":
      return "text-lg font-semibold"
    case "small":
      return "text-sm font-medium leading-none"
    case "muted":
      return "text-sm text-muted-foreground"
    default:
      return ""
  }
}

// Individual component exports for convenience
export const TypographyH1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Typography variant="h1" ref={ref} className={className} {...props} />
))
TypographyH1.displayName = "TypographyH1"

export const TypographyH2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Typography variant="h2" ref={ref} className={className} {...props} />
))
TypographyH2.displayName = "TypographyH2"

export const TypographyH3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Typography variant="h3" ref={ref} className={className} {...props} />
))
TypographyH3.displayName = "TypographyH3"

export const TypographyH4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Typography variant="h4" ref={ref} className={className} {...props} />
))
TypographyH4.displayName = "TypographyH4"

export const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <Typography variant="p" ref={ref} className={className} {...props} />
))
TypographyP.displayName = "TypographyP"

export const TypographyBlockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <Typography variant="blockquote" ref={ref} className={className} {...props} />
))
TypographyBlockquote.displayName = "TypographyBlockquote"

export const TypographyLead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <Typography variant="lead" ref={ref} className={className} {...props} />
))
TypographyLead.displayName = "TypographyLead"

export const TypographyLarge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Typography variant="large" ref={ref} className={className} {...props} />
))
TypographyLarge.displayName = "TypographyLarge"

export const TypographySmall = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <Typography variant="small" as="small" ref={ref} className={className} {...props} />
))
TypographySmall.displayName = "TypographySmall"

export const TypographyMuted = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <Typography variant="muted" ref={ref} className={className} {...props} />
))
TypographyMuted.displayName = "TypographyMuted"

export { Typography }
