import { cn } from '@/utils/cn'

type BadgeProps = {
  children: string | number
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'rounded border border-neutral-300 bg-white px-[2px] text-xs leading-[18px] tracking-[0.5px] flex items-center',
        className
      )}
    >
      {children}
    </span>
  )
}
