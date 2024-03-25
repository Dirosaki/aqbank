import { ComponentProps, ReactElement, cloneElement, forwardRef } from 'react'

import { IconProps } from '@/components/Icon'
import { cn } from '@/utils/cn'

type TextFieldProps = Omit<ComponentProps<'input'>, 'children'> & {
  hasError?: boolean
  leftIcon?: ReactElement<IconProps>
  rightIcon?: ReactElement<IconProps>
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, leftIcon, rightIcon, hasError, ...props }, ref) => (
    <div className="relative flex w-full items-center">
      <input
        className={cn(
          'flex h-11 w-full rounded-xl border border-neutral-300  px-3 py-2 text-sm text-neutral-950 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-neutral-400 tracking-[0.5px]',
          leftIcon && 'pl-[40px]',
          rightIcon && 'pr-[40px]',
          hasError &&
            'border-error-200 hover:border-error-400 focus-visible:border-error-500 focus-visible:ring-error-500/50',
          className
        )}
        ref={ref}
        {...props}
      />

      {leftIcon &&
        cloneElement(leftIcon, {
          size: 20,
          color: 'currentColor',
          className: 'absolute left-4 text-neutral-600',
        })}

      {rightIcon}
    </div>
  )
)
TextField.displayName = 'TextField'
