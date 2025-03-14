import { defineConfig, presetAttributify, presetWind3 } from 'unocss'
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
    presetWind3({
      // Enable all spacing values for margin and padding
      spacing: {
        0: '0rem',
        1: '0.125rem',
        2: '0.250rem',
        3: '0.375rem',
        4: '0.500rem',
        5: '0.625rem',
        6: '0.750rem',
        7: '0.875rem',
        8: '1.000rem',
        9: '1.125rem',
        10: '1.250rem',
        11: '1.375rem',
        12: '1.500rem',
        13: '1.625rem',
        14: '1.750rem',
        15: '1.875rem',
        16: '2.000rem',
        17: '2.125rem',
        18: '2.250rem',
        19: '2.375rem',
        20: '2.500rem',
        24: '3.000rem',
        28: '3.500rem',
        32: '4.000rem',
        36: '4.500rem',
        40: '5.000rem',
        44: '5.500rem',
        48: '6.000rem',
        52: '6.500rem',
        56: '7.000rem',
        60: '7.500rem',
        64: '8.000rem',
        72: '9.000rem',
        80: '10.000rem',
        96: '12.000rem'
      }
    }),
    presetAttributify(),
    presetShadcn(),
    presetAnimations()
  ],
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]s|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/],
    },
    filesystem: ["src/**/*.{ts,tsx,js,jsx}"],
  }
})
