import { NavLink } from 'react-router-dom'

import { Badge } from '@/components/Badge'
import { Icon, IconProps } from '@/components/Icon'
import { cn } from '@/utils/cn'

export type ItemProps = {
  path: string
  icon: IconProps['name']
  title: string
  badge?: string
  className?: string
  disabled?: boolean
}

export function Item({ path, icon, title, badge, className, disabled }: ItemProps) {
  return (
    <li className="py-[2px]">
      <NavLink
        to={path}
        tabIndex={disabled ? -1 : 0}
        className={({ isActive }) =>
          cn(
            'flex w-full items-center gap-2 rounded-[10px] transition-colors px-2 py-[6px] text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary hover:text-[#14151A]',
            className,
            isActive && 'bg-neutral-100 text-[#14151A]',
            disabled && 'text-neutral-500 pointer-events-none'
          )
        }
      >
        <Icon name={icon} size={20} />
        <span className={cn('text-[#14151A]', disabled && 'text-neutral-500')}>{title}</span>
        {badge && <Badge>{badge}</Badge>}
      </NavLink>
    </li>
  )
}
