export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function formatPercentage(value: number) {
  new Intl.NumberFormat('pt-br', {
    style: 'percent',
    maximumFractionDigits: 2,
  }).format(value / 100)
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-br', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatTime(date: string) {
  return new Intl.DateTimeFormat('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(date))
}
