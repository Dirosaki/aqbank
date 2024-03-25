import { IconType } from '@/@types/icons'
import { cn } from '@/utils/cn'

type SpinnerProps = IconType & {
  width?: number
  opacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5
}

export function Spinner({
  width = 3,
  size = 24,
  opacity = 0.5,
  color = 'currentColor',
  className,
}: SpinnerProps) {
  return (
    <svg
      className={cn('animate-spin duration-700', className)}
      fill="none"
      stroke={color}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10.5" opacity={opacity} strokeWidth={width} />
      <path d="M22.5 12C22.5 6.20101 17.799 1.5 12 1.5" strokeWidth={width} strokeLinecap="round" />
    </svg>
  )
}
