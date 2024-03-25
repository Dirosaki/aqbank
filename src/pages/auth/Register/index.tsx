import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Checkbox, Input, Label } from '@/components/Form'
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'
import { Spinner } from '@/components/Spinner'

import { useRegister } from './useRegister'

export function Register() {
  const { register, handleSubmit, errors, isSubmitting } = useRegister()
  const [showPassword, setShowPassword] = useState(false)

  const handleToggle = () => setShowPassword((state) => !state)

  return (
    <div className="flex flex-1">
      <aside className="w-1/2 bg-register bg-cover bg-center bg-no-repeat px-[72px] py-[84px]">
        <div className="flex max-w-[416px] flex-col gap-6 ">
          <Logo />
          <h1 className="text-[32px] font-bold leading-[38px] tracking-[0.05px] text-white">
            Explore, descubra, e transforme sua experiência com{' '}
            <b className="text-primary">vendas digitais!</b>
          </h1>
        </div>
      </aside>

      <main className="flex w-1/2 p-6">
        <div className="m-auto flex w-[428px] flex-col self-stretch">
          <strong className="text-[32px] font-bold leading-[38px] tracking-[0.05px] text-title">
            Crie sua conta
          </strong>
          <form className="mb-12 mt-8 flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <Input.Group>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  autoComplete="name"
                  {...register('name')}
                  hasError={!!errors.name?.message}
                  leftIcon={<Icon name="user" />}
                />
                <Input.Helper helperText={errors.name?.message} />
              </Input.Group>

              <Input.Group>
                <Label htmlFor="password">Senha</Label>
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
                  autoComplete="new-password"
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
                <Checkbox id="terms" {...register('receiveUpdates')} />
                <Label htmlFor="terms">Concordo em receber atualizações por e-mail</Label>
              </div>
            </div>

            <p className="mb-12 mt-8 pr-10 text-sm tracking-[0.5px] text-neutral-950">
              Ao criar sua conta, você confirma que leu e concorda com os
              <a
                href="https://cdn.aqbank.com.br/termos-legais/aqbank/termos-condicoes-conta-digital.pdf"
                target="_blank"
                rel="noopener"
                className="mx-1 font-medium text-secondary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
              >
                termos de uso
              </a>
              da Prufen.
            </p>

            <Button type="submit">{isSubmitting ? <Spinner /> : 'Criar conta grátis'}</Button>
          </form>

          <span className="self-center text-sm tracking-[0.5px] text-neutral-950">
            Já tem uma conta?
            <Link
              to="/auth/sign-in"
              className="ml-1 font-inter text-secondary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
            >
              Acessar minha conta
            </Link>
          </span>

          <span className="mt-12 flex items-center gap-2 self-center font-inter text-sm text-neutral-950/50">
            Powered by <Logo className="h-max w-[69px] text-neutral-950/50" />
          </span>
        </div>
      </main>
    </div>
  )
}
