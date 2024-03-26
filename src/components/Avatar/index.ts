import { Avatar as Root } from './Avatar'
import { Fallback } from './Fallback'
import { Image } from './Image'

type AvatarComposition = typeof Root & {
  Image: typeof Image
  Fallback: typeof Fallback
}

export const Avatar = Root as AvatarComposition
Avatar.Image = Image
Avatar.Fallback = Fallback
