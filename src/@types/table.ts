import { StatusProps } from '@/components/Badge'

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
