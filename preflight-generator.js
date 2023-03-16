import { createGenerator } from '@unocss/core'
import { presetWarp } from '@warp-ds/uno'
import * as lightning from 'lightningcss'
import fs from 'node:fs'

const uno = createGenerator({ presets: [presetWarp({ usePreflight: true })] })
const { css: _css } = await uno.generate('')
const css = _css + `
  *{font-size:1.6rem;}
  h1 { font-size: 3.4rem; line-height: 4.1rem; }
  h2 { font-size: 2.8rem; line-height: 3.4rem; }
  h3 { font-size: 2.2rem; line-height: 2.8rem; }
  h4 { font-size: 1.6rem; line-height: 2.2rem; }
  h5 { font-size: 1.4rem; line-height: 1.8rem; }
`

const { code } = lightning.transform({
  code: Buffer.from(css),
  minify: true,
  targets: { safari: (15 << 16) }
})

const minifiedPreflight = code.toString()

fs.writeFileSync('./public/preflight.css', minifiedPreflight, 'utf-8')
