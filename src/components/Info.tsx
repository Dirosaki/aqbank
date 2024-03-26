import { cn } from '@/utils/cn'
import { formatCurrency } from '@/utils/formatters'

import { Icon, IconProps } from './Icon'

type InfoProps = {
  className?: string
  title: string
  icon?: IconProps['name']
  value: number
  description: string
}

export function Info({ className, title, icon, value, description }: InfoProps) {
  return (
    <li className={cn('flex flex-col gap-1 p-6 text-primary', className)}>
      <strong className="text-sm font-medium tracking-[0.5px] text-white">{title}</strong>

      <p
        className={cn('text-base font-medium tracking-[0.5px]', icon && 'flex items-center gap-1')}
      >
        {icon && <Icon name={icon} size={20} />} {formatCurrency(value)}
      </p>

      <span className="text-sm tracking-[0.5px] text-white/60">{description}</span>
    </li>
  )
}
