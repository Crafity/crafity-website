import { createFileRoute } from '@tanstack/react-router'

import { SonicEquipmentPage } from '@/components/work/sonic-equipment/sonic-equipment-page'

export const Route = createFileRoute('/_main-layout/work/sonic-equipment/')({
  component: SonicEquipmentPage,
  preload: true,
})
