import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

export function Avatar({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
}
