<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter, page } = useData()

const home = withBase('/')

const PLACEHOLDER_INTRO = "Product designer based in Berlin. I see details others don't."

const intro = computed(() => {
  const value = frontmatter.value?.intro
  return typeof value === 'string' && value.trim() ? value.trim() : PLACEHOLDER_INTRO
})

const lines = computed(() => {
  const parts = intro.value.match(/[^.]+(?:\.|$)/g)
  const sentences = parts?.map((part) => part.trim()).filter(Boolean)
  return sentences?.length ? sentences : [intro.value]
})

</script>

<template>
  <div class="page">
    <div class="column">
      <main>
        <div v-if="page.isNotFound" class="missing">
          <h1>This page doesn’t exist.</h1>
          <nav class="links" aria-label="Links">
            <a class="home" :href="home">Egor Gorev</a>
          </nav>
        </div>

        <template v-else>
          <h1>Egor Gorev</h1>
          <!-- PLACEHOLDER INTRO: edit the `intro` field in docs/index.md -->
          <p class="bio">
            <span v-for="(line, index) in lines" :key="index">{{ line }}</span>
          </p>
          <nav class="links" aria-label="Links">
            <a class="no-icon" href="https://x.com/eg0rev" target="_blank" rel="noopener noreferrer">
              <span class="label">X</span><span class="arrow" aria-hidden="true">↗</span><span class="sr"> (opens in a new tab)</span>
            </a>
            <a class="no-icon" href="https://instagram.com/egorev" target="_blank" rel="noopener noreferrer">
              <span class="label">Instagram</span><span class="arrow" aria-hidden="true">↗</span><span class="sr"> (opens in a new tab)</span>
            </a>
          </nav>
        </template>
      </main>
    </div>
  </div>
</template>
