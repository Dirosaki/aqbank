import { ComponentProps, forwardRef } from 'react'

import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'

type CheckboxProps = ComponentProps<'input'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <div className={cn('relative flex items-center justify-center w-min', className)}>
      <input
        type="checkbox"
        className="peer size-5 cursor-pointer appearance-none rounded border border-neutral-300 transition-colors checked:bg-neutral-950 focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-neutral-950/50"
        ref={ref}
        {...props}
      />
      <Icon
        name="check"
        size={16}
        className="pointer-events-none absolute hidden text-white peer-checked:block"
      />
    </div>
  )
)
Checkbox.displayName = 'Checkbox'
