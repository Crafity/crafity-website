'use client'

import { StrictMode } from 'react'
import type { Preview } from '@storybook/react-vite'
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'

import { withTheme } from './decorators/theme-decorator'

import './preview.css'

/**
 * T-shirt Sizing Viewports
 * Aligned with breakpoints.css system
 *
 * xs  = 0-639px      (Extra Small - Mobile)
 * sm  = 640-767px    (Small - Large Mobile)
 * md  = 768-1023px   (Medium - Tablet)
 * lg  = 1024-1279px  (Large - Laptop)
 * xl  = 1280-1535px  (Extra Large - Desktop)
 * 2xl = 1536-1919px  (2x Extra Large - Large Desktop)
 * 3xl = 1920px+      (3x Extra Large - Ultra Wide)
 */
const customViewports = {
  '2xl': {
    name: '2XL - 2x Extra Large (1536px)',
    styles: {
      height: '864px',
      width: '1536px',
    },
    type: 'desktop',
  },
  '3xl': {
    name: '3XL - 3x Extra Large (1920px)',
    styles: {
      height: '1080px',
      width: '1920px',
    },
    type: 'desktop',
  },
  lg: {
    name: 'LG - Large (1024px)',
    styles: {
      height: '768px',
      width: '1024px',
    },
    type: 'desktop',
  },
  md: {
    name: 'MD - Medium (768px)',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  responsive: {
    name: 'Responsive (100%)',
  },
  sm: {
    name: 'SM - Small (640px)',
    styles: {
      height: '800px',
      width: '640px',
    },
    type: 'mobile',
  },
  xl: {
    name: 'XL - Extra Large (1280px)',
    styles: {
      height: '800px',
      width: '1280px',
    },
    type: 'desktop',
  },
  xs: {
    name: 'XS - Extra Small (375px)',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
}

const preview: Preview = {
  decorators: [
    withTheme,
    (Story, _context) => {
      return (
        <StrictMode>
          <RouterProvider
            router={createRouter({
              history: createMemoryHistory(),
              routeTree: createRootRoute({
                component: Story,
              }),
            })}
          />
        </StrictMode>
      )
    },
  ],
  globalTypes: {
    theme: {
      defaultValue: 'dark',
      description: 'Global theme for components',
      name: 'Theme',
      toolbar: {
        dynamicTitle: true,
        icon: 'circlehollow',
        items: [
          { icon: 'moon', title: 'Dark', value: 'dark' },
          { icon: 'sun', title: 'Light', value: 'light' },
          { icon: 'cog', title: 'System', value: 'system' },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    options: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore Next line cannot be typed becasue of Storybook
      storySort: (a, b) => {
        if (a.title.startsWith('Style Guide')) return -1
        if (b.title.startsWith('Style Guide')) return 1

        if (a.name.startsWith('Overview')) return -1
        if (b.name.startsWith('Overview')) return 1

        if (a.id.includes('default')) return -1
        if (b.id.includes('default')) return 1

        return a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true })
      },
    },
    viewport: {
      defaultViewport: 'responsive',
      options: { ...customViewports, ...INITIAL_VIEWPORTS },
    },
  },
}

export default preview
