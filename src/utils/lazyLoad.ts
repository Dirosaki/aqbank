import { ComponentType, lazy } from 'react'

export function lazyLoad<T extends Record<string, unknown>, U extends keyof T>(
  loader: (x?: string) => Promise<T>
) {
  return new Proxy({} as unknown as T, {
    get: (_, componentName: string | symbol) => {
      if (typeof componentName === 'string') {
        return lazy(() =>
          loader(componentName).then((x) => ({
            default: x[componentName as U] as unknown as ComponentType<unknown>,
          }))
        )
      }

      throw new Error('Invalid component name!')
    },
  })
}
