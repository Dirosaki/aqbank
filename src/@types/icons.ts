import { ComponentProps } from 'react'

export type IconType = Pick<ComponentProps<'svg'>, 'className'> & {
  size?: number
  color?: string
}
