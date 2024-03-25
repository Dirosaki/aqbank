import { toast as sonner } from 'sonner'

import { Icon } from '@/components/Icon'

import { cn } from './cn'

type ToastOptions = {
  type?: 'success' | 'error'
}

function toastRender(message: string, { type = 'success' }: ToastOptions = {}) {
  const isSuccessType = type === 'success'

  return sonner.custom(
    (id) => (
      <div
        className={cn(
          'right-0 flex h-12 w-96 items-center gap-2 rounded-xl border p-3 shadow-[0_3px_10px_-2px_#14151A05,0_10px_16px_-3px_#14151A0D]',
          isSuccessType && 'border-success-200 bg-success-50',
          !isSuccessType && 'border-error-200 bg-error-50'
        )}
      >
        <Icon
          name={isSuccessType ? 'checkbox-circle' : 'error'}
          className={isSuccessType ? 'text-success-500' : 'text-error-500'}
          size={20}
        />

        <span className="flex-1 text-sm font-medium leading-6 tracking-[0.05px] text-[#14151A]">
          {message}
        </span>
        <button
          type="button"
          onClick={() => sonner.dismiss(id)}
          aria-label="Fechar"
          className="text-[#0F1324]/60 transition-colors hover:text-neutral-950"
        >
          <Icon name="close" size={20} />
        </button>
      </div>
    ),
    {
      duration: 3000,
    }
  )
}

export const toast = {
  error: (message: string) => toastRender(message, { type: 'error' }),
  success: (message: string) => toastRender(message, { type: 'success' }),
}
