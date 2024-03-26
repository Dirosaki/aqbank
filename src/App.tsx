import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster as Sonner } from 'sonner'

import { Fallback } from '@/components/Fallback'
import { AuthProvider } from '@/contexts/AuthContext'
import { routes } from '@/Router'

import '@/styles/global.css'

export function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Fallback.Fullscreen />}>
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
