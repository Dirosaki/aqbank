import { Link } from 'react-router-dom'

import { TableData } from '@/@types/table'
import { Dropdown, DropdownContent, DropdownTrigger } from '@/components/Dropdown'
import { Icon } from '@/components/Icon'

import { Item } from './Item'

type ProductDetailsMenuProps = {
  row: TableData
}

export function ProductDetailsMenu({ row }: ProductDetailsMenuProps) {
  const { id, status } = row

  const isCanceled = status === 'canceled'
  const isPaused = status === 'paused'

  return (
    <Dropdown>
      <DropdownTrigger
        type="button"
        aria-label="modal"
        className="flex size-8 items-center justify-center rounded-[10px] text-neutral-800 outline-none transition-all focus-visible:ring-2 focus-visible:ring-neutral-300/50 [&:not(:focus-visible)]:hover:bg-neutral-100"
      >
        <Icon name="more-y" size={16} />
      </DropdownTrigger>

      <DropdownContent
        align="end"
        className="shadow:[0_3px_6px_-2px_#14151A0D,0_10px_16px_-3px_#14151A14] flex w-60 flex-col rounded-xl border border-neutral-300 bg-white p-1"
      >
        <Item title="Detalhes" icon="file-chart">
          <Link to={`/products?productId=${id}`} />
        </Item>

        <Item title={isPaused ? 'Iniciar' : 'Pausar'} icon={isPaused ? 'play' : 'pause'} />
        <Item title="Baixar relatório" icon="download" disabled />
        <Item
          title={isCanceled ? 'Ativar' : 'Cancelar'}
          icon={isCanceled ? 'checkbox-circle' : 'close-circle'}
          className={isCanceled ? 'fill-success-500' : 'fill-error-500'}
        />
      </DropdownContent>
    </Dropdown>
  )
}
