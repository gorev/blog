import DefaultTheme from 'vitepress/theme'
import './custom.css'
import mediumZoom from 'medium-zoom'
import { onMounted } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.mixin({
      mounted() {
        onMounted(() => {
          mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
        })
      }
    })
  }
}
