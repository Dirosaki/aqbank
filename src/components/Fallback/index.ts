import { Dashboard } from './Dashboard'
import { Fullscreen } from './Fullscreen'

type FallbackComposition = {
  Dashboard: typeof Dashboard
  Fullscreen: typeof Fullscreen
}

export const Fallback: FallbackComposition = {
  Dashboard,
  Fullscreen,
}
