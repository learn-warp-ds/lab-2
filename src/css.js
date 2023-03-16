import { inputHTML } from './url.js'
import { createGenerator } from '@unocss/core'
import { presetWarp } from '@warp-ds/uno/client'
import { formatCSS } from '@itsy/okay'

const uno = createGenerator({
  presets: [
    presetWarp(),
  ]
})

export const generateCSS = async () => {
  try {
    const { css } = await uno.generate(inputHTML.value, { minify: true })
    return { minifiedCSS: css, prettyCSS: formatCSS(css) }
  } catch (err) {
    const css = '/* empty (maybe error) */'
    return { minifiedCSS: css, prettyCSS: formatCSS(css) }
  }
}
