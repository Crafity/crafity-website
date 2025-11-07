import postcssGlobalData from '@csstools/postcss-global-data'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { nitro } from 'nitro/vite'
import postcssCustomMedia from 'postcss-custom-media'
import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

const isStorybook = process.env.STORYBOOK === 'true'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        postcssNested,
        postcssGlobalData({ files: ['src/css/breakpoints.css'] }),
        postcssCustomMedia(),
        autoprefixer,
      ],
    },
  },
  plugins: isStorybook
    ? [tsConfigPaths(), viteReact()]
    : [
        tsConfigPaths(),
        tanstackStart({
          prerender: {
            // Enable prerendering
            enabled: true,

            // Enable if you need pages to be at `/page/index.html` instead of `/page.html`
            autoSubfolderIndex: true,

            // If disabled, only the root path or the paths defined in the pages config will be prerendered
            autoStaticPathsDiscovery: true,

            // How many prerender jobs to run at once
            concurrency: 14,

            // Whether to extract links from the HTML and prerender them also
            crawlLinks: true,

            // Filter function takes the page object and returns whether it should prerender
            // filter: ({ path }) => !path.startsWith('/do-not-render-me'),

            // Number of times to retry a failed prerender job
            retryCount: 2,

            // Delay between retries in milliseconds
            retryDelay: 1000,

            // Maximum number of redirects to follow during prerendering
            maxRedirects: 5,

            // Fail if an error occurs during prerendering
            failOnError: true,

            // Callback when page is successfully rendered
            onSuccess: ({ page }) => {
              console.log(`Rendered ${page.path}!`)
            },
          },
          // Optional configuration for specific pages
          // Note: When autoStaticPathsDiscovery is enabled (default), discovered static
          // routes will be merged with the pages specified below
          // pages: [
          //   {
          //     path: '/my-page',
          //     prerender: { enabled: true, outputPath: '/my-page/index.html' },
          //   },
          // ],
        }),
        viteReact({
          babel: {
            plugins: ['babel-plugin-react-compiler'],
          },
        }),
        nitro(),
      ],
  server: {
    port: 3000,
  },
  ssr: {
    target: 'node',
  },
})
