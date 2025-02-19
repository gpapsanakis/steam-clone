<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import type { Movie, Screenshot } from '@/types'

const props = defineProps<{
  screenshots: Screenshot[]
  movies: Movie[]
}>()

const carouselRef: Ref<HTMLElement | null> = ref(null)
const activeCarouselItem: Ref<number> = ref(0)

watch(activeCarouselItem, () => {
  const videos = carouselRef.value?.$el.querySelectorAll('video')
  videos?.forEach((video) => {
    video.pause()
  })
})
</script>

<template>
  <v-carousel
    cycle
    show-arrows
    delimiter-icon="mdi-square"
    height="250"
    hide-delimiter-background
    ref="carouselRef"
    v-model="activeCarouselItem"
  >
    <v-carousel-item
      v-for="screenshot in screenshots"
      :key="screenshot.id"
      :lazy-src="screenshot.path_thumbnail"
      :src="screenshot.path_full"
      cover
    ></v-carousel-item>
    <v-window-item class="v-carousel-item" v-for="movie in movies" :key="movie.id">
      <video controls>
        <source :src="movie.webm.max" type="video/webm" />
      </video>
    </v-window-item>
  </v-carousel>
</template>

<style scoped>
.v-carousel-item :deep(video) {
  height: 100%;
  width: 100%;
}
</style>
