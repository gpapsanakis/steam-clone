<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { useFetchGameInfo } from '@/composables/useFetchGameInfo'
import { computed, defineComponent } from 'vue'
import { useDisplay } from 'vuetify'
import GameInfoCarousel from '@/components/GameInfo/GameInfoCarousel.vue'
import GameInfoAbout from '@/components/GameInfo/GameInfoAbout.vue'
import GameInfoChip from '@/components/GameInfo/GameInfoChip.vue'
import GameInfoPublisher from '@/components/GameInfo/GameInfoPublisher.vue'
import GameInfoPrice from '@/components/GameInfo/GameInfoPrice.vue'
import { TEXT } from '@/utils/constants'

defineComponent({
  components: {
    GameInfoCarousel,
    GameInfoAbout,
    GameInfoChip,
    GameInfoPublisher,
    GameInfoPrice,
  },
})

const route = useRoute()

const { data, error, refetch } = useQuery<GameInfo>({
  queryKey: computed(() => ['game-info', route.params.id]),
  queryFn: () => useFetchGameInfo(route.params.id),
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 10,
})

const { smAndDown } = useDisplay()

const aboutTheGame: ComputedRef<string | undefined> = computed(() => {
  return data.value?.about_the_game
})

const screenshots: ComputedRef<GameInfo['screenshots'] | undefined> = computed(() => {
  return data.value?.screenshots
})

const movies: ComputedRef<GameInfo['movies'] | undefined> = computed(() => {
  return data.value?.movies
})

const priceOverview: ComputedRef<GameInfo['price_overview'] | undefined> = computed(() => {
  return data.value?.price_overview
})
</script>

<template>
  <v-empty-state
    v-if="error"
    :action-text="TEXT.actionText"
    image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/connection.svg"
    :text="TEXT.errorText"
    :title="TEXT.errorTitle"
    @click:action="refetch"
  ></v-empty-state>
  <v-main v-if="data">
    <v-parallax :src="data.background">
      <v-row no-gutters :class="{ 'flex-column': smAndDown }">
        <v-col sm="12" md="6">
          <GameInfoAbout :aboutTheGame="aboutTheGame" />
        </v-col>
        <v-col sm="12" md="6">
          <v-card
            class="mx-auto py-10 px-16 d-flex flex-column justify-center overflow-auto"
            height="100%"
            max-height="1200"
          >
            <GameInfoCarousel :screenshots="screenshots" :movies="movies" />
            <v-card class="py-10">
              <v-img :src="data.header_image" max-height="250" height="250"></v-img>
              <v-card-title class="mx-auto">{{ data.name }}</v-card-title>
              <v-card-text class="w-auto">{{ data.short_description }}</v-card-text>
            </v-card>
            <GameInfoChip :categories="data.categories" />
            <v-row no-gutters>
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
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
  </v-main>
</template>

<style scoped></style>
