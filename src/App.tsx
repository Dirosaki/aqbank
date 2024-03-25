import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster as Sonner } from 'sonner'

import { routes } from '@/Router'

import '@/styles/global.css'
import { AuthProvider } from './contexts/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<h1>Carregando</h1>}>
        <RouterProvider router={routes} />
        <Sonner
          offset={0}
          visibleToasts={1}
          toastOptions={{
            style: {
              bottom: 32,
              right: 32,
            },
          }}
        />
      </Suspense>
    </AuthProvider>
  )
}
