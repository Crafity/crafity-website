import { createFileRoute } from '@tanstack/react-router'

import { Header } from '@/components/header/header'
import { Hero } from '@/components/home/hero/hero'
import { Footer } from '@/components/layout/footer/footer'
import { SectionContainer } from '@/components/layout/section-container/section-container'
import { PageContainer } from '@/components/page/page-container'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <PageContainer>
      <Header />
      <SectionContainer>
        <Hero />
      </SectionContainer>
      <Footer />
    </PageContainer>
  )
}
