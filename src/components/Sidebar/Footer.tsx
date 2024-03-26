import { Icon } from '@/components/Icon'
import { useAuth } from '@/hooks/useAuth'

export function Footer() {
  const { signOut } = useAuth()

  return (
    <footer className="mt-auto flex px-2 py-[2px]">
      <button
        type="button"
        onClick={signOut}
        className="group flex w-full gap-2 rounded-[10px] px-2 py-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      >
        <Icon
          name="logout"
          size={20}
          className="text-neutral-800 transition-colors group-hover:text-[#14151A]"
        />
        <span className="text-sm font-medium tracking-[0.5px] text-[#14151A]">Logout</span>
      </button>
    </footer>
  )
}
