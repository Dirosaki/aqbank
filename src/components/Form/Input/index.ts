import { Addon } from './Addon'
import { Group } from './Group'
import { Helper } from './Helper'
import { TextField } from './TextField'

type InputComposition = typeof TextField & {
  Addon: typeof Addon
  Group: typeof Group
  Helper: typeof Helper
}

export const Input = TextField as InputComposition
Input.Addon = Addon
Input.Group = Group
Input.Helper = Helper
