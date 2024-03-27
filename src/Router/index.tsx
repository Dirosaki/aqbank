import { createBrowserRouter } from 'react-router-dom'

import { DashboardLayout } from '@/layouts/Dashboard'
import { lazyLoad } from '@/utils/lazyLoad'

import { AuthGuard } from './AuthGuard'

const { Login } = lazyLoad(() => import('@/pages/auth/Login'))
const { Register } = lazyLoad(() => import('@/pages/auth/Register'))
const { Home } = lazyLoad(() => import('@/pages/dashboard/Home'))
const { Products } = lazyLoad(() => import('@/pages/dashboard/Products'))

export const routes = createBrowserRouter([
  {
    element: <AuthGuard isPrivate={false} />,
    children: [
      {
        path: '/auth/sign-in',
        element: <Login />,
      },
      {
        path: '/auth/sign-up',
        element: <Register />,
      },
    ],
  },
  {
    element: <AuthGuard isPrivate />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/products',
            element: <Products />,
          },
        ],
      },
    ],
  },
])
