import { createFileRoute } from '@tanstack/react-router'

import { Footer } from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header/header'
import { PageContainer } from '@/components/page/page-container'
import { PrivacyPolicy } from '@/components/privacy/privacy-policy'

export const Route = createFileRoute('/privacy')({
  component: RouteComponent,
  preload: true,
})

function RouteComponent() {
  return (
    <PageContainer>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </PageContainer>
  )
}
