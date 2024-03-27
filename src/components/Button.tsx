import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold tracking-[0.5px] outline-none ring-offset-white transition-all focus-visible:bg-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/50 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-neutral-950 text-zinc-50 hover:bg-neutral-900',
        outline:
          'border border-neutral-300 bg-white text-neutral-800 focus-visible:bg-white focus-visible:ring-secondary enabled:hover:bg-neutral-50',
        secondary:
          'border-0 bg-primary text-neutral-950  hover:bg-primary-200 focus-visible:bg-primary focus-visible:ring-primary-600/35',
        ghost: 'hover:bg-zinc-100 hover:text-zinc-900',
        link: 'text-zinc-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-4 py-2',
        xs: 'h-8 rounded-[10px] px-[10px] text-sm font-medium',
        sm: 'h-11 rounded-xl px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'
