import { Approach } from '@/components/home/approach/approach'
import { ClientTrust } from '@/components/home/client-trust/client-trust'
import { CTA } from '@/components/home/cta/cta'
import { FeaturedWork } from '@/components/home/featured-work/featured-work'
import { Hero } from '@/components/home/hero/hero'
import { Services } from '@/components/home/services/services'
import { Section } from '@/components/layout/section/section'

export function HomePage() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <ClientTrust />
      </Section>
      <Section id="services">
        <Services />
      </Section>
      <Section id="work">
        <FeaturedWork />
      </Section>
      <Section id="approach">
        <Approach />
      </Section>
      <Section id="contact">
        <CTA />
      </Section>
    </>
  )
}
