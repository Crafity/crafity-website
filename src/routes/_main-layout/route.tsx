import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Footer } from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header/header'

export const Route = createFileRoute('/_main-layout')({
  component: MainLayout,
})

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
