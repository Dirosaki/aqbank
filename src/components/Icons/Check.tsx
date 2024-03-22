import { IconType } from '@/@types/icons'

export function Check({ size, color, className }: IconType) {
  return (
    <svg
      className={className}
      fill={color}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.0007 15.1715L19.1927 5.97852L20.6077 7.39252L10.0007 17.9995L3.63672 11.6355L5.05072 10.2215L10.0007 15.1715Z" />
    </svg>
  )
}
