import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'
import { Info } from '@/components/Info'
import { Table } from '@/components/Table'

import { Filter } from './Filter'
import { useProductTable } from './useProductTable'

export function Products() {
  const { table, empty, quantity } = useProductTable()

  return (
    <div className="flex flex-1 flex-col gap-6">
      <h1 className="flex items-center gap-2 text-2xl font-bold tracking-[0.5px] text-neutral-800">
        <Icon name="shopping-bag" /> Meus Produtos
      </h1>

      <Card className="flex gap-6">
        <div className="w-1/2">
          <Info
            as="div"
            title="Saldo"
            value={245240.98}
            description="Disponível para saque"
            icon="wallet"
            variant="secondary"
            className="p-0"
          />
          <Button
            type="button"
            variant="outline"
            size="xs"
            className="col-span-2 mt-6 flex w-[85px] gap-[6px]"
            disabled
          >
            <Icon name="dollar-circle" size={18} />
            Sacar
          </Button>
        </div>

        <ul className="col-span-2 grid w-1/2 grid-cols-2 content-center rounded-lg bg-secondary">
          <Info title="Total de vendas hoje" value={10452.54} description="Ontem R$ 9.571,00" />
          <Info
            title="A receber"
            value={20541}
            description="Vendas pendentes"
            icon="funds"
            className="text-warning-400"
          />
        </ul>
      </Card>

      <section className="flex flex-col gap-4 overflow-hidden">
        <header className="flex justify-between">
          <Filter />

          <Button
            type="button"
            variant="secondary"
            size="xs"
            className="col-span-2 mt-6 flex gap-[6px]"
          >
            <Icon name="add-circle" size={18} />
            Cadastrar produto
          </Button>
        </header>

        <div className="flex h-full flex-1 flex-col gap-4 overflow-auto">
          <Table
            table={table}
            renderWhenEmpty={
              <div className="flex w-full justify-center gap-2 bg-white py-6 text-sm font-medium tracking-[0.5px] text-neutral-400">
                <Icon name="emotion-normal" size={20} />
                <span>Nenhum produto encontrado</span>
              </div>
            }
          />

          <span className="ml-auto text-xs leading-[18px] tracking-[0.5px] text-neutral-400">
            {empty ? 'Nenhum resultado' : `${quantity} resultados encontrados`}
          </span>
        </div>
      </section>
    </div>
  )
}
