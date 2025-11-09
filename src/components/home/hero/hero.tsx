import { CommandInput } from './command-input'
import { HeroStatement } from './hero-statement'
import { StatsGrid } from './stats-grid'

import styles from './hero.module.css'

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
                md: 'crafity@enterprise:~$ ./deploy --quality=enterprise --speed=startup',
              }}
            />
          </div>
          <div className={styles.output}>
            <ResponsiveText
              text={{
                base: '> Initializing...',
                md: '> Initializing deployment sequence...',
              }}
            />
          </div>
          <ProgressBar
            label={
              <ResponsiveText
                text={{
                  base: 'Loading capabilities',
                  md: 'Loading engineering capabilities',
                }}
              />
            }
            percent={100}
          />
          <div className={styles.success}>
            <ResponsiveText
              text={{
                base: '✓ 25+ years loaded',
                md: '✓ System ready. 25+ years of experience loaded.',
              }}
            />
          </div>
          <div className={styles.success}>
            <ResponsiveText
              text={{
                base: '✓ Sonic, Schiphol, eBay+',
                md: '✓ Trusted by: Sonic Equipment, Schiphol, eBay, CarNext',
              }}
            />
          </div>
        </TerminalWindow>
        <HeroStatement />
        <StatsGrid />
        <CommandInput />
      </Stack>
    </Container>
  )
}
