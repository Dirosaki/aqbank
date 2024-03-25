import { createBrowserRouter } from 'react-router-dom'

import { lazyLoad } from '@/utils/lazyLoad'

import { AuthGuard } from './AuthGuard'

const { Login } = lazyLoad(() => import('@/pages/auth/Login'))

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
        element: <h1>Register</h1>,
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
