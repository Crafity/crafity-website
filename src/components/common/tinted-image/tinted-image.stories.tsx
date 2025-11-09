import type { Meta, StoryObj } from '@storybook/react-vite'

import { TintedImage } from './tinted-image'

const meta: Meta<typeof TintedImage> = {
  argTypes: {
    filters: {
      control: 'object',
      description:
        'Optional filter overrides for brightness, contrast, and invert',
    },
    height: {
      control: 'text',
      description: 'Container height (CSS value)',
    },
    tintColor: {
      control: 'select',
      description: 'CSS custom property or color value for tinting',
      options: [
        'var(--accent-primary)',
        'var(--accent-secondary)',
        'var(--terminal-red)',
        'var(--terminal-blue)',
        'var(--terminal-yellow)',
      ],
    },
    width: {
      control: 'text',
      description: 'Container width (CSS value)',
    },
  },
  component: TintedImage,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Common/TintedImage',
}

export default meta
type Story = StoryObj<typeof meta>

// Default tinted logo
export const Default: Story = {
  args: {
    alt: 'ING',
    height: '80px',
    src: '/logos/ING_Group_N.V._Logo.svg',
    width: '200px',
  },
}

// Black logo with invert
export const BlackLogo: Story = {
  args: {
    alt: 'Nike',
    filters: { invert: true },
    height: '80px',
    src: '/logos/nike-vector-logo.svg',
    width: '200px',
  },
}

// Custom tint color (blue)
export const BlueTint: Story = {
  args: {
    alt: 'MediaMonks',
    height: '80px',
    src: '/logos/Mediamonks.svg',
    tintColor: 'var(--accent-secondary)',
    width: '200px',
  },
}

// ING logo with custom brightness/contrast
export const CustomFilters: Story = {
  args: {
    alt: 'ING',
    filters: { brightness: 1.4, contrast: 0.3 },
    height: '80px',
    src: '/logos/ING_Group_N.V._Logo.svg',
    width: '200px',
  },
}

// Yellow tint
export const YellowTint: Story = {
  args: {
    alt: 'eBay',
    height: '80px',
    src: '/logos/EBay_logo.svg',
    tintColor: 'var(--terminal-yellow)',
    width: '200px',
  },
}

// Large size
export const LargeSize: Story = {
  args: {
    alt: 'T-Mobile',
    height: '120px',
    src: '/logos/T-Mobile_logo.svg',
    width: '300px',
  },
}

// All logos grid
export const AllLogos: Story = {
  render: () => (
    <div
      style={{
        background: 'var(--bg-secondary)',
        borderRadius: '8px',
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(3, 200px)',
        padding: '2rem',
      }}>
      <div style={{ textAlign: 'center' }}>
        <TintedImage
          alt="AKQA"
          height="80px"
          src="/logos/AKQA-Logo.svg"
          width="200px"
        />
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
          }}>
          AKQA (inverted)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <TintedImage
          alt="Electronic Arts"
          height="80px"
          src="/logos/Electronic-Arts-Logo.svg"
          width="200px"
        />
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
          }}>
          EA (inverted)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <TintedImage
          alt="eBay"
          height="80px"
          src="/logos/EBay_logo.svg"
          width="200px"
        />
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
          }}>
          eBay
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <TintedImage
          alt="ING"
          filters={{ brightness: 1.4, contrast: 0.3 }}
          height="80px"
          src="/logos/ING_Group_N.V._Logo.svg"
          width="200px"
        />
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
          }}>
          ING (custom)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <TintedImage
          alt="Nike"
          filters={{ invert: true }}
          height="80px"
          src="/logos/nike-vector-logo.svg"
          width="200px"
        />
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
          }}>
          Nike (inverted)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <TintedImage
          alt="MediaMonks"
          height="80px"
          src="/logos/Mediamonks.svg"
          width="200px"
        />
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
          }}>
          MediaMonks
        </p>
      </div>
    </div>
  ),
}

// Compare tint colors
export const TintColors: Story = {
  render: () => (
    <div
      style={{
        background: 'var(--bg-secondary)',
        borderRadius: '8px',
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(3, 200px)',
        padding: '2rem',
      }}>
      <div style={{ textAlign: 'center' }}>
        <TintedImage
          alt="T-Mobile"
          height="80px"
          src="/logos/T-Mobile_logo.svg"
          tintColor="var(--accent-primary)"
          width="200px"
        />
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
          }}>
          Primary (red)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <TintedImage
          alt="T-Mobile"
          height="80px"
          src="/logos/T-Mobile_logo.svg"
          tintColor="var(--accent-secondary)"
          width="200px"
        />
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
          }}>
          Secondary (blue)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <TintedImage
          alt="T-Mobile"
          height="80px"
          src="/logos/T-Mobile_logo.svg"
          tintColor="var(--terminal-yellow)"
          width="200px"
        />
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
          }}>
          Yellow
        </p>
      </div>
    </div>
  ),
}
