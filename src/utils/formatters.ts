export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

export const formatPercentage = (value: number) =>
  new Intl.NumberFormat('pt-br', {
    style: 'percent',
    maximumFractionDigits: 2,
  }).format(value / 100)
