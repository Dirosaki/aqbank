import { ComponentProps, ReactElement, cloneElement } from 'react'

import { DropdownItem } from '@/components/Dropdown'
import { Icon, IconProps } from '@/components/Icon'
import { cn } from '@/utils/cn'

type ItemProps = ComponentProps<typeof DropdownItem> & {
  icon: IconProps['name']
  title: string
  children?: ReactElement
  asLink?: boolean
}

export function Item({ className, children, icon, title, asLink, ...props }: ItemProps) {
  return (
    <DropdownItem
      className={cn(
        'flex h-9 items-center gap-2 rounded-lg fill-neutral-800 px-2 py-[2px] text-sm tracking-[0.5px] text-neutral-950 transition-colors disabled:fill-neutral-400 disabled:text-neutral-400 [&:not(:disabled)]:hover:bg-neutral-50 border-transparent [&:not(:hover)]:focus-visible:border-primary/50 border-2',
        className
      )}
      {...props}
      asChild
    >
      {cloneElement(
        children ?? <button type="button" aria-label={title} />,
        children?.props,
        <>
          <Icon name={icon} size={20} color="inherit" />
          {title}
        </>
      )}
    </DropdownItem>
  )
}
