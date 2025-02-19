<script setup lang="ts">
import { computed, ComputedRef, defineComponent, onMounted, ref, watch } from 'vue'
import GameItem from '@/components/GameList/GameListItem.vue'
import GameItemSkeleton from '@/components/GameList/GameListItemSkeleton.vue'
import { useRoute, useRouter } from 'vue-router'
import { useFetchGames } from '@/composables/useFetchGames'
import { TABS, TEXT } from '@/utils/constants'
import { useQuery } from '@tanstack/vue-query'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

defineComponent({
  components: {
    GameItem,
    GameItemSkeleton,
  },
})

const loading = ref<boolean>(false)
const error = ref<boolean>(false)
const games = ref<object[]>([])
const currentPage = ref<number>(1)
const itemsPerPage = ref<number>(10)
const searchQuery = ref<string>('')

const route = useRoute()
const router = useRouter()

const { data, isLoading, refetch } = useQuery<GameInfo[]>({
  queryKey: computed(() => ['games', route.query.tab]),
  queryFn: () => useFetchGames(route.query.tab),
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 10,
})

const filteredGames: ComputedRef<GameInfo[]> = computed(() => {
  return games.value.filter((game) =>
    searchQuery?.value?.toLowerCase()
      ? game.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      : game.name,
  )
})

const paginatedGames: ComputedRef<GameInfo[]> = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredGames.value.slice(start, end)
})

const paginationLength: ComputedRef<number> = computed(() =>
  Math.ceil(filteredGames.value.length / itemsPerPage.value),
)

onMounted(() => {
  if (route.query.tab) {
    refetch().then((r) => {
      games.value = r.data
    })
  } else {
    router.push({ name: 'Home', query: { tab: TABS[0].route } })
  }
})

watch(data, (v) => {
  if (v) {
    games.value = v
  }
})

watch(route, (newRoute) => {
  const newTab = newRoute.query.tab
  if (newTab) {
    currentPage.value = 1
  }
})
</script>

<template>
  <NavigationDrawer />
  <v-main width="100vw">
    <v-sheet class="mx-10 my-5 rounded-lg">
      <v-card class="mx-auto rounded-lg">
        <v-text-field
          class="px-6 py-4"
          max-width="500"
          density="compact"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          label="Search Game"
          clearable
          v-model.lazy="searchQuery"
          single-line
        ></v-text-field>
        <v-container fluid class="px-6 py-1">
          <v-row dense justify="center">
            <GameItemSkeleton v-if="isLoading || loading" />
            <template v-if="paginatedGames.length > 0">
              <GameItem :gameInfo="game" v-for="game in paginatedGames" :key="game.id" />
            </template>
            <v-empty-state
              v-if="error"
              :action-text="TEXT.actionText"
              image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/connection.svg"
              :text="TEXT.errorText"
              :title="TEXT.errorTitle"
              @click:action="refetch"
            ></v-empty-state>
            <v-pagination
              v-if="paginationLength > 0"
              v-model="currentPage"
              :length="paginationLength"
              total-visible="5"
            ></v-pagination>
          </v-row>
        </v-container>
      </v-card>
    </v-sheet>
  </v-main>
</template>

<style scoped></style>
