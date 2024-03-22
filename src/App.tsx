import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { routes } from '@/Router'

import '@/styles/global.css'

export function App() {
  return (
    <Suspense fallback={<h1>Carregando</h1>}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}
