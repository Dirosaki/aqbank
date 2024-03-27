import { Button } from '@/components/Button'
import { Popover } from '@/components/Popover'

import { Item } from './Item'
import { Trigger } from './Trigger'
import { useFilter } from './useFilter'

export function Filter() {
  const { filterIsOpen, selectedFilter, handleFilterToggle, handleSubmit, handleFilterOpen } =
    useFilter()

  return (
    <Popover open={filterIsOpen} onOpenChange={handleFilterOpen}>
      <Trigger />

      <Popover.Content
        align="start"
        className="w-[240px] rounded-xl border border-neutral-300 p-3 shadow-[0_3px_6px_-2px_#14151A0D,0_10px_16px_-3px_#14151A14]"
      >
        <header className="p-[6px]">
          <strong className="text-sm font-medium tracking-[0.5px] text-neutral-950">Status</strong>
        </header>

        <form id="form" className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <Item status="active" selectedValue={selectedFilter} onChange={handleFilterToggle} />
          <Item status="pending" selectedValue={selectedFilter} onChange={handleFilterToggle} />
          <Item status="canceled" selectedValue={selectedFilter} onChange={handleFilterToggle} />
          <Item status="draft" selectedValue={selectedFilter} onChange={handleFilterToggle} />
          <Item status="paused" selectedValue={selectedFilter} onChange={handleFilterToggle} />
        </form>

        <span className="my-4 block h-px  self-start bg-neutral-200" />

        <footer className="flex gap-2">
          <Button form="form" type="submit" size="xs" className="w-full">
            Filtrar
          </Button>
          <Popover.Close asChild>
            <Button type="button" variant="outline" size="xs" className="w-full">
              Cancelar
            </Button>
          </Popover.Close>
        </footer>
      </Popover.Content>
    </Popover>
  )
}
