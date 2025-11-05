import { createFileRoute } from '@tanstack/react-router'

import { Approach } from '@/components/home/approach/approach'
import { ClientTrust } from '@/components/home/client-trust/client-trust'
import { CTA } from '@/components/home/cta/cta'
import { FeaturedWork } from '@/components/home/featured-work/featured-work'
import { Hero } from '@/components/home/hero/hero'
import { Services } from '@/components/home/services/services'
import { Footer } from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header/header'
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
      <SectionContainer>
        <Approach />
      </SectionContainer>
      <SectionContainer>
        <CTA />
      </SectionContainer>
      <Footer />
    </PageContainer>
  )
}
