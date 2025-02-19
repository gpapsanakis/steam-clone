<script setup lang="ts">
import { defineComponent, defineProps } from 'vue'
import GameListItemPrice from './GameListItemPrice.vue'
import GameListItemPlatforms from './GameListItemPlatforms.vue'
import GameListItemChip from './GameListItemChip.vue'
import { TEXT } from '@/utils/constants'
import { useDisplay } from 'vuetify'
import { useRouter } from 'vue-router'

defineComponent({
  components: {
    GameListItemPrice,
    GameListItemPlatforms,
    GameListItemChip,
  },
})
const { gameInfo } = defineProps({
  gameInfo: Object,
})

const { mdAndUp, smAndDown } = useDisplay()
const router = useRouter()

const showGame = () => {
  router.push({ name: 'GameInfoView', params: { id: gameInfo.id } })
}
</script>

<template>
  <v-col class="cursor-pointer" cols="12" @click="showGame">
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
      <v-card class="game-card" :elevation="isHovering ? 16 : 2" v-bind="props">
        <div class="d-flex flex-no-wrap" :class="{ 'flex-column': smAndDown }">
          <v-img
            rounded
            :max-width="smAndDown ? '100%' : '200'"
            class="ma-3"
            :lazy-src="gameInfo.header_image"
            :src="gameInfo.header_image"
          ></v-img>
          <div :class="{ 'mx-auto': smAndDown, 'w-auto': smAndDown, 'w-75': mdAndUp }">
            <v-card-title class="text-h5 pb-0 text-wrap" :class="{ 'text-center': smAndDown }"
              >{{ gameInfo.name }}
            </v-card-title>
            <v-row class="ma-0 w-75" v-show="isHovering" v-if="mdAndUp">
              <v-card-text class="text-medium-emphasis text-caption px-2 py-0">
                {{ gameInfo.short_description }}
              </v-card-text>
            </v-row>
            <v-row class="ma-0" v-show="!isHovering" v-if="mdAndUp">
              <GameListItemChip :gameCategories="gameInfo.categories" />
            </v-row>
            <v-row class="ma-0" v-show="!isHovering || smAndDown">
              <GameListItemPlatforms
                :releaseDate="gameInfo.release_date"
                :platforms="gameInfo.platforms"
              />
            </v-row>
          </div>
        </div>
        <GameListItemPrice :priceOverview="gameInfo.price_overview" />
        <div
          v-if="gameInfo.release_date.coming_soon"
          class="text-h7 bg-blue-grey-darken-3 soon"
          :class="{ 'position-absolute': mdAndUp, 'mx-auto': smAndDown }"
        >
          {{ TEXT.comingSoon }}
        </div>
      </v-card>
    </v-hover>
  </v-col>
</template>

<style scoped>
.soon {
  padding: 0.5rem;
  bottom: 5px;
  right: 10px;
  width: fit-content;
}

.game-card.v-theme--dark {
  background-color: #33383e;
}

.game-card.v-theme--light {
  background-color: #f5f5f5;
}
</style>
