import { Section } from '@/components/layout/section/section'
import { SectionDivider } from '@/components/layout/section-divider/section-divider'
import { HeroSection } from '@/components/work/sonic-equipment/sections/hero-section'
import { SituationSection } from '@/components/work/sonic-equipment/sections/situation-section'
import { TechnicalNotesSection } from '@/components/work/sonic-equipment/sections/technical-notes'
import { WhatChangedSection } from '@/components/work/sonic-equipment/sections/what-changed'
import { WhatWeDidSection } from '@/components/work/sonic-equipment/sections/what-we-did-section'

export function SonicEquipmentCaseStudy() {
  return (
    <>
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <SituationSection />
      </Section>
      <SectionDivider />
      <Section>
        <WhatWeDidSection />
      </Section>
      <SectionDivider />
      <Section>
        <WhatChangedSection />
      </Section>
      <SectionDivider />
      <Section>
        <TechnicalNotesSection />
      </Section>
    </>
  )
}
