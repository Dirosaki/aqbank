import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Checkbox, Input, Label } from '@/components/Form'
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'
import { Spinner } from '@/components/Spinner'

import { useLogin } from './useLogin'

export function Login() {
  const { register, handleSubmit, errors, isSubmitting } = useLogin()
  const [showPassword, setShowPassword] = useState(false)

  const handleToggle = () => setShowPassword((state) => !state)

  return (
    <main className="flex flex-1 items-center justify-center bg-[#248381] bg-login bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col">
        <Logo />

        <form
          className="my-12 flex w-[476px] flex-col rounded-xl bg-white p-12 shadow-[0_24px_48px_-12px_#14151A3D]"
          onSubmit={handleSubmit}
        >
          <strong className="text-[2rem] font-bold text-title">Acessar conta</strong>

          <div className="mt-8 flex flex-col space-y-4">
            <Input.Group>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                autoComplete="email"
                {...register('email')}
                hasError={!!errors.email?.message}
                leftIcon={<Icon name="mail" />}
              />
              <Input.Helper helperText={errors.email?.message} />
            </Input.Group>

            <Input.Group>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                autoComplete="current-password"
                {...register('password')}
                hasError={!!errors.password?.message}
                leftIcon={<Icon name="lock-password" />}
                rightIcon={
                  <button
                    type="button"
                    onClick={handleToggle}
                    aria-hidden
                    className="absolute right-4 text-neutral-600"
                    tabIndex={-1}
                  >
                    <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} />
                  </button>
                }
              />
              <Input.Helper helperText={errors.password?.message} />
            </Input.Group>

            <div className="flex gap-2">
              <Checkbox id="stayConnected" {...register('stayConnected')} />
              <Label htmlFor="stayConnected">Permanecer conectado</Label>
            </div>
          </div>

          <Button type="submit" className="mt-12">
            {isSubmitting ? <Spinner /> : 'Entrar'}
          </Button>
        </form>

        <span className="self-center text-sm tracking-[0.5px] text-white">
          Não tem uma conta?
          <Link
            to="/auth/sign-up"
            className="ml-1 font-inter text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
          >
            Cadastre-se
          </Link>
        </span>

        <span className="mt-12 flex items-center gap-2 self-center font-inter text-sm text-white/50">
          Powered by <Logo className="h-max w-[69px] text-white/50" />
        </span>
      </div>
    </main>
  )
}
