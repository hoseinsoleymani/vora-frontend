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
        px: '1px',
        0: '0px',
        1: '2px',
        2: '4px',
        3: '6px',
        4: '8px',
        5: '10px',
        6: '12px',
        7: '14px',
        8: '16px',
        9: '18px',
        10: '20px',
        11: '22px',
        12: '24px',
        13: '26px',
        14: '28px',
        15: '30px',
        16: '32px',
        17: '34px',
        18: '36px',
        19: '38px',
        20: '40px',
        24: '48px',
        28: '56px',
        32: '64px',
        36: '72px',
        40: '80px',
        44: '88px',
        48: '96px',
        52: '104px',
        56: '112px',
        60: '120px',
        64: '128px',
        72: '144px',
        80: '160px',
        96: '192px',
        // Add rem-based values as well
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem'
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
