import { cn } from '@/utils/cn'
import { formatCurrency } from '@/utils/formatters'

import { Icon, IconProps } from './Icon'

type InfoProps = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  title: string
  variant?: 'primary' | 'secondary'
  icon?: IconProps['name']
  value: number
  description: string
}

export function Info({ variant, className, title, icon, value, description, as }: InfoProps) {
  const Comp = as ?? 'li'

  return (
    <Comp
      className={cn(
        'flex flex-col gap-1 p-6 text-primary',
        variant === 'secondary' && 'text-neutral-800',
        className
      )}
    >
      <strong
        className={cn(
          'text-sm font-medium tracking-[0.5px] text-white',
          variant === 'secondary' && 'text-black'
        )}
      >
        {title}
      </strong>

      <p
        className={cn('text-base font-medium tracking-[0.5px]', icon && 'flex items-center gap-1')}
      >
        {icon && <Icon name={icon} size={20} />} {formatCurrency(value)}
      </p>

      <span
        className={cn(
          'text-sm tracking-[0.5px] text-white/60',
          variant === 'secondary' && 'text-neutral-400'
        )}
      >
        {description}
      </span>
    </Comp>
  )
}
