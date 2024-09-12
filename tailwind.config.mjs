/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      body: ['Arial'],
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
