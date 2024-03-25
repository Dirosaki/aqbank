import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { routes } from '@/Router'

import '@/styles/global.css'
import { AuthProvider } from './contexts/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<h1>Carregando</h1>}>
        <RouterProvider router={routes} />
      </Suspense>
    </AuthProvider>
  )
}
