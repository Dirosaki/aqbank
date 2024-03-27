import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

const schema = z.object({
  status: z.string(),
})

type FilterForm = z.infer<typeof schema>

export function useFilter() {
  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const activeFilter = searchParams.get('status')

  const {
    handleSubmit: hookFormSubmit,
    watch,
    setValue,
  } = useForm<FilterForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      status: activeFilter ?? '',
    },
  })

  const selectedFilter = watch('status')

  const handleSubmit = hookFormSubmit(({ status }) => {
    if (selectedFilter) {
      setSearchParams({ status })
    } else {
      searchParams.delete('status')
      setSearchParams(searchParams)
    }

    setFilterIsOpen((prev) => !prev)
  })

  const handleFilterOpen = (state: boolean) => {
    if (!state) {
      setValue('status', activeFilter ?? '')
    }
    setFilterIsOpen(state)
  }

  const handleFilterToggle = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === selectedFilter) return setValue('status', '')

    return setValue('status', event.target.value)
  }

  return {
    filterIsOpen,
    handleSubmit,
    selectedFilter,
    activeFilter,
    handleFilterToggle,
    handleFilterOpen,
  }
}
