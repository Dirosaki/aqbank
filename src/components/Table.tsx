import { Table as ReactTableProps, flexRender } from '@tanstack/react-table'
import { ReactNode } from 'react'

import { cn } from '@/utils/cn'

type TableProps<T> = {
  table: ReactTableProps<T>
  renderWhenEmpty?: ReactNode
}

export function Table<T>({ table, renderWhenEmpty }: TableProps<T>) {
  const count = table.getRowCount()

  return (
    <div
      className={cn(
        'overflow-y-auto rounded-xl border border-neutral-200 scrollbar-webkit',
        count >= 7 && 'rounded-e-none'
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

      {!count && renderWhenEmpty && renderWhenEmpty}
    </div>
  )
}
