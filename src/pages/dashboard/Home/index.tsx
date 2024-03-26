import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'
import { Info } from '@/components/Info'

import { ConversionCard } from './ConversionCard'

export function Home() {
  return (
    <div className="grid flex-1 auto-rows-max grid-cols-[max-content_1fr] gap-6">
      <section className="col-span-full flex h-[231px] w-full bg-banner bg-cover bg-no-repeat">
        <h1 className="my-auto ml-[42px] w-[306px] text-[40px] font-bold leading-[48px] tracking-[0.5px] text-white">
          Transforme sua paixão em <span className="text-primary">lucro!</span>
        </h1>
      </section>

      <Card className="flex w-[585px] flex-col gap-6">
        <header className="flex w-full items-center justify-between">
          <strong className="text-lg font-bold tracking-[0.5px] text-neutral-950">
            Suas vendas
          </strong>

          <Button variant="outline" size="xs" className="gap-1">
            Ver todas <Icon name="arrow-right" size={16} />
          </Button>
        </header>

        <div>
          <strong className="block text-lg font-bold tracking-[0.5px] text-secondary">
            R$ 50.452,54
          </strong>
          <p className="mt-1 flex items-center gap-1 text-sm font-medium tracking-[0.5px] text-neutral-600">
            Total de vendas <Icon name="question" size={20} />
          </p>

          <ul className="mt-4 grid h-60 grid-cols-2 rounded-lg bg-secondary">
            <Info title="Total de vendas hoje" value={10452.54} description="Ontem R$ 9.571,00" />
            <Info title="Total do mês" value={25452.54} description="Mês anterior R$ 150.571,00" />
            <Info
              title="Saldo"
              value={245240.98}
              description="Disponível para saque"
              icon="wallet"
              className="text-white"
            />
            <Info
              title="A receber"
              value={20541}
              description="Vendas pendentes"
              icon="funds"
              className="text-warning-400"
            />
          </ul>
        </div>
      </Card>

      <Card className="flex flex-col gap-6">
        <strong className="text-lg font-bold tracking-[0.5px] text-neutral-950">
          Conversão de pagamento
        </strong>

        <ul className="grid grid-cols-2 gap-4">
          <ConversionCard icon="bank-card" title="Cartão" badge={9854} percent={79} />
          <ConversionCard icon="pix" title="Pix" badge={3589} percent={51} />
          <ConversionCard icon="barcode" title="Boleto" badge={158} percent={10} />
          <ConversionCard
            icon="forbid"
            title="Canceladas"
            badge={120}
            percent={9}
            color="text-error-500"
          />
        </ul>
      </Card>
    </div>
  )
}
