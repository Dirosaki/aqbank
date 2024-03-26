import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

export function Image({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image className={cn('aspect-square h-full w-full', className)} {...props} />
  )
}
