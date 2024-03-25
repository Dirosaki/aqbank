import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type LabelProps = ComponentProps<'label'> & {
  helper?: string
  htmlFor: string
}

export function Label({ className, htmlFor, children, helper, ...props }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('text-sm font-medium text-neutral-950 tracking-[0.5px] max-w-max', className)}
      {...props}
    >
      {children}
      {helper && <span className="ml-1 font-normal text-zinc-400">({helper})</span>}
    </label>
  )
}
