import { Footer } from './Footer'
import { Header } from './Header'
import { MenuProps, Navigation } from './Navigation'

const data = [
  {
    items: [
      { path: '/', icon: 'home', title: 'Home' },
      { path: 'products', icon: 'store', title: 'Produtos', badge: '54123' },
      { path: 'link-payments', icon: 'link', title: 'Link de pagamento', disabled: true },
    ],
  },
  {
    title: 'Usuários',
    items: [
      { path: 'manage-users', icon: 'user', title: 'Gerenciar' },
      { path: 'permissions', icon: 'toggle', title: 'Permissões', disabled: true },
    ],
  },
] satisfies MenuProps[]

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-[296px] flex-col bg-white px-2 py-4">
      <Header />
      <Navigation data={data} />
      <Footer />
    </aside>
  )
}
