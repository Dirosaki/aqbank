import { TableData } from '@/components/Table'

export const products = [
  {
    id: 1,
    product: 'E-book',
    category: 'Fitness',
    value: 19.99,
    sold: 70124.2,
    commission: 20879.2,
    status: 'pending',
    createdAt: '2023-01-26T08:58:00.000Z',
    quantity: 358,
    affiliate: 58,
  },
  {
    id: 2,
    product: 'Cursos online',
    category: 'Moda',
    value: 23.7,
    sold: 27509,
    commission: 26789,
    status: 'active',
    createdAt: '2023-01-26T12:34:00.000Z',
    quantity: 883,
    affiliate: 14,
  },
  {
    id: 3,
    product: 'Plugin',
    category: 'Marketing',
    value: 69.82,
    sold: 15789,
    commission: 3456,
    status: 'paused',
    createdAt: '2023-01-26T03:44:00.000Z',
    quantity: 429,
    affiliate: 2,
  },
  {
    id: 4,
    product: 'Assinatura',
    category: 'Outros',
    value: 47.89,
    sold: 3621,
    commission: 22345,
    status: 'draft',
    createdAt: '2023-01-26T02:45:00.000Z',
    quantity: 154,
    affiliate: 9,
  },
  {
    id: 5,
    product: 'Mentoria',
    category: 'Fitness',
    value: 61.93,
    sold: 19674,
    commission: 5432,
    status: 'canceled',
    createdAt: '2023-01-26T08:00:00.000Z',
    quantity: 177,
    affiliate: 20,
  },
  {
    id: 6,
    product: 'Consultoria',
    category: 'Educação',
    value: 28.9,
    sold: 98237,
    commission: 17890,
    status: 'active',
    createdAt: '2023-01-26T00:12:00.000Z',
    quantity: 492,
    affiliate: 4,
  },
  {
    id: 7,
    product: 'Plugin',
    category: 'Moda',
    value: 85.27,
    sold: 78345,
    commission: 28901,
    status: 'active',
    createdAt: '2023-01-26T12:04:00.000Z',
    quantity: 185,
    affiliate: 11,
  },
] satisfies TableData[]