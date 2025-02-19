<script setup lang="ts">
import GameInfoCarousel from './GameInfoCarousel.vue'
import GameInfoChip from './GameInfoChip.vue'
import GameInfoPublisher from './GameInfoPublisher.vue'
import GameInfoPrice from './GameInfoPrice.vue'
import { computed, ComputedRef, defineComponent } from 'vue'
import { ThemeInstance, useTheme } from 'vuetify'
import { GameInfo } from '@/types/GameInfo'

defineComponent({
  components: {
    GameInfoCarousel,
    GameInfoChip,
    GameInfoPublisher,
    GameInfoPrice,
  },
})

const { data } = defineProps<{ data: GameInfo }>()

const screenshots: ComputedRef<GameInfo['screenshots'] | undefined> = computed(() => {
  return data.screenshots
})

const movies: ComputedRef<GameInfo['movies'] | undefined> = computed(() => {
  return data.movies
})

const priceOverview: ComputedRef<GameInfo['price_overview'] | undefined> = computed(() => {
  return data.price_overview
})

const theme: ThemeInstance = useTheme()
</script>

<template>
  <v-container :class="{ 'container-white': !theme.global.current.value.dark }">
    <GameInfoCarousel :screenshots="screenshots" :movies="movies" />
    <v-img :src="data.header_image" max-height="250" class="w-75 mx-auto my-10"></v-img>
    <v-card-title class="w-100 mx-auto px-10">{{ data.name }}</v-card-title>
    <v-card-text class="w-100 mx-auto px-10">{{ data.short_description }}</v-card-text>
    <GameInfoChip :categories="data.categories" />
    <v-row no-gutters class="w-100 mx-auto px-sm-5 px-md-10 py-5">
      <v-col cols="6">
        <GameInfoPublisher
          :publishers="data.publishers?.currency"
          :developers="data.developers[0]"
          :releaseDate="data.release_date.date"
          :website="data.website"
        />
      </v-col>
      <v-col cols="6">
        <GameInfoPrice :priceOverview="priceOverview" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.container-white {
  background-color: #ffffff;
}
</style>
