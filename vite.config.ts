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
    : [tsConfigPaths(), tanstackStart(), viteReact(), nitro()],
  server: {
    port: 3000,
  },
  ssr: {
    target: 'node',
  },
})
