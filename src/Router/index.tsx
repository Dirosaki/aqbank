import { createBrowserRouter } from 'react-router-dom'

import { AuthGuard } from './AuthGuard'

export const routes = createBrowserRouter([
  {
    element: <AuthGuard isPrivate={false} />,
    children: [
      {
        path: '/auth/sign-in',
        element: <h1>Login</h1>,
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
