const observerOpts = { childList: true, attributes: false, subtree: false }

export class WarpThemeHelper {
  #scriptEl
  #styleEl

  constructor(controlsParent = document) {
    this.#scriptEl = controlsParent.querySelector('script[data-theme]')
    this.#styleEl = controlsParent.querySelector('link[data-theme]')
  }

  get theme() {
    return JSON.parse(this.#scriptEl.textContent).theme
  }

  watch(_cb) {
    const cb = () => _cb(this.theme)
    const observer = new MutationObserver(cb)
    observer.observe(this.#scriptEl, observerOpts)
    cb()
  }

  setTheme(theme = 'warp-io') {
    this.#scriptEl.textContent = JSON.stringify({ theme })
  }

  setupThemeSwap() {
    this.watch(this.#handleThemeSwap.bind(this))
  }

  #handleThemeSwap(theme) {
    this.#styleEl.setAttribute('href', `/lab-2/${theme}.css`)
  }
}

