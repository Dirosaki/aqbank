import { IconType } from '@/@types/icons'

export function ArrowLeft({ size, color, className }: IconType) {
  return (
    <svg
      className={className}
      fill={color}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.828 10.9997H20V12.9997H7.828L13.192 18.3637L11.778 19.7777L4 11.9997L11.778 4.22168L13.192 5.63568L7.828 10.9997Z" />
    </svg>
  )
}
