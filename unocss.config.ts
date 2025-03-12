import { defineConfig, presetAttributify, presetWebFonts, presetWind3, dd , transformerDirectives } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  cli: {
    entry: [
      {
        patterns: ['src/**/*'],
        outFile: 'src/styles/uno.css'
      }
    ]
    
  },
 presets: [
		presetWind3(),
		presetAttributify(),
		presetWebFonts({
			provider: "google",
			fonts: { sans: "Montserrat" },
		}),
		presetAnimations(),
		presetShadcn(),
	],
	transformers: [transformerDirectives()],
	content: {
		pipeline: {
			include: [/\.(vue|svelte|[jt]s|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/],
		},
		filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
    }
})
