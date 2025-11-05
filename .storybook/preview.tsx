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

import './preview.css'

const customViewports = {
  lg: {
    name: 'lg',
    styles: {
      height: '801px',
      width: '1440px',
    },
    type: 'desktop',
  },
  md: {
    name: 'md',
    styles: {
      height: '801px',
      width: '1024px',
    },
    type: 'tablet',
  },
  responsive: {
    name: 'Responsive',
  },
  sm: {
    name: 'sm',
    styles: {
      height: '801px',
      width: '414px',
    },
    type: 'mobile',
  },
}

const preview: Preview = {
  decorators: [
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
