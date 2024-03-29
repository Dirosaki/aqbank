import { MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { StatusProps } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Popover } from '@/components/Popover'
import { cn } from '@/utils/cn'
import { getStatus } from '@/utils/getStatus'

export function Trigger() {
  const [searchParams, setSearchParams] = useSearchParams()

  const activeFilter = searchParams.get('status') as StatusProps | null

  function handleClearFilter(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    searchParams.delete('status')
    setSearchParams(searchParams)
  }

  return (
    <Popover.Trigger asChild>
      <Button
        type="button"
        variant="outline"
        size="xs"
        className={cn(
          'col-span-2 flex min-w-[86px] gap-2',
          activeFilter && 'bg-neutral-950 text-white enabled:hover:bg-neutral-900'
        )}
      >
        {!activeFilter && (
          <>
            <Icon name="filter" size={18} />
            Filtrar
          </>
        )}

        {activeFilter && (
          <>
            {getStatus[activeFilter] || 'Erro'}
            <button type="button" aria-label="limpar filtro" onClick={handleClearFilter}>
              <Icon name="close-circle" size={18} />
            </button>
          </>
        )}
      </Button>
    </Popover.Trigger>
  )
}
