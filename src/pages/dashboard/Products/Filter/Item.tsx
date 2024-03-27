import { ChangeEvent } from 'react'

import { Badge, StatusProps } from '@/components/Badge'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils/cn'
import { getStatus } from '@/utils/getStatus'

type ItemProps = {
  status: StatusProps
  selectedValue: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Item({ status, selectedValue, onChange }: ItemProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-between rounded-md px-[6px] py-2 text-neutral-800'
      )}
    >
      <input
        type="checkbox"
        name="status"
        value={status}
        className="peer absolute inset-0 cursor-pointer appearance-none rounded-md outline-none transition-colors checked:bg-neutral-100 hover:bg-neutral-50 checked:hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-primary/50"
        checked={selectedValue === status}
        onChange={onChange}
      />
      <Badge type="table" variant={status} className="pointer-events-none relative font-medium">
        {getStatus[status]}
      </Badge>

      <Icon
        name="check"
        size={20}
        className="pointer-events-none relative hidden peer-checked:block"
      />
    </div>
  )
}
