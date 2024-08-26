<template>
  <Layout>
    <template #layout-bottom>
      <ClientOnly>
        <div id="zoom-container"></div>
      </ClientOnly>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { onMounted } from 'vue'

const { Layout } = DefaultTheme

onMounted(() => {
  mediumZoom('[data-zoomable]', { 
    background: 'var(--vp-c-bg)',
    container: '#zoom-container'
  })
})
</script>

<style>
.medium-zoom-overlay {
  z-index: 20;
}
.medium-zoom-image {
  z-index: 21;
}
</style>
