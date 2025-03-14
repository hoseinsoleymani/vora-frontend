import { defineConfig, presetAttributify, presetWebFonts, presetWind3 } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  cli: {
    entry: {
      patterns: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: ['src/styles/uno.css']
    }
  },
  presets: [
		presetWind3(),
		presetAttributify(),
		presetShadcn(),
	],
	content: {
		pipeline: {
			include: [/\.(vue|svelte|[jt]s|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/],
		},
		filesystem: ["src/**/*.{ts,tsx,js,jsx}"],
    }
})
