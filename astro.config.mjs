import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import BeardedThemeArcBlueberry from './src/resources/bearded-theme.json'

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tobiaszciesielski.github.io',
  markdown: {
    shikiConfig: {
      theme: BeardedThemeArcBlueberry,
      wrap: true,
    },
  },
})
