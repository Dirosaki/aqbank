import { Children } from 'react'

import { Item, ItemProps } from './Item'

export type MenuProps = {
  title?: string
  items: ItemProps[]
}

type NavigationProps = {
  data: MenuProps[]
}

export function Navigation({ data }: NavigationProps) {
  return (
    <nav>
      {Children.toArray(
        data.map((menu) => (
          <>
            {menu.title && (
              <span className="block px-4 py-2 text-xs font-medium tracking-[0.5px] text-neutral-800">
                {menu.title}
              </span>
            )}
            <ul className="my-4 px-2">
              {menu.items.map((item) => (
                <Item key={item.title} {...item} />
              ))}
            </ul>
          </>
        ))
      )}
    </nav>
  )
}
