import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';

import './custom.css';

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute();
    let zoom;

    const initZoom = () => {
      // Detach any existing zoom instances to prevent duplicates
      if (zoom) {
        zoom.detach();
      }

      // Initialize medium-zoom on images with the data-zoomable attribute
      zoom = mediumZoom('[data-zoomable]', {
        background: 'var(--vp-c-bg)',
      });
    };

    onMounted(() => {
      // Initialize zoom on first load
      initZoom();

      // Watch for route changes
      watch(
        () => route.path,
        () => {
          // Wait for the DOM to update
          nextTick(() => {
            initZoom();
          });
        }
      );
    });
  },
};
