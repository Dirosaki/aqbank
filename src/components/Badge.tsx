import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const badgeVariants = cva(
  'flex min-w-6 items-center justify-center rounded text-xs leading-[18px] tracking-[0.5px]',
  {
    variants: {
      variant: {
        default: 'bg-white text-neutral-950',
        pending: 'bg-warning-200 text-warning-800',
        active: 'bg-success-200 text-success-800',
        paused: 'bg-neutral-100 text-neutral-800',
        draft: 'bg-info-200 text-info-800',
        canceled: 'bg-error-200 text-error-800',
      },
      type: {
        default: 'border border-neutral-300 px-[2px]',
        table: 'h-6 rounded-md border-0 px-[6px] py-[2px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      type: 'default',
    },
  }
)

type BadgeProps = VariantProps<typeof badgeVariants> & {
  children: string | number
  className?: string
}

export type StatusProps = NonNullable<
  Exclude<VariantProps<typeof badgeVariants>['variant'], 'default'>
>

export function Badge({ children, className, variant, type }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, type, className }))}>
      <span>{children}</span>
    </span>
  )
}
