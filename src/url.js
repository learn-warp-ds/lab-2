import { baseURL, defaultHTML } from './vars.js'
import { generateCSS } from './css.js'
import { decompressFromEncodedURIComponent as decode, compressToEncodedURIComponent as encode } from 'lz-string'
import { throttledWatch } from '@vueuse/core'
import { ref } from 'vue'

const STORAGE_KEY = 'last-search'
const params = new URLSearchParams(window.location.search || localStorage.getItem(STORAGE_KEY) || '')

export const inputHTML = ref(decode(params.get('html') || '') || defaultHTML)
export const css = ref('')
export const previewCSS = ref('')

throttledWatch(inputHTML,
  async () => {
    const url = new URL(baseURL, window.location.origin)
    url.searchParams.set('html', encode(inputHTML.value))
    localStorage.setItem(STORAGE_KEY, url.search)
    window.history.replaceState('', '', `${url.pathname}${url.search}`)
    const { minifiedCSS, prettyCSS } = await generateCSS()
    css.value = minifiedCSS
    previewCSS.value = prettyCSS
  },
  { throttle: 1000, immediate: true },
)

