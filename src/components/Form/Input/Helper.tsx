import { ComponentProps } from 'react'

import { Icon } from '@/components/Icon'

type HelperProps = Omit<ComponentProps<'span'>, 'children'> & {
  helperText: string | undefined
}

export function Helper({ className, helperText, ...props }: HelperProps) {
  if (!helperText) return null

  return (
    <span className="flex items-center gap-1 text-sm tracking-[0.5px] text-error-500" {...props}>
      <Icon name="error" size={16} />
      {helperText}
    </span>
  )
}
