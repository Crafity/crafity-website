import { ReactNode } from 'react'

import { Card } from '@/components/common/card/card'
import { Heading } from '@/components/common/heading/heading'
import { Stack } from '@/components/layout/stack/stack'

export interface LeftAccentCardProps {
  accentColor: 'primary' | 'secondary'
  children: ReactNode
  title: string
}

export function LeftAccentCard({
  accentColor,
  children,
  title,
}: LeftAccentCardProps) {
  return (
    <Card
      borderColor={accentColor}
      borderSide="left"
      borderWidth="accent"
      px={10}
      radius="none"
      variant="transparent">
      <Stack gap={4}>
        <Heading color={accentColor} level={3} size="lg">
          {title}
        </Heading>
        <p>{children}</p>
      </Stack>
    </Card>
  )
}
