import { AccentBar } from '@/components/common/accent-bar/accent-bar'
import { Divider } from '@/components/common/divider/divider'
import { Approach } from '@/components/home/approach/approach'
import { ClientTrust } from '@/components/home/client-trust/client-trust'
import { CTA } from '@/components/home/cta/cta'
import { FeaturedWork } from '@/components/home/featured-work/featured-work'
import { Hero } from '@/components/home/hero/hero'
import { Services } from '@/components/home/services/services'
import { Section } from '@/components/layout/section/section'
import { SectionDivider } from '@/components/layout/section-divider/section-divider'

export function HomePage() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <ClientTrust />
      </Section>
      <AccentBar />
      <Section id="services">
        <Services />
      </Section>
      <SectionDivider />
      <Section id="work">
        <FeaturedWork />
      </Section>
      <Divider spacing="none" variant="gradient" />
      <Section id="approach">
        <Approach />
      </Section>
      <Section id="contact">
        <CTA />
      </Section>
    </>
  )
}
