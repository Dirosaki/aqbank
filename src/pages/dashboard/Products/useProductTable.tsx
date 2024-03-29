import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useSearchParams } from 'react-router-dom'

import { TableData } from '@/@types/table'
import { Avatar } from '@/components/Avatar'
import { Badge } from '@/components/Badge'
import { Icon } from '@/components/Icon'
import { products } from '@/data/products'
import { formatCurrency, formatDate, formatTime } from '@/utils/formatters'
import { getStatus } from '@/utils/getStatus'

export function useProductTable() {
  const [searchParams] = useSearchParams()
  const status = searchParams.get('status')

  const data = status ? products.filter((product) => product.status === status) : products

  const columnHelper = createColumnHelper<TableData>()
  const columns = [
    columnHelper.accessor('product', {
      header: 'Produto',
      cell: ({ getValue, row }) => (
        <div className="flex gap-2">
          <Avatar>
            <Avatar.Fallback className="bg-info-100 text-base text-info-800">
              Eduardo
            </Avatar.Fallback>
          </Avatar>
          <div className="flex flex-col gap-[2px]">
            <span className="text-sm font-medium tracking-[0.5px] text-neutral-950">
              {getValue()}
            </span>
            <small className="text-xs font-normal tracking-[0.5px] text-neutral-600">
              {row.original.category}
            </small>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('value', {
      header: () => (
        <span>
          Valor unitário <span className="text-neutral-500">(R$)</span>
        </span>
      ),
      cell: ({ getValue }) => formatCurrency(getValue()),
    }),
    columnHelper.accessor('sold', {
      header: 'Vendido',
      cell: ({ getValue, row }) => (
        <>
          <span>{formatCurrency(getValue())}</span>
          <small className="mt-[2px] block text-xs font-normal tracking-[0.5px] text-neutral-600">
            Comissões:&nbsp;
            <span className="text-neutral-800">{formatCurrency(row.original.commission)}</span>
          </small>
        </>
      ),
    }),
    columnHelper.accessor('status', {
      header: () => <span className="block text-center">Status</span>,
      cell: ({ getValue }) => (
        <div className="flex justify-center">
          <Badge type="table" variant={getValue()}>
            {getStatus[getValue()]}
          </Badge>
        </div>
      ),
    }),
    columnHelper.accessor('createdAt', {
      header: 'Criado em',
      cell: ({ getValue }) => (
        <>
          <span className="text-neutral-800">{formatDate(getValue())}</span>
          <small className="mt-[2px] block text-xs font-normal tracking-[0.5px] text-neutral-600">
            {formatTime(getValue())}
          </small>
        </>
      ),
    }),
    columnHelper.accessor('quantity', {
      header: () => <span className="block text-center">Quantidade</span>,
      cell: ({ getValue }) => (
        <div className="flex justify-center">
          <Badge type="table" className="bg-info-200 text-info-800">
            {getValue()}
          </Badge>
        </div>
      ),
    }),
    columnHelper.accessor('affiliate', {
      header: () => <span className="block text-center">Afiliados</span>,
      cell: ({ getValue }) => (
        <div className="flex justify-center">
          <Badge type="table" className="bg-neutral-100 text-neutral-800">
            {getValue()}
          </Badge>
        </div>
      ),
    }),
    columnHelper.accessor('id', {
      header: undefined,
      cell: () => (
        <button
          type="button"
          aria-label="modal"
          className="flex size-8 items-center justify-center rounded-[10px] text-neutral-800 outline-none transition-all focus-visible:ring-2 focus-visible:ring-neutral-300/50 [&:not(:focus-visible)]:hover:bg-neutral-100"
        >
          <Icon name="more-y" size={16} />
        </button>
      ),
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const quantity = table.getRowCount()
  const empty = !quantity

  return {
    table,
    empty,
    quantity,
  }
}
