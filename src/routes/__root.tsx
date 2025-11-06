/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'

import { CookieBanner } from '../components/common/cookie-banner/cookie-banner'
import globalCss from '../global.css?url'

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    links: [
      {
        as: 'font',
        crossOrigin: 'anonymous',
        href: '/fonts/inter-regular.woff2',
        rel: 'preload',
        type: 'font/woff2',
      },
      {
        as: 'font',
        crossOrigin: 'anonymous',
        href: '/fonts/space-grotesk-bold.woff2',
        rel: 'preload',
        type: 'font/woff2',
      },
      {
        as: 'font',
        crossOrigin: 'anonymous',
        href: '/fonts/jetbrains-mono-regular.woff2',
        rel: 'preload',
        type: 'font/woff2',
      },
      {
        href: globalCss,
        rel: 'stylesheet',
      },
    ],
    meta: [
      {
        charSet: 'utf8',
      },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport',
      },
      {
        title: 'Crafity // Built with passion',
      },
      {
        content:
          'E-commerce modernization, legacy rescue, senior engineering capacity. 25+ years experience. Clients: Sonic Equipment, ING, Picnic, Schiphol, Electronic Arts. Netherlands.',
        name: 'description',
      },
      {
        content: 'Crafity // Built with passion',
        property: 'og:title',
      },
      {
        content:
          'E-commerce modernization, legacy rescue, senior engineering capacity. 25+ years experience. Clients: Sonic Equipment, ING, Picnic, Schiphol, Electronic Arts. Netherlands.',
        property: 'og:description',
      },
      {
        content: 'https://crafity.com',
        property: 'og:url',
      },
      {
        content: 'website',
        property: 'og:type',
      },
    ],
  }),
})

function RootComponent() {
  return (
    <RootDocument>
      <CookieBanner />
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    description:
      'Boutique engineering firm specializing in e-commerce modernization and legacy system rescue.',
    foundingDate: '2010',
    logo: 'https://crafity.com/logo.svg',
    name: 'Crafity',
    url: 'https://crafity.com',
  }

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
          type="application/ld+json"
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
