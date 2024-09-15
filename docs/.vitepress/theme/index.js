import DefaultTheme from 'vitepress/theme';
import { onMounted, onUpdated, nextTick } from 'vue';
import mediumZoom from 'medium-zoom';

import './custom.css';

export default {
  ...DefaultTheme,
  setup() {
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
      initZoom();
    });

    onUpdated(() => {
      // Wait for the DOM to update before re-initializing zoom
      nextTick(() => {
        initZoom();
      });
    });
  },
};
