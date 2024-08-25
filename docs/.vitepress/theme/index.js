import DefaultTheme from 'vitepress/theme'
import PhotoSwipe from 'vitepress-plugin-photoswipe'
import 'photoswipe/style.css'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PhotoSwipe)
  }
}
