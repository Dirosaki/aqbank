import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Fallback } from '@/components/Fallback'
import { Sidebar } from '@/components/Sidebar/Sidebar'

export function DashboardLayout() {
  return (
    <div className="flex flex-1 bg-blue-300">
      <Sidebar />

      <main className="flex max-h-dvh flex-1 bg-off-white p-12">
        <Suspense fallback={<Fallback.Dashboard />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
