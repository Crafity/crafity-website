import { createFileRoute } from '@tanstack/react-router'

import { Footer } from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header/header'
import { PageContainer } from '@/components/page/page-container'
import { SonicEquipmentCaseStudy } from '@/components/work/sonic-equipment/sonic-equipment-case-study'

export const Route = createFileRoute('/work/sonic-equipment/')({
  component: RouteComponent,
  preload: true,
})

function RouteComponent() {
  return (
    <PageContainer>
      <Header />
      <SonicEquipmentCaseStudy />
      <Footer />
    </PageContainer>
  )
}
