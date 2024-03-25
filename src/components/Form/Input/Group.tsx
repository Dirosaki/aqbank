import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type GroupProps = ComponentProps<'div'>

export function Group({ className, ...props }: GroupProps) {
  return <div className={cn('flex flex-col gap-2', className)} {...props} />
}
