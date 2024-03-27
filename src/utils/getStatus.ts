import { StatusProps } from '@/components/Badge'

type GetStatus = Record<StatusProps, string>

export const getStatus: GetStatus = {
  active: 'Ativo',
  canceled: 'Cancelado',
  draft: 'Rascunho',
  paused: 'Pausado',
  pending: 'Pendente',
}
