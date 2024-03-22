import { createElement } from 'react'

import { IconType } from '@/@types/icons'
import { icons } from '@/utils/icons'

export type IconProps = IconType & {
  name: keyof typeof icons
}

export function Icon({ name, size = 24, color = 'currentColor', ...props }: IconProps) {
  return createElement(icons[name], { size, color, ...props })
}
