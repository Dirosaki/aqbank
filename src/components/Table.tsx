import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { cn } from '@/utils/cn'
import { formatCurrency, formatDate, formatTime } from '@/utils/formatters'
import { getStatus } from '@/utils/getStatus'

import { Avatar } from './Avatar'
import { Badge, StatusProps } from './Badge'
import { Icon } from './Icon'

export type TableData = {
  id: number
  product: string
  category: string
  value: number
  sold: number
  commission: number
  status: StatusProps
  createdAt: string
  quantity: number
  affiliate: number
}

type TableProps = {
  data: TableData[]
}

export function Table({ data }: TableProps) {
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
        <div>
          <button
            type="button"
            aria-label="modal"
            className="flex size-8 items-center justify-center rounded-[10px] text-neutral-800 outline-none transition-all focus-visible:ring-2 focus-visible:ring-neutral-300/50 [&:not(:focus-visible)]:hover:bg-neutral-100"
          >
            <Icon name="more-y" size={16} />
          </button>
        </div>
      ),
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div
      className={cn(
        'overflow-y-auto rounded-xl border border-neutral-200 scrollbar-webkit',
        data.length >= 7 && 'rounded-e-none'
      )}
    >
      <table className="w-full">
        <thead className="sticky top-0 z-10 h-9 border-b border-neutral-200 bg-neutral-100 text-sm font-normal tracking-[0.5px] text-neutral-800 shadow-[0_0_0_1px_#DADADA]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-3 text-left font-normal">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white text-sm font-medium tracking-[0.5px] text-neutral-950">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-neutral-200 last:border-b-0">
              {row.getVisibleCells().map((cell) => (
                <td className="p-3 text-left font-medium" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {!data.length && (
        <div className="flex w-full justify-center gap-2 bg-white py-6 text-sm font-medium tracking-[0.5px] text-neutral-400">
          <Icon name="emotion-normal" size={20} />
          <span>Nenhum produto encontrado</span>
        </div>
      )}
    </div>
  )
}
