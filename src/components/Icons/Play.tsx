import { IconType } from '@/@types/icons'

export function Play({ size, color, className }: IconType) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16.394 12.0003L10 7.73731V16.2633L16.394 12.0003ZM19.376 12.4163L8.777 19.4823C8.70171 19.5324 8.61423 19.5612 8.52389 19.5655C8.43355 19.5698 8.34373 19.5495 8.264 19.5069C8.18427 19.4642 8.1176 19.4006 8.07111 19.3231C8.02462 19.2455 8.00005 19.1568 8 19.0663V4.93431C8.00005 4.84387 8.02462 4.75513 8.07111 4.67756C8.1176 4.59998 8.18427 4.53646 8.264 4.49377C8.34373 4.45108 8.43355 4.43082 8.52389 4.43514C8.61423 4.43946 8.70171 4.46821 8.777 4.51831L19.376 11.5843C19.4445 11.63 19.5006 11.6918 19.5395 11.7644C19.5783 11.837 19.5986 11.918 19.5986 12.0003C19.5986 12.0826 19.5783 12.1637 19.5395 12.2362C19.5006 12.3088 19.4445 12.3707 19.376 12.4163Z" />
    </svg>
  )
}