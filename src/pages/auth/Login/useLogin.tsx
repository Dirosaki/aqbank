import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { z } from 'zod'

import { useAuth } from '@/hooks/useAuth'
import { sleep } from '@/utils/sleep'
import { toast } from '@/utils/toast'

const schema = z.object({
  email: z.string().min(1, 'Campo obrigatório.').email('E-mail inválido.').toLowerCase(),
  password: z
    .string()
    .min(1, 'Campo obrigatório.')
    .min(8, 'A senha deve conter no mínimo 8 caracteres.')
    .max(32, 'A senha deve possuir no máximo 32 caracteres.'),
  stayConnected: z.boolean(),
})

type LoginForm = z.infer<typeof schema>

export function useLogin() {
  const location = useLocation()
  const { signIn } = useAuth()

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: location.state?.email ?? '',
    },
  })

  const handleSubmit = hookFormSubmit(async ({ email, stayConnected }) => {
    try {
      await sleep(2000)
      signIn(email, stayConnected)
      toast.success('Login efetuado com sucesso')
    } catch {
      toast.error('Ocorreu um erro ao entrar em sua conta, tente novamente.')
    }
  })

  return { register, handleSubmit, errors, isSubmitting }
}
