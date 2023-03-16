import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import uno from 'unocss/vite'
import { presetWarp } from '@warp-ds/uno'

export default defineConfig({
  base: '/lab-2',
  plugins: [
    vue(),
    uno({
      presets: [presetWarp({ usePreflight: true })]
    })
  ],
})
