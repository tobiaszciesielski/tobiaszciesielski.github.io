import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import BeardedThemeArcBlueberry from './src/resources/code-theme/bearded-theme.json'

// https://astro.build/config
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
