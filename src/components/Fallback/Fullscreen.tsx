import { Logo } from '@/components/Logo'
import { Spinner } from '@/components/Spinner'

export function Fullscreen() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <Logo />
      <Spinner className="text-primary" opacity={0.2} size={48} width={2} />
    </main>
  )
}
