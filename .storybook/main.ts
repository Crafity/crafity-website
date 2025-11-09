import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {},
        configureJSX: true,
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    defaultName: 'Overview',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // publicDir: ['../public/assets'],
  stories: [
    '../src/components/style-guide/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
}
export default config
