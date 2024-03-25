import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { sleep } from '@/utils/sleep'
import { toast } from '@/utils/toast'

const schema = z.object({
  name: z
    .string()
    .min(1, 'Campo obrigatório.')
    .min(2, 'Nome inválido.')
    .transform((name) => name.trim()),
  email: z.string().min(1, 'Campo obrigatório.').email('E-mail inválido.').toLowerCase(),
  password: z
    .string()
    .min(1, 'Campo obrigatório.')
    .min(8, 'A senha deve conter no mínimo 8 caracteres.')
    .max(32, 'A senha deve possuir no máximo 32 caracteres.'),
  receiveUpdates: z.boolean(),
})

type RegisterForm = z.infer<typeof schema>

export function useRegister() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  })

  const handleSubmit = hookFormSubmit(async ({ email }) => {
    try {
      await sleep(2000)
      toast.success('Cadastrado realizado com sucesso')

      navigate('/auth/sign-in', {
        state: {
          email,
        },
      })
    } catch {
      toast.error('Ocorreu um erro ao cadastrar sua conta, tente novamente.')
    }
  })

  return { register, handleSubmit, errors, isSubmitting }
}
