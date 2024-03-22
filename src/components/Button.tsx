import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold tracking-[0.5px] ring-offset-white transition-all focus-visible:bg-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/50 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-neutral-950 text-zinc-50 hover:bg-neutral-900',
        outline: 'border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900',
        secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80',
        ghost: 'hover:bg-zinc-100 hover:text-zinc-900',
        link: 'text-zinc-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-4 py-2',
        sm: 'h-9 rounded-xl px-3',
        lg: 'h-11 rounded-xl px-8',
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
