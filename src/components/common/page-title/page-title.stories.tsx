import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageTitle } from './page-title'

const meta: Meta<typeof PageTitle> = {
  component: PageTitle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Common/PageTitle',
}

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    children: 'SIMPLE PAGE TITLE',
  },
}

export const WithInlineAccent: Story = {
  render: () => (
    <PageTitle>
      E-COMMERCE PLATFORM <PageTitle.Accent>TRANSFORMATION</PageTitle.Accent>
    </PageTitle>
  ),
}

export const MultiLine: Story = {
  render: () => (
    <PageTitle>
      <PageTitle.Line>ENTERPRISE-GRADE</PageTitle.Line>
      <PageTitle.Line color="primary">ENGINEERING</PageTitle.Line>
      <PageTitle.Line>
        WITH <PageTitle.Accent>STARTUP</PageTitle.Accent> DNA
      </PageTitle.Line>
    </PageTitle>
  ),
}

export const DifferentAccentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <p style={{ fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.7 }}>
          Primary accent (orange):
        </p>
        <PageTitle>
          BUILD AMAZING{' '}
          <PageTitle.Accent color="primary">PRODUCTS</PageTitle.Accent>
        </PageTitle>
      </div>
      <div>
        <p style={{ fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.7 }}>
          Secondary accent (green, default):
        </p>
        <PageTitle>
          BUILD AMAZING{' '}
          <PageTitle.Accent color="secondary">PRODUCTS</PageTitle.Accent>
        </PageTitle>
      </div>
    </div>
  ),
}
