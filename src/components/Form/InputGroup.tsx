import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type InputGroupProps = ComponentProps<'div'>

export function InputGroup({ className, ...props }: InputGroupProps) {
  return <div className={cn('flex flex-col gap-2', className)} {...props} />
}
