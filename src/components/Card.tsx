import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type CardProps = ComponentProps<'div'>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-xl border border-neutral-200 bg-white p-6', className)}
      {...props}
    />
  )
}
