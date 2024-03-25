import { createBrowserRouter } from 'react-router-dom'

import { lazyLoad } from '@/utils/lazyLoad'

import { AuthGuard } from './AuthGuard'

const { Login } = lazyLoad(() => import('@/pages/auth/Login'))
const { Register } = lazyLoad(() => import('@/pages/auth/Register'))

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
        path: '/',
        element: <h1>Home</h1>,
      },
    ],
  },
])
