import { CommandInput } from './command-input'
import { StatsGrid } from './stats-grid'

import styles from './hero.module.css'

import { PageTitle } from '@/components/common/page-title/page-title'
import { ProgressBar } from '@/components/common/progress-bar/progress-bar'
import { ResponsiveText } from '@/components/common/responsive-text/responsive-text'
import { TerminalWindow } from '@/components/common/terminal-window/terminal-window'
import { Container } from '@/components/layout/container/container'
import { Stack } from '@/components/layout/stack/stack'

export function Hero() {
  return (
    <Container size="full">
      <Stack space="large">
        <TerminalWindow
          className={styles['terminal-window']}
          title="crafity-init v14.0">
          <Stack space={{ base: 'minimal', sm: 'tiny' }}>
            <div className={styles.command}>
              <ResponsiveText
                text={{
                  base: (
                    <>
                      $ ./deploy{' '}
                      <span className={styles['no-wrap']}>
                        --quality=enterprise
                      </span>
                    </>
                  ),
                  sm: 'crafity@enterprise:~$ ./deploy --quality=enterprise --speed=startup',
                }}
              />
            </div>
            <div className={styles.output}>
              <ResponsiveText
                text={{
                  base: '> Initializing...',
                  sm: '> Initializing deployment sequence...',
                }}
              />
            </div>
            <ProgressBar
              label={
                <ResponsiveText
                  text={{
                    base: 'Loading capabilities',
                    sm: 'Loading engineering capabilities',
                  }}
                />
              }
              percent={100}
            />
            <Stack>
              <div className={styles.success}>
                <ResponsiveText
                  text={{
                    base: '✓ 25+ years loaded',
                    sm: '✓ System ready. 25+ years of experience loaded.',
                  }}
                />
              </div>
              <div className={styles.success}>
                <ResponsiveText
                  text={{
                    base: '✓ Sonic, Schiphol, eBay+',
                    sm: '✓ Trusted by: Sonic Equipment, Schiphol, eBay, CarNext',
                  }}
                />
              </div>
            </Stack>
          </Stack>
        </TerminalWindow>
        <PageTitle>
          <PageTitle.Line>ENTERPRISE-GRADE</PageTitle.Line>
          <PageTitle.Line color="primary">ENGINEERING</PageTitle.Line>
          <PageTitle.Line>
            WITH <PageTitle.Accent>STARTUP</PageTitle.Accent> DNA
          </PageTitle.Line>
        </PageTitle>
        <StatsGrid />
        <CommandInput />
      </Stack>
    </Container>
  )
}
