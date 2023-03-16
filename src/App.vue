<script setup>
import { baseURL } from './vars.js'
import { inputHTML, css, previewCSS } from './url.js'
import { ref, reactive, watch } from 'vue'

const previewEl = ref(null)
const previewUrl = new URL(baseURL + '/__preview.html', window.location.origin)

const previewData = reactive({
  source: 'warp',
  css: css,
  html: inputHTML,
})
function send() {
  previewEl.value?.contentWindow?.postMessage(JSON.stringify(previewData), location.origin)
}
watch([previewData, previewEl], send, { deep: true })

// fires when the iframe's listener has been set up
window.addEventListener('message', ({ data }) => {
  if (data === 'warp-preview-setup') send()
})
</script>

<template>
  <main class="flex gap-32 h-screen playground">
    <div class="flex-[2] grid grid-rows-5">
      <textarea class="row-span-3 w-full monospace m-16 p-16 rounded-8" v-model="inputHTML" />
      <pre class="row-span-2 w-full overflow-scroll monospace smaller m-16 p-16 mt-0 rounded-8"><code>{{ previewCSS }}</code></pre>
    </div>
    <iframe class="flex-[4] pt-16 pr-16 w-full h-full border-none" :src="previewUrl" ref="previewEl" />
  </main>
</template>

<style scoped>
.playground {
  background-color: #fff;
}
.monospace {
  font-size: 1.4rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  background-color: white;
  border: 4px solid #eee;
}
.smaller {
  font-size: 1rem;
}
</style>
