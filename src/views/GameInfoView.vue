<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { useFetchGameInfo } from '@/composables/useFetchGameInfo'
import { computed, ComputedRef, defineComponent } from 'vue'
import { ThemeInstance, useDisplay, useTheme } from 'vuetify'
import GameInfoCarousel from '@/components/GameInfo/GameInfoCarousel.vue'
import GameInfoAbout from '@/components/GameInfo/GameInfoAbout.vue'
import GameInfoChip from '@/components/GameInfo/GameInfoChip.vue'
import GameInfoPublisher from '@/components/GameInfo/GameInfoPublisher.vue'
import GameInfoPrice from '@/components/GameInfo/GameInfoPrice.vue'
import GameInfoDetails from '@/components/GameInfo/GameInfoDetails.vue'
import { TEXT } from '@/utils/constants'

defineComponent({
  components: {
    GameInfoCarousel,
    GameInfoAbout,
    GameInfoChip,
    GameInfoPublisher,
    GameInfoPrice,
    GameInfoDetails,
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
const theme: ThemeInstance = useTheme()

const aboutTheGame: ComputedRef<string | undefined> = computed(() => {
  return data.value?.about_the_game
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
      <v-row no-gutters :class="{ 'flex-column': smAndDown }" class="w-75 mx-auto">
        <v-col cols="12" md="6" class="pt-5">
          <GameInfoAbout :aboutTheGame="aboutTheGame" />
        </v-col>
        <v-col cols="12" md="6" class="pt-5">
          <GameInfoDetails :data="data" />
        </v-col>
      </v-row>
    </v-parallax>
  </v-main>
</template>

<style scoped></style>
