import { createFileRoute } from '@tanstack/react-router'

import { PrivacyPage } from '@/components/privacy/privacy-page/privacy-page'

export const Route = createFileRoute('/_main-layout/privacy')({
  component: PrivacyPage,
  preload: true,
})
