import hljs from 'highlight.js'
import 'highlight.js/scss/tomorrow-night-bright.scss'

export default {
  mounted(el: { querySelectorAll: (arg0: string) => any }) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: HTMLElement) => {
      hljs.highlightBlock(block)
    })
  }
}
