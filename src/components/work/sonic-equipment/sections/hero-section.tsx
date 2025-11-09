import styles from './hero-section.module.css'

import { PageTitle } from '@/components/common/page-title/page-title'
import { ProgressBar } from '@/components/common/progress-bar/progress-bar'
import { ResponsiveText } from '@/components/common/responsive-text/responsive-text'
import { TechStack } from '@/components/common/tech-stack/tech-stack'
import { TerminalWindow } from '@/components/common/terminal-window/terminal-window'
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'

export function HeroSection() {
  return (
    <Container size="full">
      <Stack className={styles.hero} space="large">
        <TerminalWindow
          className={styles['terminal-window']}
          title="sonic-case-study.log">
          <div className={styles.command}>
            <ResponsiveText
              text={{
                base: '$ analyze-project --client="Sonic"',
                md: '$ analyze-project --client="Sonic Equipment" --duration=19months --scale=global',
              }}
            />
          </div>
          <div className={styles.output}>
            <ResponsiveText
              text={{
                base: '> Initializing...',
                md: '> Initializing project analysis...',
              }}
            />
          </div>
          <ProgressBar
            label={
              <ResponsiveText
                text={{
                  base: 'Loading...',
                  md: 'Loading project data',
                }}
              />
            }
            percent={100}
          />
          <div className={styles.success}>✓ Client: SONIC EQUIPMENT</div>
          <div className={styles.success}>
            <ResponsiveText
              text={{
                base: '✓ Industry: Tools',
                md: '✓ Industry: Professional Tools & Storage',
              }}
            />
          </div>
          <div className={styles.success}>
            <ResponsiveText
              text={{
                base: '✓ Scale: 65+ countries',
                md: '✓ Scale: 100+ employees | 65+ countries',
              }}
            />
          </div>
          <div className={styles.success}>✓ Duration: 19 months</div>
        </TerminalWindow>

        <PageTitle variant="large">
          E-Commerce Platform Transformation
        </PageTitle>

        <p className={styles.tagline}>
          "From external dependency to in-house capability—modernizing a global
          e-commerce platform while keeping 65+ countries operational."
        </p>

        <div className={styles.metadata}>
          <span>Timeline: 19 months (2024-2025)</span>
        </div>

        <TechStack
          tags={['Next.js', 'TypeScript', 'Algolia', 'Cloudflare', 'Vercel']}
        />
      </Stack>
    </Container>
  )
}
