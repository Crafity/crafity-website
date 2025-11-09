import { createFileRoute } from '@tanstack/react-router'

import { Approach } from '@/components/home/approach/approach'
import { ClientTrust } from '@/components/home/client-trust/client-trust'
import { CTA } from '@/components/home/cta/cta'
import { FeaturedWork } from '@/components/home/featured-work/featured-work'
import { Hero } from '@/components/home/hero/hero'
import { Services } from '@/components/home/services/services'
import { Footer } from '@/components/layout/footer/footer'
import { Header } from '@/components/layout/header/header'
import { Section } from '@/components/layout/section/section'

export const Route = createFileRoute('/')({
  component: Home,
  preload: true,
})

function Home() {
  return (
    <>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ClientTrust />
      </Section>
      <Section>
        <FeaturedWork />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section id="approach">
        <Approach />
      </Section>
      <Section id="contact">
        <CTA />
      </Section>
      <Footer />
    </>
  )
}
