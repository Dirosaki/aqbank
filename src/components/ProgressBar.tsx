import * as ProgressPrimitive from '@radix-ui/react-progress'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect, useState } from 'react'

import { cn } from '@/utils/cn'

type ProgressBarRef = ElementRef<typeof ProgressPrimitive.Root>

type ProgressBarProps = ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
  color?: string
}

export const ProgressBar = forwardRef<ProgressBarRef, ProgressBarProps>(
  ({ className, value, color, ...props }, ref) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setTimeout(() => setProgress(value ?? 0), 100)
      return () => clearTimeout(timer)
    }, [value])

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          'relative h-2 w-full overflow-hidden rounded-full bg-neutral-100 text-secondary',
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn('size-full flex-1 rounded-full transition-all', color ?? 'bg-current')}
          style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    )
  }
)
ProgressBar.displayName = 'ProgressBar'
