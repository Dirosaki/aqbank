import { Avatar } from '@/components/Avatar'
import { Icon } from '@/components/Icon'

export function Header() {
  return (
    <header className="flex items-center px-4 py-[10px]">
      <Avatar>
        <Avatar.Image src="https://github.com/dirosaki22.png" alt="dirosaki" />
        <Avatar.Fallback className="bg-secondary-100 font-medium text-secondary">
          Patricia
        </Avatar.Fallback>
      </Avatar>

      <div className="ml-1 mr-3 flex flex-1 flex-wrap">
        <h1 className="text-sm font-medium tracking-[0.5px] text-[#14151A]">Patricia</h1>
        <span className="ml-2 self-center rounded bg-neutral-100 px-1 text-xs font-medium leading-[18px] tracking-[0.5px] text-neutral-800">
          Free
        </span>
        <p className="font-inter text-xs text-[#0F1324]/60">@patricia.paula</p>
      </div>

      <div className="flex gap-1">
        <button
          type="button"
          aria-label="notificações"
          className="flex size-7 items-center justify-center rounded-sm text-neutral-800 transition-colors hover:text-[#14151A] focus-visible:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        >
          <Icon name="notification" size={20} />
        </button>
        <button
          type="button"
          aria-label="mais ações"
          className="flex size-7 items-center justify-center rounded-sm text-neutral-800 transition-colors hover:text-[#14151A] focus-visible:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        >
          <Icon name="more-x" size={20} />
        </button>
      </div>
    </header>
  )
}
