import { Close } from './Close'
import { Content } from './Content'
import { Popover as Root } from './Popover'
import { Trigger } from './Trigger'

type PopoverComposition = typeof Root & {
  Trigger: typeof Trigger
  Content: typeof Content
  Close: typeof Close
}

export const Popover = Root as PopoverComposition
Popover.Content = Content
Popover.Trigger = Trigger
Popover.Close = Close
