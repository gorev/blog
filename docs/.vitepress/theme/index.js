import DefaultTheme from 'vitepress/theme';
import { onMounted, watch } from 'vue';
import { useRouter } from 'vitepress';
import mediumZoom from 'medium-zoom';

import './custom.css';

export default {
  ...DefaultTheme,
  setup() {
    const router = useRouter();
    let zoom;

    const initZoom = () => {
      // Detach any existing zoom instances
      if (zoom) {
        zoom.detach();
      }
      // Initialize medium-zoom
      zoom = mediumZoom('[data-zoomable]', {
        background: 'var(--vp-c-bg)',
      });
    };

    onMounted(() => {
      initZoom();

      // Watch for route changes
      watch(
        () => router.route.path,
        () => {
          initZoom();
        }
      );
    });
  },
};
