import { createContext, useCallback, useState } from 'react'

import { storageKeys } from '@/constants/storageKeys'

type AuthContextProps = {
  signedIn: boolean
  signIn: (email: string, stayConnected: boolean) => void
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(() => !!localStorage.getItem(storageKeys.user))

  const signIn = useCallback((email: string, stayConnected: boolean) => {
    if (stayConnected) {
      localStorage.setItem(storageKeys.user, email)
    }

    setSignedIn(true)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(storageKeys.user)
    setSignedIn(false)
  }, [])

  const value: AuthContextProps = {
    signedIn,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
