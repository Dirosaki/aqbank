import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'
import { getInitials } from '@/utils/getInitials'

type FallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback> & {
  children: string
}

export function Fallback({ className, children, ...props }: FallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 select-none',
        className
      )}
      {...props}
    >
      {getInitials(children)}
    </AvatarPrimitive.Fallback>
  )
}
