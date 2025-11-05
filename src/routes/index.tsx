import { createFileRoute } from '@tanstack/react-router'

import { Header } from '@/components/header/header'
import { ClientTrust } from '@/components/home/client-trust/client-trust'
import { FeaturedWork } from '@/components/home/featured-work/featured-work'
import { Hero } from '@/components/home/hero/hero'
import { Services } from '@/components/home/services/services'
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
      <SectionContainer>
        <ClientTrust />
      </SectionContainer>
      <SectionContainer>
        <FeaturedWork />
      </SectionContainer>
      <SectionContainer>
        <Services />
      </SectionContainer>
      <Footer />
    </PageContainer>
  )
}
